
// helper to display string realtive to locale argument
export const switchLang = (
  locale: string,
  lang1: string,
  lang2: string
): string => {
  let text: string;
  console.log("swtching to " + locale);
  switch (locale) {
    case "lt":
      text = lang1;
      break;
    case "pl":
      text = lang2;
      break;
    default:
      text = lang1;
  }
  return text;
};

// returns the opposite of the current locale
export const invertLocale = (currentLocale: string): string => {
  return currentLocale === "pl" ? "lt" : "pl";
};