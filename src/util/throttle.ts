// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastTime = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    if (lastTime === 0) {
      func(...args);
      lastTime = now;
      return;
    }

    const remainingTime = delay - (now - lastTime);

    if (remainingTime <= 0) {
      func(...args);
      lastTime = now;
    } else if (timeout === null) {
      timeout = setTimeout(() => {
        func(...args);
        lastTime = Date.now();
        timeout = null;
      }, remainingTime);
    }
  };
};
