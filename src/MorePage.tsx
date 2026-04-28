import { X, Calendar, Palette, TrendingUp, CreditCard, BookOpen, Target, PiggyBank, RefreshCcw, HandCoins, Receipt, Landmark, Clock, User, Shield } from "lucide-react";

export function MorePage({ onClose, onNavigate }: { onClose: () => void, onNavigate: (page: string) => void }) {
  const moxYouthItems = [
    { icon: <Calendar className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />, label: "Time Capsule", active: true },
    { icon: <Palette className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />, label: "Money Coloring", active: true, action: 'money-coloring' },
    { icon: <TrendingUp className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />, label: "Beyond Index", active: true, action: 'beyond-index' },
    { icon: <CreditCard className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />, label: "Beyond Card", active: true, action: 'beyond-card' },
    { icon: <BookOpen className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />, label: "Beyond Diary", active: true, action: 'beyond-diary' },
    { icon: <Target className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />, label: "Weekly Budget", active: true, action: 'weekly-budget' },
  ];

  const earnMoreInterestItems = [
    { icon: <PiggyBank className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />, label: "Savings", active: true },
    { icon: <RefreshCcw className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />, label: "Flexiboost", active: true },
    { icon: <HandCoins className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />, label: "Deposit", active: true },
    { icon: <Receipt className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />, label: "Bills", active: true },
  ];

  const spendAndBorrowItems = [
    { icon: <Landmark className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />, label: "Bank", active: true },
    { icon: <Clock className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />, label: "History", active: true },
    { icon: <User className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />, label: "Profile", active: true },
    { icon: <Shield className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />, label: "Security", active: true },
  ];

  const renderIconItem = (item: any, index: number) => (
    <div 
      key={index} 
      className="flex flex-col items-center gap-2 cursor-pointer"
      onClick={() => {
        if (item.action) {
          onNavigate(item.action);
        }
      }}
    >
      <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center relative shadow-sm border border-[#F1F5F8] ${item.active ? 'bg-gradient-to-b from-[#E6FAFA] to-[#F3FCFC]' : 'bg-[#F9FCFD] opacity-50'}`}>
        {item.icon}
        {item.active && (
          <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#03FDFF] shadow-[0_0_8px_rgba(3,253,255,0.8)]"></div>
        )}
      </div>
      <span className={`text-[11px] font-bold text-center leading-tight whitespace-pre-wrap ${item.active ? 'text-[#0A1A24]' : 'text-[#A6B8C4]'}`}>
        {item.label.replace(' ', '\n')}
      </span>
    </div>
  );

  return (
    <div className="absolute inset-0 z-40 flex flex-col justify-end pointer-events-none">
      {/* Bottom Sheet Modal */}
      <div className="bg-white/95 backdrop-blur-xl w-full h-[95%] rounded-t-[40px] shadow-[0_-8px_32px_rgba(0,0,0,0.1)] flex flex-col pointer-events-auto animate-in slide-in-from-bottom-full duration-300">
        
        {/* Drag Handle */}
        <div className="w-full flex justify-center pt-3 pb-1">
          <div className="w-12 h-1 bg-[#D1D9E0] rounded-full"></div>
        </div>

        {/* Header */}
        <div className="relative flex items-center justify-center py-4 border-b border-[#F1F5F8]">
          <button 
            onClick={onClose}
            className="absolute left-6 w-10 h-10 rounded-full flex items-center justify-center active:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-[#0A1A24]" />
          </button>
          <h2 className="text-lg font-bold text-[#0A1A24]">More</h2>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
          
          <div className="px-6 py-6">
            <h3 className="text-xl font-bold text-[#0A1A24] mb-6">Mox Youth</h3>
            <div className="grid grid-cols-4 gap-y-6 gap-x-2">
              {moxYouthItems.map(renderIconItem)}
            </div>
          </div>

          <div className="px-6 pb-6">
            <h3 className="text-xl font-bold text-[#0A1A24] mb-6">Earn more interest</h3>
            <div className="grid grid-cols-4 gap-y-6 gap-x-2">
              {earnMoreInterestItems.map(renderIconItem)}
            </div>
          </div>

          <div className="px-6 pb-6">
            <h3 className="text-xl font-bold text-[#0A1A24] mb-6">Spend & borrow</h3>
            <div className="grid grid-cols-4 gap-y-6 gap-x-2">
              {spendAndBorrowItems.map(renderIconItem)}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
