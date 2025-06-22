import { useLanguage } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Begin() {
    const { t, language } = useLanguage();

    return (
        <>
            <div 
            dir={`${language === 'ar'?'rtl':'ltr'}`}
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {t('journeyTitle')}
                        </h1>
                        <p className="text-lg md:text-xl font-light opacity-90 leading-relaxed">
                            {t('journeySubtitle')}
                        </p>
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
                            <p>{t('islamIntro1')}</p>
                            <p>{t('islamIntro2')}</p>
                        </div>
                    </section>

                    {/* The Five Pillars */}
                    <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl shadow-lg p-8 md:p-12 border border-emerald-200">
                        <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">
                            {t('fivePillars')}
                        </h2>

                        <div className="grid gap-6">
                            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">1. {t('shahada')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('shahadaText')}
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">2. {t('salah')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('salahText')}
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">3. {t('zakat')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('zakatText')}
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">4. {t('sawm')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('sawmText')}
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">5. {t('hajj')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('hajjText')}
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