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
  nav_subjects: string;

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
  subject_astronomy: string;
  subject_chemistry: string;
  subject_math_desc: string;
  subject_physics_desc: string;
  subject_programming_desc: string;
  subject_engineering_desc: string;
  subject_data_science_desc: string;
  subject_technology_desc: string;
  subject_astronomy_desc: string;
  subject_chemistry_desc: string;
  courses_count: string;
  subjects_title: string;
  subjects_subtitle: string;

  // Courses page
  courses_title: string;
  courses_subtitle: string;
  courses_search: string;
  courses_all_subjects: string;

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
  dash_trial_active: string;
  dash_trial_days: string;

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

  // Theme
  theme_light: string;
  theme_dark: string;
  theme_system: string;

  // Chat
  chat_greeting: string;
  chat_placeholder_response: string;
  chat_online: string;
  chat_input_placeholder: string;
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
    nav_subjects: "Subjects",

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
    subject_programming: "Programming & CS",
    subject_engineering: "Engineering",
    subject_data_science: "Data Science & AI",
    subject_technology: "Technology & Innovation",
    subject_astronomy: "Space & Astronomy",
    subject_chemistry: "Chemistry",
    subject_math_desc: "Calculus, algebra, statistics, and discrete math",
    subject_physics_desc: "Classical mechanics, quantum physics, and thermodynamics",
    subject_programming_desc: "Python, web development, algorithms, and systems",
    subject_engineering_desc: "Civil, mechanical, electrical, and software engineering",
    subject_data_science_desc: "Machine learning, deep learning, and analytics",
    subject_technology_desc: "Blockchain, IoT, cloud computing, and cybersecurity",
    subject_astronomy_desc: "Astrophysics, cosmology, and space exploration",
    subject_chemistry_desc: "Organic, inorganic, and physical chemistry",
    courses_count: "courses",
    subjects_title: "All Subjects",
    subjects_subtitle: "Explore structured learning paths across science, technology, and engineering disciplines.",

    courses_title: "Browse Courses",
    courses_subtitle: "Explore our catalog of expert-led courses in mathematics, physics, programming, and more.",
    courses_search: "Search courses...",
    courses_all_subjects: "All Subjects",

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
    dash_trial_active: "Your free learning period is active",
    dash_trial_days: "days remaining",

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

    theme_light: "Light",
    theme_dark: "Dark",
    theme_system: "System",

    chat_greeting: "Hi! 👋 I'm Studyfy Assistant. I can help explain concepts step-by-step, recommend courses, or answer questions about the platform.",
    chat_placeholder_response: "Thanks for your message! AI integration is coming soon. In the meantime, check out our courses catalog for great learning resources.",
    chat_online: "Online",
    chat_input_placeholder: "Ask me anything...",
  },

  es: {
    nav_courses: "Cursos",
    nav_pricing: "Precios",
    nav_about: "Acerca de",
    nav_dashboard: "Panel",
    nav_login: "Iniciar sesión",
    nav_signup: "Registrarse",
    nav_logout: "Cerrar sesión",
    nav_subjects: "Materias",

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
    subject_programming: "Programación e Informática",
    subject_engineering: "Ingeniería",
    subject_data_science: "Ciencia de Datos e IA",
    subject_technology: "Tecnología e Innovación",
    subject_astronomy: "Espacio y Astronomía",
    subject_chemistry: "Química",
    subject_math_desc: "Cálculo, álgebra, estadística y matemáticas discretas",
    subject_physics_desc: "Mecánica clásica, física cuántica y termodinámica",
    subject_programming_desc: "Python, desarrollo web, algoritmos y sistemas",
    subject_engineering_desc: "Ingeniería civil, mecánica, eléctrica y de software",
    subject_data_science_desc: "Aprendizaje automático, deep learning y análisis",
    subject_technology_desc: "Blockchain, IoT, computación en la nube y ciberseguridad",
    subject_astronomy_desc: "Astrofísica, cosmología y exploración espacial",
    subject_chemistry_desc: "Química orgánica, inorgánica y física",
    courses_count: "cursos",
    subjects_title: "Todas las Materias",
    subjects_subtitle: "Explora rutas de aprendizaje estructuradas en ciencia, tecnología e ingeniería.",

    courses_title: "Explorar Cursos",
    courses_subtitle: "Explora nuestro catálogo de cursos dirigidos por expertos en matemáticas, física, programación y más.",
    courses_search: "Buscar cursos...",
    courses_all_subjects: "Todas las Materias",

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
    pricing_subtitle: "Elige el plan que se adapte a tus objetivos de aprendizaje.",
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
    about_subtitle: "Nuestra misión es hacer que la educación de nivel experto en ciencia y tecnología sea accesible para todos.",
    our_story: "Nuestra Historia",
    our_story_text: "Studyfy fue fundada por educadores e ingenieros que vieron una brecha entre el conocimiento académico y el aprendizaje en línea accesible.",
    values_title: "Lo que Defendemos",
    value_quality: "Calidad Rigurosa",
    value_quality_desc: "Cada curso es revisado por pares expertos para garantizar precisión y profundidad.",
    value_clarity: "Claridad Primero",
    value_clarity_desc: "Ideas complejas explicadas con claridad — sin jerga, solo comprensión genuina.",
    value_practical: "Habilidades Prácticas",
    value_practical_desc: "La teoría se encuentra con la aplicación con proyectos prácticos.",

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
    dash_trial_active: "Tu período de aprendizaje gratuito está activo",
    dash_trial_days: "días restantes",

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

    theme_light: "Claro",
    theme_dark: "Oscuro",
    theme_system: "Sistema",

    chat_greeting: "¡Hola! 👋 Soy el Asistente Studyfy. Puedo ayudarte a explicar conceptos paso a paso.",
    chat_placeholder_response: "¡Gracias por tu mensaje! La integración de IA llegará pronto.",
    chat_online: "En línea",
    chat_input_placeholder: "Pregúntame lo que quieras...",
  },

  fr: {
    nav_courses: "Cours",
    nav_pricing: "Tarifs",
    nav_about: "À propos",
    nav_dashboard: "Tableau de bord",
    nav_login: "Se connecter",
    nav_signup: "S'inscrire",
    nav_logout: "Se déconnecter",
    nav_subjects: "Matières",

    hero_badge: "Apprenez des meilleurs — à votre rythme",
    hero_title_1: "Maîtrisez la Science et",
    hero_title_2: "la Technologie",
    hero_subtitle: "Du calcul à l'informatique quantique — des cours structurés conçus par des experts.",
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
    subject_programming: "Programmation et Informatique",
    subject_engineering: "Ingénierie",
    subject_data_science: "Science des Données et IA",
    subject_technology: "Technologie et Innovation",
    subject_astronomy: "Espace et Astronomie",
    subject_chemistry: "Chimie",
    subject_math_desc: "Calcul, algèbre, statistiques et mathématiques discrètes",
    subject_physics_desc: "Mécanique classique, physique quantique et thermodynamique",
    subject_programming_desc: "Python, développement web, algorithmes et systèmes",
    subject_engineering_desc: "Génie civil, mécanique, électrique et logiciel",
    subject_data_science_desc: "Apprentissage automatique, deep learning et analytique",
    subject_technology_desc: "Blockchain, IoT, cloud computing et cybersécurité",
    subject_astronomy_desc: "Astrophysique, cosmologie et exploration spatiale",
    subject_chemistry_desc: "Chimie organique, inorganique et physique",
    courses_count: "cours",
    subjects_title: "Toutes les Matières",
    subjects_subtitle: "Explorez des parcours d'apprentissage structurés en science, technologie et ingénierie.",

    courses_title: "Parcourir les Cours",
    courses_subtitle: "Explorez notre catalogue de cours dirigés par des experts.",
    courses_search: "Rechercher des cours...",
    courses_all_subjects: "Toutes les Matières",

    course_not_found: "Cours non trouvé",
    back_to_courses: "Retour aux Cours",
    all_courses: "Tous les Cours",
    course_students: "étudiants",
    course_enroll: "S'inscrire Maintenant",
    course_wishlist: "Ajouter aux Favoris",
    course_onetime: "Achat unique · Accès à vie",
    course_description: "Un cours approfondi et structuré conçu pour vous amener des concepts fondamentaux aux applications avancées.",
    what_youll_learn: "Ce que vous apprendrez",
    highlight_1: "Accès à vie à tous les supports de cours",
    highlight_2: "Exercices pratiques et projets",
    highlight_3: "Certificat de complétion",
    highlight_4: "Accès au forum communautaire",
    highlight_5: "Ressources téléchargeables",

    pricing_title: "Tarifs Simples et Transparents",
    pricing_subtitle: "Choisissez le plan qui correspond à vos objectifs.",
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
    about_subtitle: "Notre mission est de rendre l'éducation de niveau expert accessible à tous.",
    our_story: "Notre Histoire",
    our_story_text: "Studyfy a été fondée par des éducateurs et des ingénieurs qui ont vu un fossé entre les connaissances académiques et l'apprentissage en ligne accessible.",
    values_title: "Ce que Nous Défendons",
    value_quality: "Qualité Rigoureuse",
    value_quality_desc: "Chaque cours est revu par des experts pour garantir la précision.",
    value_clarity: "Clarté d'Abord",
    value_clarity_desc: "Des idées complexes expliquées clairement — sans jargon.",
    value_practical: "Compétences Pratiques",
    value_practical_desc: "La théorie rencontre l'application avec des projets pratiques.",

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
    dash_trial_active: "Votre période d'apprentissage gratuit est active",
    dash_trial_days: "jours restants",

    footer_desc: "Maîtrisez les mathématiques, la physique, la programmation et plus.",
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

    theme_light: "Clair",
    theme_dark: "Sombre",
    theme_system: "Système",

    chat_greeting: "Bonjour ! 👋 Je suis l'Assistant Studyfy. Je peux vous aider à comprendre des concepts étape par étape.",
    chat_placeholder_response: "Merci pour votre message ! L'intégration IA arrive bientôt.",
    chat_online: "En ligne",
    chat_input_placeholder: "Posez-moi une question...",
  },

  de: {
    nav_courses: "Kurse",
    nav_pricing: "Preise",
    nav_about: "Über uns",
    nav_dashboard: "Dashboard",
    nav_login: "Anmelden",
    nav_signup: "Registrieren",
    nav_logout: "Abmelden",
    nav_subjects: "Fächer",

    hero_badge: "Lerne von den Besten — in deinem eigenen Tempo",
    hero_title_1: "Meistere Wissenschaft &",
    hero_title_2: "Technologie",
    hero_subtitle: "Von Analysis bis Quantencomputing — strukturierte Kurse von Experten.",
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
    cta_subtitle: "Schließe dich Tausenden von Studierenden an.",
    cta_button: "Kostenlos Starten",

    subject_math: "Mathematik",
    subject_physics: "Physik",
    subject_programming: "Programmierung & Informatik",
    subject_engineering: "Ingenieurwesen",
    subject_data_science: "Data Science & KI",
    subject_technology: "Technologie & Innovation",
    subject_astronomy: "Weltraum & Astronomie",
    subject_chemistry: "Chemie",
    subject_math_desc: "Analysis, Algebra, Statistik und diskrete Mathematik",
    subject_physics_desc: "Klassische Mechanik, Quantenphysik und Thermodynamik",
    subject_programming_desc: "Python, Webentwicklung, Algorithmen und Systeme",
    subject_engineering_desc: "Bau-, Maschinen-, Elektro- und Softwareingenieurwesen",
    subject_data_science_desc: "Maschinelles Lernen, Deep Learning und Analytik",
    subject_technology_desc: "Blockchain, IoT, Cloud Computing und Cybersicherheit",
    subject_astronomy_desc: "Astrophysik, Kosmologie und Weltraumforschung",
    subject_chemistry_desc: "Organische, anorganische und physikalische Chemie",
    courses_count: "Kurse",
    subjects_title: "Alle Fächer",
    subjects_subtitle: "Entdecke strukturierte Lernpfade in Wissenschaft, Technologie und Ingenieurwesen.",

    courses_title: "Kurse Durchsuchen",
    courses_subtitle: "Entdecke unseren Katalog an Expertenkursen.",
    courses_search: "Kurse suchen...",
    courses_all_subjects: "Alle Fächer",

    course_not_found: "Kurs nicht gefunden",
    back_to_courses: "Zurück zu Kursen",
    all_courses: "Alle Kurse",
    course_students: "Studierende",
    course_enroll: "Jetzt Einschreiben",
    course_wishlist: "Zur Wunschliste",
    course_onetime: "Einmaliger Kauf · Lebenslanger Zugang",
    course_description: "Ein tiefgehender, strukturierter Kurs mit praktischen Übungen.",
    what_youll_learn: "Was du lernst",
    highlight_1: "Lebenslanger Zugang zu allen Kursmaterialien",
    highlight_2: "Praktische Übungen und Projekte",
    highlight_3: "Abschlusszertifikat",
    highlight_4: "Zugang zum Community-Forum",
    highlight_5: "Herunterladbare Ressourcen",

    pricing_title: "Einfache, Transparente Preise",
    pricing_subtitle: "Wähle den Plan, der zu deinen Lernzielen passt.",
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
    about_subtitle: "Unsere Mission ist es, Expertenwissen für jeden zugänglich zu machen.",
    our_story: "Unsere Geschichte",
    our_story_text: "Studyfy wurde von Pädagogen und Ingenieuren gegründet, die eine Lücke zwischen akademischem Wissen und zugänglichem Online-Lernen sahen.",
    values_title: "Wofür wir stehen",
    value_quality: "Strenge Qualität",
    value_quality_desc: "Jeder Kurs wird von Fachexperten überprüft.",
    value_clarity: "Klarheit zuerst",
    value_clarity_desc: "Komplexe Ideen klar erklärt — kein Fachjargon.",
    value_practical: "Praktische Fähigkeiten",
    value_practical_desc: "Theorie trifft Praxis mit praktischen Projekten.",

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
    dash_trial_active: "Deine kostenlose Lernphase ist aktiv",
    dash_trial_days: "Tage verbleibend",

    footer_desc: "Meistere Mathematik, Physik, Programmierung und mehr.",
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

    theme_light: "Hell",
    theme_dark: "Dunkel",
    theme_system: "System",

    chat_greeting: "Hallo! 👋 Ich bin der Studyfy-Assistent. Ich kann Konzepte Schritt für Schritt erklären.",
    chat_placeholder_response: "Danke für deine Nachricht! KI-Integration kommt bald.",
    chat_online: "Online",
    chat_input_placeholder: "Frag mich etwas...",
  },

  ka: {
    nav_courses: "კურსები",
    nav_pricing: "ფასები",
    nav_about: "შესახებ",
    nav_dashboard: "პანელი",
    nav_login: "შესვლა",
    nav_signup: "რეგისტრაცია",
    nav_logout: "გასვლა",
    nav_subjects: "საგნები",

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
    cta_subtitle: "შეუერთდით ათასობით სტუდენტს.",
    cta_button: "დაიწყეთ უფასოდ",

    subject_math: "მათემატიკა",
    subject_physics: "ფიზიკა",
    subject_programming: "პროგრამირება და ინფორმატიკა",
    subject_engineering: "ინჟინერია",
    subject_data_science: "მონაცემთა მეცნიერება და AI",
    subject_technology: "ტექნოლოგია და ინოვაცია",
    subject_astronomy: "კოსმოსი და ასტრონომია",
    subject_chemistry: "ქიმია",
    subject_math_desc: "კალკულუსი, ალგებრა, სტატისტიკა და დისკრეტული მათემატიკა",
    subject_physics_desc: "კლასიკური მექანიკა, კვანტური ფიზიკა და თერმოდინამიკა",
    subject_programming_desc: "Python, ვებ-განვითარება, ალგორითმები და სისტემები",
    subject_engineering_desc: "სამოქალაქო, მექანიკური, ელექტრო და პროგრამული ინჟინერია",
    subject_data_science_desc: "მანქანური სწავლება, ღრმა სწავლება და ანალიტიკა",
    subject_technology_desc: "ბლოკჩეინი, IoT, ღრუბლოვანი გამოთვლა და კიბერუსაფრთხოება",
    subject_astronomy_desc: "ასტროფიზიკა, კოსმოლოგია და კოსმოსის კვლევა",
    subject_chemistry_desc: "ორგანული, არაორგანული და ფიზიკური ქიმია",
    courses_count: "კურსი",
    subjects_title: "ყველა საგანი",
    subjects_subtitle: "გამოიკვლიეთ სტრუქტურირებული სასწავლო მარშრუტები მეცნიერებაში, ტექნოლოგიასა და ინჟინერიაში.",

    courses_title: "კურსების ნახვა",
    courses_subtitle: "გამოიკვლიეთ ჩვენი კატალოგი ექსპერტების მიერ წარმართული კურსებით.",
    courses_search: "კურსების ძებნა...",
    courses_all_subjects: "ყველა საგანი",

    course_not_found: "კურსი ვერ მოიძებნა",
    back_to_courses: "კურსებზე დაბრუნება",
    all_courses: "ყველა კურსი",
    course_students: "სტუდენტი",
    course_enroll: "ჩაწერა",
    course_wishlist: "სურვილების სიაში",
    course_onetime: "ერთჯერადი შეძენა · სამუდამო წვდომა",
    course_description: "სიღრმისეული, სტრუქტურირებული კურსი პრაქტიკული სავარჯიშოებით.",
    what_youll_learn: "რას ისწავლით",
    highlight_1: "სამუდამო წვდომა ყველა მასალაზე",
    highlight_2: "პრაქტიკული სავარჯიშოები და პროექტები",
    highlight_3: "დასრულების სერტიფიკატი",
    highlight_4: "საზოგადოების ფორუმზე წვდომა",
    highlight_5: "ჩამოსატვირთი რესურსები",

    pricing_title: "მარტივი, გამჭვირვალე ფასები",
    pricing_subtitle: "აირჩიეთ თქვენთვის შესაფერისი გეგმა.",
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
    about_subtitle: "ჩვენი მისიაა ექსპერტულ დონის განათლება ყველასთვის ხელმისაწვდომი გავხადოთ.",
    our_story: "ჩვენი ისტორია",
    our_story_text: "Studyfy დაარსდა პედაგოგებისა და ინჟინრების მიერ.",
    values_title: "რას ვიცავთ",
    value_quality: "მკაცრი ხარისხი",
    value_quality_desc: "ყველა კურსი განიხილება ექსპერტების მიერ.",
    value_clarity: "სიცხადე პირველ რიგში",
    value_clarity_desc: "კომპლექსური იდეები ნათლად ახსნილი.",
    value_practical: "პრაქტიკული უნარები",
    value_practical_desc: "თეორია ხვდება პრაქტიკას პრაქტიკული პროექტებით.",

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
    dash_trial_active: "თქვენი უფასო სწავლის პერიოდი აქტიურია",
    dash_trial_days: "დღე დარჩენილია",

    footer_desc: "დაეუფლეთ მათემატიკას, ფიზიკას, პროგრამირებას და სხვას.",
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

    theme_light: "ნათელი",
    theme_dark: "მუქი",
    theme_system: "სისტემური",

    chat_greeting: "გამარჯობა! 👋 მე ვარ Studyfy ასისტენტი. შემიძლია კონცეფციების ახსნაში დაგეხმაროთ.",
    chat_placeholder_response: "მადლობა შეტყობინებისთვის! AI ინტეგრაცია მალე მოვა.",
    chat_online: "ონლაინ",
    chat_input_placeholder: "მკითხეთ რაიმე...",
  },
};

export default translations;
