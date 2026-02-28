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