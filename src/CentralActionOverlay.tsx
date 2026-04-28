import { X, TrendingUp, Globe, Zap, ArrowRight, Plus, ArrowLeft } from "lucide-react";

export function CentralActionOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-[60] flex flex-col justify-end overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0A1A24]/40 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
      />
      
      {/* Content */}
      <div 
        className="relative w-full bg-white h-[65%] shadow-[-10px_-10px_20px_rgba(0,0,0,0.05)]"
        style={{ borderRadius: '50% 50% 0 0 / 80px 80px 0 0' }}
      >
        <div className="px-8 h-full flex flex-col pt-12">
          
          <div className="flex-1 mt-6 px-4">
            
            {/* Top row */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-col items-center gap-2">
                <button className="w-[52px] h-[52px] bg-[#0A1A24] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95">
                  <TrendingUp className="w-[22px] h-[22px] text-white" strokeWidth={2} />
                </button>
                <span className="text-[11px] font-medium text-[#0A1A24]">Transactions</span>
              </div>
            </div>

            {/* Middle row */}
            <div className="flex justify-between items-start mb-8 px-2">
               <div className="flex flex-col items-center gap-2 w-[70px]">
                  <button className="w-[52px] h-[52px] bg-[#0A1A24] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95">
                    <span className="text-white text-[15px] font-medium font-serif">¥/€</span>
                  </button>
                  <span className="text-[11px] font-medium text-[#0A1A24] text-center leading-tight">Exchange</span>
               </div>

               <div className="flex flex-col items-center gap-2 w-[70px]">
                  <button className="w-[52px] h-[52px] bg-[#0A1A24] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95">
                    <Globe className="w-[20px] h-[20px] text-white" strokeWidth={2} />
                  </button>
                  <span className="text-[11px] font-medium text-[#0A1A24] text-center leading-tight">Global Transfer</span>
               </div>

               <div className="flex flex-col items-center gap-2 w-[70px]">
                  <button className="w-[52px] h-[52px] bg-[#0A1A24] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95">
                    <Zap className="w-[20px] h-[20px] text-white fill-white" strokeWidth={1} />
                  </button>
                  <span className="text-[11px] font-medium text-[#0A1A24] text-center leading-tight">Pay Bills</span>
               </div>
            </div>

            {/* Bottom row */}
            <div className="flex justify-between items-start px-2">
               <div className="flex flex-col items-center gap-2 w-[70px]">
                  <button className="w-[52px] h-[52px] bg-[#0A1A24] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 relative">
                    <div className="w-[18px] h-[18px] rounded-full border-[1.5px] border-white flex items-center justify-center">
                       <ArrowRight className="w-3 h-3 text-white" strokeWidth={2.5} />
                    </div>
                  </button>
                  <span className="text-[11px] font-medium text-[#0A1A24] text-center leading-tight">Transfer</span>
               </div>

               <div className="flex flex-col items-center gap-2 w-[70px]">
                  <button className="w-[52px] h-[52px] bg-[#0A1A24] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95">
                    <Plus className="w-6 h-6 text-white" strokeWidth={2} />
                  </button>
                  <span className="text-[11px] font-medium text-[#0A1A24] text-center leading-tight">Add Money</span>
               </div>

               <div className="flex flex-col items-center gap-2 w-[70px]">
                  <button className="w-[52px] h-[52px] bg-[#0A1A24] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 relative">
                    <div className="w-[18px] h-[18px] rounded-full border-[1.5px] border-white flex items-center justify-center">
                       <ArrowLeft className="w-3 h-3 text-white" strokeWidth={2.5} />
                    </div>
                  </button>
                  <span className="text-[11px] font-medium text-[#0A1A24] text-center leading-tight">Receive</span>
               </div>
            </div>

          </div>

          <div className="pb-8 pt-4 flex justify-center">
             <button 
                onClick={onClose}
                className="w-14 h-14 bg-transparent flex items-center justify-center transition-transform active:scale-95"
             >
                <X className="w-8 h-8 text-[#03FDFF]" strokeWidth={3} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
