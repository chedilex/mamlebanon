(() => {
  const root = document.getElementById("appRoot");
  if (!root) return;
  const KEY = "mamLebanonAppSettings";
  let prefs = {
    language: "ar",
    fontSize: 100,
    darkMode: false,
    highContrast: false,
    reduceMotion: false,
  };
  try {
    prefs = { ...prefs, ...JSON.parse(localStorage.getItem(KEY) || "{}") };
  } catch (error) {}
  if (!["ar", "fr", "en"].includes(prefs.language)) prefs.language = "ar";
  const lang = () => prefs.language;
  const direction = () => (lang() === "ar" ? "rtl" : "ltr");
  const copy = {
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      readings: "قراءات اليوم",
      news: "أخبار الحركة",
      ai: "المساعد الروحي",
      profile: "حسابي",
      welcome: "أهلاً بكم في",
      sub: "الحركة الرسولية المريمية في لبنان",
      hero: "إيمان نعيشه، ومحبّة نشاركها",
      desc: "مسيرة إيمان وصلاة وأخوّة وخدمة، على مثال مريم وفي قلب الكنيسة.",
      discover: "اكتشفوا الحركة",
      today: "مساحة يومية للإيمان",
      todayDesc: "تأمّلوا في كلمة الله وامنحوا يومكم لحظة صلاة.",
      read: "قراءات اليوم",
      readDesc: "القراءات الليتورجية والتأمل اليومي",
      newsTitle: "آخر الأخبار",
      all: "عرض الكل",
      newsEmpty: "ستظهر هنا أخبار الحركة ونشاطاتها بعد إضافتها من الإدارة.",
      quick: "اكتشفوا المزيد",
      aboutDesc: "تعرّفوا إلى رسالة الحركة وتاريخها وروحانيتها.",
      terms: "الشروط والأحكام",
      privacy: "سياسة الخصوصية",
      login: "تسجيل الدخول",
      profileTitle: "الملف الشخصي",
      aiDesc: "مساحة مساعدة للتأمل والتعرّف إلى الإيمان المسيحي.",
      aiNotice:
        "المساعد الذكي يحتاج إلى ربط خدمة آمنة قبل أن يتمكن من تقديم إجابات مباشرة. لا تشاركوا معلومات شخصية أو سرية.",
      ask: "اكتبوا سؤالكم هنا...",
      send: "إرسال",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      signIn: "دخول",
      register: "إنشاء حساب",
      noAccount: "ليس لدي حساب؟",
      haveAccount: "لدي حساب بالفعل",
      logout: "تسجيل الخروج",
      save: "حفظ التغييرات",
      edit: "تعديل الملف",
      member: "عضو في عائلة MAM",
      profileEmpty: "سجّلوا الدخول لإدارة ملفكم الشخصي.",
      legalIntro: "يرجى قراءة هذه المعلومات قبل استخدام التطبيق.",
      termsText:
        "يُقدَّم هذا التطبيق للتعريف بالحركة الرسولية المريمية في لبنان ومشاركة المعلومات والمواد الروحية والأخبار. يجب استخدام المحتوى باحترام وبما ينسجم مع رسالة الكنيسة. قد تتغير المعلومات والميزات مع تحديث التطبيق. لا يُسمح بنسخ المحتوى أو إعادة نشره تجارياً دون إذن مسبق من الجهة المالكة.",
      privacyText:
        "نحترم خصوصيتكم. تُحفظ تفضيلات التطبيق مثل اللغة وحجم الخط على جهازكم باستخدام التخزين المحلي. إذا أضفتم بيانات إلى الملف الشخصي في هذه النسخة، فستبقى محلياً على الجهاز ولا تُرسل إلى خادم. عند تفعيل تسجيل دخول أو خدمات ذكاء اصطناعي مستقبلاً، يجب نشر سياسة محدثة تشرح البيانات والغرض منها ومدة الاحتفاظ بها وحقوق المستخدمين.",
      readNote:
        "ملاحظة: يجب تحديث نصوص القراءات يومياً والتحقق منها وفق التقويم الليتورجي الماروني المعتمد في لبنان قبل نشرها. هذه النسخة تعرض هيكل الصفحة فقط ولا تدّعي أنها قراءات اليوم المعتمدة.",
      first: "القراءة الأولى",
      psalm: "المزمور",
      gospel: "الإنجيل المقدس",
      readingPlaceholder:
        "يُضاف النص الليتورجي هنا بعد التحقق من المرجع والنص الرسمي.",
      aboutTitle: "الحركة الرسولية المريمية",
      aboutBody:
        "الحركة الرسولية المريمية (MAM) هي حركة كاثوليكية علمانية انطلقت في لبنان عام ١٩٧٣. تستلهم الحركة مثال مريم في الإصغاء إلى كلمة الله والعيش في الإيمان والخدمة، وتشجّع أعضاءها على الصلاة والتنشئة والأخوّة والمشاركة في حياة الكنيسة والمجتمع.",
      mission: "رسالتنا",
      missionBody:
        "أن نعيش الإنجيل في حياتنا اليومية، وأن نكون شهوداً للمحبة والرجاء من خلال الصلاة والتنشئة والخدمة.",
      activities: "نشاطاتنا",
      activityBody:
        "لقاءات روحية، تنشئة، مخيمات، مبادرات اجتماعية وخدمات رعوية بحسب برامج الجماعات المحلية.",
      settings: "الإعدادات",
      settingsDesc:
        "يمكنكم تغيير اللغة وحجم الخط والمظهر من زر الإعدادات في الأعلى.",
    },
    en: {
      home: "Home",
      about: "About",
      readings: "Today's readings",
      news: "MAM News",
      ai: "Faith assistant",
      profile: "Profile",
      welcome: "Welcome to",
      sub: "Mouvement Apostolique Marial in Lebanon",
      hero: "Faith we live. Love we share.",
      desc: "A journey of faith, prayer, fraternity and service, inspired by Mary and rooted in the Church.",
      discover: "Discover MAM",
      today: "A daily space for faith",
      todayDesc: "Spend a moment with the Word of God and prayer.",
      read: "Today's readings",
      readDesc: "Liturgical readings and daily reflection",
      newsTitle: "Latest news",
      all: "View all",
      newsEmpty:
        "News and activities from the movement will appear here when published by the administrators.",
      quick: "Explore more",
      aboutDesc: "Discover the movement’s mission, story and spirituality.",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      login: "Sign in",
      profileTitle: "My profile",
      aiDesc:
        "A helpful space for reflection and learning about Christian faith.",
      aiNotice:
        "The AI assistant requires a secure service connection before it can provide live answers. Do not share personal or confidential information.",
      ask: "Type your question...",
      send: "Send",
      name: "Full name",
      email: "Email address",
      password: "Password",
      signIn: "Sign in",
      register: "Create account",
      noAccount: "New here?",
      haveAccount: "Already have an account?",
      logout: "Sign out",
      save: "Save changes",
      edit: "Edit profile",
      member: "Part of the MAM family",
      profileEmpty: "Sign in to manage your profile.",
      legalIntro: "Please read this information before using the app.",
      termsText:
        "This app is provided to introduce the Mouvement Apostolique Marial in Lebanon and share information, spiritual materials and news. Users must use the content respectfully and consistently with the mission of the Church. Information and features may change as the app is updated. Commercial copying or republication requires prior permission from the rights holder.",
      privacyText:
        "We respect your privacy. App preferences such as language and font size are stored on your device using local storage. Profile details entered in this prototype remain locally on your device and are not sent to a server. Before enabling account login or AI services, an updated policy must explain collected data, purposes, retention and user rights.",
      readNote:
        "Notice: Readings must be updated daily and checked against the approved Maronite liturgical calendar and official text for Lebanon before publication. This version provides the page structure only; it does not claim to display the verified readings for today.",
      first: "First reading",
      psalm: "Psalm",
      gospel: "Holy Gospel",
      readingPlaceholder:
        "The liturgical text will be added here after its reference and official text are verified.",
      aboutTitle: "Mouvement Apostolique Marial",
      aboutBody:
        "The Mouvement Apostolique Marial (MAM) is a Catholic lay movement that began in Lebanon in 1973. Inspired by Mary’s example of listening to the Word of God and living in faith and service, the movement encourages prayer, formation, fraternity and active participation in the life of the Church and society.",
      mission: "Our mission",
      missionBody:
        "To live the Gospel in everyday life and witness to love and hope through prayer, formation and service.",
      activities: "Activities",
      activityBody:
        "Spiritual gatherings, formation, camps, social initiatives and pastoral service through local communities.",
      settings: "Settings",
      settingsDesc:
        "Change language, text size and appearance using the settings button above.",
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      readings: "Lectures du jour",
      news: "Actualités MAM",
      ai: "Assistant spirituel",
      profile: "Mon profil",
      welcome: "Bienvenue au",
      sub: "Mouvement Apostolique Marial au Liban",
      hero: "Une foi vécue. Un amour partagé.",
      desc: "Un chemin de foi, de prière, de fraternité et de service, inspiré par Marie et enraciné dans l’Église.",
      discover: "Découvrir le MAM",
      today: "Un espace quotidien de foi",
      todayDesc: "Prenez un moment avec la Parole de Dieu et la prière.",
      read: "Lectures du jour",
      readDesc: "Lectures liturgiques et méditation quotidienne",
      newsTitle: "Dernières actualités",
      all: "Tout voir",
      newsEmpty:
        "Les nouvelles et activités du mouvement apparaîtront ici après leur publication par les responsables.",
      quick: "Découvrir davantage",
      aboutDesc:
        "Découvrez la mission, l’histoire et la spiritualité du mouvement.",
      terms: "Conditions générales",
      privacy: "Politique de confidentialité",
      login: "Connexion",
      profileTitle: "Mon profil",
      aiDesc:
        "Un espace d’accompagnement pour la réflexion et la découverte de la foi chrétienne.",
      aiNotice:
        "L’assistant IA nécessite une connexion sécurisée à un service avant de fournir des réponses en direct. Ne partagez aucune information personnelle ou confidentielle.",
      ask: "Écrivez votre question...",
      send: "Envoyer",
      name: "Nom complet",
      email: "Adresse e-mail",
      password: "Mot de passe",
      signIn: "Se connecter",
      register: "Créer un compte",
      noAccount: "Nouveau ici ?",
      haveAccount: "Vous avez déjà un compte ?",
      logout: "Déconnexion",
      save: "Enregistrer",
      edit: "Modifier le profil",
      member: "Membre de la famille MAM",
      profileEmpty: "Connectez-vous pour gérer votre profil.",
      legalIntro:
        "Veuillez lire ces informations avant d’utiliser l’application.",
      termsText:
        "Cette application présente le Mouvement Apostolique Marial au Liban et partage des informations, des contenus spirituels et des actualités. Le contenu doit être utilisé avec respect et conformément à la mission de l’Église. Les informations et fonctionnalités peuvent évoluer. Toute reproduction commerciale nécessite une autorisation préalable du titulaire des droits.",
      privacyText:
        "Nous respectons votre vie privée. Les préférences de l’application, comme la langue et la taille du texte, sont enregistrées localement sur votre appareil. Dans cette version prototype, les informations du profil restent sur votre appareil et ne sont pas envoyées à un serveur. Avant d’activer un compte ou un service IA, une politique actualisée devra expliquer les données collectées, leur usage, leur conservation et les droits des utilisateurs.",
      readNote:
        "Note : les lectures doivent être mises à jour quotidiennement et vérifiées selon le calendrier liturgique maronite approuvé au Liban avant publication. Cette version présente uniquement la structure de la page et ne prétend pas afficher les lectures officielles du jour.",
      first: "Première lecture",
      psalm: "Psaume",
      gospel: "Saint Évangile",
      readingPlaceholder:
        "Le texte liturgique sera ajouté après vérification de sa référence et du texte officiel.",
      aboutTitle: "Mouvement Apostolique Marial",
      aboutBody:
        "Le Mouvement Apostolique Marial (MAM) est un mouvement catholique de laïcs né au Liban en 1973. Inspiré par l’exemple de Marie, à l’écoute de la Parole de Dieu et engagée dans la foi et le service, le mouvement encourage la prière, la formation, la fraternité et la participation à la vie de l’Église et de la société.",
      mission: "Notre mission",
      missionBody:
        "Vivre l’Évangile au quotidien et témoigner de l’amour et de l’espérance par la prière, la formation et le service.",
      activities: "Activités",
      activityBody:
        "Rencontres spirituelles, formation, camps, initiatives sociales et service pastoral au sein des communautés locales.",
      settings: "Paramètres",
      settingsDesc:
        "Modifiez la langue, la taille du texte et l’apparence avec le bouton des paramètres.",
    },
  };

  Object.assign(copy.ar, {
    events: "الفعاليات والمواعيد",
    contact: "تواصلوا معنا",
    eventsDesc: "تابعوا لقاءات الحركة ومواعيدها بعد إعلانها رسمياً.",
    eventsEmpty:
      "لا توجد فعاليات منشورة حالياً. ستُضاف المواعيد بعد تأكيدها من إدارة الحركة.",
    contactDesc: "للاستفسارات والتواصل مع الحركة الرسولية المريمية في لبنان.",
    contactNote: "تُضاف وسائل التواصل الرسمية هنا بعد تزويدنا بها.",
  });
  Object.assign(copy.en, {
    events: "Events & Calendar",
    contact: "Contact us",
    eventsDesc: "Follow MAM gatherings and dates once officially announced.",
    eventsEmpty:
      "There are no published events at the moment. Dates will be added after confirmation by the movement administrators.",
    contactDesc:
      "Get in touch with the Mouvement Apostolique Marial in Lebanon.",
    contactNote: "Official contact channels will be added here once provided.",
  });
  Object.assign(copy.fr, {
    events: "Événements et calendrier",
    contact: "Nous contacter",
    eventsDesc:
      "Suivez les rencontres et les dates du MAM après leur annonce officielle.",
    eventsEmpty:
      "Aucun événement n’est publié pour le moment. Les dates seront ajoutées après confirmation par les responsables du mouvement.",
    contactDesc: "Contactez le Mouvement Apostolique Marial au Liban.",
    contactNote:
      "Les moyens de contact officiels seront ajoutés dès qu’ils seront communiqués.",
  });
  Object.assign(copy.ar, {
    back: "رجوع",
    close: "إغلاق",
    changePhoto: "تغيير الصورة",
    removePhoto: "حذف الصورة",
    position: "المنصب في المجلس",
    dob: "تاريخ الميلاد",
    phone: "الهاتف",
    access: "الصلاحيات",
    accessMember: "عضو",
    accessNote: "تحدّد إدارة الحركة مستوى الصلاحيات.",
    policy: "السياسات",
    account: "إعدادات الحساب",
    accountDesc: "عدّلوا معلوماتكم الشخصية.",
    del: "حذف الحساب",
    delWarn:
      "سيُحذف حسابك وبياناتك من هذا الجهاز نهائياً. أدخل كلمة المرور للتأكيد.",
    cancel: "إلغاء",
    unset: "غير محدد",
    saved: "تم حفظ التغييرات",
    deleted: "تم حذف الحساب",
    badLogin: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
    emailUsed: "هذا البريد مسجّل مسبقاً",
    badPhone: "رقم الهاتف غير صالح",
    badPass: "كلمة المرور غير صحيحة",
    badPhoto: "تعذّر استخدام هذه الصورة",
    notif: "الإشعارات",
    notifDesc: "فعّلوا الإشعارات وجرّبوا إرسال إشعار إلى هاتفكم.",
    notifTest: "إرسال إشعار تجريبي",
    notifOn: "تفعيل الإشعارات",
    stGranted: "الإشعارات مفعّلة على هذا الجهاز.",
    stDenied: "الإشعارات محظورة. فعّلوها من إعدادات المتصفح لهذا الموقع.",
    stDefault: "لم تُفعَّل الإشعارات بعد.",
    stNo: "الإشعارات غير متاحة هنا. افتحوا التطبيق عبر رابط https، وعلى iPhone أضيفوه إلى الشاشة الرئيسية أولاً.",
    testTitle: "MAM لبنان",
    testBody: "هذا إشعار تجريبي. كل شيء يعمل بشكل صحيح ✅",
    recent: "آخر الإشعارات",
    none: "لا توجد إشعارات بعد.",
    sent: "تم إرسال الإشعار",
    protoNote: "نسخة تجريبية: الحسابات محفوظة محلياً على هذا الجهاز فقط.",
  });
  Object.assign(copy.en, {
    back: "Back",
    close: "Close",
    changePhoto: "Change photo",
    removePhoto: "Remove photo",
    position: "Position in council",
    dob: "Date of birth",
    phone: "Phone",
    access: "Access",
    accessMember: "Member",
    accessNote: "Access levels are set by the movement administrators.",
    policy: "Policy",
    account: "Account settings",
    accountDesc: "Edit your personal information.",
    del: "Delete account",
    delWarn:
      "Your account and data will be permanently removed from this device. Enter your password to confirm.",
    cancel: "Cancel",
    unset: "Not set",
    saved: "Changes saved",
    deleted: "Account deleted",
    badLogin: "Incorrect email or password",
    emailUsed: "This email is already registered",
    badPhone: "Invalid phone number",
    badPass: "Wrong password",
    badPhoto: "This image could not be used",
    notif: "Notifications",
    notifDesc:
      "Enable notifications and send a test notification to your phone.",
    notifTest: "Send test notification",
    notifOn: "Enable notifications",
    stGranted: "Notifications are enabled on this device.",
    stDenied:
      "Notifications are blocked. Allow them in your browser settings for this site.",
    stDefault: "Notifications are not enabled yet.",
    stNo: "Notifications are not available here. Open the app over https, and on iPhone add it to the Home Screen first.",
    testTitle: "MAM Lebanon",
    testBody: "This is a test notification. Everything works ✅",
    recent: "Recent notifications",
    none: "No notifications yet.",
    sent: "Notification sent",
    protoNote: "Prototype: accounts are stored locally on this device only.",
  });
  Object.assign(copy.fr, {
    back: "Retour",
    close: "Fermer",
    changePhoto: "Changer la photo",
    removePhoto: "Supprimer la photo",
    position: "Fonction au conseil",
    dob: "Date de naissance",
    phone: "Téléphone",
    access: "Accès",
    accessMember: "Membre",
    accessNote:
      "Les niveaux d’accès sont définis par les responsables du mouvement.",
    policy: "Politique",
    account: "Paramètres du compte",
    accountDesc: "Modifiez vos informations personnelles.",
    del: "Supprimer le compte",
    delWarn:
      "Votre compte et vos données seront définitivement supprimés de cet appareil. Saisissez votre mot de passe pour confirmer.",
    cancel: "Annuler",
    unset: "Non renseigné",
    saved: "Modifications enregistrées",
    deleted: "Compte supprimé",
    badLogin: "E-mail ou mot de passe incorrect",
    emailUsed: "Cette adresse est déjà utilisée",
    badPhone: "Numéro de téléphone invalide",
    badPass: "Mot de passe incorrect",
    badPhoto: "Cette image est inutilisable",
    notif: "Notifications",
    notifDesc:
      "Activez les notifications et envoyez un test sur votre téléphone.",
    notifTest: "Envoyer une notification test",
    notifOn: "Activer les notifications",
    stGranted: "Les notifications sont activées sur cet appareil.",
    stDenied:
      "Les notifications sont bloquées. Autorisez-les dans les réglages du navigateur.",
    stDefault: "Les notifications ne sont pas encore activées.",
    stNo: "Notifications indisponibles ici. Ouvrez l’app en https, et sur iPhone ajoutez-la d’abord à l’écran d’accueil.",
    testTitle: "MAM Liban",
    testBody:
      "Les notifications de l’application MAM Liban sont activées sur cet appareil.",
    recent: "Notifications récentes",
    none: "Aucune notification.",
    sent: "Notification envoyée",
    protoNote:
      "Prototype : les comptes sont stockés localement sur cet appareil uniquement.",
  });
  Object.assign(copy.ar, {
    readFor: "قراءات يوم",
    todayBtn: "اليوم",
    prevM: "الشهر السابق",
    nextM: "الشهر التالي",
  });
  Object.assign(copy.en, {
    readFor: "Readings for",
    todayBtn: "Today",
    prevM: "Previous month",
    nextM: "Next month",
  });
  Object.assign(copy.fr, {
    readFor: "Lectures du",
    todayBtn: "Aujourd’hui",
    prevM: "Mois précédent",
    nextM: "Mois suivant",
  });
  Object.assign(copy.ar, {
    newsDesc: "آخر أخبار ومستجدات الحركة.",
    tAnn: "إعلان",
    tUpd: "تحديث",
    tSpi: "روحانيات",
  });
  Object.assign(copy.en, {
    newsDesc: "The latest news and updates from the movement.",
    tAnn: "Announcement",
    tUpd: "Update",
    tSpi: "Spirituality",
  });
  Object.assign(copy.fr, {
    newsDesc: "Les dernières nouvelles et mises à jour du mouvement.",
    tAnn: "Annonce",
    tUpd: "Mise à jour",
    tSpi: "Spiritualité",
  });
  Object.assign(copy.ar, { wait: "انتظروا بضع ثوانٍ قبل إرسال إشعار آخر." });
  Object.assign(copy.en, {
    wait: "Please wait a few seconds before sending another one.",
  });
  Object.assign(copy.fr, {
    wait: "Patientez quelques secondes avant d’en envoyer un autre.",
  });
  const t = (k) => (copy[lang()] || copy.ar)[k] || k;
  let page = "home";
  const safe = (v) =>
    String(v || "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  function pageHead(title, desc = "") {
    return `<div class="app-page-head">${TABS.includes(page) ? "" : `<button class="back-btn" data-act="back" aria-label="${t("back")}"><i class="fa-solid fa-arrow-${lang() === "ar" ? "right" : "left"}"></i></button>`}<span class="app-kicker">MAM LEBANON</span><h1>${title}</h1>${desc ? `<p>${desc}</p>` : ""}</div>`;
  }
  function home() {
    return `<section class="app-screen active"><div class="app-greeting"><span class="app-kicker"><i class="fa-solid fa-sun"></i> ${t("welcome")}</span><h1>MAM Lebanon</h1><p>${t("sub")}</p></div><div class="app-hero-card"><span class="app-kicker">MOUVEMENT APOSTOLIQUE MARIAL</span><h2>${t("hero")}</h2><p>${t("desc")}</p><div style="margin-top:17px"><button class="app-primary" data-page="about">${t("discover")} <i class="fa-solid fa-arrow-${lang() === "ar" ? "left" : "right"}"></i></button></div></div><div class="app-section-head"><h2>${t("today")}</h2><button data-page="readings">${t("all")}</button></div><button class="app-tile" style="width:100%;display:flex;align-items:center;gap:15px;text-align:start;min-height:0" data-page="readings"><span class="tile-icon" style="margin:0;flex:0 0 44px"><i class="fa-solid fa-book-bible"></i></span><span><strong>${t("read")}</strong><small>${t("readDesc")}</small></span><i class="fa-solid fa-chevron-${lang() === "ar" ? "left" : "right"}" style="margin-inline-start:auto;color:#aaa"></i></button><div class="app-section-head"><h2>${t("newsTitle")}</h2><button data-page="news">${t("all")}</button></div>${NEWS.slice(0, 2).map(newsCard).join("")}<div class="app-section-head"><h2>${t("quick")}</h2></div><div class="app-grid"><button class="app-tile" data-page="about"><span class="tile-icon"><i class="fa-solid fa-people-group"></i></span><strong>${t("about")}</strong><small>${t("aboutDesc")}</small></button><button class="app-tile" data-page="ai"><span class="tile-icon"><i class="fa-solid fa-wand-magic-sparkles"></i></span><strong>${t("ai")}</strong><small>${t("aiDesc")}</small></button><button class="app-tile" data-page="terms"><span class="tile-icon"><i class="fa-solid fa-file-contract"></i></span><strong>${t("terms")}</strong></button><button class="app-tile" data-page="privacy"><span class="tile-icon"><i class="fa-solid fa-shield-halved"></i></span><strong>${t("privacy")}</strong></button><button class="app-tile" data-page="events"><span class="tile-icon"><i class="fa-regular fa-calendar-days"></i></span><strong>${t("events")}</strong><small>${t("eventsDesc")}</small></button><button class="app-tile" data-page="contact"><span class="tile-icon"><i class="fa-regular fa-envelope"></i></span><strong>${t("contact")}</strong><small>${t("contactDesc")}</small></button></div></section>`;
  }
  function about() {
    return `<section class="app-screen active">${pageHead(t("about"), t("aboutDesc"))}<div class="app-card"><span class="app-kicker">1973 · LEBANON</span><h2 style="font-size:1.3rem;margin:10px 0">${t("aboutTitle")}</h2><p>${t("aboutBody")}</p></div><div class="app-card"><h3>${t("mission")}</h3><p>${t("missionBody")}</p></div><div class="app-card"><h3>${t("activities")}</h3><p>${t("activityBody")}</p></div></section>`;
  }
  const TABS = ["readings", "news", "ai", "profile"];
  const ymd = (d) =>
    d.getFullYear() +
    "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getDate()).padStart(2, "0");
  let calY = new Date().getFullYear(),
    calM = new Date().getMonth(),
    calSel = ymd(new Date());
  function calendar() {
    const L = loc(),
      first = new Date(calY, calM, 1),
      total = new Date(calY, calM + 1, 0).getDate(),
      today = ymd(new Date()),
      rtl = lang() === "ar";
    const num = new Intl.NumberFormat(L),
      dn = new Intl.DateTimeFormat(L, { weekday: "short" }),
      full = new Intl.DateTimeFormat(L, { dateStyle: "full" });
    let cells = Array.from(
      { length: first.getDay() },
      () => "<span></span>",
    ).join("");
    for (let d = 1; d <= total; d++) {
      const dt = new Date(calY, calM, d),
        k = ymd(dt);
      cells += `<button type="button" class="cal-day${dt.getDay() === 0 ? " sun" : ""}${k === today ? " today" : ""}${k === calSel ? " sel" : ""}" data-act="cal-pick" data-d="${k}" aria-label="${full.format(dt)}" aria-pressed="${k === calSel}"${k === today ? ' aria-current="date"' : ""}>${num.format(d)}</button>`;
    }
    const wd = [0, 1, 2, 3, 4, 5, 6]
      .map(
        (i) =>
          `<span class="cal-wd">${dn.format(new Date(2023, 0, 1 + i))}</span>`,
      )
      .join("");
    const ic = (s) => `<i class="fa-solid fa-chevron-${s}"></i>`;
    return `<div class="app-card cal"><div class="cal-head"><button type="button" class="cal-nav" data-act="cal-prev" aria-label="${t("prevM")}">${ic(rtl ? "right" : "left")}</button><h3>${new Intl.DateTimeFormat(L, { month: "long", year: "numeric" }).format(first)}</h3><button type="button" class="cal-nav" data-act="cal-next" aria-label="${t("nextM")}">${ic(rtl ? "left" : "right")}</button></div><div class="cal-grid">${wd}${cells}</div><div class="cal-foot"><button type="button" class="app-secondary" data-act="cal-today">${t("todayBtn")}</button></div></div>`;
  }
  function calAction(a, b) {
    const n = new Date();
    if (a === "cal-prev") {
      calM--;
      if (calM < 0) {
        calM = 11;
        calY--;
      }
    } else if (a === "cal-next") {
      calM++;
      if (calM > 11) {
        calM = 0;
        calY++;
      }
    } else if (a === "cal-today") {
      calY = n.getFullYear();
      calM = n.getMonth();
      calSel = ymd(n);
    } else if (a === "cal-pick") calSel = b.dataset.d;
    render();
    root.firstElementChild.style.animation = "none";
  }
  function readings() {
    const blk = (k) =>
      `<div class="reading-block"><span class="reading-label">${t(k)}</span><h3>—</h3><p>${t("readingPlaceholder")}</p></div>`;
    return `<section class="app-screen active">${pageHead(t("readings"), t("readDesc"))}${calendar()}<h2 class="sel-date">${t("readFor")} ${fmtDate(calSel)}</h2>${blk("first")}${blk("psalm")}${blk("gospel")}<div class="reading-note"><i class="fa-solid fa-circle-info"></i> ${t("readNote")}</div></section>`;
  }
  const NEWS = [
    {
      id: "n1",
      img: "./assets/news/news-1.svg",
      type: "tAnn",
      date: "2026-11-18",
      ar: {
        t: "إطلاق تطبيق MAM لبنان",
        d: "تطبيق جديد يجمع القراءات اليومية والأخبار وحسابكم الشخصي في مكان واحد.",
        s: "المكتب الإعلامي",
        b: [
          "يسرّنا أن نقدّم لكم تطبيق MAM لبنان، مساحةً واحدة تجمع أخبار الحركة وقراءات اليوم وملفكم الشخصي.",
          "يمكنكم تغيير لغة التطبيق بين العربية والفرنسية والإنكليزية، وتفعيل الوضع الداكن وتكبير الخط من الإعدادات.",
        ],
      },
      en: {
        t: "MAM Lebanon app is live",
        d: "A new app that brings daily readings, news and your personal profile together in one place.",
        s: "Media Office",
        b: [
          "We are glad to introduce the MAM Lebanon app: one place for movement news, today’s readings and your personal profile.",
          "You can switch the app between Arabic, French and English, and turn on dark mode or larger text from the settings.",
        ],
      },
      fr: {
        t: "L’application MAM Liban est lancée",
        d: "Une nouvelle application qui réunit lectures du jour, actualités et profil personnel.",
        s: "Bureau média",
        b: [
          "Nous sommes heureux de vous présenter l’application MAM Liban : un seul espace pour les actualités du mouvement, les lectures du jour et votre profil.",
          "Vous pouvez passer de l’arabe au français ou à l’anglais, activer le mode sombre et agrandir le texte dans les paramètres.",
        ],
      },
    },
    {
      id: "n2",
      img: "./assets/news/news-2.svg",
      type: "tUpd",
      date: "2026-11-15",
      ar: {
        t: "إشعارات على هاتفكم",
        d: "فعّلوا الإشعارات وجرّبوا الزر التجريبي للتأكد من وصولها.",
        s: "الفريق التقني",
        b: [
          "من صفحة الإشعارات يمكنكم تفعيل التنبيهات ثم الضغط على زر الإشعار التجريبي للتأكد من أن كل شيء يعمل.",
          "على iPhone أضيفوا التطبيق إلى الشاشة الرئيسية أولاً، وعلى Android افتحوه عبر رابط https.",
        ],
      },
      en: {
        t: "Notifications on your phone",
        d: "Turn on notifications and use the test button to make sure they arrive.",
        s: "Tech Team",
        b: [
          "From the Notifications page you can enable alerts, then tap the test button to confirm everything works.",
          "On iPhone add the app to your Home Screen first; on Android open it over an https link.",
        ],
      },
      fr: {
        t: "Notifications sur votre téléphone",
        d: "Activez les notifications et utilisez le bouton test pour vérifier leur réception.",
        s: "Équipe technique",
        b: [
          "Depuis la page Notifications, activez les alertes puis touchez le bouton test pour vérifier que tout fonctionne.",
          "Sur iPhone, ajoutez d’abord l’app à l’écran d’accueil ; sur Android, ouvrez-la via un lien https.",
        ],
      },
    },
    {
      id: "n3",
      img: "./assets/news/news-3.svg",
      type: "tSpi",
      date: "2026-11-10",
      ar: {
        t: "خمس دقائق من الصلاة",
        d: "ابدؤوا يومكم بقراءة الإنجيل وبلحظة صمت وصلاة.",
        s: "الفريق الروحي",
        b: [
          "خصّصوا اليوم خمس دقائق هادئة لقراءة إنجيل اليوم والتأمل فيه.",
          "اختموا بصلاة قصيرة من القلب، وقدّموا فيها أحباءكم وعائلاتكم.",
        ],
      },
      en: {
        t: "Five minutes of prayer",
        d: "Start your day with the Gospel and a moment of silence and prayer.",
        s: "Spiritual Team",
        b: [
          "Set aside five quiet minutes today to read the day’s Gospel and reflect on it.",
          "Close with a short prayer from the heart, remembering your loved ones and families.",
        ],
      },
      fr: {
        t: "Cinq minutes de prière",
        d: "Commencez la journée par l’Évangile, un temps de silence et de prière.",
        s: "Équipe spirituelle",
        b: [
          "Réservez aujourd’hui cinq minutes de calme pour lire l’Évangile du jour et le méditer.",
          "Terminez par une courte prière du cœur, en pensant à vos proches et à vos familles.",
        ],
      },
    },
  ];
  let artId = "";
  const nl = (n) => n[lang()] || n.ar;
  function newsCard(n) {
    const c = nl(n);
    return `<button type="button" class="news-card" data-act="open-news" data-id="${n.id}"><span class="news-img"><img src="${n.img}" alt="" loading="lazy"></span><span class="news-body"><span class="news-meta"><span class="news-type">${t(n.type)}</span><span class="news-date">${fmtDate(n.date)}</span></span><strong>${safe(c.t)}</strong><span class="news-src"><i class="fa-regular fa-circle-user"></i> ${safe(c.s)}</span></span></button>`;
  }
  function news() {
    return `<section class="app-screen active">${pageHead(t("news"), t("newsDesc"))}${NEWS.map(newsCard).join("")}</section>`;
  }
  function articlePage() {
    const n = NEWS.find((x) => x.id === artId);
    if (!n) return news();
    const c = nl(n);
    return `<section class="app-screen active">${pageHead(t("news"))}<article class="art"><img class="art-img" src="${n.img}" alt=""><div class="art-meta"><span class="news-type">${t(n.type)}</span><span><i class="fa-regular fa-calendar"></i> ${fmtDate(n.date)}</span><span><i class="fa-regular fa-circle-user"></i> ${safe(c.s)}</span></div><h2 class="art-title">${safe(c.t)}</h2><p class="art-lead">${safe(c.d)}</p>${c.b.map((p) => `<p class="art-p">${safe(p)}</p>`).join("")}</article></section>`;
  }
  function ai() {
    return `<section class="app-screen active">${pageHead(t("ai"), t("aiDesc"))}<div class="ai-message"><i class="fa-solid fa-sparkles" style="color:var(--orange)"></i> ${t("aiNotice")}</div><div class="app-card" style="margin-top:14px"><div class="ai-compose"><input type="text" placeholder="${t("ask")}" disabled><button disabled aria-label="Send"><i class="fa-solid fa-arrow-up"></i></button></div><p class="app-muted" style="margin-top:12px">${t("aiNotice")}</p></div></section>`;
  }
  function login() {
    return `<section class="app-screen active">${pageHead(t("login"))}<div class="app-card"><form class="app-form" id="loginForm"><div class="app-field"><label>${t("email")}</label><input type="email" id="loginEmail" required autocomplete="email"></div><div class="app-field"><label>${t("password")}</label><input type="password" id="loginPassword" required autocomplete="current-password"></div><button class="app-primary" type="submit">${t("signIn")}</button><p class="app-muted">${t("noAccount")} <button type="button" class="app-text-link" id="showRegister">${t("register")}</button></p></form><form class="app-form" id="registerForm" hidden><div class="app-field"><label>${t("name")}</label><input id="registerName" required></div><div class="app-field"><label>${t("email")}</label><input type="email" id="registerEmail" required></div><div class="app-field"><label>${t("password")}</label><input type="password" id="registerPassword" required minlength="6"></div><button class="app-primary" type="submit">${t("register")}</button><p class="app-muted">${t("haveAccount")} <button type="button" class="app-text-link" id="showLogin">${t("signIn")}</button></p></form><p class="app-muted" style="margin-top:15px">${t("protoNote")}</p></div></section>`;
  }

  function events() {
    return `<section class="app-screen active">${pageHead(t("events"), t("eventsDesc"))}<div class="app-card" style="text-align:center;padding:34px 20px"><div class="tile-icon" style="margin:0 auto 13px"><i class="fa-regular fa-calendar-days"></i></div><h3>${t("events")}</h3><p>${t("eventsEmpty")}</p></div></section>`;
  }
  function contact() {
    return `<section class="app-screen active">${pageHead(t("contact"), t("contactDesc"))}<div class="app-card"><div class="app-profile"><div class="app-avatar"><i class="fa-solid fa-cross"></i></div><div><strong>MAM LEBANON</strong><p>Mouvement Apostolique Marial</p></div></div><p style="margin-top:15px">${t("contactNote")}</p></div></section>`;
  }
  function legal(which) {
    let title = which === "terms" ? t("terms") : t("privacy"),
      body = which === "terms" ? t("termsText") : t("privacyText");
    return `<section class="app-screen active">${pageHead(title, t("legalIntro"))}<div class="app-card"><p>${body}</p><p class="app-muted" style="margin-top:14px">MAM Lebanon · ${new Date().getFullYear()}</p></div></section>`;
  }
  const ACC = "mamAccounts",
    SES = "mamSession",
    NOT = "mamNotifs";
  const PAGES = [
    "home",
    "about",
    "readings",
    "news",
    "ai",
    "login",
    "profile",
    "terms",
    "privacy",
    "events",
    "contact",
    "account",
    "notifications",
    "article",
  ];
  const load = (k, d) => {
    try {
      const v = JSON.parse(localStorage.getItem(k));
      return v == null ? d : v;
    } catch (e) {
      return d;
    }
  };
  const store = (k, v) => {
    try {
      localStorage.setItem(k, JSON.stringify(v));
      return true;
    } catch (e) {
      return false;
    }
  };
  const me = () => {
    const e = load(SES, "");
    return e ? load(ACC, {})[e] || null : null;
  };
  const saveUser = (p) => {
    const a = load(ACC, {}),
      k = load(SES, "");
    if (!a[k]) return false;
    a[k] = { ...a[k], ...p };
    return store(ACC, a);
  };
  const hash = async (s) => {
    try {
      const b = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode("mam|" + s),
      );
      return [...new Uint8Array(b)]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("");
    } catch (e) {
      return "p" + btoa(unescape(encodeURIComponent(s)));
    }
  };
  const loc = () => ({ ar: "ar-LB", fr: "fr-FR", en: "en-GB" })[lang()];
  const perm = () =>
    "Notification" in window ? Notification.permission : "unsupported";
  const canNotify = () =>
    window.isSecureContext &&
    "Notification" in window &&
    "serviceWorker" in navigator;
  const fmtDate = (v) => {
    const d = v ? new Date(v + "T00:00:00") : null;
    return d && !isNaN(d)
      ? d.toLocaleDateString(loc(), {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : t("unset");
  };
  const row = (ic, l, v) =>
    `<div class="info-row"><i class="${ic}"></i><div><span class="lbl">${l}</span><div class="val">${v}</div></div></div>`;
  let toastTimer;
  function toast(msg, bad) {
    let el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.setAttribute("role", "status");
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.className = "show" + (bad ? " bad" : "");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.className = "";
    }, 3200);
  }
  function profile() {
    const u = me();
    if (!u)
      return `<section class="app-screen active">${pageHead(t("profileTitle"), t("profileEmpty"))}<div class="app-card center-card"><div class="app-avatar big"><i class="fa-regular fa-user"></i></div><p>${t("profileEmpty")}</p><button class="app-primary" data-page="login">${t("login")}</button></div></section>`;
    const ch = `<i class="fa-solid fa-chevron-${lang() === "ar" ? "left" : "right"}"></i>`;
    const li = (ic, txt, attr) =>
      `<button ${attr}><i class="${ic}"></i><span>${txt}</span>${ch}</button>`;
    return `<section class="app-screen active">${pageHead(t("profileTitle"))}<div class="app-card profile-card"><label class="avatar-wrap" for="photoInput" aria-label="${t("changePhoto")}"><div class="app-avatar big">${u.photo ? `<img src="${safe(u.photo)}" alt="">` : '<i class="fa-solid fa-user"></i>'}</div><span class="avatar-edit"><i class="fa-solid fa-camera"></i></span></label><input type="file" id="photoInput" accept="image/*" hidden><h2>${safe(u.name)}</h2><span class="badge">${t("member")}</span></div><div class="app-card">${row("fa-solid fa-landmark", t("position"), safe(u.position) || t("unset"))}${row("fa-regular fa-calendar", t("dob"), fmtDate(u.dob))}${row("fa-solid fa-phone", t("phone"), u.phone ? `<bdi dir="ltr">${safe(u.phone)}</bdi>` : t("unset"))}${row("fa-regular fa-envelope", t("email"), `<bdi dir="ltr">${safe(u.email)}</bdi>`)}${row("fa-solid fa-key", t("access"), `<span class="badge">${t("accessMember")}</span><p class="app-muted">${t("accessNote")}</p>`)}</div><h3 class="list-title">${t("policy")}</h3><div class="app-list">${li("fa-solid fa-shield-halved", t("privacy"), 'data-page="privacy"')}${li("fa-solid fa-file-contract", t("terms"), 'data-page="terms"')}</div><h3 class="list-title">${t("account")}</h3><div class="app-list">${li("fa-solid fa-user-pen", t("account"), 'data-page="account"')}${li("fa-regular fa-bell", t("notif"), 'data-page="notifications"')}${li("fa-solid fa-arrow-right-from-bracket", t("logout"), 'id="logoutBtn"')}</div><button class="app-danger" data-act="del-open"><i class="fa-regular fa-trash-can"></i> ${t("del")}</button></section>`;
  }
  function account() {
    const u = me();
    if (!u) return login();
    const f = (id, l, type, v, x = "") =>
      `<div class="app-field"><label for="${id}">${l}</label><input id="${id}" type="${type}" value="${safe(v)}" ${x}></div>`;
    return `<section class="app-screen active">${pageHead(t("account"), t("accountDesc"))}<div class="app-card"><form class="app-form" id="accountForm" novalidate>${f("accName", t("name"), "text", u.name, 'dir="auto" autocomplete="name"')}${f("accPos", t("position"), "text", u.position, 'dir="auto"')}${f("accDob", t("dob"), "date", u.dob, `max="${new Date().toISOString().slice(0, 10)}"`)}${f("accPhone", t("phone"), "tel", u.phone, 'inputmode="tel" autocomplete="tel"')}${f("accEmail", t("email"), "email", u.email, "readonly")}<button class="app-primary" type="submit">${t("save")}</button></form></div>${u.photo ? `<button class="app-secondary wide" data-act="photo-del"><i class="fa-regular fa-image"></i> ${t("removePhoto")}</button>` : ""}</section>`;
  }
  function notifs() {
    const p = perm(),
      st = !canNotify()
        ? "stNo"
        : { granted: "stGranted", denied: "stDenied" }[p] || "stDefault",
      list = load(NOT, []);
    return `<section class="app-screen active">${pageHead(t("notif"), t("notifDesc"))}<div class="app-card"><div class="notif-status ${canNotify() && p === "granted" ? "ok" : ""}"><i class="fa-solid fa-bell"></i><p>${t(st)}</p></div><div class="btn-stack">${canNotify() && p === "default" ? `<button class="app-secondary" data-act="enable">${t("notifOn")}</button>` : ""}<button class="app-primary" data-act="test"><i class="fa-solid fa-paper-plane"></i> ${t("notifTest")}</button></div></div><div class="app-section-head"><h2>${t("recent")}</h2></div>${list.length ? list.map((n) => `<div class="app-card"><strong>${safe(n.title)}</strong><p>${safe(n.body)}</p><small class="app-muted">${new Date(n.t).toLocaleString(loc())}</small></div>`).join("") : `<p class="app-muted">${t("none")}</p>`}</section>`;
  }
  async function askPermission() {
    if (!canNotify()) {
      toast(t("stNo"), 1);
      return false;
    }
    // Already granted — nothing to ask.
    if (Notification.permission === "granted") return true;
    // Already denied — the browser will NOT show a prompt again.
    // The user must unblock it from browser/site settings.
    if (Notification.permission === "denied") {
      toast(t("stDenied"), 1);
      return false;
    }
    // permission === "default": show the native prompt.
    // This MUST run from the click handler for the browser to accept it.
    try {
      const result = await Notification.requestPermission();
      return result === "granted";
    } catch (e) {
      console.error("[MAM] requestPermission failed:", e);
      return false;
    }
  }

  let lastTest = 0;

  // Register SW early and keep the promise so sendTest() can await a controlled worker.
  let swReg = null;
  if ("serviceWorker" in navigator && window.isSecureContext) {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => {
        swReg = reg;
        console.log("[MAM] SW registered, scope:", reg.scope);
      })
      .catch((err) => console.error("[MAM] SW registration failed:", err));
  }

  async function sendTest() {
    if (Date.now() - lastTest < 8000) return toast(t("wait"), 1);

    // 1. Secure context / API availability check
    if (!window.isSecureContext) {
      console.error("[MAM] Not a secure context (must be https or localhost).");
      return toast(t("stNo"), 1);
    }
    if (!("serviceWorker" in navigator)) {
      console.error("[MAM] Service Worker not supported.");
      return toast(t("stNo"), 1);
    }

    // 2. If permission is "default", the browser prompt will open here,
    //    because we are still inside the user's click handler.
    if (!canNotify()) {
      toast(t("stNo"), 1);
      return;
    }
    if (Notification.permission === "default") {
      // First-time click: show the native "Allow notifications?" prompt.
      const result = await Notification.requestPermission();
      render(); // refresh the status card after the user answers
      if (result !== "granted") {
        toast(t(result === "denied" ? "stDenied" : "stDefault"), 1);
        return;
      }
    }
    if (Notification.permission !== "granted") {
      render();
      toast(t(perm() === "denied" ? "stDenied" : "stDefault"), 1);
      return;
    }

    try {
      // 3. Wait for a controlled, active worker
      const reg = swReg || (await navigator.serviceWorker.ready);
      console.log("[MAM] SW ready. active:", !!reg.active, "scope:", reg.scope);

      const abs = (p) => new URL(p, reg.scope).href;
      const uniqueTag = "mam-test-" + Date.now();

      const opts = {
        body: t("testBody"),
        icon: abs("./assets/icons/icon-192.png"),
        badge: abs("./assets/icons/badge-96.png"),
        tag: uniqueTag,
        silent: false,
        timestamp: Date.now(),
        lang: lang(),
        dir: direction(),
        data: { url: abs("./index.html#notifications") },
      };

      console.log("[MAM] calling showNotification with:", opts);
      await reg.showNotification(t("testTitle"), opts);

      // 4. Verify the notification actually exists in the tray
      const shown = await reg.getNotifications({ tag: uniqueTag });
      console.log(
        "[MAM] notification count in tray:",
        shown.length,
        "| permission:",
        Notification.permission,
      );

      if (!shown.length) {
        console.warn(
          "[MAM] showNotification resolved but no notification found. " +
            "Likely blocked by OS-level notification settings or focus mode.",
        );
        toast(t("stNo"), 1);
        return;
      }

      lastTest = Date.now();
      store(
        NOT,
        [
          { t: Date.now(), title: t("testTitle"), body: t("testBody") },
          ...load(NOT, []),
        ].slice(0, 10),
      );
      render();
      toast(t("sent"));
    } catch (e) {
      console.error("[MAM] showNotification failed:", e);
      toast(t("stNo"), 1);
    }
  }

  function readPhoto(file) {
    return new Promise((ok, no) => {
      if (!file || !file.type.startsWith("image/")) return no();
      const img = new Image(),
        url = URL.createObjectURL(file);
      img.onload = () => {
        const c = document.createElement("canvas"),
          m = Math.min(img.width, img.height);
        c.width = c.height = 256;
        c.getContext("2d").drawImage(
          img,
          (img.width - m) / 2,
          (img.height - m) / 2,
          m,
          m,
          0,
          0,
          256,
          256,
        );
        URL.revokeObjectURL(url);
        ok(c.toDataURL("image/jpeg", 0.82));
      };
      img.onerror = no;
      img.src = url;
    });
  }
  function confirmDelete() {
    const m = document.createElement("div");
    m.className = "modal";
    m.innerHTML = `<div class="modal-box" role="dialog" aria-modal="true"><h3>${t("del")}</h3><p>${t("delWarn")}</p><div class="app-field"><input type="password" id="delPass" autocomplete="current-password" aria-label="${t("password")}"></div><div class="modal-actions"><button class="app-secondary" data-act="cancel">${t("cancel")}</button><button class="app-danger" data-act="confirm">${t("del")}</button></div></div>`;
    document.body.appendChild(m);
    document.getElementById("delPass").focus();
  }
  const ST = [
    [
      ".settings-head h2",
      ["إعدادات التطبيق"],
      ["App settings"],
      ["Paramètres de l’application"],
    ],
    [
      ".settings-head p",
      ["خصّص تجربتك واحفظ تفضيلاتك على هذا الجهاز."],
      ["Customize your experience. Preferences are saved on this device."],
      [
        "Personnalisez votre expérience. Les préférences restent sur cet appareil.",
      ],
    ],
    [
      ".setting-group>label:not(.switch)",
      ["لغة التطبيق"],
      ["App language"],
      ["Langue de l’application"],
    ],
    [".setting-label label", ["حجم الخط"], ["Text size"], ["Taille du texte"]],
    [
      ".range-ends span",
      ["أصغر", "أكبر"],
      ["Smaller", "Larger"],
      ["Plus petit", "Plus grand"],
    ],
    [
      ".setting-switch strong",
      ["الوضع الداكن", "تباين أعلى", "تقليل الحركة"],
      ["Dark mode", "Higher contrast", "Reduce motion"],
      ["Mode sombre", "Contraste élevé", "Réduire les animations"],
    ],
    [
      ".setting-switch small",
      [
        "مظهر داكن مريح للعين.",
        "زيادة وضوح النصوص والعناصر.",
        "إيقاف الحركات غير الضرورية.",
      ],
      [
        "A darker, eye-friendly look.",
        "Clearer text and controls.",
        "Turn off unnecessary animation.",
      ],
      [
        "Un affichage sombre et reposant.",
        "Textes et éléments plus lisibles.",
        "Désactiver les animations.",
      ],
    ],
    [
      "#settingsReset",
      ["استعادة الإعدادات الافتراضية"],
      ["Restore default settings"],
      ["Rétablir les paramètres par défaut"],
    ],
    [
      ".settings-saved",
      ["تُحفظ الإعدادات تلقائياً على جهازك."],
      ["Settings are saved automatically on your device."],
      ["Les paramètres sont enregistrés automatiquement sur votre appareil."],
    ],
    [
      ".mobile-nav a span",
      ["الرئيسية", "القراءات", "الأخبار", "المساعد", "حسابي"],
      ["Home", "Readings", "News", "Assistant", "Profile"],
      ["Accueil", "Lectures", "Actualités", "Assistant", "Profil"],
    ],
    ["#settingsOpen span", ["الإعدادات"], ["Settings"], ["Paramètres"]],
    [
      ".brand-copy span",
      ["الحركة الرسولية المريمية"],
      ["APOSTOLIC MARIAN MOVEMENT"],
      ["MOUVEMENT APOSTOLIQUE MARIAL"],
    ],
  ];
  function setText(el, s) {
    const n = [...el.childNodes]
      .reverse()
      .find((x) => x.nodeType === 3 && x.textContent.trim());
    if (n) n.textContent = (el.querySelector("i") ? " " : "") + s;
    else el.append(s);
  }
  function applyStatic() {
    const i = ["ar", "en", "fr"].indexOf(lang()) + 1;
    ST.forEach((r) =>
      document.querySelectorAll(r[0]).forEach((el, k) => {
        if (r[i][k] != null) setText(el, r[i][k]);
      }),
    );
    [
      ["#settingsOpen", "settings"],
      ["#settingsClose", "close"],
      ["#bellBtn", "notif"],
    ].forEach(([s, k]) => {
      const el = document.querySelector(s);
      if (el) {
        el.setAttribute("aria-label", t(k));
        el.title = t(k);
      }
    });
  }
  function render() {
    const views = {
      home,
      about,
      readings,
      news,
      ai,
      login,
      profile,
      terms: () => legal("terms"),
      privacy: () => legal("privacy"),
      events,
      contact,
      account,
      notifications: notifs,
      article: articlePage,
    };
    root.innerHTML = (views[page] || home)();
    // Update the root direction so every screen, component and logical CSS rule follows it.
    document.documentElement.setAttribute("lang", lang());
    document.documentElement.setAttribute("dir", direction());
    document.body.setAttribute("dir", direction());
    document.documentElement.style.direction = direction();
    document.title =
      t(
        page === "article"
          ? "news"
          : page === "notifications"
            ? "notif"
            : page === "account"
              ? "account"
              : page,
      ) + " | MAM";
    document
      .querySelectorAll(".mobile-nav a")
      .forEach((a) =>
        a.classList.toggle(
          "active",
          a.dataset.page === page ||
            (a.dataset.page === "news" && page === "article") ||
            (a.dataset.page === "profile" &&
              ["account", "notifications", "login"].includes(page)),
        ),
      );
  }
  function go(next) {
    if (!PAGES.includes(next)) return;
    const changed = next !== page;
    page = next;
    if (changed)
      history.pushState(
        { i: ((history.state && history.state.i) || 0) + 1 },
        "",
        "#" + next,
      );
    render();
    window.scrollTo({
      top: 0,
      behavior: prefs.reduceMotion ? "auto" : "smooth",
    });
  }
  function savePrefs() {
    try {
      localStorage.setItem(KEY, JSON.stringify(prefs));
    } catch (error) {
      console.warn("Could not save app preferences.", error);
    }
    applySettings();
    render();
  }
  function applySettings() {
    // Update the root direction so every screen, component and logical CSS rule follows it.
    document.documentElement.setAttribute("lang", lang());
    document.documentElement.setAttribute("dir", direction());
    document.body.setAttribute("dir", direction());
    document.documentElement.style.direction = direction();
    document.documentElement.style.fontSize = (prefs.fontSize || 100) + "%";
    document.body.classList.toggle("dark-mode", !!prefs.darkMode);
    document.body.classList.toggle("high-contrast", !!prefs.highContrast);
    document.body.classList.toggle("reduce-motion", !!prefs.reduceMotion);
    document
      .querySelectorAll(".language-option")
      .forEach((b) =>
        b.classList.toggle("active", b.dataset.language === lang()),
      );
    const range = document.getElementById("fontSizeRange");
    if (range) range.value = prefs.fontSize || 100;
    const value = document.getElementById("fontSizeValue");
    if (value) value.textContent = (prefs.fontSize || 100) + "%";
    const dark = document.getElementById("darkModeToggle");
    if (dark) dark.checked = !!prefs.darkMode;
    const contrast = document.getElementById("contrastToggle");
    if (contrast) contrast.checked = !!prefs.highContrast;
    const motion = document.getElementById("motionToggle");
    if (motion) motion.checked = !!prefs.reduceMotion;
    applyStatic();
    const hint = document.getElementById("languageHint");
    if (hint)
      hint.textContent =
        lang() === "ar"
          ? "اختر لغة التطبيق. سيتغيّر اتجاه الواجهة تلقائياً."
          : lang() === "fr"
            ? "Choisissez la langue. Le sens de lecture s’adapte automatiquement."
            : "Choose a language. The interface direction updates automatically.";
  }
  const settingsPanel = document.getElementById("settingsPanel");
  const settingsBackdrop = document.getElementById("settingsBackdrop");
  function openSettings() {
    document.body.classList.add("settings-open");
    settingsPanel.setAttribute("aria-hidden", "false");
    settingsBackdrop.setAttribute("aria-hidden", "false");
  }
  function closeSettings() {
    document.body.classList.remove("settings-open");
    settingsPanel.setAttribute("aria-hidden", "true");
    settingsBackdrop.setAttribute("aria-hidden", "true");
  }

  // Delegated navigation and account interactions.
  document.addEventListener("click", (e) => {
    const pageButton = e.target.closest("[data-page]");
    if (pageButton) {
      e.preventDefault();
      go(pageButton.dataset.page);
      return;
    }
    if (e.target.closest("#settingsOpen")) openSettings();
    if (
      e.target.closest("#settingsClose") ||
      e.target.closest("#settingsBackdrop")
    )
      closeSettings();
    if (e.target.closest("#showRegister")) {
      document.getElementById("loginForm").hidden = true;
      document.getElementById("registerForm").hidden = false;
    }
    if (e.target.closest("#showLogin")) {
      document.getElementById("registerForm").hidden = true;
      document.getElementById("loginForm").hidden = false;
    }
    if (e.target.closest("#logoutBtn")) {
      localStorage.removeItem(SES);
      go("profile");
    }
    const language = e.target.closest(".language-option");
    if (language) {
      prefs.language = language.dataset.language;
      savePrefs();
    }
    if (e.target.closest("#settingsReset")) {
      prefs = {
        language: "ar",
        fontSize: 100,
        darkMode: false,
        highContrast: false,
        reduceMotion: false,
      };
      savePrefs();
    }
  });
  document.addEventListener("input", (e) => {
    if (e.target.id === "fontSizeRange") {
      prefs.fontSize = Number(e.target.value);
      document.documentElement.style.fontSize = prefs.fontSize + "%";
      document.getElementById("fontSizeValue").textContent =
        prefs.fontSize + "%";
    }
  });
  document.addEventListener("change", (e) => {
    if (e.target.id === "fontSizeRange") savePrefs();
    if (e.target.id === "darkModeToggle") {
      prefs.darkMode = e.target.checked;
      savePrefs();
    }
    if (e.target.id === "contrastToggle") {
      prefs.highContrast = e.target.checked;
      savePrefs();
    }
    if (e.target.id === "motionToggle") {
      prefs.reduceMotion = e.target.checked;
      savePrefs();
    }
  });
  document.addEventListener("submit", async (e) => {
    const id = e.target.id;
    if (!["loginForm", "registerForm", "accountForm"].includes(id)) return;
    e.preventDefault();
    const v = (i) => (document.getElementById(i)?.value || "").trim(),
      pw = (i) => document.getElementById(i)?.value || "";
    if (id === "loginForm") {
      const em = v("loginEmail").toLowerCase(),
        a = load(ACC, {})[em];
      if (!a || a.hash !== (await hash(em + "|" + pw("loginPassword"))))
        return toast(t("badLogin"), 1);
      store(SES, em);
      go("profile");
    }
    if (id === "registerForm") {
      const em = v("registerEmail").toLowerCase(),
        all = load(ACC, {});
      if (all[em]) return toast(t("emailUsed"), 1);
      all[em] = {
        name: v("registerName"),
        email: em,
        hash: await hash(em + "|" + pw("registerPassword")),
        position: "",
        dob: "",
        phone: "",
        access: "member",
        photo: "",
        created: Date.now(),
      };
      if (!store(ACC, all)) return toast(t("badLogin"), 1);
      store(SES, em);
      go("profile");
    }
    if (id === "accountForm") {
      const phone = v("accPhone");
      if (phone && !/^\+?[0-9\s().-]{7,20}$/.test(phone))
        return toast(t("badPhone"), 1);
      saveUser({
        name: v("accName") || me().name,
        position: v("accPos"),
        dob: v("accDob"),
        phone,
      });
      toast(t("saved"));
      go("profile");
    }
  });
  document.addEventListener("click", async (e) => {
    if (e.target.classList.contains("modal")) return e.target.remove();
    const b = e.target.closest("[data-act]");
    if (!b) return;
    const a = b.dataset.act;
    if (a === "back") {
      history.state && history.state.i > 0 ? history.back() : go("home");
    } else if (a === "test") sendTest();
    else if (a === "open-news") {
      artId = b.dataset.id;
      go("article");
    } else if (a.startsWith("cal-")) calAction(a, b);
    else if (a === "enable") {
      await askPermission();
      render();
    } else if (a === "photo-del") {
      saveUser({ photo: "" });
      render();
    } else if (a === "del-open") confirmDelete();
    else if (a === "cancel") document.querySelector(".modal")?.remove();
    else if (a === "confirm") {
      const u = me();
      if (!u || (await hash(u.email + "|" + pw0())) !== u.hash)
        return toast(t("badPass"), 1);
      const all = load(ACC, {});
      delete all[u.email];
      store(ACC, all);
      localStorage.removeItem(SES);
      localStorage.removeItem(NOT);
      document.querySelector(".modal")?.remove();
      toast(t("deleted"));
      go("profile");
    }
  });
  const pw0 = () => document.getElementById("delPass")?.value || "";
  document.addEventListener("change", async (e) => {
    if (e.target.id !== "photoInput") return;
    const f = e.target.files && e.target.files[0];
    e.target.value = "";
    try {
      const p = await readPhoto(f);
      if (!saveUser({ photo: p })) throw 0;
      render();
      toast(t("saved"));
    } catch (x) {
      toast(t("badPhoto"), 1);
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") document.querySelector(".modal")?.remove();
  });
  window.addEventListener("hashchange", () => {
    const h = location.hash.slice(1);
    if (PAGES.includes(h) && h !== page) {
      page = h;
      render();
      window.scrollTo(0, 0);
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSettings();
  });
  document
    .getElementById("settingsOpen")
    .addEventListener("click", openSettings);
  document
    .getElementById("settingsClose")
    .addEventListener("click", closeSettings);
  settingsBackdrop.addEventListener("click", closeSettings);
  const initial = (location.hash || "").slice(1);
  if (PAGES.includes(initial)) page = initial;
  applySettings();
  render();
})();
