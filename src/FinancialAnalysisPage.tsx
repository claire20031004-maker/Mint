import { ChevronLeft, ArrowRight, AlertTriangle } from "lucide-react";

export function FinancialAnalysisPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute inset-0 z-50 bg-[#EAFDFD] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center px-6 pt-12 pb-4 shrink-0">
        <button onClick={onBack} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <ChevronLeft className="w-5 h-5 text-[#0A1A24]" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-12 hide-scrollbar px-6 text-[#0A1A24]">
        
        {/* Total Analysis Card */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-[#03FDFF] relative mb-6">
          <div className="absolute top-4 right-5 px-3 py-1.5 bg-[#EAFDFD] text-[#2A8F90] text-[10px] font-bold rounded-full tracking-wider uppercase">
            T2 · Transitioning
          </div>
          
          <div className="text-center mt-10 mb-8">
            <h2 className="text-[#3A505F] text-[11px] font-bold tracking-widest uppercase mb-1">This month</h2>
            <h3 className="text-[#0A1A24] font-bold text-lg">Beyond Index</h3>
          </div>

          <div className="flex justify-center mb-8 relative">
            {/* Visual Circular Progress */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="#EAFDFD" 
                  strokeWidth="8"
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="#03FDFF" 
                  strokeWidth="8" 
                  strokeDasharray={`${48 * 2.827} ${100 * 2.827}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-[40px] font-black text-[#0A1A24] leading-none mb-1">48%</span>
                <span className="text-[10px] font-bold text-[#7A8A96] tracking-widest uppercase">Beyond index</span>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[#F1F5F8] w-full mb-6"></div>

          <div className="flex">
            <div className="flex-[1.2] flex flex-col justify-center border-r border-[#F1F5F8] pr-4">
              <span className="text-[28px] font-black text-[#0A1A24] leading-none mb-1 text-center">43%</span>
              <span className="text-[10px] font-bold text-[#7A8A96] tracking-widest uppercase text-center">Red covers spending</span>
            </div>
            <div className="flex-[1] flex flex-col justify-center items-center pl-4">
              <span className="text-[11px] font-bold text-[#7A8A96] tracking-widest uppercase mb-2">Distance to T3</span>
              <div className="bg-[#EAFDFD] text-[#0A1A24] px-4 py-1.5 rounded-full font-bold text-[13px]">
                32% to go
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Analysis Card */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-[#F1F5F8]">
          
          {/* Step 1 */}
          <div className="relative pl-10 mb-8 mt-2">
            <div className="absolute left-0 top-0 w-6 h-6 bg-[#EBE0F4] rounded-lg flex items-center justify-center font-bold text-[#6D4C8C] text-sm z-10">1</div>
            <div className="absolute left-[11px] top-8 bottom-[-40px] w-0.5 bg-[#F1F5F8]"></div>
            
            <h4 className="text-[#2A8F90] text-[11px] font-bold tracking-widest uppercase mb-2">What happened</h4>
            <div className="flex justify-between items-center mb-4 gap-1">
               <span className="font-bold text-[#0A1A24] text-[14px] leading-tight whitespace-nowrap">Spending this month</span>
               <span className="font-bold text-[#0A1A24] text-[16px] whitespace-nowrap">HKD 4,600</span>
            </div>

            <div className="text-[#A6B8C4] text-[10px] font-bold tracking-widest uppercase mb-3">Spending breakdown</div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="w-[68px] text-[13px] font-bold text-[#0A1A24] whitespace-nowrap">Self-earn</span>
                <div className="flex-1 h-3.5 bg-[#F1F5F8] rounded-full overflow-hidden flex">
                  <div className="bg-[#EFA7A7] h-full" style={{ width: '43%' }} />
                </div>
                <span className="w-8 text-right font-bold text-[#D04141] text-[12px]">43%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-[68px] text-[13px] font-bold text-[#0A1A24] whitespace-nowrap">Save</span>
                <div className="flex-1 h-3.5 bg-[#F1F5F8] rounded-full overflow-hidden flex">
                  <div className="bg-[#A8D3A8] h-full" style={{ width: '31%' }} />
                </div>
                <span className="w-8 text-right font-bold text-[#2A8F90] text-[12px]">31%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-[68px] text-[13px] font-bold text-[#0A1A24] whitespace-nowrap">Support</span>
                <div className="flex-1 h-3.5 bg-[#F1F5F8] rounded-full overflow-hidden flex">
                  <div className="bg-[#A6BEF5] h-full" style={{ width: '26%' }} />
                </div>
                <span className="w-8 text-right font-bold text-[#3B73ED] text-[12px]">26%</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative pl-10 mb-8 pt-4">
            <div className="absolute left-0 top-4 w-6 h-6 bg-[#F4E9CD] rounded-lg flex items-center justify-center font-bold text-[#8C6D4C] text-sm z-10">2</div>
            <div className="absolute left-[11px] top-12 bottom-[-40px] w-0.5 bg-[#F1F5F8]"></div>
            
            <h4 className="text-[#2A8F90] text-[11px] font-bold tracking-widest uppercase mb-2">Why it happened</h4>
            <div className="text-[#A6B8C4] text-[10px] font-bold tracking-widest uppercase mb-4">Where blue money is still being spent</div>
            
            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-4">
                <span className="w-[70px] text-[13px] font-bold text-[#0A1A24]">Dining</span>
                <div className="flex-1 h-3.5 bg-[#F1F5F8] rounded-full overflow-hidden flex">
                  <div className="bg-[#A6BEF5] h-full" style={{ width: '60%' }} />
                </div>
                <span className="w-8 text-right font-bold text-[#3B73ED] text-[12px]">60%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-[70px] text-[13px] font-bold text-[#0A1A24]">Transport</span>
                <div className="flex-1 h-3.5 bg-[#F1F5F8] rounded-full overflow-hidden flex">
                  <div className="bg-[#A6BEF5] h-full" style={{ width: '25%' }} />
                </div>
                <span className="w-8 text-right font-bold text-[#3B73ED] text-[12px]">25%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-[70px] text-[13px] font-bold text-[#0A1A24]">Other</span>
                <div className="flex-1 h-3.5 bg-[#F1F5F8] rounded-full overflow-hidden flex">
                  <div className="bg-[#A6BEF5] h-full" style={{ width: '15%' }} />
                </div>
                <span className="w-8 text-right font-bold text-[#3B73ED] text-[12px]">15%</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative pl-10 mb-8 pt-4">
            <div className="absolute left-0 top-4 w-6 h-6 bg-[#CDEEF4] rounded-lg flex items-center justify-center font-bold text-[#4B8C95] text-sm z-10">3</div>
            <div className="absolute left-[11px] top-12 bottom-[-40px] w-0.5 bg-[#F1F5F8]"></div>
            
            <h4 className="text-[#2A8F90] text-[11px] font-bold tracking-widest uppercase mb-3">What it means</h4>
            
            <div className="bg-[#F5FBFD] rounded-2xl p-4 pl-5 border-l-4 border-[#03FDFF] mb-5">
              <p className="text-[#3A505F] text-[13px] font-medium leading-relaxed">
                You've successfully supported yourself for 12 days this month. While you still have some support funding, your reliance on it is steadily decreasing. You've taken a brave and important step toward financial independence and lifestyle freedom!
              </p>
            </div>

            <div className="flex justify-between items-center text-[11px] font-bold mb-2 gap-1">
              <span className="text-[#7A8A96] whitespace-nowrap">Distance to T3</span>
              <span className="text-[#2A8F90] whitespace-nowrap">Beyond Index 48% / 80%</span>
            </div>
            <div className="h-2 bg-[#F1F5F8] rounded-full overflow-hidden">
               <div className="h-full bg-[#03FDFF]" style={{ width: '60%' }} />
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative pl-10 pt-4">
            <div className="absolute left-0 top-4 w-6 h-6 bg-[#CDECD7] rounded-lg flex items-center justify-center font-bold text-[#4C8C5D] text-sm z-10">4</div>
            
            <h4 className="text-[#2A8F90] text-[11px] font-bold tracking-widest uppercase mb-4">What to do next</h4>
            
            <div className="bg-[#F8FBFC] rounded-[24px] p-5 shadow-sm border border-[#F1F5F8] mb-5">
              <div className="flex gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#03FDFF] text-[#0A1A24] font-black flex items-center justify-center shrink-0">
                  1
                </div>
                <p className="font-bold text-[14px] text-[#0A1A24] leading-snug pt-1.5">
                  Replace dining and transport with <span className="text-[#D04141]">red money</span>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#03FDFF] text-[#0A1A24] font-black flex items-center justify-center shrink-0">
                  2
                </div>
                <p className="font-bold text-[14px] text-[#0A1A24] leading-snug pt-1.5">
                  Move <span className="text-[#2A8F90]">HKD 500</span> of green money to fixed deposit
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[16px] p-4 border border-[#F1F5F8] flex items-center gap-3 mb-8 shadow-sm">
               <div className="w-6 h-6 bg-[#F1F5F8] rounded flex items-center justify-center text-sm shrink-0">
                 📈
               </div>
               <p className="text-[13px] font-bold text-[#0A1A24] leading-snug">
                 Beyond Index will rise to <span className="text-[#2A8F90]">55%+</span> next month
               </p>
            </div>
          </div>

          <button className="w-full py-[16px] bg-[#03FDFF] hover:bg-[#00E5FF] text-[#0A1A24] rounded-full font-bold text-[14px] sm:text-[15px] flex items-center justify-center gap-1.5 transition-all shadow-sm px-2 overflow-hidden">
             <span className="whitespace-nowrap shrink truncate">View investment suggestions</span>
             <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={3} />
          </button>
        </div>

        <div className="h-6"></div>
      </div>
    </div>
  );
}
