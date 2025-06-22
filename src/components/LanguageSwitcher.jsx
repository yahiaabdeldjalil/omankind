import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative inline-block text-left">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
      >
        <option value="en">{t('english')}</option>
        <option value="ar">{t('arabic')}</option>
        <option value="fr">{t('french')}</option>
      </select>
    </div>
  );
}