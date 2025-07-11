import React, { useState } from 'react';

interface EarningsData {
  tokensPurchased: number;
  peopleInvited: number;
  totalDownline: number;
  usdtEarned: number;
  directEarnings: number;
  level2Earnings: number;
}

interface LiveEarning {
  id: number;
  username: string;
  friends: number;
  amount: number;
  timeAgo: string;
  icon: string;
}

const IselandTop: React.FC = () => {
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [earningsData] = useState<EarningsData>({
    tokensPurchased: 2.5,
    peopleInvited: 47,
    totalDownline: 156,
    usdtEarned: 1247.50,
    directEarnings: 847.50,
    level2Earnings: 320.00
  });

  const [liveEarnings] = useState<LiveEarning[]>([
    {
      id: 1,
      username: 'islandking',
      friends: 3,
      amount: 127,
      timeAgo: '5 seconds ago',
      icon: '💎'
    },
    {
      id: 2,
      username: 'heartmaster',
      friends: 5,
      amount: 245,
      timeAgo: '23 seconds ago',
      icon: '🚀'
    },
    {
      id: 3,
      username: 'cryptoboss',
      friends: 1,
      amount: 45,
      timeAgo: '1 minute ago',
      icon: '⭐'
    }
  ]);

  const openGuideModal = () => {
    setShowGuideModal(true);
  };

  const closeGuideModal = () => {
    setShowGuideModal(false);
  };

  const handleBuyHeartCoins = () => {
    console.log('Buy Heart Coins clicked');
  };

  const handleShareReferralLink = () => {
    console.log('Share Referral Link clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F8FF] to-[#E8F4FD] relative pb-32">
      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {/* Top Menu Bar */}
          <div className="flex justify-between items-center pt-6">
            <div className="flex items-center space-x-4">
              <button className="bg-white/90 backdrop-blur-sm rounded-xl size-12 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="text-xl">☰</span>
              </button>
              <h1 className="text-xl font-bold text-gray-800">💖 Heart Island</h1>
            </div>

            <div className="flex items-center space-x-3">
              <button className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="flex items-center justify-center">
                  <span className="text-lg mr-2">📚</span>
                  راهنما
                </span>
              </button>
              <button className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="flex items-center justify-center">
                  <span className="text-lg mr-2">💰</span>
                  Withdraw
                </span>
              </button>
            </div>
          </div>

          {/* Quick Actions */}
        

          {/* Compact Money Multiplier Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              💰 How Your Money Multiplies
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Buy Hearts */}
              <div className="bg-gradient-to-br from-[#E8F5E8] to-[#F1F8E9] rounded-xl p-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600 mb-2">
                    1 TON → 10M Hearts
                  </div>
                  <p className="text-xs text-gray-600">💖 Your Purchase</p>
                </div>
              </div>

              {/* Earn USDT */}
              <div className="bg-gradient-to-br from-[#E1F5FE] to-[#B3E5FC] rounded-xl p-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 mb-2">
                    Friends Buy → USDT
                  </div>
                  <p className="text-xs text-gray-600">💵 Your Earnings</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFF8E1] to-[#FFF3C4] rounded-xl p-3 text-center">
              <p className="text-sm font-medium text-gray-700">
                <span className="text-lg">🎁</span> Invite friends & earn USDT from their purchases!
              </p>
            </div>
          </div>

          {/* Personal Stats Dashboard */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">📊 Your Stats</h2>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Live</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Tokens Purchased */}
              <div className="bg-gradient-to-br from-white to-[#F8F9FA] rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-[#E1F5FE] to-[#B3E5FC] rounded-xl flex items-center justify-center">
                  <span className="text-lg">💰</span>
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">Tokens Purchased</h3>
                <p className="text-xl font-bold text-blue-600">
                  {earningsData.tokensPurchased} TON
                </p>
                <p className="text-xs text-gray-600 mt-1">= 25,000,000 Hearts</p>
              </div>

              {/* People Invited */}
              <div className="bg-gradient-to-br from-white to-[#F8F9FA] rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-[#FFF8E1] to-[#FFF3C4] rounded-xl flex items-center justify-center">
                  <span className="text-lg">👥</span>
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">People Invited</h3>
                <p className="text-xl font-bold text-orange-600">
                  {earningsData.peopleInvited}
                </p>
                <p className="text-xs text-gray-600 mt-1">Active Friends</p>
              </div>

              {/* Total Downline */}
              <div className="bg-gradient-to-br from-white to-[#F8F9FA] rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-[#E8F5E8] to-[#C8E6C9] rounded-xl flex items-center justify-center">
                  <span className="text-lg">🌐</span>
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">Total Downline</h3>
                <p className="text-xl font-bold text-green-600">
                  {earningsData.totalDownline}
                </p>
                <p className="text-xs text-gray-600 mt-1">Network Size</p>
              </div>

              {/* USDT Earned */}
              <div className="bg-gradient-to-br from-white to-[#F8F9FA] rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-[#E8F5E8] to-[#C8E6C9] rounded-xl flex items-center justify-center">
                  <span className="text-lg">💵</span>
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">USDT Earned</h3>
                <p className="text-xl font-bold text-green-600">
                  ${earningsData.usdtEarned.toFixed(2)}
                </p>
                <p className="text-xs text-gray-600 mt-1">From downline</p>
              </div>
            </div>

            {/* Earnings Breakdown */}
            <div className="mt-6 bg-gradient-to-r from-[#E1F5FE] to-[#B3E5FC] rounded-xl p-4">
              <h3 className="text-sm font-bold text-gray-800 mb-3">💰 Earnings Breakdown</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/90 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#64B5F6] to-[#42A5F5] text-white rounded-lg flex items-center justify-center text-xs font-bold mr-3">
                      L1
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      Direct ({earningsData.peopleInvited})
                    </span>
                  </div>
                  <span className="text-sm font-bold text-green-600">
                    ${earningsData.directEarnings.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/90 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#FFD54F] to-[#FFC107] text-white rounded-lg flex items-center justify-center text-xs font-bold mr-3">
                      L2
                    </div>
                    <span className="text-sm font-medium text-gray-700">Level 2 (109)</span>
                  </div>
                  <span className="text-sm font-bold text-green-600">
                    ${earningsData.level2Earnings.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Earnings Ticker */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">🔥 Live Earnings Right Now</h3>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">LIVE</span>
              </div>
            </div>
            <div className="space-y-4">
              {liveEarnings.map((earning) => (
                <div key={earning.id} className="bg-gradient-to-r from-white to-[#F8F9FA] rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-gradient-to-r from-[#FFD54F] to-[#FFC107] rounded-xl flex items-center justify-center text-xl font-bold mr-4 shadow-md">
                        {earning.icon}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{earning.username} just earned</p>
                        <p className="text-sm text-gray-600">{earning.friends} friends joined!</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-green-600">+${earning.amount} USDT</p>
                      <p className="text-xs text-gray-500">{earning.timeAgo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-4">
                <p className="text-3xl font-bold text-gray-800">$2.4M+</p>
                <p className="text-sm text-gray-600 mt-2">Paid to Users</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-gray-800">47,283</p>
                <p className="text-sm text-gray-600 mt-2">Happy Earners</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Footer with CTA Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 z-50 p-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
          <button
            onClick={handleBuyHeartCoins}
            className="bg-gradient-to-r from-[#81C784] to-[#66BB6A] hover:from-[#66BB6A] hover:to-[#4CAF50] text-white font-bold py-5 px-6 rounded-2xl text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <span className="flex items-center justify-center">
              <span className="text-2xl mr-3">💖</span>
              Buy Heart Coins
            </span>
          </button>

          <button
            onClick={handleShareReferralLink}
            className="bg-gradient-to-r from-[#64B5F6] to-[#42A5F5] hover:from-[#42A5F5] hover:to-[#2196F3] text-white font-bold py-5 px-6 rounded-2xl text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <span className="flex items-center justify-center">
              <span className="text-2xl mr-3">💰</span>
              Share Referral
            </span>
          </button>
        </div>
      </div>

      {/* Guide Modal */}
      {showGuideModal && (
        <div className="fixed z-50 left-0 top-0 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
          {/* Modal content would go here */}
        </div>
      )}
    </div>
  );
};

export default IselandTop;