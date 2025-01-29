// 사용자 정보 정의
export interface UserInfo {
  birthday: string;
  birthyear: string;
  email: string;
  nickname: string;
  role: string;
  sex: string;
  userId: number;
  // user_profile_img: string;
}

// 세션정보
export interface SessionType {
  isLogin: boolean;
  userInfo: UserInfo | null;
}
