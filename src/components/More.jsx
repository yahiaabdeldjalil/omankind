import Contact from "./Contact";
import { useLanguage } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function More() {
    const { t, language } = useLanguage();

    return (
        <>            <div
            dir={`${language === 'ar' ? 'rtl' : 'ltr'}`}
            className={`min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50`}>
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b border-emerald-200 py-4 px-6">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <a
                        href="/"
                        className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-2 transition-colors"
                    >
                        {t('backToHome')}
                    </a>
                    <div className="flex items-center gap-4">
                        <h1 className="text-2xl font-bold text-slate-800">{t('beginYourJourney')}</h1>
                        <LanguageSwitcher />
                    </div>
                </div>
            </nav>

            {/* Header */}
            <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-xl md:text-5xl font-bold mb-4">
                        {t('more_1')}
                    </h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">

                {/* Introduction */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-indigo-100">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
                        {t('whatIsIslam')}
                    </h2>
                    <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>{t('more_2')}</p>
                    </div>
                </section>

                {/* Arkanul islam */}
                <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl shadow-lg p-8 md:p-12 border border-emerald-200">
                    <h2 className="text-3xl font-bold text-teal-800 mb-1 text-center">
                        {t('more_miracles_title')}
                    </h2>
                    <h2 className="text-xl italic font-light text-teal-800 mb-2 text-center">
                        {t('more_miracles_subtitle')}
                    </h2>
                    <div className="grid gap-6">
                        <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-500">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">1. {t('more_miracles_first_title')}</h3>
                            <p className="text-slate-700 leading-relaxed">
                                {t('more_miracles_first_text')}
                            </p>
                        </div>

                        <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-500">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">2. {t('more_miracles_second_title')}</h3>
                            <p className="text-slate-700 leading-relaxed">
                                {t('more_miracles_second_text')}
                            </p>
                        </div>
                        <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">3. {t('more_miracles_third_title')}</h3>
                            <p className="text-slate-700 leading-relaxed">
                                {t('more_miracles_third_text')}
                            </p>
                        </div>

                        <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-500">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">4. {t('more_miracles_fourth_title')}</h3>
                            <p className="text-slate-700 leading-relaxed">
                                {t('more_miracles_fourth_text')}
                            </p>
                        </div>

                        <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">5. {t('more_miracles_fifth_title')}</h3>
                            <p className="text-slate-700 leading-relaxed">
                                {t('more_miracles_fifth_text')}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Arkanul iman */}
                <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl shadow-lg p-8 md:p-12 border border-emerald-200">
                    <h2 className="text-3xl font-bold text-teal-800 mb-1 text-center">
                        {t('more_miracles_qna_title')}
                    </h2>
                    <h2 className="text-xl italic font-light text-teal-800 mb-2 text-center">
                        {t('more_miracles_qna_subtitle')}
                    </h2>
                    <div className="grid gap-6">
                        <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-500">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">1. {t('more_miracles_qna_first_title')}</h3>
                            <p className="text-slate-700 leading-relaxed">
                                {t('more_miracles_qna_first_text')}
                            </p>
                        </div>

                        <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-500">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">2. {t('more_miracles_qna_second_title')}</h3>
                            <p className="text-slate-700 leading-relaxed">
                                {t('more_miracles_qna_second_text')}
                            </p>
                        </div>
                        <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">3. {t('more_miracles_qna_third_title')}</h3>
                            <p className="text-slate-700 leading-relaxed">
                                {t('more_miracles_qna_third_text')}
                            </p>
                        </div>

                        <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-500">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">4. {t('more_miracles_qna_fourth_title')}</h3>
                            <p className="text-slate-700 leading-relaxed">
                                {t('more_miracles_qna_fourth_text')}
                            </p>
                        </div>

                        <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">5. {t('more_miracles_qna_fifth_title')}</h3>
                            <p className="text-slate-700 leading-relaxed">
                                {t('more_miracles_qna_fifth_text')}
                            </p>
                        </div>
                        <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">5. {t('more_miracles_qna_sixth_title')}</h3>
                            <p className="text-slate-700 leading-relaxed">
                                {t('more_miracles_qna_sixth_text')}
                            </p>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="bg-slate-800 text-slate-300 py-8 px-6 text-center mt-16">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg">{t('copyright')}</p>
                </div>
            </footer>
        </div>
        </>
    );
}