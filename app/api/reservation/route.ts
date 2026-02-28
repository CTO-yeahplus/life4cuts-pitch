import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, budget, region } = body;

    const MONDAY_API_TOKEN = process.env.MONDAY_API_TOKEN;
    const BOARD_ID = process.env.MONDAY_BOARD_ID;

    if (!MONDAY_API_TOKEN || !BOARD_ID) {
      throw new Error("서버 환경 변수가 설정되지 않았습니다.");
    }

    // [추가] 오늘 날짜 생성 (YYYY-MM-DD 형식)
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    const query = `
      mutation ($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
        create_item (
          board_id: $boardId,
          item_name: $itemName,
          column_values: $columnValues
        ) {
          id
        }
      }
    `;

    // 🎯 확인된 컬럼 ID와 접수일자(date4)를 추가 매칭했습니다.
    const variables = {
      boardId: Number(BOARD_ID),
      itemName: name,
      columnValues: JSON.stringify({
        "text_mm10cdq4": name,    // 성함 또는 법인명
        "text_mm10watd": phone,   // 연락처
        "text_mm105d7a": budget,  // 희망투자규모
        "text_mm10degr": region,  // 관심지역
        "date4": formattedDate    // [추가] 접수일자 (ID: date4)
      })
    };

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