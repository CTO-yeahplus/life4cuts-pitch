import type { Metadata } from 'next';
import './globals.css'; // (기존에 있던 CSS 임포트)

// 💡 [여기가 핵심입니다] 링크 공유 시 메신저에 뜰 제목, 설명, 이미지를 세팅합니다.
export const metadata: Metadata = {
  title: '엘케이벤처스 IR ',
  description: '공간 비즈니스의 퀀텀 점프. 데이터로 증명된 상위 1%의 오프라인 공간 수익화 전략, 글로벌 수퍼앱 고마진 전략',
  openGraph: {
    title: '[Confidential] 엘케이벤처스 VVIP 제안서',
    description: '가장 확실한 상권이 남아있는 지금, 수익이 폭발하는 복합 문화 플랫폼에 합류하십시오.',
    url: 'https://life4cuts-pitch.vercel.app', // 나중에 실제 배포하실 도메인 주소로 변경하세요
    siteName: 'LK Ventures Global',
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