import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // public/images/crowds 폴더 경로 설정
    const dirRelativeToPublicFolder = 'images/crowds';
    const dir = path.join(process.cwd(), 'public', dirRelativeToPublicFolder);
    
    // 폴더가 없으면 빈 배열 반환
    if (!fs.existsSync(dir)) {
      return NextResponse.json({ images: [] });
    }

    // 폴더 내 파일 목록 읽기
    const files = fs.readdirSync(dir);
    
    // 확장자가 이미지인 파일만 필터링하고 경로 완성
    const images = files
      .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .map(file => `/${dirRelativeToPublicFolder}/${file}`);

    return NextResponse.json({ images });
    
  } catch (error) {
    console.error('이미지 폴더를 읽는 중 오류 발생:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}