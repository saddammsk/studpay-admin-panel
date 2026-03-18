"use client";

import { useState, useEffect, useRef, KeyboardEvent, ChangeEvent, FC } from "react";

interface SearchSettingsProps {
  className?: string;
  onSearch?: (query: string) => void;
}

const SearchSettings: FC<SearchSettingsProps> = ({ className = "", onSearch }) => {
  const [query, setQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        inputRef.current?.blur();
        setQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setQuery("");
      inputRef.current?.blur();
      onSearch?.("");
    }
  };

  return (
    <div
      className={`flex items-center gap-2.5 h-9 px-3 rounded-xl border border-gray-200 bg-white shadow-sm hover:border-gray-300 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-150 ${className}`}
    >
      <svg
        className="w-4 h-4 text-gray-400 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search settings..."
        className="flex-1 min-w-0 text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
      />

      {query ? (
        <button
          type="button"
          onClick={() => { setQuery(""); onSearch?.(""); inputRef.current?.focus(); }}
          className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        <kbd className="shrink-0 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md border border-gray-200 bg-gray-50 text-[10px] font-medium text-gray-400 leading-none select-none">
          <span className="text-[11px]">⌘</span>K
        </kbd>
      )}
    </div>
  );
};

export default SearchSettings;