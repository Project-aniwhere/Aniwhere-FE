import { useState } from 'react';

const useToggle = (initialValue: boolean) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return [isOpen, handleToggle] as const;
};

export default useToggle;
