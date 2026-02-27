export type Language = "en" | "es" | "fr" | "de" | "ka";

export const languageNames: Record<Language, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  ka: "ქართული",
};

export const languageCodes: Record<Language, string> = {
  en: "EN",
  es: "ES",
  fr: "FR",
  de: "DE",
  ka: "KA",
};

type TranslationKeys = {
  // Nav
  nav_courses: string;
  nav_pricing: string;
  nav_about: string;
  nav_dashboard: string;
  nav_login: string;
  nav_signup: string;
  nav_logout: string;

  // Hero
  hero_badge: string;
  hero_title_1: string;
  hero_title_2: string;
  hero_subtitle: string;
  hero_cta: string;
  hero_pricing: string;

  // Stats
  stat_courses: string;
  stat_students: string;
  stat_completion: string;
  stat_instructors: string;

  // Sections
  popular_courses: string;
  popular_subtitle: string;
  view_all: string;
  browse_subject: string;
  browse_subject_subtitle: string;
  cta_title: string;
  cta_subtitle: string;
  cta_button: string;

  // Subjects
  subject_math: string;
  subject_physics: string;
  subject_programming: string;
  subject_engineering: string;
  subject_data_science: string;
  subject_technology: string;
  courses_count: string;

  // Courses page
  courses_title: string;
  courses_subtitle: string;
  courses_search: string;

  // Course detail
  course_not_found: string;
  back_to_courses: string;
  all_courses: string;
  course_students: string;
  course_enroll: string;
  course_wishlist: string;
  course_onetime: string;
  course_description: string;
  what_youll_learn: string;
  highlight_1: string;
  highlight_2: string;
  highlight_3: string;
  highlight_4: string;
  highlight_5: string;

  // Pricing
  pricing_title: string;
  pricing_subtitle: string;
  plan_free: string;
  plan_pro: string;
  plan_team: string;
  most_popular: string;
  free_price: string;
  pro_price: string;
  team_price: string;
  forever: string;
  per_month: string;
  plan_free_desc: string;
  plan_pro_desc: string;
  plan_team_desc: string;
  get_started: string;
  start_free_trial: string;
  contact_sales: string;

  // About
  about_title: string;
  about_subtitle: string;
  our_story: string;
  our_story_text: string;
  values_title: string;
  value_quality: string;
  value_quality_desc: string;
  value_clarity: string;
  value_clarity_desc: string;
  value_practical: string;
  value_practical_desc: string;

  // Auth
  login_title: string;
  login_subtitle: string;
  login_button: string;
  login_no_account: string;
  login_signup_link: string;
  register_title: string;
  register_subtitle: string;
  register_button: string;
  register_has_account: string;
  register_login_link: string;
  label_email: string;
  label_password: string;
  label_name: string;
  placeholder_email: string;
  placeholder_password: string;
  placeholder_name: string;

  // Dashboard
  dash_welcome: string;
  dash_subtitle: string;
  dash_enrolled: string;
  dash_hours: string;
  dash_certificates: string;
  dash_completion: string;
  dash_my_courses: string;
  dash_in_progress: string;
  dash_no_courses: string;
  dash_browse: string;

  // Footer
  footer_desc: string;
  footer_platform: string;
  footer_browse_courses: string;
  footer_subjects: string;
  footer_company: string;
  footer_careers: string;
  footer_blog: string;
  footer_privacy: string;
  footer_terms: string;
  footer_rights: string;

  // Common
  loading: string;
  error_generic: string;

  // 404
  not_found_title: string;
  not_found_text: string;
  not_found_link: string;
};

export type TranslationKey = keyof TranslationKeys;

const translations: Record<Language, TranslationKeys> = {
  en: {
    nav_courses: "Courses",
    nav_pricing: "Pricing",
    nav_about: "About",
    nav_dashboard: "Dashboard",
    nav_login: "Log in",
    nav_signup: "Sign Up",
    nav_logout: "Log out",

    hero_badge: "Learn from the best — at your own pace",
    hero_title_1: "Master Science &",
    hero_title_2: "Technology",
    hero_subtitle: "From calculus to quantum computing — structured courses designed by experts for real understanding.",
    hero_cta: "Explore Courses",
    hero_pricing: "View Pricing",

    stat_courses: "Courses",
    stat_students: "Students",
    stat_completion: "Completion Rate",
    stat_instructors: "Expert Instructors",

    popular_courses: "Popular Courses",
    popular_subtitle: "Start learning with our top-rated programs",
    view_all: "View all",
    browse_subject: "Browse by Subject",
    browse_subject_subtitle: "Find courses in the discipline that excites you",
    cta_title: "Ready to start learning?",
    cta_subtitle: "Join thousands of students building real skills in math, science, and tech.",
    cta_button: "Get Started Free",

    subject_math: "Mathematics",
    subject_physics: "Physics",
    subject_programming: "Programming",
    subject_engineering: "Engineering",
    subject_data_science: "Data Science",
    subject_technology: "Technology",
    courses_count: "courses",

    courses_title: "Browse Courses",
    courses_subtitle: "Explore our catalog of expert-led courses in mathematics, physics, programming, and more.",
    courses_search: "Search courses...",

    course_not_found: "Course not found",
    back_to_courses: "Back to Courses",
    all_courses: "All Courses",
    course_students: "students",
    course_enroll: "Enroll Now",
    course_wishlist: "Add to Wishlist",
    course_onetime: "One-time purchase · Lifetime access",
    course_description: "An in-depth, structured course designed to take you from foundational concepts to advanced applications with practical exercises.",
    what_youll_learn: "What You'll Learn",
    highlight_1: "Lifetime access to all course materials",
    highlight_2: "Hands-on exercises and projects",
    highlight_3: "Certificate of completion",
    highlight_4: "Community forum access",
    highlight_5: "Downloadable resources",

    pricing_title: "Simple, Transparent Pricing",
    pricing_subtitle: "Choose the plan that fits your learning goals. Upgrade, downgrade, or cancel anytime.",
    plan_free: "Free",
    plan_pro: "Pro",
    plan_team: "Team",
    most_popular: "Most Popular",
    free_price: "$0",
    pro_price: "$19",
    team_price: "$49",
    forever: "forever",
    per_month: "/month",
    plan_free_desc: "Get started with foundational content",
    plan_pro_desc: "Unlock the full learning experience",
    plan_team_desc: "For teams and organizations",
    get_started: "Get Started",
    start_free_trial: "Start Free Trial",
    contact_sales: "Contact Sales",

    about_title: "About Studyfy",
    about_subtitle: "We're on a mission to make expert-level education in science and technology accessible to everyone, everywhere.",
    our_story: "Our Story",
    our_story_text: "Studyfy was founded by educators and engineers who saw a gap between academic knowledge and accessible online learning. We bring university-caliber content to a modern, self-paced platform — so anyone with curiosity and commitment can build deep expertise in mathematics, physics, programming, and engineering.",
    values_title: "What We Stand For",
    value_quality: "Rigorous Quality",
    value_quality_desc: "Every course is peer-reviewed by subject-matter experts to ensure accuracy and depth.",
    value_clarity: "Clarity First",
    value_clarity_desc: "Complex ideas explained clearly — no jargon walls, just genuine understanding.",
    value_practical: "Practical Skills",
    value_practical_desc: "Theory meets application with hands-on projects and real-world problem solving.",

    login_title: "Welcome back",
    login_subtitle: "Sign in to continue learning",
    login_button: "Sign In",
    login_no_account: "Don't have an account?",
    login_signup_link: "Sign up",
    register_title: "Create your account",
    register_subtitle: "Start learning today — it's free",
    register_button: "Create Account",
    register_has_account: "Already have an account?",
    register_login_link: "Sign in",
    label_email: "Email",
    label_password: "Password",
    label_name: "Full Name",
    placeholder_email: "you@example.com",
    placeholder_password: "••••••••",
    placeholder_name: "John Doe",

    dash_welcome: "Welcome back",
    dash_subtitle: "Continue where you left off.",
    dash_enrolled: "Enrolled Courses",
    dash_hours: "Hours Studied",
    dash_certificates: "Certificates",
    dash_completion: "Completion",
    dash_my_courses: "My Courses",
    dash_in_progress: "In progress",
    dash_no_courses: "You haven't enrolled in any courses yet.",
    dash_browse: "Browse Courses",

    footer_desc: "Master mathematics, physics, programming, and more — from beginner to advanced.",
    footer_platform: "Platform",
    footer_browse_courses: "Browse Courses",
    footer_subjects: "Subjects",
    footer_company: "Company",
    footer_careers: "Careers",
    footer_blog: "Blog",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_rights: "All rights reserved.",

    loading: "Loading...",
    error_generic: "Something went wrong. Please try again.",

    not_found_title: "404",
    not_found_text: "Oops! Page not found",
    not_found_link: "Return to Home",
  },

  es: {
    nav_courses: "Cursos",
    nav_pricing: "Precios",
    nav_about: "Acerca de",
    nav_dashboard: "Panel",
    nav_login: "Iniciar sesión",
    nav_signup: "Registrarse",
    nav_logout: "Cerrar sesión",

    hero_badge: "Aprende de los mejores — a tu ritmo",
    hero_title_1: "Domina la Ciencia y",
    hero_title_2: "Tecnología",
    hero_subtitle: "Del cálculo a la computación cuántica — cursos estructurados diseñados por expertos para una comprensión real.",
    hero_cta: "Explorar Cursos",
    hero_pricing: "Ver Precios",

    stat_courses: "Cursos",
    stat_students: "Estudiantes",
    stat_completion: "Tasa de Finalización",
    stat_instructors: "Instructores Expertos",

    popular_courses: "Cursos Populares",
    popular_subtitle: "Comienza a aprender con nuestros programas mejor valorados",
    view_all: "Ver todos",
    browse_subject: "Explorar por Materia",
    browse_subject_subtitle: "Encuentra cursos en la disciplina que te apasiona",
    cta_title: "¿Listo para empezar a aprender?",
    cta_subtitle: "Únete a miles de estudiantes construyendo habilidades reales en matemáticas, ciencia y tecnología.",
    cta_button: "Comienza Gratis",

    subject_math: "Matemáticas",
    subject_physics: "Física",
    subject_programming: "Programación",
    subject_engineering: "Ingeniería",
    subject_data_science: "Ciencia de Datos",
    subject_technology: "Tecnología",
    courses_count: "cursos",

    courses_title: "Explorar Cursos",
    courses_subtitle: "Explora nuestro catálogo de cursos dirigidos por expertos en matemáticas, física, programación y más.",
    courses_search: "Buscar cursos...",

    course_not_found: "Curso no encontrado",
    back_to_courses: "Volver a Cursos",
    all_courses: "Todos los Cursos",
    course_students: "estudiantes",
    course_enroll: "Inscribirse Ahora",
    course_wishlist: "Añadir a Favoritos",
    course_onetime: "Compra única · Acceso de por vida",
    course_description: "Un curso en profundidad y estructurado diseñado para llevarte desde conceptos fundamentales hasta aplicaciones avanzadas con ejercicios prácticos.",
    what_youll_learn: "Lo que aprenderás",
    highlight_1: "Acceso de por vida a todos los materiales del curso",
    highlight_2: "Ejercicios prácticos y proyectos",
    highlight_3: "Certificado de finalización",
    highlight_4: "Acceso al foro de la comunidad",
    highlight_5: "Recursos descargables",

    pricing_title: "Precios Simples y Transparentes",
    pricing_subtitle: "Elige el plan que se adapte a tus objetivos de aprendizaje. Actualiza, degrada o cancela en cualquier momento.",
    plan_free: "Gratis",
    plan_pro: "Pro",
    plan_team: "Equipo",
    most_popular: "Más Popular",
    free_price: "$0",
    pro_price: "$19",
    team_price: "$49",
    forever: "siempre",
    per_month: "/mes",
    plan_free_desc: "Comienza con contenido fundamental",
    plan_pro_desc: "Desbloquea la experiencia completa de aprendizaje",
    plan_team_desc: "Para equipos y organizaciones",
    get_started: "Comenzar",
    start_free_trial: "Prueba Gratuita",
    contact_sales: "Contactar Ventas",

    about_title: "Acerca de Studyfy",
    about_subtitle: "Nuestra misión es hacer que la educación de nivel experto en ciencia y tecnología sea accesible para todos, en todas partes.",
    our_story: "Nuestra Historia",
    our_story_text: "Studyfy fue fundada por educadores e ingenieros que vieron una brecha entre el conocimiento académico y el aprendizaje en línea accesible. Llevamos contenido de calibre universitario a una plataforma moderna y autodidacta.",
    values_title: "Lo que Defendemos",
    value_quality: "Calidad Rigurosa",
    value_quality_desc: "Cada curso es revisado por pares expertos para garantizar precisión y profundidad.",
    value_clarity: "Claridad Primero",
    value_clarity_desc: "Ideas complejas explicadas con claridad — sin jerga, solo comprensión genuina.",
    value_practical: "Habilidades Prácticas",
    value_practical_desc: "La teoría se encuentra con la aplicación con proyectos prácticos y resolución de problemas del mundo real.",

    login_title: "Bienvenido de nuevo",
    login_subtitle: "Inicia sesión para continuar aprendiendo",
    login_button: "Iniciar Sesión",
    login_no_account: "¿No tienes una cuenta?",
    login_signup_link: "Registrarse",
    register_title: "Crea tu cuenta",
    register_subtitle: "Empieza a aprender hoy — es gratis",
    register_button: "Crear Cuenta",
    register_has_account: "¿Ya tienes una cuenta?",
    register_login_link: "Iniciar sesión",
    label_email: "Correo electrónico",
    label_password: "Contraseña",
    label_name: "Nombre completo",
    placeholder_email: "tu@ejemplo.com",
    placeholder_password: "••••••••",
    placeholder_name: "Juan Pérez",

    dash_welcome: "Bienvenido de nuevo",
    dash_subtitle: "Continúa donde lo dejaste.",
    dash_enrolled: "Cursos Inscritos",
    dash_hours: "Horas Estudiadas",
    dash_certificates: "Certificados",
    dash_completion: "Completado",
    dash_my_courses: "Mis Cursos",
    dash_in_progress: "En progreso",
    dash_no_courses: "Aún no te has inscrito en ningún curso.",
    dash_browse: "Explorar Cursos",

    footer_desc: "Domina matemáticas, física, programación y más — de principiante a avanzado.",
    footer_platform: "Plataforma",
    footer_browse_courses: "Explorar Cursos",
    footer_subjects: "Materias",
    footer_company: "Empresa",
    footer_careers: "Carreras",
    footer_blog: "Blog",
    footer_privacy: "Política de Privacidad",
    footer_terms: "Términos de Servicio",
    footer_rights: "Todos los derechos reservados.",

    loading: "Cargando...",
    error_generic: "Algo salió mal. Inténtalo de nuevo.",

    not_found_title: "404",
    not_found_text: "¡Ups! Página no encontrada",
    not_found_link: "Volver al Inicio",
  },

  fr: {
    nav_courses: "Cours",
    nav_pricing: "Tarifs",
    nav_about: "À propos",
    nav_dashboard: "Tableau de bord",
    nav_login: "Se connecter",
    nav_signup: "S'inscrire",
    nav_logout: "Se déconnecter",

    hero_badge: "Apprenez des meilleurs — à votre rythme",
    hero_title_1: "Maîtrisez la Science et",
    hero_title_2: "la Technologie",
    hero_subtitle: "Du calcul à l'informatique quantique — des cours structurés conçus par des experts pour une compréhension réelle.",
    hero_cta: "Explorer les Cours",
    hero_pricing: "Voir les Tarifs",

    stat_courses: "Cours",
    stat_students: "Étudiants",
    stat_completion: "Taux de Complétion",
    stat_instructors: "Instructeurs Experts",

    popular_courses: "Cours Populaires",
    popular_subtitle: "Commencez à apprendre avec nos programmes les mieux notés",
    view_all: "Voir tout",
    browse_subject: "Parcourir par Sujet",
    browse_subject_subtitle: "Trouvez des cours dans la discipline qui vous passionne",
    cta_title: "Prêt à commencer à apprendre ?",
    cta_subtitle: "Rejoignez des milliers d'étudiants qui acquièrent de vraies compétences.",
    cta_button: "Commencer Gratuitement",

    subject_math: "Mathématiques",
    subject_physics: "Physique",
    subject_programming: "Programmation",
    subject_engineering: "Ingénierie",
    subject_data_science: "Science des Données",
    subject_technology: "Technologie",
    courses_count: "cours",

    courses_title: "Parcourir les Cours",
    courses_subtitle: "Explorez notre catalogue de cours dirigés par des experts en mathématiques, physique, programmation et plus.",
    courses_search: "Rechercher des cours...",

    course_not_found: "Cours non trouvé",
    back_to_courses: "Retour aux Cours",
    all_courses: "Tous les Cours",
    course_students: "étudiants",
    course_enroll: "S'inscrire Maintenant",
    course_wishlist: "Ajouter aux Favoris",
    course_onetime: "Achat unique · Accès à vie",
    course_description: "Un cours approfondi et structuré conçu pour vous amener des concepts fondamentaux aux applications avancées avec des exercices pratiques.",
    what_youll_learn: "Ce que vous apprendrez",
    highlight_1: "Accès à vie à tous les supports de cours",
    highlight_2: "Exercices pratiques et projets",
    highlight_3: "Certificat de complétion",
    highlight_4: "Accès au forum communautaire",
    highlight_5: "Ressources téléchargeables",

    pricing_title: "Tarifs Simples et Transparents",
    pricing_subtitle: "Choisissez le plan qui correspond à vos objectifs. Mettez à niveau, rétrogradez ou annulez à tout moment.",
    plan_free: "Gratuit",
    plan_pro: "Pro",
    plan_team: "Équipe",
    most_popular: "Le Plus Populaire",
    free_price: "0 €",
    pro_price: "19 €",
    team_price: "49 €",
    forever: "pour toujours",
    per_month: "/mois",
    plan_free_desc: "Commencez avec du contenu fondamental",
    plan_pro_desc: "Débloquez l'expérience d'apprentissage complète",
    plan_team_desc: "Pour les équipes et organisations",
    get_started: "Commencer",
    start_free_trial: "Essai Gratuit",
    contact_sales: "Contacter les Ventes",

    about_title: "À propos de Studyfy",
    about_subtitle: "Notre mission est de rendre l'éducation de niveau expert en science et technologie accessible à tous, partout.",
    our_story: "Notre Histoire",
    our_story_text: "Studyfy a été fondée par des éducateurs et des ingénieurs qui ont vu un fossé entre les connaissances académiques et l'apprentissage en ligne accessible. Nous apportons un contenu de calibre universitaire sur une plateforme moderne et autodirigée.",
    values_title: "Ce que Nous Défendons",
    value_quality: "Qualité Rigoureuse",
    value_quality_desc: "Chaque cours est revu par des experts pour garantir la précision et la profondeur.",
    value_clarity: "Clarté d'Abord",
    value_clarity_desc: "Des idées complexes expliquées clairement — sans jargon, juste une compréhension authentique.",
    value_practical: "Compétences Pratiques",
    value_practical_desc: "La théorie rencontre l'application avec des projets pratiques et la résolution de problèmes réels.",

    login_title: "Bon retour",
    login_subtitle: "Connectez-vous pour continuer à apprendre",
    login_button: "Se Connecter",
    login_no_account: "Vous n'avez pas de compte ?",
    login_signup_link: "S'inscrire",
    register_title: "Créez votre compte",
    register_subtitle: "Commencez à apprendre aujourd'hui — c'est gratuit",
    register_button: "Créer un Compte",
    register_has_account: "Vous avez déjà un compte ?",
    register_login_link: "Se connecter",
    label_email: "E-mail",
    label_password: "Mot de passe",
    label_name: "Nom complet",
    placeholder_email: "vous@exemple.com",
    placeholder_password: "••••••••",
    placeholder_name: "Jean Dupont",

    dash_welcome: "Bon retour",
    dash_subtitle: "Continuez là où vous vous êtes arrêté.",
    dash_enrolled: "Cours Inscrits",
    dash_hours: "Heures Étudiées",
    dash_certificates: "Certificats",
    dash_completion: "Complétion",
    dash_my_courses: "Mes Cours",
    dash_in_progress: "En cours",
    dash_no_courses: "Vous n'êtes inscrit à aucun cours.",
    dash_browse: "Parcourir les Cours",

    footer_desc: "Maîtrisez les mathématiques, la physique, la programmation et plus — du débutant à l'avancé.",
    footer_platform: "Plateforme",
    footer_browse_courses: "Parcourir les Cours",
    footer_subjects: "Sujets",
    footer_company: "Entreprise",
    footer_careers: "Carrières",
    footer_blog: "Blog",
    footer_privacy: "Politique de Confidentialité",
    footer_terms: "Conditions d'Utilisation",
    footer_rights: "Tous droits réservés.",

    loading: "Chargement...",
    error_generic: "Une erreur s'est produite. Veuillez réessayer.",

    not_found_title: "404",
    not_found_text: "Oups ! Page non trouvée",
    not_found_link: "Retour à l'Accueil",
  },

  de: {
    nav_courses: "Kurse",
    nav_pricing: "Preise",
    nav_about: "Über uns",
    nav_dashboard: "Dashboard",
    nav_login: "Anmelden",
    nav_signup: "Registrieren",
    nav_logout: "Abmelden",

    hero_badge: "Lerne von den Besten — in deinem eigenen Tempo",
    hero_title_1: "Meistere Wissenschaft &",
    hero_title_2: "Technologie",
    hero_subtitle: "Von Analysis bis Quantencomputing — strukturierte Kurse von Experten für echtes Verständnis.",
    hero_cta: "Kurse Entdecken",
    hero_pricing: "Preise Ansehen",

    stat_courses: "Kurse",
    stat_students: "Studierende",
    stat_completion: "Abschlussrate",
    stat_instructors: "Experten-Dozenten",

    popular_courses: "Beliebte Kurse",
    popular_subtitle: "Starte mit unseren bestbewerteten Programmen",
    view_all: "Alle anzeigen",
    browse_subject: "Nach Fach Durchsuchen",
    browse_subject_subtitle: "Finde Kurse in der Disziplin, die dich begeistert",
    cta_title: "Bereit zu lernen?",
    cta_subtitle: "Schließe dich Tausenden von Studierenden an, die echte Fähigkeiten aufbauen.",
    cta_button: "Kostenlos Starten",

    subject_math: "Mathematik",
    subject_physics: "Physik",
    subject_programming: "Programmierung",
    subject_engineering: "Ingenieurwesen",
    subject_data_science: "Data Science",
    subject_technology: "Technologie",
    courses_count: "Kurse",

    courses_title: "Kurse Durchsuchen",
    courses_subtitle: "Entdecke unseren Katalog an Expertenkursen in Mathematik, Physik, Programmierung und mehr.",
    courses_search: "Kurse suchen...",

    course_not_found: "Kurs nicht gefunden",
    back_to_courses: "Zurück zu Kursen",
    all_courses: "Alle Kurse",
    course_students: "Studierende",
    course_enroll: "Jetzt Einschreiben",
    course_wishlist: "Zur Wunschliste",
    course_onetime: "Einmaliger Kauf · Lebenslanger Zugang",
    course_description: "Ein tiefgehender, strukturierter Kurs, der dich von grundlegenden Konzepten zu fortgeschrittenen Anwendungen mit praktischen Übungen führt.",
    what_youll_learn: "Was du lernst",
    highlight_1: "Lebenslanger Zugang zu allen Kursmaterialien",
    highlight_2: "Praktische Übungen und Projekte",
    highlight_3: "Abschlusszertifikat",
    highlight_4: "Zugang zum Community-Forum",
    highlight_5: "Herunterladbare Ressourcen",

    pricing_title: "Einfache, Transparente Preise",
    pricing_subtitle: "Wähle den Plan, der zu deinen Lernzielen passt. Jederzeit upgraden, downgraden oder kündigen.",
    plan_free: "Kostenlos",
    plan_pro: "Pro",
    plan_team: "Team",
    most_popular: "Beliebteste",
    free_price: "0 €",
    pro_price: "19 €",
    team_price: "49 €",
    forever: "für immer",
    per_month: "/Monat",
    plan_free_desc: "Starte mit grundlegenden Inhalten",
    plan_pro_desc: "Schalte das volle Lernerlebnis frei",
    plan_team_desc: "Für Teams und Organisationen",
    get_started: "Loslegen",
    start_free_trial: "Kostenlose Testversion",
    contact_sales: "Vertrieb Kontaktieren",

    about_title: "Über Studyfy",
    about_subtitle: "Unsere Mission ist es, Expertenwissen in Wissenschaft und Technologie für jeden zugänglich zu machen.",
    our_story: "Unsere Geschichte",
    our_story_text: "Studyfy wurde von Pädagogen und Ingenieuren gegründet, die eine Lücke zwischen akademischem Wissen und zugänglichem Online-Lernen sahen. Wir bringen Inhalte auf Universitätsniveau auf eine moderne, selbstgesteuerte Plattform.",
    values_title: "Wofür wir stehen",
    value_quality: "Strenge Qualität",
    value_quality_desc: "Jeder Kurs wird von Fachexperten überprüft, um Genauigkeit und Tiefe zu gewährleisten.",
    value_clarity: "Klarheit zuerst",
    value_clarity_desc: "Komplexe Ideen klar erklärt — kein Fachjargon, echtes Verständnis.",
    value_practical: "Praktische Fähigkeiten",
    value_practical_desc: "Theorie trifft Praxis mit praktischen Projekten und realer Problemlösung.",

    login_title: "Willkommen zurück",
    login_subtitle: "Melde dich an, um weiterzulernen",
    login_button: "Anmelden",
    login_no_account: "Noch kein Konto?",
    login_signup_link: "Registrieren",
    register_title: "Konto erstellen",
    register_subtitle: "Starte heute mit dem Lernen — kostenlos",
    register_button: "Konto Erstellen",
    register_has_account: "Schon ein Konto?",
    register_login_link: "Anmelden",
    label_email: "E-Mail",
    label_password: "Passwort",
    label_name: "Vollständiger Name",
    placeholder_email: "du@beispiel.de",
    placeholder_password: "••••••••",
    placeholder_name: "Max Mustermann",

    dash_welcome: "Willkommen zurück",
    dash_subtitle: "Mach weiter, wo du aufgehört hast.",
    dash_enrolled: "Eingeschriebene Kurse",
    dash_hours: "Gelernte Stunden",
    dash_certificates: "Zertifikate",
    dash_completion: "Abschluss",
    dash_my_courses: "Meine Kurse",
    dash_in_progress: "In Bearbeitung",
    dash_no_courses: "Du hast dich noch in keinen Kurs eingeschrieben.",
    dash_browse: "Kurse Durchsuchen",

    footer_desc: "Meistere Mathematik, Physik, Programmierung und mehr — vom Anfänger bis zum Fortgeschrittenen.",
    footer_platform: "Plattform",
    footer_browse_courses: "Kurse Durchsuchen",
    footer_subjects: "Fächer",
    footer_company: "Unternehmen",
    footer_careers: "Karriere",
    footer_blog: "Blog",
    footer_privacy: "Datenschutzrichtlinie",
    footer_terms: "Nutzungsbedingungen",
    footer_rights: "Alle Rechte vorbehalten.",

    loading: "Laden...",
    error_generic: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",

    not_found_title: "404",
    not_found_text: "Ups! Seite nicht gefunden",
    not_found_link: "Zurück zur Startseite",
  },

  ka: {
    nav_courses: "კურსები",
    nav_pricing: "ფასები",
    nav_about: "შესახებ",
    nav_dashboard: "პანელი",
    nav_login: "შესვლა",
    nav_signup: "რეგისტრაცია",
    nav_logout: "გასვლა",

    hero_badge: "ისწავლეთ საუკეთესოებისგან — საკუთარი ტემპით",
    hero_title_1: "დაეუფლეთ მეცნიერებას და",
    hero_title_2: "ტექნოლოგიას",
    hero_subtitle: "კალკულუსიდან კვანტურ კომპიუტინგამდე — ექსპერტების მიერ შექმნილი სტრუქტურირებული კურსები.",
    hero_cta: "კურსების ნახვა",
    hero_pricing: "ფასების ნახვა",

    stat_courses: "კურსი",
    stat_students: "სტუდენტი",
    stat_completion: "დასრულების მაჩვენებელი",
    stat_instructors: "ექსპერტი ინსტრუქტორი",

    popular_courses: "პოპულარული კურსები",
    popular_subtitle: "დაიწყეთ სწავლა ჩვენი საუკეთესო პროგრამებით",
    view_all: "ყველას ნახვა",
    browse_subject: "საგნის მიხედვით",
    browse_subject_subtitle: "იპოვეთ კურსები თქვენთვის საინტერესო დისციპლინაში",
    cta_title: "მზად ხართ სწავლისთვის?",
    cta_subtitle: "შეუერთდით ათასობით სტუდენტს, რომლებიც ნამდვილ უნარებს ავითარებენ.",
    cta_button: "დაიწყეთ უფასოდ",

    subject_math: "მათემატიკა",
    subject_physics: "ფიზიკა",
    subject_programming: "პროგრამირება",
    subject_engineering: "ინჟინერია",
    subject_data_science: "მონაცემთა მეცნიერება",
    subject_technology: "ტექნოლოგია",
    courses_count: "კურსი",

    courses_title: "კურსების ნახვა",
    courses_subtitle: "გამოიკვლიეთ ჩვენი კატალოგი ექსპერტების მიერ წარმართული კურსებით.",
    courses_search: "კურსების ძებნა...",

    course_not_found: "კურსი ვერ მოიძებნა",
    back_to_courses: "კურსებზე დაბრუნება",
    all_courses: "ყველა კურსი",
    course_students: "სტუდენტი",
    course_enroll: "ჩაწერა",
    course_wishlist: "სურვილების სიაში",
    course_onetime: "ერთჯერადი შეძენა · სამუდამო წვდომა",
    course_description: "სიღრმისეული, სტრუქტურირებული კურსი, რომელიც საფუძვლიანი კონცეფციებიდან მოწინავე გამოყენებამდე მიგიყვანთ.",
    what_youll_learn: "რას ისწავლით",
    highlight_1: "სამუდამო წვდომა ყველა მასალაზე",
    highlight_2: "პრაქტიკული სავარჯიშოები და პროექტები",
    highlight_3: "დასრულების სერტიფიკატი",
    highlight_4: "საზოგადოების ფორუმზე წვდომა",
    highlight_5: "ჩამოსატვირთი რესურსები",

    pricing_title: "მარტივი, გამჭვირვალე ფასები",
    pricing_subtitle: "აირჩიეთ თქვენთვის შესაფერისი გეგმა. განაახლეთ ან გააუქმეთ ნებისმიერ დროს.",
    plan_free: "უფასო",
    plan_pro: "პრო",
    plan_team: "გუნდი",
    most_popular: "ყველაზე პოპულარული",
    free_price: "$0",
    pro_price: "$19",
    team_price: "$49",
    forever: "სამუდამოდ",
    per_month: "/თვე",
    plan_free_desc: "დაიწყეთ საფუძვლიანი კონტენტით",
    plan_pro_desc: "გახსენით სრული სასწავლო გამოცდილება",
    plan_team_desc: "გუნდებისა და ორგანიზაციებისთვის",
    get_started: "დაწყება",
    start_free_trial: "უფასო საცდელი",
    contact_sales: "გაყიდვებთან კონტაქტი",

    about_title: "Studyfy-ს შესახებ",
    about_subtitle: "ჩვენი მისიაა ექსპერტულ დონის განათლება მეცნიერებასა და ტექნოლოგიაში ყველასთვის ხელმისაწვდომი გავხადოთ.",
    our_story: "ჩვენი ისტორია",
    our_story_text: "Studyfy დაარსდა პედაგოგებისა და ინჟინრების მიერ, რომლებმაც დაინახეს უფსკრული აკადემიურ ცოდნასა და ხელმისაწვდომ ონლაინ სწავლებას შორის.",
    values_title: "რას ვიცავთ",
    value_quality: "მკაცრი ხარისხი",
    value_quality_desc: "ყველა კურსი განიხილება ექსპერტების მიერ სიზუსტისა და სიღრმის უზრუნველსაყოფად.",
    value_clarity: "სიცხადე პირველ რიგში",
    value_clarity_desc: "კომპლექსური იდეები ნათლად ახსნილი — არანაირი ჟარგონი.",
    value_practical: "პრაქტიკული უნარები",
    value_practical_desc: "თეორია ხვდება პრაქტიკას პრაქტიკული პროექტებითა და რეალური პრობლემების გადაჭრით.",

    login_title: "კეთილი იყოს თქვენი დაბრუნება",
    login_subtitle: "შედით სწავლის გასაგრძელებლად",
    login_button: "შესვლა",
    login_no_account: "არ გაქვთ ანგარიში?",
    login_signup_link: "რეგისტრაცია",
    register_title: "შექმენით ანგარიში",
    register_subtitle: "დაიწყეთ სწავლა დღეს — უფასოდ",
    register_button: "ანგარიშის შექმნა",
    register_has_account: "უკვე გაქვთ ანგარიში?",
    register_login_link: "შესვლა",
    label_email: "ელ. ფოსტა",
    label_password: "პაროლი",
    label_name: "სრული სახელი",
    placeholder_email: "you@example.com",
    placeholder_password: "••••••••",
    placeholder_name: "გიორგი გიორგაძე",

    dash_welcome: "კეთილი იყოს თქვენი დაბრუნება",
    dash_subtitle: "გააგრძელეთ იქიდან, სადაც შეჩერდით.",
    dash_enrolled: "ჩაწერილი კურსები",
    dash_hours: "ნასწავლი საათები",
    dash_certificates: "სერტიფიკატები",
    dash_completion: "დასრულება",
    dash_my_courses: "ჩემი კურსები",
    dash_in_progress: "მიმდინარე",
    dash_no_courses: "ჯერ არცერთ კურსზე არ ხართ ჩაწერილი.",
    dash_browse: "კურსების ნახვა",

    footer_desc: "დაეუფლეთ მათემატიკას, ფიზიკას, პროგრამირებას და სხვას — დამწყებიდან მოწინავემდე.",
    footer_platform: "პლატფორმა",
    footer_browse_courses: "კურსების ნახვა",
    footer_subjects: "საგნები",
    footer_company: "კომპანია",
    footer_careers: "კარიერა",
    footer_blog: "ბლოგი",
    footer_privacy: "კონფიდენციალურობის პოლიტიკა",
    footer_terms: "მომსახურების პირობები",
    footer_rights: "ყველა უფლება დაცულია.",

    loading: "იტვირთება...",
    error_generic: "რაღაც შეცდომა მოხდა. გთხოვთ სცადოთ თავიდან.",

    not_found_title: "404",
    not_found_text: "უპს! გვერდი ვერ მოიძებნა",
    not_found_link: "მთავარზე დაბრუნება",
  },
};

export default translations;
