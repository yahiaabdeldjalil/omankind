import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Home() {
    const { t, language } = useLanguage();
    return (
        <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 `}
        dir='rtl'
        >

            {/* Header */}
            <header className="space-y-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16 px-6 text-center shadow-lg">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide">
                        {t('title')}
                    </h1>
                    <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>
                <LanguageSwitcher />
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">

                {/* Welcome Section */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-emerald-100">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
                        {t('welcome')}
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
                        {t('welcomeText')}
                    </p>
                </section>

                {/* The Call of Islam Section */}
                <section className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl shadow-lg p-8 md:p-12 border border-teal-200">
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-8 text-center">
                        {t('callOfIslam')}
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
                            {t('callText')}
                        </p>

                        <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border-l-4 border-emerald-500 max-w-3xl mx-auto">
                            <p className="text-lg md:text-xl text-slate-800 font-medium italic leading-relaxed text-center">
                                {t('ayah')}
                            </p>
                            <p className="text-sm text-emerald-600 font-semibold mt-4 text-center">
                                {t('ayahLocation')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Explore the Message Section */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                        {t('exploreMessage')}
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                        {t('exploreText')}
                    </p>

                    <Link to="/begin" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        {t('beginYourJourney')}
                    </Link>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-800 text-slate-300 py-8 px-6 text-center mt-16">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg">
                        &copy; 2025 O Mankind. May peace and guidance be upon you.
                    </p>
                </div>
            </footer>
        </div>
    )
}