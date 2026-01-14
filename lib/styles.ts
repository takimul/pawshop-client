"use client";
import { useTheme } from "@/providers/ThemeProvider";
import clsx from "clsx";

/**
 * Hook to get theme-aware Tailwind classes
 * Only color-related: background, text, border, buttons
 */
export function useColorClasses() {
  const { theme } = useTheme();

  /** -------------------- BACKGROUNDS -------------------- */
  const bgMain = clsx(theme === "light" ? "bg-white" : "bg-gray-900");
  const bgCard = clsx(theme === "light" ? "bg-gray-100" : "bg-gray-800");
  const bgSecondary = clsx(theme === "light" ? "bg-gray-50" : "bg-gray-700");
  const bgTopBar = clsx(theme === "light" ? "bg-gray-200" : "bg-gray-800");
  const bgMiddleBar = clsx(
  theme === "light" ? "bg-[#237803]" : "bg-[#1B5E20]"
);

  /** -------------------- TEXT -------------------- */
  const textMain = clsx(theme === "light" ? "text-black" : "text-white");
  const textSecondary = clsx(theme === "light" ? "text-gray-600" : "text-gray-400");
  const textAccent = clsx(theme === "light" ? "text-green-600" : "text-green-400");
  const textError = clsx(theme === "light" ? "text-red-600" : "text-red-400");
  const textPrice = clsx(theme === "light" ? "text-green-700" : "text-green-300");
  const textHighlight = clsx(theme === "light" ? "text-green-700" : "text-green-300");

  /** -------------------- BORDERS -------------------- */
  const borderMain = clsx(theme === "light" ? "border-gray-200" : "border-gray-700");
  const borderAccent = clsx(theme === "light" ? "border-green-500" : "border-green-400");

  /** -------------------- BUTTONS -------------------- */
  const btnPrimary = clsx(
    theme === "light" ? "bg-green-500 hover:bg-green-600" : "bg-green-600 hover:bg-green-700",
    "text-white px-4 py-2 rounded transition"
  );

  const btnSecondary = clsx(
    theme === "light" ? "bg-gray-200 hover:bg-gray-300" : "bg-gray-700 hover:bg-gray-600",
    theme === "light" ? "text-black" : "text-white",
    "px-4 py-2 rounded transition"
  );

  const btnPage = clsx(
    theme === "light"
      ? "bg-white text-black border border-gray-300 hover:bg-gray-100"
      : "bg-gray-800 text-white border border-gray-600 hover:bg-gray-700",
    "px-3 py-1 rounded-md transition"
  );

  /** -------------------- RETURN OBJECT -------------------- */
  return {
    bgMain,
    bgCard,
    bgSecondary,
    textMain,
    textSecondary,
    textAccent,
    textError,
    borderMain,
    borderAccent,
    btnPrimary,
    btnSecondary,
    textPrice,
    btnPage,
    bgTopBar,
    textHighlight,
    bgMiddleBar,
  };
}