export const getDifferenceTime = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffSec = Math.floor(diff / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffMonth / 12);

  if (diffYear > 0) {
    return `${diffYear}년 전`;
  } else if (diffMonth > 0) {
    return `${diffMonth}개월 전`;
  } else if (diffDay > 0) {
    return `${diffDay}일 전`;
  } else if (diffHour > 0) {
    return `${diffHour}시간 전`;
  } else if (diffMin > 0) {
    return `${diffMin}분 전`;
  } else {
    return `${diffSec}초 전`;
  }
};
