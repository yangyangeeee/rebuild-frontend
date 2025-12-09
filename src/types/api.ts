// 이별 정보
export interface BreakupSaveRequest {
  reason: string;
  breakupDate: string;
}

// 편지 카드 정보
export interface Letter {
  id: number;
  toName: string | null;
  fromName: string | null;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateLetterRequest {
  toName?: string;
  fromName?: string;
  content: string;
}

// 편지 생성
export type LetterResponse = Letter;

// 편지 목록
export type LetterListResponse = Letter[];

// 편지 상세 조회
export type LetterDetailResponse = Letter;
