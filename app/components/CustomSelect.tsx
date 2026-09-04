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
  id?: string;
  theme?: "light" | "dark" | "terracotta";
  className?: string;
}

export function CustomSelect({
  options,
  value,
  onChange,
  label,
  id,
  theme = "terracotta",
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  const normalizedOptions: Option[] = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  const selectedIndex = normalizedOptions.findIndex((opt) => opt.value === value);
  const selectedOption =
    selectedIndex !== -1 ? normalizedOptions[selectedIndex] : normalizedOptions[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex(selectedIndex !== -1 ? selectedIndex : 0);
      }
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) =>
        prev < normalizedOptions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) =>
        prev > 0 ? prev - 1 : normalizedOptions.length - 1
      );
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < normalizedOptions.length) {
        onChange(normalizedOptions[focusedIndex].value);
        setIsOpen(false);
      }
    } else if (e.key === "Tab") {
      setIsOpen(false);
    }
  };

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
      onKeyDown={handleKeyDown}
    >
      {label && <span className="custom-select-label">{label}</span>}
      <button
        type="button"
        id={id}
        className="custom-select-trigger"
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            setFocusedIndex(selectedIndex !== -1 ? selectedIndex : 0);
          }
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="custom-select-value">{selectedOption?.label}</span>
        <span className={`custom-select-chevron ${isOpen ? "open" : ""}`}>
          ▾
        </span>
      </button>

      {isOpen && (
        <ul
          ref={listboxRef}
          className="custom-select-menu"
          role="listbox"
          tabIndex={-1}
        >
          {normalizedOptions.map((option, index) => {
            const isSelected = option.value === value;
            const isFocused = focusedIndex === index;
            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isSelected}
                className={`custom-select-option ${isSelected ? "selected" : ""} ${
                  isFocused ? "focused" : ""
                }`}
                onClick={() => handleSelect(option.value)}
                onMouseEnter={() => setFocusedIndex(index)}
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

