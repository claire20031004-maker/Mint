import { ChevronLeft, MoreHorizontal, Info, Camera, Mic } from "lucide-react";
import { useState } from "react";

export function BeyondIndexPage({ onBack }: { onBack: () => void }) {
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);

  // Chart rendering points helper
  const renderPoints = () => {
    const width = 380;
    const height = 180;
    const paddingLeft = 15;
    const paddingRight = 15;
    const paddingBottom = 30;
    const paddingTop = 20;
    
    const chartWidth = width - paddingLeft - paddingRight; 
    const chartHeight = height - paddingTop - paddingBottom;
    
    const getY = (percent: number) => height - paddingBottom - (percent / 100) * chartHeight;
    
    const points = [
      { val: 30, label: 'OCT' },
      { val: 38, label: 'NOV' },
      { val: 42, label: 'DEC' },
      { val: 52, label: 'JAN' },
      { val: 44, label: 'FEB' },
      { val: 48, label: 'MAR' },
    ];
    
    const xStep = chartWidth / (points.length - 1);
    
    const calculatedPoints = points.map((p, i) => ({
      x: paddingLeft + i * xStep,
      y: getY(p.val),
      valStr: `${p.val}%`,
      label: p.label
    }));

    const d = `M ${calculatedPoints.map(p => `${p.x} ${p.y}`).join(' L ')}`;

    return (
      <div className="relative">
        {/* Target Badge */}
        <div 
          className="absolute right-0 bg-[#03FDFF] text-[#0A1A24] text-[11px] font-extrabold px-3 py-0.5 rounded-full z-10 shadow-sm mr-2"
          style={{ top: `${(getY(80) / height) * 100}%`, transform: 'translateY(-50%)' }}
        >
          T3 80%
        </div>
        
        <svg className="w-full h-auto aspect-[380/180] mt-2 block" viewBox={`0 0 ${width} ${height}`}>
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#03FDFF" />
              <stop offset="100%" stopColor="#03FDFF" />
            </linearGradient>
          </defs>
          
          {/* Helper dashed line for Target 80% */}
          <line x1={paddingLeft} y1={getY(80)} x2={width - paddingRight} y2={getY(80)} stroke="#03FDFF" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
          
          {/* Main data line */}
          <path d={d} fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" />
          
          {/* Points and labels */}
          {calculatedPoints.map((p, i) => (
            <g key={i}>
              {i === calculatedPoints.length - 1 ? (
                // Highlight the last point
                <circle cx={p.x} cy={p.y} r="5.5" fill="white" stroke="#03FDFF" strokeWidth="2.5" />
              ) : (
                <circle cx={p.x} cy={p.y} r="3.5" fill="#03FDFF" />
              )}
              
              {/* Value text below/above the point */}
              <text 
                x={p.x} 
                y={i === calculatedPoints.length - 1 ? p.y - 14 : p.y + 16} 
                textAnchor="middle" 
                fontSize="11" 
                fill={i === calculatedPoints.length - 1 ? "#0A1A24" : "#7A8A96"} 
                fontWeight="bold"
              >
                {p.valStr}
              </text>

              {/* X-axis labels */}
              <text 
                x={p.x} 
                y={height - 8} 
                textAnchor="middle" 
                fontSize="10" 
                fill={i === calculatedPoints.length - 1 ? "#029A9B" : "#A6B8C4"} 
                fontWeight="bold"
                letterSpacing="0.05em"
              >
                {p.label}
              </text>
            </g>
          ))}
          
        </svg>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 z-50 bg-[#EAFDFD] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 pt-12 shrink-0">
        <button onClick={onBack} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <ChevronLeft className="w-6 h-6 text-[#0A1A24]" />
        </button>
        <h1 className="text-lg font-bold text-[#0A1A24]">Beyond Index</h1>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <MoreHorizontal className="w-5 h-5 text-[#0A1A24]" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-12 hide-scrollbar">
        {/* Chart Card */}
        <div className="mx-6 bg-white rounded-[32px] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border-2 border-[#03FDFF] mb-6 relative">
          {/* Info Button */}
          <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#03FDFF] flex items-center justify-center shadow-[0_0_12px_rgba(3,253,255,0.4)]">
            <Info className="w-4 h-4 text-white" />
          </div>

          <div className="mb-2">
            <span className="text-[10px] font-bold tracking-widest text-[#2A8F90] uppercase block">YOUR INDEX · MARCH</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[48px] font-black leading-none text-[#0A1A24] tracking-tight">48%</span>
            <div className="bg-[#E4F9F4] text-[#3DB45E] px-3 py-1.5 rounded-full flex items-center gap-1 font-bold text-sm">
              <span className="text-[10px]">↑</span> +4%
            </div>
          </div>

          {/* Target Badge */}
          <div className="relative">
             {renderPoints()}
          </div>

          <div className="bg-[#E5F9FA] rounded-[24px] py-4 text-center mt-2">
            <span className="text-[#2A8F90] text-sm font-medium">Reach <strong className="font-bold text-[#0A1A24]">80%</strong> to unlock <strong className="font-bold text-[#0A1A24]">T3 status</strong></span>
          </div>
        </div>

        {/* Spending List */}
        <div className="mx-6 bg-white rounded-[24px] py-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] mb-8">
          <div className="px-5 flex items-start justify-between mb-6">
            <div>
              <h3 className="text-[17px] font-bold text-[#0A1A24] mb-0.5">Spending this month</h3>
              <p className="text-[#7A8A96] text-[13px] font-medium">Total HKD 3,000 · 5 transactions</p>
            </div>
            <div className="bg-[#E5F9FA] text-[#2A8F90] px-3 py-1 rounded-full text-[11px] font-extrabold tracking-widest uppercase">
              MARCH
            </div>
          </div>

          <div className="flex flex-col">
            {/* Item 1 */}
            <div className="flex items-center py-3.5 px-5 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[7px] h-10 bg-[#FF9B9B] rounded-r-full"></div>
              <div className="flex-1 min-w-0 pl-1">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#0A1A24] text-[15px] truncate max-w-[140px]">McDonald's</span>
                  <span className="text-[#3A505F] text-[13px] italic whitespace-nowrap">"和阿明吃午餐 🍔"</span>
                </div>
                <span className="text-[#7A8A96] text-[12px] font-medium">Today 12:30 · Tsim Sh...</span>
              </div>
              <div className="flex flex-col items-end shrink-0 pl-3">
                <span className="font-bold text-[#0A1A24] text-[15px]">HKD 45</span>
                <span className="text-[#3DB45E] text-[12px] font-bold">+0.20%</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center py-3.5 px-5 relative mt-1">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[7px] h-10 bg-[#8BD2FF] rounded-r-full"></div>
              <div className="flex-1 min-w-0 pl-1">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#0A1A24] text-[15px] truncate">Family dinner</span>
                  <span 
                    className="text-[#03FDFF] text-[13px] font-bold cursor-pointer"
                    onClick={() => setIsNoteModalOpen(true)}
                  >
                    + Add note
                  </span>
                </div>
                <span className="text-[#7A8A96] text-[12px] font-medium">Yesterday 19:30 · Cau...</span>
              </div>
              <div className="flex flex-col items-end shrink-0 pl-3">
                <span className="font-bold text-[#0A1A24] text-[15px]">HKD 600</span>
                <span className="text-[#E35252] text-[12px] font-bold">-1.20%</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center py-3.5 px-5 relative mt-1">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[7px] h-10 bg-[#9DECAE] rounded-r-full"></div>
              <div className="flex-1 min-w-0 pl-1">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#0A1A24] text-[15px] truncate max-w-[130px]">Page One Book...</span>
                  <span className="text-[#3A505F] text-[13px] italic whitespace-nowrap">"考试用书 📚"</span>
                </div>
                <span className="text-[#7A8A96] text-[12px] font-medium">Mar 28 · IFC Mall</span>
              </div>
              <div className="flex flex-col items-end shrink-0 pl-3">
                <span className="font-bold text-[#0A1A24] text-[15px]">HKD 180</span>
                <span className="text-[#3DB45E] text-[12px] font-bold">+0.10%</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center py-3.5 px-5 relative mt-1">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[7px] h-10 bg-[#FF9B9B] rounded-r-full"></div>
              <div className="flex-1 min-w-0 pl-1">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#0A1A24] text-[15px] truncate max-w-[140px]">Starbucks</span>
                  <span className="text-[#3A505F] text-[13px] italic whitespace-nowrap">"早餐 ☕️"</span>
                </div>
                <span className="text-[#7A8A96] text-[12px] font-medium">Mar 27 · 09:15 · Central</span>
              </div>
              <div className="flex flex-col items-end shrink-0 pl-3">
                <span className="font-bold text-[#0A1A24] text-[15px]">HKD 38</span>
                <span className="text-[#3DB45E] text-[12px] font-bold">+0.15%</span>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-center py-3.5 px-5 relative mt-1">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[7px] h-10 bg-[#8BD2FF] rounded-r-full"></div>
              <div className="flex-1 min-w-0 pl-1">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#0A1A24] text-[15px] truncate max-w-[140px]">Mom's allowance</span>
                  <span className="text-[#3A505F] text-[13px] italic whitespace-nowrap">"妈妈给的零用钱"</span>
                </div>
                <span className="text-[#7A8A96] text-[12px] font-medium">Mar 26 · 18:00</span>
              </div>
              <div className="flex flex-col items-end shrink-0 pl-3">
                <span className="font-bold text-[#0A1A24] text-[15px]">HKD 200</span>
                <span className="text-[#E35252] text-[12px] font-bold">-0.50%</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Add Note Modal */}
      {isNoteModalOpen && (
        <div className="absolute inset-0 z-[60] flex flex-col justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#0A1A24]/50 backdrop-blur-[2px]"
            onClick={() => setIsNoteModalOpen(false)}
          />
          
          {/* Bottom Sheet */}
          <div className="relative bg-[#F8FBFC] rounded-t-[32px] w-full pb-8 flex flex-col hide-scrollbar animate-in slide-in-from-bottom-full duration-300 shadow-[0_-8px_32px_rgba(0,0,0,0.1)]">
            {/* Drag Handle */}
            <div className="w-full flex justify-center pt-4 pb-2">
              <div className="w-12 h-1 bg-[#D1D9E0] rounded-full"></div>
            </div>

            <div className="px-6 flex-1 overflow-y-auto">
              {/* Transaction Context */}
              <div className="bg-white rounded-[24px] p-5 flex items-center justify-between mb-6 shadow-sm border border-[#F1F5F8]">
                <div className="flex items-center gap-3">
                  <div className="w-[6px] h-9 bg-[#FF9B9B] rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-[#0A1A24] text-[15px]">McDonald's</h4>
                    <p className="text-[#A6B8C4] text-[12px] font-medium">Today 12:30</p>
                  </div>
                </div>
                <span className="font-bold text-[#0A1A24] text-[16px]">HKD 45</span>
              </div>

              {/* Form Label */}
              <label className="text-[11px] font-bold tracking-widest text-[#7A8A96] uppercase block mb-3 pl-1">
                REMEMBER THIS MOMENT
              </label>

              {/* Text Area */}
              <textarea 
                className="w-full bg-[#F3F6F8] rounded-[20px] p-4 text-[#0A1A24] placeholder:text-[#A6B8C4] text-[15px] resize-none h-[120px] mb-4 focus:outline-none focus:ring-1 focus:ring-[#03FDFF] font-medium border-none"
                placeholder="Tap to write a note..."
                autoFocus
              />

              {/* Add Photo Button */}
              <button className="w-full border-[1.5px] border-dashed border-[#03FDFF] rounded-[16px] py-3.5 mb-3 flex items-center justify-center gap-2 bg-white">
                <Camera className="w-5 h-5 text-[#25B4B4]" />
                <span className="text-[#25B4B4] font-bold text-[14px]">Add a photo</span>
              </button>

              {/* Record Voice Note Button */}
              <button className="w-full border-[1.5px] border-dashed border-[#03FDFF] rounded-[16px] p-3 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#03FDFF] flex items-center justify-center shadow-[0_0_12px_rgba(3,253,255,0.4)]">
                    <Mic className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-[#25B4B4] font-bold text-[14px] leading-none">Record a voice note</span>
                    <span className="text-[#A6B8C4] text-[11px] font-medium">Tap and hold to record</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 pr-3">
                  <div className="w-[3px] h-4 bg-[#BEEFF2] rounded-full"></div>
                  <div className="w-[3px] h-6 bg-[#8BD2FF] rounded-full"></div>
                  <div className="w-[3px] h-5 bg-[#BEEFF2] rounded-full"></div>
                  <div className="w-[3px] h-3 bg-[#BEEFF2] rounded-full"></div>
                </div>
              </button>
            </div>

            {/* Bottom Actions */}
            <div className="px-6 pt-8 flex items-center gap-4">
              <button 
                onClick={() => setIsNoteModalOpen(false)}
                className="flex-[0.4] bg-[#F3F6F8] text-[#3A505F] font-bold py-4 rounded-[20px] text-[15px]"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsNoteModalOpen(false)}
                className="flex-[0.6] bg-[#03FDFF] text-[#0A1A24] font-bold py-4 rounded-[20px] text-[15px] shadow-[0_4px_16px_rgba(3,253,255,0.3)] hover:brightness-105 transition-all"
              >
                Save note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
