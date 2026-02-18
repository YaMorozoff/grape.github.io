'use client';
import React, { FC, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const FormModal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const portalRoot = document.getElementById('modal-portal');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  if (!portalRoot) return null;
  return createPortal(
    isOpen && (
      <div
        className="animate-appear fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        onClick={handleOverlayClick}
      >
        <div
          className="bg-main text-code-xs relative w-full max-w-full p-4 text-white shadow-xl md:max-w-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center gap-6 border border-white/50 p-10">{children}</div>
        </div>
      </div>
    ),
    portalRoot
  );
};
