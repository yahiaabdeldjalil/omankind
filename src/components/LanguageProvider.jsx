import { useState, createContext, useContext } from 'react';

// Language Context
const LanguageContext = createContext();

// Language Provider Component
export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      // Navigation
      backToHome: "← Back to Home",
      beginYourJourney: "Begin Your Journey",

      // Header
      title: "Ô Mankind",
      subtitle: "A message of truth, peace, and purpose for every soul.",
      journeyTitle: "Your Journey to Understanding",
      journeySubtitle: "Take the first step towards discovering the beauty and wisdom of Islam",

      // Sections
      welcome: "Welcome",
      welcomeText: "\"O Mankind\" — these words echo throughout the Qur'an, calling every heart to <<reflect>>, understand, and find peace. This platform is an invitation to explore the timeless message of Islam, a faith built on compassion, justice, and clarity.",

      callOfIslam: "The Call of Islam",
      callText: "Islam is not a new religion, Islam has always been the only message sent by the One Creator. It affirms the message of Noah, Abraham, Moses, Jesus, and ends with Muhammad — peace be upon them all.",
      ayah: "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you. Indeed, Allah is Knowing and Acquainted.",
      ayahLocation: "[Hujurat: 13]",

      exploreMessage: "Explore the Message",
      exploreText: "Whether you're seeking meaning, peace, or clarity — Islam has answers rooted in divine wisdom. Start your journey, learn at your pace, and ask questions without fear or judgment.",

      // Begin page
      whatIsIslam: "What is Islam?",
      islamIntro1: "Islam is the submission to Allah through monotheism, obedience to Him, and disavowal of polytheism and its people. — reflecting the tranquility that comes from aligning one's life with divine guidance.",
      islamIntro2: "At its core, Islam teaches that there is no god but Allah, who is the Creator and Sustainer of all that exists. Allah sent prophets throughout history to guide humanity, and that Muhammad (peace be upon him) was the final messenger.",
      islamIntro3: "Through Quran, Allah tells to think deeply before truly knowing that submission is the very right choice one can make in life.",

      fivePillars: "The Five Pillars of Islam (ordered)",
      sfivePillars: "Every Muslim knows and practices",

      shahada: "Shahada (Declaration of Faith)",
      shahadaText: "\"There is no god but Allah, and Muhammad is His messenger.\" A declaration from one's heart is the foundation of Islamic belief.",
      salah: "Salah (Prayer)",
      salahText: "Muslims pray five times daily, creating a constant connection with Allah and moments of peace throughout the day.",

      zakat: "Zakat (Almsgiving)",
      zakatText: "Giving to those in need purifies wealth and creates a caring community where everyone is supported.",

      sawm: "Sawm (Fasting)",
      sawmText: "During the month of Ramadan, Muslims fast from dawn to sunset, developing self-discipline and empathy for those less fortunate.",

      hajj: "Hajj (Pilgrimage)",
      hajjText: "Once in their lives, if they are able, Muslims make a pilgrimage to Mecca, joining millions of others in a powerful demonstration of unity and devotion.",

      sixPillars: "The Six Pillars of Belief (ordered)",
      sSixPillars: "Every Muslim believes in heart",

      beliefAllah: "Belief in Allah",
      beliefAllahText: "Belief in the existence of God Almighty, that He is One without partner, and that He is the Creator of all things.",
      beliefAngels: "Belief in Angels",
      beliefAngelsText: "Belief in the existence of angels, luminous creatures who do not disobey God in what He commands them and do as they are commanded.",
      beliefDivineBooks: "Belief in the Divine Books",
      beliefDivineBooksText: "Belief that God revealed books to the prophets to guide humanity, such as the Holy Quran, the Torah, the Gospel, and the Psalms",
      beliefMessengers: "Belief in the Messengers",
      beliefMessengersText: "Belief that God sent messengers and prophets to mankind to guide them, the last of whom was Muhammad, peace and blessings be upon him.",

      beliefLastday: "Belief in the Last Days",
      beliefLastDayText: "Belief in the Day of Judgment, the day on which God will resurrect mankind for judgment and recompense.",

      beliefPredestination: "Belief in Predestination",
      beliefPredestinationText: "Belief that God has predestined everything, both good and evil, and that His eternal knowledge is His.",

      salvation: "Salvation",
      salvationText: "No other than Allah The Creator can say what is best to prevent harm, risk and loss in life.",
      learnMore: "Learn More",
      // More
      more_1: "\"Do they not then earnestly seek to understand the Quran, or are their hearts locked up by them?\" [Muhammad: 24]",
      more_2: "The only religion that Allah has set for the worlds, and revealed its teachings as revelation to the Messenger of Allah, may Allah bless him and grant him peace, and preserved them in the Holy Qur’an, and explained them in the Prophetic Sunnah.",
      more_miracles_title: "Miracles",
      more_miracles_subtitle: "It's just amazing!",
      more_miracles_first_title: "Rhetorical miracle",
      more_miracles_first_text: "Thus, in his unique rhetorical text, the Arabs were unable to produce anything like it, even in their challenge to the Qur’an, they were unable to produce anything like it.",
      more_miracles_second_title: "Scientific miracle",
      more_miracles_second_text: "It refers to scientific facts mentioned in the Qur’an that were proven by modern science centuries later, such as reference to the creation of the universe, the stages of fetal development, and others.",
      more_miracles_third_title: "Unseen miracles",
      more_miracles_third_text: "Relates to news of the unseen, such as predictions of Muslim victories, future events, and others.",
      more_miracles_fourth_title: "Legislative miracle",
      more_miracles_fourth_text: "This is evident in the rulings and legislation contained in the Qur'an, which are compatible with human nature and are suitable for all times and places.",
      more_miracles_fifth_title: "Constant miracle",
      more_miracles_fifth_text: "Quran has been unchanged since its first revelation to the Prophet.\n\"Indeed, it is We who sent down the message [i.e., the Qur’ān], and indeed, We will be its guardian.\" [Al-Hijr: 9]",
      // more qna
      more_miracles_qna_title: "QnA",
      more_miracles_qna_subtitle: "To help briefly reformulate things",
      more_miracles_qna_first_title: "What is  the Qur'an?",
      more_miracles_qna_first_text: "A brief and powerful explanation of what the Qur’an is:The literal word of God revealed to Prophet Muhammad ﷺ.A guide for all of humanity — not just Muslims.A book of purpose, law, wisdom, ethics, and spiritual healing.",
      more_miracles_qna_second_title: "Why Do Muslims Follow the Prophet Muhammad ﷺ?",
      more_miracles_qna_second_text: "He did not author the Qur’an.He lived the Qur’an — “his character was the Qur’an.”He is the final messenger in a long line of prophets (Jesus, Moses, Abraham, etc.).",
      more_miracles_qna_third_title: "How the Qur’an Changed the World",
      more_miracles_qna_third_text: "The transformation of Arabia in 23 years:From tribal warfare to unified civilization.From oppression of women to their dignity and rights.",
      more_miracles_qna_fourth_title: "Is Islam a religion of violence?",
      more_miracles_qna_fourth_text: "No, it's a peace for all humanity.",
      more_miracles_qna_fifth_title: "Does Islam oppress women?",
      more_miracles_qna_fifth_text: "No, Islam dignifies woman",
      more_miracles_qna_sixth_title: "Do Muslims worship Muhammad?",
      more_miracles_qna_sixth_text: "No, we follow him for the correct way of how to worship Allah, and also for him to explain things and details",

      // Footer
      copyright: "© 2025 O Mankind. May peace and guidance be upon you.",

      // Language
      language: "Language",
      english: "English",
      arabic: "العربية",
      french: "Français"
    },

    ar: {
      // Navigation
      backToHome: "← العودة للرئيسية",
      beginYourJourney: "ابدأ رحلتك",

      // Header
      title: "يَا أَيُهَا النَّاسُ",
      subtitle: "رسالة حق وسلام وهدف لكل نفس",
      journeyTitle: "رحلتك نحو الفهم",
      journeySubtitle: "اتخذ الخطوة الأولى نحو اكتشاف جمال وحكمة الإسلام",

      // Sections
      welcome: "السلام عليكم ورحمة الله",
      welcomeText: "\"يا أيها الناس\" — هذه الكلمات تتردد في القرآن الكريم، تدعو كل قلب للتأمل والفهم والسكينة. هذه المنصة دعوة لاستكشاف رسالة الإسلام الخالدة، دين مبني على الرحمة والعدل والوضوح.",

      callOfIslam: "دعوة الإسلام",
      callText: "الإسلام ليس ديناً جديداً، بل الرسالة الأخيرة في سلسلة الهداية المرسلة من الخالق الواحد. إنه يؤكد رسالة نوح وإبراهيم وموسى وعيسى، وينتهي بمحمد — عليهم جميعاً السلام.",
      ayah: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ ۚ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ",
      ayahLocation: "[الحُجُرَات: 13]",
      exploreMessage: "استكشف الرسالة",
      exploreText: "سواء كنت تبحث عن المعنى أو السلام أو الوضوح — الإسلام لديه إجابات متجذرة في الحكمة الإلهية. ابدأ رحلتك، تعلم بوتيرتك الخاصة، واسأل أسئلة بلا خوف أو حكم.",

      // Begin page
      whatIsIslam: "ما هو الإسلام؟",
      islamIntro1: "الإسلام هو أسلوب حياة يجلب السلام والهدف والاتصال بالخالق. كلمة \"الإسلام\" نفسها تعني \"الخضوع لله\" و\"السلام\" — مما يعكس الطمأنينة التي تأتي من مواءمة حياة المرء مع الهداية الإلهية.",
      islamIntro2: "في جوهره، يعلم الإسلام أن هناك إلهاً واحداً (الله بالعربية)، وهو خالق ورازق كل ما هو موجود. يؤمن المسلمون أن الله أرسل أنبياء عبر التاريخ لهداية البشرية، وأن محمداً (صلى الله عليه وسلم) كان الرسول الأخير.",
      islamIntro3: "يدعونا الله عزوجل من خلال القرآن الكريم الى التفكر عميقا قبل التأكد أن الإسلام هو الخيار الصحيح.",

      fivePillars: "أركان الإسلام الخمسة",
      sfivePillars: "يعرفها كل مسلم",
      shahada: "الشهادة",
      shahadaText: "\"لا إله إلا الله، محمد رسول الله.\" هذا الإعلان البسيط هو أساس الإيمان الإسلامي.",
      salah: "الصلاة",
      salahText: "يصلي المسلمون خمس مرات يومياً، مما يخلق اتصالاً مستمراً مع الله ولحظات من السلام طوال اليوم.",
      zakat: "الزكاة",
      zakatText: "إن العطاء لمن يحتاج إليه ينقي الثروة ويخلق مجتمعًا متعاونًا حيث يتم دعم الجميع.",
      sawm: "صوم رمضان",
      sawmText: "خلال شهر رمضان، يصوم المسلمون من الفجر إلى غروب الشمس، مما يؤدي إلى تنمية الانضباط الذاتي والتعاطف مع أولئك الأقل حظا.",
      hajj: "حج البيت",
      hajjText: "مرة واحدة في حياتهم، إذا استطاعوا، يقوم المسلمون بالحج إلى مكة المكرمة، منضمين إلى ملايين البشر في عرض قوي للوحدة والإخلاص.",


      sixPillars: "أركان الإيمان (مرتبة)",
      sSixPillars: "كل مسلم يؤمن بها في قلبه",

      beliefAllah: "الإيمان بالله",
      beliefAllahText: "الإيمان بوجود الله عز وجل، وأنه واحد لا شريك له، وأنه خالق كل شيء.",
      beliefAngels: "الإيمان بالملائكة",
      beliefAngelsText: "الإيمان بوجود الملائكة، وهم مخلوقات نورانية لا يعصون الله ما أمرهم ويفعلون ما يؤمرون.",
      beliefDivineBooks: "الإيمان بالكتب",
      beliefDivineBooksText: "الإيمان بأن الله أنزل كتباً على الأنبياء لهداية البشر، مثل القرآن الكريم، والتوراة، والإنجيل، والزبور.",
      beliefMessengers: "الإيمان بالرسل",
      beliefMessengersText: "الإيمان بأن الله أرسل رسلاً وأنبيإً إلى الناس لهدايتهم، وآخرهم محمد صلى الله عليه وسلم.",

      beliefLastday: "الإيمان باليوم الآخر",
      beliefLastDayText: "الإيمان بيوم القيامة، وهو اليوم الذي يبعث الله فيه الناس للحساب والجزاء.",

      beliefPredestination: "الإيمان بالقضاء والقدر خيره وشره",
      beliefPredestinationText: "الإيمان بأن الله قدر كل شيء، خيره وشره، وعلمه الأزلي. ",
      salvation: "الخلاص",
      salvationText: "لا أحد غير الله الخالق يستطيع أن يقول ما هو الأفضل لمنع الضرر والمخاطرة والخسارة في الحياة.",
      learnMore: "اعرف أكثر",
      // More
      more_1: "\"أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَى قُلُوبٍ أَقْفَالُهَا\" [محمد: 24]",
      more_2: "الدين الوحيد الذي ارتضاه الله للعالمين، وأنزل تعاليمه وحياً على رسول الله صلى الله عليه وسلم، وحفظها في القرآن الكريم، وبينها في السنة النبوية.",
      more_miracles_title: "معجزات",
      more_miracles_subtitle: "الأمر مدهش",
      more_miracles_first_title: "معجزة بلاغية",
      more_miracles_first_text: "وهكذا عجز العرب في نصه البلاغي الفريد عن الإتيان بمثله، حتى في تحديهم للقرآن لم يستطيعوا الإتيان بمثله.",
      more_miracles_second_title: "معجزة علمية",
      more_miracles_second_text: "ويشير إلى الحقائق العلمية التي ذكرها القرآن وأثبتها العلم الحديث بعد قرون، كالإشارة إلى خلق الكون ومراحل نمو الجنين وغيرها.",
      more_miracles_third_title: "معجزة غيبية",
      more_miracles_third_text: "يتعلق بأخبار الغيب، كالتنبؤ بانتصارات المسلمين، والأحداث المستقبلية، وغيرها.",
      more_miracles_fourth_title: "المعجزة التشريعية",
      more_miracles_fourth_text: "ويتجلى ذلك في الأحكام والتشريعات التي تضمنها القرآن الكريم، والتي تتوافق مع طبيعة الإنسان، وتصلح لكل زمان ومكان.",
      more_miracles_fifth_title: "معجزة مستمرة",
      more_miracles_fifth_text: "لقد ظل القرآن الكريم دون تغيير منذ أن نزل على النبي صلى الله عليه وسلم لأول مرة. \"إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ\" [الحجر: 9]",
      // more qna
      more_miracles_qna_title: "سؤال وجواب",
      more_miracles_qna_subtitle: "للمساعدة في إعادة صياغة الأمور بشكل مختصر",
      more_miracles_qna_first_title: "ماهو القرآن؟",
      more_miracles_qna_first_text: "شرح موجز وقوي لما هو القرآن الكريم: كلمة الله الحرفية التي أوحى بها إلى النبي محمد ﷺ. دليل للبشرية جمعاء - وليس فقط للمسلمين. كتاب الغرض والقانون والحكمة والأخلاق والشفاء الروحي.",
      more_miracles_qna_second_title: "لماذا يتبع المسلمون الرسول محمدﷺ?",
      more_miracles_qna_second_text: "لم يكن هو مؤلف القرآن، بل عاش القرآن - \"كانت شخصيته القرآن\". وهو الرسول الأخير في سلسلة طويلة من الأنبياء (عيسى، موسى، إبراهيم، إلخ).",
      more_miracles_qna_third_title: "كيف غير القرآن العالم؟",
      more_miracles_qna_third_text: "التحول في الجزيرة العربية خلال 23 عامًا: من الحرب القبلية إلى الحضارة الموحدة. ومن اضطهاد المرأة إلى كرامتها وحقوقها.",
      more_miracles_qna_fourth_title: "هل الإسلام دين العنف؟",
      more_miracles_qna_fourth_text: "لا، إنه السلام للبشرية جمعاء.",
      more_miracles_qna_fifth_title: "هل الإسلام يضطهد المرأة؟",
      more_miracles_qna_fifth_text: "لا، الإسلام يكرم المرأة",
      more_miracles_qna_sixth_title: "هل يعبد المسلمون محمدا؟",
      more_miracles_qna_sixth_text: "لا، بل نتبعه في الطريقة الصحيحة لكيفية عبادة الله، وأيضاً في بيان الأمور والتفاصيل.",

      // Footer
      copyright: "© 2025 يا أيها الناس. عسى أن يكون عليكم السلام والهداية.",

      // Language
      language: "اللغة",
      english: "English",
      arabic: "العربية",
      french: "Français"
    },

    fr: {
      // Navigation
      backToHome: "← Retour à l'accueil",
      beginYourJourney: "Commencez votre voyage",

      // Header
      title: "Ô Humanité",
      subtitle: "Un message de vérité, de paix et de but pour chaque âme.",
      journeyTitle: "Votre voyage vers la compréhension",
      journeySubtitle: "Faites le premier pas vers la découverte de la beauté et de la sagesse de l'Islam",

      // Sections
      welcome: "Bienvenue",
      welcomeText: "\"Ô Humanité\" — ces mots résonnent dans le Coran, appelant chaque cœur à réfléchir, comprendre et trouver la paix. Cette plateforme est une invitation à explorer le message intemporel de l'Islam, une foi construite sur la compassion, la justice et la clarté.",
      ayah: "Ô hommes ! Nous vous avons créés d’un mâle et d’une femelle, et Nous avons fait de vous des nations et des tribus, pour que vous vous entreconnaissiez. Le plus noble d’entre vous, auprès d’Allah, est le plus pieux. Allah est certes Omniscient et Grand- Connaisseur.",
      ayahLocation: "[Hujurat: 13]",

      callOfIslam: "L'appel de l'Islam",
      callText: "L'Islam n'est pas une nouvelle religion, mais le message final dans une chaîne de guidance envoyée par le Créateur Unique. Il affirme le message de Noé, Abraham, Moïse, Jésus, et se termine avec Muhammad — que la paix soit sur eux tous.",

      exploreMessage: "Explorer le message",
      exploreText: "Que vous cherchiez du sens, de la paix ou de la clarté — l'Islam a des réponses enracinées dans la sagesse divine. Commencez votre voyage, apprenez à votre rythme, et posez des questions sans peur ni jugement.",

      // Begin page
      whatIsIslam: "Qu'est-ce que l'Islam ?",
      islamIntro1: "L'Islam est un mode de vie qui apporte la paix, le but et la connexion au Créateur. Le mot \"Islam\" lui-même signifie \"soumission à Allah\" et \"paix\" — reflétant la tranquillité qui vient de l'alignement de sa vie avec la guidance divine.",
      islamIntro2: "À sa base, l'Islam enseigne qu'il y a un Dieu (Allah en arabe), qui est le Créateur et le Soutien de tout ce qui existe. Les musulmans croient qu'Allah a envoyé des prophètes à travers l'histoire pour guider l'humanité, et que Muhammad (paix soit sur lui) était le dernier messager.",
      islamIntro3: "Allah nous invite à travers le Quran de penser profondément avant de conclure que l'Islam est la meilleure décision de vie.",

      fivePillars: "Les cinq piliers de l'Islam",
      sfivePillars: "Tout musulman le sait",
      shahada: "Shahada (Déclaration de foi)",
      shahadaText: "\"Il n'y a de dieu qu'Allah, et Muhammad est Son messager.\" Cette simple déclaration est le fondement de la croyance islamique.",

      salah: "Salah (Prière)",
      salahText: "Les musulmans prient cinq fois par jour, créant une connexion constante avec Allah et des moments de paix tout au long de la journée.",

      zakat: "Zakat (L'aumône)",
      zakatText: "Donner à ceux qui sont dans le besoin purifie la richesse et crée une communauté bienveillante où chacun est soutenu.",

      sawm: "Sawm (Jeûne)",
      sawmText: "Durant le mois du Ramadan, les musulmans jeûnent de l’aube au coucher du soleil, développant ainsi l’autodiscipline et l’empathie envers les moins fortunés.",

      hajj: "Hajj (Pèlerinage)",
      hajjText: "Une fois dans leur vie, s’ils en ont la possibilité, les musulmans font un pèlerinage à La Mecque, rejoignant ainsi des millions de personnes dans une puissante démonstration d’unité et de dévotion.",


      sixPillars: "Piliers de la foi (par ordre)",
      sSixPillars: "Chaque musulman y croit profondément",

      beliefAllah: "Croyance en Allah",
      beliefAllahText: "Croyance en l'existence d'Allah Tout-Puissant, qu'il est Unique et Sans associé, et qu'il est le Créateur de toute chose.",
      beliefAngels: "Croyance aux anges",
      beliefAngelsText: "Croyance en l'existence des anges, créatures lumineuses qui ne désobéissent pas à Dieu et qui font ce qu'Il leur commande.",
      beliefDivineBooks: "Croyance aux Livres divins :",
      beliefDivineBooksText: "Croyance que Dieu a révélé des Livres aux prophètes pour guider l'humanité, tels que le Saint Coran, la Torah, l'Évangile et les Psaumes.",
      beliefMessengers: "Croyance aux messagers :",
      beliefMessengersText: "Croyance que Dieu a envoyé des messagers et des prophètes à l'humanité pour la guider, le dernier d'entre eux étant Mohammed (paix et bénédictions d'Allah sur lui).",

      beliefLastday: "Croyance au Jour Dernier :",
      beliefLastDayText: "Croyance au Jour du Jugement, le jour où Dieu ressuscitera l'humanité pour le jugement et la rétribution.",

      beliefPredestination: "Croyance en la prédestination :",
      beliefPredestinationText: "Croire que Dieu a tout prédestiné, le bien comme le mal, et qu’il possède la connaissance éternelle.",
      salvation: "Salvation",
      salvationText: "Personne d’autre qu'Allah Le Créateur ne peut dire ce qui est le mieux pour prévenir les dommages, les risques et les pertes dans la vie.",
      learnMore: "Apprendre encore plus",
      // More
      more_1: "« Ne cherchent-ils donc pas sincèrement à comprendre le Coran, ou leurs cœurs sont-ils enfermés par eux ? » [Muhammad : 24]",
      more_2: "La seule religion qu'Allah a établie pour les mondes, et dont il a révélé les enseignements au Messager d'Allah (paix et bénédiction d'Allah sur lui), et les a préservés dans le Saint Coran, et les a expliqués dans la Sunnah prophétique.",
      more_miracles_title: "Miracles",
      more_miracles_subtitle: "c'est juste surprenant!",
      more_miracles_first_title: "Miracle rhétorique",
      more_miracles_first_text: "Ainsi, dans leur texte rhétorique unique, les Arabes n’ont pas été capables de produire quelque chose de semblable, même dans leur défi au Coran, ils n’ont pas été capables de produire quelque chose de semblable.",
      more_miracles_second_title: "Miracle scientifique",
      more_miracles_second_text: "Il fait référence à des faits scientifiques mentionnés dans le Coran qui ont été prouvés par la science moderne des siècles plus tard, comme la référence à la création de l’univers, aux étapes du développement fœtal et à d’autres.",
      more_miracles_third_title: "Miracle de l'imprévu",
      more_miracles_third_text: "Concerne les nouvelles de l'imprévu, telles que les prédictions de victoires musulmanes, d'événements futurs et autres.",
      more_miracles_fourth_title: "Miracle législatif",
      more_miracles_fourth_text: "Cela est évident dans les règles et la législation contenues dans le Coran, qui sont compatibles avec la nature humaine et conviennent à tous les temps et à tous les lieux.",
      more_miracles_fifth_title: "Miracle constant",
      more_miracles_fifth_text: "Le Coran est resté inchangé depuis sa première révélation au Prophète.\n\"C'est Nous qui avons fait descendre le message [c'est-à-dire le Coran], et Nous en sommes les gardiens.\" [Al-Hijr : 9]",
      // more qna
      more_miracles_qna_title: "Question et Réponse",
      more_miracles_qna_subtitle: "Pour aider à reformuler brièvement les choses",
      more_miracles_qna_first_title: "Qu'est-ce que le Coran ?",
      more_miracles_qna_first_text: "Une explication brève et puissante de ce qu’est le Coran : La parole littérale d'Allah révélée au Prophète Muhammad ﷺ. Un guide pour toute l’humanité — pas seulement pour les musulmans. Un livre de but, de loi, de sagesse, d’éthique et de guérison spirituelle.",
      more_miracles_qna_second_title: "Pourquoi les musulmans suivent-ils le prophète Mouhammed ﷺ ?",
      more_miracles_qna_second_text: "Il n’est pas l’auteur du Coran. Il a vécu le Coran — « son caractère était le Coran ». Il est le dernier messager d’une longue lignée de prophètes (Jésus, Moïse, Abraham, etc.).",
      more_miracles_qna_third_title: "Comment le Coran a changé le monde",
      more_miracles_qna_third_text: "La transformation de l’Arabie en 23 ans : de la guerre tribale à la civilisation unifiée. De l’oppression des femmes à leur dignité et à leurs droits.",
      more_miracles_qna_fourth_title: "L’islam est-il une religion de violence ?",
      more_miracles_qna_fourth_text: "Non, c'est une paix pour toute l'humanité.",
      more_miracles_qna_fifth_title: "L’Islam opprime-t-il les femmes ?",
      more_miracles_qna_fifth_text: "Non, l’Islam dignifie la femme",
      more_miracles_qna_sixth_title: "Les musulmans adorent-ils Mouhammed ?",
      more_miracles_qna_sixth_text: "Non, nous le suivons pour la bonne manière d'adorer Allah, et aussi pour qu'il explique les choses et les détails.",

      // Footer
      copyright: "© 2025 Ô Humanité. Que la paix et la guidance soient sur vous.",

      // Language
      language: "Langue",
      english: "English",
      arabic: "العربية",
      french: "Français"
    }
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to use language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
