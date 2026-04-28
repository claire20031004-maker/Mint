import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Gift, Crown, Coffee, Utensils, Heart, Sparkles, Copy, ChevronDown, Trophy, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function WeeklyBudgetDrawPage({ onBack, onComplete }: { onBack: () => void, onComplete: (result: number) => void }) {
  const [phase, setPhase] = useState<'pre-draw' | 'drawing' | 'result'>('pre-draw');
  const [resultType, setResultType] = useState<1 | 2 | 3 | 4>(1); 
  const [showDetails, setShowDetails] = useState(false);

  const startDraw = () => {
    // For demo purposes, we randomly select a result type or cycle through them
    const types = [1, 2, 3, 4] as const;
    const randomType = types[Math.floor(Math.random() * types.length)];
    setResultType(randomType);
    setPhase('drawing');
    setTimeout(() => {
      setPhase('result');
    }, 2500);
  };

  return (
    <div className="absolute inset-0 z-[60] bg-[#EAFDFD] flex flex-col font-sans overflow-hidden">
      <AnimatePresence mode="wait">
        {phase === 'pre-draw' && (
          <motion.div key="pre" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col">
            <PreDraw onBack={onBack} onDraw={startDraw} />
          </motion.div>
        )}
        {phase === 'drawing' && (
          <motion.div key="draw" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col">
            <Drawing />
          </motion.div>
        )}
        {phase === 'result' && (
          <motion.div key="res" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col">
            <Result 
              type={resultType} 
              onBack={() => onComplete(resultType)} 
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PreDraw({ onBack, onDraw }: { onBack: () => void, onDraw: () => void }) {
  const winners = [
    { name: 'A***n C.', initials: 'AC', color: '#FFB5D8', won: 'Refund', icon: <Crown className="w-3 h-3 text-white" />, time: '5d ago' },
    { name: 'M***y W.', initials: 'MW', color: '#87CEFA', won: 'Bubble Tea', icon: <Coffee className="w-3 h-3 text-white" />, time: '4h ago' },
    { name: 'K****a L.', initials: 'KL', color: '#FDBA74', won: 'Food', icon: <Utensils className="w-3 h-3 text-white" />, time: '1d ago' },
    { name: 'D***d T.', initials: 'DT', color: '#A8E6A1', won: 'Refund', icon: <Crown className="w-3 h-3 text-white" />, time: '2d ago' },
    { name: 'S***a Y.', initials: 'SY', color: '#E6E6FA', won: 'Bubble Tea', icon: <Coffee className="w-3 h-3 text-white" />, time: '12h ago' },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-y-auto hide-scrollbar pb-24">
      {/* Header */}
      <div className="pt-12 px-6 pb-2 flex items-center justify-between shrink-0">
        <button onClick={onBack} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <ChevronLeft className="w-5 h-5 text-[#0A1A24]" />
        </button>
        <div className="w-10 h-10" />
      </div>

      <div className="px-5 text-[#0A1A24] flex-1 flex flex-col pt-2">
        {/* Hero Card */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm flex flex-col items-center text-center relative overflow-hidden mb-5">
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#03FDFF]/10 to-transparent"></div>
          <span className="text-[#2A8F90] text-[10px] font-bold tracking-widest uppercase mb-4 z-10 px-3 py-1 bg-[#EAFDFD] rounded-full">
            THIS WEEK'S PRIZE POOL
          </span>
          <motion.div className="mb-4 z-10 text-[#03FDFF]" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
            <Gift className="w-16 h-16" strokeWidth={1.5} />
          </motion.div>
          <h1 className="text-[28px] font-black leading-tight mb-2 z-10">You're In!</h1>
          <p className="text-[#7A8A96] text-[13px] font-medium leading-relaxed px-4 z-10">
            You stayed within HKD 900 this week. 25 winners picked weekly.
          </p>
        </div>

        {/* Prize Pool */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm mb-5 relative">
          <div className="absolute top-4 right-5 text-[#7A8A96] text-[11px] font-bold bg-[#F8FBFC] px-2 py-1 rounded-full flex items-center gap-1">
            <span className="text-[12px]">👥</span> 25 weekly
          </div>
          
          <h2 className="text-[#0A1A24] text-[15px] font-bold mb-4">Prize Pool</h2>
          
          {/* Legendary */}
          <div className="relative overflow-hidden rounded-[20px] p-4 mb-3 border border-[#FDE68A] shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] opacity-50"></div>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" animate={{ x: ['-100%', '200%'] }} transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}></motion.div>
            
            <div className="relative z-10 flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-full flex items-center justify-center shrink-0 shadow-inner">
                <Crown className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-[#92400E] text-[14px]">Weekly Spending Refund</h3>
                  <span className="bg-[#FEF08A] text-[#92400E] text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded shadow-sm">Legendary</span>
                </div>
                <p className="text-[#B45309] text-[11px] font-semibold mb-2">Get this week's spending fully refunded</p>
                <div className="text-[#92400E] text-[10px] font-bold opacity-80 uppercase tracking-wide">
                  5 WINNERS / WEEK · UP TO HKD 900
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#F8FBFC] border border-[#F1F5F8] rounded-[20px] p-4 flex flex-col justify-center shadow-sm">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FFB5D8] to-[#F472B6] rounded-full flex items-center justify-center mb-3">
                <Coffee className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-[#0A1A24] text-[13px] mb-1 leading-snug">Bubble Tea<br/>Voucher</h3>
              <p className="text-[#7A8A96] text-[11px] font-medium mb-2 leading-tight">Free bubble tea on us</p>
              <div className="text-[#3A505F] text-[10px] font-bold uppercase mt-auto">10 WINNERS · HKD 50</div>
            </div>

            <div className="bg-[#F8FBFC] border border-[#F1F5F8] rounded-[20px] p-4 flex flex-col justify-center shadow-sm">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FDBA74] to-[#F97316] rounded-full flex items-center justify-center mb-3">
                <Utensils className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-[#0A1A24] text-[13px] mb-1 leading-snug">Food Delivery<br/>Voucher</h3>
              <p className="text-[#7A8A96] text-[11px] font-medium mb-2 leading-tight">Use on any delivery app</p>
              <div className="text-[#3A505F] text-[10px] font-bold uppercase mt-auto">10 WINNERS · HKD 80</div>
            </div>
          </div>
        </div>

        {/* Recent Winners */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm mb-5 overflow-hidden">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-[#0A1A24] text-[15px] font-bold">Recent Winners</h2>
            <motion.div className="w-2 h-2 bg-[#10B981] rounded-full" animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
            <span className="text-[#10B981] font-bold text-[10px] tracking-wider uppercase">Live</span>
          </div>
          <p className="text-[#7A8A96] text-[11px] font-medium mb-5">Last week's lucky 25 — could be you next!</p>

          <div className="flex overflow-x-hidden relative -mx-6 px-6 pb-2">
            <motion.div 
               className="flex gap-3 shrink-0 pr-6" 
               animate={{ x: [0, -1000] }} 
               transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {[...winners, ...winners].map((w, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#F8FBFC] rounded-full px-3 py-1.5 shrink-0 border border-[#F1F5F8]">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm" style={{ backgroundColor: w.color }}>
                    {w.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0A1A24] text-[11px] font-bold leading-tight">{w.name}</span>
                    <span className="text-[#7A8A96] text-[9px] font-medium leading-none flex items-center gap-1">
                      won {w.won} • {w.time}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#F1F5F8] flex justify-between text-[11px] font-bold text-[#A6B8C4]">
            <span>5 Refunds</span>
            <span>•</span>
            <span>10 Drinks</span>
            <span>•</span>
            <span>10 Food</span>
          </div>
        </div>

        {/* Streak Preview */}
        <div className="bg-white rounded-[24px] p-5 shadow-sm mb-8 text-center text-[12px] font-bold text-[#7A8A96]">
           Current Streak: <span className="text-[#03FDFF]">7 / 10 weeks</span>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#EAFDFD] via-[#EAFDFD] to-transparent z-20">
        <div className="relative group">
          <motion.div 
             className="absolute -inset-1 bg-[#03FDFF] opacity-50 blur-lg rounded-full"
             animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
             transition={{ repeat: Infinity, duration: 2 }}
          />
          <button 
             onClick={onDraw} 
             className="relative w-full py-4 bg-[#0A1A24] text-[#03FDFF] rounded-full font-bold text-[17px] tracking-wide shadow-xl flex items-center justify-center gap-2 overflow-hidden"
          >
             <span className="relative z-10 flex items-center gap-2">
               TAP TO DRAW <Sparkles className="w-5 h-5" />
             </span>
             <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10" animate={{ x: ['-200%', '200%'] }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}></motion.div>
          </button>
        </div>
        <p className="text-center text-[#7A8A96] text-[11px] font-medium mt-3">One free draw per qualifying week</p>
      </div>
    </div>
  );
}

function Drawing() {
  const icons = [<Crown className="w-12 h-12 text-[#F59E0B]" />, <Coffee className="w-12 h-12 text-[#F472B6]" />, <Utensils className="w-12 h-12 text-[#F97316]" />, <Heart className="w-12 h-12 text-[#9CA3AF]" />, <Gift className="w-12 h-12 text-[#03FDFF]" />];
  
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative bg-[#EAFDFD]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#03FDFF] opacity-30"
            style={{ width: Math.random() * 6 + 2, height: Math.random() * 6 + 2, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: Math.random() * 2 + 1, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="text-[#2A8F90] text-[11px] font-bold tracking-widest uppercase mb-12">
        ✦ DRAWING IN PROGRESS ✦
      </div>

      {/* Slot Machine */}
      <div className="bg-white p-4 rounded-[32px] shadow-xl border border-[#F1F5F8] relative mb-12 z-10">
        <div className="absolute top-1/2 left-0 right-0 h-[72px] -translate-y-1/2 border-y-2 border-[#03FDFF] bg-[#03FDFF]/5 rounded-sm pointer-events-none z-20">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#03FDFF] rounded-r-full shadow-[0_0_8px_#03FDFF]"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#03FDFF] rounded-l-full shadow-[0_0_8px_#03FDFF]"></div>
        </div>
        <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-4 h-[160px] overflow-hidden">
           {[0, 1, 2].map((colIndex) => (
             <div key={colIndex} className="w-20 bg-[#F8FBFC] rounded-2xl relative overflow-hidden shadow-inner">
               <motion.div 
                 className="flex flex-col items-center gap-8 py-4"
                 animate={{ y: [0, -400] }}
                 transition={{ repeat: Infinity, duration: 0.5 + (colIndex * 0.15), ease: "linear" }}
               >
                 {[...icons, ...icons, ...icons].map((icon, i) => (
                   <div key={i} className="flex items-center justify-center h-16 w-16 shrink-0 opacity-80">
                     {icon}
                   </div>
                 ))}
               </motion.div>
             </div>
           ))}
        </div>
      </div>

      <div className="flex flex-col items-center z-10 mt-8">
        <div className="font-black text-[#0A1A24] text-[18px] mb-2 flex items-baseline">
          Drawing your reward
          <motion.span className="w-6 text-left inline-block" animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>...</motion.span>
        </div>
        <div className="text-[#7A8A96] text-[13px] font-bold">✦ Good luck! ✦</div>
        
        <div className="flex gap-1.5 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div 
               key={i} 
               className="w-2 h-2 rounded-full bg-[#03FDFF]"
               animate={{ y: [0, -6, 0] }}
               transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Result({ type, onBack, showDetails, setShowDetails }: { type: number, onBack: () => void, showDetails: boolean, setShowDetails: (s: boolean) => void }) {
  const resultData = {
    1: { theme: 'gold', title: 'JACKPOT!', sub: "You're getting refunded this week 🎊", prizeName: 'Weekly Spending Refund', value: 'HKD 876', desc: 'Will be refunded to your account', hasConfetti: true, label: '★ LEGENDARY · 5 winners this week' },
    2: { theme: 'pink', title: 'Congratulations!', sub: "Bubble tea on us this week 🧋", prizeName: 'Bubble Tea Voucher', value: 'HKD 30', desc: 'Valid at all partner stores', code: 'BTV-2026-7K9X', hasConfetti: true, label: '10 winners this week' },
    3: { theme: 'orange', title: 'Congratulations!', sub: "Free delivery on us 🍱", prizeName: 'Food Delivery Voucher', value: 'HKD 50', desc: 'Valid on any delivery app', code: 'FDV-2026-3M8P', hasConfetti: true, label: '10 winners this week' },
    4: { theme: 'gray', title: 'Better Luck Next Week!', sub: "Your streak just grew stronger 💪", prizeName: 'No Prize This Time', value: '+1', desc: 'Week added to your streak', hasConfetti: false, label: 'Streak +1 · Now 8 / 10 weeks' }
  };

  const d = resultData[type as 1|2|3|4];

  return (
    <div className={`flex-1 flex flex-col relative overflow-y-auto hide-scrollbar ${d.theme === 'gold' ? 'bg-[#FCF8EC]' : 'bg-[#F8FBFC]'}`}>
       {d.hasConfetti && <Confetti colors={d.theme === 'pink' ? ['#FFB5D8', '#03FDFF'] : d.theme === 'orange' ? ['#FDBA74', '#03FDFF'] : ['#FDE68A', '#F59E0B', '#03FDFF']} />}
       
       <div className="pt-12 px-6 flex justify-between z-20 shrink-0">
          <div className="w-10 h-10"></div>
          <button onClick={onBack} className="w-10 h-10 bg-white/60 backdrop-blur rounded-full flex items-center justify-center shadow-sm">
            <X className="w-5 h-5 text-[#0A1A24]" />
          </button>
       </div>

       <div className="flex-1 flex flex-col items-center p-6 z-10 pt-4">
         {type !== 4 && (
           <div className={`text-[10px] font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full flex items-center gap-1 shadow-sm ${d.theme === 'gold' ? 'bg-[#FEF08A] text-[#92400E]' : 'bg-white text-[#2A8F90]'}`}>
             <Trophy className="w-3 h-3" /> DRAW COMPLETE
           </div>
         )}
         
         <motion.h1 
            className={`font-black tracking-tight mb-2 text-center leading-tight ${d.theme === 'gold' ? 'text-[36px] text-[#B45309]' : 'text-[28px] text-[#0A1A24]'}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
         >
           {d.title}
         </motion.h1>
         
         <p className="text-[#7A8A96] text-[14px] font-medium mb-8 text-center px-4">{d.sub}</p>

         {/* Prize Card */}
         <motion.div 
            className={`w-full rounded-[32px] p-6 text-center transform transition-all ${
              d.theme === 'gold' ? 'bg-gradient-to-b from-[#FEF3C7] to-[#FDE68A] shadow-[0_10px_40px_-10px_rgba(245,158,11,0.5)] border border-[#FCD34D]' : 
              d.theme === 'gray' ? 'bg-[#F1F5F8] shadow-sm border border-[#E5ECEE]' : 
              'bg-white shadow-[0_10px_30px_-15px_rgba(3,253,255,0.3)] border border-[#03FDFF]'
            }`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
         >
           <div className={`text-[10px] font-bold uppercase tracking-widest inline-block px-3 py-1 rounded-full mb-6 shadow-sm border ${
             d.theme === 'gold' ? 'bg-white/40 text-[#92400E] border-[#FCD34D]' : 
             d.theme === 'pink' ? 'bg-[#FDF2F8] text-[#DB2777] border-[#FBCFE8]' : 
             d.theme === 'orange' ? 'bg-[#FFF7ED] text-[#EA580C] border-[#FED7AA]' : 
             'bg-white text-[#2A8F90] border-[#03FDFF]'
           }`}>
             {d.label}
           </div>

           <div className="flex justify-center mb-5 relative group">
              <div className="absolute inset-0 bg-white/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {type === 1 && <div className="w-20 h-20 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-full flex items-center justify-center relative shadow-inner"><Crown className="w-10 h-10 text-white" strokeWidth={2.5}/></div>}
              {type === 2 && <div className="w-20 h-20 bg-gradient-to-br from-[#FFB5D8] to-[#F472B6] rounded-full flex items-center justify-center relative shadow-inner"><Coffee className="w-10 h-10 text-white" strokeWidth={2.5}/></div>}
              {type === 3 && <div className="w-20 h-20 bg-gradient-to-br from-[#FDBA74] to-[#F97316] rounded-full flex items-center justify-center relative shadow-inner"><Utensils className="w-10 h-10 text-white" strokeWidth={2.5}/></div>}
              {type === 4 && <div className="w-20 h-20 bg-gradient-to-br from-[#D1D5DB] to-[#9CA3AF] rounded-full flex items-center justify-center relative shadow-inner"><Heart className="w-10 h-10 text-white" strokeWidth={2.5}/></div>}
           </div>

           <h3 className={`text-[15px] font-bold mb-2 ${d.theme === 'gold' ? 'text-[#92400E]' : 'text-[#0A1A24]'}`}>{d.prizeName}</h3>
           <div className={`font-black tracking-tight mb-2 leading-none ${type === 1 ? 'text-[44px] text-[#B45309]' : 'text-[36px] text-[#0A1A24]'}`}>
             {d.value}
           </div>
           <p className={`text-[12px] font-medium ${d.theme === 'gold' ? 'text-[#B45309]' : 'text-[#7A8A96]'}`}>{d.desc}</p>
         </motion.div>

         {/* Promo Code or Info */}
         {(type === 2 || type === 3) && (
           <motion.div className="w-full mt-6 flex gap-2" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
             <div className="flex-1 bg-white border border-[#E5ECEE] border-dashed rounded-xl px-4 py-3 flex items-center justify-center font-mono font-bold text-[#0A1A24] text-[15px] tracking-widest shadow-sm">
               {d.code}
             </div>
             <button className="w-12 bg-white border border-[#E5ECEE] rounded-xl flex items-center justify-center shadow-sm hover:bg-[#F8FBFC] transition-colors">
               <Copy className="w-5 h-5 text-[#3A505F]" />
             </button>
           </motion.div>
         )}

         {type === 1 && (
           <motion.p className="text-center text-[#B45309] text-[11px] font-medium mt-6 opacity-80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
             Refund credited within 3 business days
           </motion.p>
         )}

         {type === 4 && (
           <motion.p className="text-center text-[#7A8A96] text-[11px] font-medium mt-6 opacity-80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
             Keep saving — your odds compound each week
           </motion.p>
         )}

         {/* CTAs */}
         <motion.div className="w-full flex flex-col gap-3 mt-8" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
           {type === 4 ? (
             <button onClick={onBack} className="w-full py-4 bg-white border border-[#03FDFF] text-[#0A1A24] rounded-full font-bold text-[15px] shadow-sm hover:shadow-md transition-all">
               SET NEXT WEEK'S BUDGET
             </button>
           ) : (
             <>
               <div className="relative group">
                 {d.theme !== 'gold' && <motion.div className="absolute -inset-0.5 bg-[#03FDFF] opacity-30 blur rounded-full" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} />}
                 <button onClick={onBack} className={`relative w-full py-4 rounded-full font-bold text-[15px] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 ${
                   d.theme === 'gold' ? 'bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white' : 'bg-[#0A1A24] text-[#03FDFF]'
                 }`}>
                   {type === 1 ? 'VIEW REFUND STATUS' : 'USE NOW'}
                 </button>
               </div>
               <div className="flex gap-3">
                 <button className="flex-1 py-3.5 bg-white border border-[#E5ECEE] text-[#3A505F] rounded-full font-bold text-[13px]">
                   Save to Wallet
                 </button>
                 <button className="flex-1 py-3.5 bg-white border border-[#E5ECEE] text-[#3A505F] rounded-full font-bold text-[13px]">
                   Share My Win
                 </button>
               </div>
             </>
           )}
         </motion.div>

         {/* Accordion */}
         {type !== 4 && (
           <motion.div className="w-full mt-8" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
             <button 
               onClick={() => setShowDetails(!showDetails)}
               className="w-full flex items-center justify-between py-4 border-t border-[#F1F5F8] text-[#0A1A24] font-bold text-[14px]"
             >
               Reward Details
               <ChevronDown className={`w-5 h-5 text-[#A6B8C4] transition-transform ${showDetails ? 'rotate-180' : ''}`} />
             </button>
             <AnimatePresence>
               {showDetails && (
                 <motion.div 
                   initial={{ height: 0, opacity: 0 }} 
                   animate={{ height: 'auto', opacity: 1 }} 
                   exit={{ height: 0, opacity: 0 }}
                   className="overflow-hidden"
                 >
                   <div className="pb-4 pt-1 flex flex-col gap-3 text-[12px]">
                     {type === 1 ? (
                       <>
                         <div className="flex justify-between"><span className="text-[#A6B8C4]">Refund Amount</span><span className="font-bold text-[#0A1A24]">HKD 876</span></div>
                         <div className="flex justify-between"><span className="text-[#A6B8C4]">Credit To</span><span className="font-bold text-[#0A1A24]">MOX YOUTH •••• 9012</span></div>
                         <div className="flex justify-between"><span className="text-[#A6B8C4]">Status</span><span className="font-bold text-[#F59E0B]">Processing</span></div>
                         <div className="flex justify-between"><span className="text-[#A6B8C4]">Reference</span><span className="font-bold text-[#0A1A24]">RF-87V2</span></div>
                       </>
                     ) : (
                       <>
                         <div className="flex justify-between"><span className="text-[#A6B8C4]">Validity</span><span className="font-bold text-[#0A1A24]">30 Days</span></div>
                         <div className="flex justify-between"><span className="text-[#A6B8C4]">Min. Spend</span><span className="font-bold text-[#0A1A24]">None</span></div>
                       </>
                     )}
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </motion.div>
         )}

         {/* Bottom Streak Ref */}
         <motion.div className="w-full mt-4 mb-8 bg-white border border-[#F1F5F8] rounded-[20px] p-4 text-center shadow-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
           <div className="text-[11px] font-bold text-[#A6B8C4] tracking-widest uppercase mb-1">Current Streak</div>
           <div className="text-[15px] font-black text-[#0A1A24]">8 / 10 weeks</div>
           <div className="h-2 w-full bg-[#F1F5F8] rounded-full mt-3 overflow-hidden">
             <div className="h-full bg-[#03FDFF] w-[80%] rounded-full"></div>
           </div>
         </motion.div>
       </div>
    </div>
  );
}

function Confetti({ colors }: { colors: string[] }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-4 rounded-sm"
          style={{ 
             backgroundColor: colors[Math.floor(Math.random() * colors.length)],
             left: `${Math.random() * 100}%`,
             top: -20
          }}
          animate={{ 
             y: ['0vh', '100vh'], 
             rotate: [0, Math.random() * 720],
             x: [0, (Math.random() - 0.5) * 100]
          }}
          transition={{ 
             duration: Math.random() * 3 + 2, 
             ease: "linear",
             repeat: Infinity,
             delay: Math.random() * 2 
          }}
        />
      ))}
    </div>
  );
}

