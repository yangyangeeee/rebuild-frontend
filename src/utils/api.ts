import { getAccessToken } from "./auth";
import type {
  CreateLetterRequest,
  LetterResponse,
  LetterListResponse,
} from "@/types/api";

export interface ApiRequestOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: unknown;
  requiresAuth?: boolean;
}

const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL ?? "";

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiRequest<T>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const { method = "GET", headers = {}, body, requiresAuth = false } = options;

  const url = `${API_BASE_URL}${endpoint}`;

  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...headers,
  };

  if (requiresAuth) {
    const token = getAccessToken();
    if (token) {
      requestHeaders.Authorization = `Bearer ${token}`;
    } else {
      console.warn("[api] requiresAuth=true 인데 토큰이 없습니다.");
    }
  }

  const fetchOptions: RequestInit = {
    method,
    headers: requestHeaders,
  };

  if (body !== undefined) {
    fetchOptions.body = JSON.stringify(body);
  }

  const res = await fetch(url, fetchOptions);
  const text = await res.text();
  const data: unknown = text ? JSON.parse(text) : null;

  if (!res.ok) {
    throw new ApiError(
      res.status,
      `요청 실패: ${res.status} ${res.statusText}`
    );
  }

  return data as T;
}

// 편지생성
export const createLetter = async (
  request: CreateLetterRequest
): Promise<LetterResponse> => {
  return apiRequest<LetterResponse>("/letters", {
    method: "POST",
    body: request,
    requiresAuth: true,
  });
};

// 편지 조회
export const getMyLetters = async (): Promise<LetterListResponse> => {
  return apiRequest<LetterListResponse>("/letters", {
    method: "GET",
    requiresAuth: true,
  });
};

// 편지 상세 조회
export const getLetterDetail = async (
  letterId: number
): Promise<LetterResponse> => {
  return apiRequest<LetterResponse>(`/letters/${letterId}`, {
    method: "GET",
    requiresAuth: true,
  });
};

// 편지 삭제
export const deleteLetter = async (letterId: number): Promise<void> => {
  return apiRequest<void>(`/letters/${letterId}`, {
    method: "DELETE",
    requiresAuth: true,
  });
};
