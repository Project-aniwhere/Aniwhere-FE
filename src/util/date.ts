const date = new Date();

export const getYear = () => {
  return String(date.getFullYear());
};

export const getQuarter = () => {
  return String(Math.floor((date.getMonth() + 1) / 3) + 1);
};

export const getDay = () => {
  return String(date.getDay());
};
