import { ChevronLeft, MoreHorizontal, Check, Lock, Gift, Crown, Coffee, Utensils, RefreshCcw } from "lucide-react";
import { useState } from "react";
import { WeeklyBudgetDrawPage } from "./WeeklyBudgetDrawPage";
import { motion, AnimatePresence } from 'motion/react';

export function WeeklyBudgetPage({ onBack }: { onBack: () => void }) {
  const [showDrawPage, setShowDrawPage] = useState(false);
  
  // For demo: default to 'ready'
  const [drawState, setDrawState] = useState<'locked' | 'waiting' | 'ready' | 'drawn'>('ready');
  const [isFlipped, setIsFlipped] = useState(false);
  const [drawResult, setDrawResult] = useState<number | null>(null);

  const transactions = [
    { name: "McDonald's", date: "Today 12:30", amount: "45", color: "#FFC2C2" },
    { name: "Family dinner", date: "Yesterday 19:30", amount: "600", color: "#AEC3D4" },
    { name: "Page One", date: "Wed 28", amount: "180", color: "#A8E5C1" },
  ];

  const handleDrawComplete = (result: number) => {
    setDrawResult(result);
    setDrawState('drawn');
    setShowDrawPage(false);
    setIsFlipped(true); // show the drawn side
  };

  return (
    <>
      <div className="absolute inset-0 z-50 bg-[#EAFDFD] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-12 pb-4 shrink-0">
          <button onClick={onBack} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <ChevronLeft className="w-5 h-5 text-[#0A1A24]" />
          </button>
          <h1 className="text-[17px] font-bold text-[#0A1A24]">Weekly Budget</h1>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <MoreHorizontal className="w-5 h-5 text-[#0A1A24]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pb-12 hide-scrollbar px-5 text-[#0A1A24] perspective-1000">
          
          {/* Remaining Card */}
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#03FDFF] relative mb-4">
            <h2 className="text-[#2A8F90] text-[11px] font-bold tracking-widest uppercase mb-1">Remaining this week</h2>
            
            <div className="flex items-baseline gap-1.5 mb-2 mt-1">
              <span className="text-[#7A8A96] font-bold text-base">HKD</span>
              <span className="text-[44px] font-extrabold text-[#064e52] leading-none tracking-tight">24</span>
            </div>
            
            {drawState !== 'locked' ? (
              <div className="inline-flex items-center gap-1 bg-[#E2F5ED] text-[#2E8863] px-2.5 py-1 rounded-full text-[11px] font-bold mb-6">
                <Check className="w-3 h-3" strokeWidth={3} />
                On track for the draw
              </div>
            ) : (
              <div className="inline-flex items-center gap-1 bg-[#F1F5F8] text-[#7A8A96] px-2.5 py-1 rounded-full text-[11px] font-bold mb-6">
                <Lock className="w-3 h-3" strokeWidth={3} />
                Over spending limit
              </div>
            )}

            <div className="absolute top-5 right-5 bg-[#03FDFF] rounded-[16px] w-[68px] h-[82px] flex flex-col items-center justify-center text-[#0A1A24] shadow-sm">
              <span className="text-[10px] font-bold tracking-wider">DAYS</span>
              <span className="text-[32px] font-black leading-none -mt-1 -mb-1">1</span>
              <span className="text-[10px] font-bold tracking-wider">LEFT</span>
            </div>

            <div className="flex justify-between items-end mb-2">
              <div className="text-[13px]">
                <span className="text-[#7A8A96] font-medium">Spent </span>
                <span className="font-bold text-[#0A1A24]">HKD {drawState === 'locked' ? '940' : '876'}</span>
              </div>
              <div className="text-[13px]">
                <span className="text-[#7A8A96] font-medium">Budget </span>
                <span className="font-bold text-[#0A1A24]">HKD 900</span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="h-2.5 w-full bg-[#E5ECEE] rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-500" style={{ width: drawState === 'locked' ? '100%' : '97%', backgroundColor: drawState === 'locked' ? '#FFC2C2' : '#03FDFF' }}></div>
            </div>
          </div>

          {/* Draw Streak Section - Flip Card */}
          {/* Developer toggle to test states */}
          {/* <div className="flex gap-2 mb-2">
            {['locked', 'waiting', 'ready', 'drawn'].map(s => <button key={s} className="px-2 py-1 text-xs bg-white rounded shadow-sm" onClick={() => setDrawState(s as any)}>{s}</button>)}
          </div> */}

          <div className="relative w-full h-[200px] mb-4" style={{ perspective: '1000px' }}>
            <motion.div 
               className="w-full h-full relative"
               style={{ transformStyle: 'preserve-3d' }}
               animate={{ rotateY: isFlipped ? 180 : 0 }}
               transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Front Side */}
              <div 
                 className="absolute inset-0 bg-white rounded-[24px] p-5 shadow-sm flex flex-col"
                 style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-[#7A8A96] text-[11px] font-bold tracking-widest uppercase">Draw streak</h3>
                  <button onClick={() => setIsFlipped(true)} className="w-8 h-8 rounded-full bg-[#F8FBFC] flex items-center justify-center shrink-0 shadow-sm border border-[#F1F5F8]">
                    <RefreshCcw className="w-4 h-4 text-[#A6B8C4]" />
                  </button>
                </div>
                
                <div className="flex justify-between items-center mb-2">
                   <div className="font-bold text-[#0A1A24] text-[15px]">7 / 10 weeks</div>
                </div>
                
                <div className="flex gap-1.5 mb-4">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={`h-2.5 flex-1 rounded-full ${i < 7 ? 'bg-[#03FDFF]' : 'bg-[#F1F5F8]'}`} />
                  ))}
                </div>
                
                <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#2A8F90] mb-auto">
                   <span>🎁</span>
                   <span><strong className="text-[#0A1A24]">3 more weeks</strong> to unlock free drink voucher</span>
                </div>

                {/* Status tip row */}
                <button onClick={() => setIsFlipped(true)} className="w-full py-2.5 rounded-xl text-[12px] font-bold border border-dashed transition-colors flex items-center justify-center gap-1.5 mt-2 bg-[#F8FBFC] border-[#E5ECEE] text-[#7A8A96]">
                  {drawState === 'locked' && <><Lock className="w-3.5 h-3.5" /> 🔒 Draw locked</>}
                  {drawState === 'waiting' && <><Check className="w-3.5 h-3.5" /> ✓ Qualified — keep going</>}
                  {drawState === 'ready' && <><Gift className="w-3.5 h-3.5 text-[#03FDFF]" /> <span className="text-[#0A1A24]">✦ Your draw is ready!</span></>}
                  {drawState === 'drawn' && <><Check className="w-3.5 h-3.5 text-[#03FDFF]" /> ✓ Drawn this week</>}
                </button>
              </div>

              {/* Back Side */}
              <div 
                 className={`absolute inset-0 rounded-[24px] p-5 shadow-sm flex flex-col justify-between items-center text-center ${
                   drawState === 'locked' ? 'bg-[#F8FBFC] border border-[#E5ECEE]' : 
                   drawState === 'ready' ? 'bg-white border-2 border-[#03FDFF] shadow-[0_0_20px_-5px_rgba(3,253,255,0.4)]' : 
                   'bg-white border border-[#E5ECEE]'
                 }`}
                 style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="w-full flex justify-between absolute top-4 left-4 right-4 items-start">
                   <button onClick={() => setIsFlipped(false)} className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center shrink-0 z-10 shadow-sm border border-[#F1F5F8]">
                     <RefreshCcw className="w-4 h-4 text-[#A6B8C4]" />
                   </button>
                </div>

                {drawState === 'locked' && (
                  <div className="flex-1 flex flex-col items-center justify-center p-2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm border border-[#F1F5F8]">
                      <Lock className="w-5 h-5 text-[#A6B8C4]" />
                    </div>
                    <div className="font-bold text-[#0A1A24] text-[15px] mb-1">Draw Locked</div>
                    <div className="text-[12px] text-[#7A8A96] font-medium leading-tight">Stay within your weekly budget to unlock the draw</div>
                  </div>
                )}

                {drawState === 'waiting' && (
                  <div className="flex-1 flex flex-col items-center justify-center mt-2">
                    <div className="bg-[#E2F5ED] text-[#2E8863] px-3 py-1 rounded-full text-[11px] font-bold mb-3 flex items-center gap-1">
                      <Check className="w-3 h-3" strokeWidth={3}/> You're on track!
                    </div>
                    <div className="text-[12px] text-[#7A8A96] font-medium leading-tight mb-4 px-2">Stay within budget until the week ends to secure your draw.</div>
                    <div className="flex gap-2">
                      <div className="bg-[#FEF3C7] px-2 py-1.5 rounded flex items-center gap-1 shadow-sm"><Crown className="w-3 h-3 text-[#F59E0B]"/><span className="text-[10px] font-bold text-[#92400E]">5 refunds</span></div>
                      <div className="bg-[#FCE7F3] px-2 py-1.5 rounded flex items-center gap-1 shadow-sm"><Coffee className="w-3 h-3 text-[#EC4899]"/><span className="text-[10px] font-bold text-[#9D174D]">10 drinks</span></div>
                      <div className="bg-[#FFEDD5] px-2 py-1.5 rounded flex items-center gap-1 shadow-sm"><Utensils className="w-3 h-3 text-[#F97316]"/><span className="text-[10px] font-bold text-[#9A3412]">10 vouchers</span></div>
                    </div>
                  </div>
                )}

                {drawState === 'ready' && (
                  <div className="flex-1 w-full flex flex-col items-center justify-center mt-1 relative">
                    <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#03FDFF]/20 rounded-full blur-xl z-0" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
                    <motion.div className="z-10 text-[#03FDFF] mb-2 drop-shadow-md" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                      <Gift className="w-10 h-10" />
                    </motion.div>
                    <div className="font-black text-[#0A1A24] text-[18px] uppercase tracking-wide z-10 mb-1">You're In!</div>
                    <div className="text-[10px] text-[#2A8F90] font-bold uppercase tracking-widest z-10 mb-3">✦ Your draw is ready ✦</div>
                    <button onClick={() => setShowDrawPage(true)} className="w-full bg-[#0A1A24] text-[#03FDFF] py-3.5 rounded-xl font-bold text-[14px] shadow-lg z-10 mt-auto flex items-center justify-center relative overflow-hidden group">
                      <span className="relative z-10">TAP TO DRAW</span>
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" animate={{ x: ['-200%', '200%'] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}></motion.div>
                    </button>
                  </div>
                )}

                {drawState === 'drawn' && (
                  <div className="flex-1 w-full flex flex-col items-center justify-center text-center mt-2">
                    <div className="text-[#2E8863] text-[11px] font-bold uppercase tracking-widest flex items-center gap-1 mb-2">
                      <Check className="w-3 h-3" strokeWidth={3}/> Drawn this week
                    </div>
                    {/* Tiny representation of the prize */}
                    <div className="bg-[#F8FBFC] border border-[#F1F5F8] p-3 rounded-2xl flex flex-col items-center w-full shadow-sm mb-3">
                      {drawResult === 1 && <Crown className="w-8 h-8 text-[#F59E0B] mb-1" />}
                      {drawResult === 2 && <Coffee className="w-8 h-8 text-[#F472B6] mb-1" />}
                      {drawResult === 3 && <Utensils className="w-8 h-8 text-[#F97316] mb-1" />}
                      {drawResult === 4 && <Heart className="w-8 h-8 text-[#9CA3AF] mb-1" />}
                      <div className="text-[11px] font-bold text-[#0A1A24]">
                        {drawResult === 1 && 'Refund!'}
                        {drawResult === 2 && 'Bubble Tea'}
                        {drawResult === 3 && 'Food Voucher'}
                        {drawResult === 4 && 'No Prize'}
                      </div>
                    </div>
                    <div className="text-[#7A8A96] text-[11px] font-medium">Next draw opens in 6 days</div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Transactions Card */}
          <div className="bg-white rounded-[24px] py-5 shadow-sm mb-8">
            <h3 className="font-bold text-[#0A1A24] text-[15px] px-5 mb-4">This week's spending</h3>
            
            <div className="flex flex-col">
              {transactions.map((t, i) => (
                <div key={i} className="relative">
                  <div className="flex items-center px-5 py-3">
                    <div 
                      className="absolute left-5 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-full" 
                      style={{ backgroundColor: t.color }}
                    />
                    <div className="pl-5 flex-1">
                      <div className="font-bold text-[#0A1A24] text-[15px]">{t.name}</div>
                      <div className="text-[#A6B8C4] text-[12px] font-medium">{t.date}</div>
                    </div>
                    <div className="font-bold text-[#0A1A24] text-[15px]">HKD {t.amount}</div>
                  </div>
                  {i < transactions.length - 1 && (
                    <div className="ml-10 mr-5 h-[1px] bg-[#F1F5F8]" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {showDrawPage && (
        <WeeklyBudgetDrawPage onBack={() => setShowDrawPage(false)} onComplete={handleDrawComplete} />
      )}
    </>
  );
}
