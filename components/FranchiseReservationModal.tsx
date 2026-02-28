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