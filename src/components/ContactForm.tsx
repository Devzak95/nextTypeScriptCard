"use client";

import React, { useEffect, useState } from "react";
import useYupForm from "@/hooks/useYupForm";

interface FormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface emailProp {
  selectedEmail: string;
  closeModal: () => void;
}

const ContactFrom = ({ selectedEmail, closeModal }: emailProp) => {
  const { register, handleSubmit, errors, reset } = useYupForm();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = (data: FormInput) => {
    console.log(data);
    setSuccessMessage("Success! Your message has been sent.");

    // setTimeout(() => {
    //   setSuccessMessage(null);
    //   reset();
    // }, 3000);
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
        reset();
        closeModal();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, closeModal, reset]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-400 grid place-self-center shadow-lg px-4 py-2 rounded"
      >
        <h2 className="text-center font-bold text-2xl ">Contact to: {selectedEmail}</h2>

        <label className="mt-4 mb-1">
          <span className="font-bold">Name</span>
          <input
            className="block w-full rounded-md p-2 "
            type="text"
            // id="name"
            placeholder="Enter your name"
            {...register("name")}
          />
        </label>
        <div className="text-red-700 font-bold text-sm">{errors.name?.message}</div>
        <label className="mt-4 mb-1">
          <span className="font-bold">Email</span>
          <input
            className="block w-full rounded-md p-2 "
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
        </label>
        <div className="text-red-700 font-bold text-sm">{errors.email?.message}</div>
        <label className="mt-4 mb-1">
          <span className="font-bold">Subject</span>
          <input
            className="block w-full rounded-md p-2 "
            type="text"
            placeholder="Enter subject"
            {...register("subject")}
          />
        </label>
        <div className="text-red-700 font-bold text-sm">{errors.subject?.message}</div>
        <label className="mt-4 mb-1">
          <span className="font-bold">Message</span>
          <textarea
            className="block w-full p-2 h-[150px] overflow-y-scroll rounded-md"
            id=""
            placeholder="Enter your message"
            {...register("message")}
          ></textarea>
        </label>
        <div className="text-red-700 font-bold text-sm">{errors.message?.message}</div>
        <div className="flex gap-2 mt-4">
          <button
            className="bg-blue-500 px-4 py-1 rounded-lg font-bold text-white shadow-sm"
            type="submit"
          >
            Send
          </button>
          <button
            className="bg-red-500 px-4 py-1 rounded-lg font-bold text-white shadow-sm"
            type="reset"
          >
            Reset
          </button>
        </div>
        {successMessage && <p className="text-green-900">{successMessage}</p>}
      </form>
    </div>
  );
};

export default ContactFrom;
