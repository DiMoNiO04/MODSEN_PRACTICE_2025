import { useCallback, useEffect, useRef, useState } from 'react';

export const useDropdownToggle = (isClickMenuClose: boolean = false) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const refDropdownBtn = useRef<HTMLButtonElement | null>(null);
  const refDropdownMenu = useRef<HTMLDivElement | null>(null);

  const closeMenu = useCallback(
    (e: MouseEvent) => {
      if (
        refDropdownBtn.current &&
        !refDropdownBtn.current.contains(e.target as Node) &&
        refDropdownMenu.current &&
        (isClickMenuClose
          ? refDropdownMenu.current.contains(e.target as Node)
          : !refDropdownMenu.current.contains(e.target as Node))
      ) {
        setIsDropdownOpen(false);
      }
    },
    [isClickMenuClose]
  );

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
