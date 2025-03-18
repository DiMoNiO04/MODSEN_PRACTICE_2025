import { useEffect } from 'react';

const clearStyle = (body: HTMLBodyElement, header: HTMLElement): void => {
  body.style.overflow = '';
  body.style.paddingRight = '';
  header.style.paddingRight = '';
};

export const useBodyScrollBlock = (isLocked: boolean): void => {
  useEffect(() => {
    const body = document.body as HTMLBodyElement;
    const header = document.querySelector('header') as HTMLElement;

    if (isLocked) {
      const scrollbarWidth: number = window.innerWidth - document.documentElement.clientWidth;
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollbarWidth}px`;
      header.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      clearStyle(body, header);
    }

    return () => {
      clearStyle(body, header);
    };
  }, [isLocked]);
};
