export const BASE_URL: string = process.env.REACT_APP_API_URL ?? '';

export const INPUT_ERROR_MESSAGE = {
  requiredUsername: '이름을 입력해주세요',
  requiredEmail: '이메일을 입력해주세요',
  requiredPassword: '비밀번호를 입력해주세요',
  formatEmail: '이메일 형식이 올바르지 않습니다.',
  duplicateEmail: '이미 존재하는 이메일입니다',
};

export const EMAIL_REGEX = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
