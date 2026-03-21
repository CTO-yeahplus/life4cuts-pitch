"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, Globe2, CloudLightning, Wallet, Sparkles, 
  Rocket, Code2, BarChart4, Target, ArrowRightCircle, CheckCircle2,
  RefreshCcw, Smartphone, Store, ArrowRight, Map, TrendingUp
} from 'lucide-react';
import OfficialHeader from '@/components/OfficialHeader';
import VipReservationModal from '@/components/VipReservationModal'; // 예약 모달 재사용

const GLOBAL_SLIDES = [
  // 1. 압도적 트랙션
  {
    id: "01",
    icon: <Globe2 className="w-12 h-12 text-blue-500 mb-6" />,
    title: "The Unfair Advantage",
    subtitle: "0에서 시작하지 않는 글로벌 인프라",
    content: (
      <div className="space-y-8 text-lg text-gray-300">
        <p>인생네컷은 이미 전 세계 30개국을 매일 만나고 있습니다. 우리의 고객 획득 비용(CAC)은 <strong className="text-pink-400">'0원'</strong>입니다.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#111] border border-white/10 p-5 rounded-2xl text-center">
            <div className="text-3xl font-black text-white mb-1">30<span className="text-sm text-gray-500 font-normal"> 개국</span></div>
            <div className="text-xs text-gray-400">글로벌 진출 국가</div>
          </div>
          <div className="bg-[#111] border border-white/10 p-5 rounded-2xl text-center">
            <div className="text-3xl font-black text-white mb-1">1,000<span className="text-sm text-gray-500 font-normal"> +</span></div>
            <div className="text-xs text-gray-400">글로벌 매장 수</div>
          </div>
          <div className="bg-[#111] border border-white/10 p-5 rounded-2xl text-center">
            <div className="text-3xl font-black text-white mb-1">2,800<span className="text-sm text-gray-500 font-normal"> +</span></div>
            <div className="text-xs text-gray-400">해외 기기 대수</div>
          </div>
          <div className="bg-[#111] border border-white/10 p-5 rounded-2xl text-center border-b-4 border-b-blue-500">
            <div className="text-3xl font-black text-blue-400 mb-1">400<span className="text-sm text-gray-500 font-normal"> 만 명</span></div>
            <div className="text-xs text-gray-400 font-bold">월간 글로벌 이용객</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-900/40 to-transparent p-6 rounded-2xl border border-blue-500/30 flex items-start gap-4">
          <Sparkles className="w-8 h-8 text-blue-400 flex-shrink-0" />
          <div>
            <h4 className="text-white font-bold text-xl mb-2">The Killer Metric: QR 접속률 98%</h4>
            <p className="text-sm text-blue-200">
              오프라인 고객 400만 명 중 98%인 <strong className="text-pink-400">392만명</strong>이 원본 사진을 다운로드하기 위해 모바일 QR 페이지에 접속합니다. 앱을 깔지 않아도 이미 우리 모바일 웹의 문을 매월 두드리고 있습니다.
            </p>
          </div>
        </div>
      </div>
    )
  },

  // 2. 문제와 해결책
  {
    id: "02",
    icon: <CloudLightning className="w-12 h-12 text-yellow-500 mb-6" />,
    title: "사진첩을 넘어선 글로벌 놀이터",
    subtitle: "Problem & Solution",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white/5 border border-red-500/20 p-6 rounded-3xl">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">AS-IS: 고객 이탈과 파편화</h4>
            <ul className="space-y-3 text-sm">
              <li>• 종이 사진의 분실 위험 및 디지털 원본 소장 욕구</li>
              <li>• 글로벌 팬덤이 사진을 꾸미고 자랑할 전용 소셜 커뮤니티 부재</li>
              <li>• 누적 다운로드 100만 대비 MAU 3.5만에 머무는 '밑빠진 독'</li>
            </ul>
          </div>
          <div className="flex-1 bg-gradient-to-br from-[#111] to-zinc-900 border border-yellow-500/40 p-6 rounded-3xl shadow-[0_0_30px_rgba(234,179,8,0.1)]">
            <h4 className="text-yellow-400 font-bold mb-4 flex items-center gap-2">TO-BE: 글로벌 슈퍼 앱</h4>
            <ul className="space-y-3 text-sm">
              <li><strong className="text-white">클라우드 락인:</strong> 고화질 원본 자동/영구 저장</li>
              <li><strong className="text-white">크리에이터 스튜디오:</strong> 나만의 프레임 & LUT 필터 직접 제작</li>
              <li><strong className="text-white">K-컬쳐 커뮤니티:</strong> 유저 간 프레임 공유 및 팬덤 네트워킹</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  // 3. Tollgate & 구독 모델
  {
    id: "03",
    icon: <Wallet className="w-12 h-12 text-green-500 mb-6" />,
    title: "강력한 Tollgate와 팬덤 멤버십",
    subtitle: "Business Model 1: Subscription Lock-in",
    content: (
      <div className="space-y-8 text-lg text-gray-300">
        <p className="leading-relaxed">
          <strong className="text-white">"원본 1장당 1,000원을 내시겠습니까, 아니면 구독하시겠습니까?"</strong><br/>
          타사에서 이미 증명된 '원본 다운로드 유료화(건당 $1)'를 전격 도입하여 유저를 앱 구독으로 강제 편입(Tollgate)시킵니다. 단순 용량 팔이가 아닌 'VIP 팬덤 경험'을 파는 모델입니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#111] border border-white/10 p-6 rounded-2xl relative">
            <h4 className="text-xl font-bold text-white mb-1">Free <span className="text-sm font-normal text-gray-500">(Welcome)</span></h4>
            <div className="text-2xl font-black text-gray-400 mb-4">₩ 0</div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• 스토리지 100MB (약 10회 촬영)</li>
              <li>• 촬영 원본 저장</li>
              <li>• 나만프 제작 무제한</li>
              <li>• 커뮤니티 눈팅 가능</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-500">10번 촬영 시 용량 초과로 결제 유도 (미끼)</div>
          </div>

          <div className="bg-gradient-to-b from-green-900/30 to-[#111] border border-green-500/50 p-6 rounded-2xl relative scale-105 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Core Cashcow</div>
            <h4 className="text-xl font-bold text-white mb-1">Basic <span className="text-sm font-normal text-green-400">(Fan)</span></h4>
            <div className="text-3xl font-black text-green-400 mb-4">₩ 4,900<span className="text-sm font-normal text-gray-400">/월</span></div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• 스토리지 10GB(약 1,000회 촬영)</li>
              <li className="font-bold text-pink-400">• 매월 K-Pop 한정판 프레임 1종 무료 (가치 증명)</li>
              <li>• 나만프 촬영권 8개</li>
            </ul>
          </div>

          <div className="bg-[#111] border border-white/10 p-6 rounded-2xl relative">
            <h4 className="text-xl font-bold text-white mb-1">Pro <span className="text-sm font-normal text-gray-500">(Creator)</span></h4>
            <div className="text-2xl font-black text-gray-300 mb-4">₩ 9,900<span className="text-sm font-normal text-gray-500">/월</span></div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• 스토리지 50GB(약 5,000회 촬영)</li>
              <li className="text-white">• 프레임 커뮤니티 판매 권한</li>
              
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-500">크리에이터 및 O2O 헤비 유저 타겟</div>
          </div>
        </div>
      </div>
    )
  },

  // 4-1. C2E 생태계 (원리 및 시스템)
  {
    id: "04-1",
    icon: <Brush className="w-12 h-12 text-pink-500 mb-6" />,
    title: "C2E 생태계 1/2: 초고마진 이중 락인",
    subtitle: "Business Model 2: Creator Economy System",
    content: (
      <div className="space-y-8 text-lg text-gray-300">
        <p className="leading-relaxed">
          유저가 만든 프레임을 앱에서 거래하는 디지털 생태계가 <strong className="text-white">오프라인 오가닉 매출</strong>로 환류(Flywheel)하는 구조입니다. 모두에게 50%를 주지 않고, 철저히 통제된 3단계 락인을 적용합니다.
        </p>
        
        <div className="space-y-6">
          {/* Step 1. 다이내믹 등급제 */}
          <div className="bg-[#111] p-6 rounded-3xl border border-pink-500/30 relative">
            <h4 className="text-pink-400 font-bold mb-4 flex items-center gap-2"><Smartphone className="w-5 h-5"/> Step 1. 다이내믹 수익 분배 (Gamified Tiering)</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-white font-bold mb-1">🌱 씨앗 등급 <span className="text-gray-500 text-xs">(80%)</span></div>
                <div className="text-gray-400 mb-2">본사 70% : 크리에이터 30%</div>
                <div className="text-xs text-gray-500">수많은 소액 결제 롱테일에서 본사가 압도적 최대 마진 확보.</div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-white font-bold mb-1">🌿 새싹 등급 <span className="text-gray-500 text-xs">(15%)</span></div>
                <div className="text-gray-400 mb-2">본사 50% : 크리에이터 50%</div>
                <div className="text-xs text-gray-500">누적 1,000건 이상. 동기부여 핵심.</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-pink-900/30 to-transparent rounded-2xl border border-pink-500/50">
                <div className="text-pink-300 font-bold mb-1">👑 마스터 등급 <span className="text-pink-500/60 text-xs">(Top 5%)</span></div>
                <div className="text-gray-300 mb-2">본사 30% : <strong className="text-pink-400">크리에이터 70%</strong></div>
                <div className="text-xs text-pink-200/70">"70%나 준다"는 소문으로 외부 금손 크리에이터 자발적 유입 (마케팅비 0원)</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 2. 현금 방어 */}
            <div className="bg-[#111] p-6 rounded-3xl border border-white/10">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2"><RefreshCcw className="w-5 h-5 text-yellow-500"/> Step 2. 현금 환전 수수료 (50%)</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                벌어들인 '네컷 코인'을 오프라인 매장 결제나 앱 구독료로 쓸 때는 1코인=1원으로 100% 인정합니다. 하지만 <strong>실제 계좌표 현금으로 인출(Cash-out)할 때는 50%의 환전 수수료</strong>를 부과하여 플랫폼의 현금 유출을 방어합니다.
              </p>
            </div>
            
            {/* Step 3. 오프라인 서버비 정산 */}
            <div className="bg-[#111] p-6 rounded-3xl border border-white/10">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2"><Store className="w-5 h-5 text-blue-500"/> Step 3. 오프라인 17% IP 별도 징수</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                크리에이터의 프레임이 실제 매장에서 5,000원에 출력될 경우, 본사는 이를 '캐릭터 IP'로 규정하여 <strong>가맹점주로부터 결제액의 17%를 서버비로 별도 정산</strong>받습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // 4-2. C2E 생태계 (마진 시뮬레이션 & 스피커 노트)
  {
    id: "04-2",
    icon: <BarChart4 className="w-12 h-12 text-yellow-500 mb-6" />,
    title: "C2E 생태계 2/2: 완벽하게 설계한 마진 시뮬레이션",
    subtitle: "Margin Simulation & VC Pitching",
    content: (
      <div className="space-y-8 text-lg text-gray-300">
        <p className="leading-relaxed">
          이 3단계 시스템이 맞물렸을 때, 유저가 만든 <strong>프레임이 1,000원에 1장 팔렸을 경우 발생하는 마법 같은 수익 시뮬레이션</strong>입니다.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {/* 💰 마진 시뮬레이션 패널 */}
          <div className="bg-[#111] p-8 rounded-3xl border border-white/10 relative space-y-6">
            <h4 className="text-yellow-400 font-bold text-xl mb-4 border-b border-white/10 pb-4">1,000원 거래 시뮬레이션</h4>
            
            <div className="space-y-6 text-sm">
              <div className="relative">
                <div className="text-white font-bold mb-2 text-base">🌱 일반 크리에이터 (씨앗 등급)</div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-gray-300">1,000원 중 <strong className="text-pink-400">30% (300코인)</strong> 지급</p>
                  <p className="text-white mt-1">➡️ <strong className="text-green-400 font-bold text-lg">본사 700원 즉각 이익 (70%)</strong></p>
                </div>
              </div>
              
              <div className="relative">
                <div className="text-pink-300 font-bold mb-2 text-base">👑 메가 크리에이터 (마스터 등급)</div>
                <div className="p-4 bg-gradient-to-r from-pink-900/20 to-transparent rounded-xl border border-pink-500/30">
                  <p className="text-gray-300 mb-3">1,000원 중 <strong className="text-pink-400">70% (700코인)</strong> 지급 후 크리에이터의 선택:</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-black/40 p-3 rounded-lg border border-yellow-500/20">
                      <div className="bg-yellow-500/20 text-yellow-400 font-bold px-2 py-1 rounded text-xs shrink-0">경우 A</div>
                      <div>
                        <strong className="text-white block mb-1">매장 / 앱 내 코인 소진 시</strong>
                        <p className="text-gray-400 text-xs">700코인으로 매장 출력 등 이용. 종이 원가만 지출되므로 <strong>본사 실질 마진율 90% 이상 확보.</strong></p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 bg-black/40 p-3 rounded-lg border border-red-500/20">
                      <div className="bg-red-500/20 text-red-400 font-bold px-2 py-1 rounded text-xs shrink-0">경우 B</div>
                      <div>
                        <strong className="text-white block mb-1">현금 인출 (Cash-out) 시</strong>
                        <p className="text-gray-400 text-xs">50% 수수료 차감 후 350원만 입금. 마스터 등급에게 70%를 떼어줘도 <strong>최종 650원의 현금 마진(65%) 잔존.</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  // 4-3. 국경 없는 C2E 생태계 (단독 장표)
  {
    id: "04-3",
    icon: <Map className="w-12 h-12 text-blue-500 mb-6" />,
    title: "Borderless C2E: 국경 없는 무역",
    subtitle: "Global Design Studio & Output Hub",
    content: (
      <div className="space-y-8 text-lg text-gray-300">
        <p className="leading-relaxed">
          물리적 매장의 유무는 더 이상 약점이 아닙니다. 매장이 없는 <strong className="text-white">160개국은 공급처</strong>가 되고, 매장이 있는 <strong className="text-blue-400">30개국은 소비처</strong>가 되는 완벽한 글로벌 무역 생태계가 열립니다.
        </p>

        {/* 🗺️ 시각화 영역: 브라질 -> 한국/일본 디지털 수출 */}
        <div className="relative w-full bg-[#0a0a0a] p-8 md:p-12 rounded-[2rem] border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)] overflow-hidden">
          {/* 세계지도 배경 느낌을 위한 희미한 워터마크 */}
          <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
            <Globe2 className="w-[800px] h-[800px] text-blue-500" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            {/* 좌측: 브라질 (공급처) */}
            <div className="w-full md:w-5/12 bg-black/60 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/30 text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Creator</div>
              <Brush className="w-10 h-10 text-pink-400 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-white mb-1">브라질 10대 소녀 A</h4>
              <p className="text-sm text-gray-400">매장 없는 국가 (160개국)</p>
              <div className="mt-4 pt-4 border-t border-white/10 text-pink-300 font-bold text-sm">
                글로벌 디자인 스튜디오
              </div>
            </div>

            {/* 🚀 중앙: 디지털 수출 연결 (애니메이션 수정 완료) */}
            <div className="flex flex-col items-center justify-center w-full md:w-2/12">
              <span className="text-xs text-blue-400 font-bold mb-2 tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30">
                디지털 자산 수출
              </span>
              {/* relative 컨테이너 */}
              <div className="w-full flex items-center justify-center relative h-8">
                {/* 1. 회색 배경 라인 (가장 뒤) */}
                <div className="absolute w-full h-0.5 bg-gray-800" />
                
                {/* 2. 화살표 아이콘 (중간 레이어, z-0) */}
                <ArrowRight className="text-gray-600 z-0 bg-[#0a0a0a] w-8 h-8 relative" />

              </div>
              <span className="text-xs text-yellow-500 font-bold mt-2">70% 수수료 획득</span>
            </div>

            {/* 우측: 서울/도쿄 (소비처) */}
            <div className="w-full md:w-5/12 bg-black/60 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Consumer</div>
              <Store className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-white mb-1">서울 & 도쿄 고객들</h4>
              <p className="text-sm text-gray-400">매장 진출 국가 (30개국)</p>
              <div className="mt-4 pt-4 border-t border-white/10 text-blue-300 font-bold text-sm">
                초고화질 오프라인 출력소
              </div>
            </div>
          </div>
        </div>

        {/* 🎙️ 하단: VC 대상 스피커 노트 (가로형 와이드 패널) */}
        <div className="mt-6 p-6 md:p-8 bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-transparent border-l-4 border-cyan-400 rounded-2xl shadow-xl relative overflow-hidden">
          <strong className="text-cyan-300 block mb-4 text-xl tracking-wide flex items-center gap-2 relative z-10">
            <Sparkles className="w-6 h-6"/> Core Value
          </strong>
          <div className="leading-relaxed text-base md:text-lg break-keep space-y-4 text-cyan-50 relative z-10">
            <p>C2E 생태계에서는 물리적 국경이 존재하지 않습니다.</p>
            
            <p>브라질에 사는 10대 소녀가 방구석에서 트렌디한 프레임을 디자인해 올리면, 서울과 도쿄의 수많은 고객들이 그 프레임을 1,000원에 사서 매장에서 출력합니다.</p>
            
            <p className="text-white font-bold mt-2 pt-4 border-t border-cyan-500/30">
              즉, 매장이 없는 160개국은 전 세계에 프레임을 수출하는 '글로벌 디자인 스튜디오'가 되고, 매장이 있는 30개국은 그들의 작품을 소비하는 '출력소'가 됩니다. 이것이 전 세계 1020 여성들을 하나로 묶어내는 진정한 글로벌 플랫폼입니다.
            </p>
          </div>
        </div>
      </div>
    )
  },

  // 5. GTM 
  {
    id: "05",
    icon: <Rocket className="w-12 h-12 text-purple-500 mb-6" />,
    title: "마케팅비 0원, 글로벌 바이럴 전략",
    subtitle: "Go-To-Market Strategy",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#111] border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center hover:border-purple-500/50 transition-colors">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4"><Target className="w-6 h-6 text-purple-400" /></div>
            <h4 className="text-white font-bold mb-2">IP 홀드백 (창문 효과)</h4>
            <p className="text-sm text-gray-400">K-Pop 아이돌 프레임 3개월 계약 시, <strong className="text-white">"첫 1개월은 앱 독점 선공개"</strong>. 글로벌 코어 팬덤의 즉각적이고 강제적인 대규모 앱 다운로드를 유도합니다.</p>
          </div>
          <div className="bg-[#111] border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center hover:border-purple-500/50 transition-colors">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4"><Store className="w-6 h-6 text-purple-400" /></div>
            <h4 className="text-white font-bold mb-2">오프라인 크로스셀링</h4>
            <p className="text-sm text-gray-400">전 세계 1,000대 기기 대기 화면에 <strong className="text-white">"앱 설치 시 구독 1+1개월 무료"</strong> QR을 상시 노출하여 오프라인 트래픽을 온라인으로 흡수합니다.</p>
          </div>
          <div className="bg-[#111] border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center hover:border-purple-500/50 transition-colors">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4"><Smartphone className="w-6 h-6 text-purple-400" /></div>
            <h4 className="text-white font-bold mb-2">숏폼 템플릿 바이럴</h4>
            <p className="text-sm text-gray-400">앱 내 필터 적용 화면을 틱톡, 인스타 릴스에 최적화된 힙한 템플릿으로 제공하여 MZ세대의 자발적 오가닉 바이럴을 창출합니다.</p>
          </div>
        </div>
      </div>
    )
  },

  // 5-2. 매장이 없는 국가를 위한 무국적 확장 전략 (O2D)
  {
    id: "05-2",
    icon: <Globe2 className="w-12 h-12 text-cyan-500 mb-6" />,
    title: "국경 없는 확장: 투트랙(Two-Track) 전략",
    subtitle: "Borderless K-Culture Playground",
    content: (
      <div className="space-y-6 text-lg text-gray-300 max-h-[75vh] overflow-y-auto pr-2 pb-10">
        <p className="leading-relaxed">
          오프라인 매장의 한계를 완벽하게 부수기 위해, 매장이 없는 국가의 유저들을 생산자와 소비자로 나누어 흡수하는 <strong className="text-white">글로벌 투트랙(Two-Track) 전략</strong>을 완성했습니다.
        </p>

        {/* 📱 상단: 기능 설명 (가로로 2개 나란히 배치) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#111] border border-cyan-500/30 p-6 rounded-3xl relative overflow-hidden">
            <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2 text-lg">
              <Brush className="w-5 h-5"/> Track 1. 생산자 타겟 (C2E)
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
              매장이 없어도 상관없습니다. 디자인 감각이 있는 유저들은 방구석에서 프레임을 만들어 <strong>전 세계 오프라인 매장에 '수출'</strong>하며 돈을 법니다. 감성과 퀄리티만으로 승부하는 무역 생태계입니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-[#111] border border-cyan-400/50 p-6 rounded-3xl relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <h4 className="text-white font-bold mb-3 flex items-center gap-2 text-lg">
              <Smartphone className="w-5 h-5 text-cyan-400"/> Track 2. 소비자 타겟 (Read & Snap)
            </h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed px-1">
              K-패션/뷰티 매거진 <strong>'포토플레이북'</strong>과 인앱 <strong>AR 카메라</strong>를 결합하여, 단순 소비형 유저의 지갑을 엽니다.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0"/>
                <span>기사 하단 <strong>[이 바이브로 찍기]</strong> 원클릭 카메라 실행</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0"/>
                <span>기사 속 모델의 색감, 프레임, 포즈 가이드 자동 세팅</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  // 6. 기술 로드맵
  {
    id: "06",
    icon: <Code2 className="w-12 h-12 text-cyan-500 mb-6" />,
    title: "인하우스 개발팀과 2026 로드맵",
    subtitle: "Tech Infrastructure & Timeline",
    content: (
      <div className="space-y-8 text-lg text-gray-300">
        <div className="flex items-center gap-4 bg-cyan-900/20 p-4 rounded-xl border border-cyan-500/30">
          <Code2 className="w-8 h-8 text-cyan-400" />
          <p className="text-sm"><strong className="text-white">탄탄한 내부 인하우스 팀 구축 완료:</strong> 백엔드/서버 2명, 프론트엔드 2명, Flutter 앱 1명, 키오스크 2명. 외주 없는 압도적 실행력 담보.</p>
        </div>

        <div className="relative border-l-2 border-white/20 pl-6 ml-3 space-y-8">
          <div className="relative">
            <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0a0a0a]" />
            <h4 className="text-xl font-bold text-white mb-1">Phase 1. 26년 1Q (런칭 완료)</h4>
            <p className="text-sm text-gray-400">앱 기반 구축, 나만의 커스텀 프레임 제작 스튜디오, K-패션 포토 플레이북 및 카메라 필터 핵심 기능 런칭.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-yellow-500 border-4 border-[#0a0a0a]" />
            <h4 className="text-xl font-bold text-yellow-400 mb-1">Phase 2. 26년 2Q (5월 말)</h4>
            <p className="text-sm text-gray-300">글로벌 결제 모듈 연동, QR 원본 다운로드 과금(Tollgate) 오픈, 클라우드 스토리지 구독제 도입. <strong className="text-white">(수익화 랠리 시작)</strong></p>
          </div>
          <div className="relative">
            <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-pink-500 border-4 border-[#0a0a0a]" />
            <h4 className="text-xl font-bold text-pink-400 mb-1">Phase 3. 26년 3Q (8월)</h4>
            <p className="text-sm text-gray-300">글로벌 소셜 커뮤니티 및 C2E 크리에이터 스토어 정식 오픈. <strong className="text-white">(플랫폼 생태계 완성)</strong></p>
          </div>
        </div>
      </div>
    )
  },

  // 7. 재무 시뮬레이션
  {
    id: "07",
    icon: <BarChart4 className="w-12 h-12 text-yellow-500 mb-6" />,
    title: "CAC 0원의 폭발적 캐시플로우",
    subtitle: "Financial Projections (Monthly Base)",
    content: (
      <div className="space-y-6 text-lg text-gray-300">
        <p className="text-sm md:text-base mb-4">오프라인 QR 접속자(월 392만 명) 중 <strong className="text-white">'극히 보수적인 전환율(5~10%)</strong>만 적용하여 산출한 <strong className="text-white">'월간(Monthly) 앱 단일 매출'</strong> 시뮬레이션입니다.</p>
        
        <div className="w-full bg-[#111] p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl">
          <div className="space-y-5">
            {[
              { label: "1. QR 다운로드 과금 (전환 10%)", value: 3.9, color: "bg-gray-500" },
              { label: "2. C2E 스토어 본사수수료 (구매 10%)", value: 5.4, color: "bg-purple-500" },
              { label: "3. 오프라인 17% IP/서버비 정산", value: 1.6, color: "bg-blue-500" },
              { label: "4. 멤버십 구독 MRR (전환 6%)", value: 13.4, color: "bg-green-500" },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex justify-between text-sm font-bold text-gray-300 mb-2">
                  <span>{item.label}</span>
                  <span className="text-white">{item.value}억 원</span>
                </div>
                <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${(item.value / 15) * 100}%` }} transition={{ duration: 1, delay: idx * 0.1 }} className={`h-full ${item.color} rounded-full`} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
              <div className="text-xs text-gray-400 mb-1">앱 단일 월 총매출</div>
              <div className="text-2xl font-black text-white">약 24.3억 원</div>
              <div className="text-[10px] text-gray-500 mt-1">(연 환산 약 291억)</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-xl border border-yellow-500/40 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-yellow-500/10 animate-pulse" />
              <div className="text-xs text-yellow-400 font-bold mb-1 relative z-10">월 영업 이익 (OPM 80.2%)</div>
              <div className="text-2xl font-black text-yellow-500 relative z-10">약 19.5억 원</div>
              <div className="text-[10px] text-yellow-500/60 mt-1 relative z-10">(마케팅비 0원의 마법)</div>
            </div>
          </div>
        </div>

        {/* 🎙️ VC 대상 스피커 노트 */}
        <div className="mt-4 p-5 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border-l-4 border-cyan-400 rounded-r-2xl text-base text-cyan-50">
          <strong className="text-cyan-300 block mb-2">Core Value</strong>
          유저 한 명을 데려오기 위해 구글이나 메타에 광고비를 태울 필요가 없습니다(Zero CAC). 
          이미 전국과 해외 매장에서 매월 392만 명이 자기 발로 저희 모바일 웹(QR)에 들어옵니다. 이 거대한 트래픽 중 단 5~10%만 전환시켜도 첫해 연 매출 300억, 영업이익률 80%가 달성됩니다.
        </div>
      </div>
    )
  },

  // 7-2. J커브 성장 시뮬레이션 (시간 흐름에 따른 가입자/매출 추이)
  {
    id: "07-2",
    icon: <TrendingUp className="w-12 h-12 text-green-500 mb-6" />,
    title: "폭발적 스케일업: J-Curve 시뮬레이션",
    subtitle: "MAU & Revenue Growth Trajectory",
    content: (
      // 세로 공간을 확보하고 스크롤을 허용하여 화면이 답답해 보이지 않게 처리
      <div className="space-y-6 text-lg text-gray-300 max-h-[75vh] overflow-y-auto pr-2 pb-10">
        <p className="leading-relaxed">
          런칭 당일 392만 명이 일시에 유입되지는 않습니다. 하지만 <strong className="text-white">타임라인(Tollgate ➡️ C2E)</strong>에 맞춰 전환율이 증폭되며, 종국에는 오프라인 트래픽의 한계를 뚫고 무한 우상향합니다.
        </p>

        {/* 📈 상단: 우상향 그래프 (가로형 와이드 패널) */}
        <div className="w-full bg-[#111] p-6 rounded-[2rem] border border-white/10 relative shadow-2xl overflow-hidden flex flex-col justify-end h-[280px] md:h-[320px]">
          {/* Y축 레이블 (가상) */}
          <div className="absolute left-4 md:left-6 top-6 bottom-10 flex flex-col justify-between text-[10px] md:text-xs text-gray-500 font-bold h-auto z-10">
            <span>50억</span>
            <span>25억</span>
            <span>0원</span>
          </div>
          
          <div className="ml-10 md:ml-14 relative h-[200px] md:h-[240px] flex items-end justify-between gap-2 z-10 border-b border-gray-700 pb-2">
            {[
              { month: "1M", mau: 20, rev: 10, phase: "앱 런칭", color: "bg-gray-700" },
              { month: "2M", mau: 40, rev: 25, phase: "", color: "bg-gray-600" },
              { month: "3M", mau: 100, rev: 80, phase: "Tollgate 오픈", color: "bg-blue-500" },
              { month: "4M", mau: 180, rev: 150, phase: "C2E 스토어", color: "bg-pink-500" },
              { month: "5M", mau: 280, rev: 240, phase: "O2D 매거진", color: "bg-cyan-500" },
              { month: "6M", mau: 450, rev: 380, phase: "오프라인 한계 돌파", color: "bg-green-500" }
            ].map((data, idx) => (
              <div key={idx} className="w-full flex flex-col items-center group relative h-full justify-end">
                {/* 마우스 오버 시 나타나는 Phase 설명 툴팁 */}
                {data.phase && (
                  <div className="absolute -top-8 text-center w-max opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <span className="bg-black/60 text-white text-[10px] md:text-xs px-2 py-1 rounded-full border border-white/20 whitespace-nowrap backdrop-blur-md">
                      {data.phase}
                    </span>
                  </div>
                )}
                {/* 막대 그래프 */}
                <motion.div 
                  initial={{ height: 0 }} 
                  whileInView={{ height: `${(data.rev / 400) * 100}%` }} 
                  transition={{ duration: 1, delay: idx * 0.15, ease: "easeOut" }}
                  className={`w-full max-w-[30px] md:max-w-[50px] ${data.color} rounded-t-md relative overflow-hidden cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
                </motion.div>
                {/* X축 레이블 */}
                <div className="text-[10px] md:text-sm text-gray-400 mt-2 font-bold absolute -bottom-7">{data.month}</div>
              </div>
            ))}
            
            {/* J-Curve 우상향 트렌드 라인 (Line) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 250" preserveAspectRatio="none">
              <motion.path 
                d="M 20 230 Q 150 210, 250 150 T 480 20" 
                fill="transparent" 
                stroke="rgba(250, 204, 21, 0.8)" 
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ filter: 'drop-shadow(0 0 8px rgba(250,204,21,0.5))' }}
              />
            </svg>
          </div>
          
          {/* 범례 */}
          <div className="flex justify-center gap-4 mt-8 text-[10px] md:text-xs text-gray-400 font-bold">
            <span className="flex items-center gap-1"><div className="w-3 h-3 bg-gray-500 rounded-sm"/> 점진적 유입</span>
            <span className="flex items-center gap-1"><div className="w-3 h-3 bg-yellow-400 rounded-full"/> 매출 증폭(J-Curve)</span>
          </div>
        </div>

        {/* 🎙️ 하단: VC 대상 스피커 노트 (가로형 와이드 패널) */}
        <div className="mt-6 p-6 md:p-8 bg-gradient-to-r from-green-900/30 via-blue-900/20 to-transparent border-l-4 border-green-500 rounded-2xl shadow-xl relative overflow-hidden">
          {/* 배경 워터마크 아이콘 */}
          <div className="absolute top-0 right-10 text-green-500/10 -translate-y-1/4 pointer-events-none">
            <TrendingUp className="w-48 h-48" />
          </div>
          <strong className="text-green-400 block mb-4 text-xl tracking-wide flex items-center gap-2 relative z-10">
            <Sparkles className="w-6 h-6"/> Core Value
          </strong>
          <div className="leading-relaxed text-base md:text-lg break-keep space-y-3 text-green-50 relative z-10">
            <p>런칭 첫 달부터 392만 명이 모두 결제하진 않을 것입니다. 초기엔 기능의 안정화와 코어 팬덤의 점진적 유입에 집중합니다.</p>
            
            <p>그리고 <strong>26년 2분기(5월말), 무료 다운로드와 구독제에 과금이 도입되는 순간</strong>, 트래픽은 반 강제적으로 결제와 구독으로 전환되며 1차 J커브를 그립니다.</p>
            
            <p className="text-white font-bold mt-4 pt-4 border-t border-green-500/30">
              이후 Phase 3 26년 3분기(8월) 크리에이터 생태계(C2E)가 열리면, 그때부터는 오프라인 매장이 없는 국가의 유저들까지 생산자와 소비자로 유입됩니다. 오프라인 트래픽의 한계선(392만)을 뚫고 무한 확장하는 진정한 글로벌 스케일업이 완성됩니다.
            </p>
          </div>
        </div>
      </div>
    )
  },

  // 8. Vision & Ask (투자금액 150억으로 상향)
  {
    id: "08",
    icon: <Target className="w-12 h-12 text-red-500 mb-6" />,
    title: "Vision 2028 & The Ask",
    subtitle: "1억 명의 K-컬쳐 플레이그라운드",
    content: (
      <div className="space-y-8 text-lg text-gray-300">
        <div className="bg-[#111] p-8 rounded-[2rem] border border-red-500/30 text-center relative overflow-hidden shadow-[0_0_40px_rgba(239,68,68,0.15)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
          <h4 className="text-red-400 font-bold text-sm tracking-widest uppercase mb-2">Series A Investment</h4>
          {/* 💡 투자 유치 금액 150억으로 상향 */}
          <div className="text-5xl md:text-6xl font-black text-white mb-6">20,000,000,000 원</div>
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm font-bold text-gray-400 mb-4">
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"/> 글로벌 Mega IP 독점 라이선싱 40%</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-500"/> 초거대 글로벌 클라우드 확충 30%</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"/> 글로벌 S급 개발 인력 채용 30%</span>
          </div>
        </div>

        <p className="text-center leading-relaxed font-light">
          "200억 원의 투자는 불확실한 마케팅 실험이 아닙니다.<br/>
          이미 터진 물꼬에 <strong className="text-white">거대한 파이프라인</strong>을 꽂아 글로벌 초격차를 완성하는 가장 확실한 투자입니다."<br/><br/>
          전 세계 1억 명의 팬덤이 매일 접속해 놀고, 창작하고, 소비하는 <br/><strong className="text-pink-400">글로벌 No.1 O2O 슈퍼 앱</strong>으로 도약하겠습니다.
        </p>
      </div>
    )
  }
];

// Lucide Icon Helper
import { Brush } from 'lucide-react';

export default function GlobalPitchDeck() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-[#050505] text-white overflow-y-scroll snap-y snap-mandatory scroll-smooth font-sans selection:bg-blue-500/30 break-keep">
      <OfficialHeader /> 

      {/* --- Intro Slide (Cover) --- */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center relative px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] z-0" />
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 max-w-4xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs md:text-sm text-blue-400 tracking-widest uppercase mb-8 font-bold">
            [Confidential] Global Super App IR
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            The Global Playground<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400">인생네컷 글로벌 슈퍼 앱</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            전 세계 400만 명의 오프라인 트래픽을 디지털 생태계로 통합하는<br/>
            <strong className="text-white">초고마진 C2E 플랫폼 투자 제안서</strong>
          </p>
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase font-bold">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* --- Content Slides --- */}
      {GLOBAL_SLIDES.map((slide) => (
        <section key={slide.id} className="h-screen w-full snap-start flex items-center justify-center px-6 relative overflow-hidden border-t border-white/5 bg-black/40">
          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-20%" }} transition={{ duration: 0.6 }} className="lg:col-span-5 flex flex-col justify-center">
              {slide.icon}
              <div className="text-blue-400 font-bold tracking-widest mb-2 flex items-center gap-2 text-sm md:text-base uppercase"><span className="w-8 h-[1px] bg-blue-500"></span>{slide.subtitle}</div>
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
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-[#050505] to-[#050505] z-0" />
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-3xl w-full border border-blue-500/20 bg-black/60 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-[0_0_80px_rgba(59,130,246,0.15)]">
          <Globe2 className="w-16 h-16 text-blue-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">합류하십시오.</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            인생네컷 글로벌 슈퍼 앱의 Series A 라운드에 초대합니다.<br/>
            상세한 재무 모델링(Excel)과 기술 데모 브리핑을 원하시면 아래 버튼을 통해 미팅을 접수해 주십시오.
          </p>
          
          <div className="flex justify-center w-full">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            >
              투자 브리핑(IR) 예약하기 <ArrowRightCircle className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* 예약 모달 (기존 VVIP 모달 컴포넌트 재사용) */}
      <VipReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}