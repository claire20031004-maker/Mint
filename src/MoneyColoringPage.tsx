import { ChevronLeft, Info, Plus, Minus } from "lucide-react";
import { MoneyJarSvg } from "./App";

export function MoneyColoringPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute inset-0 z-50 bg-[#EAFDFD] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 pt-12 shrink-0">
        <button onClick={onBack} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <ChevronLeft className="w-6 h-6 text-[#0A1A24]" />
        </button>
        <h1 className="text-lg font-bold text-[#0A1A24]">Money Coloring</h1>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <Info className="w-5 h-5 text-[#0A1A24]" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-12 hide-scrollbar">
        {/* Total Income Section */}
        <div className="text-center mt-2 mb-6">
          <p className="text-[10px] font-bold tracking-widest text-[#556976] uppercase mb-1">Total income · this cycle</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-2xl font-bold text-[#03FDFF]">HKD</span>
            <span className="text-[40px] font-black text-[#0A1A24] leading-none tracking-tight">4,600</span>
          </div>
        </div>

        {/* Jar Container */}
        <div className="mx-6 bg-white rounded-[32px] p-6 pt-10 pb-8 flex items-center justify-center shadow-[0_8px_24px_rgba(3,253,255,0.06)] mb-8">
          <div className="w-full max-w-[280px] aspect-[7/8] relative">
            <MoneyJarSvg fillPercentage={60} breakdowns={[{type: 'pink', prop: 43}, {type: 'green', prop: 31}, {type: 'blue', prop: 26}]} />
          </div>
        </div>

        {/* Descriptive Text */}
        <div className="px-6 mb-5">
          <h2 className="text-[22px] font-bold text-[#0A1A24] leading-tight mb-2">
            Your income comes in three forms.
          </h2>
          <p className="text-[#3A505F] text-sm leading-relaxed">
            Each color shows where the money came from — and how much of it is truly yours.
          </p>
        </div>

        {/* Breakdown Cards */}
        <div className="mx-6 bg-white rounded-[24px] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] mb-8 flex flex-col gap-6">
          {/* Red */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#FF9B9B] to-[#D94141] shadow-sm"></div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-bold text-[#0A1A24] text-[15px]">Red</span>
                  <span className="text-[#7A8A96] text-[13px] font-medium">· Earned Money</span>
                </div>
              </div>
              <span className="font-bold text-[#0A1A24]">HKD 1,980</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-[#F1F5F8] rounded-full overflow-hidden">
                <div className="h-full bg-[#E35252] rounded-full" style={{ width: '43%' }}></div>
              </div>
              <span className="font-bold text-[#0A1A24] text-[13px] w-8 text-right">43%</span>
            </div>
          </div>

          {/* Green */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#87E8A0] to-[#3DB45E] shadow-sm"></div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-bold text-[#0A1A24] text-[15px]">Green</span>
                  <span className="text-[#7A8A96] text-[13px] font-medium">· Control Money</span>
                </div>
              </div>
              <span className="font-bold text-[#0A1A24]">HKD 1,420</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-[#F1F5F8] rounded-full overflow-hidden">
                <div className="h-full bg-[#9DECAE] rounded-full" style={{ width: '31%' }}></div>
              </div>
              <span className="font-bold text-[#0A1A24] text-[13px] w-8 text-right">31%</span>
            </div>
          </div>

          {/* Blue */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#8BD2FF] to-[#3094DB] shadow-sm"></div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-bold text-[#0A1A24] text-[15px]">Blue</span>
                  <span className="text-[#7A8A96] text-[13px] font-medium">· Supported Money</span>
                </div>
              </div>
              <span className="font-bold text-[#0A1A24]">HKD 1,200</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-[#F1F5F8] rounded-full overflow-hidden">
                <div className="h-full bg-[#03FDFF] rounded-full" style={{ width: '26%' }}></div>
              </div>
              <span className="font-bold text-[#0A1A24] text-[13px] w-8 text-right">26%</span>
            </div>
          </div>
        </div>

        {/* Recent Transactions Header */}
        <div className="px-6 flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#0A1A24]">Recent transactions</h3>
          <button className="text-[#03BFC1] text-sm font-bold">See all</button>
        </div>

        {/* Recent Transactions List */}
        <div className="mx-6 bg-white rounded-[24px] p-2 shadow-[0_4px_24px_rgba(0,0,0,0.03)] mb-8">
          {/* Item 1 */}
          <div className="flex items-center justify-between p-3 border-b border-[#F1F5F8] last:border-0">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#E35252] flex items-center justify-center shrink-0">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col flex-1 min-w-0 mr-3">
                <span className="font-bold text-[#0A1A24] text-sm truncate">Part-time · café</span>
                <span className="text-[#7A8A96] text-[11px] font-medium truncate">Earned · Apr 15</span>
              </div>
            </div>
            <span className="font-bold text-[#0A1A24] whitespace-nowrap shrink-0">+ HKD 1,200</span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between p-3 border-b border-[#F1F5F8] last:border-0">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#03FDFF] flex items-center justify-center shrink-0">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col flex-1 min-w-0 mr-3">
                <span className="font-bold text-[#0A1A24] text-sm truncate">Family transfer · Mum</span>
                <span className="text-[#7A8A96] text-[11px] font-medium truncate">Support · Apr 12</span>
              </div>
            </div>
            <span className="font-bold text-[#0A1A24] whitespace-nowrap shrink-0">+ HKD 1,200</span>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-between p-3 border-b border-[#F1F5F8] last:border-0">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#E35252] flex items-center justify-center shrink-0">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col flex-1 min-w-0 mr-3">
                <span className="font-bold text-[#0A1A24] text-sm truncate">Freelance design</span>
                <span className="text-[#7A8A96] text-[11px] font-medium truncate">Earned · Apr 09</span>
              </div>
            </div>
            <span className="font-bold text-[#0A1A24] whitespace-nowrap shrink-0">+ HKD 780</span>
          </div>
          
          {/* Item 4 */}
          <div className="flex items-center justify-between p-3 border-b border-[#F1F5F8] last:border-0">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#A6B8C4] flex items-center justify-center shrink-0">
                 <Minus className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col flex-1 min-w-0 mr-3">
                <span className="font-bold text-[#0A1A24] text-sm truncate">McDonald's</span>
                <span className="text-[#7A8A96] text-[11px] font-medium truncate">Spent · Apr 08</span>
              </div>
            </div>
            <span className="font-bold text-[#0A1A24] whitespace-nowrap shrink-0">- HKD 45</span>
          </div>
          
          {/* Item 5 */}
          <div className="flex items-center justify-between p-3 border-b border-[#F1F5F8] last:border-0">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#A6B8C4] flex items-center justify-center shrink-0">
                 <Minus className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col flex-1 min-w-0 mr-3">
                <span className="font-bold text-[#0A1A24] text-sm truncate">Netflix Subscription</span>
                <span className="text-[#7A8A96] text-[11px] font-medium truncate">Spent · Mar 28</span>
              </div>
            </div>
            <span className="font-bold text-[#0A1A24] whitespace-nowrap shrink-0">- HKD 93</span>
          </div>
        </div>

        {/* What each color means */}
        <div className="px-6 mb-4">
          <h3 className="text-xl font-bold text-[#0A1A24]">What each color means</h3>
        </div>

        <div className="flex flex-col gap-3 mx-6 mb-8">
          {/* Blue */}
          <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#03FDFF] shadow-[0_0_12px_rgba(3,253,255,0.4)] shrink-0 mt-0.5"></div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="font-bold text-[#0A1A24] text-[15px]">Blue</span>
                <span className="text-[#7A8A96] text-[13px] font-medium">· Supported Money</span>
              </div>
              <p className="text-[#3A505F] text-[13px] leading-relaxed">
                From family — pocket money, transfers, gifts. A starting point, not an ending point.
              </p>
            </div>
          </div>

          {/* Green */}
          <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#9DECAE] shrink-0 mt-0.5 shadow-sm"></div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="font-bold text-[#0A1A24] text-[15px]">Green</span>
                <span className="text-[#7A8A96] text-[13px] font-medium">· Control Money</span>
              </div>
              <p className="text-[#3A505F] text-[13px] leading-relaxed">
                Money you chose to hold back. Once it stays past the next family cycle, it becomes yours to direct.
              </p>
            </div>
          </div>

          {/* Red */}
          <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E35252] shrink-0 mt-0.5 shadow-sm"></div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="font-bold text-[#0A1A24] text-[15px]">Red</span>
                <span className="text-[#7A8A96] text-[13px] font-medium">· Earned Money</span>
              </div>
              <p className="text-[#3A505F] text-[13px] leading-relaxed">
                Money you earned yourself — work, side-income, sales. Red money always stays red.
              </p>
            </div>
          </div>
        </div>

        {/* How money changes color */}
        <div className="px-6 mb-4 mt-2">
          <h3 className="text-xl font-bold text-[#0A1A24]">How money changes color</h3>
        </div>

        <div className="mx-6 bg-white rounded-[24px] p-5 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] mb-12">
          {/* Transition 1 */}
          <div className="flex items-center gap-5 p-4 rounded-2xl bg-gradient-to-r from-[#F0FCFC] to-[#F7FCF6] mb-4">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-[42px] h-[42px] rounded-full bg-[#03FDFF] shadow-[0_0_12px_rgba(3,253,255,0.4)] flex flex-col items-center justify-end pb-1 relative">
                <span className="absolute -bottom-5 text-[11px] font-bold text-[#0A1A24]">Blue</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#25B4B4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              <div className="w-[42px] h-[42px] rounded-full bg-[#9DECAE] flex flex-col items-center justify-end pb-1 relative">
                <span className="absolute -bottom-5 text-[11px] font-bold text-[#0A1A24]">Green</span>
              </div>
            </div>
            <div className="flex-1 ml-2">
              <p className="text-[#3A505F] text-[13px] leading-snug">
                Unspent family money turns into <strong className="text-[#0A1A24]">your control</strong> next cycle.
              </p>
            </div>
          </div>

          {/* Transition 2 */}
          <div className="flex items-center gap-5 p-4 rounded-2xl bg-gradient-to-r from-[#FFF1F1] to-[#FFF6F6] mb-6">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-[42px] h-[42px] rounded-full bg-[#E35252] flex flex-col items-center justify-end pb-1 relative">
                <span className="absolute -bottom-5 text-[11px] font-bold text-[#0A1A24]">Red</span>
              </div>
              <span className="font-bold text-[#C64141] text-[11px] tracking-widest mt-1">STAYS</span>
              <div className="w-[42px] h-[42px] rounded-full bg-[#E35252] flex flex-col items-center justify-end pb-1 relative">
                <span className="absolute -bottom-5 text-[11px] font-bold text-[#0A1A24]">Red</span>
              </div>
            </div>
            <div className="flex-1 ml-2">
              <p className="text-[#3A505F] text-[13px] leading-snug">
                Money you earn is <strong className="text-[#0A1A24]">yours from day one</strong>.
              </p>
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-[#3A505F] text-[13.5px] leading-relaxed">
            Blue money can turn <strong className="text-[#0A1A24]">green</strong> when part of family support stays unspent by the next family cycle — that means it's yours to direct now. Red money <strong className="text-[#0A1A24]">always stays red</strong>; once earned, it's yours from day one.
          </p>
        </div>

      </div>
    </div>
  );
}
