export const metaByLang = {
  lv: {
    htmlLang: 'lv',
    title: 'Smile Studio Rīga — Estētiskā zobārstniecība Rīgā',
    description:
      'Smile Studio Rīga — premium estētiskā zobārstniecība Rīgā. Zobu balināšana, implanti, venīri un bezmaksas konsultācija.',
    ogLocale: 'lv_LV',
  },
  en: {
    htmlLang: 'en',
    title: 'Smile Studio Riga — Aesthetic Dentistry in Riga',
    description:
      'Smile Studio Riga offers premium aesthetic dentistry in Riga, including teeth whitening, implants, veneers, and free consultations.',
    ogLocale: 'en_US',
  },
}

export function copyFor(copy, lang) {
  return copy[lang] ?? copy.lv
}
