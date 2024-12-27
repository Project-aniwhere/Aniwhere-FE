export const QUARTERS: Record<string, string> = {
  '1': '1분기',
  '2': '2분기',
  '3': '3분기',
  '4': '4분기',
  airing: '방영 중',
  upcoming: '방영 예정',
};

export const DAYS: Record<string, string> = {
  '0': '일',
  '1': '월',
  '2': '화',
  '3': '수',
  '4': '목',
  '5': '금',
  '6': '토',
};

export const DETAIL_TABS: Record<string, string> = {
  episode: '에피소드',
  cast: '출연/제작',
  comment: '코멘트',
  related: '비슷한 작품',
};

export const SERVER_RESPONSE: Record<string, string> = {
  // common
  C001: '서버 에러가 발생했습니다.',
  C002: '서버 에러가 발생했습니다.',
  C003: '서버 에러가 발생했습니다.',
  C004: '서버 에러가 발생했습니다.',
  C005: '서버 에러가 발생했습니다.',

  // member
  M001: '유효하지 않은 토큰입니다.',
  M002: '유효하지 않은 토큰입니다.',
  M003: '중복된 닉네임입니다.',
  M004: '이미 회원가입한 메일입니다.',
  M005: '이메일 인증을 해주세요.',
  M006: '인증 코드가 일치하지 않습니다.',
  M007: '비밀번호가 일치하지 않습니다.',
  M008: '사용자를 찾을 수 없습니다.',
  M009: '권한이 없습니다.',

  // token
  T001: '다시 로그인해주세요.',
  T002: '다시 로그인해주세요.',

  // external
  E001: '네트워크 에러입니다.',
  E002: '서비스를 사용할 수 없습니다.',
};
