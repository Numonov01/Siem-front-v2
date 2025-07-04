// ----------------------------------------------------------------------

export type LanguageValue = 'en' | 'fr' | 'vi' | 'cn' | 'ar' | 'uz' | 'ru';

export const fallbackLng = 'uz';
export const languages = ['en', 'fr', 'vi', 'cn', 'ar', 'uz', 'ru'] as LanguageValue[];
export const defaultNS = 'common';
export const cookieName = 'i18next';

// ----------------------------------------------------------------------

export function i18nOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    lng,
    fallbackLng,
    ns,
    defaultNS,
    fallbackNS: defaultNS,
    supportedLngs: languages,
  };
}

// ----------------------------------------------------------------------

export const changeLangMessages: Record<
  LanguageValue,
  { success: string; error: string; loading: string }
> = {
  en: {
    success: 'Language has been changed!',
    error: 'Error changing language!',
    loading: 'Loading...',
  },
  uz: {
    success: "Til o'zgartirildi!",
    error: "Tilni o'zgartirishda xatolik!",
    loading: 'Yuklanmoqda...',
  },
  ru: {
    success: 'Язык был изменен!',
    error: 'Ошибка при смене языка!',
    loading: 'Загрузка...',
  },
  vi: {
    success: 'Ngôn ngữ đã được thay đổi!',
    error: 'Lỗi khi thay đổi ngôn ngữ!',
    loading: 'Đang tải...',
  },
  fr: {
    success: 'La langue a été changée!',
    error: 'Erreur lors du changement de langue!',
    loading: 'Chargement...',
  },
  cn: {
    success: '语言已更改！',
    error: '更改语言时出错！',
    loading: '加载中...',
  },
  ar: {
    success: 'تم تغيير اللغة!',
    error: 'خطأ في تغيير اللغة!',
    loading: 'جارٍ التحميل...',
  },
};
