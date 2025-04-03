export const objectToSearchParams = (obj: any) => {
  const searchParams = new URLSearchParams();
  Object.entries(obj).forEach(([key, value]) => {
    searchParams.append(key, String(value));
  });
  return searchParams;
};
