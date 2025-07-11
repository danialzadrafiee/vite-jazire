#!/bin/bash

# Configuration
SERVER_USER="root"
SERVER_HOST="144.172.109.157"
PROJECT_PATH="/var/www/vite-jazire"
PM2_PROCESS="jazire-99001"
NVM_PATH="/root/.nvm/nvm.sh"

# Deployment options
INSTALL_DEPS=false

# Function to parse command line arguments
parse_args() {
    while [[ $# -gt 0 ]]; do
        case $1 in
            --install)
                INSTALL_DEPS=true
                shift
                ;;
            --install=*)
                local value="${1#*=}"
                if [[ "$value" =~ ^(true|yes|1)$ ]]; then
                    INSTALL_DEPS=true
                elif [[ "$value" =~ ^(false|no|0)$ ]]; then
                    INSTALL_DEPS=false
                else
                    echo "❌ Invalid value for --install: $value" >&2
                    echo "   Valid values: true, false, yes, no, 1, 0" >&2
                    exit 1
                fi
                shift
                ;;
            -h|--help)
                show_help
                exit 0
                ;;
            *)
                echo "❌ Unknown option: $1" >&2
                show_help
                exit 1
                ;;
        esac
    done
}

# Function to show help
show_help() {
    cat <<EOF
Usage: $0 [OPTIONS]

OPTIONS:
    --install[=VALUE]   Install dependencies using pnpm
                       Values: true|false|yes|no|1|0
                       Default: false
                       
    -h, --help         Show this help message

Examples:
    $0                    # Deploy without installing dependencies
    $0 --install          # Deploy and install dependencies
EOF
}

# Function to execute remote deployment
deploy() {
    local install_cmd=""
    if [[ "$INSTALL_DEPS" == true ]]; then
        install_cmd="pnpm install"
        echo "📦 Dependencies will be installed"
    else
        echo "⏭️  Skipping dependency installation"
    fi
    
    local remote_commands=$(cat <<EOF
source ${NVM_PATH}
cd ${PROJECT_PATH}
git reset --hard
git pull
${install_cmd}
pm2 restart ${PM2_PROCESS}
EOF
)
    
    echo "🚀 Connecting to ${SERVER_USER}@${SERVER_HOST}..."
    ssh ${SERVER_USER}@${SERVER_HOST} "${remote_commands}"
}

# Main execution
main() {
    parse_args "$@"
    
    echo "Starting deployment process..."
    echo "Configuration:"
    echo "  Server: ${SERVER_USER}@${SERVER_HOST}"
    echo "  Project: ${PROJECT_PATH}"
    echo "  PM2 Process: ${PM2_PROCESS}"
    echo "  Install Dependencies: ${INSTALL_DEPS}"
    echo ""
    
    if deploy; then
        echo "✅ Deployment completed successfully!"
    else
        echo "❌ Deployment failed!" >&2
        exit 1
    fi
}

# Run the script
main "$@"