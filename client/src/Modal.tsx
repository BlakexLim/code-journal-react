import { ReactNode, useEffect, useRef } from 'react';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  function keydownHandler(event: React.KeyboardEvent<HTMLDialogElement>) {
    event.key === 'Escape' && onClose();
  }

  useEffect(() => {
    isOpen ? modal.current?.showModal() : modal.current?.close();
  }, [isOpen]);

  return (
    <dialog
      className="modal modal-container"
      onKeyDown={keydownHandler}
      ref={modal}
      onClose={onClose}>
      {children}
    </dialog>
  );
}
