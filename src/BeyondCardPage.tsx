import React, { useState } from 'react';
import { ChevronLeft, Share2, RefreshCw, Plane, Ticket, CreditCard, Smartphone, Scale, Lightbulb, Users, Briefcase } from 'lucide-react';

export function BeyondCardPage({ onBack }: { onBack: () => void }) {
  const [selectedColor, setSelectedColor] = useState('cyan');
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Travel', 'Lifestyle', 'Growth', 'Community'];

  const colors = [
    { id: 'cyan', hex: '#03FDFF', name: 'Original Cyan', hue: 0 },
    { id: 'pink', hex: '#FFB5D8', name: 'Youth Pink', hue: 130 },
    { id: 'green', hex: '#A8E6A1', name: 'Fresh Green', hue: -70 },
    { id: 'blue', hex: '#87CEFA', name: 'Sky Blue', hue: 40 },
    { id: 'purple', hex: '#E6E6FA', name: 'Lavender', hue: 80 },
  ];

  const tangibleBenefits = [
    {
      id: 'lounge',
      category: 'Travel',
      title: 'Airport VIP Lounge Access',
      desc: 'Cross-border travel & overseas study trips made comfortable and prestigious — exclusive privilege among peers.',
      icon: <Plane className="w-5 h-5 text-white" strokeWidth={2} />,
      bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      bgColor: 'from-[#0A1A24] to-[#1a3a50]'
    },
    {
      id: 'concerts',
      category: 'Lifestyle',
      title: 'Priority Booking for Concerts',
      desc: 'Early access to hot concerts, art shows, and trend exhibitions — say goodbye to ticket-grabbing failures.',
      icon: <Ticket className="w-5 h-5 text-white" strokeWidth={2} />,
      bgImage: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80",
      bgColor: 'from-[#0A1A24] to-[#1a3a50]'
    },
    {
      id: 'transfer',
      category: 'Travel',
      title: 'Fee-Free Cross-Border Transfers',
      desc: 'Essential for HK students sending/receiving allowance and currency exchange — significant long-term savings.',
      icon: <CreditCard className="w-5 h-5 text-[#0A1A24]" strokeWidth={2} />,
      bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      bgColor: 'from-[#03FDFF] to-[#00d0d1]'
    },
    {
      id: 'installments',
      category: 'Lifestyle',
      title: '0% Installment on Tech',
      desc: 'Interest-free installments on phones, tablets, cameras, and gaming consoles — no repayment pressure.',
      icon: <Smartphone className="w-5 h-5 text-white" strokeWidth={2} />,
      bgImage: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
      bgColor: 'from-[#0A1A24] to-[#1a3a50]'
    }
  ];

  const softBenefits = [
    {
      id: 'legal',
      category: 'Growth',
      title: 'Professional Legal Consultation',
      desc: 'Expert legal advice on contracts, rental disputes, cross-border matters, and consumer rights protection.',
      icon: <Scale className="w-5 h-5 text-white" strokeWidth={2} />,
      bgImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
      bgColor: 'from-[#4B839E] to-[#2A5069]'
    },
    {
      id: 'startup',
      category: 'Growth',
      title: 'Entrepreneurship Coaching',
      desc: 'Business idea structuring, foundational guidance, resource matching, and pitfall avoidance for student founders.',
      icon: <Lightbulb className="w-5 h-5 text-white" strokeWidth={2} />,
      bgImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
      bgColor: 'from-[#4B839E] to-[#2A5069]'
    },
    {
      id: 'club',
      category: 'Community',
      title: 'Exclusive Youth Members Club',
      desc: 'A premium student community curated by the bank — social gatherings, themed salons, and offline networking events.',
      icon: <Users className="w-5 h-5 text-white" strokeWidth={2} />,
      bgImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      bgColor: 'from-[#4B839E] to-[#2A5069]'
    },
    {
      id: 'career',
      category: 'Growth',
      title: '1-on-1 Career Planning',
      desc: 'Tailored guidance for further studies, job hunting, and internships — covering direction planning, resume optimization.',
      icon: <Briefcase className="w-5 h-5 text-white" strokeWidth={2} />,
      bgImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      bgColor: 'from-[#4B839E] to-[#2A5069]'
    }
  ];

  const filteredTangible = tangibleBenefits.filter(b => activeTab === 'All' || activeTab === b.category);
  const filteredSoft = softBenefits.filter(b => activeTab === 'All' || activeTab === b.category);

  return (
    <div className="min-h-screen bg-[#F8FBFC] flex flex-col font-sans pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[#F8FBFC]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-[#F1F5F8]">
        <button onClick={onBack} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <ChevronLeft className="w-6 h-6 text-[#0A1A24]" />
        </button>
        <span className="font-bold text-[#0A1A24] text-[17px]">Beyond Card</span>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 hide-scrollbar pt-6 text-[#0A1A24]">
        
        {/* Section 1: Card Customization */}
        <div className="mb-10">
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h2 className="text-[#3A505F] text-[11px] font-bold tracking-widest uppercase mb-1">Make it yours</h2>
              <h3 className="text-[#0A1A24] font-black text-2xl">Card Customization</h3>
            </div>
            <span className="bg-[#0A1A24] text-[#03FDFF] text-[10px] uppercase font-bold px-2 py-1 rounded-[6px]">Premium</span>
          </div>

          <div className="bg-white rounded-[32px] p-6 shadow-sm border border-[#F1F5F8]">
            {/* Card Preview Area */}
            <div className="w-full aspect-[1.58] rounded-[18px] relative overflow-hidden mb-8 shadow-xl transition-all duration-500 transform hover:scale-[1.02] border border-[#F1F5F8]">
              <div 
                className="w-full h-full p-6 flex flex-col justify-between"
                style={{
                  background: `linear-gradient(135deg, ${colors.find(c => c.id === selectedColor)?.hex}40 0%, ${colors.find(c => c.id === selectedColor)?.hex} 100%)`,
                }}
              >
                <div className="flex justify-between items-start">
                  <span className="font-bold text-white tracking-widest text-xl drop-shadow-md mix-blend-overlay">MOX YOUTH</span>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/40 backdrop-blur-md"></div>
                    <div className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md"></div>
                  </div>
                </div>
                <div>
                  <div className="w-12 h-8 rounded bg-gradient-to-br from-white/60 to-white/20 border border-white/40 shadow-inner backdrop-blur-md mb-6"></div>
                  <div className="font-medium text-white tracking-widest uppercase drop-shadow-md text-sm mix-blend-overlay">PEONY WONG</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-[#3A505F] text-[13px] font-bold mb-4">Choose Card Color</p>
              <div className="flex justify-between">
                {colors.map(c => (
                  <button 
                    key={c.id}
                    onClick={() => setSelectedColor(c.id)}
                    className={`w-10 h-10 rounded-full transition-transform ${selectedColor === c.id ? 'scale-125 shadow-md border-2 border-white' : 'scale-100 opacity-60'}`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={`Select ${c.name}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full py-4 bg-[#0A1A24] text-[#03FDFF] rounded-full font-bold text-[15px] shadow-sm hover:shadow-md transition-all">
                Save Design
              </button>
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedColor('cyan')}
                  className="flex-1 py-3.5 bg-white border border-[#E5ECEE] text-[#3A505F] rounded-full font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-[#F8FBFC] transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </button>
                <button className="flex-1 py-3.5 bg-white border border-[#E5ECEE] text-[#3A505F] rounded-full font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-[#F8FBFC] transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share to Social
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Deposit Progress */}
        <div className="mb-10">
          <div className="mb-6">
            <h2 className="text-[#3A505F] text-[11px] font-bold tracking-widest uppercase mb-1">Status Tracking</h2>
            <h3 className="text-[#0A1A24] font-black text-2xl">Deposit Progress</h3>
          </div>

          <div className="bg-white text-[#0A1A24] rounded-[32px] p-8 shadow-sm border border-[#F1F5F8] relative overflow-hidden">
            {/* Decor ring */}
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full border-2 border-[#03FDFF]/30"></div>
            <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full border border-[#03FDFF]/30"></div>

            <div className="flex flex-col items-center justify-center mb-6">
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Background Ring */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="transparent" stroke="#F1F5F8" strokeWidth="8" />
                  <circle 
                    cx="50" cy="50" r="45" fill="transparent" stroke="#03FDFF" strokeWidth="8" 
                    strokeLinecap="round" 
                    strokeDasharray="283" 
                    strokeDashoffset={283 * (1 - 0.625)}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                
                <div className="text-center font-bold">
                  <span className="text-[12px] text-[#A6B8C4] uppercase tracking-wider block mb-1">Current</span>
                  <span className="text-2xl text-[#0A1A24] tracking-tight">187,500</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-[#F1F5F8] pb-3">
                <span className="text-[#7A8A96] text-[13px] font-medium">Goal Amount</span>
                <span className="font-bold text-[16px] text-[#0A1A24]">HKD 300,000</span>
              </div>
              <div className="flex justify-between items-end border-b border-[#F1F5F8] pb-3">
                <span className="text-[#7A8A96] text-[13px] font-medium">Completion</span>
                <span className="font-bold text-[16px] text-[#2A8F90]">62.5%</span>
              </div>
              <div className="flex justify-between items-end pt-1">
                <span className="text-[#7A8A96] text-[13px] font-medium">Away to unlock</span>
                <span className="font-bold text-[16px] text-[#0A1A24]">HKD 112,500</span>
              </div>
            </div>
            
            <button className="w-full mt-8 py-3.5 bg-[#03FDFF] hover:bg-[#00E5FF] rounded-full font-bold text-[15px] transition-colors text-[#0A1A24] shadow-sm">
              Add Deposit Now
            </button>
          </div>
        </div>

        {/* Section 3: Card Benefits */}
        <div>
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h2 className="text-[#3A505F] text-[11px] font-bold tracking-widest uppercase mb-1">Exclusive Privileges</h2>
              <h3 className="text-[#0A1A24] font-black text-2xl">Card Benefits</h3>
            </div>
          </div>

          <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-6 pb-2 -mx-6 px-6">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-bold transition-colors shadow-sm ${
                  activeTab === tab ? 'bg-[#0A1A24] text-[#03FDFF]' : 'bg-white text-[#7A8A96] border border-[#F1F5F8]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {filteredTangible.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#EAFDFD] flex items-center justify-center shrink-0">
                  <span className="text-[#2A8F90] text-[16px]">💎</span>
                </div>
                <h4 className="font-bold text-[#0A1A24] text-[17px]">Tangible Premium Benefits</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {filteredTangible.map(benefit => (
                  <div key={benefit.id} className="bg-white rounded-2xl shadow-sm border border-[#F1F5F8] flex flex-col h-full hover:shadow-md transition-shadow overflow-hidden">
                    <div className={`w-full aspect-[4/3] bg-gradient-to-br ${benefit.bgImage ? '' : benefit.bgColor} flex items-center justify-center shrink-0 relative overflow-hidden group`}>
                      {benefit.bgImage ? (
                        <img src={benefit.bgImage} alt={benefit.title} className="w-full h-full object-cover" />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-black/10 flex items-center justify-center z-0">
                            <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">IMAGE</span>
                          </div>
                          <div className="relative z-10 scale-[2] opacity-30">{benefit.icon}</div>
                        </>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h5 className="font-bold text-[#0A1A24] text-[13px] mb-2 leading-snug">{benefit.title}</h5>
                      <p className="text-[#7A8A96] text-[11px] font-medium leading-relaxed mt-auto">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredSoft.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#FFF5E5] flex items-center justify-center shrink-0">
                  <span className="text-[#D08B2A] text-[16px]">🌱</span>
                </div>
                <h4 className="font-bold text-[#0A1A24] text-[17px]">Soft Empowerment Benefits</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {filteredSoft.map(benefit => (
                  <div key={benefit.id} className="bg-white rounded-2xl shadow-sm border border-[#F1F5F8] flex flex-col h-full hover:shadow-md transition-shadow overflow-hidden">
                    <div className={`w-full aspect-[4/3] bg-gradient-to-br ${benefit.bgImage ? '' : benefit.bgColor} flex items-center justify-center shrink-0 relative overflow-hidden group`}>
                      {benefit.bgImage ? (
                        <img src={benefit.bgImage} alt={benefit.title} className="w-full h-full object-cover" />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-0">
                            <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">IMAGE</span>
                          </div>
                          <div className="relative z-10 scale-[2] opacity-30">{benefit.icon}</div>
                        </>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h5 className="font-bold text-[#0A1A24] text-[13px] mb-2 leading-snug">{benefit.title}</h5>
                      <p className="text-[#7A8A96] text-[11px] font-medium leading-relaxed mt-auto">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
