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