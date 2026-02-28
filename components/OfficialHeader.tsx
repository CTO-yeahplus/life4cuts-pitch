"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 👈 [추가] Next.js의 Link 컴포넌트 불러오기

export default function OfficialHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
      
      {/* 💡 [수정] Link 태그로 로고와 텍스트를 감싸서 클릭 시 메인('/')으로 이동하게 만듭니다. */}
      {/* 마우스를 올렸을 때 살짝 투명해지는 hover 효과를 주어 클릭 가능한 버튼임을 직관적으로 알립니다. */}
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
        
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