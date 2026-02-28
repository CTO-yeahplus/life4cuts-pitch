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