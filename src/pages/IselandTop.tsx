// src/pages/IselandTop.tsx
import React, { useState } from 'react';
import { ModalType, useModal } from '../store/modalStore';

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

// Components
const TopMenu = ({ onGuideClick, onLoginClick }: { onGuideClick: () => void; onLoginClick: () => void }) => (
  <div className="flex justify-between items-center pt-6">
    <h1 className="font-bold text-gray-800">💖 جزیره قلب</h1>
    <div className="flex items-center gap-3">
      <button className="rounded-xl bg-white shadow-lg h-12 px-4 text-black" onClick={onGuideClick}>
        📚 راهنما
      </button>
      <button className="rounded-xl bg-white shadow-lg h-12 px-4 text-black" onClick={onLoginClick}>
        ورود
      </button>
    </div>
  </div>
);

const TrustBadges = () => (
  <div className="bg-green-950 text-white backdrop-blur-sm rounded-2xl p-6 shadow-lg">
    <div className="grid grid-cols-2 gap-6 text-center">
      <div className="p-4">
        <p className="text-3xl font-bold">$2.4M+</p>
        <p className="text-sm mt-2">پرداخت شده به کاربران</p>
      </div>
      <div className="p-4">
        <p className="text-3xl font-bold">47,283</p>
        <p className="text-sm mt-2">کاربران خوشحال</p>
      </div>
    </div>
  </div>
);

const MoneyFlowSection = () => (
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">💰 چطور پول در میاری</h2>

    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 mb-4">
      <div className="text-center">
        <div className="text-xl font-bold text-green-700 mb-1">شما: 1$ → 10M قلب 💖</div>
        <p className="text-sm text-gray-600">40% = 0.4$ برمی‌گرده</p>
      </div>
    </div>

    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 mb-4">
      <div className="text-center">
        <div className="text-xl font-bold text-blue-700 mb-1">دوستان: هر 1$ → 0.5$ برای شما 💵</div>
        <p className="text-sm text-gray-600">دعوت کنید و پول دریافت کنید</p>
      </div>
    </div>

    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-4">
      <div className="text-center">
        <div className="text-lg font-bold text-gray-700 mb-2">🎯 مثال: 2 دوست دعوت کنید</div>
        <div className="text-2xl font-bold text-green-600">0.4$ + 1$ = 1.4$ درآمد</div>
        <p className="text-xs text-gray-500 mt-1">از 1$ سرمایه اولیه</p>
      </div>
    </div>
  </div>
);

const StatsCard = ({ icon, title, value, subtitle, bgGradient }: {
  icon: string; title: string; value: string; subtitle: string; bgGradient: string;
}) => (
  <div className="bg-gradient-to-br from-white to-[#F8F9FA] rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
    <div className={`w-12 h-12 mx-auto mb-3 ${bgGradient} rounded-xl flex items-center justify-center`}>
      <span className="text-lg">{icon}</span>
    </div>
    <h3 className="text-sm font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-xl font-bold text-blue-600">{value}</p>
    <p className="text-xs text-gray-600 mt-1">{subtitle}</p>
  </div>
);

const PersonalStats = ({ data }: { data: EarningsData }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-800">📊 آمار شما</h2>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-green-400 rounded-full me-2 animate-pulse"></div>
        <span className="text-sm font-medium text-gray-600">زنده</span>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <StatsCard
        icon="💰"
        title="توکن خریداری شده"
        value={`${data.tokensPurchased} USDT`}
        subtitle="= 25,000,000 قلب"
        bgGradient="bg-gradient-to-r from-[#E1F5FE] to-[#B3E5FC]"
      />
      <StatsCard
        icon="👥"
        title="افراد دعوت شده"
        value={data.peopleInvited.toString()}
        subtitle="دوستان فعال"
        bgGradient="bg-gradient-to-r from-[#FFF8E1] to-[#FFF3C4]"
      />
      <StatsCard
        icon="🌐"
        title="کل زیرمجموعه"
        value={data.totalDownline.toString()}
        subtitle="اندازه شبکه"
        bgGradient="bg-gradient-to-r from-[#E8F5E8] to-[#C8E6C9]"
      />
      <StatsCard
        icon="💵"
        title="USDT کسب شده"
        value={`$${data.usdtEarned.toFixed(2)}`}
        subtitle="از زیرمجموعه"
        bgGradient="bg-gradient-to-r from-[#E8F5E8] to-[#C8E6C9]"
      />
    </div>

    <div className="mt-6 bg-gradient-to-r from-[#E1F5FE] to-[#B3E5FC] rounded-xl p-4">
      <h3 className="text-sm font-bold text-gray-800 mb-3">💰 تفکیک درآمد</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-white/90 rounded-xl">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-[#64B5F6] to-[#42A5F5] text-white rounded-lg flex items-center justify-center text-xs font-bold me-3">L1</div>
            <span className="text-sm font-medium text-gray-700">مستقیم ({data.peopleInvited})</span>
          </div>
          <span className="text-sm font-bold text-green-600">${data.directEarnings.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-white/90 rounded-xl">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-[#FFD54F] to-[#FFC107] text-white rounded-lg flex items-center justify-center text-xs font-bold me-3">L2</div>
            <span className="text-sm font-medium text-gray-700">سطح 2 (109)</span>
          </div>
          <span className="text-sm font-bold text-green-600">${data.level2Earnings.toFixed(2)}</span>
        </div>
      </div>
    </div>

      <button className='p-4 rounded-xl from-green-800 to-green-950 bg-gradient-to-b  w-full mt-4 ' >برداشت تتر</button>

  </div>
);

const LiveEarningsCard = ({ earning }: { earning: LiveEarning }) => (
  <div className="bg-gradient-to-r from-white to-[#F8F9FA] rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-14 h-14 bg-gradient-to-r from-[#FFD54F] to-[#FFC107] rounded-xl flex items-center justify-center text-xl font-bold me-4 shadow-md">
          {earning.icon}
        </div>
        <div>
          <p className="font-bold text-gray-800">{earning.username} درآمد کسب کرد</p>
          <p className="text-sm text-gray-600">{earning.friends} دوست پیوستند!</p>
        </div>
      </div>
      <div className="text-end">
        <p className="text-xl font-bold text-green-600">+${earning.amount} USDT</p>
        <p className="text-xs text-gray-500">{earning.timeAgo}</p>
      </div>
    </div>
  </div>
);

const LiveEarnings = ({ earnings }: { earnings: LiveEarning[] }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-xl font-bold text-gray-800">🔥 درآمدهای لحظه‌ای</h3>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-green-400 rounded-full me-2 animate-pulse"></div>
        <span className="text-sm font-medium text-gray-600">زنده</span>
      </div>
    </div>
    <div className="space-y-4">
      {earnings.map((earning) => (
        <LiveEarningsCard key={earning.id} earning={earning} />
      ))}
    </div>
  </div>
);

const FixedFooter = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 z-50 p-4">
    <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
      <button className="bg-gradient-to-r from-[#81C784] to-[#66BB6A] hover:from-[#66BB6A] hover:to-[#4CAF50] text-white font-bold py-5 px-6 rounded-2xl text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
        <span className="flex items-center justify-center">
          <span className="me-3">💖</span>
          خرید قلب
        </span>
      </button>
      <button className="bg-gradient-to-r from-[#64B5F6] to-[#42A5F5] hover:from-[#42A5F5] hover:to-[#2196F3] text-white font-bold py-5 px-6 rounded-2xl text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
        <span className="flex items-center justify-center">
          <span className="me-3">💰</span>
          دعوت دوست
        </span>
      </button>
    </div>
  </div>
);

// Main Component
const IselandTop: React.FC = () => {
  const [earningsData] = useState<EarningsData>({
    tokensPurchased: 2.5,
    peopleInvited: 47,
    totalDownline: 156,
    usdtEarned: 1247.50,
    directEarnings: 847.50,
    level2Earnings: 320.00
  });

  const [liveEarnings] = useState<LiveEarning[]>([
    { id: 1, username: 'اسلند کینگ', friends: 3, amount: 127, timeAgo: '5 ثانیه پیش', icon: '💎' },
    { id: 2, username: 'استاد قلب', friends: 5, amount: 245, timeAgo: '23 ثانیه پیش', icon: '🚀' },
    { id: 3, username: 'رئیس کریپتو', friends: 1, amount: 45, timeAgo: '1 دقیقه پیش', icon: '⭐' }
  ]);

  const guideModal = useModal(ModalType.GUIDE);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F8FF] to-[#E8F4FD] relative pb-32">
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <TopMenu onGuideClick={() => guideModal.open()} onLoginClick={() => guideModal.open()} />
          <TrustBadges />
          <PersonalStats data={earningsData} />
          <MoneyFlowSection />
          <LiveEarnings earnings={liveEarnings} />
        </div>
      </div>
      <FixedFooter />
    </div>
  );
};

export default IselandTop;