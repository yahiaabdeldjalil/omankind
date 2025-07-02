import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Begin() {
    const { t, language } = useLanguage();

    return (
        <>
            <div
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
                            <p>{t('islamIntro3')}</p>
                        </div>
                    </section>

                    {/* Arkanul islam */}
                    <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl shadow-lg p-8 md:p-12 border border-emerald-200">
                        <h2 className="text-3xl font-bold text-teal-800 mb-1 text-center">
                            {t('fivePillars')}
                        </h2>
                        <h2 className="text-xl italic font-light text-teal-800 mb-2 text-center">
                            {t('sfivePillars')}
                        </h2>
                        <div className="grid gap-6">
                            <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">1. {t('shahada')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('shahadaText')}
                                </p>
                            </div>

                            <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">2. {t('salah')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('salahText')}
                                </p>
                            </div>
                            <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">3. {t('zakat')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('zakatText')}
                                </p>
                            </div>

                            <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">4. {t('sawm')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('sawmText')}
                                </p>
                            </div>

                            <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">5. {t('hajj')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('hajjText')}
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* Arkanul iman */}
                    <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl shadow-lg p-8 md:p-12 border border-emerald-200">
                        <h2 className="text-3xl font-bold text-teal-800 mb-1 text-center">
                            {t('sixPillars')}
                        </h2>
                        <h2 className="text-xl italic font-light text-teal-800 mb-2 text-center">
                            {t('sSixPillars')}
                        </h2>
                        <div className="grid gap-6">
                            <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">1. {t('beliefAllah')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('beliefAllahText')}
                                </p>
                            </div>

                            <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">2. {t('beliefAngels')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('beliefAngelsText')}
                                </p>
                            </div>
                            <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">3. {t('beliefDivineBooks')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('beliefDivineBooksText')}
                                </p>
                            </div>

                            <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">4. {t('beliefMessengers')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('beliefMessengersText')}
                                </p>
                            </div>

                            <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">5. {t('beliefLastday')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('beliefLastDayText')}
                                </p>
                            </div>
                            <div className="hover:scale-105 transition ease-in-out bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">5. {t('beliefPredestination')}</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {t('beliefPredestinationText')}
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* Explore the Message Section */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                        {t('salvation')}
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                        {t('salvationText')}
                    </p>

                    <Link to="/more" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        {t('learnMore')}
                    </Link>
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