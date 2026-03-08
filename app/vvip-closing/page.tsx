"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, CameraOff, Sparkles, LayoutTemplate, Flame, Zap, Store, TrendingUp, Lock, ShieldCheck, Target, PenTool, Users, MapPin
} from 'lucide-react';
import OfficialHeader from '@/components/OfficialHeader';
import { MdLineupContent, StoreLayoutContent } from '@/components/StandardGuideContent';
const VVIP_SLIDES = [
  // Slide 1: 패러다임 시프트
  {
    id: "01",
    icon: <CameraOff className="w-12 h-12 text-yellow-500 mb-6" />,
    title: "공간 비즈니스의 퀀텀 점프",
    subtitle: "The Paradigm Shift",
    content: (
      <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
        <p className="text-2xl font-light text-white mb-8 border-l-4 border-yellow-500 pl-4">
          "우리는 더 이상 <strong className="text-pink-400">사진관</strong>이 아닙니다.<br/>
          K-콘텐츠와 IP가 오프라인에서 소비되는 <strong className="text-yellow-400">'복합 문화 플랫폼(O2O)'</strong>입니다."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="text-gray-400 text-sm font-bold mb-2">AS-IS (한계점)</h4>
            <p className="text-white">사진만 찍고 5분 만에 이탈하는 포화된 포토 부스 트래픽</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-pink-500/20 to-yellow-500/20 border border-yellow-500/30 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 animate-pulse" />
            <h4 className="text-yellow-400 text-sm font-bold mb-2 relative z-10">TO-BE (플랫폼)</h4>
            <p className="text-white relative z-10">프리미엄 IP 가챠 투입으로 체류 시간 극대화 및 강력한 추가 지출(ATV) 창출</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 2: 강남역 데이터 (반다이 효과)
  {
    id: "02",
    icon: <Flame className="w-12 h-12 text-pink-500 mb-6" />,
    title: "숫자로 증명된 '앵커 테넌트' 효과",
    subtitle: "PoC 1-1. Gangnam Station Data",
    content: (
      <div className="space-y-8 text-lg text-gray-300">
        <p>글로벌 No.1 IP <strong className="text-white">'반다이 남코(Bandai Namco)'</strong> 도입 직후, 강남역 1호점의 매출은 수직 상승했습니다.</p>
        
        <div className="w-full bg-[#111] p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl">
          <h4 className="font-bold text-white mb-6">강남역 1호점 가챠 실제 매출액 및 반다이 비중</h4>
          <div className="space-y-6">
            {[
              { month: "25년 11월", total: 2888, bandai: 1504, share: 52.1, width: "100%" },
              { month: "25년 12월", total: 2750, bandai: 1190, share: 43.3, width: "95%" },
              { month: "26년 01월", total: 1638, bandai: 330, share: 20.2, width: "56%" },
              { month: "26년 02월", total: 2085, bandai: 736, share: 35.3, width: "72%" }
            ].map((data, idx) => (
              <div key={idx} className="relative">
                <div className="flex justify-between text-sm font-bold text-gray-400 mb-2">
                  <span>{data.month}</span>
                  <span className="text-white">{data.total.toLocaleString()}만원 <span className="text-pink-400 text-xs ml-2">(Bandai {data.share}%)</span></span>
                </div>
                <div className="w-full h-5 bg-zinc-800 rounded-r-full overflow-hidden flex">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: data.width }} transition={{ duration: 1, delay: idx * 0.1 }} className="h-full bg-gradient-to-r from-pink-600 to-pink-400 relative">
                    <div style={{ width: `${data.share}%` }} className="absolute left-0 top-0 h-full bg-yellow-500 border-r-2 border-black" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-pink-500 rounded-sm" /> 총 가챠 매출</div>
            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-yellow-500 rounded-sm" /> 반다이 기기 매출</div>
          </div>
        </div>
        <p className="text-sm md:text-base border-l-2 border-pink-500 pl-4">
          * 반다이 기기가 투입된 11/12월, 전체 매출의 약 50%를 앵커 테넌트가 견인. <strong className="text-white">기기당 월 15~20만원의 추가 수익</strong>을 무인으로 창출.
        </p>
      </div>
    )
  },

  // Slide 3: 강남역 데이터 (I와 E의 시너지 & 공간 효율화 마법)
  {
    id: "03",
    icon: <Zap className="w-12 h-12 text-yellow-500 mb-6" />,
    title: "상권을 부활시킨 '극강의 시너지'",
    subtitle: "PoC 1-2. The Magic of Space Efficiency",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-lg text-gray-300">
          <p className="leading-relaxed">
            이면도로에 위치해 <strong>월 1,400만원대 매출에 정체되어 있던 강남역점.</strong><br/>
            과감하게 포토 부스를 5대에서 3대로 <span className="text-red-400 font-bold">줄이고</span>, 남는 공간에 가챠를 <span className="text-green-400 font-bold">도입</span>했습니다. 그 결과는 경이롭습니다.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-5 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl" />
            <h4 className="text-yellow-400 font-bold mb-3 flex items-center gap-2"><Users className="w-5 h-5"/> 타겟의 100% 통합 (I + E)</h4>
            <p className="text-sm leading-relaxed text-gray-300">
              사진 찍기를 좋아하는 <strong>'외향형(E)'</strong> 고객과, 가챠/굿즈 수집을 좋아하는 <strong>'내향형(I)'</strong> 고객이 하나의 공간에서 만났습니다.<br/>
              두 아이템이 만나면서 발생하는 <strong className="text-white">극강의 심리적 시너지</strong>가 매장의 트래픽을 완전히 폭발시켰습니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="bg-[#111] p-4 rounded-xl border border-white/5 text-center">
                <div className="text-gray-500 text-xs mb-1">포토 부스 축소</div>
                <div className="text-xl font-bold text-red-400 line-through">5대 ➡️ 3대</div>
             </div>
             <div className="bg-[#111] p-4 rounded-xl border border-yellow-500/30 text-center">
                <div className="text-gray-500 text-xs mb-1">부스당 월 GMV</div>
                <div className="text-xl font-bold text-yellow-400">280만 ➡️ 최대 600만</div>
             </div>
          </div>
        </div>

        <div className="w-full bg-[#111] p-6 rounded-[2rem] border border-white/10 shadow-2xl">
          <h4 className="font-bold text-white mb-6">강남역점 월 전체 매출액 변화</h4>
          <div className="space-y-6">
            {[
              { month: "도입 전 (25.10 이전)", photo: 1400, gacha: 0, total: 1400, max: 4600 },
              { month: "25년 11월", photo: 894, gacha: 2900, total: 3794, max: 4600 },
              { month: "25년 12월", photo: 1805, gacha: 2750, total: 4555, max: 4600 },
              { month: "26년 01월", photo: 1564, gacha: 2340, total: 3904, max: 4600 },
              { month: "26년 02월", photo: 1102, gacha: 2240, total: 3342, max: 4600 }
            ].map((data, idx) => (
              <div key={idx} className="relative">
                <div className="flex justify-between text-sm font-bold text-gray-400 mb-2">
                  <span className={idx === 0 ? "text-red-400" : "text-white"}>{data.month}</span>
                  <span className="text-white">{data.total.toLocaleString()}만원</span>
                </div>
                <div className="w-full h-6 bg-zinc-800 rounded-r-full overflow-hidden flex">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${(data.photo / data.max) * 100}%` }} transition={{ duration: 1, delay: idx * 0.1 }} className={`h-full border-r border-black flex items-center justify-center text-[10px] font-bold text-white ${idx === 0 ? "bg-zinc-500" : "bg-blue-500"}`}>
                    {data.photo > 0 && "네컷"}
                  </motion.div>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${(data.gacha / data.max) * 100}%` }} transition={{ duration: 1, delay: idx * 0.1 + 0.3 }} className="h-full bg-pink-500 flex items-center justify-center text-[10px] font-bold text-white">
                    {data.gacha > 0 && "가챠"}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center items-center gap-6 text-xs text-gray-500 font-bold border-t border-white/10 pt-4">
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-zinc-500 rounded-sm" /> 부스 매출 (5대)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-sm" /> 부스 매출 (3대)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-pink-500 rounded-sm" /> 가챠 매출</div>
          </div>
        </div>
      </div>
    )
  },


  // Slide 4: 인천/홍대 데이터 (공간 효율화 복제) - [NEW 추가 슬라이드]
  {
    id: "04",
    icon: <MapPin className="w-12 h-12 text-green-500 mb-6" />,
    title: "제2, 제3의 강남역: 입증된 복제성",
    subtitle: "PoC 1-3. Proven Scalability",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p className="mb-8">"강남역만 특수한 케이스가 아니냐고요? 기계를 줄이고 공간을 재배치하는 <strong>'공간 효율화 공식'</strong>은 다른 상권에서도 동일하게 폭발하고 있습니다."</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 인천구월점 카드 */}
          <div className="bg-[#111] p-8 rounded-[2rem] border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.1)] relative">
            <div className="absolute top-4 right-6 text-green-500 font-black text-3xl opacity-20">2.6x JUMP</div>
            <h4 className="text-2xl font-bold text-white mb-2">인천 구월점</h4>
            <p className="text-green-400 text-sm font-bold mb-6">부스 5대 ➡️ 3대 축소 / 가챠 도입</p>
            
            <div className="space-y-4">
              <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                <span className="text-xs text-gray-500">도입 전 (25.01 이전)</span>
                <div className="flex justify-between items-end">
                  <span className="text-xl text-zinc-400 font-bold">월 1,000만원</span>
                  <span className="text-xs text-zinc-500">(부스당 200만)</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                <span className="text-xs text-green-400 font-bold">도입 후 (26.01)</span>
                <div className="flex justify-between items-end">
                  <span className="text-2xl text-white font-black">월 2,630만원</span>
                  <span className="text-xs text-gray-400">(네컷 1,000 + 가챠 1,630)</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-green-400 font-bold">도입 후 (26.02)</span>
                <div className="flex justify-between items-end">
                  <span className="text-2xl text-white font-black">월 2,390만원</span>
                  <span className="text-xs text-gray-400">(네컷 960 + 가챠 1,430)</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-green-500/30">
              <p className="text-sm text-gray-300">부스 수는 줄였는데 네컷 매출은 방어되고, <strong>가챠 매출이 얹어지며 총매출 2.6배 폭증.</strong></p>
            </div>
          </div>

          {/* 홍대동교점 카드 */}
          <div className="bg-[#111] p-8 rounded-[2rem] border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative">
            <div className="absolute top-4 right-6 text-blue-500 font-black text-3xl opacity-20">UPWARD</div>
            <h4 className="text-2xl font-bold text-white mb-2">홍대 동교점</h4>
            <p className="text-blue-400 text-sm font-bold mb-6">부스 7대 ➡️ 5대 축소 / 가챠 도입</p>
            
            <div className="space-y-4">
              <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                <span className="text-xs text-gray-500">도입 전 (26.01 이전)</span>
                <div className="flex justify-between items-end">
                  <span className="text-xl text-zinc-400 font-bold">월 2,300만원</span>
                  <span className="text-xs text-zinc-500">(부스당 330만)</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                <span className="text-xs text-blue-400 font-bold">도입 후 (26.01)</span>
                <div className="flex justify-between items-end">
                  <span className="text-2xl text-white font-black">월 2,900만원</span>
                  <span className="text-xs text-gray-400">(네컷 2,400 + 가챠 500)</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-blue-400 font-bold">도입 후 (26.02 현재)</span>
                <div className="flex justify-between items-end">
                  <span className="text-2xl text-white font-black">월 2,950만원</span>
                  <span className="text-xs text-gray-400">(네컷 2,200 + 가챠 750)</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-500/30">
              <p className="text-sm text-gray-300">7대가 벌던 매출을 5대가 더 많이 벌어들임(부스당 440만). <strong>가챠 안착되는 3월 폭발적 수직 상승 예상.</strong></p>
            </div>
          </div>
        </div>
      </div>
    )
  },


  // 🟢 첫 번째 슬라이드: MD 라인업
  {
    id: "md-lineup",
    icon: <Sparkles className="w-12 h-12 text-pink-500 mb-6" />,
    title: "MD 구성 황금 라인업",
    subtitle: "Golden Product Mix",
    content: <MdLineupContent /> 
  },

  // 🟢 두 번째 슬라이드: 면적별 스탠다드
  {
    id: "store-layout",
    icon: <LayoutTemplate className="w-12 h-12 text-yellow-500 mb-6" />,
    title: "면적별 최적화 스탠다드",
    subtitle: "Standardized Store Layout",
    content: <StoreLayoutContent /> 
  },


  // Slide 5: 타 상권 데이터 (제주 등)
  {
    id: "05",
    icon: <TrendingUp className="w-12 h-12 text-purple-500 mb-6" />,
    title: "상권 불문, 흔들림 없는 패시브 인컴",
    subtitle: "PoC 2. Location Intelligence",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>복합 상권과 트래픽 집중 상권의 폭발력 외에도, 특수 상권(여행지/호텔)에서는 완벽한 캐시카우 역할을 수행합니다.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-[#111] border border-white/10 rounded-3xl flex flex-col justify-center items-center text-center group hover:border-purple-500/50 transition-colors">
            <h4 className="text-purple-400 font-bold text-2xl mb-2">제주 국제공항</h4>
            <p className="text-sm text-gray-500 mb-6">특수 상권 (기념품 소비형)</p>
            <div className="text-4xl font-black text-white mb-4">월 평균 350만원</div>
            <p className="text-gray-400 text-sm">여행의 설렘이 구매로 이어지는<br/>흔들림 없는 24시간 패시브 인컴</p>
          </div>

          <div className="p-8 bg-[#111] border border-white/10 rounded-3xl flex flex-col justify-center items-center text-center group hover:border-purple-500/50 transition-colors">
            <h4 className="text-purple-400 font-bold text-2xl mb-2">파라다이스 시티</h4>
            <p className="text-sm text-gray-500 mb-6">프리미엄 리조트 (가족 체류형)</p>
            <div className="text-4xl font-black text-white mb-4">월 평균 400만원</div>
            <p className="text-gray-400 text-sm">호캉스 고객의 자녀 동반 지출로<br/>비수기 없는 안정적 수익원 방어</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 6: 경쟁 해자 (독점 K-IP)
  {
    id: "06",
    icon: <Lock className="w-12 h-12 text-cyan-500 mb-6" />,
    title: "경쟁 불가: K-IP 독점 생태계",
    subtitle: "The Moat (Exclusive Contents)",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p className="mb-8">"단순히 일본 캡슐토이를 떼다 파는 매장이 아닙니다. 우리는 <strong className="text-cyan-400">'한정판 문화'</strong>를 판매합니다."</p>
        
        <div className="bg-[#111] border border-cyan-500/30 rounded-[2rem] p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
          <ul className="space-y-8 relative z-10">
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">1</div>
              <div>
                <strong className="text-white text-xl block mb-2">국내 Top IP 콜라보 (카카오프렌즈 & 인기 웹툰)</strong>
                <p className="text-sm">타사 가챠샵에서는 절대 뽑을 수 없는 '인생네컷 플러스 전용' K-IP 라인업. 전체 기기의 30% 이상 배치로 압도적 마진율을 방어합니다.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">2</div>
              <div>
                <strong className="text-white text-xl block mb-2">O2O Flywheel (온/오프라인 시너지)</strong>
                <p className="text-sm">"특정 IP 가챠를 뽑은 고객에게만 주어지는 인생네컷 전용 포토 프레임 QR 코드"를 통해, 수집 욕구를 자극하고 재방문을 유도하는 완벽한 락인(Lock-in) 루프를 완성했습니다.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  },

  // Slide 7: 투자 구조 & 클로징 로드맵
  {
    id: "07",
    icon: <ShieldCheck className="w-12 h-12 text-red-500 mb-6" />,
    title: "완벽히 통제된 리스크, 압도적 수익",
    subtitle: "Financial Structure",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <div className="p-6 border-l-4 border-red-500 bg-red-900/10 mb-8">
          "대표님, 유행하는 프랜차이즈에 투자하시라는 게 아닙니다.<br/>가장 안전한 <strong className="text-red-400">부동산 기반 자산(보증금/권리금)</strong>에 자금을 파킹해두고, 운영은 100% 본사에 맡기십시오."
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div className="bg-white/5 border border-white/10 p-5 rounded-2xl"><span className="block text-red-400 text-sm font-bold mb-1">투명한 수익 배분</span><strong className="text-white">총 매출이익의 50% 매월 정산</strong></div>
           <div className="bg-white/5 border border-white/10 p-5 rounded-2xl"><span className="block text-red-400 text-sm font-bold mb-1">안정적 자금 회수</span><strong className="text-white">연 목표 40.8% / 2.5년 내 원금 회수</strong></div>
           <div className="bg-white/5 border border-white/10 p-5 rounded-2xl"><span className="block text-red-400 text-sm font-bold mb-1">초기 비용 제로화</span><strong className="text-white">기기/인테리어 본사 100% 감가상각</strong></div>
           <div className="bg-white/5 border border-white/10 p-5 rounded-2xl"><span className="block text-red-400 text-sm font-bold mb-1">본사 독점 운영</span><strong className="text-white">결품 방지 SCM 및 전담 MD팀 투입</strong></div>
        </div>
      </div>
    )
  }
];

export default function VvipPitchDeck() {
  return (
    <div className="h-screen w-full bg-[#050505] text-white overflow-y-scroll snap-y snap-mandatory scroll-smooth font-sans selection:bg-pink-500/30 break-keep">
      {/* 2. return 안의 최상단 div 바로 아래에 헤더 삽입! 👇 */}
      <OfficialHeader /> 

      {/* --- Intro Slide --- */}
      {/* --- Intro Slide (표지) --- */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center relative px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-[#050505] to-[#050505] z-0" />
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 max-w-4xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs md:text-sm text-red-400 tracking-widest uppercase mb-8 font-bold">
            [Confidential] VVIP Only
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            인생네컷 플러스<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">VVIP 위탁 직영 투자 제안서</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            데이터로 증명된 상위 1%의 오프라인 공간 수익화 전략.<br/>
            <strong className="text-white">가장 확실한 상권이 남아있는 지금, 합류하십시오.</strong>
          </p>
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase font-bold">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* --- Content Slides --- */}
      {VVIP_SLIDES.map((slide) => (
        <section key={slide.id} className="h-screen w-full snap-start flex items-center justify-center px-6 relative overflow-hidden border-t border-white/5 bg-black/40">
          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-20%" }} transition={{ duration: 0.6 }} className="lg:col-span-5 flex flex-col justify-center">
              {slide.icon}
              <div className="text-pink-500 font-bold tracking-widest mb-2 flex items-center gap-2"><span className="w-8 h-[1px] bg-pink-500"></span>{slide.subtitle}</div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">{slide.title}</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-20%" }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-7 flex flex-col justify-center">
              {slide.content}
            </motion.div>
          </div>
        </section>
      ))}

      {/* --- Final Closing Slide --- */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center relative px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 via-[#050505] to-[#050505] z-0" />
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-4xl w-full border border-yellow-500/20 bg-black/60 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-[0_0_80px_rgba(234,179,8,0.15)]">
          <Target className="w-16 h-16 text-yellow-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">2026년, 단 20석의 VVIP TICKET</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            지금 보신 데이터는 예상치가 아니라 <strong className="text-white">지난달까지 통장에 꽂힌 실제 숫자</strong>입니다.<br/>
            상권 보호를 위해 주요 거점 반경 150m 이내에는 가맹점 출점조차 원천 차단합니다.
          </p>
          
          <div className="bg-yellow-500/10 border border-yellow-500/30 p-6 rounded-2xl mb-10 text-left">
            <h4 className="text-yellow-400 font-bold mb-2">🤝 가계약 및 상권 우선 확보 확약</h4>
            <p className="text-sm text-gray-300">
              오늘 미팅을 통해 확보하신 희망 상권(A급 입지)에 대한 <strong className="text-white">최우선 배정권</strong>을 부여해 드립니다. 
              본 프로젝트가 그리는 거대한 O2O 플랫폼에 첫 번째 VIP 파트너로 합류하십시오.
            </p>
          </div>
          
          <div className="flex justify-center w-full">
            <button 
              className="px-12 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-full font-black text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(234,179,8,0.4)]"
            >
              <PenTool className="w-6 h-6" />
              현장 상권 확보 확약서 서명하기
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}