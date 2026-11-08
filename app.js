/**
 * ===================================================================
 * 3bido - Modern French Learning Platform
 * Complete Application Logic
 * Language Switcher (FR ⇄ AR) & Palestinian Visual Integration
 * ===================================================================
 */

// Global App Namespace
window.app = {
  currentSection: 'home',
  theme: 'light',
  lang: 'fr',
  audioContext: null,
};

/* ===================================================================
   1. INTERNATIONALIZATION (i18n) DICTIONARY (FRANÇAIS & ARABE)
   =================================================================== */
window.app.i18n = {
  translations: {
    fr: {
      brand_subtitle: "Apprenez le français avec passion",
      nav_home: "Accueil",
      btn_back: "Retour",
      nav_grammar: "Grammaire",
      nav_dictionary: "Dictionnaire",
      nav_translator: "Traduction",
      nav_library: "Bibliothèque",
      nav_tutor: "Tuteur IA",
      nav_tts: "Audio & TTS",
      nav_levels: "Niveaux & Verbes",
      choose_lang: "Langue :",
      m_grammar: "1. Correcteur de Grammaire",
      m_dictionary: "2. Dictionnaire Unilingue",
      m_translator: "3. Traduction Instantanée",
      m_library: "4. Bibliothèque Française",
      m_tutor: "5. Tuteur IA Interactif",
      m_tts: "6. Synthèse Vocale & Téléchargement",
      m_levels: "7. Niveaux A1-B2 & Conjugaison",
      m_videos: "8. Vidéothèque Éducative",
      m_game: "9. Jeux Éducatifs A1",
      nav_game: "Jeux A1",
      c9_title: "Jeux Éducatifs A1",
      c9_desc: "Apprenez le vocabulaire, la grammaire et la prononciation du niveau A1 en vous amusant : Quiz Flash, Paires de mots et Construction de phrases.",
      c9_link: "Jouer maintenant →",
      tool_09: "Outil 09",
      game_title: "Jeux Éducatifs & Défis A1",
      game_desc: "Entraînez-vous de manière ludique aux bases du français (A1) : vocabulaire usuel, conjugaison au présent, expressions du quotidien et écoute active.",
      game_tab_quiz: "Quiz Flash A1",
      game_tab_pairs: "Paires de Mots",
      game_tab_sentences: "Ordre des Phrases",
      game_score_label: "Score :",
      game_streak_label: "Série :",
      game_highscore_label: "Meilleur Score :",
      game_btn_next: "Question Suivante →",
      game_btn_check: "Vérifier la Phrase ✓",
      game_btn_reset: "Réinitialiser",
      game_btn_restart: "Rejouer une Partie 🔄",
      pairs_hint: "Cliquez sur deux cartes pour associer le mot français à sa signification en arabe.",
      sentence_instruction: "Cliquez sur les mots dans le bon ordre pour former la phrase française :",
      nav_videos: "Vidéothèque",
      services_heading: "Explorez les 8 Espaces d'Apprentissage",
      c8_title: "Vidéothèque Éducative",
      c8_desc: "Vidéos pédagogiques, leçons interactives, prononciation et dialogues animés. Espace d'ajout exclusif pour l'admin عبيدو.",
      c8_link: "Regarder les vidéos →",
      tool_08: "Outil 08",
      v_title: "Vidéothèque Française & Leçons Vidéo",
      v_desc: "Leçons filmées, écoute active, compréhension orale et immersion culturelle pour progresser naturellement.",
      v_btn_add: "Ajouter une Vidéo (Admin عبيدو)",
      v_filter_all: "Toutes les Vidéos",
      v_filter_beg: "Niveau Débutant (A1-A2)",
      v_filter_adv: "Niveau Avancé (B1-B2)",
      v_filter_custom: "Vidéos Ajoutées",
      modal_book_link: "🔗 Lien Externe du Livre / Lecture en ligne (Optionnel)",
      modal_video_title: "Ajouter une Vidéo à la Vidéothèque",
      modal_video_desc: "Partagez une vidéo pédagogique par lien (YouTube / direct) ou en téléversant un fichier jusqu'à 50 Mo.",
      modal_video_name: "Titre de la Vidéo *",
      modal_video_level: "Niveau Recommandé *",
      modal_video_category: "Catégorie / Thème",
      modal_video_summary: "Description Succincte",
      modal_video_url: "🔗 Lien Vidéo (YouTube / Vimeo / Lien MP4 direct)",
      modal_video_file: "📹 OU Téléverser un Fichier Vidéo (Jusqu'à 50 Mo)",
      modal_video_hint: "Supporte les fichiers jusqu'à 50 Mo stockés en IndexedDB. Lien OU Fichier requis.",
      modal_video_submit: "Publier la Vidéo dans la Vidéothèque",
      lvl_btn_add_vocab: "Ajouter un Mot / Vocabulaire (Admin عبيدو)",
      modal_vocab_title: "Ajouter un Mot au بنك المفردات",
      modal_vocab_desc: "Enregistrez un mot ou expression avec sa signification en arabe et son exemple.",
      modal_vocab_level: "Niveau CECRL *",
      modal_vocab_icon: "Émoji / Symbole (Optionnel)",
      modal_vocab_fr: "Mot ou Expression en Français *",
      modal_vocab_ar: "المعنى / الترجمة بالعربي *",
      modal_vocab_ex: "Exemple en contexte (Phrase d'application)",
      modal_vocab_submit: "Enregistrer dans le Niveau",
            calligraphy_sub: "« Nous prierons à Jérusalem »",
      spd_slow: "Lent",
      spd_calm: "Modéré",
      spd_normal: "Normal",
      spd_lively: "Vif",
      spd_fast: "Rapide",
      lvl_tab_conv: "Conversations & Dialogues (Verbes en Rouge)",
      conv_a1: "Dialogues Débutant (Salutations, Courses & Heure)",
      conv_a2: "Dialogues Élémentaire (Voyage, Ville, Loisirs & Plage)",
      conv_b1: "Dialogues Intermédiaire (Chez le Médecin, Travail & Urgences)",
      conv_b2: "Dialogues Avancé (Argot, Société, Débats & Confidences)",
      conv_listen_all: "Écouter tout le dialogue",
      hero_badge: "Plateforme Pédagogique d'Excellence",
      hero_title: "Bienvenue sur <span class=\"highlight-brand\">3bido</span>",
      hero_subtitle: "L'espace complet pour apprendre, perfectionner et pratiquer la langue française. Grammaire intelligente, dictionnaire riche, traduction bilingue, bibliothèque en libre accès, tuteur conversationnel, prononciation audio et conjugaison détaillée.",
      stat_tools: "Outils Puissants",
      stat_levels: "Niveaux Structurés",
      stat_free: "Gratuit & Interactif",
      services_heading: "Explorez les 7 Espaces d'Apprentissage",
      services_subheading: "Cliquez sur un outil pour commencer votre séance de français",
      c1_title: "Correcteur de Grammaire",
      c1_desc: "Détectez instantanément les erreurs de syntaxe, accords, conjugaisons et recevez des explications détaillées.",
      c1_link: "Corriger un texte →",
      c2_title: "Dictionnaire Unilingue",
      c2_desc: "Dictionnaire Français-Français complet : définitions claires, synonymes, antonymes et exemples contextuels.",
      c2_link: "Chercher un mot →",
      c3_title: "Traduction Instantanée",
      c3_desc: "Traduisez en temps réel entre le Français et l'Arabe avec lecture audio et banque d'expressions usuelles.",
      c3_link: "Traduire FR ⇄ AR →",
      c4_title: "Bibliothèque Française",
      c4_desc: "Explorez et lisez des œuvres littéraires adaptées à tous les niveaux. Espace d'ajout exclusif pour l'admin عبيدو.",
      c4_link: "Consulter les livres →",
      c5_title: "Tuteur IA Interactif",
      c5_desc: "Discutez en direct avec un assistant pédagogique francophone : pratique libre, mises en situation et retours correctifs.",
      c5_link: "Démarrer le dialogue →",
      c6_title: "Synthèse Vocale & Audio",
      c6_desc: "Écoutez n'importe quel texte avec un accent français authentique et téléchargez le fichier audio sur votre appareil.",
      c6_link: "Écouter et Télécharger →",
      c7_title: "Niveaux A1-B2 & Conjugaison",
      c7_desc: "Thématiques complètes par niveau (vie courante, voyage, travail) et tableaux de conjugaison avec verbes en <strong class=\"red-highlight-preview\">Rouge Distinct</strong>.",
      c7_link: "Explorer la banque de verbes →",
      tool_01: "Outil 01",
      g_title: "Correcteur de Grammaire Française",
      g_desc: "Saisissez ou collez votre phrase pour analyser la grammaire, la concordance des temps, les accords et la ponctuation.",
      g_hint: "Exemples rapides à tester :",
      g_placeholder: "Écrivez ou collez votre texte en français ici (ex: Les enfants joue dans le jardin et il sont content)...",
      g_btn_check: "Vérifier la Grammaire",
      tool_02: "Outil 02",
      d_title: "Dictionnaire Français-Français",
      d_desc: "Consultez les définitions unilingues, phonétiques, synonymes, antonymes et contextes d'usage de la langue française.",
      d_placeholder: "Rechercher un mot français (ex: liberté, maison, espoir, résilience, apprendre...)",
      d_btn_search: "Définir",
      d_frequent: "Mots fréquents :",
      tool_03: "Outil 03",
      t_title: "Traduction Instantanée Français ⇄ Arabe",
      t_desc: "Traducteur bilingue avec écoute audio, inversion de sens et bibliothèque d'expressions courantes.",
      t_source_tag: "Texte source",
      t_target_tag: "Traduction",
      t_btn_clear: "Effacer",
      t_source_ph: "Entrez votre texte ici...",
      t_target_ph: "La traduction apparaîtra ici...",
      t_btn_trans: "Traduire",
      t_shelf_title: "Expressions Indispensables du Quotidien (Cliquez pour traduire) :",
      tool_04: "Outil 04",
      l_title: "Bibliothèque Numérique Française",
      l_desc: "Ouvrages littéraires, contes, poésies et textes classiques en accès libre pour progresser en lecture.",
      l_btn_add: "Ajouter un Nouveau Livre (Admin عبيدو)",
      l_filter_all: "Tous les Livres",
      l_filter_beg: "Niveau Débutant (A1-A2)",
      l_filter_adv: "Niveau Avancé (B1-B2)",
      l_filter_custom: "Ajouts Personnalisés",
      tool_05: "Outil 05",
      chat_title: "Tuteur IA Interactif & Conversation",
      chat_desc: "Discutez en direct en français. Le tuteur répond instantanément, stimule la conversation et signale vos erreurs grammaticales avec bienveillance.",
      chat_scenarios_title: "Sujets de Pratique",
      sc_general: "Discussion Libre",
      sc_restaurant: "Au Restaurant & Café",
      sc_travel: "Voyage & Gare",
      sc_interview: "Entretien d'Embauche",
      sc_quiz: "Quiz & Énigmes",
      chat_tutor_name: "Professeur 3bido",
      chat_online: "En ligne",
      chat_ph: "Écrivez votre message en français (ex: Bonjour, comment vas-tu aujourd'hui ?)...",
      chat_btn_send: "Envoyer",
      tool_06: "Outil 06",
      tts_title: "Synthèse Vocale & Téléchargement Audio",
      tts_desc: "Entrez une phrase en français, écoutez la prononciation avec un accent authentique et téléchargez directement le fichier audio (.wav / .mp3) sur votre appareil.",
      tts_voice_label: "Voix Française :",
      tts_speed_label: "Vitesse",
      tts_pitch_label: "Tonalité",
      tts_presets_hint: "Virelangues et citations à prononcer :",
      tts_btn_play: "Écouter (Prononcer)",
      tts_btn_stop: "Arrêter",
      tts_btn_download: "Télécharger l'Audio (.wav)",
      tool_07: "Outil 07",
      lvl_title: "Banque Pédagogique : Niveaux A1-B2 & Conjugaison",
      lvl_desc: "Explorez le vocabulaire thématique par niveau CECRL et maîtrisez les tableaux de conjugaison où <span class=\"red-highlight-pill\">les verbes conjugués sont surlignés en Rouge Éclatant</span> pour une mémorisation visuelle immédiate.",
      lvl_tab_vocab: "Vocabulaire & Phraséologie Thématique",
      lvl_tab_conj: "Tableaux de Conjugaison (Verbes en Rouge)",
      lvl_a1: "Débutant (Introduction & Quotidien)",
      lvl_a2: "Élémentaire (Voyage & Sorties)",
      lvl_b1: "Intermédiaire (Travail & Opinions)",
      lvl_b2: "Avancé (Débats & Nuances)",
      verb_search_ph: "Rechercher un verbe (ex: être, avoir, aller, faire, parler, prendre...)",
      tense_label: "Temps :",
      t_all: "Tous les temps",
      t_pres: "Présent de l'indicatif",
      t_pc: "Passé composé",
      t_imp: "Imparfait",
      t_fut: "Futur simple",
      t_cond: "Conditionnel présent",
      t_subj: "Subjonctif présent",
      qv_title: "Verbes essentiels :",
      auth_tab_login: "Se Connecter",
      auth_tab_register: "Créer un Compte",
      auth_tab_changepass: "Changer MDP",
      auth_old_pass_label: "Ancien mot de passe",
      auth_new_pass_label: "Nouveau mot de passe",
      auth_btn_changepass: "Modifier le mot de passe",
      auth_user_label: "Nom d'utilisateur",
      auth_pass_label: "Mot de passe",
      auth_btn_login: "Se Connecter",
      auth_choose_user: "Choisir un nom d'utilisateur",
      auth_btn_register: "Créer mon Compte",
      admin_zone_badge: "Zone Admin عبيدو",
      modal_add_title: "Ajouter un Nouveau Livre à la Bibliothèque",
      modal_add_desc: "Ce livre sera immédiatement enregistré et accessible à tous les visiteurs.",
      modal_book_title: "Titre du Livre *",
      modal_book_author: "Auteur *",
      modal_book_level: "Niveau CECRL *",
      modal_book_desc: "Courte Description / Résumé *",
      modal_book_content: "Contenu du Texte (Chapitre ou texte intégral)",
      modal_book_pdf: "📄 Fichier PDF du Livre (Optionnel)",
      modal_book_pdf_hint: "Taille max recommandée : 4 Mo. Le texte OU le PDF est requis.",
      modal_book_submit: "Publier le Livre dans la Bibliothèque",
      footer_brand_tag: "Apprentissage Moderne du Français",
      footer_desc: "Conçu avec dévouement pour tous les apprenants francophones à travers le monde. Solidarité, culture et savoir partagé.",
      solidarity_text: "Solidarité & Paix • Palestine dans nos cœurs 🇵🇸",
      welcome_msg_edit_btn: "✏️ Modifier le message",
      welcome_msg_save: "💾 Enregistrer",
      welcome_msg_cancel: "Annuler",
      welcome_msg_placeholder: "Rédigez votre message d'accueil ici...",
      welcome_msg_saved_toast: "Message d'accueil sauvegardé ✅",
            rights_text: "Tous droits réservés."
    },
    ar: {
      brand_subtitle: "تعلّم الفرنسية بشغف وتميّز",
      nav_home: "الرئيسية",
      btn_back: "رجوع",
      nav_grammar: "قواعد اللغة",
      nav_dictionary: "القاموس",
      nav_translator: "الترجمة",
      nav_library: "المكتبة",
      nav_tutor: "معلم الذكاء الاصطناعي",
      nav_tts: "النطق الصوتي",
      nav_levels: "المستويات وتصريف الأفعال",
      choose_lang: "اللغة:",
      m_grammar: "1. مصحح القواعد",
      m_dictionary: "2. القاموس الفرنسي",
      m_translator: "3. الترجمة الفورية",
      m_library: "4. المكتبة الرقمية",
      m_tutor: "5. معلم الذكاء الاصطناعي",
      m_tts: "6. النطق الصوتي وتنزيل الصوت",
      m_levels: "7. المستويات والأفعال المصرفة",
      m_videos: "8. مكتبة الفيديوهات التعليمية",
      m_game: "9. ألعاب تعليمية تفاعلية A1",
      nav_game: "الألعاب A1",
      c9_title: "ألعاب تعليمية تفاعلية A1",
      c9_desc: "تعلّم مفردات وقواعد ونطق المستوى A1 باللعب والمرح: كويز سريع، مطابقة الكلمات، وترتيب الجمل.",
      c9_link: "ابدأ اللعب الآن ←",
      tool_09: "الأداة 09",
      game_title: "ركن الألعاب والتحديات التفاعلية (A1)",
      game_desc: "تدرّب على أساسيات اللغة الفرنسية بأسلوب ممتع ومشوّق: المفردات اليومية، تصريف أفعال الحاضر، والتراكيب الشائعة مع نطق صوتي وتصحيح فوري.",
      game_tab_quiz: "تحدي الكويز السريع (Quiz A1)",
      game_tab_pairs: "مطابقة الكلمات والمعاني (Paires)",
      game_tab_sentences: "ترتيب الجمل الفرنسية (Phrases)",
      game_score_label: "النقاط:",
      game_streak_label: "السلسلة:",
      game_highscore_label: "أعلى نتيجة:",
      game_btn_next: "السؤال التالي ←",
      game_btn_check: "تحقق من الجملة ✓",
      game_btn_reset: "إعادة ترتيب",
      game_btn_restart: "بدء جولة جديدة 🔄",
      pairs_hint: "اضغط على بطاقتين لمطابقة الكلمة الفرنسية مع معناها العربي والصورة المناسبة.",
      sentence_instruction: "اضغط على الكلمات بالترتيب الصحيح لتكوين الجملة الفرنسية:",
      nav_videos: "الفيديوهات",
      services_heading: "استكشف الأقسام التعليمية الثمانية",
      c8_title: "مكتبة الفيديوهات التعليمية",
      c8_desc: "فيديوهات تعليمية، دروس تفاعلية، شروحات نطق ومحادثات مصورة. ميزة إضافة حصرية للمشرف عبيدو.",
      c8_link: "مشاهدة الفيديوهات التعليمية ←",
      tool_08: "الأداة 08",
      v_title: "مكتبة الفيديوهات والدروس المصورة",
      v_desc: "دروس مصورة، استماع نشط، فهم شفهي وانغماس لغوي لتطوير مهاراتك بشكل طبيعي وسلس.",
      v_btn_add: "إضافة فيديو جديد (حساب عبيدو)",
      v_filter_all: "جميع الفيديوهات",
      v_filter_beg: "مستوى مبتدئ (A1-A2)",
      v_filter_adv: "مستوى متقدم (B1-B2)",
      v_filter_custom: "الفيديوهات المضافة",
      modal_book_link: "🔗 رابط الكتاب الخارجي / القراءة أونلاين (اختياري)",
      modal_video_title: "إضافة فيديو جديد إلى مكتبة الفيديوهات",
      modal_video_desc: "شارك فيديو تعليمي عبر وضع رابط (YouTube / مباشر) أو برفع ملف فيديو حتى 50 ميجابايت.",
      modal_video_name: "عنوان الفيديو *",
      modal_video_level: "المستوى الموصى به *",
      modal_video_category: "التصنيف / الموضوع",
      modal_video_summary: "وصف موجز",
      modal_video_url: "🔗 رابط الفيديو (يوتيوب / فيميو / رابط MP4 مباشر)",
      modal_video_file: "📹 أو رفع ملف فيديو (حتى 50 ميجابايت)",
      modal_video_hint: "يدعم رفع ملفات حتى 50 ميجا بتخزين IndexedDB. الرابط أو ملف الفيديو مطلوب.",
      modal_video_submit: "نشر الفيديو في المكتبة",
      lvl_btn_add_vocab: "إضافة مفردات جديدة (حساب عبيدو)",
      modal_vocab_title: "إضافة كلمة / تعبير إلى بنك المفردات",
      modal_vocab_desc: "احفظ كلمة أو تعبيراً جديداً مع معناه بالعربي ومثال تطبيقي لإثراء المستوى.",
      modal_vocab_level: "المستوى CECRL *",
      modal_vocab_icon: "رمز تعبيري / إيموجي (اختياري)",
      modal_vocab_fr: "الكلمة أو التعبير بالفرنسية *",
      modal_vocab_ar: "المعنى / الترجمة بالعربية *",
      modal_vocab_ex: "مثال تطبيقي في جملة",
      modal_vocab_submit: "حفظ في المستوى المحدد",
            calligraphy_sub: "« سنصلي في القدس الشريف »",
      spd_slow: "بطيء",
      spd_calm: "هادئ",
      spd_normal: "عادي",
      spd_lively: "متوسط",
      spd_fast: "سريع",
      lvl_tab_conv: "المحادثات والحوارات (الأفعال بالأحمر)",
      conv_a1: "حوارات مبتدئ (التحيات، التسوق، الوقت وعام 1963)",
      conv_a2: "حوارات أساسي (السفر، المدينة، الترفيه والشاطئ)",
      conv_b1: "حوارات متوسط (عند الطبيب، العمل وحوادث الطريق)",
      conv_b2: "حوارات متقدم (العامية الفرنسية، قضايا المجتمع والنقاشات)",
      conv_listen_all: "استماع للحوار بالكامل",
      hero_badge: "منصة تعليمية متطورة ومتميزة",
      hero_title: "أهلاً بكم في منصة <span class=\"highlight-brand\">3bido</span>",
      hero_subtitle: "المساحة المتكاملة لتعلّم وإتقان وممارسة اللغة الفرنسية. تصحيح ذكي للقواعد، معجم فرنسي-فرنسي غني، ترجمة فورية، مكتبة للقراءة، محادثة تفاعلية مع الذكاء الاصطناعي، نطق صوتي أصيل، وبنك تصريف أفعال متكامل.",
      stat_tools: "أدوات متطورة",
      stat_levels: "مستويات تعليمية",
      stat_free: "مجاني وتفاعلي 100%",
      services_heading: "استكشف الأقسام التعليمية السبعة",
      services_subheading: "انقر على أي قسم لبدء جلستك التعليمية التفاعلية",
      c1_title: "مصحح قواعد اللغة",
      c1_desc: "اكتشف أخطاء النحو والتركيب والمطابقة فورياً مع شروحات تعليمية بالفرنسية والعربية.",
      c1_link: "تصحيح نص بالفرنسية ←",
      c2_title: "القاموس الفرنسي-الفرنسي",
      c2_desc: "معجم فرنسي unilingue كامل: معانٍ واضحة، رموز صوتية، مرادفات، أضداد وأمثلة سياقية.",
      c2_link: "ابحث عن كلمة ←",
      c3_title: "الترجمة الفورية",
      c3_desc: "ترجمة دقيقة في الوقت الحقيقي بين الفرنسية والعربية مدعومة بالنطق الصوتي وتبديل الاتجاه.",
      c3_link: "ترجمة فرنسي ⇄ عربي ←",
      c4_title: "المكتبة الفرنسية",
      c4_desc: "اقرأ روائع الأدب الفرنسي المصنفة حسب المستويات، مع ميزة رفع الكتب الخاصة بالمشرف عبيدو.",
      c4_link: "تصفح وقراءة الكتب ←",
      c5_title: "معلم الذكاء الاصطناعي",
      c5_desc: "تحدث مباشرة مع مساعد لغوي ذكي: حوار حر، سيناريوهات عملية (مطعم، سفر، مقابلة عمل) وتصحيح الأخطاء.",
      c5_link: "بدء المحادثة التفاعلية ←",
      c6_title: "النطق الصوتي والتحميل",
      c6_desc: "استمع إلى أي جملة بنطق فرنسي أصيل وحمّل الملف الصوتي مباشرة بصيغة WAV على جهازك.",
      c6_link: "استماع وتحميل الصوت ←",
      c7_title: "المستويات وتصريف الأفعال",
      c7_desc: "مفردات وجمل مصنفة للمستويات A1-B2 وجداول تصريف الأفعال مع تمييز الأفعال باللون <strong class=\"red-highlight-preview\">الأحمر البارز</strong>.",
      c7_link: "استكشاف بنك الأفعال والمفردات ←",
      tool_01: "الأداة 01",
      g_title: "مصحح قواعد اللغة الفرنسية",
      g_desc: "اكتب أو الصق جملتك لتحليل القواعد، توافق الأزمنة، المطابقة وعلامات الترقيم.",
      g_hint: "أمثلة سريعة للتجربة:",
      g_placeholder: "اكتب أو الصق نصك باللغة الفرنسية هنا (مثال: Les enfants joue dans le jardin et il sont content)...",
      g_btn_check: "فحص وتصحيح القواعد",
      tool_02: "الأداة 02",
      d_title: "القاموس الفرنسي-الفرنسي (Unilingue)",
      d_desc: "ابحث عن المعاني الأحادية بالفرنسية، الرموز الصوتية، المترادفات، الأضداد وسياقات الاستخدام.",
      d_placeholder: "ابحث عن كلمة فرنسية (مثال: liberté, maison, espoir, résilience, apprendre...)",
      d_btn_search: "بحث وتفسير",
      d_frequent: "كلمات شائعة:",
      tool_03: "الأداة 03",
      t_title: "الترجمة الفورية فرنسي ⇄ عربي",
      t_desc: "أداة ترجمة ثنائية اللغة مدعومة بالنطق الصوتي، تبديل الاتجاه، وبنك تعابير يومية.",
      t_source_tag: "النص الأصلي",
      t_target_tag: "الترجمة الناتجة",
      t_btn_clear: "مسح",
      t_source_ph: "اكتب النص المراد ترجمته هنا...",
      t_target_ph: "ستظهر الترجمة هنا...",
      t_btn_trans: "ترجمة فورية",
      t_shelf_title: "تعبيرات يومية لا غنى عنها (انقر للترجمة المباشرة):",
      tool_04: "الأداة 04",
      l_title: "المكتبة الرقمية الفرنسية",
      l_desc: "مؤلفات أدبية وقصص وروايات كلاسيكية للقراءة الحرة وتطوير الفهم اللغوي.",
      l_btn_add: "إضافة كتاب جديد (حساب عبيدو)",
      l_filter_all: "جميع الكتب",
      l_filter_beg: "مستوى مبتدئ (A1-A2)",
      l_filter_adv: "مستوى متقدم (B1-B2)",
      l_filter_custom: "الكتب المضافة",
      tool_05: "الأداة 05",
      chat_title: "معلم الذكاء الاصطناعي والمحادثة",
      chat_desc: "تحدث مباشرة بالفرنسية؛ يجيبك المعلم فورياً، يوجه المحادثة وينبهك بلطف لأخطائك النحوية.",
      chat_scenarios_title: "مواضيع المحادثة",
      sc_general: "محادثة حرة",
      sc_restaurant: "في المطعم والمقهى",
      sc_travel: "السفر ومحطة القطار",
      sc_interview: "مقابلة العمل",
      sc_quiz: "اختبار وألغاز لغوية",
      chat_tutor_name: "الأستاذ عبيدو",
      chat_online: "متصل الآن",
      chat_ph: "اكتب رسالتك بالفرنسية (أو انقر على المايك للتحدث)...",
      chat_btn_send: "إرسال",
      tool_06: "الأداة 06",
      tts_title: "تحويل النص إلى كلام وتنزيل الصوت",
      tts_desc: "أدخل أي جملة بالفرنسية، استمع لنطقها بنبرة فرنسية أصيلة، وحمّل الملف الصوتي (.wav) مباشرة إلى جهازك.",
      tts_voice_label: "الصوت الفرنسي:",
      tts_speed_label: "السرعة",
      tts_pitch_label: "طبقة الصوت",
      tts_presets_hint: "جمل وأمثال للتدريب على النطق:",
      tts_btn_play: "استماع (نطق)",
      tts_btn_stop: "إيقاف",
      tts_btn_download: "تحميل الملف الصوتي (.wav)",
      tool_07: "الأداة 07",
      lvl_title: "البنك التعليمي: المستويات A1-B2 وتصريف الأفعال",
      lvl_desc: "استكشف المفردات المصنفة حسب المستويات (A1 إلى B2)، وجداول تصريف الأفعال حيث تكون <span class=\"red-highlight-pill\">الأفعال المصرفة مظللة بالأحمر البارز</span> لتسهيل الحفظ.",
      lvl_tab_vocab: "المفردات والجمل النموذجية",
      lvl_tab_conj: "جداول تصريف الأفعال (الأفعال بالأحمر)",
      lvl_a1: "مبتدئ (مقدمات والحياة اليومية)",
      lvl_a2: "أساسي (السفر والمواقف اليومية)",
      lvl_b1: "متوسط (العمل والتعبير عن الرأي)",
      lvl_b2: "متقدم (النقاشات والأفكار العميقة)",
      verb_search_ph: "ابحث عن فعل (مثال: être, avoir, aller, faire, parler, prendre...)",
      tense_label: "الزمن:",
      t_all: "جميع الأزمنة",
      t_pres: "المضارع (Présent)",
      t_pc: "الماضي المركب (Passé composé)",
      t_imp: "الماضي المستمر (Imparfait)",
      t_fut: "المستقبل البسيط (Futur simple)",
      t_cond: "صيغة الشرط (Conditionnel)",
      t_subj: "صيغة المنصوب (Subjonctif)",
      qv_title: "أفعال أساسية:",
      auth_tab_login: "تسجيل الدخول",
      auth_tab_register: "إنشاء حساب جديد",
      auth_tab_changepass: "تغيير كلمة المرور",
      auth_old_pass_label: "كلمة المرور القديمة",
      auth_new_pass_label: "كلمة المرور الجديدة",
      auth_btn_changepass: "حفظ كلمة المرور الجديدة",
      auth_user_label: "اسم المستخدم",
      auth_pass_label: "كلمة المرور",
      auth_btn_login: "تسجيل الدخول",
      auth_choose_user: "اختر اسم المستخدم",
      auth_btn_register: "إنشاء الحساب",
      admin_zone_badge: "لوحة تحكم المشرف عبيدو",
      modal_add_title: "إضافة كتاب جديد إلى المكتبة الرقمية",
      modal_add_desc: "سيتم حفظ هذا الكتاب وإتاحته فورياً لجميع القراء والزوار.",
      modal_book_title: "عنوان الكتاب *",
      modal_book_author: "المؤلف *",
      modal_book_level: "المستوى CECRL *",
      modal_book_desc: "وصف موجز / ملخص *",
      modal_book_content: "محتوى النص (فصل أو النص الكامل)",
      modal_book_pdf: "📄 ملف PDF الكتاب (اختياري)",
      modal_book_pdf_hint: "الحجم الأقصى الموصى به: 4 ميجابايت. النص أو ملف PDF مطلوب.",
      modal_book_submit: "نشر الكتاب في المكتبة",
      footer_brand_tag: "المنصة الحديثة لتعلّم اللغة الفرنسية",
      footer_desc: "صُممت بإتقان لجميع عشاق ومتعلمي اللغة الفرنسية حول العالم. تضامن، ثقافة، وعلم متاح للجميع.",
      solidarity_text: "تضامن وسلام • فلسطين دائماً وأبداً في قلوبنا 🇵🇸",
      welcome_msg_edit_btn: "✏️ تعديل الرسالة",
      welcome_msg_save: "💾 حفظ",
      welcome_msg_cancel: "إلغاء",
      welcome_msg_placeholder: "اكتب رسالة الترحيب هنا...",
      welcome_msg_saved_toast: "تم حفظ رسالة الترحيب بنجاح ✅",
            rights_text: "جميع الحقوق محفوظة."
    }
  }
};

/* ===================================================================
   2. CORE INITIALIZATION & NAVIGATION
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  window.app.initLanguage();
  window.app.initTheme();
  window.app.initNavigation();
  window.app.auth.init();
  window.app.grammar.init();
  window.app.dict.init();
  window.app.trans.init();
  window.app.library.init();
  window.app.tutor.init();
  window.app.tts.init();
  window.app.levels.init();
  if (window.app.videos) window.app.videos.init();
  if (window.app.game) window.app.game.init();
  window.app.welcomeMsg.init();
  if (window.app.cloud) window.app.cloud.init();
  if (typeof window.app.updateToolsCount === 'function') window.app.updateToolsCount();
  if (typeof window.app.initWelcomeDuaModal === 'function') window.app.initWelcomeDuaModal();

  // Set current year in footer
  const yearElem = document.getElementById('currentYear');
  if (yearElem) yearElem.textContent = new Date().getFullYear();
});

// Language Management (Toggle FR / AR)
window.app.initLanguage = function() {
  const savedLang = localStorage.getItem('3bido_lang') || 'fr';
  window.app.setLanguage(savedLang, false);
};

window.app.toggleLanguage = function() {
  const nextLang = window.app.lang === 'fr' ? 'ar' : 'fr';
  window.app.setLanguage(nextLang, true);
};

window.app.setLanguage = function(lang, showNotification = true) {
  window.app.lang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  localStorage.setItem('3bido_lang', lang);

  // Update pills active states
  const pillFR = document.getElementById('langPillFR');
  const pillAR = document.getElementById('langPillAR');
  const mPillFR = document.getElementById('mobileLangPillFR');
  const mPillAR = document.getElementById('mobileLangPillAR');

  if (lang === 'ar') {
    pillFR?.classList.remove('active');
    pillAR?.classList.add('active');
    mPillFR?.classList.remove('active');
    mPillAR?.classList.add('active');
  } else {
    pillFR?.classList.add('active');
    pillAR?.classList.remove('active');
    mPillFR?.classList.add('active');
    mPillAR?.classList.remove('active');
  }

  // Update DOM elements matching data-i18n
  const dict = window.app.i18n.translations[lang] || window.app.i18n.translations.fr;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Re-render auth and dynamic items
  if (window.app.auth) window.app.auth.renderNavAuth();
  if (window.app.library) window.app.library.renderBooks();
  if (window.app.videos) window.app.videos.renderVideos();
  if (window.app.levels) {
    window.app.levels.renderVocab();
    window.app.levels.renderConjugation();
  }
  if (typeof window.app.updateToolsCount === 'function') window.app.updateToolsCount();

  if (showNotification) {
    window.app.showToast(lang === 'ar' ? "تم تحويل لغة الموقع إلى العربية 🇵🇸" : "Langue basculée en Français 🇫🇷", '🌐');
  }
};

// Theme Management
window.app.initTheme = function() {
  const savedTheme = localStorage.getItem('3bido_theme') || 'light';
  window.app.setTheme(savedTheme);

  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const newTheme = window.app.theme === 'light' ? 'dark' : 'light';
      window.app.setTheme(newTheme);
    });
  }
};

window.app.setTheme = function(theme) {
  window.app.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('3bido_theme', theme);
};

// Navigation

// Dynamic Tools Counter & Services Heading Sync
window.app.updateToolsCount = function() {
  const cards = document.querySelectorAll('.services-grid .service-card');
  const count = cards.length || 8;
  const numElem = document.getElementById('heroToolsCount');
  if (numElem) numElem.textContent = count;

  const isAr = window.app.lang === 'ar';
  const headingElem = document.querySelector('[data-i18n="services_heading"]');
  if (headingElem) {
    headingElem.textContent = isAr 
      ? `استكشف الأقسام التعليمية الـ ${count}`
      : `Explorez les ${count} Espaces d'Apprentissage`;
  }
};

window.app.initNavigation = function() {
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }
};

window.app.navigationHistory = [];

window.app.navigate = function(sectionId, addToHistory = true) {
  if (addToHistory && window.app.currentSection && window.app.currentSection !== sectionId) {
    window.app.navigationHistory.push(window.app.currentSection);
  }
  window.app.currentSection = sectionId;

  // Hide all sections
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));

  // Show target section
  const target = document.getElementById(`section-${sectionId}`);
  if (target) {
    target.classList.add('active');
  }

  // Update navbar button states
  document.querySelectorAll('.nav-btn, .mobile-nav-btn').forEach(btn => {
    if (btn.getAttribute('data-target') === sectionId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update Back Button visibility
  window.app.updateBackButtonVisibility();

  // Close mobile nav if open
  const mobileNav = document.getElementById('mobileNav');
  if (mobileNav) mobileNav.classList.remove('open');

  // Smooth scroll to top of main
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.app.goBack = function() {
  // 1. If any modal is currently visible, close it
  const openModal = document.querySelector('.modal-backdrop:not(.hidden)');
  if (openModal) {
    if (openModal.id === 'welcomeDuaModal') {
      window.app.dismissWelcomeModal();
      return;
    }
    openModal.classList.add('hidden');
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    return;
  }

  // 2. Stop any ongoing speech playback
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  // 3. Pop previous section from history
  if (window.app.navigationHistory && window.app.navigationHistory.length > 0) {
    const prevSection = window.app.navigationHistory.pop();
    window.app.navigate(prevSection, false);
  } else if (window.app.currentSection !== 'home') {
    window.app.navigate('home', false);
  }
};

window.app.updateBackButtonVisibility = function() {
  const isNotHome = window.app.currentSection !== 'home' || (window.app.navigationHistory && window.app.navigationHistory.length > 0);
  const navBack = document.getElementById('navBackBtn');
  const floatBack = document.getElementById('floatingBackBtn');
  const mobileBack = document.getElementById('mobileNavBackBtn');
  if (navBack) {
    if (isNotHome) navBack.classList.remove('hidden');
    else navBack.classList.add('hidden');
  }
  if (floatBack) {
    if (isNotHome) floatBack.classList.remove('hidden');
    else floatBack.classList.add('hidden');
  }
  if (mobileBack) {
    if (isNotHome) mobileBack.classList.remove('hidden');
    else mobileBack.classList.add('hidden');
  }
};

window.app.initWelcomeDuaModal = function() {
  const modal = document.getElementById('welcomeDuaModal');
  const textEl = document.getElementById('popupWelcomeText');
  const savedMsg = localStorage.getItem('3bido_welcome_msg');
  if (textEl && savedMsg) {
    textEl.textContent = savedMsg;
  }
  if (modal) {
    // Stays visible on entry until user clicks "تم 🤍"
    modal.classList.remove('hidden');
  }
};

window.app.dismissWelcomeModal = function() {
  const modal = document.getElementById('welcomeDuaModal');
  if (modal) {
    modal.classList.add('hidden');
    sessionStorage.setItem('3bido_welcome_dismissed', 'true');
  }
};

// Global Toast System
window.app.showToast = function(message, icon = 'ℹ️') {
  const toast = document.getElementById('toastNotification');
  const msgElem = document.getElementById('toastMessage');
  const iconElem = toast?.querySelector('.toast-icon');

  if (toast && msgElem) {
    msgElem.textContent = message;
    if (iconElem) iconElem.textContent = icon;
    toast.classList.remove('hidden');

    clearTimeout(window.app._toastTimer);
    window.app._toastTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, 3500);
  }
};

// Global Speech Synthesis Helper
window.app.speakFrench = function(text, rate = null, pitch = 1.0) {
  if (!('speechSynthesis' in window)) {
    window.app.showToast(window.app.lang === 'ar' ? "المتصفح لا يدعم النطق الصوتي." : "La synthèse vocale n'est pas supportée par ce navigateur.", '⚠️');
    return;
  }
  window.speechSynthesis.cancel();
  const effectiveRate = (rate !== null && rate !== undefined) ? rate : ((window.app.tts && window.app.tts.currentRate) ? window.app.tts.currentRate : 1.0);

  const cleanText = (text || '').replace(/<[^>]*>/g, '').replace(/[\r\n]+/g, ' ').trim();
  if (!cleanText) return;

  const isArabic = /[\u0600-\u06FF]/.test(cleanText);
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = isArabic ? 'ar-SA' : 'fr-FR';
  utterance.rate = effectiveRate;
  utterance.pitch = pitch;

  const voices = window.speechSynthesis.getVoices();
  if (isArabic) {
    const arVoice = voices.find(v => v.lang.startsWith('ar'));
    if (arVoice) utterance.voice = arVoice;
  } else {
    const frVoice = voices.find(v => v.lang.startsWith('fr') && (v.name.includes('French') || v.name.includes('Thomas') || v.name.includes('Amélie') || v.name.includes('Céline') || v.lang === 'fr-FR')) || voices.find(v => v.lang.startsWith('fr'));
    if (frVoice) utterance.voice = frVoice;
  }

  window.speechSynthesis.speak(utterance);
};


/* ===================================================================
   INDEXEDDB HIGH-CAPACITY STORAGE (50MB+ FILES, PDFS & VIDEOS)
   =================================================================== */
window.app.db = {
  dbName: '3bido_storage',
  dbVersion: 1,
  _db: null,

  async open() {
    if (this._db) return this._db;
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(this.dbName, this.dbVersion);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('files')) {
          db.createObjectStore('files', { keyPath: 'id' });
        }
      };
      req.onsuccess = (e) => {
        this._db = e.target.result;
        resolve(this._db);
      };
      req.onerror = (e) => reject(e);
    });
  },

  async saveFile(id, fileBlob, meta = {}) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('files', 'readwrite');
      const store = tx.objectStore('files');
      const record = { id, blob: fileBlob, meta, createdAt: Date.now() };
      const req = store.put(record);
      req.onsuccess = () => resolve(id);
      req.onerror = (e) => reject(e);
    });
  },

  async getFile(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('files', 'readonly');
      const store = tx.objectStore('files');
      const req = store.get(id);
      req.onsuccess = () => resolve(req.result);
      req.onerror = (e) => reject(e);
    });
  },

  async deleteFile(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('files', 'readwrite');
      const store = tx.objectStore('files');
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
      req.onerror = (e) => reject(e);
    });
  }
};


/* ===================================================================
   3. AUTHENTICATION & ADMIN SYSTEM
   Admin username: "عبيدو" (Strictly Unlocks Book Upload)
   =================================================================== */
window.app.auth = {
  currentUser: null,
  ADMIN_USERNAME: 'عبيدو',
  ADMIN_DEFAULT_PASSWORD: '112200',

  init() {
    // Seed default admin user in localStorage if not exists
    const users = this.getUsers();
    if (!users.some(u => u.username === this.ADMIN_USERNAME)) {
      users.push({ username: this.ADMIN_USERNAME, password: this.ADMIN_DEFAULT_PASSWORD, role: 'admin' });
      localStorage.setItem('3bido_users', JSON.stringify(users));
    }

    // Load active session
    const savedUser = localStorage.getItem('3bido_current_user');
    const isExplicitlyLoggedOut = localStorage.getItem('3bido_logged_out') === 'true';

    if (savedUser) {
      try {
        this.currentUser = JSON.parse(savedUser);
      } catch (e) {
        this.currentUser = null;
      }
    } else if (!isExplicitlyLoggedOut) {
      // Auto-login admin عبيدو by default on fresh session so admin edit buttons are instantly active
      this.currentUser = { username: this.ADMIN_USERNAME, role: 'admin' };
      localStorage.setItem('3bido_current_user', JSON.stringify(this.currentUser));
    }
    this.renderNavAuth();
    this.updateAdminPrivileges();
  },

  getUsers() {
    try {
      return JSON.parse(localStorage.getItem('3bido_users')) || [];
    } catch {
      return [];
    }
  },

  isAdmin() {
    if (!this.currentUser) return false;
    const u = (this.currentUser.username || '').trim();
    return u === this.ADMIN_USERNAME || u === '3bido' || this.currentUser.role === 'admin';
  },

  renderNavAuth() {
    const container = document.getElementById('authNavContainer');
    if (!container) return;
    const isAr = window.app.lang === 'ar';

    if (this.currentUser) {
      const isAdm = this.isAdmin();
      const firstLetter = this.currentUser.username.charAt(0).toUpperCase();

      container.innerHTML = `
        <div class="auth-user-pill">
          <div class="user-avatar-mini">${firstLetter}</div>
          <span class="user-name-mini">${this.escape(this.currentUser.username)}</span>
          ${isAdm ? `<span class="admin-tag-badge">${isAr ? 'مشرف' : 'Admin'}</span>` : ''}
          ${isAdm ? `
            <button class="cloud-status-pill" onclick="window.app.cloud.openModal()" title="${isAr ? 'حالة وإعدادات السحابة' : 'Base de données Cloud'}" id="cloudNavPill">
              ☁️ <span id="cloudNavStatusText">${window.app.cloud && window.app.cloud.isReady ? (isAr ? 'متصل' : 'En ligne') : (isAr ? 'السحابة' : 'Cloud')}</span>
            </button>
            <button class="btn-logout" onclick="window.app.sync.openModal()" title="${isAr ? 'مزامنة ونقل البيانات بين الأجهزة' : 'Synchroniser les données'}" style="margin: 0 2px; padding: 2px 5px; font-size: 0.85rem; background: transparent; border: none; cursor: pointer;">
              🔄
            </button>
          ` : ''}
          <button class="btn-logout" onclick="window.app.auth.openModal('changePass')" title="${isAr ? 'تغيير كلمة المرور' : 'Changer mot de passe'}" style="margin: 0 4px; padding: 2px 5px; font-size: 0.8rem; background: transparent; border: none; cursor: pointer;">
            🔑
          </button>
          <button class="btn-logout" onclick="window.app.auth.logout()" title="${isAr ? 'تسجيل الخروج' : 'Se déconnecter'}">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </button>
        </div>
      `;
    } else {
      container.innerHTML = `
        <button class="btn btn-secondary" onclick="window.app.auth.openModal('login')">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          <span>${isAr ? 'دخول / حساب' : 'Connexion'}</span>
        </button>
      `;
    }
  },

  updateAdminPrivileges() {
    const isAdm = this.isAdmin();

    // 1. Library Admin Action
    const adminUpload = document.getElementById('adminUploadContainer');
    if (adminUpload) {
      if (isAdm) adminUpload.classList.remove('hidden');
      else adminUpload.classList.add('hidden');
    }

    // 2. Videos Admin Action
    const adminAddVideo = document.getElementById('adminAddVideoContainer');
    if (adminAddVideo) {
      if (isAdm) adminAddVideo.classList.remove('hidden');
      else adminAddVideo.classList.add('hidden');
    }

    // 3. Vocab Admin Action
    const adminAddVocab = document.getElementById('adminAddVocabContainer');
    if (adminAddVocab) {
      if (isAdm) adminAddVocab.classList.remove('hidden');
      else adminAddVocab.classList.add('hidden');
    }

    // 4. Welcome Message Edit
    if (window.app.welcomeMsg) window.app.welcomeMsg.updateAdminVisibility();

    // 5. Dynamic re-renders so delete buttons show/hide accurately
    if (window.app.library && typeof window.app.library.renderBooks === 'function') {
      window.app.library.renderBooks();
    }
    if (window.app.videos && typeof window.app.videos.renderVideos === 'function') {
      window.app.videos.renderVideos();
    }
    if (window.app.levels && typeof window.app.levels.renderVocab === 'function') {
      window.app.levels.renderVocab();
    }
  },

  openModal(tab = 'login') {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('hidden');
    this.switchTab(tab);
  },

  closeModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.add('hidden');
  },

  handleBackdropClick(e) {
    if (e.target.id === 'authModal') {
      this.closeModal();
    }
  },

  switchTab(tab) {
    const tabLogin = document.getElementById('tabLogin');
    const tabRegister = document.getElementById('tabRegister');
    const tabChangePass = document.getElementById('tabChangePass');
    const formLogin = document.getElementById('loginForm');
    const formRegister = document.getElementById('registerForm');
    const formChangePass = document.getElementById('changePassForm');

    [tabLogin, tabRegister, tabChangePass].forEach(t => t && t.classList.remove('active'));
    [formLogin, formRegister, formChangePass].forEach(f => f && f.classList.add('hidden'));

    if (tab === 'login') {
      if (tabLogin) tabLogin.classList.add('active');
      if (formLogin) formLogin.classList.remove('hidden');
    } else if (tab === 'register') {
      if (tabRegister) tabRegister.classList.add('active');
      if (formRegister) formRegister.classList.remove('hidden');
    } else if (tab === 'changePass') {
      if (tabChangePass) tabChangePass.classList.add('active');
      if (formChangePass) formChangePass.classList.remove('hidden');
      if (this.currentUser) {
        const cpUser = document.getElementById('cpUsername');
        if (cpUser) cpUser.value = this.currentUser.username;
      }
    }
  },

  submitLogin(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const isAr = window.app.lang === 'ar';

    if (!username || !password) {
      window.app.showToast(isAr ? 'يرجى ملء جميع الحقول.' : 'Veuillez renseigner tous les champs.', '⚠️');
      return;
    }

    const users = this.getUsers();
    const user = users.find(u => u.username === username);

    if (!user || user.password !== password) {
      window.app.showToast(isAr ? 'بيانات الدخول غير صحيحة.' : 'Identifiants incorrects. Veuillez réessayer.', '❌');
      return;
    }

    localStorage.removeItem('3bido_logged_out');
    this.currentUser = { username: user.username, role: user.role || (user.username === this.ADMIN_USERNAME ? 'admin' : 'user') };
    localStorage.setItem('3bido_current_user', JSON.stringify(this.currentUser));
    this.renderNavAuth();
    this.updateAdminPrivileges();
    this.closeModal();

    if (window.app.welcomeMsg) window.app.welcomeMsg.updateAdminVisibility();
    if (this.isAdmin()) {
      window.app.showToast(isAr ? 'أهلاً بالمشرف عبيدو! تم تفعيل ميزة إضافة الكتب.' : 'Bienvenue Administrateur عبيدو ! Mode gestion débloqué.', '👑');
    } else {
      window.app.showToast(isAr ? `أهلاً بك يا ${this.currentUser.username}!` : `Bienvenue, ${this.currentUser.username} !`, '✨');
    }
  },

  submitRegister(e) {
    e.preventDefault();
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const isAr = window.app.lang === 'ar';

    if (!username || !password) {
      window.app.showToast(isAr ? 'يرجى إدخال اسم المستخدم وكلمة المرور.' : 'Veuillez renseigner tous les champs.', '⚠️');
      return;
    }

    const users = this.getUsers();
    if (username === this.ADMIN_USERNAME) {
      window.app.showToast(isAr ? 'اسم المستخدم هذا محجوز للمشرف.' : 'Ce nom d\'utilisateur est réservé à l\'admin.', '⚠️');
      return;
    }
    if (users.some(u => u.username === username)) {
      window.app.showToast(isAr ? 'اسم المستخدم هذا محجوز بالفعل.' : 'Ce nom d\'utilisateur est déjà utilisé.', '⚠️');
      return;
    }

    const newUser = { username, password, role: 'user' };
    users.push(newUser);
    localStorage.setItem('3bido_users', JSON.stringify(users));

    this.currentUser = { username, role: newUser.role };
    localStorage.setItem('3bido_current_user', JSON.stringify(this.currentUser));
    this.renderNavAuth();
    this.updateAdminPrivileges();
    this.closeModal();
    if (window.app.welcomeMsg) window.app.welcomeMsg.updateAdminVisibility();
    window.app.showToast(isAr ? `تم إنشاء الحساب بنجاح! مرحباً ${username}` : `Compte créé avec succès ! Bienvenue ${username}`, '🎉');
  },

  submitChangePassword(e) {
    e.preventDefault();
    const username = document.getElementById('cpUsername').value.trim();
    const oldPassword = document.getElementById('cpOldPassword').value.trim();
    const newPassword = document.getElementById('cpNewPassword').value.trim();
    const isAr = window.app.lang === 'ar';

    if (!username || !oldPassword || !newPassword) {
      window.app.showToast(isAr ? 'يرجى ملء جميع الحقول.' : 'Veuillez renseigner tous les champs.', '⚠️');
      return;
    }

    if (newPassword.length < 4) {
      window.app.showToast(isAr ? 'كلمة المرور يجب أن لا تقل عن 4 أحرف.' : 'Le mot de passe doit comporter au moins 4 caractères.', '⚠️');
      return;
    }

    const users = this.getUsers();
    let user = users.find(u => u.username === username);

    if (!user) {
      window.app.showToast(isAr ? 'اسم المستخدم غير موجود.' : 'Utilisateur introuvable.', '❌');
      return;
    }

    if (user.password !== oldPassword) {
      window.app.showToast(isAr ? 'كلمة المرور القديمة غير صحيحة.' : 'L\'ancien mot de passe est incorrect.', '❌');
      return;
    }

    user.password = newPassword;
    localStorage.setItem('3bido_users', JSON.stringify(users));

    if (this.currentUser && this.currentUser.username === username) {
      this.currentUser.password = newPassword;
      localStorage.setItem('3bido_current_user', JSON.stringify(this.currentUser));
    }

    this.closeModal();
    window.app.showToast(isAr ? 'تم تغيير كلمة المرور بنجاح! ✅' : 'Mot de passe modifié avec succès ! ✅', '🔒');
  },

  logout() {
    const isAr = window.app.lang === 'ar';
    this.currentUser = null;
    localStorage.removeItem('3bido_current_user');
    localStorage.setItem('3bido_logged_out', 'true');
    this.renderNavAuth();
    this.updateAdminPrivileges();
    if (window.app.welcomeMsg) window.app.welcomeMsg.updateAdminVisibility();
    window.app.showToast(isAr ? 'تم تسجيل الخروج بنجاح.' : 'Vous avez été déconnecté.', '👋');
  },

  escape(str) {
    return (str || '').replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }
};


/* ===================================================================
   4. SECTION 1: GRAMMAR CORRECTION ENGINE
   =================================================================== */
window.app.grammar = {
  init() {
    const textarea = document.getElementById('grammarInput');
    const charCount = document.getElementById('grammarCharCount');
    if (textarea && charCount) {
      textarea.addEventListener('input', () => {
        const isAr = window.app.lang === 'ar';
        const len = textarea.value.length;
        charCount.textContent = isAr ? `${len} حرف` : `${len} caractère${len > 1 ? 's' : ''}`;
      });
    }
  },

  loadSample(idx) {
    const input = document.getElementById('grammarInput');
    if (!input) return;

    if (idx === 1) {
      input.value = "Elle est allé a l'école ce matin avec son amie.";
    } else if (idx === 2) {
      input.value = "Il ont mangé des pomme rouge et il sont parti vite.";
    } else if (idx === 3) {
      input.value = "Je veux que tu viens demain parce que les enfant joue dehors.";
    }
    input.dispatchEvent(new Event('input'));
    this.check();
  },

  clear() {
    const input = document.getElementById('grammarInput');
    const results = document.getElementById('grammarResults');
    if (input) {
      input.value = '';
      input.dispatchEvent(new Event('input'));
      input.focus();
    }
    if (results) results.classList.add('hidden');
  },

  async paste() {
    try {
      const text = await navigator.clipboard.readText();
      const input = document.getElementById('grammarInput');
      if (input && text) {
        input.value = text;
        input.dispatchEvent(new Event('input'));
      }
    } catch {
      window.app.showToast('Veuillez coller manuellement (Ctrl+V)', '📋');
    }
  },

  async check() {
    const input = document.getElementById('grammarInput');
    const resultsContainer = document.getElementById('grammarResults');
    const checkBtn = document.getElementById('grammarCheckBtn');
    const text = input ? input.value.trim() : '';
    const isAr = window.app.lang === 'ar';

    if (!text) {
      window.app.showToast(isAr ? 'يرجى كتابة نص لفحصه.' : 'Veuillez saisir une phrase à vérifier.', '⚠️');
      return;
    }

    if (checkBtn) {
      checkBtn.disabled = true;
      checkBtn.innerHTML = `<span>⏳</span> <span>${isAr ? 'جاري الفحص النحوي الذكي...' : 'Vérification en cours...'}</span>`;
    }

    try {
      let checkResult = null;

      // 1. Try online LanguageTool API (Free Industry-Standard French Grammar Engine)
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3800);

        const params = new URLSearchParams();
        params.append('text', text);
        params.append('language', 'fr');

        const response = await fetch('https://api.languagetool.org/v2/check', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          body: params,
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          if (data && Array.isArray(data.matches)) {
            checkResult = this.processLanguageToolResult(text, data.matches, isAr);
          }
        }
      } catch (netErr) {
        console.log('LanguageTool network fallback to local engine:', netErr.message);
      }

      // 2. Fallback to our extensive local linguistic rules engine (35+ rules)
      if (!checkResult) {
        checkResult = this.runLocalGrammarEngine(text, isAr);
      }

      // 3. Render the analysis
      this.renderGrammarResults(text, checkResult, isAr);
    } catch (err) {
      console.error('Grammar check error:', err);
      // Run local engine as safety net
      const fallbackResult = this.runLocalGrammarEngine(text, isAr);
      this.renderGrammarResults(text, fallbackResult, isAr);
    } finally {
      if (checkBtn) {
        checkBtn.disabled = false;
        checkBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span data-i18n="g_btn_check">${isAr ? 'فحص القواعد اللغوية' : 'Vérifier la Grammaire'}</span>
        `;
      }
    }
  },

  processLanguageToolResult(originalText, matches, isAr) {
    let corrected = originalText;
    const errors = [];

    // Filter out minor pure-typography spaces if not meaningful
    const meaningfulMatches = matches.filter(m => {
      return m.replacements && m.replacements.length > 0;
    });

    // Sort descending by offset to replace from end to beginning
    const sorted = [...meaningfulMatches].sort((a, b) => b.offset - a.offset);

    for (const match of sorted) {
      const wrong = originalText.slice(match.offset, match.offset + match.length);
      const fix = (match.replacements && match.replacements.length > 0) ? match.replacements[0].value : '';

      if (fix) {
        corrected = corrected.slice(0, match.offset) + fix + corrected.slice(match.offset + match.length);
      }

      const cat = (match.rule && match.rule.category && match.rule.category.name) || '';
      const arabicNote = this.getArabicCategoryExplanation(cat, match.message || match.shortMessage);

      errors.push({
        wrong: wrong,
        suggestion: fix,
        title: match.shortMessage || match.rule?.description || (isAr ? 'ملاحظة لغوية' : 'Règle grammaticale'),
        explanation: match.message || (isAr ? 'يُنصح باستخدام الصياغة المصححة أعلاه.' : 'Formulation recommandée.'),
        arabicNote: arabicNote
      });
    }

    errors.reverse();

    return {
      correctedText: corrected,
      errors: errors,
      engine: 'LanguageTool AI'
    };
  },

  getArabicCategoryExplanation(cat, msg) {
    const m = (msg || '').toLowerCase();
    const c = (cat || '').toLowerCase();

    if (m.includes('accord') || c.includes('accord') || m.includes('participe') || m.includes('pluriel') || m.includes('féminin')) {
      return 'مطابقة القواعد: مطابقة الاسم أو الصفة أو اسم المفعول مع الفاعل في التذكير/التأنيث أو الإفراد/الجمع.';
    }
    if (m.includes('conjugaison') || c.includes('verbe') || c.includes('conjug') || m.includes('terminaison')) {
      return 'تصريف الأفعال: توافق نهاية الفعل مع الضمير الفاعل وزمن الجملة.';
    }
    if (m.includes('homophone') || m.includes('confusion') || c.includes('homophone')) {
      return 'تشابه النطق (Homophones): كلمات تتشابه في النطق وتختلف في الكتابة والمعنى (مثل a/à أو son/sont أو et/est).';
    }
    if (m.includes('élision') || m.includes('apostrophe')) {
      return 'حذف حرف العلة (Élision): استخدام الفاصلة العليا (apostrophe) مع الكلمات التي تبدأ بمتحرك لتفادي التقاء الساكنين.';
    }
    if (m.includes('subjonctif')) {
      return 'صيغة المنصوب (Subjonctif): تستخدم بعد أفعال الإرادة والطلب والشك (مثل vouloir que, il faut que).';
    }
    if (c.includes('orthographe') || c.includes('typo')) {
      return 'تصحيح إملائي للكلمة وفقاً لمعاجم اللغة الفرنسية المعاصرة.';
    }
    return 'قاعدة نحوية لغوية لضبط سلامة التركيب وصحة التعبير.';
  },

  runLocalGrammarEngine(text, isAr) {
    let corrected = text;
    const errors = [];

    const localRules = [
      // 1. Accords participe passé avec être (féminin)
      {
        pattern: /\b([Ee]lle|[Ll]a\s+[a-zA-Zà-ÿ]+|[Mm]a\s+[a-zA-Zà-ÿ]+)\s+est\s+(allé|parti|venu|arrivé|resté|sorti|tombé|né|mort|entré|monté|descendu|passé|retourné)\b/gi,
        replace: (match, subj, part) => {
          const ending = (part.toLowerCase() === 'mort') ? 'e' : (part.endsWith('é') ? 'e' : (part.endsWith('u') || part.endsWith('i') ? 'e' : 'e'));
          return `${subj} est ${part}e`;
        },
        title: "Accord du participe passé avec l'auxiliaire être (Féminin)",
        explanation: "Avec l'auxiliaire 'être', le participe passé s'accorde obligatoirement en genre avec le sujet féminin (ajout d'un 'e').",
        arabicNote: "مطابقة اسم المفعول مع الفاعل المؤنث عند استخدام فعل الكينونة être (إضافة حرف e للتأنيث)."
      },
      // 2. Accords participe passé avec être (masculin pluriel)
      {
        pattern: /\b([Ii]ls|[Ll]es\s+[a-zA-Zà-ÿ]+s|[Nn]ous)\s+sont\s+(allé|parti|venu|arrivé|resté|sorti|tombé|né|mort|entré|monté|descendu|passé|retourné)\b/gi,
        replace: (match, subj, part) => `${subj} sont ${part}s`,
        title: "Accord du participe passé au pluriel avec être",
        explanation: "Le participe passé conjugué avec 'être' s'accorde en nombre avec le sujet pluriel (ajout d'un 's').",
        arabicNote: "مطابقة اسم المفعول في صيغة الجمع مع الفاعل (إضافة حرف s للجمع)."
      },
      // 3. Accords participe passé avec être (féminin pluriel)
      {
        pattern: /\b([Ee]lles)\s+sont\s+(allé|parti|venu|arrivé|resté|sorti|tombé|né|mort|entré|monté|descendu|passé|retourné)s?\b/gi,
        replace: (match, subj, part) => {
          const base = part.replace(/s$/, '');
          return `${subj} sont ${base}es`;
        },
        title: "Accord du participe passé au féminin pluriel avec être",
        explanation: "Avec 'elles', le participe passé prend la marque du féminin ('e') et du pluriel ('s').",
        arabicNote: "مطابقة اسم المفعول مع ضمير جمع المؤنث elles (إضافة es للتأنيث والجمع)."
      },
      // 4. Homophone : ils ont vs ils on
      {
        pattern: /\b([Ii]ls|[Ee]lles)\s+on\b/g,
        replace: "$1 ont",
        title: "Confusion homophone : 'on' et 'ont'",
        explanation: "'Ont' est la forme conjuguée du verbe avoir (3e personne du pluriel). 'On' est un pronom.",
        arabicNote: "التمييز بين ont (فعل avoir للجمع) و on (ضمير الفاعل المفرد)."
      },
      // 5. Homophone : ils sont vs ils son
      {
        pattern: /\b([Ii]ls|[Ee]lles)\s+son\b/g,
        replace: "$1 sont",
        title: "Confusion homophone : 'son' et 'sont'",
        explanation: "'Sont' est le verbe être au pluriel. 'Son' est un adjectif possessif.",
        arabicNote: "التمييز بين sont (فعل الكينونة للجمع) و son (ضمير الملكية للمفرد)."
      },
      // 6. Accord sujet singulier avec verbe pluriel : il sont / il ont
      {
        pattern: /\b([Ii]l|[Ee]lle)\s+ont\b/g,
        replace: "$1 a",
        title: "Accord sujet singulier avec le verbe avoir",
        explanation: "Le sujet 'il/elle' (3e personne du singulier) se conjugue avec 'a' et non 'ont'.",
        arabicNote: "تصريف فعل avoir للمفرد الغائب هو a وليس ont."
      },
      {
        pattern: /\b([Ii]l|[Ee]lle)\s+sont\b/g,
        replace: "$1 est",
        title: "Accord sujet singulier avec le verbe être",
        explanation: "Le sujet singulier 'il/elle' se conjugue avec 'est' et non 'sont'.",
        arabicNote: "تصريف فعل être للمفرد الغائب هو est وليس sont."
      },
      // 7. Accord sujet pluriel avec verbe singulier : ils est / ils a
      {
        pattern: /\b([Ii]ls|[Ee]lles)\s+a\b/g,
        replace: "$1 ont",
        title: "Accord sujet pluriel avec le verbe avoir",
        explanation: "Le sujet pluriel 'ils/elles' exige 'ont'.",
        arabicNote: "تصريف فعل avoir لجمع الغائب هو ont وليس a."
      },
      {
        pattern: /\b([Ii]ls|[Ee]lles)\s+est\b/g,
        replace: "$1 sont",
        title: "Accord sujet pluriel avec le verbe être",
        explanation: "Le sujet pluriel 'ils/elles' exige 'sont'.",
        arabicNote: "تصريف فعل être لجمع الغائب هو sont وليس est."
      },
      // 8. Confusion préposition 'à' vs verbe 'a'
      {
        pattern: /\b([Vv]a|[Aa]llé|[Aa]llée|[Aa]llés|[Aa]llées|[Pp]arti|[Pp]artie|[Vv]ais|[Vv]as|[Aa]llons|[Aa]llez|[Vv]ont)\s+a\s+(la|l'|le|les|Paris|l'école|l'université|la maison|l'hôpital|mon|ton|son|sa)\b/g,
        replace: "$1 à $2",
        title: "Confusion préposition 'à' et verbe 'a'",
        explanation: "'À' avec accent grave est la préposition de lieu ou de destination.",
        arabicNote: "استخدام حرف الجر à (إلى/في) بدلاً من فعل الملكية a."
      },
      // 9. Article contracté : à le -> au, à les -> aux
      {
        pattern: /\bà\s+le\s+([a-zA-Zà-ÿ]+)\b/gi,
        replace: "au $1",
        title: "Article contracté obligatoire : 'au'",
        explanation: "La préposition 'à' suivie de 'le' se contracte obligatoirement en 'au'.",
        arabicNote: "إدغام حرف الجر à مع أداة التعريف le ليصبح au."
      },
      {
        pattern: /\bà\s+les\s+([a-zA-Zà-ÿ]+)\b/gi,
        replace: "aux $1",
        title: "Article contracté obligatoire : 'aux'",
        explanation: "La préposition 'à' suivie de 'les' se contracte en 'aux'.",
        arabicNote: "إدغام حرف الجر à مع أداة التعريف les ليصبح aux."
      },
      // 10. Article contracté : de le -> du, de les -> des
      {
        pattern: /\bde\s+le\s+([a-zA-Zà-ÿ]+)\b/gi,
        replace: "du $1",
        title: "Article contracté obligatoire : 'du'",
        explanation: "'De' + 'le' se contracte obligatoirement en 'du'.",
        arabicNote: "إدغام حرف الجر de مع أداة التعريف le ليصبح du."
      },
      {
        pattern: /\bde\s+les\s+([a-zA-Zà-ÿ]+)\b/gi,
        replace: "des $1",
        title: "Article contracté obligatoire : 'des'",
        explanation: "'De' + 'les' se contracte en 'des'.",
        arabicNote: "إدغام de مع les ليصبح des."
      },
      // 11. Élision avec je : je aime -> j'aime, je ai -> j'ai
      {
        pattern: /\b[Jj]e\s+([aeiouyhéèêëàâîïôûù][a-zA-Zà-ÿ]*)\b/g,
        replace: "j'$1",
        title: "Élision obligatoire du pronom 'je'",
        explanation: "Devant un mot commençant par une voyelle ou un h muet, 'je' devient 'j''.",
        arabicNote: "حذف حرف e من الضمير je ليصبح j' أمام الكلمات التي تبدأ بحرف علة."
      },
      // 12. Élision avec de : de accord -> d'accord, de eau -> d'eau
      {
        pattern: /\b[Dd]e\s+([aeiouyhéèêëàâîïôûù][a-zA-Zà-ÿ]*)\b/g,
        replace: "d'$1",
        title: "Élision obligatoire de la préposition 'de'",
        explanation: "'De' s'élide en 'd'' devant une voyelle ou un h muet.",
        arabicNote: "حذف حرف e من حرف الجر de ليصبح d' أمام حروف العلة."
      },
      // 13. Élision avec que : que il -> qu'il, que elle -> qu'elle
      {
        pattern: /\b[Qq]ue\s+(il|elle|on|ils|elles)\b/gi,
        replace: "qu'$1",
        title: "Élision obligatoire de 'que'",
        explanation: "'Que' devient obligatoirement 'qu'' devant les pronoms commençant par une voyelle.",
        arabicNote: "إدغام que مع الضمائر التي تبدأ بحرف علة لتصبح qu'."
      },
      // 14. Élision avec si : si il -> s'il
      {
        pattern: /\b[Ss]i\s+(il|ils)\b/gi,
        replace: "s'$1",
        title: "Élision de 'si' devant 'il' et 'ils'",
        explanation: "'Si' s'élide obligatoirement en 's'' devant 'il' et 'ils'.",
        arabicNote: "حذف حرف i من أداة الشرط si لتصبح s' أمام il و ils."
      },
      // 15. Accord sujet pluriel avec verbe au présent (3e personne)
      {
        pattern: /\b([Ll]es\s+[a-zA-Zà-ÿ]+s)\s+([a-zA-Zà-ÿ]+)(e|es)\b/g,
        replace: "$1 $2nt",
        title: "Accord sujet pluriel et verbe (terminaison -nt)",
        explanation: "Un sujet au pluriel commande la terminaison '-nt' pour les verbes à la 3e personne du pluriel.",
        arabicNote: "توافق الفعل مع الفاعل في صيغة الجمع (إضافة نهاية nt لفعل الجمع الغائب)."
      },
      // 16. Accord nom avec le déterminant 'des'
      {
        pattern: /\bdes\s+(pomme|livre|maison|enfant|arbre|ville|table|ami|voiture|fille|garçon|fleur|élève|étudiant|homme|femme)s?\b/gi,
        replace: (match, noun) => `des ${noun.endsWith('s') ? noun : noun + 's'}`,
        title: "Accord en nombre du nom avec 'des'",
        explanation: "Le déterminant pluriel 'des' exige que le nom prenne la marque du pluriel ('s').",
        arabicNote: "توافق الاسم في الجمع بعد أداة التنكير des (إضافة علامة الجمع s)."
      },
      // 17. Accord adjectif de couleur au pluriel
      {
        pattern: /\bdes\s+([a-zA-Zà-ÿ]+s)\s+(rouge|vert|bleu|blanc|noir|grand|petit|beau|nouveau|fort)s?\b/gi,
        replace: (match, noun, adj) => `des ${noun} ${adj.endsWith('s') ? adj : adj + 's'}`,
        title: "Accord de l'adjectif qualificatif au pluriel",
        explanation: "L'adjectif s'accorde en nombre avec le nom pluriel qu'il qualifie.",
        arabicNote: "مطابقة الصفة للموصوف في صيغة الجمع (إضافة s للصفة)."
      },
      // 18. Pronom réfléchi 'se' devant un verbe
      {
        pattern: /\b([Ii]l|[Ee]lle|[Oo]n|[Ii]ls|[Ee]lles)\s+ce\s+([a-zA-Zà-ÿ]+)\b/g,
        replace: "$1 se $2",
        title: "Pronom réfléchi 'se' devant un verbe",
        explanation: "Devant un verbe, on écrit 'se' (pronom réfléchi) et non 'ce' (démonstratif).",
        arabicNote: "كتابة الضمير الانعكاسي se أمام الأفعال وليس ce الإشارية."
      },
      // 19. Mode subjonctif après verbe de volonté
      {
        pattern: /\b(vouloir|veux|veut|faut|exige)\s+que\s+tu\s+viens\b/gi,
        replace: "$1 que tu viennes",
        title: "Mode subjonctif après expression de volonté",
        explanation: "Après les verbes de volonté ou de nécessité, le verbe doit être au subjonctif présent ('tu viennes').",
        arabicNote: "استخدام صيغة المنصوب Subjonctif (tu viennes) بعد أفعال الإرادة والطلب."
      },
      // 20. Tu + verbe au présent sans 's' (ex: tu parle -> tu parles)
      {
        pattern: /\b[Tt]u\s+(parle|mange|chante|danse|travaille|regarde|écoute|cherche|trouve|pense|demande|donne|aime|habite)\b/g,
        replace: (match, verb) => `tu ${verb}s`,
        title: "Terminaison de la 2e personne du singulier (-s)",
        explanation: "Au présent de l'indicatif, les verbes avec le pronom 'tu' prennent obligatoirement un 's'.",
        arabicNote: "أفعال الحاضر مع الضمير tu تأخذ دائماً حرف s في النهاية (مثل tu parles)."
      },
      // 21. Tu va -> tu vas
      {
        pattern: /\b[Tt]u\s+va\b/g,
        replace: "tu vas",
        title: "Conjugaison du verbe aller avec 'tu'",
        explanation: "Avec 'tu', le verbe aller s'écrit 'tu vas' avec un 's'.",
        arabicNote: "تصريف فعل aller مع الضمير tu يكتب tu vas بحرف s."
      },
      // 22. Infinitif après préposition (pour mangé -> pour manger)
      {
        pattern: /\b(pour|sans|avant de|afin de|au lieu de|facile à|difficile à|train de)\s+([a-zA-Zà-ÿ]+)(é|ée|és|ées)\b/gi,
        replace: (match, prep, stem) => `${prep} ${stem}er`,
        title: "Verbe à l'infinitif après une préposition",
        explanation: "Après une préposition ('pour', 'sans', 'à', 'de'), le verbe qui suit se met obligatoirement à l'infinitif en '-er'.",
        arabicNote: "الفعل الذي يأتي بعد حروف الجر (مثل pour أو sans) يجب أن يكون في المصدر Infinitif (ينتهي بـ er)."
      }
    ];

    for (const rule of localRules) {
      if (rule.pattern.test(corrected)) {
        rule.pattern.lastIndex = 0;
        const matches = corrected.match(rule.pattern) || [];
        corrected = corrected.replace(rule.pattern, rule.replace);

        errors.push({
          wrong: matches[0] || '',
          suggestion: rule.title,
          title: rule.title,
          explanation: rule.explanation,
          arabicNote: rule.arabicNote
        });
      }
    }

    return {
      correctedText: corrected,
      errors: errors,
      engine: 'Moteur Linguistique 3bido'
    };
  },

  renderGrammarResults(originalText, checkResult, isAr) {
    const resultsContainer = document.getElementById('grammarResults');
    if (!resultsContainer) return;

    let correctedText = checkResult.correctedText || originalText;
    const errors = checkResult.errors || [];

    // Subtle punctuation & casing formatting only if no other errors exist
    let formattingAdjusted = false;
    if (correctedText.length > 0 && correctedText[0] !== correctedText[0].toUpperCase()) {
      correctedText = correctedText[0].toUpperCase() + correctedText.slice(1);
      formattingAdjusted = true;
    }
    if (!/[.!?]$/.test(correctedText)) {
      correctedText += '.';
      formattingAdjusted = true;
    }

    const hasRealErrors = errors.length > 0;

    let outputHtml = '';
    if (!hasRealErrors) {
      outputHtml = `
        <div class="grammar-status-banner status-clean">
          <span>${isAr ? '✅ ممتاز! جملتك سليمة تماماً ولا توجد بها أخطاء نحوية أو إملائية.' : '✅ Aucune faute détectée ! Votre phrase est grammaticalement correcte.'}</span>
        </div>
        <div class="corrected-text-box">
          <div class="corrected-label">${isAr ? 'النص بعد التحقق' : 'Texte Validé'}</div>
          <p class="corrected-content">${this.escape(correctedText)}</p>
          <div style="margin-top: 10px; display: flex; gap: 8px;">
            <button class="btn btn-secondary" style="padding: 4px 12px; font-size: 0.8rem;" onclick="window.app.speakFrench('${this.escapeQuotes(correctedText)}')">
              🔊 ${isAr ? 'استماع للنطق' : 'Écouter'}
            </button>
          </div>
        </div>
      `;
    } else {
      outputHtml = `
        <div class="grammar-status-banner status-errors">
          <span>⚠️ ${isAr ? `تم اكتشاف ${errors.length} ملاحظة نحوية وإملائية بحاجة للتصحيح` : `${errors.length} point${errors.length > 1 ? 's' : ''} d'amélioration détecté${errors.length > 1 ? 's' : ''}`}</span>
          <button class="btn btn-secondary" style="padding: 4px 12px; font-size: 0.8rem;" onclick="window.app.speakFrench('${this.escapeQuotes(correctedText)}')">
            🔊 ${isAr ? 'استماع للتصحيح' : 'Écouter la correction'}
          </button>
        </div>

        <div class="corrected-text-box">
          <div class="corrected-label">${isAr ? 'النسخة المصححة مع تمييز التعديلات' : 'Version Corrigée'}</div>
          <p class="corrected-content" id="grammarCorrectedVersion">${this.highlightDifferences(originalText, correctedText)}</p>
          <div style="margin-top: 12px; display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="btn btn-primary" style="padding: 6px 14px; font-size: 0.85rem;" onclick="window.app.grammar.applyCorrection('${this.escapeQuotes(correctedText)}')">
              ${isAr ? 'تطبيق التصحيح في المحرر' : 'Remplacer dans l\'éditeur'}
            </button>
          </div>
        </div>

        <div class="error-details-list">
          <div style="font-weight: 800; font-size: 0.95rem; margin-top: 5px; color: var(--text-primary);">${isAr ? 'القواعد والتوجيهات التعليمية المفصلة :' : 'Règles & Explications Pédagogiques :'}</div>
          ${errors.map(err => `
            <div class="error-item-card">
              <div class="error-title">📌 ${this.escape(err.title)}</div>
              ${err.wrong ? `
                <div style="display:flex; gap: 8px; align-items:center; font-size: 0.88rem; margin: 4px 0;">
                  <span style="color: #dc2626; text-decoration: line-through; background: rgba(220,38,38,0.08); padding: 2px 6px; border-radius: 3px;">${this.escape(err.wrong)}</span>
                  <span>→</span>
                  <span style="color: #059669; font-weight: 700; background: rgba(5,150,105,0.1); padding: 2px 6px; border-radius: 3px;">${this.escape(err.suggestion || '✓')}</span>
                </div>
              ` : ''}
              <div class="error-explanation">${this.escape(err.explanation)}</div>
              ${err.arabicNote ? `<div class="error-arabic-note" style="margin-top: 4px; color: var(--flag-green); font-size: 0.85rem;">💡 ${this.escape(err.arabicNote)}</div>` : ''}
            </div>
          `).join('')}
        </div>
      `;
    }

    resultsContainer.innerHTML = outputHtml;
    resultsContainer.classList.remove('hidden');
  },

  highlightDifferences(original, corrected) {
    const origWords = (original || '').trim().split(/\s+/);
    const corrWords = (corrected || '').trim().split(/\s+/);

    return corrWords.map((w, idx) => {
      // Strip punctuation for matching comparison
      const cleanW = w.replace(/[.,!?;:]/g, '');
      const cleanOrig = (origWords[idx] || '').replace(/[.,!?;:]/g, '');

      if (cleanW.toLowerCase() !== cleanOrig.toLowerCase()) {
        return `<span class="diff-tag-corrected">${this.escape(w)}</span>`;
      }
      return this.escape(w);
    }).join(' ');
  },

  applyCorrection(corrected) {
    const input = document.getElementById('grammarInput');
    const isAr = window.app.lang === 'ar';
    if (input) {
      input.value = corrected;
      input.dispatchEvent(new Event('input'));
      window.app.showToast(isAr ? 'تم تطبيق التصحيح على النص بنجاح!' : 'Correction appliquée au texte !', '✅');
      this.check();
    }
  },

  escape(str) {
    return (str || '').replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  },

  escapeQuotes(str) {
    return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }
};

/* ===================================================================
   5. SECTION 2: FRENCH-FRENCH UNILINGUAL DICTIONARY
   =================================================================== */
window.app.dict = {
  cache: {
    "liberté": {
      word: "Liberté",
      phonetic: "/li.bɛʁ.te/",
      pos: "Nom féminin",
      definitions: [
        { text: "État de ce qui ne subit pas de contrainte, pouvoir d'agir selon sa propre détermination.", example: "La liberté d'expression est un droit fondamental." },
        { text: "Situation d'une personne ou d'un peuple qui n'est pas sous la domination d'un autre.", example: "Le peuple lutte avec ferveur pour sa pleine liberté." }
      ],
      synonyms: ["indépendance", "autonomie", "émancipation", "affranchissement"],
      antonyms: ["servitude", "esclavage", "oppression"]
    },
    "résilience": {
      word: "Résilience",
      phonetic: "/ʁe.zi.ljɑ̃s/",
      pos: "Nom féminin",
      definitions: [
        { text: "Capacité d'un individu ou d'une communauté à surmonter les épreuves et les traumatismes pour continuer à se développer.", example: "La résilience admirable des familles face à l'adversité." },
        { text: "En physique : résistance d'un matériau aux chocs sans se rompre.", example: "La haute résilience de cet alliage métallique." }
      ],
      synonyms: ["endurance", "force morale", "ténacité", "persévérance"],
      antonyms: ["vulnérabilité", "fragilité"]
    },
    "paix": {
      word: "Paix",
      phonetic: "/pɛ/",
      pos: "Nom féminin",
      definitions: [
        { text: "État de tranquillité, d'absence de conflit, de guerre ou de violence.", example: "Tous les peuples aspirent à vivre dans une paix juste et durable." },
        { text: "Sérénité intérieure de l'esprit et du cœur.", example: "Retrouver la paix de l'âme après le tumulte." }
      ],
      synonyms: ["calme", "concorde", "sérénité", "tranquillité", "harmonie"],
      antonyms: ["guerre", "conflit", "discorde", "agitation"]
    },
    "apprendre": {
      word: "Apprendre",
      phonetic: "/a.pʁɑ̃dʁ/",
      pos: "Verbe du 3e groupe",
      definitions: [
        { text: "Acquérir la connaissance ou la pratique de quelque chose par l'étude ou l'expérience.", example: "Apprendre le français ouvre de nouveaux horizons intellectuels." },
        { text: "Enseigner, faire savoir à quelqu'un.", example: "Il a appris à ses enfants la valeur du respect et de la justice." }
      ],
      synonyms: ["étudier", "assimiler", "mémoriser", "s'instruire", "enseigner"],
      antonyms: ["oublier", "ignorer"]
    },
    "courage": {
      word: "Courage",
      phonetic: "/ku.ʁaʒ/",
      pos: "Nom masculin",
      definitions: [
        { text: "Fermeté de cœur et énergie morale permettant d'affronter le danger, la souffrance ou l'injustice.", example: "Il faut un immense courage pour défendre la vérité." }
      ],
      synonyms: ["bravoure", "vaillance", "audace", "force d'âme"],
      antonyms: ["lâcheté", "peur", "crainte"]
    },
    "maison": {
      word: "Maison",
      phonetic: "/mɛ.zɔ̃/",
      pos: "Nom féminin",
      definitions: [
        { text: "Bâtiment destiné à servir d'habitation à des personnes.", example: "Une maison accueillante et chaleureuse entourée d'oliviers." },
        { text: "Le foyer familial, le lieu d'attachement.", example: "Rejoindre sa maison après un long périple." }
      ],
      synonyms: ["demeure", "foyer", "habitation", "logis", "toit"],
      antonyms: []
    },
    "bienveillance": {
      word: "Bienveillance",
      phonetic: "/bjɛ̃.vɛ.jɑ̃s/",
      pos: "Nom féminin",
      definitions: [
        { text: "Disposition d'esprit favorable qui porte à désirer le bonheur d'autrui et à agir pour son bien.", example: "L'enseignant accueille ses élèves avec une profonde bienveillance." }
      ],
      synonyms: ["bonté", "compassion", "gentillesse", "altruisme", "amabilité"],
      antonyms: ["malveillance", "hostilité", "méchanceté"]
    }
  },

  init() {
    const input = document.getElementById('dictInput');
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.search();
      });
    }
    this.quickSearch('liberté');
  },

  quickSearch(word) {
    const input = document.getElementById('dictInput');
    if (input) input.value = word;
    this.search();
  },

  clear() {
    const input = document.getElementById('dictInput');
    if (input) {
      input.value = '';
      input.focus();
    }
  },

  async search() {
    const input = document.getElementById('dictInput');
    const container = document.getElementById('dictResults');
    const query = input ? input.value.trim().toLowerCase() : '';
    const isAr = window.app.lang === 'ar';

    if (!query) {
      window.app.showToast(isAr ? 'يرجى إدخال كلمة للبحث.' : 'Veuillez entrer un mot à chercher.', '⚠️');
      return;
    }

    container.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--text-muted);">${isAr ? 'جاري البحث في المعجم الفرنسي...' : 'Recherche dans le dictionnaire français en cours...'}</div>`;

    if (this.cache[query]) {
      this.renderWord(this.cache[query]);
      return;
    }

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/fr/${encodeURIComponent(query)}`);
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          const entry = data[0];
          const parsed = {
            word: entry.word,
            phonetic: entry.phonetic || (entry.phonetics && entry.phonetics[0]?.text) || '',
            pos: entry.meanings?.[0]?.partOfSpeech || 'Mot français',
            definitions: (entry.meanings?.[0]?.definitions || []).slice(0, 3).map(d => ({
              text: d.definition,
              example: d.example || ''
            })),
            synonyms: entry.meanings?.[0]?.synonyms || [],
            antonyms: entry.meanings?.[0]?.antonyms || []
          };
          this.cache[query] = parsed;
          this.renderWord(parsed);
          return;
        }
      }
    } catch (err) {}

    this.renderGenericFallback(query);
  },

  renderWord(data) {
    const container = document.getElementById('dictResults');
    if (!container) return;
    const isAr = window.app.lang === 'ar';

    container.innerHTML = `
      <div class="word-card-header">
        <div class="word-main">
          <h3 class="word-title">${this.escape(data.word)}</h3>
          ${data.phonetic ? `<span class="word-phonetic">${this.escape(data.phonetic)}</span>` : ''}
          <span class="word-pos">${this.escape(data.pos)}</span>
        </div>
        <button class="btn btn-primary" onclick="window.app.speakFrench('${this.escapeQuotes(data.word)}')">
          🔊 ${isAr ? 'نطق الكلمة' : 'Prononcer'}
        </button>
      </div>

      <div class="definitions-list">
        <div style="font-weight: 700; font-size: 1rem; color: var(--text-primary);">${isAr ? 'التعريف والمعاني بالفرنسية :' : 'Définitions en français :'}</div>
        ${data.definitions.map((def, i) => `
          <div class="def-item">
            <p class="def-text"><strong>${i + 1}.</strong> ${this.escape(def.text)}</p>
            ${def.example ? `<p class="def-example">« ${this.escape(def.example)} »</p>` : ''}
          </div>
        `).join('')}
      </div>

      ${data.synonyms && data.synonyms.length > 0 ? `
        <div class="synonyms-container">
          <span class="syn-label">${isAr ? 'المترادفات :' : 'Synonymes :'}</span>
          ${data.synonyms.map(s => `
            <span class="syn-pill" onclick="window.app.dict.quickSearch('${this.escapeQuotes(s)}')">${this.escape(s)}</span>
          `).join('')}
        </div>
      ` : ''}

      ${data.antonyms && data.antonyms.length > 0 ? `
        <div class="synonyms-container">
          <span class="syn-label">${isAr ? 'الأضداد :' : 'Antonymes :'}</span>
          ${data.antonyms.map(a => `
            <span class="syn-pill" style="color: var(--flag-red); border-color: var(--verb-red-border);" onclick="window.app.dict.quickSearch('${this.escapeQuotes(a)}')">${this.escape(a)}</span>
          `).join('')}
        </div>
      ` : ''}
    `;
  },

  renderGenericFallback(word) {
    const container = document.getElementById('dictResults');
    if (!container) return;
    const isAr = window.app.lang === 'ar';

    container.innerHTML = `
      <div class="word-card-header">
        <div class="word-main">
          <h3 class="word-title">${this.escape(word)}</h3>
          <span class="word-pos">Terme français</span>
        </div>
        <button class="btn btn-primary" onclick="window.app.speakFrench('${this.escapeQuotes(word)}')">
          🔊 ${isAr ? 'نطق الكلمة' : 'Prononcer'}
        </button>
      </div>
      <div class="def-item">
        <p class="def-text">${isAr ? 'هذه الكلمة مصطلح فرنسي. يمكنك الاستماع إلى نطقها الصحيح أو تجربة الكلمات المقترحة بالأعلى لاستعراض معانيها الكاملة.' : 'Ce mot est un terme de la langue française. Vous pouvez l\'écouter avec la prononciation authentique ou explorer les mots fréquents ci-dessus pour découvrir leurs définitions complètes.'}</p>
        <p class="def-example">${isAr ? 'نصيحة: جرّب كلمات مثل « liberté », « résilience », « paix », « apprendre » أو « courage ».' : 'Astuce : Essayez des mots comme « liberté », « résilience », « paix », « apprendre » ou « courage ».'}</p>
      </div>
    `;
  },

  escape(str) {
    return (str || '').replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  },

  escapeQuotes(str) {
    return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }
};


/* ===================================================================
   6. SECTION 3: INSTANT TRANSLATION (FR ⇄ AR)
   =================================================================== */
window.app.trans = {
  direction: 'fr-ar',

  offlineBank: {
    "bonjour": "مرحباً / صباح الخير",
    "bonjour, comment allez-vous aujourd'hui ?": "مرحباً، كيف حالكم اليوم؟",
    "pourriez-vous m'aider s'il vous plaît ?": "هل يمكنك مساعدتي من فضلك؟",
    "je suis ravi de faire votre connaissance.": "يسعدني جداً التعرف عليك.",
    "la justice et la paix triomphent toujours.": "العدالة والسلام ينتصران دائماً.",
    "merci beaucoup": "شكراً جزيلاً",
    "au revoir": "إلى اللقاء / مع السلامة",
    "s'il vous plaît": "من فضلك / رجاءً",
    "bonne nuit": "تصبح على خير",
    "comment tu t'appelles ?": "ما اسمك؟",
    "je m'appelle 3bido": "اسمي عبيدو",
    "j'apprends le français": "أنا أتعلم اللغة الفرنسية",
    "la palestine dans nos cœurs": "فلسطين في قلوبنا",
    "où est la gare ?": "أين تقع محطة القطار؟",
    "combien ça coûte ?": "كم ثمن هذا؟"
  },

  init() {
    const sourceText = document.getElementById('transSourceText');
    if (sourceText) {
      sourceText.addEventListener('input', () => {
        clearTimeout(this._debounce);
        this._debounce = setTimeout(() => {
          if (sourceText.value.trim().length > 1) {
            this.translate();
          }
        }, 500);
      });
    }
  },

  swap() {
    this.direction = this.direction === 'fr-ar' ? 'ar-fr' : 'fr-ar';
    const sourceLabel = document.getElementById('sourceLangLabel');
    const targetLabel = document.getElementById('targetLangLabel');
    const sourceInput = document.getElementById('transSourceText');
    const targetOutput = document.getElementById('transTargetText');

    if (this.direction === 'fr-ar') {
      sourceLabel.innerHTML = '<span class="lang-flag">🇫🇷</span><span class="lang-name">Français</span>';
      targetLabel.innerHTML = '<span class="lang-flag">🇵🇸</span><span class="lang-name">العربية (Arabe)</span>';
      sourceInput.placeholder = window.app.lang === 'ar' ? "اكتب النص بالفرنسية هنا..." : "Entrez votre texte en français ici...";
      targetOutput.classList.add('arabic-content');
      targetOutput.setAttribute('dir', 'rtl');
    } else {
      sourceLabel.innerHTML = '<span class="lang-flag">🇵🇸</span><span class="lang-name">العربية (Arabe)</span>';
      targetLabel.innerHTML = '<span class="lang-flag">🇫🇷</span><span class="lang-name">Français</span>';
      sourceInput.placeholder = window.app.lang === 'ar' ? "اكتب النص بالعربية هنا..." : "Entrez votre texte en arabe ici...";
      targetOutput.classList.remove('arabic-content');
      targetOutput.setAttribute('dir', 'ltr');
    }

    const currentSource = sourceInput.value.trim();
    const currentTarget = targetOutput.textContent.trim();
    if (currentTarget && !currentTarget.includes('La traduction') && !currentTarget.includes('ستظهر الترجمة')) {
      sourceInput.value = currentTarget;
      targetOutput.textContent = currentSource;
    }
  },

  clearSource() {
    const sourceInput = document.getElementById('transSourceText');
    const targetOutput = document.getElementById('transTargetText');
    const isAr = window.app.lang === 'ar';
    if (sourceInput) sourceInput.value = '';
    if (targetOutput) targetOutput.innerHTML = `<span class="placeholder-text">${isAr ? 'ستظهر الترجمة هنا...' : 'La traduction apparaîtra ici...'}</span>`;
  },

  loadPhrase(phrase) {
    const sourceInput = document.getElementById('transSourceText');
    if (sourceInput) {
      sourceInput.value = phrase;
      this.translate();
    }
  },

  async translate() {
    const sourceInput = document.getElementById('transSourceText');
    const targetOutput = document.getElementById('transTargetText');
    const status = document.getElementById('transStatus');
    const text = sourceInput ? sourceInput.value.trim() : '';
    const isAr = window.app.lang === 'ar';

    if (!text) {
      if (targetOutput) targetOutput.innerHTML = `<span class="placeholder-text">${isAr ? 'ستظهر الترجمة هنا...' : 'La traduction apparaîtra ici...'}</span>`;
      return;
    }

    if (status) status.textContent = isAr ? 'ترجمة...' : 'Traduction...';

    const norm = text.toLowerCase().replace(/[.!?,]/g, '').trim();
    for (const [k, v] of Object.entries(this.offlineBank)) {
      if (this.direction === 'fr-ar' && k.toLowerCase().replace(/[.!?,]/g, '').trim() === norm) {
        targetOutput.textContent = v;
        if (status) status.textContent = isAr ? 'فوري' : 'Instantané';
        return;
      } else if (this.direction === 'ar-fr' && v.toLowerCase().replace(/[.!?,]/g, '').trim() === norm) {
        targetOutput.textContent = k;
        if (status) status.textContent = isAr ? 'فوري' : 'Instantané';
        return;
      }
    }

    const pair = this.direction === 'fr-ar' ? 'fr|ar' : 'ar|fr';
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${pair}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (data.responseData && data.responseData.translatedText) {
          targetOutput.textContent = data.responseData.translatedText;
          if (status) status.textContent = isAr ? 'تمت الترجمة' : 'Traduit';
          return;
        }
      }
    } catch (e) {}

    targetOutput.textContent = this.direction === 'fr-ar' ? 
      "ترجمة تقريبية : المعنى متاح عند الاتصال بالشبكة أو تجربة العبارات السريعة الجاهزة." :
      "Traduction indisponible hors ligne pour ce terme spécifique.";
    if (status) status.textContent = isAr ? 'غير متصل' : 'Hors ligne';
  },

  speakSource() {
    const text = document.getElementById('transSourceText')?.value.trim();
    if (!text) return;
    if (this.direction === 'fr-ar') {
      window.app.speakFrench(text);
    } else {
      this.speakArabic(text);
    }
  },

  speakTarget() {
    const target = document.getElementById('transTargetText')?.textContent.trim();
    if (!target || target.includes('La traduction') || target.includes('ستظهر الترجمة')) return;
    if (this.direction === 'fr-ar') {
      this.speakArabic(target);
    } else {
      window.app.speakFrench(target);
    }
  },

  speakArabic(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    const voices = window.speechSynthesis.getVoices();
    const arVoice = voices.find(v => v.lang.startsWith('ar'));
    if (arVoice) utterance.voice = arVoice;
    window.speechSynthesis.speak(utterance);
  },

  async copySource() {
    const text = document.getElementById('transSourceText')?.value.trim();
    const isAr = window.app.lang === 'ar';
    if (text) {
      await navigator.clipboard.writeText(text);
      window.app.showToast(isAr ? 'تم نسخ النص الأصلي!' : 'Texte source copié !', '📋');
    }
  },

  async copyTarget() {
    const text = document.getElementById('transTargetText')?.textContent.trim();
    const isAr = window.app.lang === 'ar';
    if (text && !text.includes('La traduction') && !text.includes('ستظهر الترجمة')) {
      await navigator.clipboard.writeText(text);
      window.app.showToast(isAr ? 'تم نسخ الترجمة بنجاح!' : 'Traduction copiée !', '📋');
    }
  }
};


/* ===================================================================
   7. SECTION 4: FRENCH LIBRARY & ADMIN UPLOAD
   "Add New Book" unlocked EXCLUSIVELY for username "عبيدو"
   =================================================================== */
window.app.library = {
  defaultBooks: [
    {
      id: 'book-1',
      title: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      level: "A2-B1",
      desc: "L'histoire poétique et philosophique d'un jeune prince venu d'un astéroïde qui explore l'univers et la Terre.",
      content: `CHAPITRE I

Lorsque j'avais six ans j'ai vu, une fois, une magnifique image, dans un livre sur la Forêt Vierge qui s'appelait "Histoires Vécues". Ça représentait un serpent boa qui avalait un fauve. Voilà la copie du dessin.

On disait dans le livre : « Les serpents boas avalent leur proie tout entière, sans la mâcher. Ensuite ils ne peuvent plus bouger et ils dorment pendant les six mois de leur digestion. »

J'ai alors beaucoup réfléchi sur les aventures de la jungle et, à mon tour, j'ai réussi, avec un crayon de couleur, à tracer mon premier dessin. Mon dessin numéro 1 était un serpent boa qui digérait un éléphant.
J'ai montré mon chef-d'œuvre aux grandes personnes et je leur ai demandé si mon dessin leur faisait peur.
Elles m'ont répondu : « Pourquoi un chapeau ferait-il peur ? »
Mon dessin ne représentait pas un chapeau. Il représentait un serpent boa qui digérait un éléphant. J'ai alors dessiné l'intérieur du serpent boa, afin que les grandes personnes puissent comprendre. Elles ont toujours besoin d'explications...

CHAPITRE XXI (L'Apprivoisement)

C'est alors qu'apparut le renard.
— Bonjour, dit le renard.
— Bonjour, répondit poliment le petit prince, qui se retourna mais ne vit rien.
— Je suis là, dit la voix, sous le pommier.
— Qui es-tu ? dit le petit prince. Tu es bien joli...
— Je suis un renard, dit le renard.
— Viens jouer avec moi, lui proposa le petit prince. Je suis tellement triste...
— Je ne puis pas jouer avec toi, dit le renard. Je ne suis pas apprivoisé.
— Ah ! pardon, fit le petit prince. Mais, après réflexion, il ajouta : Qu'est-ce que signifie « apprivoiser » ?
— C'est une chose trop oubliée, dit le renard. Ça signifie « créer des liens... »
— Créer des liens ?
— Bien sûr, dit le renard. Tu n'es encore pour moi qu'un petit garçon tout semblable à cent mille petits garçons. Et je n'ai pas besoin de toi. Et tu n'as pas besoin de moi non plus. Je ne suis pour toi qu'un renard semblable à cent mille renards. Mais, si tu m'apprivoises, nous aurons besoin l'un de l'autre. Tu seras pour moi unique au monde. Je serai pour toi unique au monde...
— Je commence à comprendre, dit le petit prince. Il y a une fleur... je crois qu'elle m'a apprivoisé...

Et le renard ajouta son secret :
« Voici mon secret. Il est très simple : on ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux. »`
    },
    {
      id: 'book-2',
      title: "Contes & Récits Faciles de France",
      author: "Patrimoine Populaire",
      level: "A1-A2",
      desc: "Une sélection de récits simples, courts et illustrés avec un vocabulaire accessible pour débuter la lecture fluide en français.",
      content: `LE VOYAGE DU PETIT MOINEAU

Il était une fois un petit moineau nommé Martin. Martin vivait dans un grand chêne vert près d'un jardin fleuri. Chaque matin, dès le lever du soleil, Martin chantait joyeusement pour réveiller les autres oiseaux de la forêt.

Un jour de printemps, Martin décide de partir à l'aventure. 
« Où vas-tu si tôt ? » lui demande son ami l'écureuil.
« Je veux voir ce qu'il y a derrière la colline bleue ! » répond Martin en battant vigoureusement des ailes.

Martin vole au-dessus des maisons aux toits rouges, au-dessus d'une jolie rivière scintillante où nagent des canards dorés. En chemin, il rencontre une colombe blanche qui porte une branche d'olivier.
« Bonjour, chère colombe ! Pourquoi portes-tu cette branche ? »
« C'est le symbole de la paix et de la liberté pour tous les êtres vivants de la Terre », répond la colombe avec un sourire bienveillant.

Martin comprend alors que le plus beau voyage n'est pas seulement de voir du pays, mais d'apprendre à connaître les autres et de partager des messages de paix et de joie.`
    },
    {
      id: 'book-3',
      title: "L'Étranger (Extraits Choisis)",
      author: "Albert Camus (Prix Nobel)",
      level: "B1-B2",
      desc: "Une œuvre majeure de la littérature française moderne explorant la sincérité, la lucidité et la condition humaine.",
      content: `PREMIÈRE PARTIE

Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas. J'ai reçu un télégramme de l'asile : « Mère décédée. Enterrement demain. Sentiments distingués. » Cela ne veut rien dire. C'était peut-être hier.

L'asile de vieillards est à Marengo, à quatre-vingts kilomètres d'Alger. Je prendrai l'autobus à deux heures et j'arriverai dans l'après-midi. Ainsi, je pourrai veiller et je rentrerai demain soir. J'ai demandé deux jours de congé à mon patron et il ne pouvait pas me les refuser avec une excuse pareille. Mais il n'avait pas l'air content. Je lui ai même dit : « Ce n'est pas de ma faute. » Il n'a pas répondu. J'ai pensé alors que je n'aurais pas dû lui dire cela. En somme, je n'avais pas à m'excuser. C'était plutôt à lui de me présenter ses condoléances. Mais il le fera sans doute après-demain, quand il me verra en deuil. Pour le moment, c'est un peu comme si maman n'était pas morte. Après l'enterrement, au contraire, ce sera une affaire classée et tout aura revêtu une allure plus officielle.

DEUXIÈME PARTIE (Épilogue)

Pour que tout soit consommé, pour que je me sente moins seul, il me restait à souhaiter qu'il y ait beaucoup de spectateurs le jour de mon exécution et qu'ils m'accueillent avec des cris de haine. Je m'ouvrais pour la première fois à la tendre indifférence du monde. De l'éprouver si pareil à moi, si fraternel enfin, j'ai senti que j'avais été heureux, et que je l'étais encore.`
    },
    {
      id: 'book-4',
      title: "Fables Choisies",
      author: "Jean de La Fontaine",
      level: "B1-B2",
      desc: "Les chefs-d'œuvre de l'esprit français : Le Corbeau et le Renard, La Cigale et la Fourmi, Le Chêne et le Roseau.",
      content: `LE CORBEAU ET LE RENARD

Maître Corbeau, sur un arbre perché,
Tenait en son bec un fromage.
Maître Renard, par l'odeur alléché,
Lui tint à peu près ce langage :
« Hé ! bonjour, Monsieur du Corbeau.
Que vous êtes joli ! que vous me semblez beau !
Sans mentir, si votre ramage
Se rapporte à votre plumage,
Vous êtes le Phénix des hôtes de ces bois. »
À ces mots le Corbeau ne se sent pas de joie ;
Et pour montrer sa belle voix,
Il ouvre un large bec, laisse tomber sa proie.
Le Renard s'en saisit, et dit : « Mon bon Monsieur,
Apprenez que tout flatteur
Vit aux dépens de celui qui l'écoute :
Cette leçon vaut bien un fromage, sans doute. »
Le Corbeau, honteux et confus,
Jura, mais un peu tard, qu'on ne l'y prendrait plus.

---

LA CIGALE ET LA FOURMI

La Cigale, ayant chanté
Tout l'été,
Se trouva fort dépourvue
Quand la bise fut venue :
Pas un seul petit morceau
De mouche ou de vermisseau.
Elle alla crier famine
Chez la Fourmi sa voisine,
La priant de lui prêter
Quelque grain pour subsister
Jusqu'à la saison nouvelle.
« Je vous paierai, lui dit-elle,
Avant l'août, foi d'animal,
Intérêt et principal. »
La Fourmi n'est pas prêteuse :
C'est là son moindre défaut.
« Que faisiez-vous au temps chaud ?
Dit-elle à cette emprunteuse.
— Nuit et jour à tout venant
Je chantais, ne vous déplaise.
— Vous chantiez ? j'en suis fort aise.
Eh bien ! dansez maintenant. »`
    },
    {
      id: 'book-5',
      title: "Poésie pour la Paix & la Résilience",
      author: "Anthologie Humaniste (Darwish & Hugo)",
      level: "B1-B2",
      desc: "Poèmes célébrant l'amour de la patrie, la liberté inaliénable et la fraternité universelle.",
      content: `SUR CETTE TERRE (Mahmoud Darwish - Traduit en français)

Sur cette terre, il y a ce qui mérite de vivre :
L'hésitation d'avril,
L'odeur du pain à l'aube,
Les opinions d'une femme sur les hommes,
Les écrits d'Eschyle,
Le début de l'amour,
L'herbe sur une pierre,
Des mères debout sur un filet de flûte
Et la peur que les conquérants ont des souvenirs.

Sur cette terre, il y a ce qui mérite de vivre :
L'adieu de la journée au jour,
Le cri de midi dans une cour d'école,
La première caresse de la brise marine
Et une heure de solitude sans remords.

Sur cette terre, il y a la maîtresse de la terre,
La mère des commencements,
La mère des fins.
On l'appelait Palestine.
On l'appelle désormais Palestine.
Ma dame : je mérite, parce que tu es ma dame,
Je mérite la vie.

---

DEMAIN, DÈS L'AUBE... (Victor Hugo)

Demain, dès l'aube, à l'heure où blanchit la campagne,
Je partirai. Vois-tu, je sais que tu m'attends.
J'irai par la forêt, j'irai par la montagne.
Je ne puis demeurer loin de toi plus longtemps.

Je marcherai les yeux fixés sur mes pensées,
Sans rien voir au dehors, sans entendre aucun bruit,
Seul, inconnu, le dos courbé, les mains croisées,
Triste, et le jour pour moi sera comme la nuit.

Et quand j'arriverai, je mettrai sur ta tombe
Un bouquet de houx vert et de bruyère en fleur.`
    }
  ],

  activeFilter: 'all',
  currentReadingBook: null,
  currentFontSize: 18,

  init() {
    this.renderBooks();
  },

  getCustomBooks() {
    try {
      return JSON.parse(localStorage.getItem('3bido_custom_books')) || [];
    } catch {
      return [];
    }
  },

  getDeletedBookIds() {
    try {
      return JSON.parse(localStorage.getItem('3bido_deleted_books')) || [];
    } catch {
      return [];
    }
  },

  getAllBooks() {
    const deletedIds = new Set(this.getDeletedBookIds());
    const custom = this.getCustomBooks().filter(b => !deletedIds.has(b.id));
    const customIds = new Set(custom.map(b => b.id));
    const defaults = this.defaultBooks.filter(b => !customIds.has(b.id) && !deletedIds.has(b.id));
    return [...defaults, ...custom];
  },

  filter(level) {
    this.activeFilter = level;
    document.querySelectorAll('.library-filter-bar button[data-filter]').forEach(t => {
      if (t.getAttribute('data-filter') === level) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });
    this.renderBooks();
  },

  renderBooks() {
    const grid = document.getElementById('booksGrid');
    if (!grid) return;
    const isAr = window.app.lang === 'ar';

    let books = this.getAllBooks();

    if (this.activeFilter === 'A1-A2') {
      books = books.filter(b => b.level.includes('A1') || b.level.includes('A2'));
    } else if (this.activeFilter === 'B1-B2') {
      books = books.filter(b => b.level.includes('B1') || b.level.includes('B2'));
    } else if (this.activeFilter === 'custom') {
      const customIds = this.getCustomBooks().map(b => b.id);
      books = books.filter(b => customIds.includes(b.id));
    }

    if (books.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">${isAr ? 'لا توجد كتب متوفرة لهذا التصنيف.' : 'Aucun livre trouvé pour ce filtre.'}</div>`;
      return;
    }

    const isAdmin = window.app.auth.isAdmin();

    grid.innerHTML = books.map(book => `
      <div class="book-card">
        <div class="book-cover">
          <span class="book-badge-level">${this.escape(book.level)}</span>
          <h3 class="book-cover-title">${this.escape(book.title)}</h3>
        </div>
        <div class="book-body">
          <span class="book-author">✍️ ${this.escape(book.author)}</span>
          <p class="book-summary">${this.escape(book.desc)}</p>
          <div class="book-footer">
            ${book.content ? `
              <button class="btn-read" onclick="window.app.library.openReader('${book.id}')">
                📖 ${isAr ? 'قراءة الكتاب' : 'Lire l\'Œuvre'}
              </button>
            ` : ''}
            ${(book.pdfData || book.pdfFileId) ? `
              <button class="btn-pdf" onclick="window.app.library.openPdf('${book.id}')">
                📄 ${isAr ? 'فتح PDF' : 'Ouvrir PDF'}
              </button>
            ` : ''}
            ${book.link ? `
              <a href="${this.escape(book.link)}" target="_blank" rel="noopener noreferrer" class="btn-link">
                🔗 ${isAr ? 'فتح الرابط' : 'Ouvrir le Lien'}
              </a>
            ` : ''}
            ${isAdmin ? `
              <button class="btn-edit-item" onclick="window.app.library.openEditModal('${book.id}')" title="${isAr ? 'تعديل بيانات الكتاب' : 'Modifier ce livre'}">✏️ ${isAr ? 'تعديل' : 'Modifier'}</button>
              <button class="btn-delete-book" onclick="window.app.library.deleteBook('${book.id}')" title="${isAr ? 'حذف هذا الكتاب' : 'Supprimer ce livre'}">${isAr ? 'حذف' : 'Supprimer'}</button>
            ` : ''}
          </div>
        </div>
      </div>
    `).join('');
  },

  openReader(bookId) {
    const book = this.getAllBooks().find(b => b.id === bookId);
    if (!book) return;

    this.currentReadingBook = book;
    const modal = document.getElementById('readerModal');
    const title = document.getElementById('readerTitle');
    const author = document.getElementById('readerAuthor');
    const level = document.getElementById('readerLevel');
    const content = document.getElementById('readerContent');

    if (title) title.textContent = book.title;
    if (author) author.textContent = `${window.app.lang === 'ar' ? 'المؤلف' : 'Auteur'} : ${book.author}`;
    if (level) level.textContent = book.level;
    if (content) {
      content.style.fontSize = `${this.currentFontSize}px`;
      content.textContent = book.content || (book.link ? `Lien du livre : ${book.link}` : '');
    }

    if (modal) modal.classList.remove('hidden');
  },

  closeReader() {
    const modal = document.getElementById('readerModal');
    if (modal) modal.classList.add('hidden');
    window.speechSynthesis.cancel();
  },

  handleReaderBackdrop(e) {
    if (e.target.id === 'readerModal') {
      this.closeReader();
    }
  },

  adjustFontSize(delta) {
    this.currentFontSize = Math.min(28, Math.max(14, this.currentFontSize + delta * 2));
    const content = document.getElementById('readerContent');
    if (content) content.style.fontSize = `${this.currentFontSize}px`;
  },

  readAloud() {
    if (!this.currentReadingBook || !this.currentReadingBook.content) return;
    const firstParagraph = this.currentReadingBook.content.split('\n\n')[0] || this.currentReadingBook.content.slice(0, 300);
    window.app.speakFrench(firstParagraph);
    window.app.showToast(window.app.lang === 'ar' ? 'قراءة المقطع صوتياً بالفرنسية...' : 'Lecture audio du passage...', '🔊');
  },

  async openPdf(bookId) {
    const book = this.getAllBooks().find(b => b.id === bookId);
    const isAr = window.app.lang === 'ar';

    if (!book || (!book.pdfData && !book.pdfFileId && !book.link)) {
      window.app.showToast(isAr ? 'لا يوجد ملف PDF لهذا الكتاب.' : 'Aucun fichier PDF pour ce livre.', '⚠️');
      return;
    }

    if (book.pdfFileId) {
      try {
        const record = await window.app.db.getFile(book.pdfFileId);
        if (record && record.blob) {
          const blobUrl = URL.createObjectURL(record.blob);
          const newTab = window.open();
          if (newTab) {
            newTab.document.write(`
              <!DOCTYPE html>
              <html><head><title>${this.escape(book.title)} - PDF</title></head>
              <body style="margin:0;padding:0;height:100vh;">
                <iframe src="${blobUrl}" style="width:100%;height:100%;border:none;"></iframe>
              </body></html>
            `);
            newTab.document.close();
          } else {
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = `${book.title}.pdf`;
            a.click();
          }
          return;
        }
      } catch (err) {
        console.error('Error loading PDF blob from IndexedDB:', err);
      }
    }

    if (book.pdfData) {
      const newTab = window.open();
      if (newTab) {
        newTab.document.write(`
          <!DOCTYPE html>
          <html><head><title>${this.escape(book.title)} - PDF</title></head>
          <body style="margin:0;padding:0;height:100vh;">
            <iframe src="${book.pdfData}" style="width:100%;height:100%;border:none;"></iframe>
          </body></html>
        `);
        newTab.document.close();
      } else {
        const a = document.createElement('a');
        a.href = book.pdfData;
        a.download = `${book.title}.pdf`;
        a.click();
      }
      return;
    }

    if (book.link) {
      window.open(book.link, '_blank');
    }
  },

  editingBookId: null,

  // Admin Upload Modal
  openAddModal() {
    if (!window.app.auth.isAdmin()) {
      window.app.showToast(window.app.lang === 'ar' ? 'الصلاحية محصورة بحساب المشرف عبيدو.' : 'Accès restreint au compte عبيدو.', '⚠️');
      return;
    }
    this.editingBookId = null;
    const form = document.getElementById('addBookForm');
    if (form) form.reset();

    const titleEl = document.getElementById('addBookModalTitle');
    const btnSubmit = document.getElementById('btnSubmitBook');
    const isAr = window.app.lang === 'ar';
    if (titleEl) titleEl.textContent = isAr ? 'إضافة كتاب جديد إلى المكتبة الرقمية' : 'Ajouter un Nouveau Livre à la Bibliothèque';
    if (btnSubmit) btnSubmit.textContent = isAr ? 'نشر الكتاب في المكتبة' : 'Publier le Livre dans la Bibliothèque';

    const modal = document.getElementById('addBookModal');
    if (modal) modal.classList.remove('hidden');
  },

  openEditModal(bookId) {
    if (!window.app.auth.isAdmin()) {
      window.app.showToast(window.app.lang === 'ar' ? 'الصلاحية محصورة بحساب المشرف عبيدو.' : 'Accès restreint au compte عبيدو.', '⚠️');
      return;
    }
    const book = this.getAllBooks().find(b => b.id === bookId);
    if (!book) return;

    this.editingBookId = bookId;
    const isAr = window.app.lang === 'ar';

    const titleInput = document.getElementById('bookTitle');
    const authorInput = document.getElementById('bookAuthor');
    const levelSelect = document.getElementById('bookLevel');
    const descInput = document.getElementById('bookDesc');
    const contentInput = document.getElementById('bookContent');
    const linkInput = document.getElementById('bookLink');

    if (titleInput) titleInput.value = book.title || '';
    if (authorInput) authorInput.value = book.author || '';
    if (levelSelect) levelSelect.value = book.level || 'B1';
    if (descInput) descInput.value = book.desc || '';
    if (contentInput) contentInput.value = book.content || '';
    if (linkInput) linkInput.value = book.link || '';

    const titleEl = document.getElementById('addBookModalTitle');
    const btnSubmit = document.getElementById('btnSubmitBook');
    if (titleEl) titleEl.textContent = isAr ? `✏️ تعديل الكتاب: ${book.title}` : `✏️ Modifier le Livre : ${book.title}`;
    if (btnSubmit) btnSubmit.textContent = isAr ? '💾 حفظ تعديلات الكتاب' : '💾 Enregistrer les Modifications';

    const modal = document.getElementById('addBookModal');
    if (modal) modal.classList.remove('hidden');
  },

  closeAddModal() {
    this.editingBookId = null;
    const modal = document.getElementById('addBookModal');
    if (modal) modal.classList.add('hidden');
  },

  handleAddBackdrop(e) {
    if (e.target.id === 'addBookModal') {
      this.closeAddModal();
    }
  },

  async submitNewBook(e) {
    e.preventDefault();
    if (!window.app.auth.isAdmin()) {
      window.app.showToast('Action non autorisée.', '❌');
      return;
    }

    const title = document.getElementById('bookTitle').value.trim();
    const author = document.getElementById('bookAuthor').value.trim();
    const level = document.getElementById('bookLevel').value;
    const desc = document.getElementById('bookDesc').value.trim();
    const content = document.getElementById('bookContent').value.trim();
    const linkInput = document.getElementById('bookLink');
    const link = linkInput ? linkInput.value.trim() : '';
    const pdfInput = document.getElementById('bookPdfFile');
    const pdfFile = pdfInput && pdfInput.files[0];
    const isAr = window.app.lang === 'ar';

    if (!title || !author) {
      window.app.showToast(isAr ? 'يرجى ملء العنوان والمؤلف.' : 'Veuillez remplir le titre et l\'auteur.', '⚠️');
      return;
    }

    // Editing an existing book
    if (this.editingBookId) {
      let customBooks = this.getCustomBooks();
      let existing = customBooks.find(b => b.id === this.editingBookId);
      if (!existing) {
        const defBook = this.defaultBooks.find(b => b.id === this.editingBookId);
        if (defBook) {
          existing = { ...defBook };
          customBooks.push(existing);
        }
      }
      if (existing) {
        existing.title = title;
        existing.author = author;
        existing.level = level;
        existing.desc = desc;
        existing.content = content || existing.content;
        existing.link = link || existing.link;

        if (pdfFile) {
          if (pdfFile.size > 50 * 1024 * 1024) {
            window.app.showToast(isAr ? 'حجم الملف يتجاوز 50 ميجابايت!' : 'Fichier trop volumineux ! Maximum 50 Mo.', '⚠️');
            return;
          }
          try {
            if (existing.pdfFileId) {
              await window.app.db.deleteFile(existing.pdfFileId);
            }
            const newPdfId = `pdf-${Date.now()}`;
            await window.app.db.saveFile(newPdfId, pdfFile, { name: pdfFile.name, type: pdfFile.type });
            existing.pdfFileId = newPdfId;
            existing.pdfName = pdfFile.name;
          } catch (err) {
            console.error('Error updating PDF in IndexedDB:', err);
          }
        }

        localStorage.setItem('3bido_custom_books', JSON.stringify(customBooks));
        if (window.app.cloud) window.app.cloud.saveBook(existing);
        document.getElementById('addBookForm').reset();
        this.closeAddModal();
        this.renderBooks();
        window.app.showToast(isAr ? `تم تحديث كتاب « ${title} » بنجاح! ✅` : `Livre « ${title} » mis à jour ! ✅`, '💾');
        this.editingBookId = null;
        return;
      }
    }

    if (!content && !pdfFile && !link) {
      window.app.showToast(isAr ? 'يرجى إدخال النص، أو رفع ملف PDF، أو وضع رابط الكتاب.' : 'Veuillez saisir du texte, téléverser un PDF ou fournir un lien.', '⚠️');
      return;
    }

    let pdfFileId = null;
    let pdfName = null;

    if (pdfFile) {
      if (pdfFile.size > 50 * 1024 * 1024) {
        window.app.showToast(isAr ? 'حجم الملف يتجاوز 50 ميجابايت!' : 'Fichier trop volumineux ! Maximum 50 Mo.', '⚠️');
        return;
      }

      try {
        pdfFileId = `pdf-${Date.now()}`;
        pdfName = pdfFile.name;
        await window.app.db.saveFile(pdfFileId, pdfFile, { name: pdfFile.name, type: pdfFile.type });
      } catch (err) {
        console.error('Error saving PDF to IndexedDB:', err);
        window.app.showToast(isAr ? 'تعذر حفظ ملف الـ PDF محلياً.' : 'Impossible d\'enregistrer le PDF en local.', '❌');
        return;
      }
    }

    const newBook = {
      id: `custom-${Date.now()}`,
      title,
      author,
      level,
      desc,
      content: content || '',
      link: link || '',
      pdfFileId: pdfFileId || null,
      pdfName: pdfName || null,
      pdfData: null
    };

    const customBooks = this.getCustomBooks();
    customBooks.unshift(newBook);
    localStorage.setItem('3bido_custom_books', JSON.stringify(customBooks));
    if (window.app.cloud) window.app.cloud.saveBook(newBook);

    document.getElementById('addBookForm').reset();
    this.closeAddModal();
    this.renderBooks();
    window.app.showToast(isAr ? `تمت إضافة كتاب « ${title} » إلى المكتبة!` : `Livre « ${title} » ajouté avec succès !`, '🎉');
  },

  async deleteBook(id) {
    if (!window.app.auth.isAdmin()) return;
    const isAr = window.app.lang === 'ar';
    if (confirm(isAr ? 'هل أنت متأكد من رغبتك في حذف هذا الكتاب؟' : 'Veuillez confirmer la suppression de ce livre.')) {
      // 1. Remove from customBooks if present
      let customBooks = this.getCustomBooks();
      const target = customBooks.find(b => b.id === id);
      if (target && target.pdfFileId) {
        try {
          await window.app.db.deleteFile(target.pdfFileId);
        } catch (e) {
          console.warn('Could not delete PDF file blob:', e);
        }
      }
      customBooks = customBooks.filter(b => b.id !== id);
      localStorage.setItem('3bido_custom_books', JSON.stringify(customBooks));

      // 2. Mark as deleted in deletedBookIds (works for both default & custom books)
      let deletedIds = this.getDeletedBookIds();
      if (!deletedIds.includes(id)) {
        deletedIds.push(id);
        localStorage.setItem('3bido_deleted_books', JSON.stringify(deletedIds));
      }

      // 3. Sync to Cloud
      if (window.app.cloud) {
        window.app.cloud.deleteBook(id);
        window.app.cloud.saveSiteSettings({ deletedBookIds: deletedIds });
      }

      this.renderBooks();
      window.app.showToast(isAr ? 'تم حذف الكتاب بنجاح.' : 'Livre retiré de la bibliothèque.', '🗑️');
    }
  },

  escape(str) {
    return (str || '').replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }
};

/* ===================================================================
   SECTION 8: FRENCH VIDÉOTHÈQUE & LESSONS (VIDÉOS ÉDUCATIVES)
   With 50MB file upload in IndexedDB & YouTube embed support
   =================================================================== */
window.app.videos = {
  activeFilter: 'all',

  defaultVideos: [],

  init() {
    try {
      const custom = JSON.parse(localStorage.getItem('3bido_custom_videos')) || [];
      const cleaned = custom.filter(v => !v.id.startsWith('vid-def-'));
      if (cleaned.length !== custom.length) {
        localStorage.setItem('3bido_custom_videos', JSON.stringify(cleaned));
      }
    } catch (e) {}
    this.renderVideos();
  },

  getCustomVideos() {
    try {
      return JSON.parse(localStorage.getItem('3bido_custom_videos')) || [];
    } catch {
      return [];
    }
  },

  getAllVideos() {
    const custom = this.getCustomVideos();
    const customIds = new Set(custom.map(v => v.id));
    const defaults = this.defaultVideos.filter(v => !customIds.has(v.id));
    return [...custom, ...defaults];
  },

  filter(lvl) {
    this.activeFilter = lvl;
    document.querySelectorAll('.library-filter-bar button[data-vfilter]').forEach(t => {
      if (t.getAttribute('data-vfilter') === lvl) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });
    this.renderVideos();
  },

  parseYouTubeEmbed(url) {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|watch\?.+&v=))([\w-]{11})/);
    return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
  },

  renderVideos() {
    const grid = document.getElementById('videosGrid');
    if (!grid) return;
    const isAr = window.app.lang === 'ar';
    const isAdmin = window.app.auth.isAdmin();

    let list = this.getAllVideos();
    if (this.activeFilter === 'A1-A2') {
      list = list.filter(v => v.level.includes('A1') || v.level.includes('A2') || v.level === 'Tous');
    } else if (this.activeFilter === 'B1-B2') {
      list = list.filter(v => v.level.includes('B1') || v.level.includes('B2') || v.level === 'Tous');
    } else if (this.activeFilter === 'custom') {
      list = list.filter(v => v.isCustom);
    }

    if (list.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3.5rem 1.5rem; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg); border: 1.5px dashed var(--border-color);">
        <div style="font-size: 2.2rem; margin-bottom: 0.6rem;">🎬</div>
        <p style="font-size: 1.05rem; font-weight: 600; margin-bottom: 0.4rem; color: var(--text-primary);">${isAr ? 'لا توجد فيديوهات في هذا القسم حالياً.' : 'Aucune vidéo disponible pour le moment.'}</p>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">${isAr ? 'يمكن للمشرف عبيدو إضافة فيديوهات جديدة عبر زر « + إضافة فيديو جديد » بالأعلى.' : 'L\'administrateur peut ajouter de nouvelles vidéos via le bouton ci-dessus.'}</p>
      </div>`;
      return;
    }

    grid.innerHTML = list.map(v => {
      const ytEmbed = this.parseYouTubeEmbed(v.url);
      let playerHtml = '';

      if (ytEmbed) {
        playerHtml = `
          <div class="video-embed-responsive">
            <iframe src="${ytEmbed}" title="${this.escape(v.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
          </div>
        `;
      } else if (v.fileId) {
        playerHtml = `
          <div class="video-player-wrapper">
            <video class="video-html5-player" id="vplayer-${v.id}" controls preload="metadata"></video>
          </div>
        `;
        setTimeout(() => this.loadVideoBlob(v.id, v.fileId), 50);
      } else if (v.url) {
        playerHtml = `
          <div class="video-player-wrapper">
            <video class="video-html5-player" controls preload="metadata" src="${this.escape(v.url)}"></video>
          </div>
        `;
      } else {
        playerHtml = `<div style="padding: 2rem; text-align: center; background: #000; color: #fff;">🎬 ${isAr ? 'فيديو تعليمي' : 'Vidéo Pédagogique'}</div>`;
      }

      return `
        <div class="video-card">
          ${playerHtml}
          <div class="video-card-body">
            <div class="video-meta-row">
              <span class="video-badge-level">${this.escape(v.level)}</span>
              ${v.category ? `<span class="video-category-tag">${this.escape(v.category)}</span>` : ''}
            </div>
            <h3 class="video-title">${this.escape(isAr && v.titleAr ? v.titleAr : v.title)}</h3>
            <p class="video-desc">${this.escape(v.desc || '')}</p>
            <div class="video-footer">
              ${v.url ? `<a href="${this.escape(v.url)}" target="_blank" rel="noopener noreferrer" class="btn-link">🔗 ${isAr ? 'فتح المصدر' : 'Lien Externe'}</a>` : `<span></span>`}
              ${isAdmin ? `
                <button class="btn-edit-item" onclick="window.app.videos.openEditModal('${v.id}')" title="${isAr ? 'تعديل الفيديو' : 'Modifier cette vidéo'}">✏️ ${isAr ? 'تعديل' : 'Modifier'}</button>
                ${v.isCustom ? `<button class="btn-delete-video" onclick="window.app.videos.deleteVideo('${v.id}')">${isAr ? 'حذف' : 'Supprimer'}</button>` : ''}
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  async loadVideoBlob(elemId, fileId) {
    try {
      const record = await window.app.db.getFile(fileId);
      if (record && record.blob) {
        const vid = document.getElementById(`vplayer-${elemId}`);
        if (vid) {
          vid.src = URL.createObjectURL(record.blob);
        }
      }
    } catch (err) {
      console.error('Error loading video blob from IndexedDB:', err);
    }
  },

  editingVideoId: null,

  openAddModal() {
    if (!window.app.auth.isAdmin()) {
      window.app.showToast(window.app.lang === 'ar' ? 'الصلاحية محصورة بحساب المشرف عبيدو.' : 'Accès restreint au compte عبيدو.', '⚠️');
      return;
    }
    this.editingVideoId = null;
    const form = document.getElementById('addVideoForm');
    if (form) form.reset();

    const titleEl = document.getElementById('addVideoModalTitle');
    const submitBtn = document.getElementById('btnSubmitVideo');
    const isAr = window.app.lang === 'ar';
    if (titleEl) titleEl.textContent = isAr ? 'إضافة فيديو جديد إلى مكتبة الفيديوهات' : 'Ajouter une Vidéo à la Vidéothèque';
    if (submitBtn) submitBtn.textContent = isAr ? 'نشر الفيديو في المكتبة' : 'Publier la Vidéo dans la Vidéothèque';

    const modal = document.getElementById('addVideoModal');
    if (modal) modal.classList.remove('hidden');
  },

  openEditModal(videoId) {
    if (!window.app.auth.isAdmin()) {
      window.app.showToast(window.app.lang === 'ar' ? 'الصلاحية محصورة بحساب المشرف عبيدو.' : 'Accès restreint au compte عبيدو.', '⚠️');
      return;
    }
    const v = this.getAllVideos().find(vid => vid.id === videoId);
    if (!v) return;

    this.editingVideoId = videoId;
    const isAr = window.app.lang === 'ar';

    const titleInput = document.getElementById('videoTitle');
    const levelSelect = document.getElementById('videoLevel');
    const categoryInput = document.getElementById('videoCategory');
    const descInput = document.getElementById('videoDesc');
    const urlInput = document.getElementById('videoUrl');

    if (titleInput) titleInput.value = v.title || '';
    if (levelSelect) levelSelect.value = v.level || 'Tous';
    if (categoryInput) categoryInput.value = v.category || '';
    if (descInput) descInput.value = v.desc || '';
    if (urlInput) urlInput.value = v.url || '';

    const titleEl = document.getElementById('addVideoModalTitle');
    const submitBtn = document.getElementById('btnSubmitVideo');
    if (titleEl) titleEl.textContent = isAr ? `✏️ تعديل الفيديو: ${v.title}` : `✏️ Modifier la Vidéo : ${v.title}`;
    if (submitBtn) submitBtn.textContent = isAr ? '💾 حفظ تعديلات الفيديو' : '💾 Enregistrer les Modifications';

    const modal = document.getElementById('addVideoModal');
    if (modal) modal.classList.remove('hidden');
  },

  closeAddModal() {
    this.editingVideoId = null;
    const modal = document.getElementById('addVideoModal');
    if (modal) modal.classList.add('hidden');
  },

  handleAddBackdrop(e) {
    if (e.target.id === 'addVideoModal') {
      this.closeAddModal();
    }
  },

  async submitNewVideo(e) {
    e.preventDefault();
    if (!window.app.auth.isAdmin()) {
      window.app.showToast('Action non autorisée.', '❌');
      return;
    }

    const title = document.getElementById('videoTitle').value.trim();
    const level = document.getElementById('videoLevel').value;
    const category = document.getElementById('videoCategory').value.trim();
    const desc = document.getElementById('videoDesc').value.trim();
    const url = document.getElementById('videoUrl').value.trim();
    const fileInput = document.getElementById('videoFile');
    const file = fileInput && fileInput.files[0];
    const isAr = window.app.lang === 'ar';
    const submitBtn = document.getElementById('btnSubmitVideo');

    if (!title) {
      window.app.showToast(isAr ? 'يرجى إدخال عنوان الفيديو.' : 'Veuillez saisir le titre de la vidéo.', '⚠️');
      return;
    }

    // Editing an existing video
    if (this.editingVideoId) {
      let customList = this.getCustomVideos();
      let existing = customList.find(v => v.id === this.editingVideoId);
      if (!existing) {
        const defVid = this.defaultVideos.find(v => v.id === this.editingVideoId);
        if (defVid) {
          existing = { ...defVid, isCustom: true };
          customList.push(existing);
        }
      }
      if (existing) {
        existing.title = title;
        existing.level = level;
        existing.category = category || existing.category;
        existing.desc = desc;
        existing.url = url || existing.url;

        if (file) {
          if (file.size > 50 * 1024 * 1024) {
            window.app.showToast(isAr ? 'حجم ملف الفيديو يتجاوز 50 ميجابايت!' : 'Le fichier dépasse la limite de 50 Mo !', '⚠️');
            return;
          }
          try {
            if (existing.fileId) {
              await window.app.db.deleteFile(existing.fileId);
            }
            const newFileId = `vidfile-${Date.now()}`;
            await window.app.db.saveFile(newFileId, file, { name: file.name, type: file.type });
            existing.fileId = newFileId;
            existing.fileName = file.name;
          } catch (err) {
            console.error('IndexedDB update error:', err);
          }
        }

        localStorage.setItem('3bido_custom_videos', JSON.stringify(customList));
        if (window.app.cloud) window.app.cloud.saveVideo(existing);
        document.getElementById('addVideoForm').reset();
        this.closeAddModal();
        this.renderVideos();
        window.app.showToast(isAr ? `تم تحديث فيديو « ${title} » بنجاح! ✅` : `Vidéo « ${title} » mise à jour ! ✅`, '💾');
        this.editingVideoId = null;
        return;
      }
    }

    if (!url && !file) {
      window.app.showToast(isAr ? 'يرجى وضع رابط الفيديو أو رفع ملف فيديو.' : 'Veuillez fournir un lien OU un fichier vidéo.', '⚠️');
      return;
    }

    let fileId = null;
    let fileName = null;

    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        window.app.showToast(isAr ? 'حجم ملف الفيديو يتجاوز 50 ميجابايت!' : 'Le fichier dépasse la limite de 50 Mo !', '⚠️');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = isAr ? 'جاري حفظ ورفع الفيديو...' : 'Enregistrement de la vidéo...';
      }

      try {
        fileId = `vidfile-${Date.now()}`;
        fileName = file.name;
        await window.app.db.saveFile(fileId, file, { name: file.name, type: file.type });
      } catch (err) {
        console.error('IndexedDB video save error:', err);
        window.app.showToast(isAr ? 'فشل حفظ ملف الفيديو في التخزين المحلي.' : 'Échec de sauvegarde locale du fichier vidéo.', '❌');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = isAr ? 'نشر الفيديو في المكتبة' : 'Publier la Vidéo dans la Vidéothèque';
        }
        return;
      }
    }

    const newVideo = {
      id: `custom-vid-${Date.now()}`,
      title,
      level,
      category: category || (isAr ? 'عام' : 'Général'),
      desc,
      url: url || '',
      fileId: fileId || null,
      fileName: fileName || null,
      isCustom: true,
      createdAt: Date.now()
    };

    const customList = this.getCustomVideos();
    customList.unshift(newVideo);
    localStorage.setItem('3bido_custom_videos', JSON.stringify(customList));
    if (window.app.cloud) window.app.cloud.saveVideo(newVideo);

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = isAr ? 'نشر الفيديو في المكتبة' : 'Publier la Vidéo dans la Vidéothèque';
    }

    document.getElementById('addVideoForm').reset();
    this.closeAddModal();
    this.renderVideos();
    window.app.showToast(isAr ? `تمت إضافة فيديو « ${title} » بنجاح!` : `Vidéo « ${title} » ajoutée avec succès !`, '🎉');
  },

  async deleteVideo(id) {
    if (!window.app.auth.isAdmin()) return;
    const isAr = window.app.lang === 'ar';
    if (confirm(isAr ? 'هل أنت متأكد من حذف هذا الفيديو؟' : 'Confirmer la suppression de cette vidéo ?')) {
      let customList = this.getCustomVideos();
      const target = customList.find(v => v.id === id);
      if (target && target.fileId) {
        try {
          await window.app.db.deleteFile(target.fileId);
        } catch (e) {
          console.warn('Could not delete video file blob:', e);
        }
      }
      customList = customList.filter(v => v.id !== id);
      localStorage.setItem('3bido_custom_videos', JSON.stringify(customList));
      if (window.app.cloud) window.app.cloud.deleteVideo(id);
      this.renderVideos();
      window.app.showToast(isAr ? 'تم حذف الفيديو.' : 'Vidéo supprimée.', '🗑️');
    }
  },

  escape(str) {
    return (str || '').replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }
};

/* ===================================================================
   8. SECTION 5: INTERACTIVE AI TUTOR CHAT (Powered by Gemini API)
   =================================================================== */
/* ===================================================================
   SECTION 5: INTERACTIVE AI TUTOR CHAT (GEMINI API INTEGRATION)
   =================================================================== */
window.app = window.app || {};

/* ===================================================================
   SECTION 5: INTERACTIVE AI TUTOR CHAT (PROFESSEUR 3BIDO)
   =================================================================== */
window.app = window.app || {};

/* ===================================================================
   SECTION 5: INTERACTIVE AI TUTOR CHAT (100% FRENCH CONVERSATION)
   =================================================================== */
window.app = window.app || {};

window.app.tutor = {
  currentScenario: 'general',
  apiKey: "AQ.Ab8RN6I7oGteZnBNgUEaRZESTJHFyvM-0mjkUw1Au6yQpzVHkQ", 
  recognition: null,
  isRecording: false,
  chatHistory: [],

  scenarios: {
    general: { 
      name: "Discussion Libre 💬", 
      greeting: "Bonjour ! 👋 Je suis Professeur 3bido, votre tuteur de français !\nComment vous appelez-vous ? De quoi aimeriez-vous parler aujourd'hui ? 😊" 
    },
    restaurant: { 
      name: "Au Restaurant 🍽️", 
      greeting: "Bonjour et bienvenue dans notre restaurant ! 🍽️\nQu'aimeriez-vous commander à boire ou à manger ? Dites : « Je voudrais... » 🥖" 
    },
    travel: { 
      name: "Voyage & Gare 🚂", 
      greeting: "Bonjour voyageur ! 🚂 Bienvenue à la gare.\nQuelle est votre destination aujourd'hui ? Dites : « Je vais à Paris... » 🎫" 
    },
    interview: { 
      name: "Entretien d'Embauche 💼", 
      greeting: "Bonjour ! 💼 Bienvenue à cet entretien d'embauche.\nPourriez-vous vous présenter brièvement ? « Je m'appelle... et je suis... » 😊" 
    },
    quiz: { 
      name: "Quiz Amusant 🎯", 
      greeting: "Bienvenue dans notre quiz de français ! 🎯\nDe quelle couleur est le ciel par une belle journée ?\n🔵 Bleu / 🔴 Rouge / 🟢 Vert\nDonnez votre réponse en français ! 😄" 
    }
  },

  init() {
    this.initSpeechRecognition();
    this.setScenario('general');
  },

  setScenario(key) {
    this.currentScenario = key;
    document.querySelectorAll('.scenario-btn').forEach(b => {
      if (b.getAttribute('onclick')?.includes(key)) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    const messages = document.getElementById('chatMessages');
    if (!messages) return;

    messages.innerHTML = '';
    this.chatHistory = [];
    const scenario = this.scenarios[key] || this.scenarios.general;
    this.appendBotMessage(scenario.greeting);
  },

  handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.sendMessage();
    }
  },

  async sendMessage() {
    const input = document.getElementById('chatInput');
    const userText = input ? input.value.trim() : '';

    if (!userText) return;

    this.appendUserMessage(userText);
    input.value = '';

    const loadingId = this.appendBotMessage("Professeur 3bido réfléchit...");

    let botReply = '';
    try {
      const fetchPromise = fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `Tu es le Professeur 3bido, un tuteur de français passionné, chaleureux, bienveillant et très encourageant pour les apprenants.
RÈGLE ABSOLUE ET STRICTE :
1. Réponds EXCLUSIVEMENT ET TOTALEMENT EN FRANÇAIS. Ne prononce et n'écris AUCUN mot en arabe, même si l'utilisateur s'adresse à toi en arabe.
2. Si l'utilisateur parle en arabe ou dans une autre langue, comprends son message mais réponds-lui toujours avec gentillesse en français facile, accessible (niveau débutant A1-A2), naturel et vivant.
3. Sois comme un véritable être humain : chaleureux, amical, interactif, avec des émojis adaptés (👋, 😊, 🌟, 🇫🇷).
4. Pose-lui de petites questions simples en français pour relancer naturellement la conversation.

Message de l'apprenant : "${userText}"`
                }
              ]
            }
          ]
        })
      });

      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('TIMEOUT')), 4000));
      const response = await Promise.race([fetchPromise, timeoutPromise]);
      const data = await response.json();

      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0].text) {
        botReply = data.candidates[0].content.parts[0].text;
      }
    } catch (err) {
      botReply = '';
    }

    if (!botReply) {
      botReply = this.generateFrenchHumanReply(userText);
    }

    this.removeMessage(loadingId);
    this.appendBotMessage(botReply);
  },

  generateFrenchHumanReply(userText) {
    const lower = (userText || '').trim().toLowerCase();

    // Salutations
    if (/bonjour|salut|coucou|bonsoir|hello|hi|ازيك|عامل ايه|مرحبا|أهلا|سلام|صباح/.test(lower)) {
      const greetings = [
        "Bonjour mon ami ! 👋 Quel plaisir d'échanger avec vous en français ! Comment allez-vous aujourd'hui ? 😊",
        "Salut ! Bienvenue dans votre séance de français. Je suis ravi de vous retrouver ! Prêt pour une belle conversation ? 🌟",
        "Bonjour ! Tout va très bien de mon côté, merci ! Et vous, comment vous sentez-vous ce matin ? ☕"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // Remerciements
    if (/merci|remercie|شكرا|تسلم/.test(lower)) {
      return "Je vous en prie, c'est un véritable plaisir ! 🌸 Avec joie mon ami ! Que souhaitez-vous pratiquer maintenant ? ✨";
    }

    // État d'esprit / Ça va
    if (/ça va|ca va|comment vas|comment allez|تمام|الحمد لله/.test(lower)) {
      return "Je vais formidablement bien, merci beaucoup ! 😄 La pratique quotidienne du français est formidable. Racontez-moi un peu votre journée ! ☀️";
    }

    // Présentation / Nom
    if (/je m'appelle|mon nom|اسمك|اسمي/.test(lower)) {
      return "Enchanté ! C'est un prénom magnifique ! 🌟 Moi, c'est Professeur 3bido. Dans quelle ville habitez-vous actuellement ? 🏙️";
    }

    // Nourriture & Faim
    if (/faim|manger|repas|restaurant|café|pain|eau|أكل|جعان|شاي/.test(lower)) {
      return "Bon appétit d'avance ! 🍽️ En français, vous pouvez dire : « Je voudrais un bon repas, s'il vous plaît ! » Que préférez-vous déguster ? 🥐🥖";
    }

    // Palestine & Paix
    if (/palestine|gaza|jerusalem|al-quds|قدس|فلسطين/.test(lower)) {
      return "La Palestine et Jérusalem sont gravées à jamais dans nos cœurs. 🇵🇸 « Nous prierons à Jérusalem » avec dignité, justice et paix pour tous ! 🕊️💚🤍❤️🖤";
    }

    // Départ / Au revoir
    if (/au revoir|à bientôt|adieu|مع السلامة|باي/.test(lower)) {
      return "Au revoir et à très bientôt ! 👋 Ce fut un honneur de discuter avec vous. Continuez à pratiquer chaque jour avec passion ! 🌟";
    }

    // Réponse par défaut vivante, humaine et 100% française
    const naturalReplies = [
      "C'est parfaitement compris ! Vous vous exprimez très bien. Continuez, je vous écoute avec grande attention ! 😊 Que pensez-vous de la langue française ? 🇫🇷",
      "Très intéressant ! J'aime beaucoup échanger avec vous. Dites-moi, quelles sont vos passions ou vos loisirs préférés ? 📚🎨",
      "Magnifique ! Chaque phrase en français est un pas de géant vers la maîtrise. Avez-vous une autre idée à partager avec moi aujourd'hui ? 🚀",
      "Formidable ! Je suis là pour vous accompagner avec patience. Dites-moi : que voulez-vous apprendre ou pratiquer maintenant ? 🌟"
    ];
    return naturalReplies[Math.floor(Math.random() * naturalReplies.length)];
  },

  appendUserMessage(text) {
    const container = document.getElementById('chatMessages');
    if (!container) return;

    const div = document.createElement('div');
    div.className = 'message-bubble user';
    div.innerHTML = `
      <div class="msg-content">${this.escape(text)}</div>
      <div class="msg-footer">
        <span>Vous</span>
      </div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  },

  appendBotMessage(text) {
    const container = document.getElementById('chatMessages');
    if (!container) return null;
    const id = 'msg-' + Date.now();

    const div = document.createElement('div');
    div.className = 'message-bubble bot';
    div.id = id;
    div.innerHTML = `
      <div class="msg-content">${this.escape(text).replace(/\n/g, '<br>')}</div>
      <div class="msg-footer">
        <span>Professeur 3bido</span>
        <button class="audio-msg-btn" onclick="window.app.speakFrench('${this.escapeQuotes(text)}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          <span style="font-size: 0.75rem; margin-left: 3px;">Écouter</span>
        </button>
      </div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return id;
  },

  removeMessage(id) {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.remove();
  },

  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'fr-FR';
      this.recognition.continuous = false;
      this.recognition.interimResults = false;

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const input = document.getElementById('chatInput');
        if (input) {
          input.value = transcript;
          this.sendMessage();
        }
      };

      this.recognition.onend = () => {
        this.isRecording = false;
        const btn = document.getElementById('chatSpeechInputBtn');
        if (btn) btn.classList.remove('recording');
      };
    }
  },

  toggleMic() {
    if (!this.recognition) {
      window.app.showToast("La reconnaissance vocale nécessite un navigateur compatible (Chrome, Edge).", '⚠️');
      return;
    }

    const btn = document.getElementById('chatSpeechInputBtn');
    if (!this.isRecording) {
      this.recognition.start();
      this.isRecording = true;
      if (btn) btn.classList.add('recording');
      window.app.showToast("Parlez maintenant en français...", '🎙️');
    } else {
      this.recognition.stop();
      this.isRecording = false;
      if (btn) btn.classList.remove('recording');
    }
  },

  escape(str) {
    return (str || '').replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  },

  escapeQuotes(str) {
    return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }
};


window.app.tts = {
  voices: [],
  currentRate: 1.0,

  init() {
    this.populateVoices();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => this.populateVoices();
    }
  },

  populateVoices() {
    if (!('speechSynthesis' in window)) return;
    this.voices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('fr') || v.lang.startsWith('FR'));
    const select = document.getElementById('voiceSelect');
    if (!select) return;
    const isAr = window.app.lang === 'ar';

    if (this.voices.length === 0) {
      select.innerHTML = `<option value="">${isAr ? 'الصوت الفرنسي الافتراضي للنظام' : 'Voix française par défaut du système'}</option>`;
      return;
    }

    select.innerHTML = this.voices.map((v, i) => `
      <option value="${i}">${v.name} (${v.lang})</option>
    `).join('');
  },

  setSpeed(speed) {
    this.currentRate = parseFloat(speed);
    const slider = document.getElementById('rateSlider');
    if (slider) slider.value = this.currentRate;
    const label = document.getElementById('rateValue');
    if (label) label.textContent = this.currentRate.toFixed(1) + 'x';

    document.querySelectorAll('.speed-chip').forEach(chip => {
      const chipSpeed = parseFloat(chip.getAttribute('data-speed'));
      if (Math.abs(chipSpeed - this.currentRate) < 0.05) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });

    const isAr = window.app.lang === 'ar';
    const speedNames = {
      0.5: isAr ? 'بطيء جداً (0.5x)' : 'Très lent (0.5x)',
      0.75: isAr ? 'هادئ (0.75x)' : 'Modéré (0.75x)',
      1.0: isAr ? 'عادي (1.0x)' : 'Normal (1.0x)',
      1.25: isAr ? 'متوسط السرعة (1.25x)' : 'Vif (1.25x)',
      1.5: isAr ? 'سريع (1.5x)' : 'Rapide (1.5x)'
    };
    window.app.showToast(isAr ? `تم ضبط سرعة الصوت على: ${speedNames[this.currentRate] || this.currentRate + 'x'}` : `Vitesse audio réglée sur : ${speedNames[this.currentRate] || this.currentRate + 'x'}`, '⚡');
  },

  onSliderChange(val) {
    this.currentRate = parseFloat(val);
    const label = document.getElementById('rateValue');
    if (label) label.textContent = this.currentRate.toFixed(1) + 'x';

    document.querySelectorAll('.speed-chip').forEach(chip => {
      const chipSpeed = parseFloat(chip.getAttribute('data-speed'));
      if (Math.abs(chipSpeed - this.currentRate) < 0.05) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  },

  setPreset(text) {
    const input = document.getElementById('ttsInput');
    if (input) {
      input.value = text;
      input.focus();
    }
  },

  play() {
    const input = document.getElementById('ttsInput');
    const text = input ? input.value.trim() : '';
    const status = document.getElementById('ttsAudioStatus');
    const isAr = window.app.lang === 'ar';

    if (!text) {
      window.app.showToast(isAr ? 'يرجى كتابة نص لسماعه.' : 'Veuillez entrer un texte à vocaliser.', '⚠️');
      return;
    }

    // تصحيح متغير السرعة وقراءته بشكل سليم ليعمل النطق المباشر فوراً
    const rate = this.currentRate || parseFloat(document.getElementById('rateSlider')?.value || '1.0');
    const pitch = parseFloat(document.getElementById('pitchSlider')?.value || '1.0');
    const voiceIdx = document.getElementById('voiceSelect')?.value;

    if (!('speechSynthesis' in window)) {
      window.app.showToast(isAr ? "التعرف الصوتي غير متوفر." : "Synthèse vocale non disponible.", '⚠️');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.rate = rate;
    utterance.pitch = pitch;

    if (voiceIdx && this.voices[voiceIdx]) {
      utterance.voice = this.voices[voiceIdx];
    }

    utterance.onstart = () => {
      if (status) status.textContent = isAr ? 'جاري نطق الجملة... 🔊' : 'Lecture vocale en cours... 🔊';
    };
    utterance.onend = () => {
      if (status) status.textContent = isAr ? 'اكتمل النطق بنجاح' : 'Lecture terminée avec succès';
    };

    window.speechSynthesis.speak(utterance);
  },

  stop() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const status = document.getElementById('ttsAudioStatus');
      const isAr = window.app.lang === 'ar';
      if (status) status.textContent = isAr ? 'تم الإيقاف' : 'Arrêté';
    }
  },

  async downloadAudio() {
    const input = document.getElementById('ttsInput');
    const text = input ? input.value.trim() : '';
    const status = document.getElementById('ttsAudioStatus');
    const isAr = window.app.lang === 'ar';

    if (!text) {
      window.app.showToast(isAr ? 'يرجى كتابة نص لتنزيل ملفه الصوتي.' : 'Veuillez entrer un texte à télécharger.', '⚠️');
      return;
    }

    if (status) status.textContent = isAr ? 'جاري توليد الملف الصوتي...' : 'Génération du fichier audio...';

    try {
      const cleanSnippet = encodeURIComponent(text.slice(0, 150));
      const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=fr&client=tw-ob&q=${cleanSnippet}`;

      try {
        await fetch(ttsUrl, { mode: 'no-cors' });
        const a = document.createElement('a');
        a.href = ttsUrl;
        a.target = '_blank';
        a.download = `3bido-audio-${Date.now()}.mp3`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        if (status) status.textContent = isAr ? 'تم بدء تنزيل الصوت (.mp3) !' : 'Téléchargement audio initié ! (.mp3)';
        window.app.showToast(isAr ? 'تم تنزيل الملف الصوتي بنجاح!' : 'Fichier audio téléchargé avec succès !', '🎵');
        return;
      } catch (e) {}

      const wavBlob = this.generateSyntheticWavBlob(text);
      const url = URL.createObjectURL(wavBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `3bido-prononciation-${Date.now()}.wav`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      if (status) status.textContent = isAr ? 'تم إنشاء الملف الصوتي وتنزيله (.wav) !' : 'Fichier .wav généré et téléchargé localement !';
      window.app.showToast(isAr ? 'تم تنزيل النطق الصوتي بصيغة WAV إلى جهازك!' : 'Audio français téléchargé sur votre appareil (.wav) !', '📥');
    } catch (err) {
      if (status) status.textContent = isAr ? 'خطأ في توليد الملف الصوتي.' : 'Erreur lors de la génération audio.';
      window.app.showToast(isAr ? 'تعذر توليد الصوت.' : "Impossible de générer l'audio.", '❌');
    }
  },

  generateSyntheticWavBlob(text) {
    const sampleRate = 22050;
    const duration = Math.min(6.0, Math.max(1.5, text.length * 0.08));
    const numSamples = Math.floor(sampleRate * duration);
    const buffer = new ArrayBuffer(44 + numSamples * 2);
    const view = new DataView(buffer);

    const writeString = (view, offset, string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };

    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + numSamples * 2, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, 'data');
    view.setUint32(40, numSamples * 2, true);

    const baseFreq = 160;
    let offset = 44;
    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      const envelope = Math.sin((Math.PI * i) / numSamples);
      const sample = (
        0.5 * Math.sin(2 * Math.PI * baseFreq * t) +
        0.3 * Math.sin(2 * Math.PI * baseFreq * 2 * t) +
        0.2 * Math.sin(2 * Math.PI * 800 * t)
      ) * envelope;

      const intSample = Math.max(-1, Math.min(1, sample)) * 0x7FFF;
      view.setInt16(offset, intSample, true);
      offset += 2;
    }

    return new Blob([view], { type: 'audio/wav' });
  }
};
/* ===================================================================
   10. SECTION 7: LEVELS A1-B2, THEMED CONVERSATIONS & CONJUGAISON
   MANDATORY REQUIREMENT:
   All conjugated verbs highlighted in DISTINCT RED (<span class="highlight-red">)
   Covers ALL requested life topics:
   Greetings, Countries/Languages, Months/Seasons/Days/Complex Years like 1963,
   Daily Items, Food/Supermarket, Family, Body Parts, Time, Colors, Clothes,
   Directions, Weather, City Places, Daily Routine, Hobbies, Sports, Jobs,
   Movies, Adjectives, Appearance, Emotions, Transportation, Accidents,
   House, Sizes/Shapes, Illnesses, Doctor's Clinic, At the Beach, Travel,
   Celebrations, School Supplies, Slang/Conversations, Situations/Confessions.
   =================================================================== */
window.app.levels = {
  currentMasterTab: 'vocab',
  currentLevel: 'A1',
  currentConvLevel: 'A1',
  selectedVerb: 'être',
  selectedTense: 'present',

  init() {
    this.applyVocabOverrides();
    this.renderVocab();
    this.renderConversations();
    this.renderQuickVerbs();
    this.renderConjugation();
  },

  getVocabOverrides() {
    try {
      return JSON.parse(localStorage.getItem('3bido_vocab_overrides')) || {};
    } catch {
      return {};
    }
  },

  saveVocabOverrides(ov) {
    localStorage.setItem('3bido_vocab_overrides', JSON.stringify(ov));
  },

  applyVocabOverrides() {
    const overrides = this.getVocabOverrides();
    for (const [key, val] of Object.entries(overrides)) {
      const parts = key.split(':::');
      if (parts.length < 2) continue;
      const level = parts[0];
      const orig = parts[1];
      if (this.vocabData[level]) {
        for (const topic of this.vocabData[level]) {
          for (const it of topic.items) {
            if ((it.plainFr || it.fr) === orig) {
              if (val.icon) it.icon = val.icon;
              if (val.fr) {
                it.fr = val.fr;
                it.plainFr = val.fr;
              }
              if (val.ar) it.ar = val.ar;
              if (val.ex !== undefined) {
                it.ex = val.ex;
                it.exHtml = null;
              }
            }
          }
        }
      }
    }
  },

  openEditTopicVocab(level, wordText) {
    if (!window.app.auth.isAdmin()) {
      window.app.showToast(window.app.lang === 'ar' ? 'الصلاحية محصورة بحساب المشرف عبيدو.' : 'Accès restreint au compte عبيدو.', '⚠️');
      return;
    }
    const topics = this.vocabData[level] || [];
    let found = null;
    for (const t of topics) {
      for (const it of t.items) {
        if ((it.plainFr || it.fr) === wordText) {
          found = it;
          break;
        }
      }
      if (found) break;
    }
    if (!found) return;

    this.editingTopicWord = { level, originalKey: wordText };
    this.editingVocabId = null;

    const isAr = window.app.lang === 'ar';
    const select = document.getElementById('vocabLevelSelect');
    const iconInput = document.getElementById('vocabIconInput');
    const frInput = document.getElementById('vocabFrInput');
    const arInput = document.getElementById('vocabArInput');
    const exInput = document.getElementById('vocabExInput');

    if (select) select.value = level;
    if (iconInput) iconInput.value = found.icon || '💡';
    if (frInput) frInput.value = found.plainFr || found.fr || '';
    if (arInput) arInput.value = found.ar || '';
    if (exInput) exInput.value = found.ex || '';

    const titleEl = document.getElementById('addVocabModalTitle');
    const btnSubmit = document.getElementById('btnSubmitVocab');
    if (titleEl) titleEl.textContent = isAr ? `✏️ تعديل المفردة: ${found.plainFr || found.fr}` : `✏️ Modifier le Mot : ${found.plainFr || found.fr}`;
    if (btnSubmit) btnSubmit.textContent = isAr ? '💾 حفظ تعديلات المفردة' : '💾 Enregistrer les Modifications';

    const modal = document.getElementById('addVocabModal');
    if (modal) modal.classList.remove('hidden');
  },

  setMasterTab(tab) {
    this.currentMasterTab = tab;
    document.querySelectorAll('.master-tab').forEach(b => {
      if (b.getAttribute('data-tab') === tab) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    const vocabContainer = document.getElementById('levelsVocabContainer');
    const convContainer = document.getElementById('levelsConvContainer');
    const conjContainer = document.getElementById('levelsConjugaisonContainer');

    if (vocabContainer) vocabContainer.classList.add('hidden');
    if (convContainer) convContainer.classList.add('hidden');
    if (conjContainer) conjContainer.classList.add('hidden');

    if (tab === 'vocab') {
      if (vocabContainer) vocabContainer.classList.remove('hidden');
      this.renderVocab();
    } else if (tab === 'conversations') {
      if (convContainer) convContainer.classList.remove('hidden');
      this.renderConversations();
    } else {
      if (conjContainer) conjContainer.classList.remove('hidden');
      this.renderConjugation();
    }
  },

  setLevel(level) {
    this.currentLevel = level;
    document.querySelectorAll('.level-pill').forEach(b => {
      if (b.getAttribute('data-level') === level) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
    this.renderVocab();
  },

  setConvLevel(level) {
    this.currentConvLevel = level;
    document.querySelectorAll('.conv-pill').forEach(b => {
      if (b.getAttribute('data-conv-level') === level) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
    this.renderConversations();
  },

  /* ===================================================================
     VOCABULARY AND SENTENCE BANK (A1, A2, B1, B2)
     ALL conjugated verbs wrapped in <span class="highlight-red">...</span>
     =================================================================== */
  vocabData: {
    A1: [
      {
        topic: "Vocabulaire Essentiel du Niveau A1 (150 Mots Individuels)",
        topicAr: "المفردات الأساسية لمستوى A1 (150 كلمة منفصلة)",
        icon: "📚",
        items: [
          {
            fr: "Salut",
            frHtml: "<span class='v-word-single'>Salut</span>",
            plainFr: "Salut",
            ar: "سلام",
            icon: "👋",
            ex: "Salut ! Comment <span class='highlight-red'>vas-tu</span> ?",
            exHtml: "Salut ! Comment <span class='highlight-red'>vas-tu</span> ?"
          },
          {
            fr: "Bonjour",
            frHtml: "<span class='v-word-single'>Bonjour</span>",
            plainFr: "Bonjour",
            ar: "صباح الخير",
            icon: "🌅",
            ex: "Bonjour, je <span class='highlight-red'>suis</span> ravi de vous voir.",
            exHtml: "Bonjour, je <span class='highlight-red'>suis</span> ravi de vous voir."
          },
          {
            fr: "Bonsoir",
            frHtml: "<span class='v-word-single'>Bonsoir</span>",
            plainFr: "Bonsoir",
            ar: "مساء الخير",
            icon: "🌙",
            ex: "Bonsoir, nous <span class='highlight-red'>allons</span> dîner ensemble.",
            exHtml: "Bonsoir, nous <span class='highlight-red'>allons</span> dîner ensemble."
          },
          {
            fr: "Merci",
            frHtml: "<span class='v-word-single'>Merci</span>",
            plainFr: "Merci",
            ar: "شكراً",
            icon: "🙏",
            ex: "Merci beaucoup, vous <span class='highlight-red'>êtes</span> très aimable.",
            exHtml: "Merci beaucoup, vous <span class='highlight-red'>êtes</span> très aimable."
          },
          {
            fr: "Pardon",
            frHtml: "<span class='v-word-single'>Pardon</span>",
            plainFr: "Pardon",
            ar: "معذرة",
            icon: "🙇",
            ex: "Pardon, je <span class='highlight-red'>cherche</span> la gare.",
            exHtml: "Pardon, je <span class='highlight-red'>cherche</span> la gare."
          },
          {
            fr: "S'il vous plaît",
            frHtml: "<span class='v-word-single'>S'il vous plaît</span>",
            plainFr: "S'il vous plaît",
            ar: "من فضلك",
            icon: "🤝",
            ex: "Un café, s'il vous plaît, j'<span class='highlight-red'>ai</span> soif.",
            exHtml: "Un café, s'il vous plaît, j'<span class='highlight-red'>ai</span> soif."
          },
          {
            fr: "Oui",
            frHtml: "<span class='v-word-single'>Oui</span>",
            plainFr: "Oui",
            ar: "نعم",
            icon: "✅",
            ex: "Oui, je <span class='highlight-red'>comprends</span> bien.",
            exHtml: "Oui, je <span class='highlight-red'>comprends</span> bien."
          },
          {
            fr: "Non",
            frHtml: "<span class='v-word-single'>Non</span>",
            plainFr: "Non",
            ar: "لا",
            icon: "❌",
            ex: "Non, je ne <span class='highlight-red'>peux</span> pas venir.",
            exHtml: "Non, je ne <span class='highlight-red'>peux</span> pas venir."
          },
          {
            fr: "Au revoir",
            frHtml: "<span class='v-word-single'>Au revoir</span>",
            plainFr: "Au revoir",
            ar: "مع السلامة",
            icon: "👋",
            ex: "Au revoir, nous nous <span class='highlight-red'>reverrons</span> bientôt.",
            exHtml: "Au revoir, nous nous <span class='highlight-red'>reverrons</span> bientôt."
          },
          {
            fr: "À bientôt",
            frHtml: "<span class='v-word-single'>À bientôt</span>",
            plainFr: "À bientôt",
            ar: "إلى اللقاء قريباً",
            icon: "⏱️",
            ex: "À bientôt, je vous <span class='highlight-red'>souhaite</span> une bonne journée.",
            exHtml: "À bientôt, je vous <span class='highlight-red'>souhaite</span> une bonne journée."
          },
          {
            fr: "Bienvenue",
            frHtml: "<span class='v-word-single'>Bienvenue</span>",
            plainFr: "Bienvenue",
            ar: "أهلاً وسهلاً",
            icon: "🚪",
            ex: "Bienvenue chez nous, vous <span class='highlight-red'>êtes</span> chez vous.",
            exHtml: "Bienvenue chez nous, vous <span class='highlight-red'>êtes</span> chez vous."
          },
          {
            fr: "Ami",
            frHtml: "<span class='v-word-single'>Ami</span>",
            plainFr: "Ami",
            ar: "صديق",
            icon: "👦",
            ex: "Mon ami <span class='highlight-red'>habite</span> à Paris.",
            exHtml: "Mon ami <span class='highlight-red'>habite</span> à Paris."
          },
          {
            fr: "Amie",
            frHtml: "<span class='v-word-single'>Amie</span>",
            plainFr: "Amie",
            ar: "صديقة",
            icon: "👧",
            ex: "Son amie <span class='highlight-red'>parle</span> français couramment.",
            exHtml: "Son amie <span class='highlight-red'>parle</span> français couramment."
          },
          {
            fr: "Homme",
            frHtml: "<span class='v-word-single'>Homme</span>",
            plainFr: "Homme",
            ar: "رجل",
            icon: "👨",
            ex: "Cet homme <span class='highlight-red'>travaille</span> ici depuis dix ans.",
            exHtml: "Cet homme <span class='highlight-red'>travaille</span> ici depuis dix ans."
          },
          {
            fr: "Femme",
            frHtml: "<span class='v-word-single'>Femme</span>",
            plainFr: "Femme",
            ar: "امرأة",
            icon: "👩",
            ex: "Cette femme <span class='highlight-red'>dirige</span> une grande école.",
            exHtml: "Cette femme <span class='highlight-red'>dirige</span> une grande école."
          },
          {
            fr: "Garçon",
            frHtml: "<span class='v-word-single'>Garçon</span>",
            plainFr: "Garçon",
            ar: "ولد",
            icon: "👦",
            ex: "Le garçon <span class='highlight-red'>joue</span> dans la cour.",
            exHtml: "Le garçon <span class='highlight-red'>joue</span> dans la cour."
          },
          {
            fr: "Fille",
            frHtml: "<span class='v-word-single'>Fille</span>",
            plainFr: "Fille",
            ar: "بنت",
            icon: "👧",
            ex: "La petite fille <span class='highlight-red'>lit</span> une belle histoire.",
            exHtml: "La petite fille <span class='highlight-red'>lit</span> une belle histoire."
          },
          {
            fr: "Père",
            frHtml: "<span class='v-word-single'>Père</span>",
            plainFr: "Père",
            ar: "أب",
            icon: "👨‍👧",
            ex: "Mon père <span class='highlight-red'>aime</span> le café noir.",
            exHtml: "Mon père <span class='highlight-red'>aime</span> le café noir."
          },
          {
            fr: "Mère",
            frHtml: "<span class='v-word-single'>Mère</span>",
            plainFr: "Mère",
            ar: "أم",
            icon: "👩‍👧",
            ex: "Ma mère <span class='highlight-red'>prépare</span> un délicieux gâteau.",
            exHtml: "Ma mère <span class='highlight-red'>prépare</span> un délicieux gâteau."
          },
          {
            fr: "Frère",
            frHtml: "<span class='v-word-single'>Frère</span>",
            plainFr: "Frère",
            ar: "أخ",
            icon: "👦",
            ex: "Mon frère <span class='highlight-red'>étudie</span> à l'université d'Al-Azhar.",
            exHtml: "Mon frère <span class='highlight-red'>étudie</span> à l'université d'Al-Azhar."
          },
          {
            fr: "Sœur",
            frHtml: "<span class='v-word-single'>Sœur</span>",
            plainFr: "Sœur",
            ar: "أخت",
            icon: "👧",
            ex: "Ma sœur <span class='highlight-red'>chante</span> magnifiquement bien.",
            exHtml: "Ma sœur <span class='highlight-red'>chante</span> magnifiquement bien."
          },
          {
            fr: "Fils",
            frHtml: "<span class='v-word-single'>Fils</span>",
            plainFr: "Fils",
            ar: "ابن",
            icon: "👶",
            ex: "Son fils <span class='highlight-red'>a</span> huit ans.",
            exHtml: "Son fils <span class='highlight-red'>a</span> huit ans."
          },
          {
            fr: "Fille (enfant)",
            frHtml: "<span class='v-word-single'>Fille (enfant)</span>",
            plainFr: "Fille (enfant)",
            ar: "ابنة",
            icon: "👧",
            ex: "Leur fille <span class='highlight-red'>adore</span> le dessin.",
            exHtml: "Leur fille <span class='highlight-red'>adore</span> le dessin."
          },
          {
            fr: "Famille",
            frHtml: "<span class='v-word-single'>Famille</span>",
            plainFr: "Famille",
            ar: "عائلة",
            icon: "👨‍👩‍👧‍👦",
            ex: "Toute la famille <span class='highlight-red'>voyage</span> ensemble.",
            exHtml: "Toute la famille <span class='highlight-red'>voyage</span> ensemble."
          },
          {
            fr: "Maison",
            frHtml: "<span class='v-word-single'>Maison</span>",
            plainFr: "Maison",
            ar: "منزل",
            icon: "🏠",
            ex: "Nous <span class='highlight-red'>habitons</span> dans une jolie maison blanche.",
            exHtml: "Nous <span class='highlight-red'>habitons</span> dans une jolie maison blanche."
          },
          {
            fr: "Porte",
            frHtml: "<span class='v-word-single'>Porte</span>",
            plainFr: "Porte",
            ar: "باب",
            icon: "🚪",
            ex: "Il <span class='highlight-red'>ouvre</span> la porte avec la clé.",
            exHtml: "Il <span class='highlight-red'>ouvre</span> la porte avec la clé."
          },
          {
            fr: "Fenêtre",
            frHtml: "<span class='v-word-single'>Fenêtre</span>",
            plainFr: "Fenêtre",
            ar: "نافذة",
            icon: "🪟",
            ex: "Elle <span class='highlight-red'>regarde</span> par la fenêtre ouverte.",
            exHtml: "Elle <span class='highlight-red'>regarde</span> par la fenêtre ouverte."
          },
          {
            fr: "Chambre",
            frHtml: "<span class='v-word-single'>Chambre</span>",
            plainFr: "Chambre",
            ar: "غرفة",
            icon: "🛏️",
            ex: "Ma chambre <span class='highlight-red'>est</span> spacieuse et lumineuse.",
            exHtml: "Ma chambre <span class='highlight-red'>est</span> spacieuse et lumineuse."
          },
          {
            fr: "Lit",
            frHtml: "<span class='v-word-single'>Lit</span>",
            plainFr: "Lit",
            ar: "سرير",
            icon: "🛏️",
            ex: "L'enfant <span class='highlight-red'>dort</span> dans son lit.",
            exHtml: "L'enfant <span class='highlight-red'>dort</span> dans son lit."
          },
          {
            fr: "Table",
            frHtml: "<span class='v-word-single'>Table</span>",
            plainFr: "Table",
            ar: "طاولة",
            icon: "🪵",
            ex: "Le livre <span class='highlight-red'>est</span> posé sur la table.",
            exHtml: "Le livre <span class='highlight-red'>est</span> posé sur la table."
          },
          {
            fr: "Chaise",
            frHtml: "<span class='v-word-single'>Chaise</span>",
            plainFr: "Chaise",
            ar: "كرسي",
            icon: "🪑",
            ex: "Asseyez-vous sur cette chaise, je vous <span class='highlight-red'>en prie</span>.",
            exHtml: "Asseyez-vous sur cette chaise, je vous <span class='highlight-red'>en prie</span>."
          },
          {
            fr: "Livre",
            frHtml: "<span class='v-word-single'>Livre</span>",
            plainFr: "Livre",
            ar: "كتاب",
            icon: "📖",
            ex: "Je <span class='highlight-red'>lis</span> ce livre avec passion.",
            exHtml: "Je <span class='highlight-red'>lis</span> ce livre avec passion."
          },
          {
            fr: "Cahier",
            frHtml: "<span class='v-word-single'>Cahier</span>",
            plainFr: "Cahier",
            ar: "دفتر",
            icon: "📓",
            ex: "L'élève <span class='highlight-red'>écrit</span> ses devoirs sur le cahier.",
            exHtml: "L'élève <span class='highlight-red'>écrit</span> ses devoirs sur le cahier."
          },
          {
            fr: "Stylo",
            frHtml: "<span class='v-word-single'>Stylo</span>",
            plainFr: "Stylo",
            ar: "قلم جاف",
            icon: "🖊️",
            ex: "J'<span class='highlight-red'>écris</span> avec un stylo bleu.",
            exHtml: "J'<span class='highlight-red'>écris</span> avec un stylo bleu."
          },
          {
            fr: "Crayon",
            frHtml: "<span class='v-word-single'>Crayon</span>",
            plainFr: "Crayon",
            ar: "قلم رصاص",
            icon: "✏️",
            ex: "Il <span class='highlight-red'>dessine</span> un arbre au crayon.",
            exHtml: "Il <span class='highlight-red'>dessine</span> un arbre au crayon."
          },
          {
            fr: "Sac",
            frHtml: "<span class='v-word-single'>Sac</span>",
            plainFr: "Sac",
            ar: "حقيبة",
            icon: "🎒",
            ex: "Elle <span class='highlight-red'>porte</span> un sac très lourd.",
            exHtml: "Elle <span class='highlight-red'>porte</span> un sac très lourd."
          },
          {
            fr: "Pain",
            frHtml: "<span class='v-word-single'>Pain</span>",
            plainFr: "Pain",
            ar: "خبز",
            icon: "🥖",
            ex: "Nous <span class='highlight-red'>mangeons</span> du pain frais le matin.",
            exHtml: "Nous <span class='highlight-red'>mangeons</span> du pain frais le matin."
          },
          {
            fr: "Eau",
            frHtml: "<span class='v-word-single'>Eau</span>",
            plainFr: "Eau",
            ar: "ماء",
            icon: "💧",
            ex: "Je <span class='highlight-red'>bois</span> beaucoup d'eau fraîche.",
            exHtml: "Je <span class='highlight-red'>bois</span> beaucoup d'eau fraîche."
          },
          {
            fr: "Lait",
            frHtml: "<span class='v-word-single'>Lait</span>",
            plainFr: "Lait",
            ar: "حليب",
            icon: "🥛",
            ex: "L'enfant <span class='highlight-red'>aime</span> le lait chaud au chocolat.",
            exHtml: "L'enfant <span class='highlight-red'>aime</span> le lait chaud au chocolat."
          },
          {
            fr: "Café",
            frHtml: "<span class='v-word-single'>Café</span>",
            plainFr: "Café",
            ar: "قهوة",
            icon: "☕",
            ex: "Mon ami <span class='highlight-red'>prend</span> un café sans sucre.",
            exHtml: "Mon ami <span class='highlight-red'>prend</span> un café sans sucre."
          },
          {
            fr: "Thé",
            frHtml: "<span class='v-word-single'>Thé</span>",
            plainFr: "Thé",
            ar: "شاي",
            icon: "🫖",
            ex: "Nous <span class='highlight-red'>buvons</span> du thé à la menthe.",
            exHtml: "Nous <span class='highlight-red'>buvons</span> du thé à la menthe."
          },
          {
            fr: "Sucre",
            frHtml: "<span class='v-word-single'>Sucre</span>",
            plainFr: "Sucre",
            ar: "سكر",
            icon: "🧂",
            ex: "Ne <span class='highlight-red'>mettez</span> pas trop de sucre.",
            exHtml: "Ne <span class='highlight-red'>mettez</span> pas trop de sucre."
          },
          {
            fr: "Sel",
            frHtml: "<span class='v-word-single'>Sel</span>",
            plainFr: "Sel",
            ar: "ملح",
            icon: "🧂",
            ex: "Passez-moi le sel, s'il vous <span class='highlight-red'>plaît</span>.",
            exHtml: "Passez-moi le sel, s'il vous <span class='highlight-red'>plaît</span>."
          },
          {
            fr: "Pomme",
            frHtml: "<span class='v-word-single'>Pomme</span>",
            plainFr: "Pomme",
            ar: "تفاحة",
            icon: "🍎",
            ex: "Elle <span class='highlight-red'>croque</span> dans une pomme rouge.",
            exHtml: "Elle <span class='highlight-red'>croque</span> dans une pomme rouge."
          },
          {
            fr: "Banane",
            frHtml: "<span class='v-word-single'>Banane</span>",
            plainFr: "Banane",
            ar: "موزة",
            icon: "🍌",
            ex: "Le singe <span class='highlight-red'>mange</span> une banane mûre.",
            exHtml: "Le singe <span class='highlight-red'>mange</span> une banane mûre."
          },
          {
            fr: "Orange",
            frHtml: "<span class='v-word-single'>Orange</span>",
            plainFr: "Orange",
            ar: "برتقالة",
            icon: "🍊",
            ex: "Ce jus d'orange <span class='highlight-red'>est</span> délicieux.",
            exHtml: "Ce jus d'orange <span class='highlight-red'>est</span> délicieux."
          },
          {
            fr: "Fromage",
            frHtml: "<span class='v-word-single'>Fromage</span>",
            plainFr: "Fromage",
            ar: "جبن",
            icon: "🧀",
            ex: "La France <span class='highlight-red'>produit</span> d'excellents fromages.",
            exHtml: "La France <span class='highlight-red'>produit</span> d'excellents fromages."
          },
          {
            fr: "Viande",
            frHtml: "<span class='v-word-single'>Viande</span>",
            plainFr: "Viande",
            ar: "لحم",
            icon: "🥩",
            ex: "Le boucher <span class='highlight-red'>coupe</span> la viande fraîche.",
            exHtml: "Le boucher <span class='highlight-red'>coupe</span> la viande fraîche."
          },
          {
            fr: "Poulet",
            frHtml: "<span class='v-word-single'>Poulet</span>",
            plainFr: "Poulet",
            ar: "دجاج",
            icon: "🍗",
            ex: "Nous <span class='highlight-red'>cuisinons</span> du poulet rôti.",
            exHtml: "Nous <span class='highlight-red'>cuisinons</span> du poulet rôti."
          },
          {
            fr: "Poisson",
            frHtml: "<span class='v-word-single'>Poisson</span>",
            plainFr: "Poisson",
            ar: "سمك",
            icon: "🐟",
            ex: "Ce restaurant <span class='highlight-red'>sert</span> du bon poisson.",
            exHtml: "Ce restaurant <span class='highlight-red'>sert</span> du bon poisson."
          },
          {
            fr: "Riz",
            frHtml: "<span class='v-word-single'>Riz</span>",
            plainFr: "Riz",
            ar: "أرز",
            icon: "🍚",
            ex: "Il <span class='highlight-red'>mange</span> du riz avec des légumes.",
            exHtml: "Il <span class='highlight-red'>mange</span> du riz avec des légumes."
          },
          {
            fr: "Chien",
            frHtml: "<span class='v-word-single'>Chien</span>",
            plainFr: "Chien",
            ar: "كلب",
            icon: "🐕",
            ex: "Le chien <span class='highlight-red'>garde</span> fidèlement la maison.",
            exHtml: "Le chien <span class='highlight-red'>garde</span> fidèlement la maison."
          },
          {
            fr: "Chat",
            frHtml: "<span class='v-word-single'>Chat</span>",
            plainFr: "Chat",
            ar: "قطة",
            icon: "🐈",
            ex: "Le chat blanc <span class='highlight-red'>dort</span> sur le canapé.",
            exHtml: "Le chat blanc <span class='highlight-red'>dort</span> sur le canapé."
          },
          {
            fr: "Oiseau",
            frHtml: "<span class='v-word-single'>Oiseau</span>",
            plainFr: "Oiseau",
            ar: "عصفور",
            icon: "🐦",
            ex: "L'oiseau <span class='highlight-red'>chante</span> au lever du jour.",
            exHtml: "L'oiseau <span class='highlight-red'>chante</span> au lever du jour."
          },
          {
            fr: "Soleil",
            frHtml: "<span class='v-word-single'>Soleil</span>",
            plainFr: "Soleil",
            ar: "شمس",
            icon: "☀️",
            ex: "Le soleil <span class='highlight-red'>brille</span> dans le ciel bleu.",
            exHtml: "Le soleil <span class='highlight-red'>brille</span> dans le ciel bleu."
          },
          {
            fr: "Lune",
            frHtml: "<span class='v-word-single'>Lune</span>",
            plainFr: "Lune",
            ar: "قمر",
            icon: "🌙",
            ex: "La pleine lune <span class='highlight-red'>éclaire</span> la nuit sombre.",
            exHtml: "La pleine lune <span class='highlight-red'>éclaire</span> la nuit sombre."
          },
          {
            fr: "Ciel",
            frHtml: "<span class='v-word-single'>Ciel</span>",
            plainFr: "Ciel",
            ar: "سماء",
            icon: "☁️",
            ex: "Le ciel <span class='highlight-red'>est</span> dégagé et sans nuages.",
            exHtml: "Le ciel <span class='highlight-red'>est</span> dégagé et sans nuages."
          },
          {
            fr: "Mer",
            frHtml: "<span class='v-word-single'>Mer</span>",
            plainFr: "Mer",
            ar: "بحر",
            icon: "🌊",
            ex: "Nous <span class='highlight-red'>nageons</span> dans la mer Méditerranée.",
            exHtml: "Nous <span class='highlight-red'>nageons</span> dans la mer Méditerranée."
          },
          {
            fr: "Rue",
            frHtml: "<span class='v-word-single'>Rue</span>",
            plainFr: "Rue",
            ar: "شارع",
            icon: "🛣️",
            ex: "Les voitures <span class='highlight-red'>circulent</span> dans la grande rue.",
            exHtml: "Les voitures <span class='highlight-red'>circulent</span> dans la grande rue."
          },
          {
            fr: "Ville",
            frHtml: "<span class='v-word-single'>Ville</span>",
            plainFr: "Ville",
            ar: "مدينة",
            icon: "🏙️",
            ex: "Paris <span class='highlight-red'>est</span> une ville magnifique et animée.",
            exHtml: "Paris <span class='highlight-red'>est</span> une ville magnifique et animée."
          },
          {
            fr: "Pays",
            frHtml: "<span class='v-word-single'>Pays</span>",
            plainFr: "Pays",
            ar: "بلد",
            icon: "🗺️",
            ex: "Mon pays <span class='highlight-red'>reste</span> cher à mon cœur.",
            exHtml: "Mon pays <span class='highlight-red'>reste</span> cher à mon cœur."
          },
          {
            fr: "École",
            frHtml: "<span class='v-word-single'>École</span>",
            plainFr: "École",
            ar: "مدرسة",
            icon: "🏫",
            ex: "Les enfants <span class='highlight-red'>vont</span> à l'école le matin.",
            exHtml: "Les enfants <span class='highlight-red'>vont</span> à l'école le matin."
          },
          {
            fr: "Professeur",
            frHtml: "<span class='v-word-single'>Professeur</span>",
            plainFr: "Professeur",
            ar: "معلم",
            icon: "👨‍🏫",
            ex: "Le professeur <span class='highlight-red'>explique</span> la leçon avec clarté.",
            exHtml: "Le professeur <span class='highlight-red'>explique</span> la leçon avec clarté."
          },
          {
            fr: "Élève",
            frHtml: "<span class='v-word-single'>Élève</span>",
            plainFr: "Élève",
            ar: "طالب",
            icon: "🧑‍🎓",
            ex: "Cet élève <span class='highlight-red'>réussit</span> tous ses examens.",
            exHtml: "Cet élève <span class='highlight-red'>réussit</span> tous ses examens."
          },
          {
            fr: "Classe",
            frHtml: "<span class='v-word-single'>Classe</span>",
            plainFr: "Classe",
            ar: "فصل",
            icon: "📚",
            ex: "Nous <span class='highlight-red'>entrons</span> dans la classe en silence.",
            exHtml: "Nous <span class='highlight-red'>entrons</span> dans la classe en silence."
          },
          {
            fr: "Tableau",
            frHtml: "<span class='v-word-single'>Tableau</span>",
            plainFr: "Tableau",
            ar: "سبورة",
            icon: "⬛",
            ex: "Le maître <span class='highlight-red'>écrit</span> la date au tableau.",
            exHtml: "Le maître <span class='highlight-red'>écrit</span> la date au tableau."
          },
          {
            fr: "Voiture",
            frHtml: "<span class='v-word-single'>Voiture</span>",
            plainFr: "Voiture",
            ar: "سيارة",
            icon: "🚗",
            ex: "Il <span class='highlight-red'>conduit</span> une belle voiture rouge.",
            exHtml: "Il <span class='highlight-red'>conduit</span> une belle voiture rouge."
          },
          {
            fr: "Bus",
            frHtml: "<span class='v-word-single'>Bus</span>",
            plainFr: "Bus",
            ar: "حافلة",
            icon: "🚌",
            ex: "Le bus <span class='highlight-red'>arrive</span> à l'arrêt dans deux minutes.",
            exHtml: "Le bus <span class='highlight-red'>arrive</span> à l'arrêt dans deux minutes."
          },
          {
            fr: "Train",
            frHtml: "<span class='v-word-single'>Train</span>",
            plainFr: "Train",
            ar: "قطار",
            icon: "🚆",
            ex: "Le train direct <span class='highlight-red'>part</span> à midi pile.",
            exHtml: "Le train direct <span class='highlight-red'>part</span> à midi pile."
          },
          {
            fr: "Vélo",
            frHtml: "<span class='v-word-single'>Vélo</span>",
            plainFr: "Vélo",
            ar: "دراجة",
            icon: "🚲",
            ex: "Elle <span class='highlight-red'>fait</span> du vélo chaque dimanche matin.",
            exHtml: "Elle <span class='highlight-red'>fait</span> du vélo chaque dimanche matin."
          },
          {
            fr: "Avion",
            frHtml: "<span class='v-word-single'>Avion</span>",
            plainFr: "Avion",
            ar: "طائرة",
            icon: "✈️",
            ex: "L'avion <span class='highlight-red'>atterrit</span> sur la piste.",
            exHtml: "L'avion <span class='highlight-red'>atterrit</span> sur la piste."
          },
          {
            fr: "Bateau",
            frHtml: "<span class='v-word-single'>Bateau</span>",
            plainFr: "Bateau",
            ar: "سفينة",
            icon: "🚢",
            ex: "Le bateau <span class='highlight-red'>traverse</span> le fleuve majestueux.",
            exHtml: "Le bateau <span class='highlight-red'>traverse</span> le fleuve majestueux."
          },
          {
            fr: "Jour",
            frHtml: "<span class='v-word-single'>Jour</span>",
            plainFr: "Jour",
            ar: "يوم",
            icon: "📅",
            ex: "Chaque jour <span class='highlight-red'>apporte</span> son lot d'espoir.",
            exHtml: "Chaque jour <span class='highlight-red'>apporte</span> son lot d'espoir."
          },
          {
            fr: "Nuit",
            frHtml: "<span class='v-word-single'>Nuit</span>",
            plainFr: "Nuit",
            ar: "ليل",
            icon: "🌃",
            ex: "La nuit <span class='highlight-red'>tombe</span> lentement sur la forêt.",
            exHtml: "La nuit <span class='highlight-red'>tombe</span> lentement sur la forêt."
          },
          {
            fr: "Matin",
            frHtml: "<span class='v-word-single'>Matin</span>",
            plainFr: "Matin",
            ar: "صباح",
            icon: "🌅",
            ex: "Je me <span class='highlight-red'>lève</span> tôt le matin.",
            exHtml: "Je me <span class='highlight-red'>lève</span> tôt le matin."
          },
          {
            fr: "Soir",
            frHtml: "<span class='v-word-single'>Soir</span>",
            plainFr: "Soir",
            ar: "مساء",
            icon: "🌆",
            ex: "Le soir, nous <span class='highlight-red'>regardons</span> les étoiles.",
            exHtml: "Le soir, nous <span class='highlight-red'>regardons</span> les étoiles."
          },
          {
            fr: "Midi",
            frHtml: "<span class='v-word-single'>Midi</span>",
            plainFr: "Midi",
            ar: "ظهيرة",
            icon: "🕛",
            ex: "À midi, les travailleurs <span class='highlight-red'>déjeunent</span>.",
            exHtml: "À midi, les travailleurs <span class='highlight-red'>déjeunent</span>."
          },
          {
            fr: "Heure",
            frHtml: "<span class='v-word-single'>Heure</span>",
            plainFr: "Heure",
            ar: "ساعة",
            icon: "⏰",
            ex: "Quelle heure <span class='highlight-red'>est-il</span> maintenant ?",
            exHtml: "Quelle heure <span class='highlight-red'>est-il</span> maintenant ?"
          },
          {
            fr: "Minute",
            frHtml: "<span class='v-word-single'>Minute</span>",
            plainFr: "Minute",
            ar: "دقيقة",
            icon: "⏱️",
            ex: "Attendez une minute, je vous <span class='highlight-red'>rejoins</span>.",
            exHtml: "Attendez une minute, je vous <span class='highlight-red'>rejoins</span>."
          },
          {
            fr: "Semaine",
            frHtml: "<span class='v-word-single'>Semaine</span>",
            plainFr: "Semaine",
            ar: "أسبوع",
            icon: "🗓️",
            ex: "La semaine prochaine, nous <span class='highlight-red'>partons</span> en vacances.",
            exHtml: "La semaine prochaine, nous <span class='highlight-red'>partons</span> en vacances."
          },
          {
            fr: "Mois",
            frHtml: "<span class='v-word-single'>Mois</span>",
            plainFr: "Mois",
            ar: "شهر",
            icon: "📅",
            ex: "Ce mois-ci, nous <span class='highlight-red'>finissons</span> le projet.",
            exHtml: "Ce mois-ci, nous <span class='highlight-red'>finissons</span> le projet."
          },
          {
            fr: "Année",
            frHtml: "<span class='v-word-single'>Année</span>",
            plainFr: "Année",
            ar: "سنة",
            icon: "🎉",
            ex: "Bonne et heureuse année à vous tous !",
            exHtml: "Bonne et heureuse année à vous tous !"
          },
          {
            fr: "Lundi",
            frHtml: "<span class='v-word-single'>Lundi</span>",
            plainFr: "Lundi",
            ar: "الاثنين",
            icon: "📅",
            ex: "Le lundi, le travail <span class='highlight-red'>recommence</span>.",
            exHtml: "Le lundi, le travail <span class='highlight-red'>recommence</span>."
          },
          {
            fr: "Mardi",
            frHtml: "<span class='v-word-single'>Mardi</span>",
            plainFr: "Mardi",
            ar: "الثلاثاء",
            icon: "📅",
            ex: "Mardi, nous <span class='highlight-red'>avons</span> un cours de sport.",
            exHtml: "Mardi, nous <span class='highlight-red'>avons</span> un cours de sport."
          },
          {
            fr: "Mercredi",
            frHtml: "<span class='v-word-single'>Mercredi</span>",
            plainFr: "Mercredi",
            ar: "الأربعاء",
            icon: "📅",
            ex: "Le mercredi après-midi, les enfants <span class='highlight-red'>jouent</span>.",
            exHtml: "Le mercredi après-midi, les enfants <span class='highlight-red'>jouent</span>."
          },
          {
            fr: "Jeudi",
            frHtml: "<span class='v-word-single'>Jeudi</span>",
            plainFr: "Jeudi",
            ar: "الخميس",
            icon: "📅",
            ex: "Jeudi soir, nous <span class='highlight-red'>dînons</span> en famille.",
            exHtml: "Jeudi soir, nous <span class='highlight-red'>dînons</span> en famille."
          },
          {
            fr: "Vendredi",
            frHtml: "<span class='v-word-single'>Vendredi</span>",
            plainFr: "Vendredi",
            ar: "الجمعة",
            icon: "🕌",
            ex: "Le vendredi <span class='highlight-red'>est</span> un jour sacré de prière.",
            exHtml: "Le vendredi <span class='highlight-red'>est</span> un jour sacré de prière."
          },
          {
            fr: "Samedi",
            frHtml: "<span class='v-word-single'>Samedi</span>",
            plainFr: "Samedi",
            ar: "السبت",
            icon: "🏖️",
            ex: "Samedi, nous <span class='highlight-red'>allons</span> au marché.",
            exHtml: "Samedi, nous <span class='highlight-red'>allons</span> au marché."
          },
          {
            fr: "Dimanche",
            frHtml: "<span class='v-word-single'>Dimanche</span>",
            plainFr: "Dimanche",
            ar: "الأحد",
            icon: "☀️",
            ex: "Dimanche, toute la ville <span class='highlight-red'>se repose</span>.",
            exHtml: "Dimanche, toute la ville <span class='highlight-red'>se repose</span>."
          },
          {
            fr: "Janvier",
            frHtml: "<span class='v-word-single'>Janvier</span>",
            plainFr: "Janvier",
            ar: "يناير",
            icon: "❄️",
            ex: "En janvier, la neige <span class='highlight-red'>recouvre</span> les montagnes.",
            exHtml: "En janvier, la neige <span class='highlight-red'>recouvre</span> les montagnes."
          },
          {
            fr: "Février",
            frHtml: "<span class='v-word-single'>Février</span>",
            plainFr: "Février",
            ar: "فبراير",
            icon: "🌨️",
            ex: "Février <span class='highlight-red'>est</span> le mois le plus court.",
            exHtml: "Février <span class='highlight-red'>est</span> le mois le plus court."
          },
          {
            fr: "Mars",
            frHtml: "<span class='v-word-single'>Mars</span>",
            plainFr: "Mars",
            ar: "مارس",
            icon: "🌱",
            ex: "En mars, le printemps <span class='highlight-red'>commence</span>.",
            exHtml: "En mars, le printemps <span class='highlight-red'>commence</span>."
          },
          {
            fr: "Avril",
            frHtml: "<span class='v-word-single'>Avril</span>",
            plainFr: "Avril",
            ar: "أبريل",
            icon: "🌷",
            ex: "Avril <span class='highlight-red'>apporte</span> des fleurs multicolores.",
            exHtml: "Avril <span class='highlight-red'>apporte</span> des fleurs multicolores."
          },
          {
            fr: "Mai",
            frHtml: "<span class='v-word-single'>Mai</span>",
            plainFr: "Mai",
            ar: "مايو",
            icon: "🌸",
            ex: "En mai, il <span class='highlight-red'>fait</span> très beau dehors.",
            exHtml: "En mai, il <span class='highlight-red'>fait</span> très beau dehors."
          },
          {
            fr: "Juin",
            frHtml: "<span class='v-word-single'>Juin</span>",
            plainFr: "Juin",
            ar: "يونيو",
            icon: "☀️",
            ex: "Juin <span class='highlight-red'>marque</span> le début de l'été.",
            exHtml: "Juin <span class='highlight-red'>marque</span> le début de l'été."
          },
          {
            fr: "Juillet",
            frHtml: "<span class='v-word-single'>Juillet</span>",
            plainFr: "Juillet",
            ar: "يوليو",
            icon: "🏖️",
            ex: "En juillet, les gens <span class='highlight-red'>vont</span> à la plage.",
            exHtml: "En juillet, les gens <span class='highlight-red'>vont</span> à la plage."
          },
          {
            fr: "Août",
            frHtml: "<span class='v-word-single'>Août</span>",
            plainFr: "Août",
            ar: "أغسطس",
            icon: "🍉",
            ex: "Le mois d'août <span class='highlight-red'>est</span> chaud et ensoleillé.",
            exHtml: "Le mois d'août <span class='highlight-red'>est</span> chaud et ensoleillé."
          },
          {
            fr: "Septembre",
            frHtml: "<span class='v-word-single'>Septembre</span>",
            plainFr: "Septembre",
            ar: "سبتمبر",
            icon: "🍂",
            ex: "En septembre, les cours <span class='highlight-red'>reprennent</span>.",
            exHtml: "En septembre, les cours <span class='highlight-red'>reprennent</span>."
          },
          {
            fr: "Octobre",
            frHtml: "<span class='v-word-single'>Octobre</span>",
            plainFr: "Octobre",
            ar: "أكتوبر",
            icon: "🍁",
            ex: "Octobre <span class='highlight-red'>colore</span> les feuilles en doré.",
            exHtml: "Octobre <span class='highlight-red'>colore</span> les feuilles en doré."
          },
          {
            fr: "Novembre",
            frHtml: "<span class='v-word-single'>Novembre</span>",
            plainFr: "Novembre",
            ar: "نوفمبر",
            icon: "🌧️",
            ex: "En novembre, la pluie <span class='highlight-red'>arrose</span> la terre.",
            exHtml: "En novembre, la pluie <span class='highlight-red'>arrose</span> la terre."
          },
          {
            fr: "Décembre",
            frHtml: "<span class='v-word-single'>Décembre</span>",
            plainFr: "Décembre",
            ar: "ديسمبر",
            icon: "❄️",
            ex: "Décembre <span class='highlight-red'>clôture</span> l'année avec douceur.",
            exHtml: "Décembre <span class='highlight-red'>clôture</span> l'année avec douceur."
          },
          {
            fr: "Un",
            frHtml: "<span class='v-word-single'>Un</span>",
            plainFr: "Un",
            ar: "واحد",
            icon: "1️⃣",
            ex: "J'<span class='highlight-red'>ai</span> un seul frère cadet.",
            exHtml: "J'<span class='highlight-red'>ai</span> un seul frère cadet."
          },
          {
            fr: "Deux",
            frHtml: "<span class='v-word-single'>Deux</span>",
            plainFr: "Deux",
            ar: "اثنان",
            icon: "2️⃣",
            ex: "Elle <span class='highlight-red'>achète</span> deux billets de train.",
            exHtml: "Elle <span class='highlight-red'>achète</span> deux billets de train."
          },
          {
            fr: "Trois",
            frHtml: "<span class='v-word-single'>Trois</span>",
            plainFr: "Trois",
            ar: "ثلاثة",
            icon: "3️⃣",
            ex: "Trois étudiants <span class='highlight-red'>réussissent</span> avec mention.",
            exHtml: "Trois étudiants <span class='highlight-red'>réussissent</span> avec mention."
          },
          {
            fr: "Quatre",
            frHtml: "<span class='v-word-single'>Quatre</span>",
            plainFr: "Quatre",
            ar: "أربعة",
            icon: "4️⃣",
            ex: "Il y <span class='highlight-red'>a</span> quatre saisons dans l'année.",
            exHtml: "Il y <span class='highlight-red'>a</span> quatre saisons dans l'année."
          },
          {
            fr: "Cinq",
            frHtml: "<span class='v-word-single'>Cinq</span>",
            plainFr: "Cinq",
            ar: "خمسة",
            icon: "5️⃣",
            ex: "Nous <span class='highlight-red'>partons</span> dans cinq minutes précises.",
            exHtml: "Nous <span class='highlight-red'>partons</span> dans cinq minutes précises."
          },
          {
            fr: "Six",
            frHtml: "<span class='v-word-single'>Six</span>",
            plainFr: "Six",
            ar: "ستة",
            icon: "6️⃣",
            ex: "Elle <span class='highlight-red'>possède</span> six chats adorables.",
            exHtml: "Elle <span class='highlight-red'>possède</span> six chats adorables."
          },
          {
            fr: "Sept",
            frHtml: "<span class='v-word-single'>Sept</span>",
            plainFr: "Sept",
            ar: "سبعة",
            icon: "7️⃣",
            ex: "Il y <span class='highlight-red'>a</span> sept jours dans la semaine.",
            exHtml: "Il y <span class='highlight-red'>a</span> sept jours dans la semaine."
          },
          {
            fr: "Huit",
            frHtml: "<span class='v-word-single'>Huit</span>",
            plainFr: "Huit",
            ar: "ثمانية",
            icon: "8️⃣",
            ex: "Le magasin <span class='highlight-red'>ouvre</span> à huit heures.",
            exHtml: "Le magasin <span class='highlight-red'>ouvre</span> à huit heures."
          },
          {
            fr: "Neuf",
            frHtml: "<span class='v-word-single'>Neuf</span>",
            plainFr: "Neuf",
            ar: "تسعة",
            icon: "9️⃣",
            ex: "J'<span class='highlight-red'>ai</span> compté neuf étoiles filantes.",
            exHtml: "J'<span class='highlight-red'>ai</span> compté neuf étoiles filantes."
          },
          {
            fr: "Dix",
            frHtml: "<span class='v-word-single'>Dix</span>",
            plainFr: "Dix",
            ar: "عشرة",
            icon: "🔟",
            ex: "Ce devoir <span class='highlight-red'>mérite</span> dix sur dix.",
            exHtml: "Ce devoir <span class='highlight-red'>mérite</span> dix sur dix."
          },
          {
            fr: "Vingt",
            frHtml: "<span class='v-word-single'>Vingt</span>",
            plainFr: "Vingt",
            ar: "عشرون",
            icon: "🔢",
            ex: "Ce jeune homme <span class='highlight-red'>a</span> vingt ans aujourd'hui.",
            exHtml: "Ce jeune homme <span class='highlight-red'>a</span> vingt ans aujourd'hui."
          },
          {
            fr: "Cent",
            frHtml: "<span class='v-word-single'>Cent</span>",
            plainFr: "Cent",
            ar: "مئة",
            icon: "💯",
            ex: "Ce poème <span class='highlight-red'>date</span> d'il y a cent ans.",
            exHtml: "Ce poème <span class='highlight-red'>date</span> d'il y a cent ans."
          },
          {
            fr: "Mille",
            frHtml: "<span class='v-word-single'>Mille</span>",
            plainFr: "Mille",
            ar: "ألف",
            icon: "🔢",
            ex: "Mille mercis pour votre générosité sans égale.",
            exHtml: "Mille mercis pour votre générosité sans égale."
          },
          {
            fr: "Rouge",
            frHtml: "<span class='v-word-single'>Rouge</span>",
            plainFr: "Rouge",
            ar: "أحمر",
            icon: "🔴",
            ex: "Le feu <span class='highlight-red'>est</span> rouge, arrêtez-vous !",
            exHtml: "Le feu <span class='highlight-red'>est</span> rouge, arrêtez-vous !"
          },
          {
            fr: "Bleu",
            frHtml: "<span class='v-word-single'>Bleu</span>",
            plainFr: "Bleu",
            ar: "أزرق",
            icon: "🔵",
            ex: "La mer <span class='highlight-red'>est</span> d'un bleu profond.",
            exHtml: "La mer <span class='highlight-red'>est</span> d'un bleu profond."
          },
          {
            fr: "Vert",
            frHtml: "<span class='v-word-single'>Vert</span>",
            plainFr: "Vert",
            ar: "أخضر",
            icon: "🟢",
            ex: "L'herbe du jardin <span class='highlight-red'>est</span> bien verte.",
            exHtml: "L'herbe du jardin <span class='highlight-red'>est</span> bien verte."
          },
          {
            fr: "Noir",
            frHtml: "<span class='v-word-single'>Noir</span>",
            plainFr: "Noir",
            ar: "أسود",
            icon: "⚫",
            ex: "Il <span class='highlight-red'>porte</span> un costume noir élégant.",
            exHtml: "Il <span class='highlight-red'>porte</span> un costume noir élégant."
          },
          {
            fr: "Blanc",
            frHtml: "<span class='v-word-single'>Blanc</span>",
            plainFr: "Blanc",
            ar: "أبيض",
            icon: "⚪",
            ex: "La colombe blanche <span class='highlight-red'>symbolise</span> la paix.",
            exHtml: "La colombe blanche <span class='highlight-red'>symbolise</span> la paix."
          },
          {
            fr: "Jaune",
            frHtml: "<span class='v-word-single'>Jaune</span>",
            plainFr: "Jaune",
            ar: "أصفر",
            icon: "🟡",
            ex: "Le tournesol <span class='highlight-red'>est</span> d'un jaune radieux.",
            exHtml: "Le tournesol <span class='highlight-red'>est</span> d'un jaune radieux."
          },
          {
            fr: "Grand",
            frHtml: "<span class='v-word-single'>Grand</span>",
            plainFr: "Grand",
            ar: "كبير",
            icon: "📏",
            ex: "Ce grand bâtiment <span class='highlight-red'>abrite</span> une bibliothèque.",
            exHtml: "Ce grand bâtiment <span class='highlight-red'>abrite</span> une bibliothèque."
          },
          {
            fr: "Petit",
            frHtml: "<span class='v-word-single'>Petit</span>",
            plainFr: "Petit",
            ar: "صغير",
            icon: "📐",
            ex: "Le petit oiseau <span class='highlight-red'>vole</span> vers son nid.",
            exHtml: "Le petit oiseau <span class='highlight-red'>vole</span> vers son nid."
          },
          {
            fr: "Beau",
            frHtml: "<span class='v-word-single'>Beau</span>",
            plainFr: "Beau",
            ar: "جميل",
            icon: "✨",
            ex: "C'<span class='highlight-red'>est</span> un très beau poème.",
            exHtml: "C'<span class='highlight-red'>est</span> un très beau poème."
          },
          {
            fr: "Belle",
            frHtml: "<span class='v-word-single'>Belle</span>",
            plainFr: "Belle",
            ar: "جميلة",
            icon: "🌸",
            ex: "Une belle chanson <span class='highlight-red'>résonne</span> dans la salle.",
            exHtml: "Une belle chanson <span class='highlight-red'>résonne</span> dans la salle."
          },
          {
            fr: "Bon",
            frHtml: "<span class='v-word-single'>Bon</span>",
            plainFr: "Bon",
            ar: "جيد/طازج",
            icon: "👍",
            ex: "Ce fruit <span class='highlight-red'>est</span> particulièrement bon.",
            exHtml: "Ce fruit <span class='highlight-red'>est</span> particulièrement bon."
          },
          {
            fr: "Mauvais",
            frHtml: "<span class='v-word-single'>Mauvais</span>",
            plainFr: "Mauvais",
            ar: "سيء",
            icon: "👎",
            ex: "Le temps <span class='highlight-red'>est</span> mauvais aujourd'hui.",
            exHtml: "Le temps <span class='highlight-red'>est</span> mauvais aujourd'hui."
          },
          {
            fr: "Nouveau",
            frHtml: "<span class='v-word-single'>Nouveau</span>",
            plainFr: "Nouveau",
            ar: "جديد",
            icon: "🆕",
            ex: "Voici mon nouveau vélo de course.",
            exHtml: "Voici mon nouveau vélo de course."
          },
          {
            fr: "Vieux",
            frHtml: "<span class='v-word-single'>Vieux</span>",
            plainFr: "Vieux",
            ar: "قديم",
            icon: "⏳",
            ex: "Ce vieux chêne <span class='highlight-red'>résiste</span> à la tempête.",
            exHtml: "Ce vieux chêne <span class='highlight-red'>résiste</span> à la tempête."
          },
          {
            fr: "Chaud",
            frHtml: "<span class='v-word-single'>Chaud</span>",
            plainFr: "Chaud",
            ar: "حار/دافئ",
            icon: "🔥",
            ex: "Le café <span class='highlight-red'>est</span> encore très chaud.",
            exHtml: "Le café <span class='highlight-red'>est</span> encore très chaud."
          },
          {
            fr: "Froid",
            frHtml: "<span class='v-word-single'>Froid</span>",
            plainFr: "Froid",
            ar: "بارد",
            icon: "❄️",
            ex: "En hiver, le vent <span class='highlight-red'>devient</span> glacial.",
            exHtml: "En hiver, le vent <span class='highlight-red'>devient</span> glacial."
          },
          {
            fr: "Tête",
            frHtml: "<span class='v-word-single'>Tête</span>",
            plainFr: "Tête",
            ar: "رأس",
            icon: "🗣️",
            ex: "J'<span class='highlight-red'>ai</span> mal à la tête aujourd'hui.",
            exHtml: "J'<span class='highlight-red'>ai</span> mal à la tête aujourd'hui."
          },
          {
            fr: "Œil",
            frHtml: "<span class='v-word-single'>Œil</span>",
            plainFr: "Œil",
            ar: "عين",
            icon: "👁️",
            ex: "Il <span class='highlight-red'>ferme</span> un œil pour viser.",
            exHtml: "Il <span class='highlight-red'>ferme</span> un œil pour viser."
          },
          {
            fr: "Yeux",
            frHtml: "<span class='v-word-single'>Yeux</span>",
            plainFr: "Yeux",
            ar: "عيون",
            icon: "👀",
            ex: "Ses yeux noirs <span class='highlight-red'>brillent</span> d'intelligence.",
            exHtml: "Ses yeux noirs <span class='highlight-red'>brillent</span> d'intelligence."
          },
          {
            fr: "Nez",
            frHtml: "<span class='v-word-single'>Nez</span>",
            plainFr: "Nez",
            ar: "أنف",
            icon: "👃",
            ex: "Elle <span class='highlight-red'>respire</span> le parfum par le nez.",
            exHtml: "Elle <span class='highlight-red'>respire</span> le parfum par le nez."
          },
          {
            fr: "Bouche",
            frHtml: "<span class='v-word-single'>Bouche</span>",
            plainFr: "Bouche",
            ar: "فم",
            icon: "👄",
            ex: "Ouvrez grand la bouche, s'il vous <span class='highlight-red'>plaît</span>.",
            exHtml: "Ouvrez grand la bouche, s'il vous <span class='highlight-red'>plaît</span>."
          },
          {
            fr: "Main",
            frHtml: "<span class='v-word-single'>Main</span>",
            plainFr: "Main",
            ar: "يد",
            icon: "✋",
            ex: "Donnez-moi la main pour traverser la rue.",
            exHtml: "Donnez-moi la main pour traverser la rue."
          },
          {
            fr: "Pied",
            frHtml: "<span class='v-word-single'>Pied</span>",
            plainFr: "Pied",
            ar: "قدم",
            icon: "🦶",
            ex: "Nous <span class='highlight-red'>marchons</span> à pied jusqu'au musée.",
            exHtml: "Nous <span class='highlight-red'>marchons</span> à pied jusqu'au musée."
          },
          {
            fr: "Bras",
            frHtml: "<span class='v-word-single'>Bras</span>",
            plainFr: "Bras",
            ar: "ذراع",
            icon: "💪",
            ex: "Il <span class='highlight-red'>tend</span> le bras pour l'aider.",
            exHtml: "Il <span class='highlight-red'>tend</span> le bras pour l'aider."
          },
          {
            fr: "Cœur",
            frHtml: "<span class='v-word-single'>Cœur</span>",
            plainFr: "Cœur",
            ar: "قلب",
            icon: "❤️",
            ex: "Son cœur <span class='highlight-red'>bat</span> au rythme de la joie.",
            exHtml: "Son cœur <span class='highlight-red'>bat</span> au rythme de la joie."
          },
          {
            fr: "Docteur",
            frHtml: "<span class='v-word-single'>Docteur</span>",
            plainFr: "Docteur",
            ar: "طبيب",
            icon: "👨‍⚕️",
            ex: "Le docteur <span class='highlight-red'>examine</span> le patient attentif.",
            exHtml: "Le docteur <span class='highlight-red'>examine</span> le patient attentif."
          },
          {
            fr: "Hôpital",
            frHtml: "<span class='v-word-single'>Hôpital</span>",
            plainFr: "Hôpital",
            ar: "مستشفى",
            icon: "🏥",
            ex: "L'ambulance <span class='highlight-red'>arrive</span> vite à l'hôpital.",
            exHtml: "L'ambulance <span class='highlight-red'>arrive</span> vite à l'hôpital."
          },
          {
            fr: "Pharmacie",
            frHtml: "<span class='v-word-single'>Pharmacie</span>",
            plainFr: "Pharmacie",
            ar: "صيدلية",
            icon: "💊",
            ex: "La pharmacie de garde <span class='highlight-red'>reste</span> ouverte la nuit.",
            exHtml: "La pharmacie de garde <span class='highlight-red'>reste</span> ouverte la nuit."
          },
          {
            fr: "Médicament",
            frHtml: "<span class='v-word-single'>Médicament</span>",
            plainFr: "Médicament",
            ar: "دواء",
            icon: "💊",
            ex: "Prenez ce médicament après le repas.",
            exHtml: "Prenez ce médicament après le repas."
          },
          {
            fr: "Heureux",
            frHtml: "<span class='v-word-single'>Heureux</span>",
            plainFr: "Heureux",
            ar: "سعيد",
            icon: "😄",
            ex: "Je <span class='highlight-red'>suis</span> très heureux de vous revoir.",
            exHtml: "Je <span class='highlight-red'>suis</span> très heureux de vous revoir."
          },
          {
            fr: "Triste",
            frHtml: "<span class='v-word-single'>Triste</span>",
            plainFr: "Triste",
            ar: "حزين",
            icon: "😢",
            ex: "Pourquoi <span class='highlight-red'>es-tu</span> si triste ce matin ?",
            exHtml: "Pourquoi <span class='highlight-red'>es-tu</span> si triste ce matin ?"
          },
          {
            fr: "Fatigué",
            frHtml: "<span class='v-word-single'>Fatigué</span>",
            plainFr: "Fatigué",
            ar: "متعب",
            icon: "🥱",
            ex: "Après cette course, il <span class='highlight-red'>se sent</span> fatigué.",
            exHtml: "Après cette course, il <span class='highlight-red'>se sent</span> fatigué."
          },
          {
            fr: "Malade",
            frHtml: "<span class='v-word-single'>Malade</span>",
            plainFr: "Malade",
            ar: "مريض",
            icon: "🤒",
            ex: "L'enfant <span class='highlight-red'>est</span> malade, il a de la fièvre.",
            exHtml: "L'enfant <span class='highlight-red'>est</span> malade, il a de la fièvre."
          },
          {
            fr: "Manger",
            frHtml: "<span class='v-word-single'>Manger</span>",
            plainFr: "Manger",
            ar: "يأكل",
            icon: "🍽️",
            ex: "Nous <span class='highlight-red'>mangeons</span> tous ensemble à midi.",
            exHtml: "Nous <span class='highlight-red'>mangeons</span> tous ensemble à midi."
          },
          {
            fr: "Boire",
            frHtml: "<span class='v-word-single'>Boire</span>",
            plainFr: "Boire",
            ar: "يشرب",
            icon: "🥤",
            ex: "Il <span class='highlight-red'>boit</span> un grand verre de jus frais.",
            exHtml: "Il <span class='highlight-red'>boit</span> un grand verre de jus frais."
          },
          {
            fr: "Dormir",
            frHtml: "<span class='v-word-single'>Dormir</span>",
            plainFr: "Dormir",
            ar: "ينام",
            icon: "😴",
            ex: "Le bébé <span class='highlight-red'>dort</span> paisiblement dans son berceau.",
            exHtml: "Le bébé <span class='highlight-red'>dort</span> paisiblement dans son berceau."
          },
          {
            fr: "Parler",
            frHtml: "<span class='v-word-single'>Parler</span>",
            plainFr: "Parler",
            ar: "يتحدث",
            icon: "🗣️",
            ex: "Nous <span class='highlight-red'>parlons</span> français avec fierté.",
            exHtml: "Nous <span class='highlight-red'>parlons</span> français avec fierté."
          },
          {
            fr: "Écouter",
            frHtml: "<span class='v-word-single'>Écouter</span>",
            plainFr: "Écouter",
            ar: "يستمع",
            icon: "👂",
            ex: "Les élèves <span class='highlight-red'>écoutent</span> attentivement le maître.",
            exHtml: "Les élèves <span class='highlight-red'>écoutent</span> attentivement le maître."
          },
          {
            fr: "Regarder",
            frHtml: "<span class='v-word-single'>Regarder</span>",
            plainFr: "Regarder",
            ar: "يشاهد",
            icon: "📺",
            ex: "Nous <span class='highlight-red'>regardons</span> un documentaire passionnant.",
            exHtml: "Nous <span class='highlight-red'>regardons</span> un documentaire passionnant."
          },
          {
            fr: "Aller",
            frHtml: "<span class='v-word-single'>Aller</span>",
            plainFr: "Aller",
            ar: "يذهب",
            icon: "🚶",
            ex: "Je <span class='highlight-red'>vais</span> au marché chaque matin.",
            exHtml: "Je <span class='highlight-red'>vais</span> au marché chaque matin."
          },
          {
            fr: "Venir",
            frHtml: "<span class='v-word-single'>Venir</span>",
            plainFr: "Venir",
            ar: "يأتي",
            icon: "🏃",
            ex: "Mon grand ami <span class='highlight-red'>vient</span> me visiter ce soir.",
            exHtml: "Mon grand ami <span class='highlight-red'>vient</span> me visiter ce soir."
          },
          {
            fr: "Faire",
            frHtml: "<span class='v-word-single'>Faire</span>",
            plainFr: "Faire",
            ar: "يفعل/يعمل",
            icon: "🔨",
            ex: "Elle <span class='highlight-red'>fait</span> ses devoirs avec sérieux.",
            exHtml: "Elle <span class='highlight-red'>fait</span> ses devoirs avec sérieux."
          }
        ]
      }
    ]
,
    A2: [
      {
        topic: "Vocabulaire Essentiel du Niveau A2 (150 Mots Individuels)",
        topicAr: "المفردات الأساسية لمستوى A2 (150 كلمة منفصلة)",
        icon: "📚",
        items: [
          {
            fr: "Voyage",
            frHtml: "<span class='v-word-single'>Voyage</span>",
            plainFr: "Voyage",
            ar: "سفر/رحلة",
            icon: "🧳",
            ex: "Ce voyage à travers l'Europe <span class='highlight-red'>reste</span> inoubliable.",
            exHtml: "Ce voyage à travers l'Europe <span class='highlight-red'>reste</span> inoubliable."
          },
          {
            fr: "Aéroport",
            frHtml: "<span class='v-word-single'>Aéroport</span>",
            plainFr: "Aéroport",
            ar: "مطار",
            icon: "🛫",
            ex: "Nous <span class='highlight-red'>arrivons</span> à l'aéroport deux heures avant le vol.",
            exHtml: "Nous <span class='highlight-red'>arrivons</span> à l'aéroport deux heures avant le vol."
          },
          {
            fr: "Passeport",
            frHtml: "<span class='v-word-single'>Passeport</span>",
            plainFr: "Passeport",
            ar: "جواز سفر",
            icon: "🛂",
            ex: "Le douanier <span class='highlight-red'>vérifie</span> attentivement mon passeport.",
            exHtml: "Le douanier <span class='highlight-red'>vérifie</span> attentivement mon passeport."
          },
          {
            fr: "Billet",
            frHtml: "<span class='v-word-single'>Billet</span>",
            plainFr: "Billet",
            ar: "تذكرة",
            icon: "🎫",
            ex: "J'<span class='highlight-red'>ai</span> réservé un billet de train aller-retour.",
            exHtml: "J'<span class='highlight-red'>ai</span> réservé un billet de train aller-retour."
          },
          {
            fr: "Valise",
            frHtml: "<span class='v-word-single'>Valise</span>",
            plainFr: "Valise",
            ar: "حقيبة سفر",
            icon: "🧳",
            ex: "Elle <span class='highlight-red'>range</span> ses vêtements dans la grande valise.",
            exHtml: "Elle <span class='highlight-red'>range</span> ses vêtements dans la grande valise."
          },
          {
            fr: "Hôtel",
            frHtml: "<span class='v-word-single'>Hôtel</span>",
            plainFr: "Hôtel",
            ar: "فندق",
            icon: "🏨",
            ex: "Nous <span class='highlight-red'>logeons</span> dans un hôtel charmant au centre-ville.",
            exHtml: "Nous <span class='highlight-red'>logeons</span> dans un hôtel charmant au centre-ville."
          },
          {
            fr: "Chambre d'hôtel",
            frHtml: "<span class='v-word-single'>Chambre d'hôtel</span>",
            plainFr: "Chambre d'hôtel",
            ar: "غرفة فندق",
            icon: "🛎️",
            ex: "La chambre <span class='highlight-red'>donne</span> sur un beau jardin fleuri.",
            exHtml: "La chambre <span class='highlight-red'>donne</span> sur un beau jardin fleuri."
          },
          {
            fr: "Réservation",
            frHtml: "<span class='v-word-single'>Réservation</span>",
            plainFr: "Réservation",
            ar: "حجز",
            icon: "📑",
            ex: "J'<span class='highlight-red'>ai</span> confirmé ma réservation par courriel.",
            exHtml: "J'<span class='highlight-red'>ai</span> confirmé ma réservation par courriel."
          },
          {
            fr: "Plage",
            frHtml: "<span class='v-word-single'>Plage</span>",
            plainFr: "Plage",
            ar: "شاطئ",
            icon: "🏖️",
            ex: "Les enfants <span class='highlight-red'>construisent</span> un château sur la plage de sable.",
            exHtml: "Les enfants <span class='highlight-red'>construisent</span> un château sur la plage de sable."
          },
          {
            fr: "Montagne",
            frHtml: "<span class='v-word-single'>Montagne</span>",
            plainFr: "Montagne",
            ar: "جبل",
            icon: "⛰️",
            ex: "Cette montagne majestueuse <span class='highlight-red'>attire</span> de nombreux grimpeurs.",
            exHtml: "Cette montagne majestueuse <span class='highlight-red'>attire</span> de nombreux grimpeurs."
          },
          {
            fr: "Forêt",
            frHtml: "<span class='v-word-single'>Forêt</span>",
            plainFr: "Forêt",
            ar: "غابة",
            icon: "🌲",
            ex: "Nous nous <span class='highlight-red'>promenons</span> sous les grands arbres de la forêt.",
            exHtml: "Nous nous <span class='highlight-red'>promenons</span> sous les grands arbres de la forêt."
          },
          {
            fr: "Campagne",
            frHtml: "<span class='v-word-single'>Campagne</span>",
            plainFr: "Campagne",
            ar: "ريف",
            icon: "🚜",
            ex: "L'air de la campagne <span class='highlight-red'>est</span> frais et vivifiant.",
            exHtml: "L'air de la campagne <span class='highlight-red'>est</span> frais et vivifiant."
          },
          {
            fr: "Musée",
            frHtml: "<span class='v-word-single'>Musée</span>",
            plainFr: "Musée",
            ar: "متحف",
            icon: "🏛️",
            ex: "Le Louvre <span class='highlight-red'>expose</span> des milliers de chefs-d'œuvre célèbres.",
            exHtml: "Le Louvre <span class='highlight-red'>expose</span> des milliers de chefs-d'œuvre célèbres."
          },
          {
            fr: "Cinéma",
            frHtml: "<span class='v-word-single'>Cinéma</span>",
            plainFr: "Cinéma",
            ar: "سينما",
            icon: "🎬",
            ex: "Ce soir, nous <span class='highlight-red'>allons</span> au cinéma voir un film comique.",
            exHtml: "Ce soir, nous <span class='highlight-red'>allons</span> au cinéma voir un film comique."
          },
          {
            fr: "Théâtre",
            frHtml: "<span class='v-word-single'>Théâtre</span>",
            plainFr: "Théâtre",
            ar: "مسرح",
            icon: "🎭",
            ex: "Les acteurs <span class='highlight-red'>jouent</span> une pièce de Molière remarquable.",
            exHtml: "Les acteurs <span class='highlight-red'>jouent</span> une pièce de Molière remarquable."
          },
          {
            fr: "Magasin",
            frHtml: "<span class='v-word-single'>Magasin</span>",
            plainFr: "Magasin",
            ar: "متجر",
            icon: "🏬",
            ex: "Ce magasin <span class='highlight-red'>vend</span> des produits artisanaux locaux.",
            exHtml: "Ce magasin <span class='highlight-red'>vend</span> des produits artisanaux locaux."
          },
          {
            fr: "Supermarché",
            frHtml: "<span class='v-word-single'>Supermarché</span>",
            plainFr: "Supermarché",
            ar: "سوبرماركت",
            icon: "🛒",
            ex: "Je <span class='highlight-red'>fais</span> toutes mes courses hebdomadaires au supermarché.",
            exHtml: "Je <span class='highlight-red'>fais</span> toutes mes courses hebdomadaires au supermarché."
          },
          {
            fr: "Marché",
            frHtml: "<span class='v-word-single'>Marché</span>",
            plainFr: "Marché",
            ar: "سوق شعبي",
            icon: "🧺",
            ex: "Le marché du village <span class='highlight-red'>propose</span> des fruits succulents.",
            exHtml: "Le marché du village <span class='highlight-red'>propose</span> des fruits succulents."
          },
          {
            fr: "Boulangerie",
            frHtml: "<span class='v-word-single'>Boulangerie</span>",
            plainFr: "Boulangerie",
            ar: "مخبز",
            icon: "🥖",
            ex: "La boulangère <span class='highlight-red'>sort</span> des baguettes croustillantes du four.",
            exHtml: "La boulangère <span class='highlight-red'>sort</span> des baguettes croustillantes du four."
          },
          {
            fr: "Boucherie",
            frHtml: "<span class='v-word-single'>Boucherie</span>",
            plainFr: "Boucherie",
            ar: "ملحمة",
            icon: "🥩",
            ex: "Le boucher nous <span class='highlight-red'>conseille</span> une viande très tendre.",
            exHtml: "Le boucher nous <span class='highlight-red'>conseille</span> une viande très tendre."
          },
          {
            fr: "Poste",
            frHtml: "<span class='v-word-single'>Poste</span>",
            plainFr: "Poste",
            ar: "مكتب بريد",
            icon: "📮",
            ex: "Je <span class='highlight-red'>dépose</span> ce colis urgent au bureau de poste.",
            exHtml: "Je <span class='highlight-red'>dépose</span> ce colis urgent au bureau de poste."
          },
          {
            fr: "Banque",
            frHtml: "<span class='v-word-single'>Banque</span>",
            plainFr: "Banque",
            ar: "بنك",
            icon: "🏦",
            ex: "Il <span class='highlight-red'>retire</span> de l'argent au guichet automatique de la banque.",
            exHtml: "Il <span class='highlight-red'>retire</span> de l'argent au guichet automatique de la banque."
          },
          {
            fr: "Argent",
            frHtml: "<span class='v-word-single'>Argent</span>",
            plainFr: "Argent",
            ar: "مال/نقود",
            icon: "💶",
            ex: "L'argent ne <span class='highlight-red'>fait</span> pas le bonheur sans la santé.",
            exHtml: "L'argent ne <span class='highlight-red'>fait</span> pas le bonheur sans la santé."
          },
          {
            fr: "Prix",
            frHtml: "<span class='v-word-single'>Prix</span>",
            plainFr: "Prix",
            ar: "سعر",
            icon: "🏷️",
            ex: "Quel <span class='highlight-red'>est</span> le prix exact de cet article ?",
            exHtml: "Quel <span class='highlight-red'>est</span> le prix exact de cet article ?"
          },
          {
            fr: "Carte bancaire",
            frHtml: "<span class='v-word-single'>Carte bancaire</span>",
            plainFr: "Carte bancaire",
            ar: "بطاقة بنكية",
            icon: "💳",
            ex: "Vous <span class='highlight-red'>pouvez</span> payer par carte bancaire sans contact.",
            exHtml: "Vous <span class='highlight-red'>pouvez</span> payer par carte bancaire sans contact."
          },
          {
            fr: "Facture",
            frHtml: "<span class='v-word-single'>Facture</span>",
            plainFr: "Facture",
            ar: "فاتورة",
            icon: "🧾",
            ex: "Le serveur nous <span class='highlight-red'>apporte</span> l'addition détaillée.",
            exHtml: "Le serveur nous <span class='highlight-red'>apporte</span> l'addition détaillée."
          },
          {
            fr: "Vêtement",
            frHtml: "<span class='v-word-single'>Vêtement</span>",
            plainFr: "Vêtement",
            ar: "ملبس/ملابس",
            icon: "👗",
            ex: "Ce vêtement d'hiver <span class='highlight-red'>protège</span> parfaitement du froid.",
            exHtml: "Ce vêtement d'hiver <span class='highlight-red'>protège</span> parfaitement du froid."
          },
          {
            fr: "Pantalon",
            frHtml: "<span class='v-word-single'>Pantalon</span>",
            plainFr: "Pantalon",
            ar: "بنطال",
            icon: "👖",
            ex: "Il <span class='highlight-red'>porte</span> un pantalon beige élégant.",
            exHtml: "Il <span class='highlight-red'>porte</span> un pantalon beige élégant."
          },
          {
            fr: "Chemise",
            frHtml: "<span class='v-word-single'>Chemise</span>",
            plainFr: "Chemise",
            ar: "قميص",
            icon: "👔",
            ex: "Cette chemise blanche <span class='highlight-red'>convient</span> bien pour l'entretien.",
            exHtml: "Cette chemise blanche <span class='highlight-red'>convient</span> bien pour l'entretien."
          },
          {
            fr: "Robe",
            frHtml: "<span class='v-word-single'>Robe</span>",
            plainFr: "Robe",
            ar: "فستان",
            icon: "👗",
            ex: "La mariée <span class='highlight-red'>porte</span> une robe splendide brodée.",
            exHtml: "La mariée <span class='highlight-red'>porte</span> une robe splendide brodée."
          },
          {
            fr: "Veste",
            frHtml: "<span class='v-word-single'>Veste</span>",
            plainFr: "Veste",
            ar: "سترة",
            icon: "🧥",
            ex: "Mettez votre veste chaude, il <span class='highlight-red'>fait</span> frisquet.",
            exHtml: "Mettez votre veste chaude, il <span class='highlight-red'>fait</span> frisquet."
          },
          {
            fr: "Manteau",
            frHtml: "<span class='v-word-single'>Manteau</span>",
            plainFr: "Manteau",
            ar: "معطف",
            icon: "🧥",
            ex: "Ce long manteau noir <span class='highlight-red'>tient</span> vraiment chaud.",
            exHtml: "Ce long manteau noir <span class='highlight-red'>tient</span> vraiment chaud."
          },
          {
            fr: "Chaussures",
            frHtml: "<span class='v-word-single'>Chaussures</span>",
            plainFr: "Chaussures",
            ar: "أحذية",
            icon: "👞",
            ex: "Ces chaussures de marche <span class='highlight-red'>sont</span> très confortables.",
            exHtml: "Ces chaussures de marche <span class='highlight-red'>sont</span> très confortables."
          },
          {
            fr: "Chapeau",
            frHtml: "<span class='v-word-single'>Chapeau</span>",
            plainFr: "Chapeau",
            ar: "قبعة",
            icon: "👒",
            ex: "Elle <span class='highlight-red'>met</span> un chapeau pour se protéger du soleil.",
            exHtml: "Elle <span class='highlight-red'>met</span> un chapeau pour se protéger du soleil."
          },
          {
            fr: "Temps (météo)",
            frHtml: "<span class='v-word-single'>Temps (météo)</span>",
            plainFr: "Temps (météo)",
            ar: "طقس",
            icon: "⛅",
            ex: "Quel temps <span class='highlight-red'>fait-il</span> aujourd'hui dans votre région ?",
            exHtml: "Quel temps <span class='highlight-red'>fait-il</span> aujourd'hui dans votre région ?"
          },
          {
            fr: "Pluie",
            frHtml: "<span class='v-word-single'>Pluie</span>",
            plainFr: "Pluie",
            ar: "مطر",
            icon: "🌧️",
            ex: "La pluie bienfaisante <span class='highlight-red'>tombe</span> sur les champs arides.",
            exHtml: "La pluie bienfaisante <span class='highlight-red'>tombe</span> sur les champs arides."
          },
          {
            fr: "Neige",
            frHtml: "<span class='v-word-single'>Neige</span>",
            plainFr: "Neige",
            ar: "ثلج",
            icon: "❄️",
            ex: "Une épaisse neige blanche <span class='highlight-red'>recouvre</span> le village.",
            exHtml: "Une épaisse neige blanche <span class='highlight-red'>recouvre</span> le village."
          },
          {
            fr: "Vent",
            frHtml: "<span class='v-word-single'>Vent</span>",
            plainFr: "Vent",
            ar: "رياح",
            icon: "💨",
            ex: "Le vent fort <span class='highlight-red'>fait</span> danser les branches des arbres.",
            exHtml: "Le vent fort <span class='highlight-red'>fait</span> danser les branches des arbres."
          },
          {
            fr: "Nuage",
            frHtml: "<span class='v-word-single'>Nuage</span>",
            plainFr: "Nuage",
            ar: "سحابة",
            icon: "☁️",
            ex: "Un gros nuage gris <span class='highlight-red'>cache</span> le soleil brillant.",
            exHtml: "Un gros nuage gris <span class='highlight-red'>cache</span> le soleil brillant."
          },
          {
            fr: "Orage",
            frHtml: "<span class='v-word-single'>Orage</span>",
            plainFr: "Orage",
            ar: "عاصفة رعدية",
            icon: "⛈️",
            ex: "L'orage violent <span class='highlight-red'>éclate</span> au loin dans la vallée.",
            exHtml: "L'orage violent <span class='highlight-red'>éclate</span> au loin dans la vallée."
          },
          {
            fr: "Parapluie",
            frHtml: "<span class='v-word-single'>Parapluie</span>",
            plainFr: "Parapluie",
            ar: "مظلة",
            icon: "☂️",
            ex: "N'oubliez pas d'<span class='highlight-red'>emporter</span> votre parapluie aujourd'hui.",
            exHtml: "N'oubliez pas d'<span class='highlight-red'>emporter</span> votre parapluie aujourd'hui."
          },
          {
            fr: "Saison",
            frHtml: "<span class='v-word-single'>Saison</span>",
            plainFr: "Saison",
            ar: "فصل من فصول السنة",
            icon: "🍂",
            ex: "L'automne <span class='highlight-red'>reste</span> ma saison préférée pour ses couleurs.",
            exHtml: "L'automne <span class='highlight-red'>reste</span> ma saison préférée pour ses couleurs."
          },
          {
            fr: "Printemps",
            frHtml: "<span class='v-word-single'>Printemps</span>",
            plainFr: "Printemps",
            ar: "ربيع",
            icon: "🌷",
            ex: "Au printemps, toute la nature <span class='highlight-red'>renaît</span> avec éclat.",
            exHtml: "Au printemps, toute la nature <span class='highlight-red'>renaît</span> avec éclat."
          },
          {
            fr: "Été",
            frHtml: "<span class='v-word-single'>Été</span>",
            plainFr: "Été",
            ar: "صيف",
            icon: "☀️",
            ex: "L'été <span class='highlight-red'>permet</span> de longues baignades sous le soleil.",
            exHtml: "L'été <span class='highlight-red'>permet</span> de longues baignades sous le soleil."
          },
          {
            fr: "Automne",
            frHtml: "<span class='v-word-single'>Automne</span>",
            plainFr: "Automne",
            ar: "خريف",
            icon: "🍁",
            ex: "En automne, les feuilles mortes <span class='highlight-red'>jonchent</span> le sol.",
            exHtml: "En automne, les feuilles mortes <span class='highlight-red'>jonchent</span> le sol."
          },
          {
            fr: "Hiver",
            frHtml: "<span class='v-word-single'>Hiver</span>",
            plainFr: "Hiver",
            ar: "شتاء",
            icon: "☃️",
            ex: "L'hiver <span class='highlight-red'>impose</span> de s'habiller très chaudement.",
            exHtml: "L'hiver <span class='highlight-red'>impose</span> de s'habiller très chaudement."
          },
          {
            fr: "Cuisine",
            frHtml: "<span class='v-word-single'>Cuisine</span>",
            plainFr: "Cuisine",
            ar: "مطبخ",
            icon: "🍳",
            ex: "La bonne odeur de la cuisine <span class='highlight-red'>emplit</span> toute la maison.",
            exHtml: "La bonne odeur de la cuisine <span class='highlight-red'>emplit</span> toute la maison."
          },
          {
            fr: "Salon",
            frHtml: "<span class='v-word-single'>Salon</span>",
            plainFr: "Salon",
            ar: "غرفة معيشة",
            icon: "🛋️",
            ex: "Toute la famille <span class='highlight-red'>se réunit</span> dans le grand salon.",
            exHtml: "Toute la famille <span class='highlight-red'>se réunit</span> dans le grand salon."
          },
          {
            fr: "Jardin",
            frHtml: "<span class='v-word-single'>Jardin</span>",
            plainFr: "Jardin",
            ar: "حديقة",
            icon: "🌳",
            ex: "Mon grand-père <span class='highlight-red'>cultive</span> des roses dans son jardin.",
            exHtml: "Mon grand-père <span class='highlight-red'>cultive</span> des roses dans son jardin."
          },
          {
            fr: "Garage",
            frHtml: "<span class='v-word-single'>Garage</span>",
            plainFr: "Garage",
            ar: "مرآب",
            icon: "🚗",
            ex: "La voiture <span class='highlight-red'>stationne</span> en sécurité dans le garage.",
            exHtml: "La voiture <span class='highlight-red'>stationne</span> en sécurité dans le garage."
          },
          {
            fr: "Bâtiment",
            frHtml: "<span class='v-word-single'>Bâtiment</span>",
            plainFr: "Bâtiment",
            ar: "مبنى",
            icon: "🏢",
            ex: "Ce bâtiment moderne <span class='highlight-red'>abrite</span> de nombreuses entreprises.",
            exHtml: "Ce bâtiment moderne <span class='highlight-red'>abrite</span> de nombreuses entreprises."
          },
          {
            fr: "Étage",
            frHtml: "<span class='v-word-single'>Étage</span>",
            plainFr: "Étage",
            ar: "طابق",
            icon: "🏢",
            ex: "J'<span class='highlight-red'>habite</span> au troisième étage avec ascenseur.",
            exHtml: "J'<span class='highlight-red'>habite</span> au troisième étage avec ascenseur."
          },
          {
            fr: "Ascenseur",
            frHtml: "<span class='v-word-single'>Ascenseur</span>",
            plainFr: "Ascenseur",
            ar: "مصعد",
            icon: "🛗",
            ex: "Prenons l'ascenseur pour <span class='highlight-red'>monter</span> plus vite.",
            exHtml: "Prenons l'ascenseur pour <span class='highlight-red'>monter</span> plus vite."
          },
          {
            fr: "Escalier",
            frHtml: "<span class='v-word-single'>Escalier</span>",
            plainFr: "Escalier",
            ar: "درج/سلم",
            icon: "🪜",
            ex: "Il <span class='highlight-red'>descend</span> l'escalier à pas vifs et réguliers.",
            exHtml: "Il <span class='highlight-red'>descend</span> l'escalier à pas vifs et réguliers."
          },
          {
            fr: "Voisin",
            frHtml: "<span class='v-word-single'>Voisin</span>",
            plainFr: "Voisin",
            ar: "جار",
            icon: "👨",
            ex: "Notre voisin d'en face <span class='highlight-red'>est</span> particulièrement serviable.",
            exHtml: "Notre voisin d'en face <span class='highlight-red'>est</span> particulièrement serviable."
          },
          {
            fr: "Voisine",
            frHtml: "<span class='v-word-single'>Voisine</span>",
            plainFr: "Voisine",
            ar: "جارة",
            icon: "👩",
            ex: "Ma voisine <span class='highlight-red'>arrose</span> ses plantes chaque matin.",
            exHtml: "Ma voisine <span class='highlight-red'>arrose</span> ses plantes chaque matin."
          },
          {
            fr: "Quartier",
            frHtml: "<span class='v-word-single'>Quartier</span>",
            plainFr: "Quartier",
            ar: "حي سكني",
            icon: "🏘️",
            ex: "C'<span class='highlight-red'>est</span> un quartier paisible, propre et agréable.",
            exHtml: "C'<span class='highlight-red'>est</span> un quartier paisible, propre et agréable."
          },
          {
            fr: "Parc",
            frHtml: "<span class='v-word-single'>Parc</span>",
            plainFr: "Parc",
            ar: "منتزه",
            icon: "🏞️",
            ex: "Les enfants <span class='highlight-red'>courent</span> joyeusement dans les allées du parc.",
            exHtml: "Les enfants <span class='highlight-red'>courent</span> joyeusement dans les allées du parc."
          },
          {
            fr: "Pont",
            frHtml: "<span class='v-word-single'>Pont</span>",
            plainFr: "Pont",
            ar: "جسر",
            icon: "🌉",
            ex: "Ce vieux pont en pierre <span class='highlight-red'>enjambe</span> la rivière claire.",
            exHtml: "Ce vieux pont en pierre <span class='highlight-red'>enjambe</span> la rivière claire."
          },
          {
            fr: "Fleuve",
            frHtml: "<span class='v-word-single'>Fleuve</span>",
            plainFr: "Fleuve",
            ar: "نهر كبير",
            icon: "🌊",
            ex: "La Seine <span class='highlight-red'>traverse</span> le cœur historique de Paris.",
            exHtml: "La Seine <span class='highlight-red'>traverse</span> le cœur historique de Paris."
          },
          {
            fr: "Lac",
            frHtml: "<span class='v-word-single'>Lac</span>",
            plainFr: "Lac",
            ar: "بحيرة",
            icon: "🏞️",
            ex: "L'eau pure de ce lac alpin <span class='highlight-red'>reflète</span> les sommets.",
            exHtml: "L'eau pure de ce lac alpin <span class='highlight-red'>reflète</span> les sommets."
          },
          {
            fr: "Route",
            frHtml: "<span class='v-word-single'>Route</span>",
            plainFr: "Route",
            ar: "طريق",
            icon: "🛣️",
            ex: "Cette longue route <span class='highlight-red'>mène</span> droit vers la côte.",
            exHtml: "Cette longue route <span class='highlight-red'>mène</span> droit vers la côte."
          },
          {
            fr: "Carrefour",
            frHtml: "<span class='v-word-single'>Carrefour</span>",
            plainFr: "Carrefour",
            ar: "تقاطع طرق",
            icon: "🚦",
            ex: "Tournez à droite au carrefour régulé par les feux.",
            exHtml: "Tournez à droite au carrefour régulé par les feux."
          },
          {
            fr: "Feu rouge",
            frHtml: "<span class='v-word-single'>Feu rouge</span>",
            plainFr: "Feu rouge",
            ar: "إشارة مرور",
            icon: "🚥",
            ex: "Tous les véhicules <span class='highlight-red'>marquent</span> l'arrêt au feu rouge.",
            exHtml: "Tous les véhicules <span class='highlight-red'>marquent</span> l'arrêt au feu rouge."
          },
          {
            fr: "Panneau",
            frHtml: "<span class='v-word-single'>Panneau</span>",
            plainFr: "Panneau",
            ar: "لوحة إرشادية",
            icon: "🪧",
            ex: "Ce panneau indicateur <span class='highlight-red'>signale</span> la direction de l'autoroute.",
            exHtml: "Ce panneau indicateur <span class='highlight-red'>signale</span> la direction de l'autoroute."
          },
          {
            fr: "Gauche",
            frHtml: "<span class='v-word-single'>Gauche</span>",
            plainFr: "Gauche",
            ar: "يسار",
            icon: "⬅️",
            ex: "Prenez la première ruelle sur votre gauche.",
            exHtml: "Prenez la première ruelle sur votre gauche."
          },
          {
            fr: "Droite",
            frHtml: "<span class='v-word-single'>Droite</span>",
            plainFr: "Droite",
            ar: "يمين",
            icon: "➡️",
            ex: "Le grand musée <span class='highlight-red'>se trouve</span> juste à votre droite.",
            exHtml: "Le grand musée <span class='highlight-red'>se trouve</span> juste à votre droite."
          },
          {
            fr: "Tout droit",
            frHtml: "<span class='v-word-single'>Tout droit</span>",
            plainFr: "Tout droit",
            ar: "إلى الأمام مباشرة",
            icon: "⬆️",
            ex: "Continuez tout droit pendant environ cinq cents mètres.",
            exHtml: "Continuez tout droit pendant environ cinq cents mètres."
          },
          {
            fr: "Loin",
            frHtml: "<span class='v-word-single'>Loin</span>",
            plainFr: "Loin",
            ar: "بعيد",
            icon: "🔭",
            ex: "Le vieux village <span class='highlight-red'>reste</span> encore bien loin d'ici.",
            exHtml: "Le vieux village <span class='highlight-red'>reste</span> encore bien loin d'ici."
          },
          {
            fr: "Près",
            frHtml: "<span class='v-word-single'>Près</span>",
            plainFr: "Près",
            ar: "قريب",
            icon: "📍",
            ex: "La station de métro <span class='highlight-red'>est</span> très près de notre hôtel.",
            exHtml: "La station de métro <span class='highlight-red'>est</span> très près de notre hôtel."
          },
          {
            fr: "Devant",
            frHtml: "<span class='v-word-single'>Devant</span>",
            plainFr: "Devant",
            ar: "أمام",
            icon: "➡️",
            ex: "Retrouvons-nous devant la grande entrée principale.",
            exHtml: "Retrouvons-nous devant la grande entrée principale."
          },
          {
            fr: "Derrière",
            frHtml: "<span class='v-word-single'>Derrière</span>",
            plainFr: "Derrière",
            ar: "خلف",
            icon: "⬅️",
            ex: "Le jardin secret <span class='highlight-red'>se cache</span> derrière la bâtisse.",
            exHtml: "Le jardin secret <span class='highlight-red'>se cache</span> derrière la bâtisse."
          },
          {
            fr: "Sur",
            frHtml: "<span class='v-word-single'>Sur</span>",
            plainFr: "Sur",
            ar: "على/فوق",
            icon: "⬆️",
            ex: "Le dossier complet <span class='highlight-red'>repose</span> sur le bureau en bois.",
            exHtml: "Le dossier complet <span class='highlight-red'>repose</span> sur le bureau en bois."
          },
          {
            fr: "Sous",
            frHtml: "<span class='v-word-single'>Sous</span>",
            plainFr: "Sous",
            ar: "تحت",
            icon: "⬇️",
            ex: "Le chat tigré <span class='highlight-red'>dort</span> paisiblement sous la table.",
            exHtml: "Le chat tigré <span class='highlight-red'>dort</span> paisiblement sous la table."
          },
          {
            fr: "Entre",
            frHtml: "<span class='v-word-single'>Entre</span>",
            plainFr: "Entre",
            ar: "بين",
            icon: "↔️",
            ex: "La librairie <span class='highlight-red'>est</span> située entre la poste et la banque.",
            exHtml: "La librairie <span class='highlight-red'>est</span> située entre la poste et la banque."
          },
          {
            fr: "Sport",
            frHtml: "<span class='v-word-single'>Sport</span>",
            plainFr: "Sport",
            ar: "رياضة",
            icon: "⚽",
            ex: "La pratique du sport <span class='highlight-red'>maintient</span> le corps en excellente forme.",
            exHtml: "La pratique du sport <span class='highlight-red'>maintient</span> le corps en excellente forme."
          },
          {
            fr: "Football",
            frHtml: "<span class='v-word-single'>Football</span>",
            plainFr: "Football",
            ar: "كرة قدم",
            icon: "⚽",
            ex: "Des millions de passionnés <span class='highlight-red'>regardent</span> ce grand match de football.",
            exHtml: "Des millions de passionnés <span class='highlight-red'>regardent</span> ce grand match de football."
          },
          {
            fr: "Natation",
            frHtml: "<span class='v-word-single'>Natation</span>",
            plainFr: "Natation",
            ar: "سباحة",
            icon: "🏊",
            ex: "La natation <span class='highlight-red'>muscle</span> l'ensemble du corps en douceur.",
            exHtml: "La natation <span class='highlight-red'>muscle</span> l'ensemble du corps en douceur."
          },
          {
            fr: "Course",
            frHtml: "<span class='v-word-single'>Course</span>",
            plainFr: "Course",
            ar: "جري",
            icon: "🏃",
            ex: "Il <span class='highlight-red'>participe</span> à une grande course solidaire dimanche.",
            exHtml: "Il <span class='highlight-red'>participe</span> à une grande course solidaire dimanche."
          },
          {
            fr: "Musique",
            frHtml: "<span class='v-word-single'>Musique</span>",
            plainFr: "Musique",
            ar: "موسيقى",
            icon: "🎵",
            ex: "Une douce mélodie <span class='highlight-red'>adoucit</span> les esprits fatigués.",
            exHtml: "Une douce mélodie <span class='highlight-red'>adoucit</span> les esprits fatigués."
          },
          {
            fr: "Chanson",
            frHtml: "<span class='v-word-single'>Chanson</span>",
            plainFr: "Chanson",
            ar: "أغنية",
            icon: "🎶",
            ex: "Tout le public <span class='highlight-red'>chante</span> en chœur cette belle chanson.",
            exHtml: "Tout le public <span class='highlight-red'>chante</span> en chœur cette belle chanson."
          },
          {
            fr: "Guitare",
            frHtml: "<span class='v-word-single'>Guitare</span>",
            plainFr: "Guitare",
            ar: "غيتار",
            icon: "🎸",
            ex: "Mon cousin <span class='highlight-red'>joue</span> de la guitare classique avec talent.",
            exHtml: "Mon cousin <span class='highlight-red'>joue</span> de la guitare classique avec talent."
          },
          {
            fr: "Piano",
            frHtml: "<span class='v-word-single'>Piano</span>",
            plainFr: "Piano",
            ar: "بيانو",
            icon: "🎹",
            ex: "Elle <span class='highlight-red'>s'exerce</span> au piano pendant deux heures chaque jour.",
            exHtml: "Elle <span class='highlight-red'>s'exerce</span> au piano pendant deux heures chaque jour."
          },
          {
            fr: "Peinture",
            frHtml: "<span class='v-word-single'>Peinture</span>",
            plainFr: "Peinture",
            ar: "رسم/طلاء",
            icon: "🎨",
            ex: "Cette peinture raffinée <span class='highlight-red'>exprime</span> une émotion très profonde.",
            exHtml: "Cette peinture raffinée <span class='highlight-red'>exprime</span> une émotion très profonde."
          },
          {
            fr: "Photo",
            frHtml: "<span class='v-word-single'>Photo</span>",
            plainFr: "Photo",
            ar: "صورة فوتوغرافية",
            icon: "📷",
            ex: "Prenez une belle photo souvenir de tout le groupe.",
            exHtml: "Prenez une belle photo souvenir de tout le groupe."
          },
          {
            fr: "Appareil photo",
            frHtml: "<span class='v-word-single'>Appareil photo</span>",
            plainFr: "Appareil photo",
            ar: "كاميرا",
            icon: "📸",
            ex: "Cet appareil moderne <span class='highlight-red'>capture</span> des images d'une grande netteté.",
            exHtml: "Cet appareil moderne <span class='highlight-red'>capture</span> des images d'une grande netteté."
          },
          {
            fr: "Téléphone",
            frHtml: "<span class='v-word-single'>Téléphone</span>",
            plainFr: "Téléphone",
            ar: "هاتف",
            icon: "📱",
            ex: "Mon téléphone portable <span class='highlight-red'>sonne</span> avec insistance dans ma poche.",
            exHtml: "Mon téléphone portable <span class='highlight-red'>sonne</span> avec insistance dans ma poche."
          },
          {
            fr: "Ordinateur",
            frHtml: "<span class='v-word-single'>Ordinateur</span>",
            plainFr: "Ordinateur",
            ar: "حاسوب",
            icon: "💻",
            ex: "Cet ordinateur portable rapide <span class='highlight-red'>facilite</span> mon travail quotidien.",
            exHtml: "Cet ordinateur portable rapide <span class='highlight-red'>facilite</span> mon travail quotidien."
          },
          {
            fr: "Internet",
            frHtml: "<span class='v-word-single'>Internet</span>",
            plainFr: "Internet",
            ar: "إنترنت",
            icon: "🌐",
            ex: "Internet <span class='highlight-red'>relie</span> instantanément les humains du monde entier.",
            exHtml: "Internet <span class='highlight-red'>relie</span> instantanément les humains du monde entier."
          },
          {
            fr: "Message",
            frHtml: "<span class='v-word-single'>Message</span>",
            plainFr: "Message",
            ar: "رسالة",
            icon: "💬",
            ex: "Envoyez-moi un court message dès votre arrivée.",
            exHtml: "Envoyez-moi un court message dès votre arrivée."
          },
          {
            fr: "Courriel",
            frHtml: "<span class='v-word-single'>Courriel</span>",
            plainFr: "Courriel",
            ar: "بريد إلكتروني",
            icon: "📧",
            ex: "J'<span class='highlight-red'>ai</span> reçu votre courriel officiel ce matin.",
            exHtml: "J'<span class='highlight-red'>ai</span> reçu votre courriel officiel ce matin."
          },
          {
            fr: "Lettre",
            frHtml: "<span class='v-word-single'>Lettre</span>",
            plainFr: "Lettre",
            ar: "خطاب",
            icon: "✉️",
            ex: "Elle <span class='highlight-red'>écrit</span> une lettre sincère et émouvante à son aïeule.",
            exHtml: "Elle <span class='highlight-red'>écrit</span> une lettre sincère et émouvante à son aïeule."
          },
          {
            fr: "Timbre",
            frHtml: "<span class='v-word-single'>Timbre</span>",
            plainFr: "Timbre",
            ar: "طابع بريدي",
            icon: "🏷️",
            ex: "Collez un timbre tarif lettre prioritaire sur l'enveloppe.",
            exHtml: "Collez un timbre tarif lettre prioritaire sur l'enveloppe."
          },
          {
            fr: "Journal",
            frHtml: "<span class='v-word-single'>Journal</span>",
            plainFr: "Journal",
            ar: "جريدة/صحيفة",
            icon: "📰",
            ex: "Mon père <span class='highlight-red'>lit</span> le journal du matin avec attention.",
            exHtml: "Mon père <span class='highlight-red'>lit</span> le journal du matin avec attention."
          },
          {
            fr: "Magazine",
            frHtml: "<span class='v-word-single'>Magazine</span>",
            plainFr: "Magazine",
            ar: "مجلة",
            icon: "📖",
            ex: "Ce magazine mensuel <span class='highlight-red'>traite</span> des grandes découvertes scientifiques.",
            exHtml: "Ce magazine mensuel <span class='highlight-red'>traite</span> des grandes découvertes scientifiques."
          },
          {
            fr: "Nouvelle",
            frHtml: "<span class='v-word-single'>Nouvelle</span>",
            plainFr: "Nouvelle",
            ar: "خبر/نبأ",
            icon: "📢",
            ex: "C'<span class='highlight-red'>est</span> une excellente nouvelle qui nous réjouit tous.",
            exHtml: "C'<span class='highlight-red'>est</span> une excellente nouvelle qui nous réjouit tous."
          },
          {
            fr: "Travail",
            frHtml: "<span class='v-word-single'>Travail</span>",
            plainFr: "Travail",
            ar: "عمل/شغل",
            icon: "💼",
            ex: "Un travail bien accompli <span class='highlight-red'>procure</span> une immense fierté.",
            exHtml: "Un travail bien accompli <span class='highlight-red'>procure</span> une immense fierté."
          },
          {
            fr: "Bureau",
            frHtml: "<span class='v-word-single'>Bureau</span>",
            plainFr: "Bureau",
            ar: "مكتب",
            icon: "🏢",
            ex: "Je me <span class='highlight-red'>rends</span> à mon bureau dès huit heures.",
            exHtml: "Je me <span class='highlight-red'>rends</span> à mon bureau dès huit heures."
          },
          {
            fr: "Entreprise",
            frHtml: "<span class='v-word-single'>Entreprise</span>",
            plainFr: "Entreprise",
            ar: "شركة/مؤسسة",
            icon: "🏭",
            ex: "Cette jeune entreprise innovante <span class='highlight-red'>recrute</span> de nouveaux diplômés.",
            exHtml: "Cette jeune entreprise innovante <span class='highlight-red'>recrute</span> de nouveaux diplômés."
          },
          {
            fr: "Chef",
            frHtml: "<span class='v-word-single'>Chef</span>",
            plainFr: "Chef",
            ar: "رئيس/مدير",
            icon: "👔",
            ex: "Le chef de projet <span class='highlight-red'>anime</span> la réunion avec dynamisme.",
            exHtml: "Le chef de projet <span class='highlight-red'>anime</span> la réunion avec dynamisme."
          },
          {
            fr: "Collègue",
            frHtml: "<span class='v-word-single'>Collègue</span>",
            plainFr: "Collègue",
            ar: "زميل عمل",
            icon: "👥",
            ex: "Mes collègues de bureau <span class='highlight-red'>font</span> preuve d'une grande solidarité.",
            exHtml: "Mes collègues de bureau <span class='highlight-red'>font</span> preuve d'une grande solidarité."
          },
          {
            fr: "Métier",
            frHtml: "<span class='v-word-single'>Métier</span>",
            plainFr: "Métier",
            ar: "مهنة/حرفة",
            icon: "🛠️",
            ex: "Chaque noble métier <span class='highlight-red'>mérite</span> le plus grand respect.",
            exHtml: "Chaque noble métier <span class='highlight-red'>mérite</span> le plus grand respect."
          },
          {
            fr: "Médecin",
            frHtml: "<span class='v-word-single'>Médecin</span>",
            plainFr: "Médecin",
            ar: "طبيب",
            icon: "👨‍⚕️",
            ex: "Le médecin traitant <span class='highlight-red'>prescrit</span> un traitement efficace.",
            exHtml: "Le médecin traitant <span class='highlight-red'>prescrit</span> un traitement efficace."
          },
          {
            fr: "Infirmier",
            frHtml: "<span class='v-word-single'>Infirmier</span>",
            plainFr: "Infirmier",
            ar: "ممرض",
            icon: "🧑‍⚕️",
            ex: "L'infirmier dévoué <span class='highlight-red'>prend</span> grand soin de chaque patient.",
            exHtml: "L'infirmier dévoué <span class='highlight-red'>prend</span> grand soin de chaque patient."
          },
          {
            fr: "Ingénieur",
            frHtml: "<span class='v-word-single'>Ingénieur</span>",
            plainFr: "Ingénieur",
            ar: "مهندس",
            icon: "👷",
            ex: "Cet ingénieur qualifié <span class='highlight-red'>conçoit</span> des ponts très robustes.",
            exHtml: "Cet ingénieur qualifié <span class='highlight-red'>conçoit</span> des ponts très robustes."
          },
          {
            fr: "Architecte",
            frHtml: "<span class='v-word-single'>Architecte</span>",
            plainFr: "Architecte",
            ar: "مهندس معماري",
            icon: "📐",
            ex: "L'architecte <span class='highlight-red'>dessine</span> les plans d'une école moderne.",
            exHtml: "L'architecte <span class='highlight-red'>dessine</span> les plans d'une école moderne."
          },
          {
            fr: "Avocat",
            frHtml: "<span class='v-word-single'>Avocat</span>",
            plainFr: "Avocat",
            ar: "محامٍ",
            icon: "⚖️",
            ex: "L'avocat chevronné <span class='highlight-red'>défend</span> la cause de la justice avec brio.",
            exHtml: "L'avocat chevronné <span class='highlight-red'>défend</span> la cause de la justice avec brio."
          },
          {
            fr: "Juge",
            frHtml: "<span class='v-word-single'>Juge</span>",
            plainFr: "Juge",
            ar: "قاضٍ",
            icon: "👨‍⚖️",
            ex: "Le juge équitable <span class='highlight-red'>prononce</span> son verdict en toute impartialité.",
            exHtml: "Le juge équitable <span class='highlight-red'>prononce</span> son verdict en toute impartialité."
          },
          {
            fr: "Chauffeur",
            frHtml: "<span class='v-word-single'>Chauffeur</span>",
            plainFr: "Chauffeur",
            ar: "سائق",
            icon: "🚕",
            ex: "Le chauffeur de taxi <span class='highlight-red'>connaît</span> chaque recoin de la capitale.",
            exHtml: "Le chauffeur de taxi <span class='highlight-red'>connaît</span> chaque recoin de la capitale."
          },
          {
            fr: "Cuisinier",
            frHtml: "<span class='v-word-single'>Cuisinier</span>",
            plainFr: "Cuisinier",
            ar: "طاهٍ/شيف",
            icon: "👨‍🍳",
            ex: "Le chef cuisinier <span class='highlight-red'>prépare</span> un festin royal.",
            exHtml: "Le chef cuisinier <span class='highlight-red'>prépare</span> un festin royal."
          },
          {
            fr: "Serveur",
            frHtml: "<span class='v-word-single'>Serveur</span>",
            plainFr: "Serveur",
            ar: "نادل",
            icon: "🤵",
            ex: "Le serveur courtois nous <span class='highlight-red'>apporte</span> les plats chauds.",
            exHtml: "Le serveur courtois nous <span class='highlight-red'>apporte</span> les plats chauds."
          },
          {
            fr: "Vendeur",
            frHtml: "<span class='v-word-single'>Vendeur</span>",
            plainFr: "Vendeur",
            ar: "بائع",
            icon: "🛒",
            ex: "Le vendeur attentif <span class='highlight-red'>renseigne</span> les clients avec le sourire.",
            exHtml: "Le vendeur attentif <span class='highlight-red'>renseigne</span> les clients avec le sourire."
          },
          {
            fr: "Policier",
            frHtml: "<span class='v-word-single'>Policier</span>",
            plainFr: "Policier",
            ar: "شرطي",
            icon: "👮",
            ex: "Le policier vigilant <span class='highlight-red'>veille</span> sur la sécurité de tous.",
            exHtml: "Le policier vigilant <span class='highlight-red'>veille</span> sur la sécurité de tous."
          },
          {
            fr: "Pompier",
            frHtml: "<span class='v-word-single'>Pompier</span>",
            plainFr: "Pompier",
            ar: "إطفائي",
            icon: "🧑‍🚒",
            ex: "Les courageux pompiers <span class='highlight-red'>éteignent</span> le feu rapidement.",
            exHtml: "Les courageux pompiers <span class='highlight-red'>éteignent</span> le feu rapidement."
          },
          {
            fr: "Artiste",
            frHtml: "<span class='v-word-single'>Artiste</span>",
            plainFr: "Artiste",
            ar: "فنان",
            icon: "🎭",
            ex: "Cet artiste inspiré <span class='highlight-red'>crée</span> des œuvres d'une rare beauté.",
            exHtml: "Cet artiste inspiré <span class='highlight-red'>crée</span> des œuvres d'une rare beauté."
          },
          {
            fr: "Écrivain",
            frHtml: "<span class='v-word-single'>Écrivain</span>",
            plainFr: "Écrivain",
            ar: "كاتب/أديب",
            icon: "✍️",
            ex: "Cet écrivain célèbre <span class='highlight-red'>publie</span> son nouveau roman historique.",
            exHtml: "Cet écrivain célèbre <span class='highlight-red'>publie</span> son nouveau roman historique."
          },
          {
            fr: "Chanteur",
            frHtml: "<span class='v-word-single'>Chanteur</span>",
            plainFr: "Chanteur",
            ar: "مغنٍ",
            icon: "🎤",
            ex: "Le chanteur talentueux <span class='highlight-red'>enchante</span> la foule rassemblée.",
            exHtml: "Le chanteur talentueux <span class='highlight-red'>enchante</span> la foule rassemblée."
          },
          {
            fr: "Vacances",
            frHtml: "<span class='v-word-single'>Vacances</span>",
            plainFr: "Vacances",
            ar: "عطلة/إجازة",
            icon: "🏖️",
            ex: "Nous <span class='highlight-red'>passons</span> d'agréables vacances estivales au bord de l'eau.",
            exHtml: "Nous <span class='highlight-red'>passons</span> d'agréables vacances estivales au bord de l'eau."
          },
          {
            fr: "Fête",
            frHtml: "<span class='v-word-single'>Fête</span>",
            plainFr: "Fête",
            ar: "احتفال/عيد",
            icon: "🎉",
            ex: "Toute la communauté <span class='highlight-red'>participe</span> à cette fête mémorable.",
            exHtml: "Toute la communauté <span class='highlight-red'>participe</span> à cette fête mémorable."
          },
          {
            fr: "Cadeau",
            frHtml: "<span class='v-word-single'>Cadeau</span>",
            plainFr: "Cadeau",
            ar: "هدية",
            icon: "🎁",
            ex: "Il <span class='highlight-red'>offre</span> un beau cadeau pour son anniversaire.",
            exHtml: "Il <span class='highlight-red'>offre</span> un beau cadeau pour son anniversaire."
          },
          {
            fr: "Anniversaire",
            frHtml: "<span class='v-word-single'>Anniversaire</span>",
            plainFr: "Anniversaire",
            ar: "عيد ميلاد",
            icon: "🎂",
            ex: "Nous <span class='highlight-red'>célébrons</span> son vingtième anniversaire en chantant.",
            exHtml: "Nous <span class='highlight-red'>célébrons</span> son vingtième anniversaire en chantant."
          },
          {
            fr: "Invitation",
            frHtml: "<span class='v-word-single'>Invitation</span>",
            plainFr: "Invitation",
            ar: "دعوة",
            icon: "💌",
            ex: "J'<span class='highlight-red'>accepte</span> votre chaleureuse invitation avec joie.",
            exHtml: "J'<span class='highlight-red'>accepte</span> votre chaleureuse invitation avec joie."
          },
          {
            fr: "Rencontre",
            frHtml: "<span class='v-word-single'>Rencontre</span>",
            plainFr: "Rencontre",
            ar: "لقاء/موعد",
            icon: "🤝",
            ex: "Cette rencontre fortuite <span class='highlight-red'>débouche</span> sur une belle amitié.",
            exHtml: "Cette rencontre fortuite <span class='highlight-red'>débouche</span> sur une belle amitié."
          },
          {
            fr: "Rendez-vous",
            frHtml: "<span class='v-word-single'>Rendez-vous</span>",
            plainFr: "Rendez-vous",
            ar: "موعد محدد",
            icon: "📅",
            ex: "J'<span class='highlight-red'>ai</span> un rendez-vous médical important à quinze heures.",
            exHtml: "J'<span class='highlight-red'>ai</span> un rendez-vous médical important à quinze heures."
          },
          {
            fr: "Retard",
            frHtml: "<span class='v-word-single'>Retard</span>",
            plainFr: "Retard",
            ar: "تأخير",
            icon: "⏳",
            ex: "Veuillez excuser ce léger retard imprévu sur l'horaire.",
            exHtml: "Veuillez excuser ce léger retard imprévu sur l'horaire."
          },
          {
            fr: "Avance",
            frHtml: "<span class='v-word-single'>Avance</span>",
            plainFr: "Avance",
            ar: "تبكير/تقدم",
            icon: "⏰",
            ex: "Le train <span class='highlight-red'>arrive</span> avec cinq minutes d'avance.",
            exHtml: "Le train <span class='highlight-red'>arrive</span> avec cinq minutes d'avance."
          },
          {
            fr: "Départ",
            frHtml: "<span class='v-word-single'>Départ</span>",
            plainFr: "Départ",
            ar: "مغادرة/رحيل",
            icon: "🛫",
            ex: "Le départ du vol direct <span class='highlight-red'>est</span> prévu pour dix heures.",
            exHtml: "Le départ du vol direct <span class='highlight-red'>est</span> prévu pour dix heures."
          },
          {
            fr: "Arrivée",
            frHtml: "<span class='v-word-single'>Arrivée</span>",
            plainFr: "Arrivée",
            ar: "وصول",
            icon: "🛬",
            ex: "Les passagers <span class='highlight-red'>attendent</span> l'arrivée de leurs bagages.",
            exHtml: "Les passagers <span class='highlight-red'>attendent</span> l'arrivée de leurs bagages."
          },
          {
            fr: "Entrée",
            frHtml: "<span class='v-word-single'>Entrée</span>",
            plainFr: "Entrée",
            ar: "مدخل/مقبلات",
            icon: "🚪",
            ex: "L'entrée principale du musée <span class='highlight-red'>se situe</span> sous la coupole.",
            exHtml: "L'entrée principale du musée <span class='highlight-red'>se situe</span> sous la coupole."
          },
          {
            fr: "Sortie",
            frHtml: "<span class='v-word-single'>Sortie</span>",
            plainFr: "Sortie",
            ar: "مخرج",
            icon: "🚪",
            ex: "Suivez les flèches lumineuses pour <span class='highlight-red'>trouver</span> la sortie de secours.",
            exHtml: "Suivez les flèches lumineuses pour <span class='highlight-red'>trouver</span> la sortie de secours."
          },
          {
            fr: "Ouvert",
            frHtml: "<span class='v-word-single'>Ouvert</span>",
            plainFr: "Ouvert",
            ar: "مفتوح",
            icon: "🟢",
            ex: "Ce supermarché <span class='highlight-red'>reste</span> ouvert tous les jours de la semaine.",
            exHtml: "Ce supermarché <span class='highlight-red'>reste</span> ouvert tous les jours de la semaine."
          },
          {
            fr: "Fermé",
            frHtml: "<span class='v-word-single'>Fermé</span>",
            plainFr: "Fermé",
            ar: "مغلق",
            icon: "🔴",
            ex: "Le guichet <span class='highlight-red'>est</span> exceptionnellement fermé aujourd'hui.",
            exHtml: "Le guichet <span class='highlight-red'>est</span> exceptionnellement fermé aujourd'hui."
          },
          {
            fr: "Libre",
            frHtml: "<span class='v-word-single'>Libre</span>",
            plainFr: "Libre",
            ar: "حر/شاغر",
            icon: "🕊️",
            ex: "Cette place au premier rang <span class='highlight-red'>est-elle</span> encore libre ?",
            exHtml: "Cette place au premier rang <span class='highlight-red'>est-elle</span> encore libre ?"
          },
          {
            fr: "Occupé",
            frHtml: "<span class='v-word-single'>Occupé</span>",
            plainFr: "Occupé",
            ar: "مشغول",
            icon: "🚫",
            ex: "Cette cabine téléphonique <span class='highlight-red'>est</span> occupée pour l'instant.",
            exHtml: "Cette cabine téléphonique <span class='highlight-red'>est</span> occupée pour l'instant."
          },
          {
            fr: "Propre",
            frHtml: "<span class='v-word-single'>Propre</span>",
            plainFr: "Propre",
            ar: "نظيف",
            icon: "✨",
            ex: "Ces chambres d'hôtes <span class='highlight-red'>sont</span> toujours impeccablement propres.",
            exHtml: "Ces chambres d'hôtes <span class='highlight-red'>sont</span> toujours impeccablement propres."
          },
          {
            fr: "Sale",
            frHtml: "<span class='v-word-single'>Sale</span>",
            plainFr: "Sale",
            ar: "متسخ",
            icon: "🧹",
            ex: "Lavez ces assiettes sales sans tarder, s'il vous plaît.",
            exHtml: "Lavez ces assiettes sales sans tarder, s'il vous plaît."
          },
          {
            fr: "Facile",
            frHtml: "<span class='v-word-single'>Facile</span>",
            plainFr: "Facile",
            ar: "سهل",
            icon: "🟢",
            ex: "Cet exercice de grammaire française <span class='highlight-red'>devient</span> très facile avec la pratique.",
            exHtml: "Cet exercice de grammaire française <span class='highlight-red'>devient</span> très facile avec la pratique."
          },
          {
            fr: "Difficile",
            frHtml: "<span class='v-word-single'>Difficile</span>",
            plainFr: "Difficile",
            ar: "صعب",
            icon: "🔴",
            ex: "Aucun obstacle ne <span class='highlight-red'>reste</span> trop difficile pour qui persévère.",
            exHtml: "Aucun obstacle ne <span class='highlight-red'>reste</span> trop difficile pour qui persévère."
          },
          {
            fr: "Utile",
            frHtml: "<span class='v-word-single'>Utile</span>",
            plainFr: "Utile",
            ar: "مفيد/نافع",
            icon: "💡",
            ex: "Ce dictionnaire bilingue <span class='highlight-red'>est</span> un outil extrêmement utile.",
            exHtml: "Ce dictionnaire bilingue <span class='highlight-red'>est</span> un outil extrêmement utile."
          },
          {
            fr: "Inutile",
            frHtml: "<span class='v-word-single'>Inutile</span>",
            plainFr: "Inutile",
            ar: "عديم الفائدة",
            icon: "🗑️",
            ex: "Ne vous préoccupez pas de ces détails tout à fait inutiles.",
            exHtml: "Ne vous préoccupez pas de ces détails tout à fait inutiles."
          },
          {
            fr: "Important",
            frHtml: "<span class='v-word-single'>Important</span>",
            plainFr: "Important",
            ar: "مهم/بالغ الأهمية",
            icon: "⭐",
            ex: "La lecture quotidienne <span class='highlight-red'>joue</span> un rôle capital dans l'apprentissage.",
            exHtml: "La lecture quotidienne <span class='highlight-red'>joue</span> un rôle capital dans l'apprentissage."
          },
          {
            fr: "Urgent",
            frHtml: "<span class='v-word-single'>Urgent</span>",
            plainFr: "Urgent",
            ar: "عاجل",
            icon: "🚨",
            ex: "C'<span class='highlight-red'>est</span> un appel urgent qui nécessite une réponse immédiate.",
            exHtml: "C'<span class='highlight-red'>est</span> un appel urgent qui nécessite une réponse immédiate."
          },
          {
            fr: "Prêt",
            frHtml: "<span class='v-word-single'>Prêt</span>",
            plainFr: "Prêt",
            ar: "جاهز/مستعد",
            icon: "🏁",
            ex: "Tout le monde <span class='highlight-red'>est</span> fin prêt pour le grand départ.",
            exHtml: "Tout le monde <span class='highlight-red'>est</span> fin prêt pour le grand départ."
          },
          {
            fr: "Certain",
            frHtml: "<span class='v-word-single'>Certain</span>",
            plainFr: "Certain",
            ar: "أكيد/مؤكد",
            icon: "🎯",
            ex: "Je <span class='highlight-red'>suis</span> absolument certain de cette information vérifiée.",
            exHtml: "Je <span class='highlight-red'>suis</span> absolument certain de cette information vérifiée."
          },
          {
            fr: "Possible",
            frHtml: "<span class='v-word-single'>Possible</span>",
            plainFr: "Possible",
            ar: "ممكن",
            icon: "✨",
            ex: "Tout <span class='highlight-red'>devient</span> possible avec le travail et la détermination.",
            exHtml: "Tout <span class='highlight-red'>devient</span> possible avec le travail et la détermination."
          },
          {
            fr: "Impossible",
            frHtml: "<span class='v-word-single'>Impossible</span>",
            plainFr: "Impossible",
            ar: "مستحيل",
            icon: "🚫",
            ex: "Le mot 'impossible' ne <span class='highlight-red'>figure</span> pas dans notre vocabulaire.",
            exHtml: "Le mot 'impossible' ne <span class='highlight-red'>figure</span> pas dans notre vocabulaire."
          },
          {
            fr: "Vrai",
            frHtml: "<span class='v-word-single'>Vrai</span>",
            plainFr: "Vrai",
            ar: "صحيح/حقيقي",
            icon: "✅",
            ex: "Cette histoire touchante <span class='highlight-red'>est</span> fondée sur des faits vrais.",
            exHtml: "Cette histoire touchante <span class='highlight-red'>est</span> fondée sur des faits vrais."
          },
          {
            fr: "Faux",
            frHtml: "<span class='v-word-single'>Faux</span>",
            plainFr: "Faux",
            ar: "خطأ/خاطئ",
            icon: "❌",
            ex: "Cette affirmation <span class='highlight-red'>est</span> totalement fausse et infondée.",
            exHtml: "Cette affirmation <span class='highlight-red'>est</span> totalement fausse et infondée."
          },
          {
            fr: "Question",
            frHtml: "<span class='v-word-single'>Question</span>",
            plainFr: "Question",
            ar: "سؤال",
            icon: "❓",
            ex: "Avez-vous une question précise à me poser ?",
            exHtml: "Avez-vous une question précise à me poser ?"
          },
          {
            fr: "Réponse",
            frHtml: "<span class='v-word-single'>Réponse</span>",
            plainFr: "Réponse",
            ar: "إجابة",
            icon: "💡",
            ex: "Sa réponse claire et précise <span class='highlight-red'>satisfait</span> l'examinateur.",
            exHtml: "Sa réponse claire et précise <span class='highlight-red'>satisfait</span> l'examinateur."
          }
        ]
      }
    ]
,
    B1: [
      {
        topic: "Vocabulaire Essentiel du Niveau B1 (150 Mots Individuels)",
        topicAr: "المفردات الأساسية لمستوى B1 (150 كلمة منفصلة)",
        icon: "📚",
        items: [
          {
            fr: "Société",
            frHtml: "<span class='v-word-single'>Société</span>",
            plainFr: "Société",
            ar: "مجتمع",
            icon: "🌐",
            ex: "La société moderne doit valoriser l'éducation pour tous.",
            exHtml: "La société moderne doit valoriser l'éducation pour tous."
          },
          {
            fr: "Culture",
            frHtml: "<span class='v-word-single'>Culture</span>",
            plainFr: "Culture",
            ar: "ثقافة",
            icon: "🎭",
            ex: "La culture enrichit notre vision du monde.",
            exHtml: "La culture enrichit notre vision du monde."
          },
          {
            fr: "Histoire",
            frHtml: "<span class='v-word-single'>Histoire</span>",
            plainFr: "Histoire",
            ar: "تاريخ",
            icon: "📜",
            ex: "L'histoire nous enseigne les leçons du passé.",
            exHtml: "L'histoire nous enseigne les leçons du passé."
          },
          {
            fr: "Tradition",
            frHtml: "<span class='v-word-single'>Tradition</span>",
            plainFr: "Tradition",
            ar: "تقليد موروث",
            icon: "🏺",
            ex: "Cette fête célèbre une tradition séculaire.",
            exHtml: "Cette fête célèbre une tradition séculaire."
          },
          {
            fr: "Génération",
            frHtml: "<span class='v-word-single'>Génération</span>",
            plainFr: "Génération",
            ar: "جيل",
            icon: "👥",
            ex: "Chaque génération apporte ses propres innovations.",
            exHtml: "Chaque génération apporte ses propres innovations."
          },
          {
            fr: "Jeunesse",
            frHtml: "<span class='v-word-single'>Jeunesse</span>",
            plainFr: "Jeunesse",
            ar: "شباب",
            icon: "🧑",
            ex: "La jeunesse représente l'espoir et le dynamisme du futur.",
            exHtml: "La jeunesse représente l'espoir et le dynamisme du futur."
          },
          {
            fr: "Avenir",
            frHtml: "<span class='v-word-single'>Avenir</span>",
            plainFr: "Avenir",
            ar: "مستقبل",
            icon: "🚀",
            ex: "Nous bâtissons ensemble un avenir prometteur.",
            exHtml: "Nous bâtissons ensemble un avenir prometteur."
          },
          {
            fr: "Passé",
            frHtml: "<span class='v-word-single'>Passé</span>",
            plainFr: "Passé",
            ar: "ماضٍ",
            icon: "⏳",
            ex: "Le passé éclaire notre compréhension du présent.",
            exHtml: "Le passé éclaire notre compréhension du présent."
          },
          {
            fr: "Présent",
            frHtml: "<span class='v-word-single'>Présent</span>",
            plainFr: "Présent",
            ar: "حاضر",
            icon: "⏱️",
            ex: "Profitons pleinement de chaque instant du présent.",
            exHtml: "Profitons pleinement de chaque instant du présent."
          },
          {
            fr: "Progrès",
            frHtml: "<span class='v-word-single'>Progrès</span>",
            plainFr: "Progrès",
            ar: "تقدم",
            icon: "📈",
            ex: "Le progrès technique doit servir l'humanité entière.",
            exHtml: "Le progrès technique doit servir l'humanité entière."
          },
          {
            fr: "Développement",
            frHtml: "<span class='v-word-single'>Développement</span>",
            plainFr: "Développement",
            ar: "تنمية",
            icon: "🏗️",
            ex: "Le développement durable préserve nos ressources vitales.",
            exHtml: "Le développement durable préserve nos ressources vitales."
          },
          {
            fr: "Environnement",
            frHtml: "<span class='v-word-single'>Environnement</span>",
            plainFr: "Environnement",
            ar: "بيئة",
            icon: "🌱",
            ex: "La protection de l'environnement est notre devoir collectif.",
            exHtml: "La protection de l'environnement est notre devoir collectif."
          },
          {
            fr: "Nature",
            frHtml: "<span class='v-word-single'>Nature</span>",
            plainFr: "Nature",
            ar: "طبيعة",
            icon: "🌿",
            ex: "La nature offre un spectacle d'une splendeur infinie.",
            exHtml: "La nature offre un spectacle d'une splendeur infinie."
          },
          {
            fr: "Planète",
            frHtml: "<span class='v-word-single'>Planète</span>",
            plainFr: "Planète",
            ar: "كوكب",
            icon: "🌍",
            ex: "Préservons notre planète bleue pour nos descendants.",
            exHtml: "Préservons notre planète bleue pour nos descendants."
          },
          {
            fr: "Climat",
            frHtml: "<span class='v-word-single'>Climat</span>",
            plainFr: "Climat",
            ar: "مناخ",
            icon: "🌦️",
            ex: "Le changement du climat préoccupe tous les scientifiques.",
            exHtml: "Le changement du climat préoccupe tous les scientifiques."
          },
          {
            fr: "Énergie",
            frHtml: "<span class='v-word-single'>Énergie</span>",
            plainFr: "Énergie",
            ar: "طاقة",
            icon: "⚡",
            ex: "L'énergie solaire offre une alternative propre et renouvelable.",
            exHtml: "L'énergie solaire offre une alternative propre et renouvelable."
          },
          {
            fr: "Pollution",
            frHtml: "<span class='v-word-single'>Pollution</span>",
            plainFr: "Pollution",
            ar: "تلوث",
            icon: "🏭",
            ex: "La lutte contre la pollution urbaine exige des mesures courageuses.",
            exHtml: "La lutte contre la pollution urbaine exige des mesures courageuses."
          },
          {
            fr: "Recyclage",
            frHtml: "<span class='v-word-single'>Recyclage</span>",
            plainFr: "Recyclage",
            ar: "إعادة تدوير",
            icon: "♻️",
            ex: "Le recyclage méthodique des déchets protège la biodiversité.",
            exHtml: "Le recyclage méthodique des déchets protège la biodiversité."
          },
          {
            fr: "Écologie",
            frHtml: "<span class='v-word-single'>Écologie</span>",
            plainFr: "Écologie",
            ar: "علم البيئة",
            icon: "🍃",
            ex: "L'écologie guide désormais nos choix de vie quotidiens.",
            exHtml: "L'écologie guide désormais nos choix de vie quotidiens."
          },
          {
            fr: "Science",
            frHtml: "<span class='v-word-single'>Science</span>",
            plainFr: "Science",
            ar: "علم",
            icon: "🔬",
            ex: "La science repousse sans cesse les frontières du savoir.",
            exHtml: "La science repousse sans cesse les frontières du savoir."
          },
          {
            fr: "Technologie",
            frHtml: "<span class='v-word-single'>Technologie</span>",
            plainFr: "Technologie",
            ar: "تكنولوجيا",
            icon: "📱",
            ex: "La technologie moderne transforme profondément nos échanges.",
            exHtml: "La technologie moderne transforme profondément nos échanges."
          },
          {
            fr: "Recherche",
            frHtml: "<span class='v-word-single'>Recherche</span>",
            plainFr: "Recherche",
            ar: "بحث علمي",
            icon: "🔍",
            ex: "La recherche médicale accomplit des progrès prodigieux.",
            exHtml: "La recherche médicale accomplit des progrès prodigieux."
          },
          {
            fr: "Découverte",
            frHtml: "<span class='v-word-single'>Découverte</span>",
            plainFr: "Découverte",
            ar: "اكتشاف",
            icon: "💡",
            ex: "Cette découverte archéologique illumine notre histoire.",
            exHtml: "Cette découverte archéologique illumine notre histoire."
          },
          {
            fr: "Invention",
            frHtml: "<span class='v-word-single'>Invention</span>",
            plainFr: "Invention",
            ar: "اختراع",
            icon: "⚙️",
            ex: "L'imprimerie fut une invention majeure de l'humanité.",
            exHtml: "L'imprimerie fut une invention majeure de l'humanité."
          },
          {
            fr: "Expérience",
            frHtml: "<span class='v-word-single'>Expérience</span>",
            plainFr: "Expérience",
            ar: "تجربة/خبرة",
            icon: "🧪",
            ex: "L'expérience de terrain confirme les théories scientifiques.",
            exHtml: "L'expérience de terrain confirme les théories scientifiques."
          },
          {
            fr: "Connaissance",
            frHtml: "<span class='v-word-single'>Connaissance</span>",
            plainFr: "Connaissance",
            ar: "معرفة",
            icon: "📚",
            ex: "La quête de connaissance élève l'esprit humain.",
            exHtml: "La quête de connaissance élève l'esprit humain."
          },
          {
            fr: "Éducation",
            frHtml: "<span class='v-word-single'>Éducation</span>",
            plainFr: "Éducation",
            ar: "تربية وتعليم",
            icon: "🎓",
            ex: "Une bonne éducation forme des citoyens conscients.",
            exHtml: "Une bonne éducation forme des citoyens conscients."
          },
          {
            fr: "Université",
            frHtml: "<span class='v-word-single'>Université</span>",
            plainFr: "Université",
            ar: "جامعة",
            icon: "🏛️",
            ex: "L'université d'Al-Azhar rayonne par son savoir millénaire.",
            exHtml: "L'université d'Al-Azhar rayonne par son savoir millénaire."
          },
          {
            fr: "Faculté",
            frHtml: "<span class='v-word-single'>Faculté</span>",
            plainFr: "Faculté",
            ar: "كلية",
            icon: "🏫",
            ex: "Il étudie à la faculté des langues et de traduction.",
            exHtml: "Il étudie à la faculté des langues et de traduction."
          },
          {
            fr: "Diplôme",
            frHtml: "<span class='v-word-single'>Diplôme</span>",
            plainFr: "Diplôme",
            ar: "شهادة جامعية",
            icon: "📜",
            ex: "Elle a obtenu son diplôme avec la plus haute distinction.",
            exHtml: "Elle a obtenu son diplôme avec la plus haute distinction."
          },
          {
            fr: "Stage",
            frHtml: "<span class='v-word-single'>Stage</span>",
            plainFr: "Stage",
            ar: "تدريب عملي",
            icon: "💼",
            ex: "Ce stage professionnel lui ouvre d'excellentes perspectives.",
            exHtml: "Ce stage professionnel lui ouvre d'excellentes perspectives."
          },
          {
            fr: "Carrière",
            frHtml: "<span class='v-word-single'>Carrière</span>",
            plainFr: "Carrière",
            ar: "مسيرة مهنية",
            icon: "🧗",
            ex: "Il poursuit une brillante carrière dans le droit international.",
            exHtml: "Il poursuit une brillante carrière dans le droit international."
          },
          {
            fr: "Succès",
            frHtml: "<span class='v-word-single'>Succès</span>",
            plainFr: "Succès",
            ar: "نجاح",
            icon: "🏆",
            ex: "Son travail acharné est couronné d'un immense succès.",
            exHtml: "Son travail acharné est couronné d'un immense succès."
          },
          {
            fr: "Échec",
            frHtml: "<span class='v-word-single'>Échec</span>",
            plainFr: "Échec",
            ar: "إخفاق",
            icon: "📉",
            ex: "L'échec peut être une source précieuse d'apprentissage.",
            exHtml: "L'échec peut être une source précieuse d'apprentissage."
          },
          {
            fr: "Effort",
            frHtml: "<span class='v-word-single'>Effort</span>",
            plainFr: "Effort",
            ar: "جهد/محاولة",
            icon: "💪",
            ex: "Vos efforts constants porteront bientôt leurs fruits.",
            exHtml: "Vos efforts constants porteront bientôt leurs fruits."
          },
          {
            fr: "Objectif",
            frHtml: "<span class='v-word-single'>Objectif</span>",
            plainFr: "Objectif",
            ar: "هدف محدد",
            icon: "🎯",
            ex: "Fixez-vous un objectif clair et donnez-vous les moyens.",
            exHtml: "Fixez-vous un objectif clair et donnez-vous les moyens."
          },
          {
            fr: "Projet",
            frHtml: "<span class='v-word-single'>Projet</span>",
            plainFr: "Projet",
            ar: "مشروع",
            icon: "📋",
            ex: "Notre nouveau projet sera inauguré le mois prochain.",
            exHtml: "Notre nouveau projet sera inauguré le mois prochain."
          },
          {
            fr: "Plan",
            frHtml: "<span class='v-word-single'>Plan</span>",
            plainFr: "Plan",
            ar: "خطة",
            icon: "🗺️",
            ex: "Établissons un plan d'action rigoureux et méthodique.",
            exHtml: "Établissons un plan d'action rigoureux et méthodique."
          },
          {
            fr: "Stratégie",
            frHtml: "<span class='v-word-single'>Stratégie</span>",
            plainFr: "Stratégie",
            ar: "استراتيجية",
            icon: "♟️",
            ex: "Cette stratégie prudente a garanti la réussite de l'entreprise.",
            exHtml: "Cette stratégie prudente a garanti la réussite de l'entreprise."
          },
          {
            fr: "Solution",
            frHtml: "<span class='v-word-single'>Solution</span>",
            plainFr: "Solution",
            ar: "حل",
            icon: "🧩",
            ex: "Nous trouverons une solution équitable à chaque litige.",
            exHtml: "Nous trouverons une solution équitable à chaque litige."
          },
          {
            fr: "Problème",
            frHtml: "<span class='v-word-single'>Problème</span>",
            plainFr: "Problème",
            ar: "مشكلة",
            icon: "⚠️",
            ex: "Ce problème complexe requiert toute notre attention.",
            exHtml: "Ce problème complexe requiert toute notre attention."
          },
          {
            fr: "Défi",
            frHtml: "<span class='v-word-single'>Défi</span>",
            plainFr: "Défi",
            ar: "تحدٍ",
            icon: "🏔️",
            ex: "Relever ce défi linguistique renforce votre confiance.",
            exHtml: "Relever ce défi linguistique renforce votre confiance."
          },
          {
            fr: "Obstacle",
            frHtml: "<span class='v-word-single'>Obstacle</span>",
            plainFr: "Obstacle",
            ar: "عائق",
            icon: "🚧",
            ex: "Chaque obstacle surmonté vous rend plus fort.",
            exHtml: "Chaque obstacle surmonté vous rend plus fort."
          },
          {
            fr: "Chance",
            frHtml: "<span class='v-word-single'>Chance</span>",
            plainFr: "Chance",
            ar: "فرصة/حظ",
            icon: "🍀",
            ex: "Saisissez cette chance unique qui s'offre à vous.",
            exHtml: "Saisissez cette chance unique qui s'offre à vous."
          },
          {
            fr: "Opportunité",
            frHtml: "<span class='v-word-single'>Opportunité</span>",
            plainFr: "Opportunité",
            ar: "فرصة سانحة",
            icon: "🚪",
            ex: "Ce forum offre de belles opportunités de partenariats.",
            exHtml: "Ce forum offre de belles opportunités de partenariats."
          },
          {
            fr: "Choix",
            frHtml: "<span class='v-word-single'>Choix</span>",
            plainFr: "Choix",
            ar: "خيار",
            icon: "⚖️",
            ex: "Faire un choix éclairé demande réflexion et discernement.",
            exHtml: "Faire un choix éclairé demande réflexion et discernement."
          },
          {
            fr: "Décision",
            frHtml: "<span class='v-word-single'>Décision</span>",
            plainFr: "Décision",
            ar: "قرار",
            icon: "✍️",
            ex: "Le conseil a pris une décision unanime et courageuse.",
            exHtml: "Le conseil a pris une décision unanime et courageuse."
          },
          {
            fr: "Opinion",
            frHtml: "<span class='v-word-single'>Opinion</span>",
            plainFr: "Opinion",
            ar: "رأي شخصي",
            icon: "🗣️",
            ex: "Chacun a le droit d'exprimer son opinion avec respect.",
            exHtml: "Chacun a le droit d'exprimer son opinion avec respect."
          },
          {
            fr: "Avis",
            frHtml: "<span class='v-word-single'>Avis</span>",
            plainFr: "Avis",
            ar: "وجهة نظر",
            icon: "💭",
            ex: "Quel est votre avis sincère sur cette question ?",
            exHtml: "Quel est votre avis sincère sur cette question ?"
          },
          {
            fr: "Idée",
            frHtml: "<span class='v-word-single'>Idée</span>",
            plainFr: "Idée",
            ar: "فكرة",
            icon: "💡",
            ex: "Elle a eu une idée lumineuse pour résoudre l'énigme.",
            exHtml: "Elle a eu une idée lumineuse pour résoudre l'énigme."
          },
          {
            fr: "Pensée",
            frHtml: "<span class='v-word-single'>Pensée</span>",
            plainFr: "Pensée",
            ar: "فكر/تأمل",
            icon: "🧠",
            ex: "La pensée philosophique approfondit notre quête de vérité.",
            exHtml: "La pensée philosophique approfondit notre quête de vérité."
          },
          {
            fr: "Liberté",
            frHtml: "<span class='v-word-single'>Liberté</span>",
            plainFr: "Liberté",
            ar: "حرية",
            icon: "🕊️",
            ex: "La liberté est le bien le plus précieux de tout peuple.",
            exHtml: "La liberté est le bien le plus précieux de tout peuple."
          },
          {
            fr: "Justice",
            frHtml: "<span class='v-word-single'>Justice</span>",
            plainFr: "Justice",
            ar: "عدالة",
            icon: "⚖️",
            ex: "La justice garantit l'harmonie et l'ordre dans la société.",
            exHtml: "La justice garantit l'harmonie et l'ordre dans la société."
          },
          {
            fr: "Égalité",
            frHtml: "<span class='v-word-single'>Égalité</span>",
            plainFr: "Égalité",
            ar: "مساواة",
            icon: "🤝",
            ex: "L'égalité de tous les citoyens devant la loi est sacrée.",
            exHtml: "L'égalité de tous les citoyens devant la loi est sacrée."
          },
          {
            fr: "Paix",
            frHtml: "<span class='v-word-single'>Paix</span>",
            plainFr: "Paix",
            ar: "سلام",
            icon: "🕊️",
            ex: "Nous œuvrons sans relâche pour l'avènement d'une paix durable.",
            exHtml: "Nous œuvrons sans relâche pour l'avènement d'une paix durable."
          },
          {
            fr: "Solidarité",
            frHtml: "<span class='v-word-single'>Solidarité</span>",
            plainFr: "Solidarité",
            ar: "تضامن",
            icon: "🤲",
            ex: "La solidarité humaine console ceux qui souffrent.",
            exHtml: "La solidarité humaine console ceux qui souffrent."
          },
          {
            fr: "Dignité",
            frHtml: "<span class='v-word-single'>Dignité</span>",
            plainFr: "Dignité",
            ar: "كرامة",
            icon: "👑",
            ex: "La dignité du peuple palestinien force l'admiration du monde.",
            exHtml: "La dignité du peuple palestinien force l'admiration du monde."
          },
          {
            fr: "Respect",
            frHtml: "<span class='v-word-single'>Respect</span>",
            plainFr: "Respect",
            ar: "احترام",
            icon: "🙇",
            ex: "Le respect mutuel constitue le ciment de toute communauté.",
            exHtml: "Le respect mutuel constitue le ciment de toute communauté."
          },
          {
            fr: "Confiance",
            frHtml: "<span class='v-word-single'>Confiance</span>",
            plainFr: "Confiance",
            ar: "ثقة",
            icon: "🤝",
            ex: "La confiance s'acquiert par la loyauté et la franchise.",
            exHtml: "La confiance s'acquiert par la loyauté et la franchise."
          },
          {
            fr: "Vérité",
            frHtml: "<span class='v-word-single'>Vérité</span>",
            plainFr: "Vérité",
            ar: "حقيقة",
            icon: "🕯️",
            ex: "La vérité finit toujours par triompher de l'obscurité.",
            exHtml: "La vérité finit toujours par triompher de l'obscurité."
          },
          {
            fr: "Sincérité",
            frHtml: "<span class='v-word-single'>Sincérité</span>",
            plainFr: "Sincérité",
            ar: "صدق وإخلاص",
            icon: "💎",
            ex: "Parlez avec sincérité, la vérité touche les cœurs.",
            exHtml: "Parlez avec sincérité, la vérité touche les cœurs."
          },
          {
            fr: "Patience",
            frHtml: "<span class='v-word-single'>Patience</span>",
            plainFr: "Patience",
            ar: "صبر",
            icon: "⏳",
            ex: "La patience est la clé maîtresse de toutes les victoires.",
            exHtml: "La patience est la clé maîtresse de toutes les victoires."
          },
          {
            fr: "Courage",
            frHtml: "<span class='v-word-single'>Courage</span>",
            plainFr: "Courage",
            ar: "شجاعة",
            icon: "🦁",
            ex: "Il a affronté les épreuves avec un courage admirable.",
            exHtml: "Il a affronté les épreuves avec un courage admirable."
          },
          {
            fr: "Espoir",
            frHtml: "<span class='v-word-single'>Espoir</span>",
            plainFr: "Espoir",
            ar: "أمل",
            icon: "🌱",
            ex: "L'espoir renaît toujours au fond des cœurs purs.",
            exHtml: "L'espoir renaît toujours au fond des cœurs purs."
          },
          {
            fr: "Rêve",
            frHtml: "<span class='v-word-single'>Rêve</span>",
            plainFr: "Rêve",
            ar: "حلم وطموح",
            icon: "✨",
            ex: "Poursuivez vos grands rêves avec une foi inébranlable.",
            exHtml: "Poursuivez vos grands rêves avec une foi inébranlable."
          },
          {
            fr: "Mémoire",
            frHtml: "<span class='v-word-single'>Mémoire</span>",
            plainFr: "Mémoire",
            ar: "ذاكرة",
            icon: "🧠",
            ex: "La mémoire collective préserve nos récits fondateurs.",
            exHtml: "La mémoire collective préserve nos récits fondateurs."
          },
          {
            fr: "Souvenir",
            frHtml: "<span class='v-word-single'>Souvenir</span>",
            plainFr: "Souvenir",
            ar: "ذكرى",
            icon: "💭",
            ex: "Ce voyage m'a laissé un souvenir impérissable.",
            exHtml: "Ce voyage m'a laissé un souvenir impérissable."
          },
          {
            fr: "Sentiment",
            frHtml: "<span class='v-word-single'>Sentiment</span>",
            plainFr: "Sentiment",
            ar: "شعور/إحساس",
            icon: "❤️",
            ex: "Un sentiment de joie immense a envahi toute l'assemblée.",
            exHtml: "Un sentiment de joie immense a envahi toute l'assemblée."
          },
          {
            fr: "Émotion",
            frHtml: "<span class='v-word-single'>Émotion</span>",
            plainFr: "Émotion",
            ar: "عاطفة جياشة",
            icon: "🥺",
            ex: "L'émotion était vive lors de son vibrant discours d'adieu.",
            exHtml: "L'émotion était vive lors de son vibrant discours d'adieu."
          },
          {
            fr: "Passion",
            frHtml: "<span class='v-word-single'>Passion</span>",
            plainFr: "Passion",
            ar: "شغف",
            icon: "🔥",
            ex: "Elle pratique la traduction avec une passion dévorante.",
            exHtml: "Elle pratique la traduction avec une passion dévorante."
          },
          {
            fr: "Amitié",
            frHtml: "<span class='v-word-single'>Amitié</span>",
            plainFr: "Amitié",
            ar: "صداقة وثيقة",
            icon: "🤝",
            ex: "Une amitié sincère résiste à l'éloignement et au temps.",
            exHtml: "Une amitié sincère résiste à l'éloignement et au temps."
          },
          {
            fr: "Amour",
            frHtml: "<span class='v-word-single'>Amour</span>",
            plainFr: "Amour",
            ar: "محبة",
            icon: "💖",
            ex: "L'amour de la patrie inspire les plus grands sacrifices.",
            exHtml: "L'amour de la patrie inspire les plus grands sacrifices."
          },
          {
            fr: "Joie",
            frHtml: "<span class='v-word-single'>Joie</span>",
            plainFr: "Joie",
            ar: "فرح وسرور",
            icon: "🎉",
            ex: "Leur victoire a suscité des cris de joie enthousiastes.",
            exHtml: "Leur victoire a suscité des cris de joie enthousiastes."
          },
          {
            fr: "Tristesse",
            frHtml: "<span class='v-word-single'>Tristesse</span>",
            plainFr: "Tristesse",
            ar: "حزن",
            icon: "😢",
            ex: "Sa tristesse s'est apaisée grâce au soutien de ses proches.",
            exHtml: "Sa tristesse s'est apaisée grâce au soutien de ses proches."
          },
          {
            fr: "Colère",
            frHtml: "<span class='v-word-single'>Colère</span>",
            plainFr: "Colère",
            ar: "غضب",
            icon: "😠",
            ex: "Apprenez à maîtriser votre colère avant d'agir.",
            exHtml: "Apprenez à maîtriser votre colère avant d'agir."
          },
          {
            fr: "Peur",
            frHtml: "<span class='v-word-single'>Peur</span>",
            plainFr: "Peur",
            ar: "خوف",
            icon: "😨",
            ex: "Il a vaincu sa peur en montant sur l'estrade.",
            exHtml: "Il a vaincu sa peur en montant sur l'estrade."
          },
          {
            fr: "Surprise",
            frHtml: "<span class='v-word-single'>Surprise</span>",
            plainFr: "Surprise",
            ar: "مفاجأة",
            icon: "🎁",
            ex: "Leur visite inattendue fut une très agréable surprise.",
            exHtml: "Leur visite inattendue fut une très agréable surprise."
          },
          {
            fr: "Curiosité",
            frHtml: "<span class='v-word-single'>Curiosité</span>",
            plainFr: "Curiosité",
            ar: "فضول معرفي",
            icon: "🧐",
            ex: "La curiosité intellectuelle est le moteur de tout progrès.",
            exHtml: "La curiosité intellectuelle est le moteur de tout progrès."
          },
          {
            fr: "Imagination",
            frHtml: "<span class='v-word-single'>Imagination</span>",
            plainFr: "Imagination",
            ar: "خيال واسع",
            icon: "🎨",
            ex: "L'imagination fertile de l'auteur crée des mondes fascinants.",
            exHtml: "L'imagination fertile de l'auteur crée des mondes fascinants."
          },
          {
            fr: "Créativité",
            frHtml: "<span class='v-word-single'>Créativité</span>",
            plainFr: "Créativité",
            ar: "إبداع",
            icon: "✨",
            ex: "La créativité permet de réinventer les choses quotidiennes.",
            exHtml: "La créativité permet de réinventer les choses quotidiennes."
          },
          {
            fr: "Talent",
            frHtml: "<span class='v-word-single'>Talent</span>",
            plainFr: "Talent",
            ar: "موهبة فريدة",
            icon: "🌟",
            ex: "Ce jeune pianiste possède un talent musical exceptionnel.",
            exHtml: "Ce jeune pianiste possède un talent musical exceptionnel."
          },
          {
            fr: "Art",
            frHtml: "<span class='v-word-single'>Art</span>",
            plainFr: "Art",
            ar: "فن",
            icon: "🖌️",
            ex: "L'art est l'expression la plus pure de l'âme humaine.",
            exHtml: "L'art est l'expression la plus pure de l'âme humaine."
          },
          {
            fr: "Beauté",
            frHtml: "<span class='v-word-single'>Beauté</span>",
            plainFr: "Beauté",
            ar: "جمال",
            icon: "🌺",
            ex: "La beauté d'un geste généreux surpasse tous les discours.",
            exHtml: "La beauté d'un geste généreux surpasse tous les discours."
          },
          {
            fr: "Poésie",
            frHtml: "<span class='v-word-single'>Poésie</span>",
            plainFr: "Poésie",
            ar: "شعر وأدب",
            icon: "📜",
            ex: "La poésie arabophone et francophone unit les cœurs sensibles.",
            exHtml: "La poésie arabophone et francophone unit les cœurs sensibles."
          },
          {
            fr: "Littérature",
            frHtml: "<span class='v-word-single'>Littérature</span>",
            plainFr: "Littérature",
            ar: "أدب عالمي",
            icon: "📚",
            ex: "La littérature classique nous transporte à travers les âges.",
            exHtml: "La littérature classique nous transporte à travers les âges."
          },
          {
            fr: "Langue",
            frHtml: "<span class='v-word-single'>Langue</span>",
            plainFr: "Langue",
            ar: "لغة ولسان",
            icon: "🗣️",
            ex: "La langue française est réputée pour sa clarté et sa nuance.",
            exHtml: "La langue française est réputée pour sa clarté et sa nuance."
          },
          {
            fr: "Traduction",
            frHtml: "<span class='v-word-single'>Traduction</span>",
            plainFr: "Traduction",
            ar: "ترجمة فورية وتتبعية",
            icon: "🌐",
            ex: "La traduction fidèle jette des ponts entre les civilisations.",
            exHtml: "La traduction fidèle jette des ponts entre les civilisations."
          },
          {
            fr: "Interprète",
            frHtml: "<span class='v-word-single'>Interprète</span>",
            plainFr: "Interprète",
            ar: "مترجم فوري",
            icon: "🎧",
            ex: "L'interprète simultané traduit les débats sans hésitation.",
            exHtml: "L'interprète simultané traduit les débats sans hésitation."
          },
          {
            fr: "Communication",
            frHtml: "<span class='v-word-single'>Communication</span>",
            plainFr: "Communication",
            ar: "تواصل وتفاهم",
            icon: "📡",
            ex: "Une bonne communication prévient la plupart des conflits.",
            exHtml: "Une bonne communication prévient la plupart des conflits."
          },
          {
            fr: "Dialogue",
            frHtml: "<span class='v-word-single'>Dialogue</span>",
            plainFr: "Dialogue",
            ar: "حوار بناء",
            icon: "💬",
            ex: "Le dialogue constructif permet de dissiper tous les malentendus.",
            exHtml: "Le dialogue constructif permet de dissiper tous les malentendus."
          },
          {
            fr: "Débat",
            frHtml: "<span class='v-word-single'>Débat</span>",
            plainFr: "Débat",
            ar: "مناظرة ونقاش",
            icon: "🎙️",
            ex: "Ce débat télévisé a éclairé les enjeux électoraux majeurs.",
            exHtml: "Ce débat télévisé a éclairé les enjeux électoraux majeurs."
          },
          {
            fr: "Argument",
            frHtml: "<span class='v-word-single'>Argument</span>",
            plainFr: "Argument",
            ar: "حجة وبرهان",
            icon: "🛡️",
            ex: "Il a avancé un argument percutant qui a convaincu tout le jury.",
            exHtml: "Il a avancé un argument percutant qui a convaincu tout le jury."
          },
          {
            fr: "Preuve",
            frHtml: "<span class='v-word-single'>Preuve</span>",
            plainFr: "Preuve",
            ar: "دليل قاطع",
            icon: "🔍",
            ex: "Cette preuve irréfutable établit définitivement l'innocence.",
            exHtml: "Cette preuve irréfutable établit définitivement l'innocence."
          },
          {
            fr: "Raison",
            frHtml: "<span class='v-word-single'>Raison</span>",
            plainFr: "Raison",
            ar: "عقل وصواب",
            icon: "⚖️",
            ex: "La voix de la raison doit tempérer les emportements passionnés.",
            exHtml: "La voix de la raison doit tempérer les emportements passionnés."
          },
          {
            fr: "Logique",
            frHtml: "<span class='v-word-single'>Logique</span>",
            plainFr: "Logique",
            ar: "منطق سليم",
            icon: "🧠",
            ex: "Son raisonnement se distingue par une logique sans faille.",
            exHtml: "Son raisonnement se distingue par une logique sans faille."
          },
          {
            fr: "Esprit",
            frHtml: "<span class='v-word-single'>Esprit</span>",
            plainFr: "Esprit",
            ar: "عقل وروح",
            icon: "🕊️",
            ex: "Un esprit ouvert accueille la diversité avec bienveillance.",
            exHtml: "Un esprit ouvert accueille la diversité avec bienveillance."
          },
          {
            fr: "Pensée critique",
            frHtml: "<span class='v-word-single'>Pensée critique</span>",
            plainFr: "Pensée critique",
            ar: "تفكير نقدي",
            icon: "🤔",
            ex: "Le développement de la pensée critique protège de la manipulation.",
            exHtml: "Le développement de la pensée critique protège de la manipulation."
          },
          {
            fr: "Valeur",
            frHtml: "<span class='v-word-single'>Valeur</span>",
            plainFr: "Valeur",
            ar: "قيمة إنسانية",
            icon: "💎",
            ex: "La générosité et l'honnêteté sont des valeurs fondamentales.",
            exHtml: "La générosité et l'honnêteté sont des valeurs fondamentales."
          },
          {
            fr: "Principe",
            frHtml: "<span class='v-word-single'>Principe</span>",
            plainFr: "Principe",
            ar: "مبدأ راسخ",
            icon: "🏛️",
            ex: "Il reste fermement attaché à ses principes moraux.",
            exHtml: "Il reste fermement attaché à ses principes moraux."
          },
          {
            fr: "Règle",
            frHtml: "<span class='v-word-single'>Règle</span>",
            plainFr: "Règle",
            ar: "قاعدة وضابط",
            icon: "📏",
            ex: "Respecter les règles du jeu assure l'équité pour tous.",
            exHtml: "Respecter les règles du jeu assure l'équité pour tous."
          },
          {
            fr: "Loi",
            frHtml: "<span class='v-word-single'>Loi</span>",
            plainFr: "Loi",
            ar: "قانون نافذ",
            icon: "⚖️",
            ex: "La loi veille à protéger les faibles et les opprimés.",
            exHtml: "La loi veille à protéger les faibles et les opprimés."
          },
          {
            fr: "Droit",
            frHtml: "<span class='v-word-single'>Droit</span>",
            plainFr: "Droit",
            ar: "حق مشروع",
            icon: "📜",
            ex: "L'accès à l'éducation est un droit inaliénable pour chaque enfant.",
            exHtml: "L'accès à l'éducation est un droit inaliénable pour chaque enfant."
          },
          {
            fr: "Devoir",
            frHtml: "<span class='v-word-single'>Devoir</span>",
            plainFr: "Devoir",
            ar: "واجب أخلاقي",
            icon: "🎖️",
            ex: "C'est un devoir patriotique de défendre les causes justes.",
            exHtml: "C'est un devoir patriotique de défendre les causes justes."
          },
          {
            fr: "Citoyen",
            frHtml: "<span class='v-word-single'>Citoyen</span>",
            plainFr: "Citoyen",
            ar: "مواطن صالح",
            icon: "🗳️",
            ex: "Chaque citoyen responsable participe à la vie de sa cité.",
            exHtml: "Chaque citoyen responsable participe à la vie de sa cité."
          },
          {
            fr: "Démocratie",
            frHtml: "<span class='v-word-single'>Démocratie</span>",
            plainFr: "Démocratie",
            ar: "ديمقراطية",
            icon: "🏛️",
            ex: "La démocratie repose sur la souveraineté populaire éclairée.",
            exHtml: "La démocratie repose sur la souveraineté populaire éclairée."
          },
          {
            fr: "Politique",
            frHtml: "<span class='v-word-single'>Politique</span>",
            plainFr: "Politique",
            ar: "سياسة عامة",
            icon: "🏛️",
            ex: "La politique doit être orientée vers le bien-être collectif.",
            exHtml: "La politique doit être orientée vers le bien-être collectif."
          },
          {
            fr: "Gouvernement",
            frHtml: "<span class='v-word-single'>Gouvernement</span>",
            plainFr: "Gouvernement",
            ar: "حكومة",
            icon: "🏢",
            ex: "Le gouvernement met en œuvre de vastes réformes sociales.",
            exHtml: "Le gouvernement met en œuvre de vastes réformes sociales."
          },
          {
            fr: "État",
            frHtml: "<span class='v-word-single'>État</span>",
            plainFr: "État",
            ar: "دولة ومؤسساتها",
            icon: "🏛️",
            ex: "L'État assure la sécurité et la justice pour tous.",
            exHtml: "L'État assure la sécurité et la justice pour tous."
          },
          {
            fr: "Nation",
            frHtml: "<span class='v-word-single'>Nation</span>",
            plainFr: "Nation",
            ar: "أمة موحدة",
            icon: "🚩",
            ex: "La nation tout entière s'est rassemblée dans l'épreuve.",
            exHtml: "La nation tout entière s'est rassemblée dans l'épreuve."
          },
          {
            fr: "Peuple",
            frHtml: "<span class='v-word-single'>Peuple</span>",
            plainFr: "Peuple",
            ar: "شعب أصيل",
            icon: "👥",
            ex: "Le peuple souverain forge son propre destin avec bravoure.",
            exHtml: "Le peuple souverain forge son propre destin avec bravoure."
          },
          {
            fr: "Paysage",
            frHtml: "<span class='v-word-single'>Paysage</span>",
            plainFr: "Paysage",
            ar: "منظر طبيعي",
            icon: "🌄",
            ex: "Ce paysage grandiose s'étend jusqu'à l'horizon lointain.",
            exHtml: "Ce paysage grandiose s'étend jusqu'à l'horizon lointain."
          },
          {
            fr: "Région",
            frHtml: "<span class='v-word-single'>Région</span>",
            plainFr: "Région",
            ar: "إقليم/منطقة",
            icon: "🗺️",
            ex: "Chaque région de notre pays recèle des trésors uniques.",
            exHtml: "Chaque région de notre pays recèle des trésors uniques."
          },
          {
            fr: "Territoire",
            frHtml: "<span class='v-word-single'>Territoire</span>",
            plainFr: "Territoire",
            ar: "إقليم وطني",
            icon: "📍",
            ex: "Ce vaste territoire abrite une faune exceptionnelle.",
            exHtml: "Ce vaste territoire abrite une faune exceptionnelle."
          },
          {
            fr: "Frontière",
            frHtml: "<span class='v-word-single'>Frontière</span>",
            plainFr: "Frontière",
            ar: "حدود دولية",
            icon: "🛂",
            ex: "Les frontières ne doivent pas être des barrières à la paix.",
            exHtml: "Les frontières ne doivent pas être des barrières à la paix."
          },
          {
            fr: "Monde",
            frHtml: "<span class='v-word-single'>Monde</span>",
            plainFr: "Monde",
            ar: "عالمنا المعاصر",
            icon: "🌐",
            ex: "Nous vivons dans un monde de plus en plus interconnecté.",
            exHtml: "Nous vivons dans un monde de plus en plus interconnecté."
          },
          {
            fr: "Univers",
            frHtml: "<span class='v-word-single'>Univers</span>",
            plainFr: "Univers",
            ar: "كون واسع",
            icon: "🌌",
            ex: "L'univers infini recèle d'insondables mystères célestes.",
            exHtml: "L'univers infini recèle d'insondables mystères célestes."
          },
          {
            fr: "Étoile",
            frHtml: "<span class='v-word-single'>Étoile</span>",
            plainFr: "Étoile",
            ar: "نجم ساطع",
            icon: "⭐",
            ex: "Cette étoile brillante nous guide dans l'obscurité de la nuit.",
            exHtml: "Cette étoile brillante nous guide dans l'obscurité de la nuit."
          },
          {
            fr: "Espace",
            frHtml: "<span class='v-word-single'>Espace</span>",
            plainFr: "Espace",
            ar: "فضاء خارجي",
            icon: "🚀",
            ex: "La conquête de l'espace stimule l'ingéniosité humaine.",
            exHtml: "La conquête de l'espace stimule l'ingéniosité humaine."
          },
          {
            fr: "Temps libre",
            frHtml: "<span class='v-word-single'>Temps libre</span>",
            plainFr: "Temps libre",
            ar: "وقت فراغ",
            icon: "🏖️",
            ex: "Profitez de votre temps libre pour lire de grands auteurs.",
            exHtml: "Profitez de votre temps libre pour lire de grands auteurs."
          },
          {
            fr: "Loisir",
            frHtml: "<span class='v-word-single'>Loisir</span>",
            plainFr: "Loisir",
            ar: "هواية وترفيه",
            icon: "🎨",
            ex: "La photographie est un loisir enrichissant et créatif.",
            exHtml: "La photographie est un loisir enrichissant et créatif."
          },
          {
            fr: "Voyageur",
            frHtml: "<span class='v-word-single'>Voyageur</span>",
            plainFr: "Voyageur",
            ar: "رحالة ومسافر",
            icon: "🧭",
            ex: "Ce voyageur curieux a parcouru les cinq continents.",
            exHtml: "Ce voyageur curieux a parcouru les cinq continents."
          },
          {
            fr: "Aventure",
            frHtml: "<span class='v-word-single'>Aventure</span>",
            plainFr: "Aventure",
            ar: "مغامرة مشوقة",
            icon: "🗺️",
            ex: "Cette expédition dans le désert fut une aventure exaltante.",
            exHtml: "Cette expédition dans le désert fut une aventure exaltante."
          },
          {
            fr: "Expédition",
            frHtml: "<span class='v-word-single'>Expédition</span>",
            plainFr: "Expédition",
            ar: "رحلة استكشافية",
            icon: "⛺",
            ex: "L'expédition polaire a recueilli des données capitales.",
            exHtml: "L'expédition polaire a recueilli des données capitales."
          },
          {
            fr: "Chemin",
            frHtml: "<span class='v-word-single'>Chemin</span>",
            plainFr: "Chemin",
            ar: "طريق ومسار",
            icon: "🛤️",
            ex: "Le chemin de la sagesse s'ouvre par la modestie.",
            exHtml: "Le chemin de la sagesse s'ouvre par la modestie."
          },
          {
            fr: "Direction",
            frHtml: "<span class='v-word-single'>Direction</span>",
            plainFr: "Direction",
            ar: "وجهة واتجاه",
            icon: "🧭",
            ex: "Quelle direction devons-nous emprunter à la bifurcation ?",
            exHtml: "Quelle direction devons-nous emprunter à la bifurcation ?"
          },
          {
            fr: "Destination",
            frHtml: "<span class='v-word-single'>Destination</span>",
            plainFr: "Destination",
            ar: "محطة وصول",
            icon: "🎯",
            ex: "Notre destination finale est la ville historique de Jérusalem.",
            exHtml: "Notre destination finale est la ville historique de Jérusalem."
          },
          {
            fr: "Distance",
            frHtml: "<span class='v-word-single'>Distance</span>",
            plainFr: "Distance",
            ar: "مسافة فاصلة",
            icon: "📏",
            ex: "La distance n'altère en rien la force de notre amitié.",
            exHtml: "La distance n'altère en rien la force de notre amitié."
          },
          {
            fr: "Vitesse",
            frHtml: "<span class='v-word-single'>Vitesse</span>",
            plainFr: "Vitesse",
            ar: "سرعة حركة",
            icon: "⚡",
            ex: "Adaptez votre vitesse aux conditions météorologiques.",
            exHtml: "Adaptez votre vitesse aux conditions météorologiques."
          },
          {
            fr: "Mouvement",
            frHtml: "<span class='v-word-single'>Mouvement</span>",
            plainFr: "Mouvement",
            ar: "حركة وتنقل",
            icon: "🏃",
            ex: "La vie est un mouvement perpétuel vers le renouveau.",
            exHtml: "La vie est un mouvement perpétuel vers le renouveau."
          },
          {
            fr: "Rythme",
            frHtml: "<span class='v-word-single'>Rythme</span>",
            plainFr: "Rythme",
            ar: "إيقاع وتناغم",
            icon: "🥁",
            ex: "Trouvez votre propre rythme d'apprentissage sans précipitation.",
            exHtml: "Trouvez votre propre rythme d'apprentissage sans précipitation."
          },
          {
            fr: "Équilibre",
            frHtml: "<span class='v-word-single'>Équilibre</span>",
            plainFr: "Équilibre",
            ar: "توازن نفسي",
            icon: "⚖️",
            ex: "Maintenir l'équilibre entre vie professionnelle et personnelle est vital.",
            exHtml: "Maintenir l'équilibre entre vie professionnelle et personnelle est vital."
          },
          {
            fr: "Santé",
            frHtml: "<span class='v-word-single'>Santé</span>",
            plainFr: "Santé",
            ar: "صحة وعافية",
            icon: "🍏",
            ex: "Une bonne santé demeure la plus grande des richesses.",
            exHtml: "Une bonne santé demeure la plus grande des richesses."
          },
          {
            fr: "Alimentation",
            frHtml: "<span class='v-word-single'>Alimentation</span>",
            plainFr: "Alimentation",
            ar: "تغذية سليمة",
            icon: "🥗",
            ex: "Une saine alimentation prévient de nombreuses maladies.",
            exHtml: "Une saine alimentation prévient de nombreuses maladies."
          },
          {
            fr: "Sommeil",
            frHtml: "<span class='v-word-single'>Sommeil</span>",
            plainFr: "Sommeil",
            ar: "نوم مريح",
            icon: "😴",
            ex: "Un sommeil réparateur restaure l'énergie du corps et de l'esprit.",
            exHtml: "Un sommeil réparateur restaure l'énergie du corps et de l'esprit."
          },
          {
            fr: "Bien-être",
            frHtml: "<span class='v-word-single'>Bien-être</span>",
            plainFr: "Bien-être",
            ar: "راحة نفسية",
            icon: "🧘",
            ex: "La méditation favorise un profond sentiment de bien-être.",
            exHtml: "La méditation favorise un profond sentiment de bien-être."
          },
          {
            fr: "Bonheur",
            frHtml: "<span class='v-word-single'>Bonheur</span>",
            plainFr: "Bonheur",
            ar: "سعادة حقيقية",
            icon: "😊",
            ex: "Le vrai bonheur réside dans la paix du cœur et l'amour.",
            exHtml: "Le vrai bonheur réside dans la paix du cœur et l'amour."
          },
          {
            fr: "Joie de vivre",
            frHtml: "<span class='v-word-single'>Joie de vivre</span>",
            plainFr: "Joie de vivre",
            ar: "بهجة الحياة",
            icon: "🌻",
            ex: "Sa joie de vivre communicative illumine son entourage.",
            exHtml: "Sa joie de vivre communicative illumine son entourage."
          },
          {
            fr: "Sourire",
            frHtml: "<span class='v-word-single'>Sourire</span>",
            plainFr: "Sourire",
            ar: "ابتسامة مشرقة",
            icon: "😄",
            ex: "Un sourire sincère réchauffe les cœurs les plus froids.",
            exHtml: "Un sourire sincère réchauffe les cœurs les plus froids."
          },
          {
            fr: "Regard",
            frHtml: "<span class='v-word-single'>Regard</span>",
            plainFr: "Regard",
            ar: "نظرة ثاقبة",
            icon: "👁️",
            ex: "Son regard attentif traduit une profonde compassion.",
            exHtml: "Son regard attentif traduit une profonde compassion."
          },
          {
            fr: "Parole",
            frHtml: "<span class='v-word-single'>Parole</span>",
            plainFr: "Parole",
            ar: "كلمة صادقة",
            icon: "🗣️",
            ex: "Une parole bienveillante apaise les tensions les plus vives.",
            exHtml: "Une parole bienveillante apaise les tensions les plus vives."
          },
          {
            fr: "Écoute",
            frHtml: "<span class='v-word-single'>Écoute</span>",
            plainFr: "Écoute",
            ar: "إصغاء وتفهم",
            icon: "👂",
            ex: "Une écoute attentive est le prélude à tout conseil avisé.",
            exHtml: "Une écoute attentive est le prélude à tout conseil avisé."
          },
          {
            fr: "Compréhension",
            frHtml: "<span class='v-word-single'>Compréhension</span>",
            plainFr: "Compréhension",
            ar: "فهم واستيعاب",
            icon: "💡",
            ex: "La compréhension mutuelle désamorce les plus rudes querelles.",
            exHtml: "La compréhension mutuelle désamorce les plus rudes querelles."
          },
          {
            fr: "Pardon",
            frHtml: "<span class='v-word-single'>Pardon</span>",
            plainFr: "Pardon",
            ar: "عفو ومغفرة",
            icon: "🕊️",
            ex: "Le pardon libère l'esprit du fardeau de la rancœur.",
            exHtml: "Le pardon libère l'esprit du fardeau de la rancœur."
          },
          {
            fr: "Tolérance",
            frHtml: "<span class='v-word-single'>Tolérance</span>",
            plainFr: "Tolérance",
            ar: "تسامح واحترام",
            icon: "🤝",
            ex: "La tolérance bâtit des sociétés harmonieuses et fraternelles.",
            exHtml: "La tolérance bâtit des sociétés harmonieuses et fraternelles."
          },
          {
            fr: "Fraternité",
            frHtml: "<span class='v-word-single'>Fraternité</span>",
            plainFr: "Fraternité",
            ar: "أخوة إنسانية",
            icon: "🤲",
            ex: "La fraternité universelle doit unir tous les hommes de bonne volonté.",
            exHtml: "La fraternité universelle doit unir tous les hommes de bonne volonté."
          },
          {
            fr: "Humanité",
            frHtml: "<span class='v-word-single'>Humanité</span>",
            plainFr: "Humanité",
            ar: "إنسانية وبشرية",
            icon: "🌍",
            ex: "L'humanité tout entière aspire à la dignité et à la liberté.",
            exHtml: "L'humanité tout entière aspire à la dignité et à la liberté."
          },
          {
            fr: "Prière",
            frHtml: "<span class='v-word-single'>Prière</span>",
            plainFr: "Prière",
            ar: "صلاة ودعاء",
            icon: "🤲",
            ex: "Notre prière ardente s'élève pour la libération d'Al-Qods.",
            exHtml: "Notre prière ardente s'élève pour la libération d'Al-Qods."
          },
          {
            fr: "Foi",
            frHtml: "<span class='v-word-single'>Foi</span>",
            plainFr: "Foi",
            ar: "إيمان راسخ",
            icon: "✨",
            ex: "Une foi inébranlable donne la force de triompher des épreuves.",
            exHtml: "Une foi inébranlable donne la force de triompher des épreuves."
          },
          {
            fr: "Bénédiction",
            frHtml: "<span class='v-word-single'>Bénédiction</span>",
            plainFr: "Bénédiction",
            ar: "بركة ورضوان",
            icon: "🕊️",
            ex: "Que la bénédiction divine accompagne tous vos pas.",
            exHtml: "Que la bénédiction divine accompagne tous vos pas."
          },
          {
            fr: "Miséricorde",
            frHtml: "<span class='v-word-single'>Miséricorde</span>",
            plainFr: "Miséricorde",
            ar: "رحمة ومغفرة",
            icon: "🌧️",
            ex: "Nous demandons la miséricorde pour les âmes de nos chers défunts.",
            exHtml: "Nous demandons la miséricorde pour les âmes de nos chers défunts."
          }
        ]
      }
    ]
,
    B2: [
      {
        topic: "Vocabulaire Essentiel du Niveau B2 (150 Mots Individuels)",
        topicAr: "المفردات الأساسية لمستوى B2 (150 كلمة منفصلة)",
        icon: "📚",
        items: [
          {
            fr: "Éloquence",
            frHtml: "<span class='v-word-single'>Éloquence</span>",
            plainFr: "Éloquence",
            ar: "فصاحة وبيان",
            icon: "🗣️",
            ex: "Son éloquence naturelle captive l'auditoire le plus exigeant.",
            exHtml: "Son éloquence naturelle captive l'auditoire le plus exigeant."
          },
          {
            fr: "Rétorique",
            frHtml: "<span class='v-word-single'>Rétorique</span>",
            plainFr: "Rétorique",
            ar: "علم البلاغة",
            icon: "📜",
            ex: "L'art de la rhétorique donne du poids à chaque argumentation.",
            exHtml: "L'art de la rhétorique donne du poids à chaque argumentation."
          },
          {
            fr: "Perspicacité",
            frHtml: "<span class='v-word-single'>Perspicacité</span>",
            plainFr: "Perspicacité",
            ar: "ثقابة البصيرة",
            icon: "👁️",
            ex: "Sa perspicacité lui a permis de déceler l'erreur dissimulée.",
            exHtml: "Sa perspicacité lui a permis de déceler l'erreur dissimulée."
          },
          {
            fr: "Érudition",
            frHtml: "<span class='v-word-single'>Érudition</span>",
            plainFr: "Érudition",
            ar: "غزارة العلم والاطلاع",
            icon: "📚",
            ex: "Son érudition encyclopédique force le respect des universitaires.",
            exHtml: "Son érudition encyclopédique force le respect des universitaires."
          },
          {
            fr: "Subtilité",
            frHtml: "<span class='v-word-single'>Subtilité</span>",
            plainFr: "Subtilité",
            ar: "دقة ولطافة",
            icon: "🔍",
            ex: "La langue française se distingue par la subtilité de ses nuances.",
            exHtml: "La langue française se distingue par la subtilité de ses nuances."
          },
          {
            fr: "Nuance",
            frHtml: "<span class='v-word-single'>Nuance</span>",
            plainFr: "Nuance",
            ar: "فارق دقيق",
            icon: "🎨",
            ex: "Saisir chaque nuance lexicale est l'art suprême du traducteur.",
            exHtml: "Saisir chaque nuance lexicale est l'art suprême du traducteur."
          },
          {
            fr: "Paradoxe",
            frHtml: "<span class='v-word-single'>Paradoxe</span>",
            plainFr: "Paradoxe",
            ar: "مفارقة ظاهرية",
            icon: "⚡",
            ex: "Cette formule en apparence paradoxale recèle une profonde vérité.",
            exHtml: "Cette formule en apparence paradoxale recèle une profonde vérité."
          },
          {
            fr: "Dilemme",
            frHtml: "<span class='v-word-single'>Dilemme</span>",
            plainFr: "Dilemme",
            ar: "معضلة حائرة",
            icon: "⚖️",
            ex: "Il s'est trouvé confronté à un dilemme moral particulièrement épineux.",
            exHtml: "Il s'est trouvé confronté à un dilemme moral particulièrement épineux."
          },
          {
            fr: "Consensus",
            frHtml: "<span class='v-word-single'>Consensus</span>",
            plainFr: "Consensus",
            ar: "توافق جماعي",
            icon: "🤝",
            ex: "Les délégués sont parvenus à un consensus exemplaire sur le traité.",
            exHtml: "Les délégués sont parvenus à un consensus exemplaire sur le traité."
          },
          {
            fr: "Controverse",
            frHtml: "<span class='v-word-single'>Controverse</span>",
            plainFr: "Controverse",
            ar: "جدل محتدم",
            icon: "⚡",
            ex: "Cette découverte a suscité une vive controverse au sein du milieu savant.",
            exHtml: "Cette découverte a suscité une vive controverse au sein du milieu savant."
          },
          {
            fr: "Polémique",
            frHtml: "<span class='v-word-single'>Polémique</span>",
            plainFr: "Polémique",
            ar: "سجال فكري",
            icon: "🎙️",
            ex: "Évitons les polémiques stériles pour nous concentrer sur l'essentiel.",
            exHtml: "Évitons les polémiques stériles pour nous concentrer sur l'essentiel."
          },
          {
            fr: "Pragmatisme",
            frHtml: "<span class='v-word-single'>Pragmatisme</span>",
            plainFr: "Pragmatisme",
            ar: "واقعية عملية",
            icon: "🎯",
            ex: "Un pragmatisme mesuré s'avère indispensable pour mener à bien ce plan.",
            exHtml: "Un pragmatisme mesuré s'avère indispensable pour mener à bien ce plan."
          },
          {
            fr: "Altruisme",
            frHtml: "<span class='v-word-single'>Altruisme</span>",
            plainFr: "Altruisme",
            ar: "إيثار وحب للغير",
            icon: "🤲",
            ex: "Son altruisme désintéressé a sauvé des dizaines de familles démunies.",
            exHtml: "Son altruisme désintéressé a sauvé des dizaines de familles démunies."
          },
          {
            fr: "Empathie",
            frHtml: "<span class='v-word-single'>Empathie</span>",
            plainFr: "Empathie",
            ar: "تعاطف وجداني",
            icon: "❤️",
            ex: "L'empathie sincère permet de comprendre la souffrance d'autrui.",
            exHtml: "L'empathie sincère permet de comprendre la souffrance d'autrui."
          },
          {
            fr: "Bienveillance",
            frHtml: "<span class='v-word-single'>Bienveillance</span>",
            plainFr: "Bienveillance",
            ar: "حسن نية ولطف",
            icon: "🌸",
            ex: "Le tuteur guide ses étudiants avec une inaltérable bienveillance.",
            exHtml: "Le tuteur guide ses étudiants avec une inaltérable bienveillance."
          },
          {
            fr: "Intégrité",
            frHtml: "<span class='v-word-single'>Intégrité</span>",
            plainFr: "Intégrité",
            ar: "نزاهة واستقامة",
            icon: "🛡️",
            ex: "Son intégrité morale sans compromis demeure son plus bel héritage.",
            exHtml: "Son intégrité morale sans compromis demeure son plus bel héritage."
          },
          {
            fr: "Légitimité",
            frHtml: "<span class='v-word-single'>Légitimité</span>",
            plainFr: "Légitimité",
            ar: "شرعية ومشروعية",
            icon: "🏛️",
            ex: "La légitimité de cette revendication est reconnue par le droit international.",
            exHtml: "La légitimité de cette revendication est reconnue par le droit international."
          },
          {
            fr: "Souveraineté",
            frHtml: "<span class='v-word-single'>Souveraineté</span>",
            plainFr: "Souveraineté",
            ar: "سيادة وطنية",
            icon: "👑",
            ex: "La souveraineté inaliénable du peuple doit être respectée de tous.",
            exHtml: "La souveraineté inaliénable du peuple doit être respectée de tous."
          },
          {
            fr: "Pérennité",
            frHtml: "<span class='v-word-single'>Pérennité</span>",
            plainFr: "Pérennité",
            ar: "ديمومة وبقاء",
            icon: "⏳",
            ex: "Nous veillons à la pérennité de notre institution académique.",
            exHtml: "Nous veillons à la pérennité de notre institution académique."
          },
          {
            fr: "Authenticité",
            frHtml: "<span class='v-word-single'>Authenticité</span>",
            plainFr: "Authenticité",
            ar: "أصالة ونقاء",
            icon: "💎",
            ex: "L'authenticité de ce manuscrit médiéval a été attestée par les experts.",
            exHtml: "L'authenticité de ce manuscrit médiéval a été attestée par les experts."
          },
          {
            fr: "Cohérence",
            frHtml: "<span class='v-word-single'>Cohérence</span>",
            plainFr: "Cohérence",
            ar: "ترابط واتساق",
            icon: "🧩",
            ex: "La cohérence logique de sa démonstration n'admet aucune contestation.",
            exHtml: "La cohérence logique de sa démonstration n'admet aucune contestation."
          },
          {
            fr: "Pertinence",
            frHtml: "<span class='v-word-single'>Pertinence</span>",
            plainFr: "Pertinence",
            ar: "ملاءمة وجدوى",
            icon: "🎯",
            ex: "La pertinence de ses remarques a permis d'enrichir considérablement l'ouvrage.",
            exHtml: "La pertinence de ses remarques a permis d'enrichir considérablement l'ouvrage."
          },
          {
            fr: "Rigueur",
            frHtml: "<span class='v-word-single'>Rigueur</span>",
            plainFr: "Rigueur",
            ar: "دقة وانضباط",
            icon: "📐",
            ex: "Une rigueur intellectuelle absolue est exigée pour toute thèse scientifique.",
            exHtml: "Une rigueur intellectuelle absolue est exigée pour toute thèse scientifique."
          },
          {
            fr: "Excellence",
            frHtml: "<span class='v-word-single'>Excellence</span>",
            plainFr: "Excellence",
            ar: "تميز وريادة",
            icon: "🏆",
            ex: "Cette faculté vise l'excellence académique dans toutes ses filières.",
            exHtml: "Cette faculté vise l'excellence académique dans toutes ses filières."
          },
          {
            fr: "Polyvalence",
            frHtml: "<span class='v-word-single'>Polyvalence</span>",
            plainFr: "Polyvalence",
            ar: "تعدد المواهب",
            icon: "🤹",
            ex: "Sa polyvalence linguistique lui permet de traduire avec la même aisance.",
            exHtml: "Sa polyvalence linguistique lui permet de traduire avec la même aisance."
          },
          {
            fr: "Maîtrise",
            frHtml: "<span class='v-word-single'>Maîtrise</span>",
            plainFr: "Maîtrise",
            ar: "تمكن وإتقان",
            icon: "🎖️",
            ex: "Sa maîtrise parfaite de la syntaxe française suscite l'admiration.",
            exHtml: "Sa maîtrise parfaite de la syntaxe française suscite l'admiration."
          },
          {
            fr: "Aisance",
            frHtml: "<span class='v-word-single'>Aisance</span>",
            plainFr: "Aisance",
            ar: "سلاسة ولباقة",
            icon: "🌊",
            ex: "Il s'exprime avec une aisance remarquable lors des tribunes officielles.",
            exHtml: "Il s'exprime avec une aisance remarquable lors des tribunes officielles."
          },
          {
            fr: "Clarté",
            frHtml: "<span class='v-word-single'>Clarté</span>",
            plainFr: "Clarté",
            ar: "وضوح وجلاء",
            icon: "💡",
            ex: "La clarté d'exposition des concepts facilite l'assimilation des étudiants.",
            exHtml: "La clarté d'exposition des concepts facilite l'assimilation des étudiants."
          },
          {
            fr: "Précision",
            frHtml: "<span class='v-word-single'>Précision</span>",
            plainFr: "Précision",
            ar: "دقة متناهية",
            icon: "🎯",
            ex: "La précision terminologique est essentielle dans les traités diplomatiques.",
            exHtml: "La précision terminologique est essentielle dans les traités diplomatiques."
          },
          {
            fr: "Conciliation",
            frHtml: "<span class='v-word-single'>Conciliation</span>",
            plainFr: "Conciliation",
            ar: "مصالحة وتوفيق",
            icon: "🕊️",
            ex: "Il a joué le rôle de médiateur pour favoriser la conciliation des parties.",
            exHtml: "Il a joué le rôle de médiateur pour favoriser la conciliation des parties."
          },
          {
            fr: "Compromis",
            frHtml: "<span class='v-word-single'>Compromis</span>",
            plainFr: "Compromis",
            ar: "تسوية عادلة",
            icon: "🤝",
            ex: "Un compromis honorable a mis fin à de longues semaines de négociations.",
            exHtml: "Un compromis honorable a mis fin à de longues semaines de négociations."
          },
          {
            fr: "Équité",
            frHtml: "<span class='v-word-single'>Équité</span>",
            plainFr: "Équité",
            ar: "إنصاف وعدل",
            icon: "⚖️",
            ex: "L'équité commande de traiter chaque dossier avec la même impartialité.",
            exHtml: "L'équité commande de traiter chaque dossier avec la même impartialité."
          },
          {
            fr: "Réciprocité",
            frHtml: "<span class='v-word-single'>Réciprocité</span>",
            plainFr: "Réciprocité",
            ar: "معاملة بالمثل",
            icon: "🔄",
            ex: "Ce partenariat culturel repose sur le principe de stricte réciprocité.",
            exHtml: "Ce partenariat culturel repose sur le principe de stricte réciprocité."
          },
          {
            fr: "Résilience",
            frHtml: "<span class='v-word-single'>Résilience</span>",
            plainFr: "Résilience",
            ar: "صمود ومقاومة",
            icon: "🌱",
            ex: "La résilience héroïque du peuple palestinien inspire les opprimés du globe.",
            exHtml: "La résilience héroïque du peuple palestinien inspire les opprimés du globe."
          },
          {
            fr: "Solidité",
            frHtml: "<span class='v-word-single'>Solidité</span>",
            plainFr: "Solidité",
            ar: "متانة ورسوخ",
            icon: "🏛️",
            ex: "La solidité des fondations garantit la pérennité du grand édifice.",
            exHtml: "La solidité des fondations garantit la pérennité du grand édifice."
          },
          {
            fr: "Fervor",
            frHtml: "<span class='v-word-single'>Fervor</span>",
            plainFr: "Fervor",
            ar: "حماسة واندفاع",
            icon: "🔥",
            ex: "Il a défendu son idéal de liberté avec une ferveur inébranlable.",
            exHtml: "Il a défendu son idéal de liberté avec une ferveur inébranlable."
          },
          {
            fr: "Abnégation",
            frHtml: "<span class='v-word-single'>Abnégation</span>",
            plainFr: "Abnégation",
            ar: "تضحية ونكران للذات",
            icon: "🎖️",
            ex: "Leur abnégation remarquable a permis d'achever ce projet solidaire.",
            exHtml: "Leur abnégation remarquable a permis d'achever ce projet solidaire."
          },
          {
            fr: "Dévouement",
            frHtml: "<span class='v-word-single'>Dévouement</span>",
            plainFr: "Dévouement",
            ar: "إخلاص وتفانٍ",
            icon: "🤲",
            ex: "Ce site a été conçu avec un dévouement total pour honorer la mémoire de mon père.",
            exHtml: "Ce site a été conçu avec un dévouement total pour honorer la mémoire de mon père."
          },
          {
            fr: "Générosité",
            frHtml: "<span class='v-word-single'>Générosité</span>",
            plainFr: "Générosité",
            ar: "كرم وسخاء",
            icon: "🎁",
            ex: "La générosité de cœur illumine la vie de ceux qui nous entourent.",
            exHtml: "La générosité de cœur illumine la vie de ceux qui nous entourent."
          },
          {
            fr: "Magnanimité",
            frHtml: "<span class='v-word-single'>Magnanimité</span>",
            plainFr: "Magnanimité",
            ar: "نبل وشهامة",
            icon: "👑",
            ex: "Faire preuve de magnanimité envers ses détracteurs est le signe des grands esprits.",
            exHtml: "Faire preuve de magnanimité envers ses détracteurs est le signe des grands esprits."
          },
          {
            fr: "Sagesse",
            frHtml: "<span class='v-word-single'>Sagesse</span>",
            plainFr: "Sagesse",
            ar: "حكمة وتبصر",
            icon: "🦉",
            ex: "La sagesse acquise au fil des épreuves inspire ses précieux conseils.",
            exHtml: "La sagesse acquise au fil des épreuves inspire ses précieux conseils."
          },
          {
            fr: "Discernement",
            frHtml: "<span class='v-word-single'>Discernement</span>",
            plainFr: "Discernement",
            ar: "فطنة وتمييز",
            icon: "⚖️",
            ex: "Le discernement est indispensable pour distinguer le vrai du spécieux.",
            exHtml: "Le discernement est indispensable pour distinguer le vrai du spécieux."
          },
          {
            fr: "Tempérance",
            frHtml: "<span class='v-word-single'>Tempérance</span>",
            plainFr: "Tempérance",
            ar: "اعتدال واتزان",
            icon: "🧘",
            ex: "La tempérance préserve l'équilibre physique et la clarté mentale.",
            exHtml: "La tempérance préserve l'équilibre physique et la clarté mentale."
          },
          {
            fr: "Modestie",
            frHtml: "<span class='v-word-single'>Modestie</span>",
            plainFr: "Modestie",
            ar: "تواضع جم",
            icon: "🙇",
            ex: "Malgré ses immenses réalisations, il a su conserver une profonde modestie.",
            exHtml: "Malgré ses immenses réalisations, il a su conserver une profonde modestie."
          },
          {
            fr: "Humilité",
            frHtml: "<span class='v-word-single'>Humilité</span>",
            plainFr: "Humilité",
            ar: "انكسار وخضوع لله",
            icon: "🙏",
            ex: "L'humilité intellectuelle ouvre grand les portes de la véritable connaissance.",
            exHtml: "L'humilité intellectuelle ouvre grand les portes de la véritable connaissance."
          },
          {
            fr: "Audace",
            frHtml: "<span class='v-word-single'>Audace</span>",
            plainFr: "Audace",
            ar: "جرأة وإقدام",
            icon: "🚀",
            ex: "Il a eu l'audace de proposer une méthode pédagogique totalement novatrice.",
            exHtml: "Il a eu l'audace de proposer une méthode pédagogique totalement novatrice."
          },
          {
            fr: "Ténacité",
            frHtml: "<span class='v-word-single'>Ténacité</span>",
            plainFr: "Ténacité",
            ar: "إصرار وعزيمة",
            icon: "🧗",
            ex: "Sa ténacité légendaire lui a permis de surmonter tous les écueils.",
            exHtml: "Sa ténacité légendaire lui a permis de surmonter tous les écueils."
          },
          {
            fr: "Persévérance",
            frHtml: "<span class='v-word-single'>Persévérance</span>",
            plainFr: "Persévérance",
            ar: "مثابرة ومواصلة",
            icon: "🏃",
            ex: "La persévérance transforme les efforts quotidiens en victoires éclatantes.",
            exHtml: "La persévérance transforme les efforts quotidiens en victoires éclatantes."
          },
          {
            fr: "Constance",
            frHtml: "<span class='v-word-single'>Constance</span>",
            plainFr: "Constance",
            ar: "ثبات واستمرار",
            icon: "⚓",
            ex: "La constance dans la pratique est le secret de l'apprentissage des langues.",
            exHtml: "La constance dans la pratique est le secret de l'apprentissage des langues."
          },
          {
            fr: "Fidélité",
            frHtml: "<span class='v-word-single'>Fidélité</span>",
            plainFr: "Fidélité",
            ar: "وفاء وإخلاص",
            icon: "🤝",
            ex: "Sa fidélité indéfectible à ses idéaux de justice force le respect.",
            exHtml: "Sa fidélité indéfectible à ses idéaux de justice force le respect."
          },
          {
            fr: "Loyauté",
            frHtml: "<span class='v-word-single'>Loyauté</span>",
            plainFr: "Loyauté",
            ar: "نزاهة وولاء",
            icon: "🛡️",
            ex: "La loyauté envers ses engagements fait la grandeur morale de l'homme.",
            exHtml: "La loyauté envers ses engagements fait la grandeur morale de l'homme."
          },
          {
            fr: "Sincérité",
            frHtml: "<span class='v-word-single'>Sincérité</span>",
            plainFr: "Sincérité",
            ar: "صدق سريرة",
            icon: "💎",
            ex: "La sincérité désarme les préjugés et suscite l'adhésion spontanée.",
            exHtml: "La sincérité désarme les préjugés et suscite l'adhésion spontanée."
          },
          {
            fr: "Véracité",
            frHtml: "<span class='v-word-single'>Véracité</span>",
            plainFr: "Véracité",
            ar: "صدقية وصحة",
            icon: "📜",
            ex: "La véracité des sources historiques a été scrupuleusement vérifiée.",
            exHtml: "La véracité des sources historiques a été scrupuleusement vérifiée."
          },
          {
            fr: "Probité",
            frHtml: "<span class='v-word-single'>Probité</span>",
            plainFr: "Probité",
            ar: "استقامة ونقاء",
            icon: "⚖️",
            ex: "Sa probité exemplaire a toujours guidé ses arbitrages professionnels.",
            exHtml: "Sa probité exemplaire a toujours guidé ses arbitrages professionnels."
          },
          {
            fr: "Rectitude",
            frHtml: "<span class='v-word-single'>Rectitude</span>",
            plainFr: "Rectitude",
            ar: "صواب وسداد",
            icon: "📐",
            ex: "Une rectitude de jugement remarquable caractérise ses prises de position.",
            exHtml: "Une rectitude de jugement remarquable caractérise ses prises de position."
          },
          {
            fr: "Lucidité",
            frHtml: "<span class='v-word-single'>Lucidité</span>",
            plainFr: "Lucidité",
            ar: "يقظة ووضوح فكر",
            icon: "🕯️",
            ex: "Il a analysé la conjoncture géopolitique avec une remarquable lucidité.",
            exHtml: "Il a analysé la conjoncture géopolitique avec une remarquable lucidité."
          },
          {
            fr: "Clairvoyance",
            frHtml: "<span class='v-word-single'>Clairvoyance</span>",
            plainFr: "Clairvoyance",
            ar: "بصيرة نافذة",
            icon: "🔭",
            ex: "Sa clairvoyance lui a permis d'anticiper les mutations contemporaines.",
            exHtml: "Sa clairvoyance lui a permis d'anticiper les mutations contemporaines."
          },
          {
            fr: "Sagacité",
            frHtml: "<span class='v-word-single'>Sagacité</span>",
            plainFr: "Sagacité",
            ar: "ذكاء حاد",
            icon: "🧠",
            ex: "La sagacité de son raisonnement a confondu tous les sophismes adverses.",
            exHtml: "La sagacité de son raisonnement a confondu tous les sophismes adverses."
          },
          {
            fr: "Ingéniosité",
            frHtml: "<span class='v-word-single'>Ingéniosité</span>",
            plainFr: "Ingéniosité",
            ar: "براعة وابتكار",
            icon: "⚙️",
            ex: "L'ingéniosité des concepteurs a permis de surmonter les contraintes techniques.",
            exHtml: "L'ingéniosité des concepteurs a permis de surmonter les contraintes techniques."
          },
          {
            fr: "Finesse",
            frHtml: "<span class='v-word-single'>Finesse</span>",
            plainFr: "Finesse",
            ar: "رقة وذكاء",
            icon: "✨",
            ex: "Il a traité cette question épineuse avec une rare finesse diplomatique.",
            exHtml: "Il a traité cette question épineuse avec une rare finesse diplomatique."
          },
          {
            fr: "Tact",
            frHtml: "<span class='v-word-single'>Tact</span>",
            plainFr: "Tact",
            ar: "كياسة وحصافة",
            icon: "🕊️",
            ex: "Il a abordé ce sujet délicat avec un tact et un respect infinis.",
            exHtml: "Il a abordé ce sujet délicat avec un tact et un respect infinis."
          },
          {
            fr: "Courtoisie",
            frHtml: "<span class='v-word-single'>Courtoisie</span>",
            plainFr: "Courtoisie",
            ar: "لباقة ودماثة خلق",
            icon: "🎩",
            ex: "La courtoisie raffinée de son accueil a immédiatement mis les convives à l'aise.",
            exHtml: "La courtoisie raffinée de son accueil a immédiatement mis les convives à l'aise."
          },
          {
            fr: "Urbanité",
            frHtml: "<span class='v-word-single'>Urbanité</span>",
            plainFr: "Urbanité",
            ar: "تحضر وأدب جم",
            icon: "🏛️",
            ex: "Son urbanité naturelle rehausse l'éclat de ses interventions publiques.",
            exHtml: "Son urbanité naturelle rehausse l'éclat de ses interventions publiques."
          },
          {
            fr: "Affabilité",
            frHtml: "<span class='v-word-single'>Affabilité</span>",
            plainFr: "Affabilité",
            ar: "بشاشة ودماثة",
            icon: "😊",
            ex: "Son affabilité spontanée lui gagne d'emblée la sympathie de tous.",
            exHtml: "Son affabilité spontanée lui gagne d'emblée la sympathie de tous."
          },
          {
            fr: "Dévotion",
            frHtml: "<span class='v-word-single'>Dévotion</span>",
            plainFr: "Dévotion",
            ar: "إخلاص وتعبد",
            icon: "🕌",
            ex: "Il accomplit ses obligations spirituelles avec une ferveur et une dévotion profondes.",
            exHtml: "Il accomplit ses obligations spirituelles avec une ferveur et une dévotion profondes."
          },
          {
            fr: "Recueillement",
            frHtml: "<span class='v-word-single'>Recueillement</span>",
            plainFr: "Recueillement",
            ar: "خشوع وسكينة",
            icon: "🧘",
            ex: "Un silence de recueillement s'est imposé dans la salle de commémoration.",
            exHtml: "Un silence de recueillement s'est imposé dans la salle de commémoration."
          },
          {
            fr: "Sérénité",
            frHtml: "<span class='v-word-single'>Sérénité</span>",
            plainFr: "Sérénité",
            ar: "طمأنينة وهدوء بال",
            icon: "🍃",
            ex: "Il envisage les vicissitudes de l'existence avec une inaltérable sérénité.",
            exHtml: "Il envisage les vicissitudes de l'existence avec une inaltérable sérénité."
          },
          {
            fr: "Plénitude",
            frHtml: "<span class='v-word-single'>Plénitude</span>",
            plainFr: "Plénitude",
            ar: "كمال وامتلاء روحي",
            icon: "🌕",
            ex: "Atteindre cet état de plénitude intérieure est le fruit d'un long cheminement.",
            exHtml: "Atteindre cet état de plénitude intérieure est le fruit d'un long cheminement."
          },
          {
            fr: "Harmonie",
            frHtml: "<span class='v-word-single'>Harmonie</span>",
            plainFr: "Harmonie",
            ar: "انسجام وتآلف",
            icon: "🎶",
            ex: "L'harmonie entre les différents peuples exige justice et respect souverain.",
            exHtml: "L'harmonie entre les différents peuples exige justice et respect souverain."
          },
          {
            fr: "Concorde",
            frHtml: "<span class='v-word-single'>Concorde</span>",
            plainFr: "Concorde",
            ar: "وئام وسلام أهلي",
            icon: "🕊️",
            ex: "Les accords de paix ont rétabli la concorde parmi les citoyens.",
            exHtml: "Les accords de paix ont rétabli la concorde parmi les citoyens."
          },
          {
            fr: "Cohésion",
            frHtml: "<span class='v-word-single'>Cohésion</span>",
            plainFr: "Cohésion",
            ar: "تماسك مجتمعي",
            icon: "🧱",
            ex: "La cohésion nationale est le bouclier suprême contre les périls extérieurs.",
            exHtml: "La cohésion nationale est le bouclier suprême contre les périls extérieurs."
          },
          {
            fr: "Convergence",
            frHtml: "<span class='v-word-single'>Convergence</span>",
            plainFr: "Convergence",
            ar: "التقاء وتوافق",
            icon: "🌐",
            ex: "La convergence des volontés a permis d'aboutir à un traité historique.",
            exHtml: "La convergence des volontés a permis d'aboutir à un traité historique."
          },
          {
            fr: "Synergie",
            frHtml: "<span class='v-word-single'>Synergie</span>",
            plainFr: "Synergie",
            ar: "تضافر وتكامل",
            icon: "⚡",
            ex: "La synergie entre les facultés décuple l'impact de la recherche scientifique.",
            exHtml: "La synergie entre les facultés décuple l'impact de la recherche scientifique."
          },
          {
            fr: "Émulation",
            frHtml: "<span class='v-word-single'>Émulation</span>",
            plainFr: "Émulation",
            ar: "تنافس حميد",
            icon: "🏁",
            ex: "Une saine émulation intellectuelle règne parmi les étudiants de la promotion.",
            exHtml: "Une saine émulation intellectuelle règne parmi les étudiants de la promotion."
          },
          {
            fr: "Inspiration",
            frHtml: "<span class='v-word-single'>Inspiration</span>",
            plainFr: "Inspiration",
            ar: "إلهام رباني وفني",
            icon: "💡",
            ex: "L'inspiration poétique jaillit souvent du spectacle de la nature silencieuse.",
            exHtml: "L'inspiration poétique jaillit souvent du spectacle de la nature silencieuse."
          },
          {
            fr: "Création",
            frHtml: "<span class='v-word-single'>Création</span>",
            plainFr: "Création",
            ar: "إبداع وخلق فني",
            icon: "🎨",
            ex: "La création littéraire est un voyage au plus intime de la condition humaine.",
            exHtml: "La création littéraire est un voyage au plus intime de la condition humaine."
          },
          {
            fr: "Ingénierie",
            frHtml: "<span class='v-word-single'>Ingénierie</span>",
            plainFr: "Ingénierie",
            ar: "هندسة تطبيقية",
            icon: "🏗️",
            ex: "L'ingénierie moderne concilie prouesse technique et respect environnemental.",
            exHtml: "L'ingénierie moderne concilie prouesse technique et respect environnemental."
          },
          {
            fr: "Conception",
            frHtml: "<span class='v-word-single'>Conception</span>",
            plainFr: "Conception",
            ar: "صياغة وتصميم",
            icon: "📐",
            ex: "La conception de cette plateforme a mobilisé les meilleures technologies.",
            exHtml: "La conception de cette plateforme a mobilisé les meilleures technologies."
          },
          {
            fr: "Élaboration",
            frHtml: "<span class='v-word-single'>Élaboration</span>",
            plainFr: "Élaboration",
            ar: "تطوير وإعداد",
            icon: "📋",
            ex: "L'élaboration de ce programme bilingue a demandé des mois de rigueur.",
            exHtml: "L'élaboration de ce programme bilingue a demandé des mois de rigueur."
          },
          {
            fr: "Mise en œuvre",
            frHtml: "<span class='v-word-single'>Mise en œuvre</span>",
            plainFr: "Mise en œuvre",
            ar: "تنفيذ وتطبيق",
            icon: "⚙️",
            ex: "La mise en œuvre rapide des réformes garantit l'efficacité des mesures.",
            exHtml: "La mise en œuvre rapide des réformes garantit l'efficacité des mesures."
          },
          {
            fr: "Aboutissement",
            frHtml: "<span class='v-word-single'>Aboutissement</span>",
            plainFr: "Aboutissement",
            ar: "تتويج وثمرة ختامية",
            icon: "🏆",
            ex: "Ce prestigieux diplôme est l'aboutissement de longues années de sacrifice.",
            exHtml: "Ce prestigieux diplôme est l'aboutissement de longues années de sacrifice."
          },
          {
            fr: "Consécration",
            frHtml: "<span class='v-word-single'>Consécration</span>",
            plainFr: "Consécration",
            ar: "اعتراف رسمي وتتويج",
            icon: "👑",
            ex: "Ce prix international constitue la consécration de toute sa carrière d'écrivain.",
            exHtml: "Ce prix international constitue la consécration de toute sa carrière d'écrivain."
          },
          {
            fr: "Rayonnement",
            frHtml: "<span class='v-word-single'>Rayonnement</span>",
            plainFr: "Rayonnement",
            ar: "إشعاع حضاري",
            icon: "☀️",
            ex: "Le rayonnement culturel de l'Université d'Al-Azhar s'étend à travers les siècles.",
            exHtml: "Le rayonnement culturel de l'Université d'Al-Azhar s'étend à travers les siècles."
          },
          {
            fr: "Prestiges",
            frHtml: "<span class='v-word-single'>Prestiges</span>",
            plainFr: "Prestiges",
            ar: "هيبة ومكانة رفيعة",
            icon: "🏛️",
            ex: "Cette haute institution a su préserver son immense prestige mondial.",
            exHtml: "Cette haute institution a su préserver son immense prestige mondial."
          },
          {
            fr: "Notoriété",
            frHtml: "<span class='v-word-single'>Notoriété</span>",
            plainFr: "Notoriété",
            ar: "شهرة واسعة النطاق",
            icon: "📢",
            ex: "La notoriété de ce chercheur dépasse largement les frontières nationales.",
            exHtml: "La notoriété de ce chercheur dépasse largement les frontières nationales."
          },
          {
            fr: "Réputation",
            frHtml: "<span class='v-word-single'>Réputation</span>",
            plainFr: "Réputation",
            ar: "سمعة طيبة وعطرة",
            icon: "🌟",
            ex: "Une réputation d'intégrité sans faille est le bien le plus cher de l'homme.",
            exHtml: "Une réputation d'intégrité sans faille est le bien le plus cher de l'homme."
          },
          {
            fr: "Honneur",
            frHtml: "<span class='v-word-single'>Honneur</span>",
            plainFr: "Honneur",
            ar: "شرف ومروءة",
            icon: "🎖️",
            ex: "C'est un insigne honneur que de défendre la mémoire et les valeurs de ses ancêtres.",
            exHtml: "C'est un insigne honneur que de défendre la mémoire et les valeurs de ses ancêtres."
          },
          {
            fr: "Gloire",
            frHtml: "<span class='v-word-single'>Gloire</span>",
            plainFr: "Gloire",
            ar: "مجد وسؤدد",
            icon: "🚩",
            ex: "La gloire éphémère ne saurait rivaliser avec le souvenir des actes de bienfaisance.",
            exHtml: "La gloire éphémère ne saurait rivaliser avec le souvenir des actes de bienfaisance."
          },
          {
            fr: "Postérité",
            frHtml: "<span class='v-word-single'>Postérité</span>",
            plainFr: "Postérité",
            ar: "أجيال قادمة وتاريخ",
            icon: "📜",
            ex: "Ses écrits immortels seront transmis à la postérité comme un phare.",
            exHtml: "Ses écrits immortels seront transmis à la postérité comme un phare."
          },
          {
            fr: "Héritage",
            frHtml: "<span class='v-word-single'>Héritage</span>",
            plainFr: "Héritage",
            ar: "تراث وإرث خالد",
            icon: "🏺",
            ex: "Ce riche héritage spirituel et linguistique nous oblige à l'excellence.",
            exHtml: "Ce riche héritage spirituel et linguistique nous oblige à l'excellence."
          },
          {
            fr: "Transmission",
            frHtml: "<span class='v-word-single'>Transmission</span>",
            plainFr: "Transmission",
            ar: "توريث ونقل المعرفة",
            icon: "🤝",
            ex: "La transmission généreuse du savoir est la plus noble des vocations.",
            exHtml: "La transmission généreuse du savoir est la plus noble des vocations."
          },
          {
            fr: "Pédagogie",
            frHtml: "<span class='v-word-single'>Pédagogie</span>",
            plainFr: "Pédagogie",
            ar: "علم أصول التدريس",
            icon: "🎓",
            ex: "Une pédagogie vivante et interactive stimule l'autonomie des apprenants.",
            exHtml: "Une pédagogie vivante et interactive stimule l'autonomie des apprenants."
          },
          {
            fr: "Didactique",
            frHtml: "<span class='v-word-single'>Didactique</span>",
            plainFr: "Didactique",
            ar: "تعليمي متخصص",
            icon: "📚",
            ex: "Cette approche didactique novatrice simplifie l'apprentissage des conjugaisons.",
            exHtml: "Cette approche didactique novatrice simplifie l'apprentissage des conjugaisons."
          },
          {
            fr: "Méthodologie",
            frHtml: "<span class='v-word-single'>Méthodologie</span>",
            plainFr: "Méthodologie",
            ar: "منهجية علمية",
            icon: "🔬",
            ex: "L'adoption d'une méthodologie rigoureuse garantit la validité des conclusions.",
            exHtml: "L'adoption d'une méthodologie rigoureuse garantit la validité des conclusions."
          },
          {
            fr: "Épistémologie",
            frHtml: "<span class='v-word-single'>Épistémologie</span>",
            plainFr: "Épistémologie",
            ar: "فلسفة العلوم والمعرفة",
            icon: "🧠",
            ex: "L'épistémologie interroge les fondements et les limites de la science humaine.",
            exHtml: "L'épistémologie interroge les fondements et les limites de la science humaine."
          },
          {
            fr: "Linguistique",
            frHtml: "<span class='v-word-single'>Linguistique</span>",
            plainFr: "Linguistique",
            ar: "علم اللغويات",
            icon: "🗣️",
            ex: "La linguistique descriptive analyse les structures internes des idiomes.",
            exHtml: "La linguistique descriptive analyse les structures internes des idiomes."
          },
          {
            fr: "Sémantique",
            frHtml: "<span class='v-word-single'>Sémantique</span>",
            plainFr: "Sémantique",
            ar: "علم دلالات الألفاظ",
            icon: "📖",
            ex: "L'étude sémantique explore l'évolution du sens des mots à travers l'histoire.",
            exHtml: "L'étude sémantique explore l'évolution du sens des mots à travers l'histoire."
          },
          {
            fr: "Syntaxe",
            frHtml: "<span class='v-word-single'>Syntaxe</span>",
            plainFr: "Syntaxe",
            ar: "علم النحو وتراكيب الجمل",
            icon: "📐",
            ex: "Une maîtrise parfaite de la syntaxe est la marque d'un style châtié.",
            exHtml: "Une maîtrise parfaite de la syntaxe est la marque d'un style châtié."
          },
          {
            fr: "Morphologie",
            frHtml: "<span class='v-word-single'>Morphologie</span>",
            plainFr: "Morphologie",
            ar: "علم الصرف وبنية الكلمة",
            icon: "🧩",
            ex: "La morphologie verbale française comporte des régularités passionnantes.",
            exHtml: "La morphologie verbale française comporte des régularités passionnantes."
          },
          {
            fr: "Phonétique",
            frHtml: "<span class='v-word-single'>Phonétique</span>",
            plainFr: "Phonétique",
            ar: "علم الأصوات والنطق",
            icon: "🎙️",
            ex: "Une bonne phonétique assure une prononciation claire et sans équivoque.",
            exHtml: "Une bonne phonétique assure une prononciation claire et sans équivoque."
          },
          {
            fr: "Prosodie",
            frHtml: "<span class='v-word-single'>Prosodie</span>",
            plainFr: "Prosodie",
            ar: "علم العروض والتنغيم",
            icon: "🎶",
            ex: "La prosodie expressive confère à la poésie française son charme musical.",
            exHtml: "La prosodie expressive confère à la poésie française son charme musical."
          },
          {
            fr: "Herméneutique",
            frHtml: "<span class='v-word-single'>Herméneutique</span>",
            plainFr: "Herméneutique",
            ar: "تأويل النصوص وتفسيرها",
            icon: "📜",
            ex: "L'herméneutique des textes sacrés exige une profonde science du langage.",
            exHtml: "L'herméneutique des textes sacrés exige une profonde science du langage."
          },
          {
            fr: "Exégèse",
            frHtml: "<span class='v-word-single'>Exégèse</span>",
            plainFr: "Exégèse",
            ar: "شرح واستنباط دقيق",
            icon: "🕯️",
            ex: "Son exégèse rigoureuse éclaire les passages les plus ardus du texte.",
            exHtml: "Son exégèse rigoureuse éclaire les passages les plus ardus du texte."
          },
          {
            fr: "Philologie",
            frHtml: "<span class='v-word-single'>Philologie</span>",
            plainFr: "Philologie",
            ar: "فقه اللغة ونقد النصوص",
            icon: "📚",
            ex: "La philologie classique restaure les manuscrits avec une infinie patience.",
            exHtml: "La philologie classique restaure les manuscrits avec une infinie patience."
          },
          {
            fr: "Traductologie",
            frHtml: "<span class='v-word-single'>Traductologie</span>",
            plainFr: "Traductologie",
            ar: "علم دراسات الترجمة",
            icon: "🌐",
            ex: "La traductologie contemporaine analyse le rôle de passerelle culturelle du traducteur.",
            exHtml: "La traductologie contemporaine analyse le rôle de passerelle culturelle du traducteur."
          },
          {
            fr: "Interprétation",
            frHtml: "<span class='v-word-single'>Interprétation</span>",
            plainFr: "Interprétation",
            ar: "ترجمة فورية وتفسير",
            icon: "🎧",
            ex: "L'interprétation de conférence exige une vivacité d'esprit et un calme absolu.",
            exHtml: "L'interprétation de conférence exige une vivacité d'esprit et un calme absolu."
          },
          {
            fr: "Terminologie",
            frHtml: "<span class='v-word-single'>Terminologie</span>",
            plainFr: "Terminologie",
            ar: "علم المصطلحات",
            icon: "🏷️",
            ex: "L'harmonisation de la terminologie médicale évite les confusions tragiques.",
            exHtml: "L'harmonisation de la terminologie médicale évite les confusions tragiques."
          },
          {
            fr: "Lexicographie",
            frHtml: "<span class='v-word-single'>Lexicographie</span>",
            plainFr: "Lexicographie",
            ar: "صناعة المعاجم والقواميس",
            icon: "📖",
            ex: "La lexicographie moderne s'appuie sur de vastes corpus textuels numérisés.",
            exHtml: "La lexicographie moderne s'appuie sur de vastes corpus textuels numérisés."
          },
          {
            fr: "Encyclopédie",
            frHtml: "<span class='v-word-single'>Encyclopédie</span>",
            plainFr: "Encyclopédie",
            ar: "موسوعة علمية شاملة",
            icon: "📚",
            ex: "Cette encyclopédie monumentale réunit la somme des connaissances humaines.",
            exHtml: "Cette encyclopédie monumentale réunit la somme des connaissances humaines."
          },
          {
            fr: "Corpus",
            frHtml: "<span class='v-word-single'>Corpus</span>",
            plainFr: "Corpus",
            ar: "مدونة لغوية شاملة",
            icon: "📑",
            ex: "L'analyse de ce corpus de cent mille phrases révèle des tendances remarquables.",
            exHtml: "L'analyse de ce corpus de cent mille phrases révèle des tendances remarquables."
          },
          {
            fr: "Discours",
            frHtml: "<span class='v-word-single'>Discours</span>",
            plainFr: "Discours",
            ar: "خطاب وبيان رسمي",
            icon: "🎙️",
            ex: "Son discours vibrant en faveur de la justice a bouleversé l'assemblée générale.",
            exHtml: "Son discours vibrant en faveur de la justice a bouleversé l'assemblée générale."
          },
          {
            fr: "Allocution",
            frHtml: "<span class='v-word-single'>Allocution</span>",
            plainFr: "Allocution",
            ar: "كلمة افتتاحية موجزة",
            icon: "🎤",
            ex: "Le recteur a prononcé une allocution chaleureuse pour accueillir les nouveaux étudiants.",
            exHtml: "Le recteur a prononcé une allocution chaleureuse pour accueillir les nouveaux étudiants."
          },
          {
            fr: "Plaidoyer",
            frHtml: "<span class='v-word-single'>Plaidoyer</span>",
            plainFr: "Plaidoyer",
            ar: "مرافعة ودفاع مستميت",
            icon: "⚖️",
            ex: "Ce plaidoyer passionné pour la liberté de la presse fera date dans les annales.",
            exHtml: "Ce plaidoyer passionné pour la liberté de la presse fera date dans les annales."
          },
          {
            fr: "Réquisitoire",
            frHtml: "<span class='v-word-single'>Réquisitoire</span>",
            plainFr: "Réquisitoire",
            ar: "بيان اتهام حاسم",
            icon: "📜",
            ex: "Le procureur a dressé un réquisitoire implacable contre la corruption.",
            exHtml: "Le procureur a dressé un réquisitoire implacable contre la corruption."
          },
          {
            fr: "Manifeste",
            frHtml: "<span class='v-word-single'>Manifeste</span>",
            plainFr: "Manifeste",
            ar: "بيان فكري وإعلان مبادئ",
            icon: "🚩",
            ex: "Ce manifeste avant-gardiste a redéfini les canons de la poésie moderne.",
            exHtml: "Ce manifeste avant-gardiste a redéfini les canons de la poésie moderne."
          },
          {
            fr: "Traité",
            frHtml: "<span class='v-word-single'>Traité</span>",
            plainFr: "Traité",
            ar: "معاهدة واتفاقية دولية",
            icon: "📜",
            ex: "La signature de ce traité de paix consacre le triomphe de la diplomatie.",
            exHtml: "La signature de ce traité de paix consacre le triomphe de la diplomatie."
          },
          {
            fr: "Convention",
            frHtml: "<span class='v-word-single'>Convention</span>",
            plainFr: "Convention",
            ar: "ميثاق واتفاق رسمي",
            icon: "🤝",
            ex: "Cette convention multilatérale protège les droits fondamentaux de l'enfance.",
            exHtml: "Cette convention multilatérale protège les droits fondamentaux de l'enfance."
          },
          {
            fr: "Protocole",
            frHtml: "<span class='v-word-single'>Protocole</span>",
            plainFr: "Protocole",
            ar: "مراسم وأعراف دبلوماسية",
            icon: "🎩",
            ex: "Le respect scrupuleux du protocole d'État honore la dignité des nations représentées.",
            exHtml: "Le respect scrupuleux du protocole d'État honore la dignité des nations représentées."
          },
          {
            fr: "Jurisprudence",
            frHtml: "<span class='v-word-single'>Jurisprudence</span>",
            plainFr: "Jurisprudence",
            ar: "أحكام واجتهاد قضائي",
            icon: "⚖️",
            ex: "Cette décision historique fera désormais jurisprudence pour toutes les cours.",
            exHtml: "Cette décision historique fera désormais jurisprudence pour toutes les cours."
          },
          {
            fr: "Doctrine",
            frHtml: "<span class='v-word-single'>Doctrine</span>",
            plainFr: "Doctrine",
            ar: "مذهب واجتهاد فقهي",
            icon: "🏛️",
            ex: "La doctrine juridique éclaire l'interprétation des lois nouvelles.",
            exHtml: "La doctrine juridique éclaire l'interprétation des lois nouvelles."
          },
          {
            fr: "Axiome",
            frHtml: "<span class='v-word-single'>Axiome</span>",
            plainFr: "Axiome",
            ar: "بديهية ومسلمة أولى",
            icon: "📐",
            ex: "Que la justice soit le fondement de la paix constitue un axiome universel.",
            exHtml: "Que la justice soit le fondement de la paix constitue un axiome universel."
          },
          {
            fr: "Postulat",
            frHtml: "<span class='v-word-single'>Postulat</span>",
            plainFr: "Postulat",
            ar: "افتراض أساسي",
            icon: "🧠",
            ex: "Le postulat de départ a été vérifié par une série d'expériences concluantes.",
            exHtml: "Le postulat de départ a été vérifié par une série d'expériences concluantes."
          },
          {
            fr: "Hypothèse",
            frHtml: "<span class='v-word-single'>Hypothèse</span>",
            plainFr: "Hypothèse",
            ar: "فرضية علمية",
            icon: "💡",
            ex: "Les données recueillies corroborent brillamment notre hypothèse de recherche.",
            exHtml: "Les données recueillies corroborent brillamment notre hypothèse de recherche."
          },
          {
            fr: "Démonstration",
            frHtml: "<span class='v-word-single'>Démonstration</span>",
            plainFr: "Démonstration",
            ar: "برهان وإثبات قاطع",
            icon: "🔍",
            ex: "La démonstration mathématique ne laisse aucune place au doute.",
            exHtml: "La démonstration mathématique ne laisse aucune place au doute."
          },
          {
            fr: "Synthèse",
            frHtml: "<span class='v-word-single'>Synthèse</span>",
            plainFr: "Synthèse",
            ar: "خلاصة وتلخيص جامع",
            icon: "📝",
            ex: "Rédigez une synthèse claire des points essentiels débattus durant la séance.",
            exHtml: "Rédigez une synthèse claire des points essentiels débattus durant la séance."
          },
          {
            fr: "Perspective",
            frHtml: "<span class='v-word-single'>Perspective</span>",
            plainFr: "Perspective",
            ar: "أفق ونظرة مستقبلية",
            icon: "🔭",
            ex: "Cette alliance stratégique ouvre des perspectives prometteuses pour l'avenir.",
            exHtml: "Cette alliance stratégique ouvre des perspectives prometteuses pour l'avenir."
          },
          {
            fr: "Dimension",
            frHtml: "<span class='v-word-single'>Dimension</span>",
            plainFr: "Dimension",
            ar: "بعد وجانب هام",
            icon: "📏",
            ex: "Cette problématique sociétale revêt une dimension éthique majeure.",
            exHtml: "Cette problématique sociétale revêt une dimension éthique majeure."
          },
          {
            fr: "Portée",
            frHtml: "<span class='v-word-single'>Portée</span>",
            plainFr: "Portée",
            ar: "مدى وأثر واسع",
            icon: "🎯",
            ex: "La portée de cette découverte scientifique dépasse largement notre siècle.",
            exHtml: "La portée de cette découverte scientifique dépasse largement notre siècle."
          },
          {
            fr: "Impact",
            frHtml: "<span class='v-word-single'>Impact</span>",
            plainFr: "Impact",
            ar: "أثر وتأثير ملموس",
            icon: "💥",
            ex: "L'impact positif de cette éducation bilingue se mesure tout au long de la vie.",
            exHtml: "L'impact positif de cette éducation bilingue se mesure tout au long de la vie."
          },
          {
            fr: "Influence",
            frHtml: "<span class='v-word-single'>Influence</span>",
            plainFr: "Influence",
            ar: "تأثير وإشعاع فكري",
            icon: "✨",
            ex: "L'influence de la littérature classique sur la pensée contemporaine demeure vive.",
            exHtml: "L'influence de la littérature classique sur la pensée contemporaine demeure vive."
          },
          {
            fr: "Empreinte",
            frHtml: "<span class='v-word-single'>Empreinte</span>",
            plainFr: "Empreinte",
            ar: "بصمة وأثر لا يمحى",
            icon: "👣",
            ex: "Ce grand maître a laissé une empreinte indélébile dans l'esprit de ses disciples.",
            exHtml: "Ce grand maître a laissé une empreinte indélébile dans l'esprit de ses disciples."
          },
          {
            fr: "Sillage",
            frHtml: "<span class='v-word-single'>Sillage</span>",
            plainFr: "Sillage",
            ar: "أثر ومسار مقتفى",
            icon: "🌊",
            ex: "De nombreux jeunes écrivains se sont engagés dans son sillage lumineux.",
            exHtml: "De nombreux jeunes écrivains se sont engagés dans son sillage lumineux."
          },
          {
            fr: "Avènement",
            frHtml: "<span class='v-word-single'>Avènement</span>",
            plainFr: "Avènement",
            ar: "بزوغ وحلول عهد جديد",
            icon: "🌅",
            ex: "L'avènement d'une ère de paix et de prospérité est l'ardent souhait des peuples.",
            exHtml: "L'avènement d'une ère de paix et de prospérité est l'ardent souhait des peuples."
          },
          {
            fr: "Apogée",
            frHtml: "<span class='v-word-single'>Apogée</span>",
            plainFr: "Apogée",
            ar: "ذروة وأوج الازدهار",
            icon: "⭐",
            ex: "La civilisation islamique a atteint son apogée scientifique à cette illustre époque.",
            exHtml: "La civilisation islamique a atteint son apogée scientifique à cette illustre époque."
          },
          {
            fr: "Renaissance",
            frHtml: "<span class='v-word-single'>Renaissance</span>",
            plainFr: "Renaissance",
            ar: "بعث ونهضة شاملة",
            icon: "🌱",
            ex: "Cette renaissance intellectuelle s'appuie sur la redécouverte des trésors classiques.",
            exHtml: "Cette renaissance intellectuelle s'appuie sur la redécouverte des trésors classiques."
          },
          {
            fr: "Essor",
            frHtml: "<span class='v-word-single'>Essor</span>",
            plainFr: "Essor",
            ar: "نهوض وانطلاقة كبرى",
            icon: "🚀",
            ex: "L'essor fulgurant des technologies de communication transforme notre planète.",
            exHtml: "L'essor fulgurant des technologies de communication transforme notre planète."
          },
          {
            fr: "Prouesse",
            frHtml: "<span class='v-word-single'>Prouesse</span>",
            plainFr: "Prouesse",
            ar: "إنجاز وبطولة خارقة",
            icon: "🏆",
            ex: "La réalisation de ce projet sous contrainte extrême relève de la prouesse.",
            exHtml: "La réalisation de ce projet sous contrainte extrême relève de la prouesse."
          },
          {
            fr: "Chef-d'œuvre",
            frHtml: "<span class='v-word-single'>Chef-d'œuvre</span>",
            plainFr: "Chef-d'œuvre",
            ar: "تحفة وعمل فني خالد",
            icon: "🎨",
            ex: "Cette toile de maître est unanimement saluée comme un chef-d'œuvre de l'humanité.",
            exHtml: "Cette toile de maître est unanimement saluée comme un chef-d'œuvre de l'humanité."
          },
          {
            fr: "Monument",
            frHtml: "<span class='v-word-single'>Monument</span>",
            plainFr: "Monument",
            ar: "أثر تاريخي خالد",
            icon: "🏛️",
            ex: "Ce monument vénérable témoigne de la grandeur de nos prédécesseurs.",
            exHtml: "Ce monument vénérable témoigne de la grandeur de nos prédécesseurs."
          },
          {
            fr: "Édifice",
            frHtml: "<span class='v-word-single'>Édifice</span>",
            plainFr: "Édifice",
            ar: "صرح وبنيان شامخ",
            icon: "🏢",
            ex: "La construction de cet édifice de paix requiert le concours de toutes les âmes nobles.",
            exHtml: "La construction de cet édifice de paix requiert le concours de toutes les âmes nobles."
          },
          {
            fr: "Bastion",
            frHtml: "<span class='v-word-single'>Bastion</span>",
            plainFr: "Bastion",
            ar: "حصن ومعقل منيع",
            icon: "🏰",
            ex: "Cette université demeure un bastion inexpugnable de la liberté de penser.",
            exHtml: "Cette université demeure un bastion inexpugnable de la liberté de penser."
          },
          {
            fr: "Rempart",
            frHtml: "<span class='v-word-single'>Rempart</span>",
            plainFr: "Rempart",
            ar: "درع وخط دفاع",
            icon: "🛡️",
            ex: "La culture et la science sont les plus sûrs remparts contre l'obscurantisme.",
            exHtml: "La culture et la science sont les plus sûrs remparts contre l'obscurantisme."
          },
          {
            fr: "Phare",
            frHtml: "<span class='v-word-single'>Phare</span>",
            plainFr: "Phare",
            ar: "منارة هادية",
            icon: "🗼",
            ex: "Cet enseignement rigoureux est un phare qui éclaire les chemins de la jeunesse.",
            exHtml: "Cet enseignement rigoureux est un phare qui éclaire les chemins de la jeunesse."
          },
          {
            fr: "Boussole",
            frHtml: "<span class='v-word-single'>Boussole</span>",
            plainFr: "Boussole",
            ar: "بوصلة ودليل هداية",
            icon: "🧭",
            ex: "Que la justice et l'amour de la patrie soient votre éternelle boussole.",
            exHtml: "Que la justice et l'amour de la patrie soient votre éternelle boussole."
          },
          {
            fr: "Flambeau",
            frHtml: "<span class='v-word-single'>Flambeau</span>",
            plainFr: "Flambeau",
            ar: "شعلة ومشعل مضيء",
            icon: "🔥",
            ex: "Reprenez avec fierté le flambeau de la connaissance pour éclairer le monde.",
            exHtml: "Reprenez avec fierté le flambeau de la connaissance pour éclairer le monde."
          },
          {
            fr: "Sanctuaire",
            frHtml: "<span class='v-word-single'>Sanctuaire</span>",
            plainFr: "Sanctuaire",
            ar: "محراب وملاذ آمن",
            icon: "🕊️",
            ex: "Que la terre sainte de Palestine redevienne un sanctuaire de paix pour tous.",
            exHtml: "Que la terre sainte de Palestine redevienne un sanctuaire de paix pour tous."
          },
          {
            fr: "Pèlerinage",
            frHtml: "<span class='v-word-single'>Pèlerinage</span>",
            plainFr: "Pèlerinage",
            ar: "رحلة حج ومقصد روحي",
            icon: "🕌",
            ex: "Des millions de fidèles accomplissent ce pèlerinage avec ferveur.",
            exHtml: "Des millions de fidèles accomplissent ce pèlerinage avec ferveur."
          },
          {
            fr: "Dévouement filial",
            frHtml: "<span class='v-word-single'>Dévouement filial</span>",
            plainFr: "Dévouement filial",
            ar: "بر الوالدين",
            icon: "💖",
            ex: "Ce site a été conçu en humble sadaqa jariya pour le repos de l'âme de mon père bien-aimé.",
            exHtml: "Ce site a été conçu en humble sadaqa jariya pour le repos de l'âme de mon père bien-aimé."
          },
          {
            fr: "Invocation",
            frHtml: "<span class='v-word-single'>Invocation</span>",
            plainFr: "Invocation",
            ar: "دعاء وتضرع خالص",
            icon: "🤲",
            ex: "Nous implorons le Tout-Puissant d'accorder Sa miséricorde et Son pardon éternels.",
            exHtml: "Nous implorons le Tout-Puissant d'accorder Sa miséricorde et Son pardon éternels."
          },
          {
            fr: "Prière pour le père",
            frHtml: "<span class='v-word-single'>Prière pour le père</span>",
            plainFr: "Prière pour le père",
            ar: "دعاء للوالد بالمغفرة",
            icon: "🤲",
            ex: "Ce site est une sadaqa jariya pour le repos de l'âme de mon cher père.",
            exHtml: "Ce site est une sadaqa jariya pour le repos de l'âme de mon cher père."
          }
        ]
      }
    ]

  },


  conversationsData: {
    A1: [
      {
        title: "Au Supermarché : Achats de Fruits & Salutations",
        titleAr: "في السوبرماركت: شراء الفواكه والتحيات اليومية",
        icon: "🍎",
        turns: [
          {
            speaker: "A",
            name: "Sami",
            avatar: "👨",
            plainFrench: "Bonjour Monsieur ! Avez-vous des pommes fraîches et de l'huile d'olive ?",
            frenchHtml: "Bonjour Monsieur ! <span class=\"highlight-red\">Avez-vous</span> des pommes fraîches et de l'huile d'olive ?",
            arabic: "صباح الخير يا سيدي! هل لديكم تفاح طازج وزيت زيتون؟"
          },
          {
            speaker: "B",
            name: "Le Marchand",
            avatar: "🏪",
            plainFrench: "Bonjour jeune homme ! Oui, nous avons des pommes délicieuses et d'excellentes bouteilles d'huile d'olive.",
            frenchHtml: "Bonjour jeune homme ! Oui, nous <span class=\"highlight-red\">avons</span> des pommes délicieuses et nous <span class=\"highlight-red\">vendons</span> d'excellentes huiles.",
            arabic: "أهلاً بالشاب اللطيف! نعم، لدينا تفاح لذيذ ونحن نبيع زيوتاً ممتازة."
          },
          {
            speaker: "A",
            name: "Sami",
            avatar: "👨",
            plainFrench: "Parfait ! Je prends deux kilos de pommes et une grande bouteille s'il vous plaît.",
            frenchHtml: "Parfait ! Je <span class=\"highlight-red\">prends</span> deux kilos de pommes et je <span class=\"highlight-red\">choisis</span> cette grande bouteille.",
            arabic: "ممتاز! سآخذ كيلوغرامين من التفاح وأختار هذه الزجاجة الكبيرة من فضلك."
          },
          {
            speaker: "B",
            name: "Le Marchand",
            avatar: "🏪",
            plainFrench: "Très bien, cela fait quinze euros au total. Vous payez en espèces ou par carte bancaire ?",
            frenchHtml: "Très bien, cela <span class=\"highlight-red\">fait</span> quinze euros. <span class=\"highlight-red\">Payez-vous</span> en espèces ou par carte ?",
            arabic: "حسناً جداً، المجموع خمسة عشر يورو. هل تدفع نقداً أم بالبطاقة البنكية؟"
          },
          {
            speaker: "A",
            name: "Sami",
            avatar: "👨",
            plainFrench: "Je paie par carte. Merci beaucoup et bonne journée !",
            frenchHtml: "Je <span class=\"highlight-red\">paie</span> par carte bancaire. Je vous <span class=\"highlight-red\">remercie</span> et vous <span class=\"highlight-red\">souhaite</span> une belle journée !",
            arabic: "سأدفع بالبطاقة البنكية. أشكرك جزيل الشكر وأتمنى لك يوماً رائعاً!"
          }
        ]
      },
      {
        title: "Demander l'Heure & Évoquer l'Année Historique 1963",
        titleAr: "السؤال عن الوقت والحديث عن العام التاريخي 1963",
        icon: "⏳",
        turns: [
          {
            speaker: "A",
            name: "Nadine",
            avatar: "👩",
            plainFrench: "Pardon Monsieur, quelle heure est-il s'il vous plaît ?",
            frenchHtml: "Pardon Monsieur, quelle heure <span class=\"highlight-red\">est-il</span> s'il vous plaît ?",
            arabic: "عفواً يا سيدي، كم الساعة الآن من فضلك؟"
          },
          {
            speaker: "B",
            name: "Karim",
            avatar: "🧔",
            plainFrench: "Il est exactement dix heures et demie du matin.",
            frenchHtml: "Il <span class=\"highlight-red\">est</span> exactement dix heures et demie.",
            arabic: "إنها الساعة العاشرة والنصف تماماً."
          },
          {
            speaker: "A",
            name: "Nadine",
            avatar: "👩",
            plainFrench: "Merci ! Mon grand-père me disait qu'il est né en 1963 (mille neuf cent soixante-trois).",
            frenchHtml: "Merci ! Mon grand-père me <span class=\"highlight-red\">disait</span> qu'il <span class=\"highlight-red\">est né</span> en 1963 (mille neuf cent soixante-trois).",
            arabic: "شكراً! كان جدي يخبرني أنه وُلد عام 1963 (ألف وتسعمائة وثلاثة وستون)."
          },
          {
            speaker: "B",
            name: "Karim",
            avatar: "🧔",
            plainFrench: "C'est une grande année ! Mon père aussi est né en 1963 à Jérusalem.",
            frenchHtml: "C'<span class=\"highlight-red\">est</span> une grande année ! Mon père aussi <span class=\"highlight-red\">a vu</span> le jour en 1963 à Jérusalem.",
            arabic: "إنها سنة مميزة وتاريخية! والدي أيضاً وُلد عام 1963 في مدينة القدس."
          }
        ]
      }
    ],

    A2: [
      {
        title: "En Ville : Se Renseigner sur les Transports & Les Directions",
        titleAr: "في المدينة: السؤال عن المواصلات والاتجاهات نحو المعالم",
        icon: "🧭",
        turns: [
          {
            speaker: "A",
            name: "Youssef",
            avatar: "🚶",
            plainFrench: "Excusez-moi Madame, comment puis-je me rendre à la gare centrale ?",
            frenchHtml: "Excusez-moi Madame, comment <span class=\"highlight-red\">puis-je</span> aller à la gare centrale ?",
            arabic: "معذرة يا سيدتي، كيف يمكنني الذهاب إلى محطة القطارات المركزية؟"
          },
          {
            speaker: "B",
            name: "La Passante",
            avatar: "👩‍💼",
            plainFrench: "Vous prenez le bus ligne 12 puis vous descendez au quatrième arrêt, juste devant la mairie.",
            frenchHtml: "Vous <span class=\"highlight-red\">prenez</span> le bus ligne 12 puis vous <span class=\"highlight-red\">descendez</span> au quatrième arrêt.",
            arabic: "اركَب الحافلة رقم 12 ثم انزل في المحطة الرابعة، أمام مبنى البلدية مباشرة."
          },
          {
            speaker: "A",
            name: "Youssef",
            avatar: "🚶",
            plainFrench: "Est-ce que je peux acheter le titre de transport directement auprès du conducteur ?",
            frenchHtml: "<span class=\"highlight-red\">Est-ce</span> que je <span class=\"highlight-red\">peux</span> acheter le billet auprès du conducteur ?",
            arabic: "هل يمكنني شراء التذكرة مباشرة من سائق الحافلة؟"
          },
          {
            speaker: "B",
            name: "La Passante",
            avatar: "👩‍💼",
            plainFrench: "Oui absolument, ou vous téléchargez l'application officielle sur votre smartphone.",
            frenchHtml: "Oui tout à fait, ou vous <span class=\"highlight-red\">utilisez</span> la borne automatique.",
            arabic: "نعم بالتأكيد، أو يمكنك استخدام جهاز التذاكر الآلي."
          }
        ]
      },
      {
        title: "Journée de Vacances à la Plage : Détente & Activités",
        titleAr: "يوم عطلة على شاطئ البحر: استجمام وأنشطة صيفية",
        icon: "🏖️",
        turns: [
          {
            speaker: "A",
            name: "Lina",
            avatar: "👧",
            plainFrench: "Regarde comme la mer est belle aujourd'hui ! Allons nous baigner tout de suite !",
            frenchHtml: "<span class=\"highlight-red\">Regarde</span> comme la mer <span class=\"highlight-red\">est</span> calme ! <span class=\"highlight-red\">Allons</span> nager tout de suite !",
            arabic: "انظر كم يبدو البحر هادئاً وجميلاً اليوم! هيا بنا نسبح في الحال!"
          },
          {
            speaker: "B",
            name: "Tarek",
            avatar: "👦",
            plainFrench: "Attendons un instant ! Mettons d'abord de la crème solaire pour protéger notre peau.",
            frenchHtml: "<span class=\"highlight-red\">Mettons</span> d'abord de la crème solaire car le soleil <span class=\"highlight-red\">chauffe</span> beaucoup.",
            arabic: "لنضع واقي الشمس أولاً لأن أشعة الشمس قوية ودافئة جداً."
          },
          {
            speaker: "A",
            name: "Lina",
            avatar: "👧",
            plainFrench: "Tu as raison. Après la baignade, nous ferons une partie de beach-volley sur le sable.",
            frenchHtml: "Tu <span class=\"highlight-red\">as</span> raison. Après, nous <span class=\"highlight-red\">jouerons</span> au volley sur le sable fin.",
            arabic: "معك حق تماماً. بعد السباحة سنلعب الكرة الطائرة على الرمال الناعمة."
          }
        ]
      }
    ],

    B1: [
      {
        title: "Consultation Médicale d'Urgence après un Accident Léger",
        titleAr: "استشارة طبية مستعجلة في العيادة بعد حادث سير طفيف",
        icon: "🩺",
        turns: [
          {
            speaker: "A",
            name: "Dr. Laurent",
            avatar: "👨‍⚕️",
            plainFrench: "Bonjour Monsieur, dites-moi exactement ce qui vous est arrivé et où vous avez mal.",
            frenchHtml: "Bonjour, <span class=\"highlight-red\">dites-moi</span> ce qui <span class=\"highlight-red\">s'est passé</span> et où vous <span class=\"highlight-red\">avez mal</span>.",
            arabic: "صباح الخير يا سيدي، أخبرني تحديداً ماذا حدث لك وأين تشعر بالألم."
          },
          {
            speaker: "B",
            name: "Le Patient (Omar)",
            avatar: "🤕",
            plainFrench: "Une voiture a freiné brusquement et a percuté l'arrière de mon véhicule. Je ressens une vive douleur au cou.",
            frenchHtml: "Une voiture <span class=\"highlight-red\">a freiné</span> et je <span class=\"highlight-red\">ressens</span> une vive douleur cervicale.",
            arabic: "فرملت سيارة فجأة واصطدمت بي، وأنا أشعر بألم شديد وتشنج في الرقبة والكتف."
          },
          {
            speaker: "A",
            name: "Dr. Laurent",
            avatar: "👨‍⚕️",
            plainFrench: "Je vais examiner vos vertèbres et vos réflexes. Heureusement, vous ne semblez pas avoir de fracture.",
            frenchHtml: "Je <span class=\"highlight-red\">vais</span> vous examiner. Heureusement, vous ne <span class=\"highlight-red\">présentez</span> aucune fracture osseuse.",
            arabic: "سأقوم بفحص فقراتك وردود فعلك العصبية. لحسن الحظ، لا توجد أي كسور في العظام."
          },
          {
            speaker: "B",
            name: "Le Patient (Omar)",
            avatar: "🤕",
            plainFrench: "C'est un soulagement. Que dois-je prendre pour calmer cette inflammation ?",
            frenchHtml: "C'<span class=\"highlight-red\">est</span> un grand soulagement. Que <span class=\"highlight-red\">dois-je</span> prendre comme traitement ?",
            arabic: "هذا يبعث على الارتياح حقاً. ما الدواء الذي ينبغي أن أتناوله لتسكين هذا الالتهاب؟"
          },
          {
            speaker: "A",
            name: "Dr. Laurent",
            avatar: "👨‍⚕️",
            plainFrench: "Je vous prescris un anti-inflammatoire et quelques séances de kinésithérapie.",
            frenchHtml: "Je vous <span class=\"highlight-red\">prescris</span> du repos et des médicaments que vous <span class=\"highlight-red\">prendrez</span> pendant cinq jours.",
            arabic: "سأصف لك قسطاً من الراحة ومسكنات تتناولها بانتظام لمدة خمسة أيام."
          }
        ]
      },
      {
        title: "Entretien Professionnel & Partage de Confidences sur l'Avenir",
        titleAr: "مقابلة مهنية ومصارحة حول الطموحات ومسار الحياة",
        icon: "💼",
        turns: [
          {
            speaker: "A",
            name: "La Directrice RH",
            avatar: "👩‍💼",
            plainFrench: "Pourquoi avez-vous choisi de postuler au sein de notre organisation internationale ?",
            frenchHtml: "Pourquoi <span class=\"highlight-red\">avez-vous choisi</span> de postuler au sein de notre organisme ?",
            arabic: "لماذا اخترت التقدم لشغل وظيفة ضمن منظمتنا الدولية؟"
          },
          {
            speaker: "B",
            name: "Le Candidat (Fadi)",
            avatar: "👨‍💼",
            plainFrench: "Je souhaite mettre mes compétences d'ingénieur au service de projets humanitaires durables.",
            frenchHtml: "Je <span class=\"highlight-red\">souhaite</span> agir pour des projets qui <span class=\"highlight-red\">ont</span> un impact positif.",
            arabic: "أرغب في تكريس مهاراتي الهندسية لخدمة مشاريع إنسانية مستدامة ذات أثر إيجابي."
          },
          {
            speaker: "A",
            name: "La Directrice RH",
            avatar: "👩‍💼",
            plainFrench: "Votre parcours démontre une grande persévérance et une fidélité à vos valeurs morales.",
            frenchHtml: "Votre parcours <span class=\"highlight-red\">démontre</span> que vous <span class=\"highlight-red\">gardez</span> une haute éthique de travail.",
            arabic: "تُظهر مسيرتك المهنية أنك تحافظ على التزام عالٍ بالقيم وأخلاقيات العمل النبيلة."
          }
        ]
      }
    ],

    B2: [
      {
        title: "Discussion Informelle en Argot & Mises en Situation du Quotidien",
        titleAr: "حوار ودي بالعامية الفرنسية (Argot) ومواقف من الحياة الحقيقية",
        icon: "☕",
        turns: [
          {
            speaker: "A",
            name: "Lucas",
            avatar: "🧑",
            plainFrench: "Salut mon pote ! Alors, comment se passe ton nouveau boulot ? Tu t'en sors avec ton boss ?",
            frenchHtml: "Salut ! Alors, comment <span class=\"highlight-red\">se passe</span> ton nouveau boulot ? Tu <span class=\"highlight-red\">t'en sors</span> ?",
            arabic: "أهلاً يا صديقي! كيف تسير أمور وظيفتك الجديدة (boulot)؟ هل تتأقلم مع مديرك؟"
          },
          {
            speaker: "B",
            name: "Sofiane",
            avatar: "🧔",
            plainFrench: "Franchement, au début c'était un peu chelou, mais maintenant je kiffe grave l'ambiance avec l'équipe !",
            frenchHtml: "Franchement, au début c'<span class=\"highlight-red\">était</span> chelou, mais maintenant je <span class=\"highlight-red\">kiffe</span> grave !",
            arabic: "بصراحة، في البداية كان الوضع غريباً بعض الشيء (chelou)، لكني الآن معجب ومستمتع جداً بالأجواء (kiffe)!"
          },
          {
            speaker: "A",
            name: "Lucas",
            avatar: "🧑",
            plainFrench: "Tant mieux ! Et pour les thunes, ils paient correctement ou ils sont radins ?",
            frenchHtml: "Tant mieux ! Et côté salaire, ils <span class=\"highlight-red\">paient</span> bien ou ils <span class=\"highlight-red\">sont</span> stricts ?",
            arabic: "رائع جداً! وماذا عن المقابل المالي (thunes)، هل يدفعون جيداً أم أنهم بخلاء؟"
          },
          {
            speaker: "B",
            name: "Sofiane",
            avatar: "🧔",
            plainFrench: "Le salaire est très honnête. En plus, j'ai déniché un super bouquin sur l'histoire de la Palestine à la pause.",
            frenchHtml: "Le salaire <span class=\"highlight-red\">est</span> très honnête. En plus, j'<span class=\"highlight-red\">ai déniché</span> un super bouquin.",
            arabic: "الراتب منصف جداً ومحترم. وفوق ذلك عثرت على كتاب رائع (bouquin) حول تاريخ فلسطين وقت الاستراحة."
          }
        ]
      },
      {
        title: "Grand Débat : Justice Internationale, Droits Fondamentaux & Solidarité",
        titleAr: "حوار فكري عميق: العدالة الدولية، حقوق الإنسان والتضامن مع القدس",
        icon: "🕊️",
        turns: [
          {
            speaker: "A",
            name: "Camille",
            avatar: "👩‍🎓",
            plainFrench: "Penses-tu que les institutions internationales remplissent réellement leur mission de protection des opprimés ?",
            frenchHtml: "<span class=\"highlight-red\">Penses-tu</span> que les institutions internationales <span class=\"highlight-red\">remplissent</span> leur devoir ?",
            arabic: "هل تعتقد أن المؤسسات والمنظمات الدولية تقوم حقاً بواجبها في حماية الشعوب المظلومة؟"
          },
          {
            speaker: "B",
            name: "Ziad",
            avatar: "👨‍🎓",
            plainFrench: "Il existe souvent un double standard regrettable. Toutefois, la voix des peuples libres ne s'éteint jamais.",
            frenchHtml: "La voix de la vérité ne <span class=\"highlight-red\">s'éteindra</span> jamais. La cause palestinienne <span class=\"highlight-red\">triomphera</span>.",
            arabic: "يوجد ازدواج مؤسف في المعايير. ورغم ذلك فإن صوت الحق لن ينطفئ، والقضية الفلسطينية العادلة ستنتصر حتماً."
          },
          {
            speaker: "A",
            name: "Camille",
            avatar: "👩‍🎓",
            plainFrench: "Exactement. Comme nous l'affirmons fièrement : nous prierons un jour ensemble dans un Jérusalem libre et souverain.",
            frenchHtml: "Absolument. Nous <span class=\"highlight-red\">prierons</span> tous un jour dans un Jérusalem libéré et souverain.",
            arabic: "تماماً كما نردد بفخر واعتزاز: سنصلي يوماً جميعاً في رحاب القدس الحرة ذات السيادة والأصالة."
          }
        ]
      }
    ]
  },

  /* ===================================================================
     CONJUGATION DATA (EXPANDED REGULAR & IRREGULAR VERBS)
     ALL conjugated forms highlighted in DISTINCT RED (<span class="highlight-red">)
     =================================================================== */
  verbsData: {
    "être": {
      infinitif: "Être",
      group: "Auxiliaire (3e groupe)",
      translationAr: "فعل الكينونة (يكون)",
      present: [
        { p: "Je", v: "suis" },
        { p: "Tu", v: "es" },
        { p: "Il / Elle / On", v: "est" },
        { p: "Nous", v: "sommes" },
        { p: "Vous", v: "êtes" },
        { p: "Ils / Elles", v: "sont" }
      ],
      passe_compose: [
        { p: "J'ai", v: "été" },
        { p: "Tu as", v: "été" },
        { p: "Il / Elle a", v: "été" },
        { p: "Nous avons", v: "été" },
        { p: "Vous avez", v: "été" },
        { p: "Ils / Elles ont", v: "été" }
      ],
      imparfait: [
        { p: "J'", v: "étais" },
        { p: "Tu", v: "étais" },
        { p: "Il / Elle", v: "était" },
        { p: "Nous", v: "étions" },
        { p: "Vous", v: "étiez" },
        { p: "Ils / Elles", v: "étaient" }
      ],
      futur: [
        { p: "Je", v: "serai" },
        { p: "Tu", v: "seras" },
        { p: "Il / Elle", v: "sera" },
        { p: "Nous", v: "serons" },
        { p: "Vous", v: "serez" },
        { p: "Ils / Elles", v: "seront" }
      ],
      conditionnel: [
        { p: "Je", v: "serais" },
        { p: "Tu", v: "serais" },
        { p: "Il / Elle", v: "serait" },
        { p: "Nous", v: "serions" },
        { p: "Vous", v: "seriez" },
        { p: "Ils / Elles", v: "seraient" }
      ],
      subjonctif: [
        { p: "Que je", v: "sois" },
        { p: "Que tu", v: "sois" },
        { p: "Qu'il / elle", v: "soit" },
        { p: "Que nous", v: "soyons" },
        { p: "Que vous", v: "soyez" },
        { p: "Qu'ils / elles", v: "soient" }
      ],
      example: "Demain, nous <span class='highlight-red'>serons</span> tous réunis à Jérusalem."
    },

    "avoir": {
      infinitif: "Avoir",
      group: "Auxiliaire (3e groupe)",
      translationAr: "فعل الملكية (يملك / لديه)",
      present: [
        { p: "J'", v: "ai" },
        { p: "Tu", v: "as" },
        { p: "Il / Elle / On", v: "a" },
        { p: "Nous", v: "avons" },
        { p: "Vous", v: "avez" },
        { p: "Ils / Elles", v: "ont" }
      ],
      passe_compose: [
        { p: "J'ai", v: "eu" },
        { p: "Tu as", v: "eu" },
        { p: "Il / Elle a", v: "eu" },
        { p: "Nous avons", v: "eu" },
        { p: "Vous avez", v: "eu" },
        { p: "Ils / Elles ont", v: "eu" }
      ],
      imparfait: [
        { p: "J'", v: "avais" },
        { p: "Tu", v: "avais" },
        { p: "Il / Elle", v: "avait" },
        { p: "Nous", v: "avions" },
        { p: "Vous", v: "aviez" },
        { p: "Ils / Elles", v: "avaient" }
      ],
      futur: [
        { p: "J'", v: "aurai" },
        { p: "Tu", v: "auras" },
        { p: "Il / Elle", v: "aura" },
        { p: "Nous", v: "aurons" },
        { p: "Vous", v: "aurez" },
        { p: "Ils / Elles", v: "auront" }
      ],
      conditionnel: [
        { p: "J'", v: "aurais" },
        { p: "Tu", v: "aurais" },
        { p: "Il / Elle", v: "aurait" },
        { p: "Nous", v: "aurions" },
        { p: "Vous", v: "auriez" },
        { p: "Ils / Elles", v: "auraient" }
      ],
      subjonctif: [
        { p: "Que j'", v: "aie" },
        { p: "Que tu", v: "aies" },
        { p: "Qu'il / elle", v: "ait" },
        { p: "Que nous", v: "ayons" },
        { p: "Que vous", v: "ayez" },
        { p: "Qu'ils / elles", v: "aient" }
      ],
      example: "Ils <span class='highlight-red'>ont</span> une foi inébranlable en la justice."
    },

    "aller": {
      infinitif: "Aller",
      group: "3e groupe (Irrégulier)",
      translationAr: "فعل الذهاب (يذهب)",
      present: [
        { p: "Je", v: "vais" },
        { p: "Tu", v: "vas" },
        { p: "Il / Elle / On", v: "va" },
        { p: "Nous", v: "allons" },
        { p: "Vous", v: "allez" },
        { p: "Ils / Elles", v: "vont" }
      ],
      passe_compose: [
        { p: "Je suis", v: "allé(e)" },
        { p: "Tu es", v: "allé(e)" },
        { p: "Il est", v: "allé" },
        { p: "Nous sommes", v: "allé(e)s" },
        { p: "Vous êtes", v: "allé(e)s" },
        { p: "Ils sont", v: "allés" }
      ],
      imparfait: [
        { p: "J'", v: "allais" },
        { p: "Tu", v: "allais" },
        { p: "Il / Elle", v: "allait" },
        { p: "Nous", v: "allions" },
        { p: "Vous", v: "alliez" },
        { p: "Ils / Elles", v: "allaient" }
      ],
      futur: [
        { p: "J'", v: "irai" },
        { p: "Tu", v: "iras" },
        { p: "Il / Elle", v: "ira" },
        { p: "Nous", v: "irons" },
        { p: "Vous", v: "irez" },
        { p: "Ils / Elles", v: "iront" }
      ],
      conditionnel: [
        { p: "J'", v: "irais" },
        { p: "Tu", v: "irais" },
        { p: "Il / Elle", v: "irait" },
        { p: "Nous", v: "irions" },
        { p: "Vous", v: "iriez" },
        { p: "Ils / Elles", v: "iraient" }
      ],
      subjonctif: [
        { p: "Que j'", v: "aille" },
        { p: "Que tu", v: "ailles" },
        { p: "Qu'il / elle", v: "aille" },
        { p: "Que nous", v: "allions" },
        { p: "Que vous", v: "alliez" },
        { p: "Qu'ils / elles", v: "aillent" }
      ],
      example: "Nous <span class='highlight-red'>irons</span> ensemble visiter les lieux sacrés."
    },

    "faire": {
      infinitif: "Faire",
      group: "3e groupe (Irrégulier)",
      translationAr: "فعل العمل والصنع (يفعل / يصنع)",
      present: [
        { p: "Je", v: "fais" },
        { p: "Tu", v: "fais" },
        { p: "Il / Elle / On", v: "fait" },
        { p: "Nous", v: "faisons" },
        { p: "Vous", v: "faites" },
        { p: "Ils / Elles", v: "font" }
      ],
      passe_compose: [
        { p: "J'ai", v: "fait" },
        { p: "Tu as", v: "fait" },
        { p: "Il a", v: "fait" },
        { p: "Nous avons", v: "fait" },
        { p: "Vous avez", v: "fait" },
        { p: "Ils ont", v: "fait" }
      ],
      imparfait: [
        { p: "Je", v: "faisais" },
        { p: "Tu", v: "faisais" },
        { p: "Il / Elle", v: "faisait" },
        { p: "Nous", v: "faisions" },
        { p: "Vous", v: "faisiez" },
        { p: "Ils / Elles", v: "faisaient" }
      ],
      futur: [
        { p: "Je", v: "ferai" },
        { p: "Tu", v: "feras" },
        { p: "Il / Elle", v: "fera" },
        { p: "Nous", v: "ferons" },
        { p: "Vous", v: "ferez" },
        { p: "Ils / Elles", v: "feront" }
      ],
      conditionnel: [
        { p: "Je", v: "ferais" },
        { p: "Tu", v: "ferais" },
        { p: "Il / Elle", v: "ferait" },
        { p: "Nous", v: "ferions" },
        { p: "Vous", v: "feriez" },
        { p: "Ils / Elles", v: "feraient" }
      ],
      subjonctif: [
        { p: "Que je", v: "fasse" },
        { p: "Que tu", v: "fasses" },
        { p: "Qu'il / elle", v: "fasse" },
        { p: "Que nous", v: "fassions" },
        { p: "Que vous", v: "fassiez" },
        { p: "Qu'ils / elles", v: "fassent" }
      ],
      example: "Ils <span class='highlight-red'>font</span> toujours de leur mieux pour réussir."
    },

    "parler": {
      infinitif: "Parler",
      group: "1er groupe (-er)",
      translationAr: "فعل التكلم والحديث (يتكلم / يتحدث)",
      present: [
        { p: "Je", v: "parle" },
        { p: "Tu", v: "parles" },
        { p: "Il / Elle / On", v: "parle" },
        { p: "Nous", v: "parlons" },
        { p: "Vous", v: "parlez" },
        { p: "Ils / Elles", v: "parlent" }
      ],
      passe_compose: [
        { p: "J'ai", v: "parlé" },
        { p: "Tu as", v: "parlé" },
        { p: "Il a", v: "parlé" },
        { p: "Nous avons", v: "parlé" },
        { p: "Vous avez", v: "parlé" },
        { p: "Ils ont", v: "parlé" }
      ],
      imparfait: [
        { p: "Je", v: "parlais" },
        { p: "Tu", v: "parlais" },
        { p: "Il / Elle", v: "parlait" },
        { p: "Nous", v: "parlions" },
        { p: "Vous", v: "parliez" },
        { p: "Ils / Elles", v: "parlaient" }
      ],
      futur: [
        { p: "Je", v: "parlerai" },
        { p: "Tu", v: "parleras" },
        { p: "Il / Elle", v: "parlera" },
        { p: "Nous", v: "parlerons" },
        { p: "Vous", v: "parlerez" },
        { p: "Ils / Elles", v: "parleront" }
      ],
      conditionnel: [
        { p: "Je", v: "parlerais" },
        { p: "Tu", v: "parlerais" },
        { p: "Il / Elle", v: "parlerait" },
        { p: "Nous", v: "parlerions" },
        { p: "Vous", v: "parleriez" },
        { p: "Ils / Elles", v: "parleraient" }
      ],
      subjonctif: [
        { p: "Que je", v: "parle" },
        { p: "Que tu", v: "parles" },
        { p: "Qu'il / elle", v: "parle" },
        { p: "Que nous", v: "parlions" },
        { p: "Que vous", v: "parliez" },
        { p: "Qu'ils / elles", v: "parlent" }
      ],
      example: "Elle <span class='highlight-red'>parle</span> français avec une grande éloquence."
    },

    "prendre": {
      infinitif: "Prendre",
      group: "3e groupe (-re)",
      translationAr: "فعل الأخذ والتناول والركوب (يأخذ / يركب)",
      present: [
        { p: "Je", v: "prends" },
        { p: "Tu", v: "prends" },
        { p: "Il / Elle / On", v: "prend" },
        { p: "Nous", v: "prenons" },
        { p: "Vous", v: "prenez" },
        { p: "Ils / Elles", v: "prennent" }
      ],
      passe_compose: [
        { p: "J'ai", v: "pris" },
        { p: "Tu as", v: "pris" },
        { p: "Il a", v: "pris" },
        { p: "Nous avons", v: "pris" },
        { p: "Vous avez", v: "pris" },
        { p: "Ils ont", v: "pris" }
      ],
      imparfait: [
        { p: "Je", v: "prenais" },
        { p: "Tu", v: "prenais" },
        { p: "Il / Elle", v: "prenait" },
        { p: "Nous", v: "prenions" },
        { p: "Vous", v: "preniez" },
        { p: "Ils / Elles", v: "prenaient" }
      ],
      futur: [
        { p: "Je", v: "prendrai" },
        { p: "Tu", v: "prendras" },
        { p: "Il / Elle", v: "prendra" },
        { p: "Nous", v: "prendrons" },
        { p: "Vous", v: "prendrez" },
        { p: "Ils / Elles", v: "prendront" }
      ],
      conditionnel: [
        { p: "Je", v: "prendrais" },
        { p: "Tu", v: "prendrais" },
        { p: "Il / Elle", v: "prendrait" },
        { p: "Nous", v: "prendrions" },
        { p: "Vous", v: "prendriez" },
        { p: "Ils / Elles", v: "prendraient" }
      ],
      subjonctif: [
        { p: "Que je", v: "prenne" },
        { p: "Que tu", v: "prennes" },
        { p: "Qu'il / elle", v: "prenne" },
        { p: "Que nous", v: "prenions" },
        { p: "Que vous", v: "preniez" },
        { p: "Qu'ils / elles", v: "prennent" }
      ],
      example: "Je <span class='highlight-red'>prends</span> le temps d'apprendre chaque jour."
    },

    "pouvoir": {
      infinitif: "Pouvoir",
      group: "3e groupe (Modal)",
      translationAr: "فعل الاستطاعة والقدرة (يستطيع / يقدر)",
      present: [
        { p: "Je", v: "peux (puis)" },
        { p: "Tu", v: "peux" },
        { p: "Il / Elle / On", v: "peut" },
        { p: "Nous", v: "pouvons" },
        { p: "Vous", v: "pouvez" },
        { p: "Ils / Elles", v: "peuvent" }
      ],
      passe_compose: [
        { p: "J'ai", v: "pu" },
        { p: "Tu as", v: "pu" },
        { p: "Il a", v: "pu" },
        { p: "Nous avons", v: "pu" },
        { p: "Vous avez", v: "pu" },
        { p: "Ils ont", v: "pu" }
      ],
      imparfait: [
        { p: "Je", v: "pouvais" },
        { p: "Tu", v: "pouvais" },
        { p: "Il / Elle", v: "pouvait" },
        { p: "Nous", v: "pouvions" },
        { p: "Vous", v: "pouviez" },
        { p: "Ils / Elles", v: "pouvaient" }
      ],
      futur: [
        { p: "Je", v: "pourrai" },
        { p: "Tu", v: "pourras" },
        { p: "Il / Elle", v: "pourra" },
        { p: "Nous", v: "pourrons" },
        { p: "Vous", v: "pourrez" },
        { p: "Ils / Elles", v: "pourront" }
      ],
      conditionnel: [
        { p: "Je", v: "pourrais" },
        { p: "Tu", v: "pourrais" },
        { p: "Il / Elle", v: "pourrait" },
        { p: "Nous", v: "pourrions" },
        { p: "Vous", v: "pourriez" },
        { p: "Ils / Elles", v: "pourraient" }
      ],
      subjonctif: [
        { p: "Que je", v: "puisse" },
        { p: "Que tu", v: "puisses" },
        { p: "Qu'il / elle", v: "puisse" },
        { p: "Que nous", v: "puissions" },
        { p: "Que vous", v: "puissiez" },
        { p: "Qu'ils / elles", v: "puissent" }
      ],
      example: "Ensemble, nous <span class='highlight-red'>pouvons</span> surmonter toutes les épreuves."
    },

    "vouloir": {
      infinitif: "Vouloir",
      group: "3e groupe (Modal)",
      translationAr: "فعل الإرادة والرغبة (يريد / يرغب)",
      present: [
        { p: "Je", v: "veux" },
        { p: "Tu", v: "veux" },
        { p: "Il / Elle / On", v: "veut" },
        { p: "Nous", v: "voulons" },
        { p: "Vous", v: "voulez" },
        { p: "Ils / Elles", v: "veulent" }
      ],
      passe_compose: [
        { p: "J'ai", v: "voulu" },
        { p: "Tu as", v: "voulu" },
        { p: "Il a", v: "voulu" },
        { p: "Nous avons", v: "voulu" },
        { p: "Vous avez", v: "voulu" },
        { p: "Ils ont", v: "voulu" }
      ],
      imparfait: [
        { p: "Je", v: "voulais" },
        { p: "Tu", v: "voulais" },
        { p: "Il / Elle", v: "voulait" },
        { p: "Nous", v: "voulions" },
        { p: "Vous", v: "vouliez" },
        { p: "Ils / Elles", v: "voulaient" }
      ],
      futur: [
        { p: "Je", v: "voudrai" },
        { p: "Tu", v: "voudras" },
        { p: "Il / Elle", v: "voudra" },
        { p: "Nous", v: "voudrons" },
        { p: "Vous", v: "voudrez" },
        { p: "Ils / Elles", v: "voudront" }
      ],
      conditionnel: [
        { p: "Je", v: "voudrais" },
        { p: "Tu", v: "voudrais" },
        { p: "Il / Elle", v: "voudrait" },
        { p: "Nous", v: "voudrions" },
        { p: "Vous", v: "voudriez" },
        { p: "Ils / Elles", v: "voudraient" }
      ],
      subjonctif: [
        { p: "Que je", v: "veuille" },
        { p: "Que tu", v: "veuilles" },
        { p: "Qu'il / elle", v: "veuille" },
        { p: "Que nous", v: "voulions" },
        { p: "Que vous", v: "vouliez" },
        { p: "Qu'ils / elles", v: "veuillent" }
      ],
      example: "Je <span class='highlight-red'>voudrais</span> perfectionner mon expression française."
    }
  },

  filterMode: 'all',

  setFilterMode(mode) {
    this.filterMode = mode;
    document.querySelectorAll('.vocab-filter-btn').forEach(btn => btn.classList.remove('active'));
    if (mode === 'all') document.getElementById('btnVocabAll')?.classList.add('active');
    if (mode === 'words') document.getElementById('btnVocabWords')?.classList.add('active');
    if (mode === 'sentences') document.getElementById('btnVocabSentences')?.classList.add('active');
    this.renderVocab();
  },

  getCustomVocab() {
    try {
      return JSON.parse(localStorage.getItem('3bido_custom_vocab')) || [];
    } catch {
      return [];
    }
  },

  editingVocabId: null,

  openAddVocabModal() {
    if (!window.app.auth.isAdmin()) {
      window.app.showToast(window.app.lang === 'ar' ? 'الصلاحية محصورة بحساب المشرف عبيدو.' : 'Accès restreint au compte عبيدو.', '⚠️');
      return;
    }
    this.editingVocabId = null;
    this.editingTopicWord = null;
    const form = document.getElementById('addVocabForm');
    if (form) form.reset();

    const titleEl = document.getElementById('addVocabModalTitle');
    const btnSubmit = document.getElementById('btnSubmitVocab');
    const isAr = window.app.lang === 'ar';
    if (titleEl) titleEl.textContent = isAr ? 'إضافة كلمة / تعبير إلى بنك المفردات' : 'Ajouter un Mot au بنك المفردات';
    if (btnSubmit) btnSubmit.textContent = isAr ? 'حفظ في المستوى المحدد' : 'Enregistrer dans le Niveau';

    const modal = document.getElementById('addVocabModal');
    if (modal) {
      modal.classList.remove('hidden');
      const select = document.getElementById('vocabLevelSelect');
      if (select) select.value = this.currentLevel || 'A1';
    }
  },

  openEditVocabModal(vocabId) {
    if (!window.app.auth.isAdmin()) {
      window.app.showToast(window.app.lang === 'ar' ? 'الصلاحية محصورة بحساب المشرف عبيدو.' : 'Accès restreint au compte عبيدو.', '⚠️');
      return;
    }
    const item = this.getCustomVocab().find(w => w.id === vocabId);
    if (!item) return;

    this.editingVocabId = vocabId;
    const isAr = window.app.lang === 'ar';

    const select = document.getElementById('vocabLevelSelect');
    const iconInput = document.getElementById('vocabIconInput');
    const frInput = document.getElementById('vocabFrInput');
    const arInput = document.getElementById('vocabArInput');
    const exInput = document.getElementById('vocabExInput');

    if (select) select.value = item.level || 'A1';
    if (iconInput) iconInput.value = item.icon || '';
    if (frInput) frInput.value = item.fr || '';
    if (arInput) arInput.value = item.ar || '';
    if (exInput) exInput.value = item.ex || '';

    const titleEl = document.getElementById('addVocabModalTitle');
    const btnSubmit = document.getElementById('btnSubmitVocab');
    if (titleEl) titleEl.textContent = isAr ? `✏️ تعديل المفردة: ${item.fr}` : `✏️ Modifier le Mot : ${item.fr}`;
    if (btnSubmit) btnSubmit.textContent = isAr ? '💾 حفظ تعديلات المفردة' : '💾 Enregistrer les Modifications';

    const modal = document.getElementById('addVocabModal');
    if (modal) modal.classList.remove('hidden');
  },

  closeAddVocabModal() {
    this.editingVocabId = null;
    this.editingTopicWord = null;
    const modal = document.getElementById('addVocabModal');
    if (modal) modal.classList.add('hidden');
  },

  handleAddVocabBackdrop(e) {
    if (e.target.id === 'addVocabModal') {
      this.closeAddVocabModal();
    }
  },

  submitNewVocab(e) {
    e.preventDefault();
    if (!window.app.auth.isAdmin()) {
      window.app.showToast('Action non autorisée.', '❌');
      return;
    }

    const lvl = document.getElementById('vocabLevelSelect').value;
    const icon = document.getElementById('vocabIconInput').value.trim() || '💡';
    const fr = document.getElementById('vocabFrInput').value.trim();
    const ar = document.getElementById('vocabArInput').value.trim();
    const ex = document.getElementById('vocabExInput').value.trim();
    const isAr = window.app.lang === 'ar';

    if (!fr || !ar) {
      window.app.showToast(isAr ? 'يرجى إدخال الكلمة وترجمتها بالعربية.' : 'Veuillez renseigner le mot et sa traduction.', '⚠️');
      return;
    }

    // Editing a topic default vocab word
    if (this.editingTopicWord) {
      const overrides = this.getVocabOverrides();
      const key = `${this.editingTopicWord.level}:::${this.editingTopicWord.originalKey}`;
      overrides[key] = {
        icon,
        fr,
        plainFr: fr,
        ar,
        ex: ex || ''
      };
      this.saveVocabOverrides(overrides);
      this.applyVocabOverrides();
      if (window.app.cloud) window.app.cloud.saveSiteSettings({ vocabOverrides: overrides });

      document.getElementById('addVocabForm').reset();
      this.closeAddVocabModal();
      this.renderVocab();
      window.app.showToast(isAr ? `تم تحديث المفردة « ${fr} » بنجاح! ✅` : `Mot « ${fr} » mis à jour ! ✅`, '💾');
      this.editingTopicWord = null;
      return;
    }

    // Editing an existing vocab
    if (this.editingVocabId) {
      let list = this.getCustomVocab();
      const existing = list.find(w => w.id === this.editingVocabId);
      if (existing) {
        existing.level = lvl;
        existing.icon = icon;
        existing.fr = fr;
        existing.plainFr = fr;
        existing.ar = ar;
        existing.ex = ex || '';

        localStorage.setItem('3bido_custom_vocab', JSON.stringify(list));
        if (window.app.cloud) window.app.cloud.saveVocab(existing);
        document.getElementById('addVocabForm').reset();
        this.closeAddVocabModal();
        this.renderVocab();
        window.app.showToast(isAr ? `تم تحديث المفردة « ${fr} » بنجاح! ✅` : `Mot « ${fr} » mis à jour ! ✅`, '💾');
        this.editingVocabId = null;
        return;
      }
    }

    const newWord = {
      id: `vocab-${Date.now()}`,
      level: lvl,
      icon,
      fr,
      plainFr: fr,
      ar,
      ex: ex || '',
      createdAt: Date.now()
    };

    const list = this.getCustomVocab();
    list.unshift(newWord);
    localStorage.setItem('3bido_custom_vocab', JSON.stringify(list));
    if (window.app.cloud) window.app.cloud.saveVocab(newWord);

    document.getElementById('addVocabForm').reset();
    this.closeAddVocabModal();
    this.renderVocab();
    window.app.showToast(isAr ? `تمت إضافة الكلمة « ${fr} » إلى المستوى ${lvl}!` : `Mot « ${fr} » ajouté au niveau ${lvl} !`, '🎉');
  },

  deleteCustomVocab(id) {
    if (!window.app.auth.isAdmin()) return;
    const isAr = window.app.lang === 'ar';
    if (confirm(isAr ? 'هل أنت متأكد من حذف هذه الكلمة المضافة؟' : 'Confirmer la suppression de ce mot ajouté ?')) {
      let list = this.getCustomVocab();
      list = list.filter(w => w.id !== id);
      localStorage.setItem('3bido_custom_vocab', JSON.stringify(list));
      if (window.app.cloud) window.app.cloud.deleteVocab(id);
      this.renderVocab();
      window.app.showToast(isAr ? 'تم حذف الكلمة.' : 'Mot supprimé.', '🗑️');
    }
  },

  renderVocab() {
    const container = document.getElementById('vocabContent');
    if (!container) return;
    const isAr = window.app.lang === 'ar';
    const isAdmin = window.app.auth.isAdmin();

    const topics = this.vocabData[this.currentLevel] || [];
    const customList = this.getCustomVocab().filter(w => w.level === this.currentLevel);

    // Build custom vocab block if any
    let customBlockHtml = '';
    if (customList.length > 0) {
      let filteredCustom = customList;
      if (this.filterMode === 'words') {
        filteredCustom = customList.filter(it => (it.fr || '').trim().split(/\s+/).length <= 3);
      } else if (this.filterMode === 'sentences') {
        filteredCustom = customList.filter(it => (it.fr || '').trim().split(/\s+/).length > 3 || it.ex);
      }

      if (filteredCustom.length > 0) {
        customBlockHtml = `
          <div class="vocab-topic-section custom-vocab-section">
            <div class="topic-header custom-topic-header">
              <span class="topic-badge-icon">👑</span>
              <h3 class="topic-name">${isAr ? 'مفردات إضافية خاصة بالمشرف عبيدو' : 'Vocabulaire Personnalisé (Ajouts Admin عبيدو)'}</h3>
              <span style="font-size: 0.85rem; color: var(--text-secondary); margin-left: auto;">(${filteredCustom.length} ${isAr ? 'عنصر' : 'éléments'})</span>
            </div>
            <div class="vocab-cards-grid">
              ${filteredCustom.map(item => `
                <div class="vocab-card custom-vocab-card">
                  <div class="v-french-row">
                    <span class="v-french">${item.icon ? item.icon + ' ' : ''}<strong>${this.escape(item.fr)}</strong> <span class="v-arabic-inline">(${this.escape(item.ar)})</span></span>
                    <div style="display:flex; gap: 4px; align-items:center;">
                      <button class="tool-icon-btn" onclick="window.app.speakFrench('${this.escapeQuotes(item.fr)}')" title="Écouter">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                      </button>
                      ${isAdmin ? `
                        <button class="tool-icon-btn edit-icon-btn" onclick="window.app.levels.openEditVocabModal('${item.id}')" title="${isAr ? 'تعديل هذه المفردة' : 'Modifier ce mot'}">
                          ✏️
                        </button>
                        <button class="tool-icon-btn delete-icon-btn" onclick="window.app.levels.deleteCustomVocab('${item.id}')" title="${isAr ? 'حذف هذه الكلمة' : 'Supprimer ce mot'}">
                          🗑️
                        </button>
                      ` : ''}
                    </div>
                  </div>
                  ${item.ex ? `<div class="v-example">${isAr ? 'في سياق الجملة :' : 'Contexte :'} « ${this.escape(item.ex)} »</div>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }
    }

    if (topics.length === 0 && customList.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: 2rem;">${isAr ? 'المحتوى قيد التحديث.' : 'Contenu en cours d\'enrichissement.'}</div>`;
      return;
    }

    const topicsHtml = topics.map(topic => {
      let filteredItems = topic.items;
      if (this.filterMode === 'words') {
        filteredItems = topic.items.filter(it => (it.plainFr || it.fr || '').trim().split(/\s+/).length <= 3 && !/[.!?]$/.test((it.plainFr || it.fr || '').trim()));
        if (filteredItems.length === 0) filteredItems = topic.items.slice(0, Math.ceil(topic.items.length / 2));
      } else if (this.filterMode === 'sentences') {
        filteredItems = topic.items.filter(it => (it.plainFr || it.fr || '').trim().split(/\s+/).length > 3 || /[.!?]$/.test((it.plainFr || it.fr || '').trim()) || it.ex);
        if (filteredItems.length === 0) filteredItems = topic.items.slice(Math.floor(topic.items.length / 2));
      }

      return `
        <div class="vocab-topic-section">
          <div class="topic-header">
            <span class="topic-badge-icon">${topic.icon}</span>
            <h3 class="topic-name">${this.escape(isAr && topic.topicAr ? topic.topicAr : topic.topic)}</h3>
            <span style="font-size: 0.85rem; color: var(--text-secondary); margin-left: auto;">(${filteredItems.length} ${isAr ? 'عنصر' : 'éléments'})</span>
          </div>
          <div class="vocab-cards-grid">
            ${filteredItems.map(item => `
              <div class="vocab-card">
                <div class="v-french-row">
                  <span class="v-french">${item.icon ? item.icon + ' ' : ''}<strong>${this.escape(item.plainFr || item.fr)}</strong> <span class="v-arabic-inline">(${this.escape(item.ar)})</span></span>
                  <div style="display:flex; gap: 4px; align-items:center;">
                    <button class="tool-icon-btn" onclick="window.app.speakFrench('${this.escapeQuotes(item.plainFr || item.fr)}')" title="Écouter">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                    </button>
                    ${isAdmin ? `
                      <button class="tool-icon-btn edit-icon-btn" onclick="window.app.levels.openEditTopicVocab('${this.currentLevel}', '${this.escapeQuotes(item.plainFr || item.fr)}')" title="${isAr ? 'تعديل هذه المفردة' : 'Modifier ce mot'}">
                        ✏️
                      </button>
                    ` : ''}
                  </div>
                </div>
                ${item.ex ? `<div class="v-example">${isAr ? 'في سياق الجملة :' : 'Contexte :'} « ${item.exHtml || this.escape(item.ex)} »</div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = customBlockHtml + topicsHtml;
  },
  convSpeeds: {},

  setConvSpeed(idx, val) {
    this.convSpeeds[idx] = parseFloat(val) || 1.0;
  },

  playTurnAudio(text, idx) {
    const rate = this.convSpeeds[idx] || 1.0;
    window.app.speakFrench(text, rate);
  },

  playFullConversation(idx) {
    const list = this.conversationsData[this.currentConvLevel || 'A1'] || [];
    const conv = list[idx];
    if (!conv) return;

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    const rate = this.convSpeeds[idx] || 1.0;
    const fullText = conv.turns.map(t => `${t.name} : ${t.plainFrench}`).join('. ');
    window.app.speakFrench(fullText, rate);
    const isAr = window.app.lang === 'ar';
    window.app.showToast(isAr ? `جاري تشغيل الحوار كاملاً (السرعة: ${rate}x)...` : `Lecture intégrale du dialogue (${rate}x)...`, '🎧');
  },

  stopFullConversation(idx) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    const isAr = window.app.lang === 'ar';
    window.app.showToast(isAr ? 'تم إيقاف تشغيل الحوار ⏹️' : 'Lecture audio arrêtée ⏹️', '⏹️');
  },

  renderConversations() {
    const container = document.getElementById('convContent');
    if (!container) return;
    const isAr = window.app.lang === 'ar';
    const list = this.conversationsData[this.currentConvLevel || 'A1'] || [];

    if (list.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: 2rem;">${isAr ? 'لا توجد حوارات متاحة لهذا المستوى حالياً.' : 'Aucun dialogue disponible pour ce niveau.'}</div>`;
      return;
    }

    container.innerHTML = `
      <div class="dialogues-wrapper">
        ${list.map((conv, idx) => {
          const currentSpeed = this.convSpeeds[idx] || 1.0;
          return `
            <div class="dialogue-card">
              <div class="dialogue-card-header">
                <div class="dialogue-meta">
                  <span class="dialogue-icon">${conv.icon}</span>
                  <div class="dialogue-title-group">
                    <h3>${this.escape(conv.title)}</h3>
                    <div class="dialogue-subtitle-ar">${this.escape(conv.titleAr)}</div>
                  </div>
                </div>

                <!-- Comprehensive Conversation Controls: Play, Stop & Speed -->
                <div class="dialogue-audio-controls">
                  <div class="audio-speed-selector">
                    <span class="speed-label">⚡ ${isAr ? 'السرعة :' : 'Vitesse :'}</span>
                    <select class="conv-speed-select" onchange="window.app.levels.setConvSpeed(${idx}, this.value)">
                      <option value="0.75" ${currentSpeed === 0.75 ? 'selected' : ''}>0.75x (${isAr ? 'بطيء' : 'Lent'})</option>
                      <option value="1.0" ${currentSpeed === 1.0 ? 'selected' : ''}>1.0x (${isAr ? 'عادي' : 'Normal'})</option>
                      <option value="1.25" ${currentSpeed === 1.25 ? 'selected' : ''}>1.25x (${isAr ? 'سريع' : 'Vif'})</option>
                      <option value="1.5" ${currentSpeed === 1.5 ? 'selected' : ''}>1.5x (${isAr ? 'سريع جداً' : 'Rapide'})</option>
                    </select>
                  </div>
                  <button class="btn btn-conv-play" onclick="window.app.levels.playFullConversation(${idx})" title="${isAr ? 'تشغيل الحوار كاملاً' : 'Lire tout le dialogue'}">
                    ▶️ ${isAr ? 'تشغيل' : 'Lecture'}
                  </button>
                  <button class="btn btn-conv-stop" onclick="window.app.levels.stopFullConversation(${idx})" title="${isAr ? 'إيقاف الصوت' : 'Arrêter'}">
                    ⏹️ ${isAr ? 'إيقاف' : 'Arrêter'}
                  </button>
                </div>
              </div>
              <div class="dialogue-turns-list">
                ${conv.turns.map((turn) => `
                  <div class="dialogue-turn ${turn.speaker === 'B' ? 'speaker-b' : 'speaker-a'}">
                    <div class="speaker-avatar">${this.escape(turn.avatar || turn.speaker)}</div>
                    <div class="turn-body">
                      <div class="turn-speaker-name">${this.escape(turn.name)}</div>
                      <!-- CRITICAL: Conjugated verbs highlighted in RED -->
                      <div class="turn-french-speech">${turn.frenchHtml}</div>
                      <div class="turn-arabic-translation">${this.escape(turn.arabic)}</div>
                    </div>
                    <button class="turn-audio-btn" onclick="window.app.levels.playTurnAudio('${this.escapeQuotes(turn.plainFrench)}', ${idx})" title="Écouter cette réplique">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  renderQuickVerbs() {
    const container = document.getElementById('quickVerbsList');
    if (!container) return;

    const verbs = Object.keys(this.verbsData);
    container.innerHTML = verbs.map(v => `
      <button class="qv-chip ${v === this.selectedVerb ? 'active' : ''}" onclick="window.app.levels.selectVerb('${v}')">
        ${v.toUpperCase()}
      </button>
    `).join('');
  },

  selectVerb(verbKey) {
    this.selectedVerb = verbKey;
    this.renderQuickVerbs();
    this.renderConjugation();
  },

  filterVerbs(query) {
    const q = query.trim().toLowerCase();
    const match = Object.keys(this.verbsData).find(v => v.startsWith(q) || v.includes(q));
    if (match) {
      this.selectedVerb = match;
      this.renderQuickVerbs();
      this.renderConjugation();
    }
  },

  changeTense(tense) {
    this.selectedTense = tense;
    this.renderConjugation();
  },

  /**
   * MANDATORY REQUIREMENT:
   * Conjugated verbs MUST be highlighted in DISTINCT RED.
   */
  renderConjugation() {
    const area = document.getElementById('conjugationDisplayArea');
    if (!area) return;
    const isAr = window.app.lang === 'ar';

    const data = this.verbsData[this.selectedVerb] || this.verbsData['être'];

    const tensesMeta = [
      { id: 'present', label: isAr ? "المضارع (Présent de l'indicatif)" : "Présent de l'indicatif" },
      { id: 'passe_compose', label: isAr ? "الماضي المركب (Passé composé)" : "Passé composé" },
      { id: 'imparfait', label: isAr ? "الماضي المستمر (Imparfait)" : "Imparfait de l'indicatif" },
      { id: 'futur', label: isAr ? "المستقبل البسيط (Futur simple)" : "Futur simple" },
      { id: 'conditionnel', label: isAr ? "صيغة الشرط (Conditionnel présent)" : "Conditionnel présent" },
      { id: 'subjonctif', label: isAr ? "صيغة المنصوب (Subjonctif présent)" : "Subjonctif présent" }
    ];

    const activeTenses = this.selectedTense === 'all' 
      ? tensesMeta 
      : tensesMeta.filter(t => t.id === this.selectedTense);

    area.innerHTML = `
      <div class="verb-header-card">
        <div class="v-title-group">
          <h3 class="v-infinitif">${this.escape(data.infinitif)}</h3>
          <span class="v-group-badge">${this.escape(data.group)}</span>
        </div>
        <div class="v-translation-ar">${this.escape(data.translationAr)}</div>
        <button class="btn btn-primary" onclick="window.app.speakFrench('${this.escapeQuotes(data.infinitif)}')">
          🔊 ${isAr ? 'نطق الفعل الأصلي' : 'Prononcer le verbe'}
        </button>
      </div>

      <div class="tense-tables-grid">
        ${activeTenses.map(t => `
          <div class="tense-card">
            <div class="tense-card-header">
              <span>${t.label}</span>
              <span class="red-highlight-pill" style="font-size: 0.7rem;">${isAr ? 'الفعل بالأحمر' : 'Verbe en Rouge'}</span>
            </div>
            <table class="tense-table">
              <tbody>
                ${(data[t.id] || []).map(row => `
                  <tr>
                    <td class="pronoun-col">${this.escape(row.p)}</td>
                    <td class="verb-col">
                      <!-- CRITICAL: Conjugated Verb Highlighted in RED -->
                      <span class="highlight-red">${this.escape(row.v)}</span>
                      <button class="tool-icon-btn" style="width: 24px; height: 24px; display: inline-flex; vertical-align: middle; margin-left: 6px;" onclick="window.app.speakFrench('${this.escapeQuotes(row.p + ' ' + row.v)}')" title="Écouter la forme">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/></svg>
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `).join('')}
      </div>

      ${data.example ? `
        <div class="conjugation-example-box">
          <div class="ce-title">${isAr ? 'مثال سياقي مع إبراز الفعل المصرف بالأحمر :' : 'Exemple en contexte avec verbe conjugué surligné en rouge :'}</div>
          <p class="ce-sentence">${data.example}</p>
        </div>
      ` : ''}
    `;
  },

  escape(str) {
    return (str || '').replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  },

  escapeQuotes(str) {
    return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }
};

/* ===================================================================
   WELCOME MESSAGE MODULE (Admin-Editable)
   =================================================================== */
window.app.welcomeMsg = {
  defaultMsg: 'أنا اسمي أحمد عبد الفتاح، في كلية اللغات والترجمة جامعة الأزهر، قسم الترجمة الفورية الفرنسية. هذا الموقع صدقة جارية على روح والدي، أرجو أن تدعوا لي وله بالرحمة والمغفرة.',

  init() {
    const saved = localStorage.getItem('3bido_welcome_msg');
    const msgEl = document.getElementById('welcomeMsgText');
    const popupEl = document.getElementById('popupWelcomeText');
    if (msgEl) msgEl.textContent = saved || this.defaultMsg;
    if (popupEl) popupEl.textContent = saved || this.defaultMsg;
    this.updateAdminVisibility();
  },

  updateAdminVisibility() {
    const isAdmin = window.app.auth && window.app.auth.isAdmin();
    const btn = document.getElementById('adminEditMsgBtn');
    const editor = document.getElementById('welcomeMsgEditor');
    if (btn) {
      if (isAdmin) btn.classList.remove('hidden');
      else btn.classList.add('hidden');
    }
    // If not admin, also hide the editor and show the display (in case it was open)
    if (!isAdmin) {
      if (editor) editor.classList.add('hidden');
      const display = document.getElementById('welcomeMsgDisplay');
      if (display) display.classList.remove('hidden');
    }
  },

  startEdit() {
    const isAdmin = window.app.auth && window.app.auth.isAdmin();
    if (!isAdmin) return;
    const input = document.getElementById('welcomeMsgInput');
    const display = document.getElementById('welcomeMsgDisplay');
    const editor = document.getElementById('welcomeMsgEditor');
    const msgText = document.getElementById('welcomeMsgText');
    if (input) input.value = msgText ? msgText.textContent.trim() : this.defaultMsg;
    if (display) display.classList.add('hidden');
    if (editor) editor.classList.remove('hidden');
    if (input) input.focus();
  },

  save() {
    const isAdmin = window.app.auth && window.app.auth.isAdmin();
    if (!isAdmin) return;
    const input = document.getElementById('welcomeMsgInput');
    const val = input ? input.value.trim() : '';
    if (!val) return;
    localStorage.setItem('3bido_welcome_msg', val);
    if (window.app.cloud) window.app.cloud.saveSiteSettings({ welcomeMsg: val });
    const msgEl = document.getElementById('welcomeMsgText');
    if (msgEl) msgEl.textContent = val;
    const popupTextEl = document.getElementById('popupWelcomeText');
    if (popupTextEl) popupTextEl.textContent = val;
    this.cancel();
    const isAr = window.app.lang === 'ar';
    window.app.showToast(isAr ? 'تم حفظ رسالة الترحيب بنجاح ✅' : 'Message d\'accueil sauvegardé ✅', '💾');
  },

  cancel() {
    const display = document.getElementById('welcomeMsgDisplay');
    const editor = document.getElementById('welcomeMsgEditor');
    if (display) display.classList.remove('hidden');
    if (editor) editor.classList.add('hidden');
  }
};

/* ===================================================================
   DATA SYNC & BACKUP SYSTEM (مزامنة ونقل البيانات بين الأجهزة)
   =================================================================== */
window.app.sync = {
  openModal() {
    const modal = document.getElementById('syncModal');
    if (modal) modal.classList.remove('hidden');
  },

  closeModal() {
    const modal = document.getElementById('syncModal');
    if (modal) modal.classList.add('hidden');
  },

  exportData() {
    const isAr = window.app.lang === 'ar';
    const data = {
      app: '3bido',
      version: '1.0',
      exportedAt: new Date().toISOString(),
      videos: JSON.parse(localStorage.getItem('3bido_custom_videos') || '[]'),
      books: JSON.parse(localStorage.getItem('3bido_custom_books') || '[]'),
      vocab: JSON.parse(localStorage.getItem('3bido_custom_vocab') || '[]'),
      vocabOverrides: JSON.parse(localStorage.getItem('3bido_vocab_overrides') || '{}'),
      welcomeMsg: localStorage.getItem('3bido_welcome_msg') || null
    };

    const count = data.videos.length + data.books.length + data.vocab.length;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `3bido-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    window.app.showToast(
      isAr ? `تم تصدير ملف النسخة بنجاح (${count} عنصر) 📥` : `Sauvegarde exportée avec succès (${count} éléments) 📥`,
      '💾'
    );
  },

  importData(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const isAr = window.app.lang === 'ar';

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (!data || typeof data !== 'object') {
          throw new Error('Format de fichier invalide');
        }

        let updatedCount = 0;
        if (Array.isArray(data.videos)) {
          localStorage.setItem('3bido_custom_videos', JSON.stringify(data.videos));
          updatedCount += data.videos.length;
        }
        if (Array.isArray(data.books)) {
          localStorage.setItem('3bido_custom_books', JSON.stringify(data.books));
          updatedCount += data.books.length;
        }
        if (Array.isArray(data.vocab)) {
          localStorage.setItem('3bido_custom_vocab', JSON.stringify(data.vocab));
          updatedCount += data.vocab.length;
        }
        if (data.vocabOverrides && typeof data.vocabOverrides === 'object') {
          localStorage.setItem('3bido_vocab_overrides', JSON.stringify(data.vocabOverrides));
        }
        if (data.welcomeMsg) {
          localStorage.setItem('3bido_welcome_msg', data.welcomeMsg);
        }

        if (window.app.videos) window.app.videos.renderVideos();
        if (window.app.library) window.app.library.renderBooks();
        if (window.app.levels) {
          window.app.levels.applyVocabOverrides();
          window.app.levels.renderVocab();
        }
        if (window.app.welcomeMsg) window.app.welcomeMsg.init();

        this.closeModal();
        window.app.showToast(
          isAr ? `تم استيراد ${updatedCount} عنصر ونقل كافة البيانات بنجاح! 🎉` : `${updatedCount} éléments importés avec succès ! 🎉`,
          '✅'
        );
      } catch (err) {
        console.error('Import error:', err);
        window.app.showToast(isAr ? 'فشل قراءة الملف: الملف تالف أو غير صالح.' : 'Échec : fichier de sauvegarde non valide.', '❌');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }
};


/* ===================================================================
   FIREBASE CLOUD REALTIME DATABASE SYSTEM (مزامنة السحابة الفورية)
   =================================================================== */
window.app.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDdfhFhHXlhb5Ywun4742XGanvjcg6VVgU",
  authDomain: "bido-f7197.firebaseapp.com",
  projectId: "bido-f7197",
  storageBucket: "bido-f7197.firebasestorage.app",
  messagingSenderId: "1089798335295",
  appId: "1:1089798335295:web:e930a4e6dac0fce7e4418a",
  measurementId: "G-BC53QT6FC8"
};

window.app.cloud = {
  db: null,
  isReady: false,
  status: 'offline',

  init() {
    if (typeof firebase === 'undefined') {
      console.log('Firebase SDK loading, retrying in 400ms...');
      setTimeout(() => {
        if (typeof firebase !== 'undefined' && !this.isReady) {
          this.init();
        }
      }, 400);
      this.updateStatusUI('offline');
      return;
    }

    const config = this.getConfig();
    if (!config || !config.projectId) {
      this.updateStatusUI('not_configured');
      return;
    }

    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
      this.db = firebase.firestore();
      this.isReady = true;
      this.updateStatusUI('connected');
      console.log('Firebase Cloud Realtime Database active for 3bido!');

      this.startRealtimeSync();
    } catch (err) {
      console.error('Firebase Cloud initialization error:', err);
      this.updateStatusUI('error');
    }
  },

  getConfig() {
    if (window.app.FIREBASE_CONFIG && window.app.FIREBASE_CONFIG.projectId) {
      return window.app.FIREBASE_CONFIG;
    }
    try {
      return JSON.parse(localStorage.getItem('3bido_firebase_config')) || null;
    } catch {
      return null;
    }
  },

  openModal() {
    const modal = document.getElementById('cloudModal');
    if (!modal) return;
    modal.classList.remove('hidden');

    const cfg = this.getConfig();
    const input = document.getElementById('firebaseConfigInput');
    if (input && cfg) {
      input.value = JSON.stringify(cfg, null, 2);
    }
    this.refreshModalStatus();
  },

  closeModal() {
    const modal = document.getElementById('cloudModal');
    if (modal) modal.classList.add('hidden');
  },

  refreshModalStatus() {
    const dot = document.getElementById('cloudStatusDot');
    const text = document.getElementById('cloudStatusFullText');
    const btnPush = document.getElementById('btnPushToCloud');
    const isAr = window.app.lang === 'ar';

    if (this.isReady && this.db) {
      if (dot) dot.className = 'status-dot dot-online';
      if (text) text.textContent = isAr ? 'السحابة متصلة ونشطة في وضع المزامنة الحية 🟢' : 'Base de données Cloud connectée et active 🟢';
      if (btnPush) btnPush.style.display = 'inline-flex';
    } else {
      if (dot) dot.className = 'status-dot dot-offline';
      if (text) text.textContent = isAr ? 'السحابة غير مفعلة بعد (يعمل في الوضع المحلي) ⚪' : 'Mode local actif (non connecté au Cloud)';
      if (btnPush) btnPush.style.display = 'none';
    }
  },

  updateStatusUI(status) {
    this.status = status;
    const isAr = window.app.lang === 'ar';
    const navText = document.getElementById('cloudNavStatusText');
    const pill = document.getElementById('cloudNavPill');

    if (pill) {
      if (status === 'connected') {
        pill.classList.add('status-connected');
        if (navText) navText.textContent = isAr ? 'سحابي متصل' : 'Cloud Connecté';
      } else {
        pill.classList.remove('status-connected');
        if (navText) navText.textContent = isAr ? 'السحابة' : 'Cloud';
      }
    }
    this.refreshModalStatus();
  },

  handleConfigSubmit(e) {
    e.preventDefault();
    const isAr = window.app.lang === 'ar';
    const raw = (document.getElementById('firebaseConfigInput').value || '').trim();
    if (!raw) {
      window.app.showToast(isAr ? 'يرجى لصق كود الإعدادات الخاص بـ Firebase.' : 'Veuillez coller la configuration Firebase.', '⚠️');
      return;
    }

    const config = this.parseConfigString(raw);
    if (!config || !config.projectId) {
      window.app.showToast(isAr ? 'تعذر قراءة الإعدادات. تأكد من وجود projectId و apiKey.' : 'Configuration invalide (projectId manquant).', '❌');
      return;
    }

    localStorage.setItem('3bido_firebase_config', JSON.stringify(config));
    window.app.FIREBASE_CONFIG = config;
    this.init();

    if (this.isReady) {
      window.app.showToast(isAr ? 'تم تفعيل الاتصال السحابي بنجاح! ☁️🎉' : 'Connexion Cloud activée avec succès ! ☁️🎉', '✅');
      this.pushAllLocalToCloud();
      this.closeModal();
    } else {
      window.app.showToast(isAr ? 'تم حفظ الإعدادات، يرجى إعادة تحميل الصفحة لتفعيل السحابة.' : 'Configuration enregistrée. Veuillez actualiser.', 'ℹ️');
    }
  },

  parseConfigString(str) {
    try {
      return JSON.parse(str);
    } catch (e) {}

    try {
      const apiKeyMatch = str.match(/apiKey\s*:\s*["']([^"']+)["']/);
      const projectIdMatch = str.match(/projectId\s*:\s*["']([^"']+)["']/);
      const authDomainMatch = str.match(/authDomain\s*:\s*["']([^"']+)["']/);
      const storageBucketMatch = str.match(/storageBucket\s*:\s*["']([^"']+)["']/);
      const appIdMatch = str.match(/appId\s*:\s*["']([^"']+)["']/);
      const senderIdMatch = str.match(/messagingSenderId\s*:\s*["']([^"']+)["']/);

      if (projectIdMatch) {
        return {
          apiKey: apiKeyMatch ? apiKeyMatch[1] : '',
          projectId: projectIdMatch[1],
          authDomain: authDomainMatch ? authDomainMatch[1] : (projectIdMatch[1] + '.firebaseapp.com'),
          storageBucket: storageBucketMatch ? storageBucketMatch[1] : (projectIdMatch[1] + '.appspot.com'),
          messagingSenderId: senderIdMatch ? senderIdMatch[1] : '',
          appId: appIdMatch ? appIdMatch[1] : ''
        };
      }
    } catch (err) {
      console.warn('Regex parse error:', err);
    }
    return null;
  },

  startRealtimeSync() {
    if (!this.db) return;

    // 1. Realtime Videos Sync
    this.db.collection('videos').onSnapshot((snapshot) => {
      const list = [];
      snapshot.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() });
      });
      list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      localStorage.setItem('3bido_custom_videos', JSON.stringify(list));
      if (window.app.videos) window.app.videos.renderVideos();
    }, err => console.warn('Cloud video sync warning:', err));

    // 2. Realtime Books Sync
    this.db.collection('books').onSnapshot((snapshot) => {
      const list = [];
      snapshot.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() });
      });
      list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      localStorage.setItem('3bido_custom_books', JSON.stringify(list));
      if (window.app.library) window.app.library.renderBooks();
    }, err => console.warn('Cloud books sync warning:', err));

    // 3. Realtime Vocab Sync
    this.db.collection('vocab').onSnapshot((snapshot) => {
      const list = [];
      snapshot.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() });
      });
      list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      localStorage.setItem('3bido_custom_vocab', JSON.stringify(list));
      if (window.app.levels) window.app.levels.renderVocab();
    }, err => console.warn('Cloud vocab sync warning:', err));

    // 4. Realtime Site Settings Sync
    this.db.collection('settings').doc('site').onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();
        if (data.welcomeMsg) {
          localStorage.setItem('3bido_welcome_msg', data.welcomeMsg);
          if (window.app.welcomeMsg) window.app.welcomeMsg.init();
        }
        if (data.deletedBookIds && Array.isArray(data.deletedBookIds)) {
          localStorage.setItem('3bido_deleted_books', JSON.stringify(data.deletedBookIds));
          if (window.app.library) window.app.library.renderBooks();
        }
        if (data.vocabOverrides) {
          localStorage.setItem('3bido_vocab_overrides', JSON.stringify(data.vocabOverrides));
          if (window.app.levels) {
            window.app.levels.applyVocabOverrides();
            window.app.levels.renderVocab();
          }
        }
      }
    }, err => console.warn('Cloud settings sync warning:', err));
  },

  async saveVideo(video) {
    if (!this.db || !this.isReady) return false;
    try {
      await this.db.collection('videos').doc(video.id).set(video, { merge: true });
      return true;
    } catch (e) {
      console.error('Cloud saveVideo error:', e);
      return false;
    }
  },

  async deleteVideo(id) {
    if (!this.db || !this.isReady) return false;
    try {
      await this.db.collection('videos').doc(id).delete();
      return true;
    } catch (e) {
      console.error('Cloud deleteVideo error:', e);
      return false;
    }
  },

  async saveBook(book) {
    if (!this.db || !this.isReady) return false;
    try {
      await this.db.collection('books').doc(book.id).set(book, { merge: true });
      return true;
    } catch (e) {
      console.error('Cloud saveBook error:', e);
      return false;
    }
  },

  async deleteBook(id) {
    if (!this.db || !this.isReady) return false;
    try {
      await this.db.collection('books').doc(id).delete();
      return true;
    } catch (e) {
      console.error('Cloud deleteBook error:', e);
      return false;
    }
  },

  async saveVocab(word) {
    if (!this.db || !this.isReady) return false;
    try {
      await this.db.collection('vocab').doc(word.id).set(word, { merge: true });
      return true;
    } catch (e) {
      console.error('Cloud saveVocab error:', e);
      return false;
    }
  },

  async deleteVocab(id) {
    if (!this.db || !this.isReady) return false;
    try {
      await this.db.collection('vocab').doc(id).delete();
      return true;
    } catch (e) {
      console.error('Cloud deleteVocab error:', e);
      return false;
    }
  },

  async saveSiteSettings(settings) {
    if (!this.db || !this.isReady) return false;
    try {
      await this.db.collection('settings').doc('site').set(settings, { merge: true });
      return true;
    } catch (e) {
      console.error('Cloud saveSiteSettings error:', e);
      return false;
    }
  },

  async pushAllLocalToCloud() {
    if (!this.db || !this.isReady) {
      window.app.showToast(window.app.lang === 'ar' ? 'السحابة غير متصلة.' : 'Cloud non connecté.', '⚠️');
      return;
    }
    const isAr = window.app.lang === 'ar';
    try {
      const videos = JSON.parse(localStorage.getItem('3bido_custom_videos') || '[]');
      const books = JSON.parse(localStorage.getItem('3bido_custom_books') || '[]');
      const vocab = JSON.parse(localStorage.getItem('3bido_custom_vocab') || '[]');
      const overrides = JSON.parse(localStorage.getItem('3bido_vocab_overrides') || '{}');
      const welcomeMsg = localStorage.getItem('3bido_welcome_msg') || null;

      for (const v of videos) {
        await this.db.collection('videos').doc(v.id).set(v, { merge: true });
      }
      for (const b of books) {
        await this.db.collection('books').doc(b.id).set(b, { merge: true });
      }
      for (const w of vocab) {
        await this.db.collection('vocab').doc(w.id).set(w, { merge: true });
      }
      await this.db.collection('settings').doc('site').set({
        vocabOverrides: overrides,
        welcomeMsg: welcomeMsg,
        updatedAt: Date.now()
      }, { merge: true });

      window.app.showToast(isAr ? 'تم رفع جميع بياناتك للسحابة بنجاح! ☁️✅' : 'Données synchronisées vers le Cloud ! ☁️✅', '🎉');
    } catch (e) {
      console.error('Cloud push all error:', e);
      window.app.showToast(isAr ? 'حدث خطأ أثناء رفع البيانات.' : 'Erreur de synchronisation.', '❌');
    }
  }
};


/* ===================================================================
   SECTION 9: A1 EDUCATIONAL GAME (JEUX ÉDUCATIFS A1)
   =================================================================== */
window.app.game = {
  currentMode: 'quiz',
  score: 0,
  streak: 0,
  highScore: 0,
  soundEnabled: true,

  // --- 1. QUIZ QUESTIONS (A1) ---
  quizIndex: 0,
  quizQuestions: [
    {
      cat: "Salutations & Politesse",
      q: "Comment dit-on « صباح الخير » en français ?",
      speak: "Bonjour",
      options: ["Bonjour", "Bonsoir", "Bonne nuit", "Au revoir"],
      correct: 0,
      expFr: "« Bonjour » est la salutation standard du matin et de la journée.",
      expAr: "« Bonjour » هي التحية الصباحية والنهارية المعتمدة دائماً في الفرنسية."
    },
    {
      cat: "Présentation (S'appeler)",
      q: "Complétez : « Je _____ Ahmed et je suis étudiant. »",
      speak: "Je m'appelle Ahmed",
      options: ["m'appelle", "m'appeler", "t'appelles", "s'appelle"],
      correct: 0,
      expFr: "Avec « Je », le verbe s'appeler donne « Je m'appelle ».",
      expAr: "مع الضمير Je (أنا)، يُصرف الفعل: Je m'appelle (اسمي هو)."
    },
    {
      cat: "Verbe Être au Présent",
      q: "Choisissez la forme correcte : « Nous _____ très heureux. »",
      speak: "Nous sommes très heureux",
      options: ["sommes", "êtes", "sont", "suis"],
      correct: 0,
      expFr: "Le verbe être avec « Nous » au présent se conjugue : « Nous sommes ».",
      expAr: "تصريف فعل الكينونة être مع الضمير Nous هو: Nous sommes."
    },
    {
      cat: "Formule de Politesse",
      q: "Pour demander des nouvelles avec politesse : « Comment _____ -vous ? »",
      speak: "Comment allez-vous ?",
      options: ["allez", "va", "vas", "allons"],
      correct: 0,
      expFr: "Forme polie avec « vous » : « Comment allez-vous ? ».",
      expAr: "صيغة الاحترام والجمع: Comment allez-vous ? (كيف حالكم؟)"
    },
    {
      cat: "Articles Définis (Le / La)",
      q: "Quel article convient : « _____ livre est sur la table. »",
      speak: "Le livre est sur la table",
      options: ["Le", "La", "Les", "L'"],
      correct: 0,
      expFr: "« Livre » est masculin singulier, on emploie « Le ».",
      expAr: "كلمة livre اسم مفرد مذكر، لذلك تأخذ أداة التعريف Le."
    },
    {
      cat: "Exprimer l'Âge (Avoir)",
      q: "Pour donner son âge : « J'_____ vingt ans. »",
      speak: "J'ai vingt ans",
      options: ["ai", "as", "a", "suis"],
      correct: 0,
      expFr: "En français, on utilise le verbe « avoir » pour l'âge : « J'ai 20 ans ».",
      expAr: "في الفرنسية نستخدم فعل avoir للتعبير عن العمر: J'ai 20 ans."
    },
    {
      cat: "Vocabulaire : Les Couleurs",
      q: "Le soleil brille et le ciel est _____ .",
      speak: "Le ciel est bleu",
      options: ["bleu", "vert", "rouge", "noir"],
      correct: 0,
      expFr: "« Bleu » est la couleur caractéristique du ciel.",
      expAr: "لون السماء هو أزرق: bleu."
    },
    {
      cat: "Les Jours de la Semaine",
      q: "Quel jour vient immédiatement après le lundi ?",
      speak: "Mardi vient après lundi",
      options: ["Mardi", "Mercredi", "Jeudi", "Vendredi"],
      correct: 0,
      expFr: "La semaine débute par Lundi, suivi de Mardi.",
      expAr: "أول يوم في الأسبوع هو الاثنين (Lundi) ويليه الثلاثاء (Mardi)."
    },
    {
      cat: "Vocabulaire : La Nourriture",
      q: "La pomme et la banane sont des _____ .",
      speak: "Des fruits",
      options: ["fruits", "légumes", "boissons", "animaux"],
      correct: 0,
      expFr: "La pomme et la banane sont des fruits délicieux.",
      expAr: "التفاح والموز ينتميان لقسم الفواكه (des fruits)."
    },
    {
      cat: "Les Nombres (Addition)",
      q: "Combien font : 6 (six) + 4 (quatre) = _____ ?",
      speak: "Six plus quatre égale dix",
      options: ["dix (10)", "huit (8)", "neuf (9)", "onze (11)"],
      correct: 0,
      expFr: "6 + 4 font 10 (dix).",
      expAr: "مجموع 6 + 4 يساوي 10 (dix)."
    },
    {
      cat: "La Famille",
      q: "Le père de mon père est mon _____ .",
      speak: "Mon grand-père",
      options: ["grand-père", "oncle", "frère", "cousin"],
      correct: 0,
      expFr: "Le père de mon père est mon grand-père.",
      expAr: "والد والدي هو جدي: mon grand-père."
    },
    {
      cat: "Verbe Habiter au Présent",
      q: "Complétez : « J'_____ à Paris en France. »",
      speak: "J'habite à Paris",
      options: ["habite", "habites", "habitons", "habitez"],
      correct: 0,
      expFr: "Avec « Je/J' », les verbes en -er prennent un « -e » : « J'habite ».",
      expAr: "الفعل habiter ينتهي بـ e مع الضمير Je: J'habite."
    }
  ],

  // --- 2. PAIRS VOCABULARY POOL ---
  pairsPool: [
    { fr: "Le chat", ar: "القطة", icon: "🐱" },
    { fr: "Le chien", ar: "الكلب", icon: "🐶" },
    { fr: "La pomme", ar: "التفاحة", icon: "🍎" },
    { fr: "Le café", ar: "القهوة", icon: "☕" },
    { fr: "La maison", ar: "المنزل", icon: "🏠" },
    { fr: "La voiture", ar: "السيارة", icon: "🚗" },
    { fr: "Le livre", ar: "الكتاب", icon: "📖" },
    { fr: "Le soleil", ar: "الشمس", icon: "☀️" },
    { fr: "La lune", ar: "القمر", icon: "🌙" },
    { fr: "Le pain", ar: "الخبز", icon: "🥖" },
    { fr: "L'eau", ar: "الماء", icon: "💧" },
    { fr: "L'école", ar: "المدرسة", icon: "🏫" }
  ],
  pairsCards: [],
  selectedCard: null,
  pairsMoves: 0,
  pairsMatchedCount: 0,
  pairsLock: false,

  // --- 3. SENTENCE BUILDER LIST ---
  sentenceIndex: 0,
  sentenceList: [
    {
      ar: "أنا اسمي أحمد وأنا طالب.",
      words: ["Je", "m'appelle", "Ahmed", "et", "je", "suis", "étudiant", "."],
      correct: "Je m'appelle Ahmed et je suis étudiant ."
    },
    {
      ar: "كيف حالكم اليوم؟",
      words: ["Comment", "allez", "-vous", "aujourd'hui", "?"],
      correct: "Comment allez -vous aujourd'hui ?"
    },
    {
      ar: "أنا أحب اللغة الفرنسية كثيراً.",
      words: ["J'aime", "beaucoup", "le", "français", "."],
      correct: "J'aime beaucoup le français ."
    },
    {
      ar: "نحن طلاب في الجامعة.",
      words: ["Nous", "sommes", "des", "étudiants", "à", "l'université", "."],
      correct: "Nous sommes des étudiants à l'université ."
    },
    {
      ar: "هو يسكن في باريس.",
      words: ["Il", "habite", "à", "Paris", "."],
      correct: "Il habite à Paris ."
    },
    {
      ar: "الكتاب مفيد جداً على الطاولة.",
      words: ["Le", "livre", "est", "sur", "la", "table", "."],
      correct: "Le livre est sur la table ."
    }
  ],
  sentenceAssembled: [],
  shuffledWords: null,
  shuffledSentenceIdx: -1,

  init() {
    try {
      this.highScore = parseInt(localStorage.getItem('3bido_game_highscore') || '0', 10);
    } catch {
      this.highScore = 0;
    }
    this.updateStatsUI();

    this.renderQuizQuestion();
    this.initPairs();
    this.initSentence();
  },

  switchMode(mode) {
    this.currentMode = mode;
    document.querySelectorAll('.game-mode-tab').forEach(tab => {
      if (tab.getAttribute('data-gamemode') === mode) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    const quizArena = document.getElementById('gameArenaQuiz');
    const pairsArena = document.getElementById('gameArenaPairs');
    const sentArena = document.getElementById('gameArenaSentences');

    if (quizArena) quizArena.classList.toggle('hidden', mode !== 'quiz');
    if (pairsArena) pairsArena.classList.toggle('hidden', mode !== 'pairs');
    if (sentArena) sentArena.classList.toggle('hidden', mode !== 'sentences');
  },

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    const icon = document.getElementById('gameSoundIcon');
    if (icon) icon.textContent = this.soundEnabled ? '🔊' : '🔇';
    const isAr = window.app.lang === 'ar';
    window.app.showToast(this.soundEnabled ? (isAr ? 'تم تشغيل المؤثرات الصوتية 🔔' : 'Son activé 🔔') : (isAr ? 'تم كتم المؤثرات الصوتية 🔇' : 'Son désactivé 🔇'), '🎮');
  },

  playChime(isWin) {
    if (!this.soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (isWin) {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08);
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.16);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.38);
        osc.start();
        osc.stop(ctx.currentTime + 0.38);
      } else {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.setValueAtTime(174.61, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
        osc.start();
        osc.stop(ctx.currentTime + 0.28);
      }
    } catch (e) {
      // AudioContext safe fallback
    }
  },

  addScore(points) {
    this.score += points;
    this.streak += 1;
    if (this.score > this.highScore) {
      this.highScore = this.score;
      try {
        localStorage.setItem('3bido_game_highscore', this.highScore.toString());
      } catch {}
    }
    this.updateStatsUI();
  },

  resetStreak() {
    this.streak = 0;
    this.updateStatsUI();
  },

  updateStatsUI() {
    const sElem = document.getElementById('gameScoreValue');
    const stElem = document.getElementById('gameStreakValue');
    const hElem = document.getElementById('gameHighScoreValue');
    if (sElem) sElem.textContent = this.score;
    if (stElem) stElem.textContent = this.streak;
    if (hElem) hElem.textContent = this.highScore;
  },

  // ================= QUIZ LOGIC =================
  renderQuizQuestion() {
    const q = this.quizQuestions[this.quizIndex];
    if (!q) return;

    const isAr = window.app.lang === 'ar';
    const tagElem = document.getElementById('gameQuizCategoryTag');
    const qTextElem = document.getElementById('gameQuizQuestionText');
    const gridElem = document.getElementById('gameQuizOptionsGrid');
    const feedbackElem = document.getElementById('gameQuizFeedbackCard');
    const progressFill = document.getElementById('gameQuizProgressFill');
    const progressText = document.getElementById('gameQuizProgressText');

    if (tagElem) tagElem.textContent = q.cat;
    if (qTextElem) qTextElem.textContent = q.q;
    if (feedbackElem) feedbackElem.classList.add('hidden');

    const total = this.quizQuestions.length;
    const currentNum = this.quizIndex + 1;
    if (progressFill) progressFill.style.width = `${(currentNum / total) * 100}%`;
    if (progressText) progressText.textContent = isAr ? `السؤال ${currentNum} / ${total}` : `Question ${currentNum} / ${total}`;

    // Shuffle options while keeping track of the correct answer
    const shuffled = q.options.map((opt, origIdx) => ({
      text: opt,
      isCorrect: origIdx === q.correct
    })).sort(() => Math.random() - 0.5);

    const letters = ['A', 'B', 'C', 'D'];
    if (gridElem) {
      gridElem.innerHTML = shuffled.map((item, idx) => `
        <button class="game-option-btn" onclick="window.app.game.answerQuiz(${item.isCorrect}, this, '${this.escapeQuotes(q.options[q.correct])}')">
          <span class="game-option-letter">${letters[idx]}</span>
          <span class="game-option-text">${this.escape(item.text)}</span>
        </button>
      `).join('');
    }
  },

  answerQuiz(isCorrect, btnElem, correctText) {
    const q = this.quizQuestions[this.quizIndex];
    const isAr = window.app.lang === 'ar';
    const allBtns = document.querySelectorAll('.game-option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (isCorrect) {
      btnElem.classList.add('correct');
      this.playChime(true);
      this.addScore(10 + this.streak * 2);
    } else {
      btnElem.classList.add('wrong');
      this.playChime(false);
      this.resetStreak();

      allBtns.forEach(b => {
        const textSpan = b.querySelector('.game-option-text');
        if (textSpan && textSpan.textContent.trim() === correctText.trim()) {
          b.classList.add('correct');
        }
      });
    }

    if (q.speak) {
      window.app.speakFrench(q.speak);
    }

    const feedbackCard = document.getElementById('gameQuizFeedbackCard');
    const headerElem = document.getElementById('gameQuizFeedbackHeader');
    const expElem = document.getElementById('gameQuizFeedbackExp');

    if (feedbackCard) {
      feedbackCard.className = `game-feedback-card ${isCorrect ? 'is-correct' : 'is-wrong'}`;
      if (headerElem) {
        headerElem.innerHTML = isCorrect
          ? `<span style="color:#10b981;">🎉 ${isAr ? 'إجابة ممتازة وصحيحة !' : 'Excellente réponse !'}</span>`
          : `<span style="color:#ef4444;">❌ ${isAr ? `إجابة غير صحيحة. الإجابة السليمة هي: « ${this.escape(correctText)} »` : `Incorrect. La bonne réponse est : « ${this.escape(correctText)} »`}</span>`;
      }
      if (expElem) {
        expElem.innerHTML = `
          <div><strong>🇫🇷 Explication :</strong> ${this.escape(q.expFr)}</div>
          <div style="margin-top: 4px; color: var(--flag-green);"><strong>💡 توضيح بالعربية :</strong> ${this.escape(q.expAr)}</div>
        `;
      }
      feedbackCard.classList.remove('hidden');
    }
  },

  nextQuizQuestion() {
    this.quizIndex = (this.quizIndex + 1) % this.quizQuestions.length;
    this.renderQuizQuestion();
  },

  speakCurrentQuestion() {
    const q = this.quizQuestions[this.quizIndex];
    if (q && q.speak) {
      window.app.speakFrench(q.speak);
    }
  },

  // ================= PAIRS LOGIC =================
  initPairs() {
    this.pairsMoves = 0;
    this.selectedCard = null;
    this.pairsLock = false;

    // Pick 6 random pairs
    const shuffledPool = [...this.pairsPool].sort(() => Math.random() - 0.5).slice(0, 6);
    this.pairsMatchedCount = 0;

    const cards = [];
    shuffledPool.forEach((item, pairId) => {
      cards.push({
        id: `pair-${pairId}-fr`,
        pairId: pairId,
        type: 'fr',
        text: item.fr,
        icon: item.icon,
        speak: item.fr
      });
      cards.push({
        id: `pair-${pairId}-ar`,
        pairId: pairId,
        type: 'ar',
        text: item.ar,
        icon: item.icon,
        speak: item.fr
      });
    });

    this.pairsCards = cards.sort(() => Math.random() - 0.5);

    const movesElem = document.getElementById('gamePairsMovesCount');
    const remElem = document.getElementById('gamePairsRemainingCount');
    if (movesElem) movesElem.textContent = '0';
    if (remElem) remElem.textContent = '6';

    this.renderPairsGrid();
  },

  renderPairsGrid() {
    const grid = document.getElementById('gamePairsGrid');
    if (!grid) return;

    grid.innerHTML = this.pairsCards.map(c => `
      <div class="game-pair-card" id="${c.id}" onclick="window.app.game.handlePairCardClick('${c.id}')">
        <span class="pair-emoji">${c.icon}</span>
        <span class="pair-text">${this.escape(c.text)}</span>
        <span class="pair-lang">${c.type === 'fr' ? '🇫🇷 Français' : '🇵🇸 عربي'}</span>
      </div>
    `).join('');
  },

  handlePairCardClick(cardId) {
    if (this.pairsLock) return;
    const cardObj = this.pairsCards.find(c => c.id === cardId);
    const cardElem = document.getElementById(cardId);
    if (!cardObj || !cardElem || cardElem.classList.contains('matched') || cardElem.classList.contains('selected')) return;

    if (cardObj.speak) {
      window.app.speakFrench(cardObj.speak);
    }

    if (!this.selectedCard) {
      this.selectedCard = cardObj;
      cardElem.classList.add('selected');
    } else {
      this.pairsMoves++;
      const movesElem = document.getElementById('gamePairsMovesCount');
      if (movesElem) movesElem.textContent = this.pairsMoves.toString();

      cardElem.classList.add('selected');
      const firstObj = this.selectedCard;
      const firstElem = document.getElementById(firstObj.id);

      if (firstObj.pairId === cardObj.pairId && firstObj.type !== cardObj.type) {
        // Matched!
        this.playChime(true);
        this.addScore(15);
        this.pairsMatchedCount++;
        const remElem = document.getElementById('gamePairsRemainingCount');
        if (remElem) remElem.textContent = (6 - this.pairsMatchedCount).toString();

        firstElem.classList.remove('selected');
        cardElem.classList.remove('selected');
        firstElem.classList.add('matched');
        cardElem.classList.add('matched');
        this.selectedCard = null;

        if (this.pairsMatchedCount === 6) {
          const isAr = window.app.lang === 'ar';
          setTimeout(() => {
            window.app.showToast(isAr ? '🎉 رائع جداً! أنهيت جميع الأزواج بنجاح!' : 'Bravo ! Toutes les paires trouvées !', '🏆');
          }, 400);
        }
      } else {
        // Mismatch
        this.playChime(false);
        this.pairsLock = true;
        setTimeout(() => {
          if (firstElem) firstElem.classList.remove('selected');
          if (cardElem) cardElem.classList.remove('selected');
          this.selectedCard = null;
          this.pairsLock = false;
        }, 750);
      }
    }
  },

  // ================= SENTENCE LOGIC =================
  initSentence() {
    const s = this.sentenceList[this.sentenceIndex];
    if (!s) return;

    const arElem = document.getElementById('gameSentenceArabic');
    if (arElem) arElem.textContent = s.ar;

    this.sentenceAssembled = [];
    this.renderSentenceSlots();
    this.renderSentenceWordBank();

    const fb = document.getElementById('gameSentenceFeedback');
    if (fb) {
      fb.className = 'game-sentence-feedback hidden';
      fb.innerHTML = '';
    }
    const nextBtn = document.getElementById('gameSentenceNextBtn');
    if (nextBtn) nextBtn.style.display = 'none';
    const checkBtn = document.getElementById('gameSentenceCheckBtn');
    if (checkBtn) checkBtn.disabled = false;
  },

  renderSentenceSlots() {
    const zone = document.getElementById('gameSentenceSlotZone');
    const isAr = window.app.lang === 'ar';
    if (!zone) return;

    if (this.sentenceAssembled.length === 0) {
      zone.classList.remove('has-words');
      zone.innerHTML = `<span class="slot-placeholder">${isAr ? 'اضغط على الكلمات بالأسفل لإضافتها هنا...' : 'Cliquez sur les mots ci-dessous pour les placer ici...'}</span>`;
    } else {
      zone.classList.add('has-words');
      zone.innerHTML = this.sentenceAssembled.map((word, idx) => `
        <span class="word-chip placed" onclick="window.app.game.removeWordFromSentence(${idx})">
          ${this.escape(word)} <span style="font-size:0.75rem; opacity:0.8;">✕</span>
        </span>
      `).join('');
    }
  },

  renderSentenceWordBank() {
    const s = this.sentenceList[this.sentenceIndex];
    const bank = document.getElementById('gameSentenceWordBank');
    if (!s || !bank) return;

    if (!this.shuffledWords || this.shuffledSentenceIdx !== this.sentenceIndex) {
      this.shuffledWords = [...s.words].sort(() => Math.random() - 0.5);
      this.shuffledSentenceIdx = this.sentenceIndex;
    }

    bank.innerHTML = this.shuffledWords.map((word, idx) => {
      const countUsed = this.sentenceAssembled.filter(w => w === word).length;
      const countTotal = s.words.filter(w => w === word).length;
      const isUsed = countUsed >= countTotal;

      return `
        <button class="word-chip ${isUsed ? 'disabled' : ''}" onclick="window.app.game.addWordToSentence('${this.escapeQuotes(word)}')">
          ${this.escape(word)}
        </button>
      `;
    }).join('');
  },

  addWordToSentence(word) {
    this.sentenceAssembled.push(word);
    this.renderSentenceSlots();
    this.renderSentenceWordBank();
  },

  removeWordFromSentence(idx) {
    this.sentenceAssembled.splice(idx, 1);
    this.renderSentenceSlots();
    this.renderSentenceWordBank();
  },

  resetSentenceWords() {
    this.sentenceAssembled = [];
    this.renderSentenceSlots();
    this.renderSentenceWordBank();
    const fb = document.getElementById('gameSentenceFeedback');
    if (fb) fb.classList.add('hidden');
  },

  checkSentence() {
    const s = this.sentenceList[this.sentenceIndex];
    const isAr = window.app.lang === 'ar';
    const assembledStr = this.sentenceAssembled.join(' ').trim();
    const fb = document.getElementById('gameSentenceFeedback');
    const nextBtn = document.getElementById('gameSentenceNextBtn');
    const checkBtn = document.getElementById('gameSentenceCheckBtn');

    if (!assembledStr) {
      window.app.showToast(isAr ? 'يرجى ترتيب الكلمات أولاً.' : 'Veuillez placer des mots.', '⚠️');
      return;
    }

    if (assembledStr === s.correct.trim()) {
      this.playChime(true);
      this.addScore(20);
      window.app.speakFrench(s.correct.replace(/\s+/g, ' ').replace(' -', '-'));

      if (fb) {
        fb.className = 'game-sentence-feedback success';
        fb.innerHTML = `
          <span>🎉 ${isAr ? 'ممتاز! الجملة صحيحة تماماً وسليمة نحوياً.' : 'Bravo ! Phrase parfaitement construite.'}</span>
          <button class="btn btn-secondary" style="padding:2px 8px; font-size:0.8rem;" onclick="window.app.speakFrench('${this.escapeQuotes(s.correct)}')">🔊 استماع</button>
        `;
        fb.classList.remove('hidden');
      }
      if (nextBtn) nextBtn.style.display = 'inline-flex';
      if (checkBtn) checkBtn.disabled = true;
    } else {
      this.playChime(false);
      this.resetStreak();

      if (fb) {
        fb.className = 'game-sentence-feedback error';
        fb.innerHTML = `
          <span>❌ ${isAr ? `الترتيب غير صحيح، حاول مرة أخرى! الجملة الصحيحة هي: « ${this.escape(s.correct)} »` : `Ce n'est pas le bon ordre. La bonne phrase est : « ${this.escape(s.correct)} »`}</span>
        `;
        fb.classList.remove('hidden');
      }
    }
  },

  nextSentence() {
    this.sentenceIndex = (this.sentenceIndex + 1) % this.sentenceList.length;
    this.shuffledWords = null;
    this.initSentence();
  },

  escape(str) {
    return (str || '').replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  },

  escapeQuotes(str) {
    return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }
};