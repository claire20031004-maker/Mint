import { useMemo, useState } from "react";
import { Bell, Grid2x2, Home, LayoutGrid, Lightbulb, X } from "lucide-react";

import { MoneyColoringPage } from "./MoneyColoringPage";
import { BeyondIndexPage } from "./BeyondIndexPage";
import { MorePage } from "./MorePage";
import { BeyondDiaryPage } from "./BeyondDiaryPage";
import { WeeklyBudgetPage } from "./WeeklyBudgetPage";
import { FinancialAnalysisPage } from "./FinancialAnalysisPage";
import { CentralActionOverlay } from "./CentralActionOverlay";
import { BeyondCardPage } from "./BeyondCardPage";

// --- Subcomponents ---

function TopNav() {
  return (
    <div className="flex items-center justify-between pt-14 pb-4 px-6 md:pt-10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#0A1A24] flex items-center justify-center text-white font-bold text-lg shadow-sm">
          A
        </div>
        <div className="flex bg-white rounded-full p-1 shadow-sm border border-[#EAF3F6]">
          <button className="px-4 py-1.5 rounded-full bg-[#0A1A24] text-white text-[11px] font-bold tracking-wide transition-all">
            Youth
          </button>
          <button className="px-4 py-1.5 rounded-full text-gray-500 text-[11px] font-bold tracking-wide transition-all">
            Official
          </button>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-700 transition-transform active:scale-95">
          <LayoutGrid className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-700 relative transition-transform active:scale-95">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#03FDFF] rounded-full border-2 border-white"></span>
        </button>
      </div>
    </div>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" fill="currentColor"/>
      <path d="M12 4C12 8.418 15.582 12 20 12C15.582 12 12 15.582 12 20C12 15.582 8.418 12 4 12C8.418 12 12 8.418 12 4Z" fill="#FFF" opacity="0.6"/>
    </svg>
  );
}

function FaceBall({ cx, cy, colorType }: { key?: string | number; cx: number, cy: number, colorType: 'pink' | 'green' | 'blue' }) {
  const gradientId = `grad-${colorType}`;
  const faceColor = colorType === 'blue' ? '#2A6B9A' : colorType === 'green' ? '#2B7A4B' : '#A93B3B';
  return (
    <g transform={`translate(${cx}, ${cy})`}>
      <circle cx="1" cy="4" r="10.5" fill="#000000" opacity="0.12" filter="url(#blur-1)"/>
      <circle cx="0" cy="0" r="10.5" fill={`url(#${gradientId})`} />
      <circle cx="0" cy="0" r="10" fill="none" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.3" />
      <circle cx="-3.5" cy="-0.5" r="1.3" fill={faceColor} opacity="0.8"/>
      <circle cx="3.5" cy="-0.5" r="1.3" fill={faceColor} opacity="0.8"/>
      <path d="M-2 2.5 Q0 4.5 2 2.5" stroke={faceColor} strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.8"/>
      <ellipse cx="-4" cy="-5" rx="3" ry="1.8" transform="rotate(-30, -4, -5)" fill="white" opacity="0.9" />
      <path d="M-7.5 1 A 7.5 7.5 0 0 1 -1 -7.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M 2 8 A 8 8 0 0 0 8 2" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
    </g>
  )
}

export function MoneyJarSvg({ fillPercentage = 65, breakdowns = [{type: 'pink', prop: 43}, {type: 'green', prop: 31}, {type: 'blue', prop: 26}] }: { fillPercentage?: number, breakdowns?: {type: 'pink'|'green'|'blue', prop: number}[] }) {
  const balls = useMemo(() => {
    const spots = [];
    for (let r = 0; r < 11; r++) {
      const y = 265 - r * 16.5;
      const isEven = r % 2 === 0;
      const startX = isEven ? 64 : 54;
      const count = isEven ? 9 : 10;
      for (let c = 0; c < count; c++) {
         const x = startX + c * 19; 
         spots.push({ x, y });
      }
    }
    const maxBalls = spots.length;
    const ballCount = Math.floor((fillPercentage / 100) * maxBalls);
    
    const activeSpots = spots.slice(0, ballCount);
    let colors: ('pink'|'green'|'blue')[] = [];
    for(const b of breakdowns) {
        const c = Math.round((b.prop / 100) * ballCount);
        for(let i=0; i<c; i++) colors.push(b.type);
    }
    while(colors.length < ballCount) colors.push('blue');
    while(colors.length > ballCount) colors.pop();
    
    const hashPair = (i: number) => ((i * 17) % ballCount);
    const shuffled = [...colors];
    for(let i=0; i<ballCount; i++) {
        const sw = hashPair(i);
        [shuffled[i], shuffled[sw]] = [shuffled[sw], shuffled[i]];
    }

    return activeSpots.map((spot, i) => ({
      id: `ball-${i}`,
      x: spot.x,
      y: spot.y,
      color: shuffled[i] as 'pink'|'green'|'blue'
    }));
  }, [fillPercentage, breakdowns]);

  return (
    <svg viewBox="0 0 280 320" className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,180,250,0.15)]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="jarBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#E6FAFC" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="jarGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="15%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.8" />
        </linearGradient>
        
        <linearGradient id="jarHighlight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="5%" stopColor="#FFFFFF" stopOpacity="0.2" />
          <stop offset="95%" stopColor="#FFFFFF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="lidWood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDE1AE" />
          <stop offset="40%" stopColor="#EAB76B" />
          <stop offset="100%" stopColor="#C88E3E" />
        </linearGradient>

        <radialGradient id="grad-blue" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#E6F7FF" />
          <stop offset="40%" stopColor="#8BD2FF" />
          <stop offset="80%" stopColor="#55B2F4" />
          <stop offset="100%" stopColor="#3094DB" />
        </radialGradient>
        <radialGradient id="grad-green" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ECFDF2" />
          <stop offset="40%" stopColor="#9DECAE" />
          <stop offset="80%" stopColor="#5FD27C" />
          <stop offset="100%" stopColor="#3DB45E" />
        </radialGradient>
        <radialGradient id="grad-pink" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFF1F1" />
          <stop offset="40%" stopColor="#FFABAB" />
          <stop offset="80%" stopColor="#FA7575" />
          <stop offset="100%" stopColor="#E35252" />
        </radialGradient>

        <filter id="blur-1" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" />
        </filter>
        <filter id="blur-4" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <ellipse cx="140" cy="305" rx="100" ry="12" fill="#00A2D9" opacity="0.1" filter="url(#blur-4)" />

      <rect x="105" y="55" width="70" height="40" fill="url(#jarBg)" />
      <rect x="30" y="85" width="220" height="220" rx="35" fill="url(#jarBg)" />

      {balls.map(b => <FaceBall key={b.id} cx={b.x} cy={b.y} colorType={b.color} />)}

      <rect x="105" y="55" width="70" height="40" fill="url(#jarGlass)" stroke="url(#jarHighlight)" strokeWidth="3" strokeOpacity="0.5" />
      <rect x="30" y="85" width="220" height="220" rx="35" fill="url(#jarGlass)" stroke="url(#jarHighlight)" strokeWidth="3" opacity="0.9" />
      <line x1="105" y1="85" x2="175" y2="85" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />

      <path d="M 35 130 Q 55 200 43 270 Q 80 200 63 130 Z" fill="#FFFFFF" opacity="0.6" filter="url(#blur-4)" />
      <path d="M 245 130 Q 232 200 243 270 Q 224 200 238 130 Z" fill="#FFFFFF" opacity="0.3" filter="url(#blur-1)" />
      <path d="M 80 295 Q 140 300 200 295 A 15 15 0 0 1 210 300 Q 140 310 70 300 A 15 15 0 0 1 80 295 Z" fill="#FFFFFF" opacity="0.6" filter="url(#blur-1)" />

      <rect x="105" y="55" width="70" height="15" fill="#000000" opacity="0.1" filter="url(#blur-1)" />
      <rect x="95" y="30" width="90" height="25" rx="6" fill="url(#lidWood)" />
      <rect x="95" y="32" width="90" height="6" rx="3" fill="#FFF2DA" opacity="0.5" />
      <rect x="95" y="52" width="90" height="3" fill="#9C6219" opacity="0.4" />
    </svg>
  );
}

function MoneyColoring({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="mx-6 bg-white rounded-[32px] flex flex-col overflow-hidden shadow-[0_8px_24px_rgba(3,253,255,0.06)] mb-5 cursor-pointer"
    >
      <div className="w-full bg-gradient-to-br from-[#F5FEFF] to-[#E5F9FA] pt-6 pb-4 px-4 flex flex-col items-center relative group">
        <div className="absolute top-6 right-8 text-[#FFD600] w-5 h-5 flex items-center justify-center animate-pulse">
          <Sparkle />
          <div className="absolute top-0 right-0 w-1 h-1 bg-[#FFD600] rounded-full"></div>
        </div>
        <div className="absolute bottom-10 left-6 text-[#03FDFF] w-4 h-4 opacity-80 rotate-12">
          <Sparkle />
        </div>
        
        <div className="text-center mb-4 relative z-10">
          <h2 className="text-[28px] font-black tracking-tight text-[#0A1A24] leading-none mb-1.5">HKD 4,600</h2>
          <div className="flex items-center justify-center text-[10px] font-bold text-[#3A505F]/60 tracking-wider uppercase">
            <span>Money Coloring</span>
            <span className="ml-1">&gt;</span>
          </div>
        </div>

        <div className="w-full max-w-[260px] aspect-[7/8] relative transform transition-transform duration-500 group-hover:scale-[1.02]">
           <MoneyJarSvg fillPercentage={60} breakdowns={[{type: 'pink', prop: 43}, {type: 'green', prop: 31}, {type: 'blue', prop: 26}]} />
        </div>
      </div>
      
      <div className="w-full p-5 bg-white">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1 items-center">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#FF9B9B] to-[#D94141] shadow-sm"></div>
              <span className="text-[#3A505F] font-bold text-[10px] uppercase tracking-wide">Self-earned</span>
            </div>
            <span className="font-black text-[#0A1A24] text-sm">43%</span>
          </div>
          <div className="w-[1px] h-8 bg-gray-100"></div>
          <div className="flex flex-col gap-1 items-center">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#87E8A0] to-[#3DB45E] shadow-sm"></div>
              <span className="text-[#3A505F] font-bold text-[10px] uppercase tracking-wide">Saved</span>
            </div>
            <span className="font-black text-[#0A1A24] text-sm">31%</span>
          </div>
          <div className="w-[1px] h-8 bg-gray-100"></div>
          <div className="flex flex-col gap-1 items-center">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#8BD2FF] to-[#3094DB] shadow-sm"></div>
              <span className="text-[#3A505F] font-bold text-[10px] uppercase tracking-wide">Family</span>
            </div>
            <span className="font-black text-[#0A1A24] text-sm">26%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BeyondIndex({ onClick }: { onClick?: () => void }) {
  const percentage = 48;
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div 
      onClick={onClick}
      className="mx-6 bg-white rounded-[32px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] p-6 mb-5 flex gap-6 items-center flex-row cursor-pointer"
    >
      <div className="relative w-[130px] h-[130px] shrink-0">
        <svg className="w-full h-full transform -rotate-90 drop-shadow-sm" viewBox="0 0 130 130">
          <circle
            className="text-gray-100"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="65"
            cy="65"
          />
          <circle
            className="text-[#03FDFF]"
            strokeWidth="10"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="65"
            cy="65"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
              transition: "stroke-dashoffset 1s ease-out"
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex items-baseline gap-0.5 mt-0.5 text-[#0A1A24]">
            <span className="text-[28px] leading-none font-black">{percentage}</span>
            <span className="text-sm font-bold">%</span>
          </div>
          <span className="text-[7px] font-bold tracking-widest text-[#93A5B1] uppercase text-center mt-1">Beyond Index</span>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <div className="inline-block px-3 py-1.5 bg-[#FFF4E5] text-[#D88939] text-[9px] font-extrabold rounded-full mb-3 tracking-widest uppercase">
          T2 · Transitioning
        </div>
        <p className="text-[#556976] text-[13px] font-medium leading-normal">
          Red money is carrying more days. Family money is arriving later each cycle.
        </p>
      </div>
    </div>
  );
}

function BudgetChallenge({ onClick }: { onClick?: () => void }) {
  return (
    <div className="mx-6 bg-white rounded-[32px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] mb-5 relative">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-[17px] font-bold text-[#0A1A24]">Weekly Budget Challenge</h3>
        <button className="text-gray-400 font-bold tracking-widest">•••</button>
      </div>

      <div className="mb-6 relative">
        <span className="text-sm font-medium text-gray-500 block mb-1">Remaining</span>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-black text-[#03FDFF]">HKD</span>
          <span className="text-[40px] font-black text-[#0A1A24] leading-none">24</span>
        </div>
        
        {/* Floating Badge */}
        <div className="absolute right-0 top-0 flex flex-col items-center">
          <div className="bg-[#03FDFF] rounded-[18px] w-[52px] py-2.5 flex flex-col items-center shadow-[0_4px_12px_rgba(3,253,255,0.3)]">
            <span className="text-[9px] font-extrabold text-[#0A1A24] uppercase">Days</span>
            <span className="text-[22px] font-black text-[#0A1A24] leading-none mt-0.5">1</span>
          </div>
          <span className="text-[9px] font-bold text-gray-400 tracking-widest mt-1.5 uppercase">Left</span>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="h-[10px] w-full bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#03FDFF] w-[95%] rounded-full shadow-[0_0_10px_rgba(3,253,255,0.5)]"></div>
        </div>
        <div className="flex justify-between text-xs font-semibold text-gray-400">
          <span>Spent HKD 876</span>
          <span>Budget HKD 900</span>
        </div>
      </div>

      <button 
        onClick={onClick}
        className="w-full py-4 rounded-[20px] bg-[#03FDFF] text-[#0A1A24] font-bold text-[15px] transition-all hover:bg-[#00E5FF] active:scale-[0.98] shadow-[0_4px_16px_rgba(3,253,255,0.25)]"
      >
        View details
      </button>
    </div>
  );
}

function FinancialAssistant({ onClick }: { onClick?: () => void }) {
  return (
    <div className="mx-6 bg-white rounded-[32px] p-6 mb-32 border-2 border-[#03FDFF]/50 shadow-[0_8px_30px_rgba(3,253,255,0.1)] relative overflow-hidden">
      <div className="flex justify-between items-center mb-5 relative z-10">
        <span className="text-[10px] font-bold text-[#3A505F] tracking-widest uppercase">Financial Assistant</span>
        <div className="px-3 py-1.5 bg-[#E8FBFC] text-[#00A5B5] text-[9px] font-extrabold rounded-full tracking-widest uppercase">
          T2 · Transitioning
        </div>
      </div>

      <h3 className="text-[22px] font-black text-[#0A1A24] mb-4 leading-[1.2] pr-4 relative z-10">
        You're <span className="text-[#00B8C7]">60%</span> to financial independence
      </h3>
      
      <p className="text-[#556976] text-sm font-medium leading-relaxed mb-8 pr-4 relative z-10">
        Red money now covers 40% of your daily spending. Keep going to reach T3.
      </p>

      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
           <div className="h-full bg-[#03FDFF] w-[60%] rounded-full shadow-[0_0_8px_rgba(3,253,255,0.5)]"></div>
        </div>
        <span className="text-sm font-bold text-[#0A1A24]">60%</span>
      </div>

      <button 
        onClick={onClick}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-[20px] bg-[#03FDFF] text-[#0A1A24] font-bold text-[15px] transition-all hover:bg-[#00E5FF] active:scale-[0.98] shadow-[0_4px_16px_rgba(3,253,255,0.25)] relative z-10"
      >
        View full analysis <span className="text-lg leading-none">→</span>
      </button>

      {/* Subtly faded background decoration */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#03FDFF]/5 rounded-full blur-2xl"></div>
    </div>
  );
}

function BottomNav({ 
  isMoreOpen, 
  toggleMore,
  toggleCentralAction 
}: { 
  isMoreOpen: boolean, 
  toggleMore: () => void,
  toggleCentralAction: () => void 
}) {
  return (
    <div className="absolute bottom-8 left-6 right-6 z-50">
      <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] h-20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-10 flex items-center justify-between relative border border-white">
        
        <button 
          className={`flex flex-col items-center gap-1.5 active:opacity-70 transition-opacity ${isMoreOpen ? 'opacity-40' : 'opacity-100'}`}
          onClick={() => isMoreOpen && toggleMore()}
        >
          <Home className="w-6 h-6 text-[#0A1A24]" strokeWidth={2.5} />
          <span className="text-[10px] font-bold text-[#0A1A24]">Home</span>
        </button>

        {/* Central Action Button */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
           <div className="bg-white p-2 rounded-full shadow-sm">
             <button 
               className="w-14 h-14 rounded-full bg-[#0A1A24] flex items-center justify-center transition-transform active:scale-95 shadow-md"
               onClick={toggleCentralAction}
             >
               <X className="w-7 h-7 text-[#03FDFF]" strokeWidth={3} />
             </button>
           </div>
        </div>

        <button 
          className={`flex flex-col items-center gap-1.5 active:opacity-100 transition-opacity ${isMoreOpen ? 'opacity-100' : 'opacity-40'}`}
          onClick={() => !isMoreOpen && toggleMore()}
        >
          <Grid2x2 className="w-[22px] h-[22px] text-[#0A1A24]" strokeWidth={2.5} />
          <span className="text-[10px] font-bold text-[#0A1A24]">More</span>
        </button>

      </div>
      
      {/* iOS Home Indicator */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black/20 rounded-full"></div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'money-coloring' | 'beyond-index' | 'beyond-diary' | 'weekly-budget' | 'financial-analysis' | 'beyond-card'>('home');
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isCentralActionOpen, setIsCentralActionOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as any);
    setIsMoreOpen(false);
    setIsCentralActionOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D4F8FB] to-[#BEEFF2] flex items-center justify-center p-4 sm:p-8 font-sans">
      {/* Mobile Device Mockup Container for Desktop View */}
      <div className="w-full max-w-[390px] h-[100dvh] sm:h-[844px] bg-[#EAFDFD] relative overflow-hidden flex flex-col sm:rounded-[55px] sm:border-[12px] border-black sm:shadow-2xl">
        
        {currentPage === 'home' && (
          <>
            {/* Header Section */}
            <div className={`sticky top-0 z-40 bg-[#EAFDFD]/95 backdrop-blur-md pb-2 pt-2 transition-transform duration-300 ${(isMoreOpen || isCentralActionOpen) ? 'scale-95 -translate-y-10 opacity-50' : ''}`}>
              <TopNav />
              <div className="px-6 pt-1">
                <h1 className="text-[32px] font-bold tracking-tight text-[#0A1A24] leading-none mb-1.5">Hi, Ava.</h1>
                <p className="text-[#556976] text-[13px] font-medium">This is your 10th week on Mox Youth.</p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className={`flex-1 overflow-y-auto pb-8 hide-scrollbar pt-6 bg-gradient-to-b from-[#EAFDFD] to-[#DDF6F8] transition-transform duration-300 ${(isMoreOpen || isCentralActionOpen) ? 'scale-95 -translate-y-4 opacity-50' : ''}`}>
              <MoneyColoring onClick={() => setCurrentPage('money-coloring')} />
              <BeyondIndex onClick={() => setCurrentPage('beyond-index')} />
              <BudgetChallenge onClick={() => setCurrentPage('weekly-budget')} />
              <FinancialAssistant onClick={() => setCurrentPage('financial-analysis')} />
            </div>

            {/* More Page Overlay */}
            {isMoreOpen && <MorePage onClose={() => setIsMoreOpen(false)} onNavigate={handleNavigate} />}

            {/* Central Action Overlay */}
            {isCentralActionOpen && <CentralActionOverlay onClose={() => setIsCentralActionOpen(false)} />}

            {/* Floating Bottom Nav */}
            <BottomNav 
              isMoreOpen={isMoreOpen} 
              toggleMore={() => {
                setIsMoreOpen(!isMoreOpen);
                setIsCentralActionOpen(false);
              }}
              toggleCentralAction={() => {
                setIsCentralActionOpen(!isCentralActionOpen);
                setIsMoreOpen(false);
              }}
            />
          </>
        )}

        {currentPage === 'money-coloring' && (
          <MoneyColoringPage onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'beyond-index' && (
          <BeyondIndexPage onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'beyond-diary' && (
          <BeyondDiaryPage onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'weekly-budget' && (
          <WeeklyBudgetPage onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'financial-analysis' && (
          <FinancialAnalysisPage onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'beyond-card' && (
          <BeyondCardPage onBack={() => setCurrentPage('home')} />
        )}
        
      </div>
    </div>
  );
}
