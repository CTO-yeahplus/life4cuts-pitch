"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ChevronDown, Lightbulb, Crown, Handshake, TrendingUp, 
  ShieldCheck, Eye, ArrowRightCircle, CheckCircle2, BarChart3, Users, DollarSign, Activity
} from 'lucide-react';
// [추가] 분리해둔 모달 컴포넌트 불러오기
import VipReservationModal from '@/components/VipReservationModal';
import OfficialHeader from '@/components/OfficialHeader';

// --- SLIDES 데이터 매핑 (기존과 동일하게 유지) ---
const SLIDES = [
  { id: "02", icon: <Lightbulb className="w-12 h-12 text-yellow-500 mb-6" />, title: "왜 '인생네컷 플러스'인가?", subtitle: "Executive Summary", content: ( <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed"><p>포토 부스 산업은 이제 단순한 '사진 촬영'을 넘어 <strong className="text-white">'복합 공간 비즈니스'</strong>로 진화하고 있습니다.</p><p>'인생네컷 플러스'는 압도적 1위 브랜드인 인생네컷의 트래픽에, 초고마진 무인 비즈니스인 <strong className="text-pink-400">'프리미엄 가챠(캡슐토이)'</strong>를 결합한 혁신 모델입니다.</p><div className="p-6 mt-8 border border-white/10 bg-white/5 rounded-2xl relative overflow-hidden group"><div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" /><p className="text-yellow-400 font-bold relative z-10 leading-relaxed">당사는 본 프로젝트를 함께할 소수의 VIP 파트너(위탁 직영 투자자)를 모시고,<br className="hidden md:block"/>연 40.8%의 수익률과 2년 6개월 내 원금 회수라는 독보적인 투자 기회를 제안합니다.</p></div></div> ) },
  {
    id: "03",
    icon: <Crown className="w-12 h-12 text-pink-500 mb-6" />,
    title: "핵심 경쟁력",
    subtitle: "Core Competencies",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-lg text-gray-300">
          <p>자본 투자의 가장 큰 적은 '유행의 증발'입니다. 인생네컷 플러스는 압도적인 IP 파워로 유행을 타지 않는 구조를 완성했습니다.</p>
          <ul className="space-y-5">
            {[
              "프리미엄 앵커 테넌트 (반다이 남코 등 프리미엄 기기 유치)",
              "독점 K-IP 라인업 (카카오프렌즈, 국내 웹툰 IP 독점 공급)",
              "객단가(ATV)의 퀀텀 점프 (사진 촬영 유입 ➡️ 가챠 추가 지출 유도)"
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* 💡 [수정됨] 더미 박스를 지우고 이미지가 꽉 차게 들어가는 UI로 교체 */}
        <div className="w-full h-[300px] md:h-[400px] rounded-[2rem] border border-white/10 relative overflow-hidden group shadow-2xl">
          
          {/* 1. 배경 이미지 (여기에 저장하신 파일 이름을 정확히 넣어주세요) */}
          <Image 
            src="/pix.jpg" // 👈 준비하신 파일 이름으로 변경하세요 (.jpg / .png 확인 필수!)
            alt="인생네컷 플러스 매장 전경" 
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          
          {/* 2. 텍스트가 잘 보이도록 하단에 깔리는 검은색 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

          {/* 3. 하단 설명 박스 (마우스 오버 시 위로 살짝 올라오는 효과) */}
          <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 z-10 transition-transform duration-500 group-hover:-translate-y-2">
            <h4 className="font-black text-lg text-white mb-1 flex items-center gap-2">
              <Crown className="w-5 h-5 text-yellow-500" /> BANDAI NAMCO Direct Asset
            </h4>
            <p className="text-xs md:text-sm text-gray-300">압도적인 트래픽과 고객 대기열을 창출하는 프리미엄 앵커 테넌트</p>
          </div>

        </div>
      </div>
    )
  },
    { id: "04", icon: <DollarSign className="w-12 h-12 text-blue-500 mb-6" />, title: "독보적인 투자 수익률", subtitle: "The Structure", content: ( <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div className="space-y-6 text-lg text-gray-300"><p>투자자는 '부동산(임차권/권리금)'에 투자하여 자산을 안전하게 보존하고, 본사는 '인프라와 운영'을 100% 책임집니다.</p><div className="p-6 bg-gradient-to-r from-blue-900/40 to-transparent border-l-4 border-blue-500 rounded-r-2xl">매장에서 발생하는 <strong className="text-blue-400">총 매출이익의 50%</strong>를 투자자에게 매월 투명하게 정산합니다. (연 목표 수익률 40.8%)</div></div><div className="w-full bg-[#111] p-8 rounded-[2rem] border border-white/10 overflow-hidden relative group shadow-2xl"><BarChart3 className="absolute top-6 right-6 w-10 h-10 text-zinc-800" /><h4 className="font-bold text-xl text-white mb-10 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-green-500" /> 핵심 투자 자산 수익률 비교</h4><div className="space-y-8">{[{ name: "은행 정기 예금", rate: 3.5, color: "bg-zinc-700" }, { name: "상가 임대 수익", rate: 4.8, color: "bg-zinc-500" }, { name: "인생네컷 플러스 (위탁 직영)", rate: 40.8, color: "bg-gradient-to-r from-pink-500 to-yellow-500" }].map((item, idx) => (<div key={idx} className="space-y-2"><div className="flex justify-between items-center text-sm font-bold text-gray-400"><span>{item.name}</span><span className={`${idx === 2 ? "text-yellow-400 text-lg" : "text-white"}`}>{item.rate}% <span className="text-xs font-normal text-gray-500">(연)</span></span></div><div className="w-full h-4 bg-zinc-900 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: `${item.rate * 2}%` }} viewport={{ once: false }} transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }} className={`${item.color} h-full rounded-full relative`}>{idx === 2 && ( <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse" /> )}</motion.div></div></div>))}</div></div></div> ) },
  { id: "05", icon: <Activity className="w-12 h-12 text-green-500 mb-6" />, title: "재무 시뮬레이션", subtitle: "Financial Projections", content: ( <div className="space-y-8 text-lg text-gray-300"><p>A상권(핵심 역세권)에 2억 원을 투자했을 때 월별로 창출되는 정산금액 시뮬레이션입니다.</p><div className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-sans"><div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between"><div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /><span className="font-bold text-gray-200 text-sm tracking-widest uppercase">Simulation Dashboard (A상권 기준)</span></div></div><div className="overflow-x-auto"><table className="w-full text-left border-collapse whitespace-nowrap"><thead><tr className="bg-white/5 text-gray-400 text-sm border-b border-white/10"><th className="p-4 font-medium">재무 항목</th><th className="p-4 font-medium text-right">1개월 차</th><th className="p-4 font-medium text-right">6개월 차</th><th className="p-4 font-medium text-right">12개월 차</th><th className="p-4 font-medium text-right text-white">24개월 차</th></tr></thead><tbody className="text-sm md:text-base text-gray-300">{[{ row: "예상 월 매출", c1: "3,500", c6: "3,800", c12: "4,200", c24: "4,500" }, { row: "(-) 운영 비용 (서버/소모품)", c1: "350", c6: "380", c12: "420", c24: "450" }, { row: "(-) MD 원가 및 유통마진", c1: "1,400", c6: "1,520", c12: "1,680", c24: "1,800" }, { row: "(=) 총 매출 이익", c1: "1,750", c6: "1,900", c12: "2,100", c24: "2,250", border: true }].map((item, idx) => (<tr key={idx} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${item.border ? 'border-b-2 border-white/10' : ''}`}><td className="p-4 text-gray-400">{item.row}</td><td className="p-4 text-right">{item.c1}</td><td className="p-4 text-right">{item.c6}</td><td className="p-4 text-right">{item.c12}</td><td className="p-4 text-right font-bold text-white">{item.c24}</td></tr>))}<tr className="bg-gradient-to-r from-yellow-500/10 to-transparent border-l-4 border-yellow-500 relative group"><td className="p-4 font-bold text-yellow-400 flex items-center gap-2"><Crown className="w-4 h-4" /> 투자자 정산금 (50%)</td><td className="p-4 text-right font-bold text-yellow-500">875</td><td className="p-4 text-right font-bold text-yellow-500">950</td><td className="p-4 text-right font-bold text-yellow-500">1,050</td><td className="p-4 text-right font-bold text-yellow-400 text-lg">1,125</td></tr></tbody></table></div><div className="p-3 bg-black/50 text-right text-xs text-gray-600">단위: 만 원 / 본사 시뮬레이션 기반 데이터 (상권 및 시기에 따라 변동 가능)</div></div></div> ) },
  { id: "06", icon: <ShieldCheck className="w-12 h-12 text-purple-500 mb-6" />, title: "철저한 리스크 관리", subtitle: "Risk Mitigation", content: ( <div className="space-y-6 text-lg text-gray-300"><p className="mb-8">투자금의 손실 가능성을 3중으로 완벽하게 차단했습니다.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex gap-5 items-center"><div className="w-2 h-12 bg-purple-500 rounded-full flex-shrink-0" /><div><h4 className="text-white font-bold mb-1 text-sm md:text-base">자산 가치 보존 (권리금 헷징)</h4><p className="text-xs md:text-sm text-gray-400">철저한 본사 내부 시세 평가 기반 A급 입지 권리금 투자 방어.</p></div></div><div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex gap-5 items-center"><div className="w-2 h-12 bg-purple-500 rounded-full flex-shrink-0" /><div><h4 className="text-white font-bold mb-1 text-sm md:text-base">상권 독점권 보장</h4><p className="text-xs md:text-sm text-gray-400">위탁 직영점 기준 반경 150M 이내 신규 가맹 출점 원천 차단.</p></div></div><div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex gap-5 items-center md:col-span-2"><div className="w-2 h-12 bg-purple-500 rounded-full flex-shrink-0" /><div><h4 className="text-white font-bold mb-1 text-sm md:text-base">데이터 기반 악성 재고 제로화</h4><p className="text-xs md:text-sm text-gray-400">MD 교체 주기 시스템화 및 실시간 재고 회전율 분석을 통한 결품 및 유휴 공간 최소화.</p></div></div></div></div> ) },
  { id: "07", icon: <Eye className="w-12 h-12 text-cyan-500 mb-6" />, title: "비전 2028", subtitle: "Vision & Roadmap", content: ( <div className="space-y-8 text-lg text-gray-300"><p>지금 투자하시는 매장은, 향후 거대한 글로벌 O2O 플랫폼의 오프라인 전초기지가 될 것입니다.</p><div className="relative border-l-2 border-white/20 pl-8 ml-4 space-y-12">{["2026년 (시스템 안착)", "2027년 (스케일업)", "2028년 (플랫폼 장악)"].map((year, idx) => (<div key={idx} className="relative"><div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-cyan-500 border-4 border-[#0a0a0a]" /><h4 className="text-2xl font-bold text-white mb-2">{year}</h4><p className="text-sm md:text-base text-gray-400">{idx === 0 ? "위탁 직영점 20개 안착 및 본사 가챠 정보 분석 시스템 고도화 완료." : idx === 1 ? "전국 가맹망 확대로 기기 7,000대 돌파 (연간 117.6억 트래픽 발생). 해외 수출 본격화." : "온/오프라인 결합(O2O) 가챠 플랫폼 런칭 및 국내 시장 점유율 1위 달성. (연 거래액 510억 / 영업이익 100억 돌파)"}</p></div>))}</div></div> ) }
];

export default function PitchDeck() {
  // 컴포넌트를 분리하여 State가 아주 깔끔해졌습니다.
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-[#0A0A0A] text-white overflow-y-scroll snap-y snap-mandatory scroll-smooth font-sans selection:bg-pink-500/30 break-keep">
      {/* return 안의 최상단 div 바로 아래에 헤더 삽입! 👇 */}
      <OfficialHeader /> 

      {/* --- Intro Slide --- */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center relative px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-zinc-900 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[600px] md:h-[600px] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 max-w-4xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm text-gray-300 tracking-widest uppercase mb-8">
            [Confidential IM]
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            인생네컷 플러스<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">위탁 직영점 공동 투자 프로젝트</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            "부동산 자산은 안전하게 지키고, 운영은 본사에 맡기며,<br/>
            <strong className="text-white">연 40% 이상의 패시브 인컴(Passive Income)</strong>을 창출하십시오."
          </p>
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase font-bold">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* --- Content Slides --- */}
      {SLIDES.map((slide) => (
        <section key={slide.id} className="h-screen w-full snap-start flex items-center justify-center px-6 relative overflow-hidden border-t border-white/5 bg-black/30">
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

      {/* --- CTA Slide --- */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center relative px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-[#0A0A0A] to-[#0A0A0A] z-0" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-3xl w-full border border-white/10 bg-black/50 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-[0_0_60px_rgba(236,72,153,0.15)]">
          <Handshake className="w-16 h-16 text-yellow-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Next Step 제안</h2>
          <p className="text-xl text-yellow-400 font-bold mb-8">"본 프로젝트는 2026년 단 20개의 위탁 직영점(VVIP 파트너)에 한해서만 한정적으로 진행됩니다."</p>
          <div className="text-left space-y-4 text-gray-300 mb-12 text-sm md:text-base leading-relaxed">
            <p className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" /><span>본 자료를 검토하신 후, 관심 있는 지역(상권)이나 투자 가용 규모를 알려주시면 <strong>'맞춤형 예상 손익 시뮬레이션(Excel)'</strong>과 실제 상권 리스트를 대면으로 브리핑해 드리겠습니다.</span></p>
            <p className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" /><span>투자에 앞서, 현재 본사가 직접 운영 중인 <strong>'직영점(강남, 홍대 등)의 실제 주말 트래픽과 매출 데이터'</strong>를 투명하게 공개해 드릴 용의가 있습니다.</span></p>
          </div>
          
          <div className="flex justify-center w-full mt-8">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              프라이빗 브리핑 예약 <ArrowRightCircle className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* [추가] 분리해둔 모달 컴포넌트 마운트 */}
      <VipReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}