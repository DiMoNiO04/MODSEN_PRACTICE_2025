import { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { BtnRound } from '../ui';
import { HeaderDropdown } from '../HeaderDropdown';

const Block = styled.div`
  position: relative;
`;

export const HeaderBtnAdd = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = useCallback((e: MouseEvent) => {
    if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }

    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <Block>
        <BtnRound ref={buttonRef} hasBorder handle={() => setIsMenuOpen(!isMenuOpen)} type="add" />
        {isMenuOpen && <HeaderDropdown />}
      </Block>
      {}
    </>
  );
};
