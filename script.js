// ===========================
// TOGGLE LANGUAGE MENU
// ===========================
function toggleLangMenu() {
  document.getElementById('lang-menu')?.classList.toggle('show');
}

window.addEventListener('click', function(e) {
  if (!e.target.closest('.language-dropdown')) {
    document.getElementById('lang-menu')?.classList.remove('show');
  }
});

// ===========================
// TOGGLE HAMBURGER MENU
// ===========================
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// ===========================
// TRANSLATIONS
// ===========================
const translations = {
  en: {
    intro_p1: "Hello, I'm",
    intro_title: "Abolfazl Shadrouh",
    intro_p2: "Full Stack Developer",
    about_title: "About Me",
    about_p1: "Get To Know More",
    exp_title: "Experience",
    exp_p1: "Explore My",
    projects_title: "Projects",
    projects_p1: "Browse My Recent",
    contact_title: "Contact Me",
    contact_p1: "Get in Touch",
    footer_en: "Copyright © 2025 Abolfazl Shadrouh. All Rights Reserved.",
    about_en: "About",
    about_fa: "About",
    about_fa_m: "About",
    experience_fa: "Experience",
    projects_fa: "Projects",
    contact_fa: "Contact",
    button1_fa: "Resume",
    button2_fa: "Contact Info",
    experience_fa_m: "Experience",
    projects_fa_m: "Projects",
    contact_fa_m: "Contact",
    experience_fa1: "Experience",
    experience_fa2: "4+ years Full Stack Developer",
    education: "Education",
    education2: "Programming degree from Harvard University",
    about_title1: "a web developer and programmer specializing in modern, optimized website design and development. I started my journey in programming in 2022, driven by a strong passion for learning and creating engaging user experiences. My main expertise lies in front-end development using technologies such as HTML, CSS, JavaScript, and frameworks like React.js. I also have experience with back-end development, particularly with languages ​​like PHP or Node.js and databases such as MySQL and MongoDB. In every project, I strive to prioritize user needs and deliver solutions that are not only visually appealing but also technically solid, fast, and scalable. My goal is to build websites that not only work flawlessly but also feel great to use.If you're interested in collaboration, consulting, or project inquiries, feel free to reach out.",
    experience_fa_sub: "Frontend skills",
    experience_fa_sub1: "Backend skills",
    view_fa: "View",
    about_fa_a: "About",
    project_1: "Project One",
    project_2: "Project Two",
    project_3: "Project Three",
  },
  fa: {
    intro_p1: "سلام، اسم من",
    intro_title: "ابوالفضل شادروح",
    intro_p2: "برنامه‌نویس وبسایت",
    about_title: "درباره من",
    about_p1: "بیشتر آشنا شوید",
    exp_title: "تجربه‌ها",
    exp_p1: "تجربه‌های من",
    projects_title: "پروژه‌ها",
    projects_p1: "پروژه‌های اخیر من",
    contact_title: "ارتباط با من",
    contact_p1: "در تماس باشید",
    footer_en: "کپی رایت © 2025 تمام حقوق مادی و معنوی این وب سایت نیز متعلق به ابوالفضل شادروح می باشد",
    about_en: "درباره",
    about_fa: "درباره",
    about_fa_m: "درباره",
    experience_fa: "تجربه‌ها",
    projects_fa: "پروژه‌ها",
    contact_fa: "تماس",
    button1_fa: "رزومه",
    button2_fa: "اطلاعات تماس",
    experience_fa_m: "تجربه‌ها",
    projects_fa_m: "پروژه‌ها",
    contact_fa_m: "تماس",
    experience_fa1: "تجربه",
    experience_fa2: "بیش از 4 سال طراحی و توسعه وب",
    education: "مدارک",
    education2: "مدرک برنامه نویسی از دانشگاه هاروارد",
    about_title1: "من یک توسعه دهنده وب و برنامه نویس متخصص در طراحی و توسعه وب سایت مدرن و بهینه هستم. من کار خود را در برنامه نویسی از سال 2022 آغاز کردم و سعی کردم با اشتیاق شدید به یادگیری انواع زبان های دنیای برنامه نویسی بپردازم  و یک تجربه بسیار جذاب برای کابران ایجاد کنم. در هر پروژه، من تلاش می‌کنم نیازهای کاربر را اولویت‌بندی کنم و راه‌حل‌هایی ارائه کنم که نه تنها از نظر بصری جذاب باشند، بلکه از نظر فنی قوی، سریع و مقیاس‌پذیر باشند. هدف من ساختن وب سایت هایی است که نه تنها بی عیب و نقص کار می کنند، بلکه استفاده از آنها بسیار آسان و جذاب است. اگر به مشاوره یا درخواست پروژه علاقه مند هستید، تماس بگیرید",
    experience_fa_sub: "Frontend مهارت‌های",
    experience_fa_sub1: "Backend مهارت‌های",
    view_fa: "مشاهده",
    about_fa_a: "درباره",
    project_1: "پروژه اول",
    project_2: "پروژه دوم",
    project_3: "پروژه سوم",
  }
};

function setLanguage(lang) {
  localStorage.setItem('language', lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  const map = {
    "intro-p1": t.intro_p1,
    "intro-title": t.intro_title,
    "intro-p2": t.intro_p2,
    "about-title": t.about_title,
    "about-p1": t.about_p1,
    "exp-title": t.exp_title,
    "exp-p1": t.exp_p1,
    "projects-title": t.projects_title,
    "projects-p1": t.projects_p1,
    "contact-title": t.contact_title,
    "contact-p1": t.contact_p1,
    "footer-en": t.footer_en,
    "about-en": t.about_en,
    "about-fa": t.about_fa,
    "about-fa-m": t.about_fa_m,
    "experience-fa": t.experience_fa,
    "projects-fa": t.projects_fa,
    "contact-fa": t.contact_fa,
    "button1-fa": t.button1_fa,
    "button2-fa": t.button2_fa,
    "experience-fa-m": t.experience_fa_m,
    "projects-fa-m": t.projects_fa_m,
    "contact-fa-m": t.contact_fa_m,
    "experience-fa1": t.experience_fa1,
    "experience-fa2": t.experience_fa2,
    "education": t.education,
    "education2": t.education2,
    "about-title1": t.about_title1,
    "experience-fa-sub": t.experience_fa_sub,
    "experience-fa-sub1": t.experience_fa_sub1,
    "experience-en": t.experience_fa,
    "project-en": t.projects_fa,
    "contact-en": t.contact_fa,
    "project-1": t.project_1,
    "project-2": t.project_2,
    "project-3": t.project_3,
    "view-fa": t.view_fa,
    "view-fa1": t.view_fa,
    "view-fa2": t.view_fa,
    "about-fa-a": t.about_fa_a,
    "about-fa-a1": t.about_fa_a,
    "about-fa-a2": t.about_fa_a,
  };

for (let id in map) {
    const el = document.getElementById(id);
    if (el) el.textContent = map[id];
  }

  document.body.classList.toggle("rtl", lang === "fa");
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  applyLanguage(savedLang);
});

// ===========================
// REVEAL ON SCROLL
// ===========================
function revealElements() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const elementVisible = 100;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealElements);
document.addEventListener("DOMContentLoaded", revealElements);

// ===========================
// FOOTER ANIMATION
// ===========================
window.addEventListener("load", () => {
  const footerText = document.getElementById('footer-en');
  if (footerText) {
    footerText.style.opacity = '1';
    footerText.style.transform = 'translateY(0)';
  }
});

document.addEventListener("DOMContentLoaded", ()=> {
  const lenis = new Lenis({
    lerp: 0.070,
    smoothWheel: true,
  });
	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);
});