// =====================================================
// Endpoint Configuration (Posts JSON to api/contact.php)
// =====================================================
const CONTACT_ENDPOINT = "api/contact.php";

// =====================================================
// Clean Smooth Scroll (No # added to URL bar)
// =====================================================
document.querySelectorAll("[data-scroll]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const targetId = trigger.getAttribute("data-scroll");
    const targetEl = document.getElementById(targetId);
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }
  });
});

// =====================================================
// Bilingual Dictionary (AR / EN)
// =====================================================
const i18n = {
  ar: {
    brand_name: "أحمد عبد الحميد",
    nav_about: "نبذة عني",
    nav_skills: "المهارات المحاسبية والتقنية",
    nav_exp: "الخبرات والتدريبات",
    nav_projects: "المشاريع والشهادات",
    nav_contact: "تواصل معي",
    hero_badge: "محاسب ومحلل مالي • SAP FICO • تحليل البيانات المالية",
    hero_welcome: "أهلاً بك في موقعي الرسمي، أنا",
    hero_name: "أحمد عبد الحميد",
    hero_subtitle: "Financial Analyst | Accountant (SAP FICO) | Data Analysis (Power BI, SQL, Excel)",
    hero_intro: "محاسب ومحلل مالي متخصص في الدورة المحاسبية الكاملة وأنظمة ERP (SAP FICO)، بخبرة عملية في حسابات الموردين والعملاء (AP/AR)، الأستاذ العام (GL)، محاسبة البنوك، وضرائب الخصم والتحصيل، والمراجعة المالية. أدمج الدقة المحاسبية مع أدوات تحليل البيانات (Power BI, SQL, Advanced Excel) لتقديم تقارير مالية تدعم اتخاذ القرار وتخفض التكاليف التشغيلية.",
    hero_cta1: "تواصل لفرص العمل والاستشارات",
    hero_cta2: "استعرض الخبرات المهنية",
    m1_label: "خفض التكاليف التشغيلية بالمراجعة",
    m2_label: "عمليات مالية أساسية بـ SAP FICO",
    m3_label: "شهراً في إدارة تحليل البيانات",
    card_kicker: "EXECUTIVE PROFILE",
    card_heading: "الملف المحاسبي والمالي",
    p1_t: "المحاسبة المالية وأنظمة ERP",
    p1_d: "SAP FICO, Oracle, General Ledger, Accounts Payable (AP), Accounts Receivable (AR), Bank Accounting, Fixed Assets & Withholding Tax.",
    p2_t: "التحليل المالي وذكاء الأعمال (BI)",
    p2_d: "Financial Reporting, Audit & Compliance, Microsoft Power BI, Tableau, SQL, Advanced Excel & Management Accounting.",
    p3_t: "نظم المعلومات والتطوير الرقمي",
    p3_d: "تطوير أنظمة إدخال البيانات، أتمتة التقارير، UI/UX، وتأسيس الأكاديميات والمنصات الرقمية.",
    about_kicker: "ABOUT ME",
    about_title: "نبذة عني والتعليم والقيادة",
    about_bio: "طالب في تخصص نظم معلومات الأعمال (Business Information Systems) بأكاديمية المستقبل، ورئيس اللجنة الاجتماعية باتحاد الطلاب. أمتلك خبرة عملية في المحاسبة والتحليل المالي عبر أنظمة SAP FICO، والتدريب المصرفي، والمراجعة المالية، ومكاتب المحاسبة والضرائب، مع شغف ببناء حلول تقنية وأنظمة بيانات ترفع كفاءة الأعمال.",
    edu1_t: "بكالوريوس نظم معلومات الأعمال (BIS)",
    edu1_d: "مقررات تجمع بين المحاسبة المالية والإدارية، البرمجة، وإدارة نظم المعلومات.",
    edu2_t: "القيادة والتكريمات",
    edu2_d: "برنامج القيادة في جامعة هارفارد (2023–2024)، رئيس اللجنة الاجتماعية باتحاد الطلاب، وقائد العلاقات العامة في GDG On Campus Future Academy، وحاصل على لقب الباحث المثالي 2023–2024.",
    edu3_t: "اللغات والتواصل المهني",
    sk_kicker: "CORE COMPETENCIES",
    sk_title: "المهارات المحاسبية والتقنية",
    sk_sub: "منظومة مهارات متكاملة تغطي المحاسبة، أنظمة تخطيط موارد المؤسسات، تحليل البيانات، والتصميم.",
    sk1_t: "Finance & Accounting",
    sk2_t: "ERP & Data Tools",
    sk3_t: "Design & Web",
    sk4_t: "Business & Leadership",
    exp_kicker: "EXPERIENCE RECORD",
    exp_title: "الخبرات المهنية والتدريبات المصرفية",
    exp_sub: "سجل كامل بالخبرات المحاسبية والمالية والإدارية والريادية حسب السيرة الذاتية.",
    bank_title: "البرامج التدريبية المصرفية والمالية",
    tr1: "العمليات المصرفية، الالتزام، علاقات العملاء، ودقة تنفيذ المعاملات.",
    tr2: "برنامج التثقيف المالي والائتمان المصرفي بالتعاون مع المعهد المصرفي المصري (EBI).",
    tr3: "تدريب المحاسبة والعمليات المصرفية في البنك التجاري الدولي.",
    tr4: "تدريب عملي في المحاسبة المصرفية.",
    tr5: "محاكاة العمليات البنكية والائتمان وخدمة العملاء.",
    tr6: "برامج تدريبية متخصصة في الأعمال والبيانات والقطاع المالي.",
    tr7: "مساعد باحث ومنسق برامج رعاية الشباب.",
    tr8: "التشغيل الفني والطباعة والإنتاج.",
    pr_kicker: "PORTFOLIO & CREDENTIALS",
    pr_title: "المشاريع والشهادات المعتمدة",
    pr1_d: "تصميم ونشر موقع بورتفوليو متخصص في تحليل البيانات ونظم الأعمال يعرض المشاريع والدورات والشهادات.",
    pr2_d: "بناء نظام متكامل لإدخال وإدارة بيانات العيادات الطبية إلى جانب تصميم واجهات المستخدم UI/UX.",
    pr3_d: "أعمال الهوية البصرية وحملات السوشيال ميديا لـ TO-BIM و Three Engineers وشعار KCAU و Gossor و NETPEAS.",
    cert_heading: "الشهادات المهنية والتدريبية (Certifications)",
    c_kicker: "GET IN TOUCH",
    c_title: "تواصل معي مباشرة",
    c_desc: "للفرص الوظيفية في المحاسبة والتحليل المالي (SAP FICO)، أو الاستشارات وأنظمة البيانات، أرسل رسالتك وسأتواصل معك فوراً.",
    lbl_phone: "الهاتف / واتساب",
    lbl_email: "البريد الإلكتروني",
    f_name: "الاسم بالكامل *",
    f_phone: "رقم الهاتف *",
    f_email: "البريد الإلكتروني *",
    f_msg: "الرسالة *",
    f_send: "إرسال الرسالة",
    footer_rights: "© 2026 أحمد عبد الحميد (Ahmed Abdelhamed). جميع الحقوق محفوظة."
  },
  en: {
    brand_name: "Ahmed Abdelhamed",
    nav_about: "About",
    nav_skills: "Skills",
    nav_exp: "Experience",
    nav_projects: "Projects & Certs",
    nav_contact: "Contact",
    hero_badge: "Accountant & Financial Analyst • SAP FICO • Financial Data Analysis",
    hero_welcome: "Welcome to my official portfolio, I'm",
    hero_name: "Ahmed Abdelhamed",
    hero_subtitle: "Financial Analyst | Accountant (SAP FICO) | Data Analysis (Power BI, SQL, Excel)",
    hero_intro: "Accountant and Financial Analyst specializing in full-cycle accounting and SAP FICO ERP operations, with hands-on experience across Accounts Payable (AP), Accounts Receivable (AR), General Ledger (GL), Bank Accounting, Withholding Tax, and Financial Auditing. Combining accounting precision with Power BI, SQL, and Advanced Excel to drive accurate financial reporting and cost efficiency.",
    hero_cta1: "Connect for Roles & Consulting",
    hero_cta2: "View Professional Experience",
    m1_label: "Operating Cost Reduction via Audit",
    m2_label: "Core Finance Processes in SAP FICO",
    m3_label: "Months Managing Data Analysis",
    card_kicker: "EXECUTIVE PROFILE",
    card_heading: "Accounting & Finance Profile",
    p1_t: "Financial Accounting & ERP",
    p1_d: "SAP FICO, Oracle, General Ledger, Accounts Payable (AP), Accounts Receivable (AR), Bank Accounting, Fixed Assets & Withholding Tax.",
    p2_t: "Financial Analysis & BI",
    p2_d: "Financial Reporting, Audit & Compliance, Microsoft Power BI, Tableau, SQL, Advanced Excel & Management Accounting.",
    p3_t: "Business Systems & Automation",
    p3_d: "Building data-entry systems, automated reporting workflows, UI/UX layouts, and digital education ventures.",
    about_kicker: "ABOUT ME",
    about_title: "Profile, Education & Leadership",
    about_bio: "Business Information Systems student at Future Academy and Head of the Social Committee at the Student Union, with hands-on experience across SAP FICO, banking internships, financial auditing, and accounting & tax offices—focused on delivering measurable impact where finance, technology, and business meet.",
    edu1_t: "B.Sc. in Business Information Systems",
    edu1_d: "Coursework combining financial & managerial accounting, programming, and business systems management.",
    edu2_t: "Leadership & Honors",
    edu2_d: "Harvard University Leadership program (2023–2024), Student Union Social Committee Head, PR Leader at GDG On Campus Future Academy, and Ideal Researcher (2023–2024).",
    edu3_t: "Languages",
    sk_kicker: "CORE COMPETENCIES",
    sk_title: "Technical & Accounting Skills",
    sk_sub: "Comprehensive skill set spanning accounting, ERP systems, business intelligence, and digital systems.",
    sk1_t: "Finance & Accounting",
    sk2_t: "ERP & Data Tools",
    sk3_t: "Design & Web",
    sk4_t: "Business & Leadership",
    exp_kicker: "EXPERIENCE RECORD",
    exp_title: "Professional Experience & Banking Programs",
    exp_sub: "Complete chronological record across accounting, financial analysis, banking, auditing, and ventures.",
    bank_title: "Banking, Finance & Training Programs",
    tr1: "Banking operations, compliance, customer relationships, and accurate transaction handling.",
    tr2: "Youth Financial Literacy & Bank Credit Orientation with the Egyptian Banking Institute (EBI).",
    tr3: "Accounting and banking internship at Commercial International Bank (CIB).",
    tr4: "Hands-on banking accounting internship.",
    tr5: "Simulated banking operations, credit, and client service.",
    tr6: "Specialized training across business, data, and financial services.",
    tr7: "Research assistance and youth care program coordination.",
    tr8: "Technical printing and production operations.",
    pr_kicker: "PORTFOLIO & CREDENTIALS",
    pr_title: "Projects & Certifications",
    pr1_d: "Designed and published a data analysis and business systems portfolio featuring projects, courses, and certificates.",
    pr2_d: "Built a dedicated data-entry system for a clinic client alongside UI/UX web layouts.",
    pr3_d: "Brand and social media campaigns for TO-BIM, Three Engineers, KCAU logo, Gossor, and NETPEAS.",
    cert_heading: "Certifications",
    c_kicker: "GET IN TOUCH",
    c_title: "Direct Contact",
    c_desc: "For Accounting, Financial Analysis (SAP FICO), or Data Analysis opportunities and inquiries, send a message directly.",
    lbl_phone: "Phone / WhatsApp",
    lbl_email: "Email",
    f_name: "Full Name *",
    f_phone: "Phone Number *",
    f_email: "Email Address *",
    f_msg: "Message *",
    f_send: "Send Message",
    footer_rights: "© 2026 Ahmed Abdelhamed. All Rights Reserved."
  }
};

// =====================================================
// Theme Toggle
// =====================================================
const htmlEl = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function applyTheme(isDark) {
  htmlEl.classList.toggle("dark", isDark);
  themeIcon.className = isDark ? "fa-solid fa-sun text-amber-400" : "fa-solid fa-moon text-slate-700";
  localStorage.setItem("portfolio_theme", isDark ? "dark" : "light");
}

const savedTheme = localStorage.getItem("portfolio_theme");
applyTheme(savedTheme ? savedTheme === "dark" : true);

themeToggle.addEventListener("click", () => {
  applyTheme(!htmlEl.classList.contains("dark"));
});

// =====================================================
// Language Toggle (AR / EN)
// =====================================================
const langToggle = document.getElementById("langToggle");
const langLabel = document.getElementById("langLabel");
let currentLang = localStorage.getItem("portfolio_lang") || "ar";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);
  htmlEl.lang = lang;
  htmlEl.dir = lang === "ar" ? "rtl" : "ltr";
  langLabel.textContent = lang === "ar" ? "EN" : "عربي";

  document.body.classList.toggle("font-arabic", lang === "ar");
  document.body.classList.toggle("font-english", lang !== "ar");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
}

applyLang(currentLang);
langToggle.addEventListener("click", () => {
  applyLang(currentLang === "ar" ? "en" : "ar");
});

// =====================================================
// Mobile Menu Toggle
// =====================================================
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
mobileMenuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

// =====================================================
// Form Submission -> api/contact.php
// =====================================================
const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const statusBox = document.getElementById("statusBox");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    message: document.getElementById("message").value.trim()
  };

  submitBtn.disabled = true;
  submitBtn.classList.add("opacity-70");
  statusBox.className = "hidden p-4 rounded-2xl text-xs sm:text-sm font-bold text-center";

  try {
    const res = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (res.ok && data.ok) {
      statusBox.textContent = currentLang === "ar"
        ? "تم إرسال رسالتك بنجاح! سأتواصل معك قريباً."
        : "Your message has been sent successfully!";
      statusBox.classList.remove("hidden");
      statusBox.classList.add("bg-emerald-500/15", "text-emerald-400", "border", "border-emerald-500/30");
      contactForm.reset();
    } else {
      throw new Error(data.error || "Unable to send message");
    }
  } catch (err) {
    statusBox.textContent = currentLang === "ar"
      ? `تعذر إرسال الرسالة: ${err.message}`
      : `Could not send message: ${err.message}`;
    statusBox.classList.remove("hidden");
    statusBox.classList.add("bg-rose-500/15", "text-rose-400", "border", "border-rose-500/30");
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove("opacity-70");
  }
});
