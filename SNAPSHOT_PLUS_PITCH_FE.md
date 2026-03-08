# 🧠 Deep Context Snapshot

**Generated at:** 2026-03-08 12:01:05
**Project:** life4cuts-pitch (0.1.0)
**Tech Stack:** Next.js, React, Tailwind CSS, Framer Motion

> **🛑 INSTRUCTION FOR AI (GEMINI/GPT):**
> 1. This document contains the **entire source code** of the project.
> 2. The **File Map** below shows the structure.
> 3. Each file section has a **Context Summary** analyzing imports, components, and types.
> 4. Use this context to answer questions about architecture, debugging, or feature implementation.
> 5. **Do not hallucinate** files that are not in this list.

---

## 🗺️ File Map
**Total Files Scanned:** 14

```text
.
│   ├── next-env.d.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   franchise/
│   │   │   ├── page.tsx
│   │   api/
│   │   │   reservation/
│   │   │   │   ├── route.ts
│   │   vvip-closing/
│   │   │   ├── page.tsx
│   │   invest/
│   │   │   ├── page.tsx
│   components/
│   │   ├── FranchiseReservationModal.tsx
│   │   ├── VipReservationModal.tsx
│   │   ├── OfficialHeader.tsx
│   public/
```

---

## 💻 Source Details

        ### 📄 next-env.d.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

        ### 📄 package.json
        > **Context Summary**
        * 📦 **Package Config** (See Project Overview)

        ```json
        {
  "name": "life4cuts-pitch",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "framer-motion": "^12.34.3",
    "lucide-react": "^0.575.0",
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "recharts": "^3.7.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

        ### 📄 tsconfig.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

        ### 📄 next.config.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

        ### 📄 app/layout.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `RootLayout`

        ```typescript
        import type { Metadata } from 'next';
import './globals.css'; // (기존에 있던 CSS 임포트)

// 💡 [여기가 핵심입니다] 링크 공유 시 메신저에 뜰 제목, 설명, 이미지를 세팅합니다.
export const metadata: Metadata = {
  title: '인생네컷 PLUS 전략 본부',
  description: '공간 비즈니스의 퀀텀 점프. 데이터로 증명된 상위 1%의 오프라인 공간 수익화 전략.',
  openGraph: {
    title: '[Confidential] 인생네컷 PLUS VVIP 제안서',
    description: '가장 확실한 상권이 남아있는 지금, 수익이 폭발하는 복합 문화 플랫폼에 합류하십시오.',
    url: 'https://대표님의실제도메인.com', // 나중에 실제 배포하실 도메인 주소로 변경하세요
    siteName: 'LK Ventures',
    images: [
      {
        url: '/og-image.png', // Step 1에서 public 폴더에 넣은 1200x630 이미지
        width: 1200,
        height: 630,
        alt: '인생네컷 PLUS 매장 전경',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
        ### 📄 app/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/link, framer-motion, lucide-react`
* 🧩 **Component (Default):** `Home`

        ```typescript
        "use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, Presentation, Store, ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-pink-500/30">
      
      {/* 배경 시각 효과 */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-yellow-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 w-full max-w-5xl">
        
        {/* 타이틀 영역 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            LK Ventures NX Strategic Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            인생네컷 PLUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">SALES 전략</span>
          </h1>
          <p className="text-gray-400 text-lg">대상자(Target)에 맞는 제안서를 선택하여 제안하세요.</p>
        </div>

        {/* 3가지 피치덱 카드 링크 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. 일반 투자자용 (웹 배포용) */}
          <Link href="/invest">
            <motion.div whileHover={{ y: -10, borderColor: 'rgba(236,72,153,0.5)' }} className="h-full bg-[#111] border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between group cursor-pointer transition-all shadow-xl">
              <div>
                <Briefcase className="w-12 h-12 text-pink-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-2">웹 배포용 투자 제안서</h3>
                <p className="text-sm text-gray-500 mb-6 break-keep">일반 잠재 투자자에게 링크로 배포하여 리드(DB)를 수집하기 위한 온라인 전용 피치덱입니다.</p>
              </div>
              <div className="flex items-center text-pink-400 font-bold text-sm gap-2 mt-auto">
                피치덱 열기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>

          {/* 2. VVIP 오프라인 클로징용 */}
          <Link href="/vvip-closing">
            <motion.div whileHover={{ y: -10, borderColor: 'rgba(234,179,8,0.5)' }} className="h-full bg-[#111] border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between group cursor-pointer transition-all shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500/20 text-red-400 text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest">Confidential</div>
              <div>
                <Presentation className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-2">VVIP 대면 클로징 덱</h3>
                <p className="text-sm text-gray-500 mb-6 break-keep">오프라인 미팅 시 아이패드로 띄워 압도적인 실데이터를 보여주고 당일 현장 계약을 이끌어내는 자료입니다.</p>
              </div>
              <div className="flex items-center text-yellow-400 font-bold text-sm gap-2 mt-auto">
                피치덱 열기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>

          {/* 3. 기존 가맹점주용 */}
          <Link href="/franchise">
            <motion.div whileHover={{ y: -10, borderColor: 'rgba(59,130,246,0.5)' }} className="h-full bg-[#111] border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between group cursor-pointer transition-all shadow-xl">
              <div>
                <Store className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-2">가맹점 리모델링 안내</h3>
                <p className="text-sm text-gray-500 mb-6 break-keep">정체기를 맞은 기존 가맹점주들에게 본사 지원 혜택과 공간 효율화 솔루션을 제안하는 브로셔입니다.</p>
              </div>
              <div className="flex items-center text-blue-400 font-bold text-sm gap-2 mt-auto">
                피치덱 열기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>

        </div>
      </motion.div>
    </div>
  );
}
        ### 📄 app/globals.css
        > **Context Summary**
        * (No structural elements detected)

        ```css
        @import "tailwindcss";
        ### 📄 app/franchise/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, @/components/FranchiseReservationModal, @/components/OfficialHeader`
* 🧩 **Component (Default):** `FranchisePitchDeck`
* ww **Hooks:** `useState`

        ```typescript
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
        ### 📄 app/api/reservation/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // [추가] 프론트엔드에서 groupId를 넘겨받습니다.
    const { name, phone, budget, region, groupId } = body;

    const MONDAY_API_TOKEN = process.env.MONDAY_API_TOKEN;
    const BOARD_ID = process.env.MONDAY_BOARD_ID;

    if (!MONDAY_API_TOKEN || !BOARD_ID) {
      throw new Error("서버 환경 변수가 설정되지 않았습니다.");
    }

    const today = new Date();
    // 한국 시간(KST) 기준 날짜 생성
    const kstDate = new Date(today.getTime() + (9 * 60 * 60 * 1000));
    const formattedDate = kstDate.toISOString().split('T')[0];

    // [핵심] groupId 유무에 따라 GraphQL 쿼리를 동적으로 생성합니다.
    const query = groupId ? `
      mutation ($boardId: ID!, $groupId: String!, $itemName: String!, $columnValues: JSON!) {
        create_item (
          board_id: $boardId,
          group_id: $groupId,
          item_name: $itemName,
          column_values: $columnValues
        ) { id }
      }
    ` : `
      mutation ($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
        create_item (
          board_id: $boardId,
          item_name: $itemName,
          column_values: $columnValues
        ) { id }
      }
    `;

    // 🎯 기존 VVIP 컬럼 ID를 그대로 재활용하여 가맹점주 정보를 담습니다.
    const variables: any = {
      boardId: Number(BOARD_ID),
      itemName: name,
      columnValues: JSON.stringify({
        "text_mm10cdq4": name,    // 성함 (점주명)
        "text_mm10watd": phone,   // 연락처
        "text_mm105d7a": budget,  // [재활용] VVIP: 희망투자규모 -> 가맹점: 현재 운영 기기 수
        "text_mm10degr": region,  // [재활용] VVIP: 관심지역 -> 가맹점: 매장명 및 주소
        "date4": formattedDate    // 접수일자
      })
    };

    // 만약 그룹 ID가 전달되었다면 변수에 추가
    if (groupId) {
      variables.groupId = groupId;
    }

    const response = await fetch("https://api.monday.com/v2", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': MONDAY_API_TOKEN,
        'API-Version': '2024-01'
      },
      body: JSON.stringify({ query, variables })
    });

    const data = await response.json();

    if (data.errors) {
      console.error("Monday.com API 에러 디버깅:", data.errors);
      return NextResponse.json({ success: false, error: data.errors }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });

  } catch (error: any) {
    console.error("서버 내부 에러:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
        ### 📄 app/vvip-closing/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react, @/components/OfficialHeader`
* 🧩 **Component (Default):** `VvipPitchDeck`

        ```typescript
        "use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, CameraOff, Flame, Zap, TrendingUp, Lock, ShieldCheck, Target, PenTool, Users, MapPin
} from 'lucide-react';
import OfficialHeader from '@/components/OfficialHeader';

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
        ### 📄 app/invest/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, next/image, lucide-react, @/components/VipReservationModal, @/components/OfficialHeader`
* 🧩 **Component (Default):** `PitchDeck`
* ww **Hooks:** `useState`

        ```typescript
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
        ### 📄 components/FranchiseReservationModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `FranchiseReservationModal`
* ww **Hooks:** `useState`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        "use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

interface FranchiseReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FranchiseReservationModal({ isOpen, onClose }: FranchiseReservationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 폼 입력값 State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    budget: '', // 기존 API 호환을 위해 변수명은 budget을 쓰지만, 화면에선 '현재 기기 수'로 받습니다.
    region: ''  // 변수명은 region을 쓰지만, 화면에선 '매장명'으로 받습니다.
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 🚀 핵심: API 호출 시 groupId로 "group_title"을 함께 넘깁니다.
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          groupId: "group_title" // 먼데이닷컴의 타겟 그룹 ID
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
      } else {
        alert("예약 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    } catch (error) {
      alert("서버와 통신할 수 없습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', budget: '', region: '' });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />
          
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full max-w-md bg-[#111] border border-yellow-500/30 rounded-[2rem] p-8 shadow-2xl text-left font-sans">
            <button onClick={handleClose} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"><X className="w-6 h-6" /></button>

            {!isSuccess ? (
              <>
                <h3 className="text-2xl font-bold mb-2 text-white">리모델링 상담 신청</h3>
                <p className="text-gray-400 text-sm mb-8 break-keep">매장 정보를 남겨주시면, 본사 전담 SV가 예상 견적과 수익 시뮬레이션을 준비하여 연락드립니다.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">점주님 성함</label>
                    <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="홍길동" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">연락처</label>
                    <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="010-0000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">현재 운영 중인 매장명</label>
                    <input required type="text" name="region" value={formData.region} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="예: 인생네컷 강남점" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">현재 보유하신 포토 부스 대수</label>
                    <select required name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors appearance-none">
                      <option value="" disabled>기기 대수를 선택해주세요</option>
                      <option value="1대 ~ 2대">1대 ~ 2대</option>
                      <option value="3대 ~ 4대">3대 ~ 4대</option>
                      <option value="5대 이상">5대 이상</option>
                    </select>
                  </div>

                  <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-bold text-lg transition-all mt-4 flex items-center justify-center gap-2 ${isSubmitting ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:scale-105'}`}>
                    {isSubmitting ? '요청 처리 중...' : 'SV 상담 신청하기'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-10 h-10 text-yellow-500" /></div>
                <h3 className="text-2xl font-bold mb-4 text-white">상담 접수가 완료되었습니다!</h3>
                <p className="text-gray-400 mb-8 leading-relaxed break-keep">상권 보호를 위해 2026년 25개 점포만 한정 진행됩니다.<br/>본사 가맹지원팀에서 상권 분석 자료를 준비하여 24시간 내에 연락드리겠습니다.</p>
                <button onClick={handleClose} className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold transition-colors">닫기</button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
        ### 📄 components/VipReservationModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `VipReservationModal`
* ww **Hooks:** `useState`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        "use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

interface VipReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VipReservationModal({ isOpen, onClose }: VipReservationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // 폼 입력값을 관리할 State 추가
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    budget: '',
    region: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Step 2에서 만든 내부 API로 데이터를 쏩니다.
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
      } else {
        alert("예약 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    } catch (error) {
      alert("서버와 통신할 수 없습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', budget: '', region: '' }); // 폼 초기화
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />
          
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full max-w-md bg-[#111] border border-white/10 rounded-[2rem] p-8 shadow-2xl text-left font-sans">
            <button onClick={handleClose} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"><X className="w-6 h-6" /></button>

            {!isSuccess ? (
              <>
                <h3 className="text-2xl font-bold mb-2 text-white">프라이빗 브리핑 예약</h3>
                <p className="text-gray-400 text-sm mb-8 break-keep">간단한 정보를 남겨주시면, 본사 VIP 전담 디렉터가 맞춤형 데이터를 준비하여 연락드리겠습니다.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">성함 또는 법인명</label>
                    {/* name 속성과 onChange 추가 */}
                    <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="홍길동" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">연락처</label>
                    <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="010-0000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">희망 투자 규모 (자격 검증)</label>
                    <select required name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors appearance-none">
                      <option value="" disabled>투자 규모를 선택해주세요</option>
                      <option value="2억~3억">2억 ~ 3억 원</option>
                      <option value="3억~5억">3억 ~ 5억 원</option>
                      <option value="5억 이상">5억 원 이상 (다점포)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">관심 지역 (선택)</label>
                    <input type="text" name="region" value={formData.region} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="예: 강남구, 홍대 등" />
                  </div>

                  <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-bold text-lg transition-all mt-4 flex items-center justify-center gap-2 ${isSubmitting ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-yellow-500 to-pink-500 text-white hover:opacity-90'}`}>
                    {isSubmitting ? '요청 처리 중...' : '브리핑 예약 신청하기'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-10 h-10 text-green-500" /></div>
                <h3 className="text-2xl font-bold mb-4 text-white">예약이 접수되었습니다!</h3>
                <p className="text-gray-400 mb-8 leading-relaxed break-keep">남겨주신 정보를 바탕으로<br/>본사 VIP 전담 디렉터가 최적의 데이터를 준비하여<br/>24시간 이내에 직접 연락드리겠습니다.</p>
                <button onClick={handleClose} className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold transition-colors">닫기</button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
        ### 📄 components/OfficialHeader.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/image, next/link`
* 🧩 **Component (Default):** `OfficialHeader`

        ```typescript
        "use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 👈 [추가] Next.js의 Link 컴포넌트 불러오기

export default function OfficialHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
      
      {/* 💡 [수정] Link 태그로 로고와 텍스트를 감싸서 클릭 시 메인('/')으로 이동하게 만듭니다. */}
      {/* 마우스를 올렸을 때 살짝 투명해지는 hover 효과를 주어 클릭 가능한 버튼임을 직관적으로 알립니다. */}
      <Link href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
        
        {/* 대표님이 설정하신 너비(w-22)를 Tailwind에서 안전하게 인식하도록 w-[88px] 또는 w-24로 설정합니다 (w-24 사용) */}
        <div className="w-24 h-8 relative flex-shrink-0">
          <Image 
            src="/life4cuts-logo.png" 
            alt="인생네컷 로고" 
            fill
            className="object-contain rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-white font-bold text-sm tracking-widest uppercase">인생네컷 PLUS</span>
          <span className="text-gray-500 text-[10px] tracking-wider">LK Ventures Official Document</span>
        </div>
      </Link>
      
      <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Confidential</span>
      </div>
    </header>
  );
}