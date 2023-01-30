import { useRef } from 'react';

export default function Modal({ isOpen, closeModal, children }) {
  const modal = useRef();

  return (
    <>
      <div
      ref={modal}
      className={"fixed inset-0 z-50 bg-darkgray bg-opacity-60 transition-opacity duration-500 " + 
        (isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}
      onClick={(e) => {
        // Cek apakah yang diklik overlay-nya atau anaknya.
        if (e.target === modal.current) {
          closeModal();
        }
      }}
      >
        { children }
      </div>
    </>
  )
}