"use client";

import React, { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
  badge?: string;
}

interface CustomSelectProps {
  options: (string | Option)[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  theme?: "light" | "dark" | "terracotta";
  className?: string;
}

export function CustomSelect({
  options,
  value,
  onChange,
  label,
  theme = "terracotta",
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const normalizedOptions: Option[] = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  const selectedOption =
    normalizedOptions.find((opt) => opt.value === value) || normalizedOptions[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (!isOpen) return;
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`custom-select-container ${theme} ${className} ${
        isOpen ? "is-open" : ""
      }`}
    >
      {label && <span className="custom-select-label">{label}</span>}
      <button
        type="button"
        className="custom-select-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="custom-select-value">{selectedOption?.label}</span>
        <span className={`custom-select-chevron ${isOpen ? "open" : ""}`}>
          ▾
        </span>
      </button>

      {isOpen && (
        <ul className="custom-select-menu" role="listbox">
          {normalizedOptions.map((option) => {
            const isSelected = option.value === value;
            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isSelected}
                className={`custom-select-option ${isSelected ? "selected" : ""}`}
                onClick={() => handleSelect(option.value)}
              >
                <div className="option-content">
                  <span className="option-label">{option.label}</span>
                  {option.badge && (
                    <span className="option-badge">{option.badge}</span>
                  )}
                </div>
                {isSelected && <span className="option-check">✓</span>}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
