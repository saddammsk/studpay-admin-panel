"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSupportStore } from "@/app/store/zustand/useSupportStore";

const ChatBox = () => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    messages,
    inputValue,
    isTyping,
    isLive,
    pendingAttachment,
    setInputValue,
    sendMessage,
    attachFile,
    removeAttachment,
  } = useSupportStore();

  const hasInput = inputValue.trim().length > 0 || pendingAttachment !== null;

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    requestAnimationFrame(() => {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    });
  }, [messages, isTyping]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    attachFile(file);
    e.target.value = "";
  };

  return (
    <div className="mb-4 h-105 border border-solid border-gray-3600 bg-white rounded-lg shadow-64xl flex flex-col min-h-0 overflow-hidden">
      <div className="flex items-center justify-between border-b border-solid border-gray-3600 py-3 px-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative bg-blue1400/10 rounded-full w-9 h-9 flex items-center justify-center text-blue1400 font-normal text-[13.6px] leading-6">
            MD
            {isLive && (
              <span className="absolute bottom-0 right-0 flex items-center justify-center w-2.5 h-2.5 rounded-full border-2 border-solid border-white bg-green-1500" />
            )}
          </div>
          <div className="flex-1 w-full">
            <div className="flex items-center gap-2">
              <h4 className="text-blue-1300 font-bold text-[13.5px] leading-5">
                Marie Dupont
              </h4>
              {isLive && (
                <div className="text-green-1500 font-normal text-[9.5px] leading-4 bg-green-1500/10 rounded-full h-5 px-1.5 inline-flex items-center gap-1">
                  <span className="bg-green-1500 rounded-full flex items-center justify-center w-1.5 h-1.5" />
                  Live
                </div>
              )}
            </div>
            <p className="text-gray-1900 text-[10.3px] leading-4 font-normal flex items-center gap-2">
              <Image
                src="/icons/world-icon.svg"
                width={12}
                height={12}
                alt=""
              />
              French
            </p>
          </div>
        </div>
        <ul className="flex items-center gap-0.5">
          {[
            "/icons/phone-dark.svg",
            "/icons/video-icon.svg",
            "/icons/expend-screen.svg",
          ].map((icon) => (
            <li key={icon}>
              <button className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-md hover:bg-gray-1600 transition-all duration-300">
                <Image
                  src={`..${icon}`}
                  width={16}
                  height={16}
                  alt=""
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div ref={messagesContainerRef} className="p-4 flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
        {messages.map((msg) =>
          msg.sender === "user" ? (
            <div key={msg.id} className="flex items-start gap-2 mb-3">
              <div className="relative bg-blue1400/10 rounded-full w-7 h-7 flex items-center justify-center text-blue1400 font-normal text-[9.7px] leading-4 shrink-0">
                MD
              </div>
              <div className="flex-1 w-full">
                <div className="inline-flex items-center bg-gray1700 pl-3.5 pr-6 py-2 rounded-t-2xl rounded-bl-md rounded-br-2xl">
                  <p className="text-blue-1300 text-[13px] font-normal leading-5.5 max-w-98.5 w-full whitespace-pre-wrap">
                    {msg.text}
                  </p>
                </div>
                <p className="text-gray-1900 text-[9.5px] font-normal leading-4 p-1 flex items-center gap-1">
                  {msg.time}
                  {msg.status === "read" && (
                    <Image
                      src="/icons/double-check.svg"
                      width={12}
                      height={12}
                      alt=""
                      className="text-blue1400"
                    />
                  )}
                  {msg.status === "delivered" && (
                    <Image
                      src="/icons/double-check.svg"
                      width={12}
                      height={12}
                      alt=""
                      className="opacity-40"
                    />
                  )}
                  {msg.status === "sent" && (
                    <Image
                      src="/icons/double-check.svg"
                      width={12}
                      height={12}
                      alt=""
                      className="opacity-20"
                    />
                  )}
                </p>
              </div>
            </div>
          ) : (
            <div key={msg.id} className="w-full text-right mt-3">
              <div className="inline-flex text-left items-center bg-blue1400 pl-3.5 pr-6 py-2 rounded-t-2xl rounded-bl-2xl rounded-br-md">
                <p className="text-white text-[13px] font-normal leading-5.5 max-w-98.5 w-full whitespace-pre-wrap">
                  {msg.text}
                </p>
              </div>
              <p className="text-gray-1900 text-[9.5px] font-normal leading-4 p-1 flex items-center gap-1 justify-end">
                <Image
                  src="/icons/double-check.svg"
                  width={12}
                  height={12}
                  alt=""
                />
                {msg.time}
              </p>
            </div>
          )
        )}

        {isTyping && (
          <div className="w-full text-right mt-3">
            <div className="inline-flex text-left items-center bg-blue1400/10 pl-3.5 pr-6 py-2 rounded-t-2xl rounded-bl-2xl rounded-br-md">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-blue1400 rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 bg-blue1400 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 bg-blue1400 rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
            <p className="text-gray-1900 text-[9.5px] font-normal leading-4 p-1 text-right">
              Agent is typing...
            </p>
          </div>
        )}
      </div>

      {pendingAttachment && (
        <div className="mx-3 mb-1 flex items-center gap-2 bg-gray1700/50 rounded-md px-3 py-2">
          <Image
            src="/icons/attachment-icon.svg"
            width={14}
            height={14}
            alt=""
          />
          <span className="text-blue-1300 text-[12px] font-medium truncate flex-1">
            {pendingAttachment.name}
          </span>
          <span className="text-gray-1900 text-[10px]">
            {pendingAttachment.size}
          </span>
          <button
            onClick={removeAttachment}
            className="cursor-pointer flex items-center justify-center w-5 h-5 hover:bg-gray-1600 rounded transition-all duration-200"
          >
            <Image
              src="/images/cross-gray.svg"
              width={10}
              height={10}
              alt=""
            />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2 border-t border-solid border-gray-3600 p-3 shrink-0">
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-Orange57 cursor-pointer transition-all duration-300"
        >
          <Image
            src="/icons/attachment-icon.svg"
            width={16}
            height={16}
            alt=""
          />
        </button>
        <div className="relative flex-1 w-full">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="text-gray-1900 w-full placeholder:text-gray-1900 text-[13.2px] font-normal bg-gray1700/50 rounded-md px-3 pr-10 h-10 outline-0"
            placeholder="Type a message..."
          />
          <button className="group absolute top-1/2 -translate-y-1/2 right-1 flex items-center justify-center w-7 h-7 hover:bg-Orange57 rounded-md cursor-pointer transition-all duration-300">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:stroke-azureblue13"
                d="M7.99967 14.6673C11.6816 14.6673 14.6663 11.6825 14.6663 8.00065C14.6663 4.31875 11.6816 1.33398 7.99967 1.33398C4.31778 1.33398 1.33301 4.31875 1.33301 8.00065C1.33301 11.6825 4.31778 14.6673 7.99967 14.6673Z"
                stroke="#65758B"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="group-hover:stroke-azureblue13"
                d="M5.33301 9.33398C5.33301 9.33398 6.33301 10.6673 7.99967 10.6673C9.66634 10.6673 10.6663 9.33398 10.6663 9.33398"
                stroke="#65758B"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="group-hover:stroke-azureblue13"
                d="M6 6H6.00667"
                stroke="#65758B"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="group-hover:stroke-azureblue13"
                d="M10 6H10.0067"
                stroke="#65758B"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={sendMessage}
          disabled={!hasInput}
          className={`flex items-center justify-center w-8 h-8 bg-blue1400 rounded-md cursor-pointer transition-all duration-300 ${
            hasInput
              ? "hover:bg-blue1400/90 opacity-100"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <Image
            src="/icons/send-icon.svg"
            width={16}
            height={16}
            alt=""
            className="brightness-10000"
          />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;