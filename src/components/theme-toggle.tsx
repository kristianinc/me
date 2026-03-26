"use client";

export function ThemeToggle() {
  const toggleTheme = () => {
    const current =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const nextTheme = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      className="theme-toggle group inline-flex items-center p-0 text-sm font-medium text-[var(--ink)] transition duration-300 hover:-translate-y-0.5"
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb" aria-hidden="true" />
        <span
          className="theme-toggle__icon theme-toggle__icon--sun"
          aria-hidden="true"
        >
          <svg viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="5.5" />
            <path d="M16 3.5V7.5M16 24.5V28.5M28.5 16H24.5M7.5 16H3.5M24.84 7.16L22.01 9.99M9.99 22.01L7.16 24.84M24.84 24.84L22.01 22.01M9.99 9.99L7.16 7.16" />
          </svg>
        </span>
        <span
          className="theme-toggle__icon theme-toggle__icon--moon"
          aria-hidden="true"
        >
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M21.76 4.64C18.44 5.36 15.43 7.41 13.67 10.48C10.62 15.79 12.45 22.56 17.76 25.61C20.88 27.4 24.54 27.47 27.56 26.07C25.89 28.54 23.14 30.37 19.87 31.01C12.56 32.45 5.47 27.69 4.03 20.37C2.58 13.06 7.35 5.97 14.66 4.53C17.26 4.02 19.85 4.29 21.76 4.64Z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
