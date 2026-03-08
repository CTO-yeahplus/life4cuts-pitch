"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, LayoutTemplate } from 'lucide-react';

const MD_DATA = [
  {
    title: "프리미엄 앵커 (Bandai)",
    ratio: "30%",
    color: "text-pink-400",
    bgBar: "from-pink-600 to-pink-400",
    borderActive: "border-pink-500/50",
    img: "/images/md-bandai.png", 
    desc: "글로벌 핵심 IP. 매장 내 오픈런과 압도적 대기열을 창출합니다."
  },
  {
    title: "대중성 / 메가 IP",
    ratio: "40%",
    color: "text-blue-400",
    bgBar: "from-blue-600 to-blue-400",
    borderActive: "border-blue-500/50",
    img: "/images/md-popular_01.jpg", 
    desc: "사진 촬영 후 일반 고객의 즉각적인 충동 구매를 유도합니다."
  },
  {
    title: "독점 K-IP (웹툰 등)",
    ratio: "30%",
    color: "text-green-400",
    bgBar: "from-green-600 to-green-400",
    borderActive: "border-green-500/50",
    img: "/images/md-kip_01.jpg", 
    desc: "압도적인 마진율을 방어하며 우리 매장에만 있는 독점력을 제공합니다."
  }
];

// 🚀 1. MD 라인업 슬라이드 전용 컴포넌트
export function MdLineupContent() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % MD_DATA.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-6 w-full font-sans break-keep bg-[#111] p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl">
      
      {/* 100% 누적 막대 그래프 */}
      <div className="w-full">
        <div className="flex justify-between text-xs md:text-sm font-bold mb-2 px-1">
          <span className="text-pink-400">프리미엄 30%</span>
          <span className="text-blue-400">대중성 40%</span>
          <span className="text-green-400">독점 K-IP 30%</span>
        </div>
        <div className="w-full h-4 flex rounded-full overflow-hidden bg-zinc-800">
          <div className="h-full bg-gradient-to-r from-pink-600 to-pink-400 w-[30%]" />
          <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-[40%]" />
          <div className="h-full bg-gradient-to-r from-green-600 to-green-400 w-[30%]" />
        </div>
      </div>

      {/* 3개의 카테고리 텍스트 (가로로 나열하여 공간 절약) */}
      <div className="grid grid-cols-3 gap-3">
        {MD_DATA.map((item, idx) => (
          <div 
            key={idx} 
            className={`p-3 rounded-xl transition-all duration-500 border flex flex-col justify-center ${
              activeIndex === idx 
                ? `bg-white/10 ${item.borderActive} scale-100 opacity-100` 
                : 'bg-transparent border-transparent scale-95 opacity-40'
            }`}
          >
            <span className={`font-black text-sm md:text-base ${item.color} mb-1`}>{item.title}</span>
            <p className="text-[10px] md:text-xs text-gray-300 leading-tight hidden sm:block">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 거대한 이미지 슬라이더 (높이 350px로 시원하게 배치) */}
      <div className="w-full h-[250px] sm:h-[350px] relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={MD_DATA[activeIndex].img} 
              alt={MD_DATA[activeIndex].title} 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none flex items-end p-6">
               <span className={`font-black text-2xl drop-shadow-lg ${MD_DATA[activeIndex].color}`}>
                 {MD_DATA[activeIndex].title}
               </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}


// 🚀 2. 면적별 스탠다드 슬라이드 전용 컴포넌트
export function StoreLayoutContent() {
  return (
    <div className="flex flex-col gap-6 w-full font-sans break-keep bg-[#111] p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl">
      
      {/* 거대한 매장 도면/전경 이미지 */}
      <div className="w-full h-[200px] sm:h-[300px] relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group">
        <Image 
          src="/images/store-layout_01.png" 
          alt="매장 표준 레이아웃" 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
          <div>
            <span className="text-white font-black tracking-widest text-xl drop-shadow-md">STANDARD STORE LAYOUT</span>
            <p className="text-xs text-gray-300 mt-1">포토 부스 축소 시 확보되는 동선에 가챠 기기를 최적화 배치</p>
          </div>
        </div>
      </div>

      {/* 면적별 스탠다드 데이터 */}
      <div className="space-y-3 w-full">
        {/* 10~15평 */}
        <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
          <div className="font-bold text-white text-base">10평 ~ 15평 형</div>
          <div className="text-right flex gap-6">
            <div className="text-sm"><span className="text-gray-400 mr-2">네컷 부스</span><span className="text-blue-400 font-bold">2대</span></div>
            <div className="text-sm"><span className="text-gray-400 mr-2">가챠 기계</span><span className="text-pink-400 font-bold">40~50대</span></div>
          </div>
        </div>
        
        {/* 15~20평 (표준 - 강조) */}
        <div className="flex justify-between items-center p-5 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-xl border border-yellow-500/40 relative overflow-hidden shadow-lg scale-[1.02] my-2">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-500" />
          <div className="font-black text-yellow-400 text-lg pl-2">15평 ~ 20평 형 <span className="text-xs font-bold text-yellow-500/80 ml-1">(표준)</span></div>
          <div className="text-right flex gap-6">
            <div className="text-base"><span className="text-gray-400 text-sm mr-2">네컷 부스</span><span className="text-blue-400 font-black">3대</span></div>
            <div className="text-base"><span className="text-gray-400 text-sm mr-2">가챠 기계</span><span className="text-pink-400 font-black">70~80대</span></div>
          </div>
        </div>

        {/* 20평 이상 */}
        <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
          <div className="font-bold text-white text-base">20평 이상 (대형)</div>
          <div className="text-right flex gap-6">
            <div className="text-sm"><span className="text-gray-400 mr-2">네컷 부스</span><span className="text-blue-400 font-bold">4대+</span></div>
            <div className="text-sm"><span className="text-gray-400 mr-2">가챠 기계</span><span className="text-pink-400 font-bold">100대+</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}