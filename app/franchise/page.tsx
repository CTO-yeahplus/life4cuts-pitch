"use client";

import React, { useState } from 'react'; // 👈 useState 추가
import { motion } from 'framer-motion';
import { 
  ChevronDown, Store, Sparkles, Gift, Smartphone, TrendingUp, Handshake, ArrowRightCircle, CheckCircle2
} from 'lucide-react';
import FranchiseReservationModal from '@/components/FranchiseReservationModal';
import OfficialHeader from '@/components/OfficialHeader';

const FRANCHISE_SLIDES = [
  // Slide 1: 현재 진단 및 돌파구
  {
    id: "01",
    icon: <Store className="w-12 h-12 text-yellow-500 mb-6" />,
    title: "대표님, 매장의 빈 공간도 월세를 내고 있습니다",
    subtitle: "현재 매장 진단 및 돌파구",
    content: (
      <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
        <p className="text-2xl font-light text-white mb-8 border-l-4 border-yellow-500 pl-4">
          우후죽순 생겨난 경쟁 포토 부스로 정체된 트래픽.<br/>
          <strong className="text-yellow-400">가동률이 떨어지는 구형 네컷 기계가 차지한 넓은 공간</strong>, 아깝지 않으신가요?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="text-gray-400 text-sm font-bold mb-2">AS-IS (현재의 한계)</h4>
            <p className="text-white text-sm md:text-base">사진만 딱 찍고 5분 만에 나가는 고객들. 객단가는 4~5천 원 선에 머물러 있고, 안 돌아가는 부스는 공간만 차지합니다.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-yellow-500/20 to-pink-500/20 border border-yellow-500/30 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 animate-pulse" />
            <h4 className="text-yellow-400 text-sm font-bold mb-2 relative z-10">TO-BE (인생네컷 PLUS)</h4>
            <p className="text-white text-sm md:text-base relative z-10">사진만 파는 시대는 지났습니다. 최신형 <strong>'프리미엄 가챠'</strong>를 결합해 매장을 돈이 열리는 <strong>'복합 놀이터'</strong>로 업그레이드하십시오.</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 2: 무엇이 달라지나요?
  {
    id: "02",
    icon: <Sparkles className="w-12 h-12 text-pink-500 mb-6" />,
    title: "버려진 공간의 마법이 시작됩니다",
    subtitle: "The Upgrade: 인생네컷 PLUS",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p>효율이 떨어지는 구형 네컷 함체를 과감히 철수하고, 그 자리에 최신형 가챠 기기 약 70대를 혼합 배치합니다.</p>
        
        <div className="bg-[#111] border border-pink-500/30 rounded-[2rem] p-8 relative overflow-hidden">
          <ul className="space-y-8 relative z-10">
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold">1</div>
              <div>
                <strong className="text-white text-xl block mb-2">객단가(ATV)의 수직 상승</strong>
                <p className="text-sm">"사진 찍고 (5,000원) + 맘에 드는 가챠 2번 뽑기 (10,000원)". 고객 1인당 지출액이 기존 대비 최소 2~3배 이상 증가합니다.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold">2</div>
              <div>
                <strong className="text-white text-xl block mb-2">체류 시간 극대화 및 외부 유입</strong>
                <p className="text-sm">목적 구매만 하고 떠나던 공간이, 구경하고 수집하는 '놀이터'로 바뀝니다. 매장이 북적이면 밖에서 보던 고객도 자연스레 들어옵니다.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold">3</div>
              <div>
                <strong className="text-white text-xl block mb-2">타겟층의 완벽한 확장 (I + E)</strong>
                <p className="text-sm">사진 찍기를 좋아하는 기존 고객(E성향)에, IP 굿즈 수집을 좋아하는 마니아층(I성향)이 새롭게 우리 매장 단골로 추가됩니다.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  },

  // Slide 3: 본사 지원 및 비용 구조
  {
    id: "03",
    icon: <Gift className="w-12 h-12 text-blue-500 mb-6" />,
    title: "리스크는 본사가 함께 짊어집니다",
    subtitle: "Support & Transparent Cost",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <div className="p-6 border-l-4 border-blue-500 bg-blue-900/10 mb-8">
          "오래 함께해주신 대표님들을 위해, <strong className="text-blue-400">초기 자금 부담은 획기적으로 낮추고 마진은 투명하게</strong> 공개합니다."
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
             <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">🎁 기존 점주 한정 특별 프로모션</h4>
             <ul className="space-y-3 text-sm">
               <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" /><span><strong>구형 함체 보상 판매:</strong> 처치 곤란한 기계는 본사가 거두고 가챠 기기 도입 비용을 대폭 할인해 드립니다.</span></li>
               <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" /><span><strong>초도 물량 무상 지원:</strong> 리모델링 오픈 첫 달, 가장 확실하게 수익을 챙기시도록 인기 캡슐을 지원합니다.</span></li>
             </ul>
           </div>
           
           <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
             <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">🔍 투명한 마진 구조 (숨김 ZERO)</h4>
             <ul className="space-y-3 text-sm">
               <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" /><span><strong>기기 대금:</strong> 본사 마진 최소화, 직수입 원가 수준 공급</span></li>
               <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" /><span><strong>유통 마진:</strong> 캡슐 상품 공급 시 합리적 유통 마진 (딱 10%)</span></li>
               <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" /><span><strong>서버비:</strong> 통합 결제 및 데이터 분석 유지보수 (15%)</span></li>
             </ul>
             <p className="mt-4 text-xs text-blue-300 font-bold">👉 나머지 모든 수익은 대표님의 통장으로 직행합니다.</p>
           </div>
        </div>
      </div>
    )
  },

  // Slide 4: 운영 편의성
  {
    id: "04",
    icon: <Smartphone className="w-12 h-12 text-cyan-500 mb-6" />,
    title: "운영은 본사 시스템이 다 해드립니다",
    subtitle: "Easy Operations",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p className="mb-8">"가챠 기계 70대 관리? 무인 운영의 편의성은 그대로 유지됩니다."</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-[#111] border border-cyan-500/30 rounded-2xl text-center group hover:bg-cyan-900/10 transition-colors">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-400 font-bold">1</div>
            <h4 className="text-white font-bold mb-2">스마트 발주 자동화</h4>
            <p className="text-sm text-gray-400">고도화된 '네컷마켓 가챠 발주 시스템'으로 스마트폰 클릭 몇 번이면 새로운 캡슐 주문이 끝납니다.</p>
          </div>
          <div className="p-6 bg-[#111] border border-cyan-500/30 rounded-2xl text-center group hover:bg-cyan-900/10 transition-colors">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-400 font-bold">2</div>
            <h4 className="text-white font-bold mb-2">재고 걱정 ZERO</h4>
            <p className="text-sm text-gray-400">매장에 가실 필요 없습니다. 실시간 대시보드로 결품 알림과 재고 회전율을 한눈에 파악하세요.</p>
          </div>
          <div className="p-6 bg-[#111] border border-cyan-500/30 rounded-2xl text-center group hover:bg-cyan-900/10 transition-colors">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-400 font-bold">3</div>
            <h4 className="text-white font-bold mb-2">친환경 ESG 캡슐</h4>
            <p className="text-sm text-gray-400">무인 매장의 골칫거리인 쓰레기 문제. 본사가 도입한 친환경 회수함 시스템으로 청소 스트레스를 없앴습니다.</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 5: 성공 사례 (PoC)
  {
    id: "05",
    icon: <TrendingUp className="w-12 h-12 text-green-500 mb-6" />,
    title: "팩트 체크: 수익이 3배 폭발한 사례들",
    subtitle: "Proof of Concept: 100% 리얼 데이터",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p className="mb-4">본사가 직영점에서 직접 테스트하고 검증한 <strong>기계 축소 & 공간 효율화</strong>의 마법입니다.</p>
        
        <div className="space-y-4">
          {/* 강남역 */}
          <div className="bg-[#111] border border-white/10 p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-bold mb-1 flex items-center gap-2">강남역 1호점 <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded">부스 5대 ➡️ 3대 축소</span></h4>
              <p className="text-sm text-gray-400">이면도로 상권의 부활 (가챠 혼합 배치)</p>
            </div>
            <div className="flex items-center gap-4 text-right">
              <div className="text-sm text-gray-500">도입 전<br/>월 1,400만</div>
              <ArrowRightCircle className="w-5 h-5 text-gray-600" />
              <div className="text-lg font-black text-green-400">도입 후 월 4,550만<br/><span className="text-xs font-normal">3.2배 점프!</span></div>
            </div>
          </div>

          {/* 인천구월 */}
          <div className="bg-[#111] border border-white/10 p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-bold mb-1 flex items-center gap-2">인천 구월점 <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded">부스 5대 ➡️ 3대 축소</span></h4>
              <p className="text-sm text-gray-400">복합 주거/상업 상권의 수익 극대화</p>
            </div>
            <div className="flex items-center gap-4 text-right">
              <div className="text-sm text-gray-500">도입 전<br/>월 1,000만</div>
              <ArrowRightCircle className="w-5 h-5 text-gray-600" />
              <div className="text-lg font-black text-green-400">도입 후 월 2,630만<br/><span className="text-xs font-normal">2.6배 점프!</span></div>
            </div>
          </div>

          {/* 홍대동교 */}
          <div className="bg-[#111] border border-white/10 p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-bold mb-1 flex items-center gap-2">홍대 동교점 <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded">부스 7대 ➡️ 5대 축소</span></h4>
              <p className="text-sm text-gray-400">초대형 트래픽 상권의 객단가 상승</p>
            </div>
            <div className="flex items-center gap-4 text-right">
              <div className="text-sm text-gray-500">도입 전<br/>월 2,300만</div>
              <ArrowRightCircle className="w-5 h-5 text-gray-600" />
              <div className="text-lg font-black text-green-400">도입 후 월 2,950만<br/><span className="text-xs font-normal">수직 상승 중</span></div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-center">
          <p className="text-green-400 font-bold">현재 월 매출 [ 1,000만 원 ] 매장 ➡️ 리모델링 후 예상 매출 [ 2,500만 원 ] 이상 기대!</p>
        </div>
      </div>
    )
  }
];

export default function FranchisePitchDeck() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-[#0A0A0A] text-white overflow-y-scroll snap-y snap-mandatory scroll-smooth font-sans selection:bg-pink-500/30 break-keep">
      {/* 2. return 안의 최상단 div 바로 아래에 헤더 삽입! 👇 */}
      <OfficialHeader /> 

      {/* --- Intro Slide --- */}
      {/* --- Intro Slide (표지) --- */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center relative px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-[#111] z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[600px] md:h-[600px] bg-yellow-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 max-w-4xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-xs md:text-sm text-yellow-400 tracking-widest uppercase mb-8 font-bold">
            기존 가맹점 환경 개선 안내 브로셔
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
            대표님, 매장의 비어있는 공간도<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">매월 월세를 내고 있습니다.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed">
            본사 특별 지원으로 초기 자금 부담은 확 줄이고,<br/>
            남는 공간을 활용해 <strong className="text-white">매장 매출을 퀀텀 점프</strong>시키세요.
          </p>
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase font-bold">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* --- Content Slides --- */}
      {FRANCHISE_SLIDES.map((slide) => (
        <section key={slide.id} className="h-screen w-full snap-start flex items-center justify-center px-6 relative overflow-hidden border-t border-white/5 bg-black/30">
          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-20%" }} transition={{ duration: 0.6 }} className="lg:col-span-5 flex flex-col justify-center">
              {slide.icon}
              <div className="text-yellow-500 font-bold tracking-widest mb-2 flex items-center gap-2"><span className="w-8 h-[1px] bg-yellow-500"></span>{slide.subtitle}</div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">{slide.title}</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-20%" }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-7 flex flex-col justify-center">
              {slide.content}
            </motion.div>
          </div>
        </section>
      ))}

      {/* --- Final CTA Slide --- */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center relative px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 via-[#0A0A0A] to-[#0A0A0A] z-0" />
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-3xl w-full border border-yellow-500/20 bg-black/60 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-[0_0_80px_rgba(234,179,8,0.15)]">
          <Handshake className="w-16 h-16 text-yellow-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">리모델링 환경 개선 신청</h2>
          <p className="text-xl text-yellow-400 font-bold mb-8">
            상권 보호 및 철저한 지원 관리를 위해<br className="hidden md:block"/> "2026년 단 25개 점" 한정으로 진행됩니다.
          </p>
          
          <div className="text-left space-y-4 text-gray-300 mb-10 text-sm md:text-base leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/10">
            <p className="flex items-start gap-3"><span className="w-6 h-6 bg-yellow-500 text-black font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">1</span><span><strong>신청 및 진단:</strong> 본사 데이터 분석팀의 상권 및 유휴 공간 실사 (무상)</span></p>
            <p className="flex items-start gap-3"><span className="w-6 h-6 bg-yellow-500 text-black font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">2</span><span><strong>도면 및 견적 산출:</strong> 보상 판매가 적용된 최종 견적 및 점주님 예상 수익 안내</span></p>
            <p className="flex items-start gap-3"><span className="w-6 h-6 bg-yellow-500 text-black font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">3</span><span><strong>오픈:</strong> 단 며칠의 휴업으로 수익이 폭발하는 새로운 매장 재탄생</span></p>
          </div>
          
          <div className="flex justify-center w-full">
            {/* 👈 버튼에 onClick 이벤트 추가 */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(234,179,8,0.4)]"
            >
              전담 슈퍼바이저(SV) 상담 신청하기 <ArrowRightCircle className="w-6 h-6" />
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500">또는 본사 가맹지원팀 직통 번호: 1588-XXXX</p>
        </motion.div>
      </section>

      {/* 👈 페이지 최하단에 모달 컴포넌트 마운트 */}
      <FranchiseReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}