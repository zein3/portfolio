import { useRef } from 'react';

export default function Modal({ isOpen, closeModal, title, children }) {
  const modal = useRef();

  return (
    <>
      <div
      ref={modal}
      className={"fixed flex justify-center items-center inset-0 z-50 bg-darkgray bg-opacity-60 transition-opacity duration-500 " + 
        (isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}
      onClick={(e) => {
        // Cek apakah yang diklik overlay-nya atau anaknya.
        if (e.target === modal.current) {
          closeModal();
        }
      }}
      >
        <div className="rounded-md mx-auto max-w-3xl bg-primary-dim w-full">
          {title &&
          <div className="flex items-start justify-between px-4 py-2 border-b border-darkgray">
            <h3 className="text-xl font-semibold text-white">
              { title }
            </h3>
            <button onClick={closeModal} type="button" className="bg-transparent text-gray text-sm p-1.5 inline-flex ml-auto">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          }
          <div className="px-4 py-2">
            { children }
          </div>
        </div>
      </div>
    </>
  )
}