import { Dispatch, RefObject, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

interface IUseDropdownToggleReturn {
  isDropdownOpen: boolean;
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
  refDropdownBtn: RefObject<HTMLButtonElement | null>;
  refDropdownMenu: RefObject<HTMLDivElement | null>;
}

export const useDropdownToggle = (): IUseDropdownToggleReturn => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const refDropdownBtn = useRef<HTMLButtonElement | null>(null);
  const refDropdownMenu = useRef<HTMLDivElement | null>(null);

  const closeMenu = useCallback((e: MouseEvent) => {
    if (
      refDropdownBtn.current &&
      // refDropdownMenu.current &&
      !refDropdownBtn.current.contains(e.target as Node)
      // !refDropdownMenu.current.contains(e.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }

    return () => document.removeEventListener('click', closeMenu);
  }, [isDropdownOpen, closeMenu]);

  return { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu };
};
