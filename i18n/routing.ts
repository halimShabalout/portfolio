import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar", "tr", "de", "es"],
  defaultLocale: "en",
  localePrefix: "always",
});