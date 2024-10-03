import { uiData } from "../config/ui.config";

// Helper function with better type inference
export function getUiData<
  Locale extends keyof typeof uiData,
  Section extends keyof typeof uiData[Locale],
  Key extends keyof typeof uiData[Locale][Section]
>(locale: Locale, section: Section, key: Key) {
  return uiData[locale][section][key] || "UI text not set";
}