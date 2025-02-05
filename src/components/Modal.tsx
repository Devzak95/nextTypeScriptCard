import React from "react";

import { createPortal } from "react-dom";
import ContactFrom from "./ContactForm";

//når man sendt props skal man altid lave interface
interface PageProps {
  openModal: boolean;
  onClose: () => void;
  email: string;
}

const Modal = ({ openModal, onClose, email }: PageProps) => {
  if (!openModal) return null;
  return (
    <>
      {createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black-rgba">
          <div className="bg-white p-2 rounded shadow-lg">
            <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded font-bold">
              Close Modal
            </button>
            <ContactFrom selectedEmail={email} closeModal={onClose} />
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;
