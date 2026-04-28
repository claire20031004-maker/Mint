import { ChevronLeft, Download, Trophy, Target, Star, Gift, Key, Check, Plus, Search, Tag, X, FileText, ChevronDown, TrendingUp, User } from "lucide-react";
import { useState } from "react";

export function BeyondDiaryPage({ onBack }: { onBack: () => void }) {
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>(null);
  const [selectedReward, setSelectedReward] = useState<string | null>(null);
  const [isRewardConfirmed, setIsRewardConfirmed] = useState(false);
  const [showLotteryModal, setShowLotteryModal] = useState(false);
  const [lotteryState, setLotteryState] = useState<'idle' | 'loading' | 'lost'>('idle');
  const [showJobsModal, setShowJobsModal] = useState(false);

  const handleLotteryClick = () => {
    setLotteryState('loading');
    setTimeout(() => {
      setLotteryState('lost');
    }, 1500);
  };

  const handleToggleMilestone = (id: string) => {
    if (expandedMilestone === id) {
      setExpandedMilestone(null);
    } else {
      setExpandedMilestone(id);
    }
  };

  return (
    <div className="absolute inset-0 z-50 bg-[#EAFDFD] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 pt-12 shrink-0">
        <button onClick={onBack} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/60 rounded-full font-bold text-[#0A1A24] text-xs shadow-sm">
          <ChevronLeft className="w-4 h-4" strokeWidth={3} />
          JOURNEY LOG
        </button>
        <button className="w-9 h-9 bg-white/60 rounded-full flex items-center justify-center shadow-sm">
          <Download className="w-4 h-4 text-[#0A1A24]" strokeWidth={2.5} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-12 hide-scrollbar px-6 text-[#0A1A24]">
        
        <h1 className="text-3xl font-black mb-2 mt-4">Beyond Diary</h1>
        <p className="text-[#3A505F] text-[15px] font-medium leading-snug mb-8 pr-4">
          Track your milestones and celebrate every step toward financial independence.
        </p>

        {/* Stats Row */}
        <div className="bg-white rounded-[32px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex justify-between items-start mb-8">
          <div className="flex flex-col items-center flex-1">
            <div className="relative w-16 h-16 rounded-full border-4 border-[#F1F5F8] flex items-center justify-center mb-3">
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#0A1A24] border-r-[#0A1A24] border-b-[#0A1A24] -rotate-45" />
              <Trophy className="w-6 h-6 text-[#A6B8C4]" strokeWidth={2} />
            </div>
            <div className="text-xl font-black leading-none mb-1">12</div>
            <div className="text-[10px] font-bold text-[#7A8A96] uppercase tracking-wider">MILESTONES</div>
          </div>
          
          <div className="w-[1px] h-12 bg-[#F1F5F8] mt-6" />

          <div className="flex flex-col items-center flex-1">
            <div className="relative w-16 h-16 rounded-full border-4 border-[#F1F5F8] flex items-center justify-center mb-3">
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#03FDFF] border-r-[#03FDFF] border-l-[#03FDFF] -rotate-12" />
              <Target className="w-6 h-6 text-[#03FDFF]" strokeWidth={2} />
            </div>
            <div className="text-xl font-black leading-none mb-1">3</div>
            <div className="text-[10px] font-bold text-[#7A8A96] uppercase tracking-wider">ACTIVE GOALS</div>
          </div>

          <div className="w-[1px] h-12 bg-[#F1F5F8] mt-6" />

          <div className="flex flex-col items-center flex-1">
            <div className="relative w-16 h-16 rounded-full border-4 border-[#F1F5F8] flex items-center justify-center mb-3">
              <div className="absolute inset-0 rounded-full border-4 border-[#03FDFF]" />
              <Star className="w-6 h-6 text-[#0A1A24]" strokeWidth={2} />
            </div>
            <div className="text-xl font-black leading-none mb-1">40%</div>
            <div className="text-[10px] font-bold text-[#7A8A96] uppercase tracking-wider">BEYOND INDEX</div>
          </div>
        </div>

        {/* Milestone Timeline Title */}
        <div className="flex items-center gap-2 mb-6 ml-1">
          <div className="w-1.5 h-5 bg-[#0A1A24] rounded-full" />
          <h2 className="text-[17px] font-bold text-[#0A1A24]">Milestone Timeline</h2>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-12 pr-1">
          {/* Timeline Line */}
          <div className="absolute left-[23px] top-6 bottom-0 w-[2.5px] bg-[#D1D9E0]" />

          {/* MAR 15 */}
          <div className="relative mb-6">
            <div className="absolute -left-12 top-4 w-10 h-10 rounded-full bg-white border-[2.5px] border-[#8BD2FF] flex items-center justify-center shadow-sm z-10">
              <FileText className="w-5 h-5 text-[#8BD2FF]" strokeWidth={2.5} />
            </div>
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#F1F5F8]">
              <div className="flex justify-between items-start mb-1">
                <div className="text-[#A6B8C4] text-[11px] font-bold tracking-widest uppercase">MAR 15 · 2026</div>
                <button 
                  className="w-8 h-8 rounded-[10px] bg-[#EAFDFD] flex items-center justify-center"
                  onClick={() => setShowLotteryModal(true)}
                >
                  <Gift className="w-4 h-4 text-[#2A8F90]" strokeWidth={2.5} />
                </button>
              </div>
              <h3 className="font-bold text-[16px] mb-2 leading-tight">Monthly Report Ready</h3>
              <p className="text-[#3A505F] text-[13px] font-medium leading-relaxed">
                Your financial summary for this month is now available.
              </p>
            </div>
          </div>

          {/* MAR 08 */}
          <div className="relative mb-6">
            {/* Connection dot */}
            <div className="absolute -left-[30px] top-[40px] w-[5px] h-[5px] rounded-full bg-[#0A1A24] z-10" />
            <div className="absolute -left-12 top-4 w-10 h-10 rounded-full bg-[#8BD2FF] border border-[#8BD2FF] flex items-center justify-center shadow-sm z-10">
              <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#F1F5F8]">
              <div className="flex justify-between items-start mb-1">
                <div className="text-[#A6B8C4] text-[11px] font-bold tracking-widest uppercase">MAR 08 · 2026</div>
                <button className="h-7 px-2.5 rounded-[8px] bg-[#EAFDFD] flex items-center justify-center">
                  <span className="text-[#2A8F90] text-[11px] font-black">KEY</span>
                </button>
              </div>
              <h3 className="font-bold text-[16px] mb-2 leading-tight">Beyond Index: 40%</h3>
              <p className="text-[#3A505F] text-[13px] font-medium leading-relaxed">
                Your Independence Index surpassed 40%. Nearly halfway to independence.
              </p>
            </div>
          </div>

          {/* FEB 28 */}
          <div className="relative mb-6">
            <div className="absolute -left-12 top-4 w-10 h-10 rounded-full bg-[#526D82] border-2 border-white flex items-center justify-center shadow-sm z-10 ring-2 ring-[#526D82]/20">
              <Star className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            
            <div className={`bg-white rounded-3xl shadow-sm border border-[#F1F5F8] overflow-hidden transition-all duration-300 ${expandedMilestone === 'feb28' ? 'pb-5' : ''}`}>
              <div className="p-5 relative">
                <div className="flex justify-between items-start mb-1">
                  <div className="text-[#A6B8C4] text-[11px] font-bold tracking-widest uppercase">FEB 28 · 2026</div>
                  <button 
                    className="h-7 px-2.5 rounded-[8px] bg-[#EAFDFD] flex items-center justify-center cursor-pointer hover:bg-[#DDF6F8] transition-colors"
                    onClick={() => handleToggleMilestone('feb28')}
                  >
                    <span className="text-[#2A8F90] text-[11px] font-black">KEY</span>
                  </button>
                </div>
                <h3 className="font-bold text-[16px] mb-2 leading-tight">Savings: HKD 10,000</h3>
                <p className="text-[#3A505F] text-[13px] font-medium leading-relaxed">
                  Total savings crossed HKD 10k. Every dollar counts.
                </p>
              </div>

              {/* Collapsed content for FEB 28 */}
              {expandedMilestone === 'feb28' && (
                <div className="px-5 pt-0 border-t border-[#F1F5F8] mt-2 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="flex items-start gap-3 mt-5 mb-5">
                    <Star className="w-6 h-6 text-[#03FDFF] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[#0A1A24] text-base mb-1">Congratulations on saving your first HKD 10,000!</h4>
                      <p className="text-[#2A8F90] font-bold text-sm mb-3">It's time to learn how to earn and save money yourself!</p>
                      <p className="text-[#7A8A96] text-[12px] leading-relaxed">
                        Many college students think saving is enough when money is tight, but true financial independence starts with earning. Taking up part-time jobs is totally within your reach!
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 mb-3 text-[#A6B8C4]">
                      <User className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-bold">Real user stories</span>
                    </div>
                    
                    <div className="space-y-3">
                      {/* Person 1 */}
                      <div className="bg-[#F9FCFD] p-3.5 rounded-2xl flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#E5ECEE] text-[#7A8A96] font-bold flex items-center justify-center shrink-0">J</div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-[#0A1A24] text-sm">Jay</span>
                            <span className="text-[#A6B8C4] text-[11px]">3 months</span>
                          </div>
                          <p className="text-[#3A505F] text-xs leading-relaxed mb-1.5">
                            HKU Engineering student, taking part-time jobs 2 days a week. Earned HKD 32,000 and saved HKD 22,000 in 3 months!
                          </p>
                          <div className="flex items-center gap-3 text-[11px]">
                            <span className="text-[#7A8A96]">💰 Earned HKD 32,000</span>
                            <span className="text-[#2A8F90] font-bold">🪙 Saved HKD 22,000</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Person 2 */}
                      <div className="bg-[#F9FCFD] p-3.5 rounded-2xl flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#FFE5E5] text-[#FF7A7A] font-bold flex items-center justify-center shrink-0">M</div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-[#0A1A24] text-sm">May</span>
                            <span className="text-[#A6B8C4] text-[11px]">2 months</span>
                          </div>
                          <p className="text-[#3A505F] text-xs leading-relaxed mb-1.5">
                            Tutoring 3 days a week. Earned HKD 16,500 and saved HKD 13,000 in 2 months!
                          </p>
                          <div className="flex items-center gap-3 text-[11px]">
                            <span className="text-[#7A8A96]">💰 Earned HKD 16,500</span>
                            <span className="text-[#2A8F90] font-bold">🪙 Saved HKD 13,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button 
                    className="w-full py-3.5 bg-[#4B839E] text-white rounded-[20px] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#3A505F] transition-colors overflow-hidden px-4"
                    onClick={() => setShowJobsModal(true)}
                  >
                    <Search className="w-4 h-4 shrink-0" />
                    <span className="truncate">Find opportunities</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* FEB 01 */}
          <div className="relative mb-6">
            <div className="absolute -left-12 top-4 w-10 h-10 rounded-full bg-white border-[2.5px] border-[#D1D9E0] flex items-center justify-center shadow-sm z-10">
              <div className="w-2.5 h-4 border-b-2 border-r-2 border-[#D1D9E0] rotate-45 transform -translate-y-0.5" />
            </div>
            <div className={`bg-white rounded-3xl shadow-sm border border-[#F1F5F8] overflow-hidden transition-all duration-300 ${expandedMilestone === 'feb01' ? 'pb-5' : ''}`}>
              <div className="p-5 relative">
                <div className="flex justify-between items-start mb-1">
                  <div className="text-[#A6B8C4] text-[11px] font-bold tracking-widest uppercase">FEB 01 · 2026</div>
                  <button 
                    className={`w-8 h-8 rounded-[10px] ${expandedMilestone === 'feb01' ? 'bg-[#E5ECEE]' : 'bg-[#EAFDFD]'} flex items-center justify-center cursor-pointer transition-colors`}
                    onClick={() => handleToggleMilestone('feb01')}
                  >
                    {expandedMilestone === 'feb01' ? (
                      <ChevronDown className="w-4 h-4 text-[#7A8A96] rotate-180" strokeWidth={2.5} />
                    ) : (
                      <Gift className="w-4 h-4 text-[#2A8F90]" strokeWidth={2.5} />
                    )}
                  </button>
                </div>
                <h3 className="font-bold text-[16px] mb-2 leading-tight">First Income Received</h3>
                <p className="text-[#3A505F] text-[13px] font-medium leading-relaxed">
                  First earned income of HKD 3k deposited. Your red money journey begins.
                </p>
              </div>

              {/* Collapsed Reward Content */}
              {expandedMilestone === 'feb01' && (
                <div className="px-5 pt-0 border-t border-[#F1F5F8] animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="flex items-center gap-2 mt-5 mb-4">
                    <Gift className="w-4 h-4 text-[#2A8F90]" />
                    <span className="text-[11px] font-bold tracking-widest text-[#2A8F90] uppercase">CHOOSE ONE REWARD</span>
                    <span className="ml-auto text-[#A6B8C4] text-[11px] font-bold">3選1</span>
                  </div>

                  {!isRewardConfirmed ? (
                    <div className="space-y-3 mb-5">
                      {/* Reward 1 */}
                      <div 
                        className={`p-3 rounded-[20px] border-[2px] flex items-center justify-between cursor-pointer transition-all ${selectedReward === 'starbucks' ? 'border-[#03FDFF] bg-[#F1FCFC]' : 'border-[#F1F5F8] bg-white'}`}
                        onClick={() => setSelectedReward('starbucks')}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#F1F5F8] rounded-full flex items-center justify-center shrink-0">
                            ☕
                          </div>
                          <div>
                            <div className="font-bold text-[#0A1A24] text-[15px]">Starbucks</div>
                            <div className="text-[#7A8A96] text-[12px]">Grande Latte Voucher</div>
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-1 ${selectedReward === 'starbucks' ? 'border-[#03FDFF] bg-[#03FDFF]' : 'border-[#D1D9E0]'}`}>
                          {selectedReward === 'starbucks' && <Check className="w-3 h-3 text-[#0A1A24]" strokeWidth={3} />}
                        </div>
                      </div>

                      {/* Reward 2 */}
                      <div 
                        className={`p-3 rounded-[20px] border-[2px] flex items-center justify-between cursor-pointer transition-all ${selectedReward === 'luckin' ? 'border-[#03FDFF] bg-[#F1FCFC]' : 'border-[#F1F5F8] bg-white'}`}
                        onClick={() => setSelectedReward('luckin')}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#F1F5F8] rounded-full flex items-center justify-center shrink-0">
                            🦌
                          </div>
                          <div>
                            <div className="font-bold text-[#0A1A24] text-[15px]">瑞幸咖啡</div>
                            <div className="text-[#7A8A96] text-[12px]">Americano Coupon</div>
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-1 ${selectedReward === 'luckin' ? 'border-[#03FDFF] bg-[#03FDFF]' : 'border-[#D1D9E0]'}`}>
                          {selectedReward === 'luckin' && <Check className="w-3 h-3 text-[#0A1A24]" strokeWidth={3} />}
                        </div>
                      </div>

                      {/* Reward 3 */}
                      <div 
                        className={`p-3 rounded-[20px] border-[2px] flex items-center justify-between cursor-pointer transition-all ${selectedReward === 'tea' ? 'border-[#03FDFF] bg-[#F1FCFC]' : 'border-[#F1F5F8] bg-white'}`}
                        onClick={() => setSelectedReward('tea')}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#F1F5F8] rounded-full flex items-center justify-center shrink-0">
                            🧋
                          </div>
                          <div>
                            <div className="font-bold text-[#0A1A24] text-[15px]">再睡5分鐘</div>
                            <div className="text-[#7A8A96] text-[12px]">5-Min Nap Milk Tea</div>
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-1 ${selectedReward === 'tea' ? 'border-[#03FDFF] bg-[#03FDFF]' : 'border-[#D1D9E0]'}`}>
                          {selectedReward === 'tea' && <Check className="w-3 h-3 text-[#0A1A24]" strokeWidth={3} />}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#F1FCFC] rounded-[20px] pb-6 pt-8 flex flex-col items-center justify-center mt-2 border border-[#E5F9FA]">
                      <div className="w-14 h-14 bg-[#03FDFF] rounded-full flex items-center justify-center shadow-md mb-4 text-[#0A1A24]">
                        <Check className="w-7 h-7" strokeWidth={3} />
                      </div>
                      <div className="font-bold text-[#0A1A24] text-lg mb-1">
                        {selectedReward === 'starbucks' ? 'Starbucks' : selectedReward === 'luckin' ? '瑞幸咖啡' : '再睡5分鐘'}
                      </div>
                      <div className="text-[#7A8A96] text-[13px] mb-4">
                         {selectedReward === 'starbucks' ? 'Grande Latte Voucher' : selectedReward === 'luckin' ? 'Americano Coupon' : '5-Min Nap Milk Tea'}
                      </div>
                      <div className="bg-[#EAFDFD] text-[#2A8F90] px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} /> CLAIMED
                      </div>
                    </div>
                  )}

                  {!isRewardConfirmed && selectedReward && (
                     <button 
                        className="w-full py-4 rounded-[20px] bg-[#0A1A24] text-white font-bold text-[15px] shadow-sm hover:opacity-90 transition-opacity"
                        onClick={() => setIsRewardConfirmed(true)}
                     >
                       Confirm Selection
                     </button>
                  )}
                  {!isRewardConfirmed && !selectedReward && (
                     <button 
                        className="w-full py-4 rounded-[20px] bg-[#E5ECEE] text-[#A6B8C4] font-bold text-[15px] cursor-not-allowed"
                        disabled
                     >
                       Select a Reward
                     </button>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="h-6"></div>
          
        </div>
      </div>

      {/* Lottery Modal */}
      {showLotteryModal && (
        <div className="absolute inset-0 z-[60] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#0A1A24]/60 backdrop-blur-sm" onClick={() => setShowLotteryModal(false)} />
          <div className="relative bg-[#F8FBFC] w-full rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm z-10"
              onClick={() => setShowLotteryModal(false)}
            >
              <X className="w-5 h-5 text-[#3A505F]" />
            </button>

            <div className="p-6 pt-10 text-center relative overflow-hidden bg-white rounded-[32px] m-1 pb-8">
              <div className="flex items-center justify-center gap-1.5 text-[#2A8F90] mb-3">
                <Gift className="w-4 h-4" />
                <span className="text-[11px] font-bold tracking-widest uppercase">MONTHLY LOTTERY</span>
              </div>
              <h2 className="text-[22px] font-extrabold text-[#0A1A24] mb-2 leading-tight">Popmart 限量公仔抽獎</h2>
              <p className="text-[#7A8A96] text-[13px] font-medium mb-8">儲滿 HKD 10,000 即可參加</p>

              <div className="flex justify-center mb-8 relative">
                {/* Visual Box */}
                <div className={`w-[120px] h-[120px] rounded-3xl flex items-center justify-center mx-auto transition-all duration-300 ${lotteryState === 'idle' ? 'bg-[#EAFDFD]' : 'bg-[#F1F5F8]'}`}>
                  {lotteryState === 'idle' && (
                     <div className="flex flex-col items-center">
                        <Gift className="w-10 h-10 text-[#03FDFF] mb-2" strokeWidth={1.5} />
                        <span className="text-[#2A8F90] text-[11px] font-bold">限量公仔</span>
                     </div>
                  )}
                  {lotteryState === 'loading' && (
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 border-4 border-[#E5ECEE] border-t-[#03FDFF] rounded-full animate-spin mb-2" />
                    </div>
                  )}
                  {lotteryState === 'lost' && (
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm mb-2 text-[#A6B8C4]">
                         ✨
                      </div>
                      <span className="text-[#7A8A96] text-[11px] font-bold">再接再厲</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between px-2 mb-8 text-center divide-x divide-[#F1F5F8]">
                 <div className="flex-[1]">
                    <div className="font-black text-[#0A1A24] text-xl mb-1">10</div>
                    <div className="text-[#A6B8C4] text-[10px] font-bold">得獎名額</div>
                 </div>
                 <div className="flex-[1.5]">
                    <div className="font-black text-[#0A1A24] text-xl mb-1">13,000+</div>
                    <div className="text-[#A6B8C4] text-[10px] font-bold">參加人數</div>
                 </div>
                 <div className="flex-[1]">
                    <div className="font-black text-[#0A1A24] text-xl mb-1">每月</div>
                    <div className="text-[#A6B8C4] text-[10px] font-bold">結算一次</div>
                 </div>
              </div>

              {lotteryState === 'idle' && (
                <button 
                  className="w-full py-4 rounded-[20px] bg-[#03FDFF] text-[#0A1A24] font-bold text-[16px] flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(3,253,255,0.3)] hover:brightness-105 active:scale-95 transition-all"
                  onClick={handleLotteryClick}
                >
                  <Star className="w-5 h-5" /> 立即抽獎
                </button>
              )}
              {lotteryState === 'loading' && (
                <button 
                  className="w-full py-4 rounded-[20px] bg-[#F1F5F8] text-[#7A8A96] font-bold text-[16px] flex items-center justify-center gap-2"
                  disabled
                >
                  抽獎進行中...
                </button>
              )}
              {lotteryState === 'lost' && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-3 text-[#A6B8C4]">
                    <span className="text-lg">😞</span>
                    <span className="font-bold text-[13px] text-[#3A505F]">這次沒中獎</span>
                  </div>
                  <p className="text-[#7A8A96] text-[11px] mb-4">下個月再試試！繼續儲錢增加機會</p>
                  <button 
                    className="w-full py-4 rounded-[20px] bg-[#EAFDFD] text-[#2A8F90] font-bold text-[16px] flex items-center justify-center gap-2 hover:bg-[#DDF6F8]"
                    onClick={() => setLotteryState('idle')}
                  >
                    再抽一次
                  </button>
                </div>
              )}
              
              <div className="text-center mt-4">
                 <span className="text-[#A6B8C4] text-[10px]">每個月結算一次，儲得越多中獎機會越高</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Offer Today Modals */}
      {showJobsModal && (
        <div className="absolute inset-0 z-[60] flex flex-col justify-end">
          <div 
            className="absolute inset-0 bg-[#0A1A24]/50 backdrop-blur-[2px]"
            onClick={() => setShowJobsModal(false)}
          />
          <div className="relative bg-[#F8FBFC] rounded-t-[32px] w-full h-[85vh] flex flex-col animate-in slide-in-from-bottom-full duration-300 shadow-[0_-8px_32px_rgba(0,0,0,0.1)]">
            <div className="w-full flex justify-center pt-4 pb-2 shrink-0">
              <div className="w-12 h-1 bg-[#D1D9E0] rounded-full"></div>
            </div>
            
            <div className="px-6 flex items-center justify-between py-2 shrink-0">
               <div>
                  <div className="flex items-center gap-2 mb-1">
                     <span className="bg-[#0A1A24] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">OFFER TODAY</span>
                     <span className="text-[#A6B8C4] text-[10px] font-bold">by BOSS直聘</span>
                  </div>
                  <h2 className="text-[#3A505F] text-[13px] font-bold">Find the best job opportunities</h2>
               </div>
               <button onClick={() => setShowJobsModal(false)} className="text-[#7A8A96] text-xs font-bold bg-[#EAFDFD] px-3 py-1.5 rounded-full">
                 Close
               </button>
            </div>

            <div className="px-6 py-3 shrink-0">
               <div className="relative">
                  <Search className="w-4 h-4 text-[#A6B8C4] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Search jobs, companies..." 
                    className="w-full bg-white rounded-full py-3 pl-10 pr-4 text-[14px] text-[#0A1A24] focus:outline-none border border-[#F1F5F8] shadow-sm"
                  />
               </div>
            </div>

            <div className="flex overflow-x-auto hide-scrollbar px-6 gap-2 pb-4 pt-1 shrink-0">
               {['All', 'Tech', 'Finance', 'Service', 'Tutoring'].map((tag, i) => (
                  <button key={i} className={`shrink-0 px-4 py-1.5 rounded-full text-[13px] font-bold transition-colors ${i === 1 ? 'bg-[#03FDFF] text-[#0A1A24]' : 'bg-white text-[#7A8A96] border border-[#F1F5F8]'}`}>
                     {tag}
                  </button>
               ))}
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-8 space-y-4">
               {/* Job 1 */}
               <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#F1F5F8]">
                  <div className="flex justify-between items-start mb-2">
                     <h3 className="font-bold text-[#0A1A24] text-[16px]">Junior Frontend Developer</h3>
                     <span className="text-[#A6B8C4] text-[10px] font-bold bg-[#F1F5F8] px-2 py-0.5 rounded-md">URGENT</span>
                  </div>
                  <div className="text-[#3A505F] text-[13px] mb-3">TechFlow HK</div>
                  <div className="font-bold text-[#2A8F90] text-[15px] mb-4">HKD 18,000 - 25,000</div>
                  <div className="flex items-center gap-2 mb-4">
                     <span className="text-[#A6B8C4] text-[12px] flex items-center gap-1"><div className="w-3 h-3 bg-[#EAFDFD] rounded-full flex items-center justify-center shrink-0" /> Central, HK</span>
                  </div>
                  <div className="flex gap-2">
                     <span className="px-2.5 py-1 bg-[#F9FCFD] border border-[#F1F5F8] text-[#7A8A96] rounded-md text-[11px] font-medium">React</span>
                     <span className="px-2.5 py-1 bg-[#F9FCFD] border border-[#F1F5F8] text-[#7A8A96] rounded-md text-[11px] font-medium">Remote OK</span>
                     <span className="px-2.5 py-1 bg-[#F9FCFD] border border-[#F1F5F8] text-[#7A8A96] rounded-md text-[11px] font-medium">Fresh Grad</span>
                  </div>
               </div>

               {/* Job 2 */}
               <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#F1F5F8]">
                  <div className="flex justify-between items-start mb-2">
                     <h3 className="font-bold text-[#0A1A24] text-[16px]">Data Analyst Intern</h3>
                  </div>
                  <div className="text-[#3A505F] text-[13px] mb-3">Finnova Asia</div>
                  <div className="font-bold text-[#2A8F90] text-[15px] mb-4">HKD 15,000 - 20,000</div>
                  <div className="flex items-center gap-2 mb-4">
                     <span className="text-[#A6B8C4] text-[12px] flex items-center gap-1"><div className="w-3 h-3 bg-[#EAFDFD] rounded-full flex items-center justify-center shrink-0" /> Wanchai, HK</span>
                  </div>
                  <div className="flex gap-2">
                     <span className="px-2.5 py-1 bg-[#F9FCFD] border border-[#F1F5F8] text-[#7A8A96] rounded-md text-[11px] font-medium">Python</span>
                     <span className="px-2.5 py-1 bg-[#F9FCFD] border border-[#F1F5F8] text-[#7A8A96] rounded-md text-[11px] font-medium">SQL</span>
                     <span className="px-2.5 py-1 bg-[#F9FCFD] border border-[#F1F5F8] text-[#7A8A96] rounded-md text-[11px] font-medium">Part-time</span>
                  </div>
               </div>

               {/* Job 3 */}
               <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#F1F5F8]">
                  <div className="flex justify-between items-start mb-2">
                     <h3 className="font-bold text-[#0A1A24] text-[16px]">Part-time Barista</h3>
                     <span className="text-[#A6B8C4] text-[10px] font-bold bg-[#F1F5F8] px-2 py-0.5 rounded-md">URGENT</span>
                  </div>
                  <div className="text-[#3A505F] text-[13px] mb-3">GreenLeaf Cafe Chain</div>
                  <div className="font-bold text-[#2A8F90] text-[15px] mb-4">HKD 65 - 80 /hr</div>
                  <div className="flex items-center gap-2 mb-4">
                     <span className="text-[#A6B8C4] text-[12px] flex items-center gap-1"><div className="w-3 h-3 bg-[#EAFDFD] rounded-full flex items-center justify-center shrink-0" /> Mong Kok, HK</span>
                  </div>
                  <div className="flex gap-2">
                     <span className="px-2.5 py-1 bg-[#F9FCFD] border border-[#F1F5F8] text-[#7A8A96] rounded-md text-[11px] font-medium">Flexible</span>
                     <span className="px-2.5 py-1 bg-[#F9FCFD] border border-[#F1F5F8] text-[#7A8A96] rounded-md text-[11px] font-medium">Student OK</span>
                  </div>
               </div>
               
               <button className="w-full bg-[#EAFDFD] text-[#2A8F90] rounded-[20px] py-4 font-bold text-[15px] mt-2 mb-8 border border-[#DDF6F8]">
                 View all jobs →
               </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
