import { createI18n } from "vue-i18n";
import zhLocale from "./zh-cn";
import enLocale from "./en";
import elementEnLocale from "element-plus/lib/locale/lang/en";
import elementZhLocale from "element-plus/lib/locale/lang/zh-cn";

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
  },
  "zh-cn": {
    ...zhLocale,
    ...elementZhLocale,
  },
};

const i18n = createI18n({
  locale: "zh-cn",
  messages: messages,
});

export default i18n;
