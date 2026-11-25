const CONTACT_ENDPOINT = "api/contact.php";

const i18n = {
  ar: {
    brand_name: "أحمد عبد الحميد",
    nav_home: "الرئيسية",
    nav_exp: "الخبرات والتدريبات",
    nav_projects: "المشاريع والشهادات",
    nav_contact: "تواصل معي",
    hero_badge: "محاسب ومحلل مالي • SAP FICO • تحليل البيانات المالية",
    hero_welcome: "مرحباً بك في موقعي الرسمي، أنا",
    hero_name: "أحمد عبد الحميد",
    hero_subtitle: "Financial Analyst | Data Analysis | SAP FICO | Accountant",
    hero_bio: "طالب نظم معلومات الأعمال ورئيس اللجنة الاجتماعية باتحاد الطلاب، أمتلك خبرة عملية في المحاسبة والتحليل المالي عبر SAP FICO، والتدريب المصرفي، والمراجعة المالية، ومكاتب المحاسبة والضرائب، شاملة حسابات الموردين (AP)، العملاء (AR)، ومحاسبة البنوك. أجمع بين التحليل المالي و Power BI و SQL و Excel مع بناء الأنظمة والمنصات الرقمية لتحقيق أثر مالي وتشغيلي ملموس.",
    cta_exp: "استعرض الخبرات والتدريبات",
    cta_contact: "تواصل معي الآن",
    m1: "خفض تكاليف التشغيل بالمراجعة",
    m2: "عمليات مالية بـ SAP FICO",
    m3: "شهراً في تحليل البيانات",
    card_title: "ملخص الكفاءة المالية",
    h1_t: "المحاسبة وأنظمة ERP",
    h1_d: "SAP FICO, Oracle, General Ledger, Accounts Payable, Accounts Receivable, Bank Accounting, Fixed Assets, Withholding Tax & Audit.",
    h2_t: "تحليل البيانات والتقارير",
    h2_d: "Microsoft Power BI, Tableau, SQL, Microsoft Access, Advanced Excel, Management Accounting & Data Validation.",
    h3_t: "التعليم والقيادة",
    h3_d: "B.Sc. Business Information Systems (Future Academy, Expected Jul 2027) • Harvard Leadership • Student Union Social Committee Head.",
    card_link: "المشاريع والشهادات →",
    exp_page_title: "الخبرات المهنية والتدريبات المصرفية",
    exp_page_sub: "تفاصيل الأدوار العملية والبنكية والمحاسبية والإدارية وفق السيرة الذاتية.",
    bank_title: "البرامج التدريبية المصرفية والمالية",
    pr_page_title: "المشاريع والمنصات",
    pr1_d: "تصميم ونشر موقع بورتفوليو لتحليل البيانات ونظم الأعمال يعرض المشاريع والدورات والشهادات.",
    pr2_d: "بناء نظام إدخال بيانات لعميل عيادة إلى جانب تصميم واجهات الويب UI/UX.",
    pr3_d: "أعمال الهوية البصرية والسوشيال ميديا لـ TO-BIM و Three Engineers و KCAU و Gossor و NETPEAS.",
    sk_title: "المهارات واللغات",
    cert_heading: "التعليم والشهادات والتكريمات",
    edu_summary: "Future Academy — Business Information Systems (Sep 2023 – Jul 2027 Expected, Very Good) • Harvard University Leadership • Student Union Social Committee Head • Ideal Researcher (2023–2024) & Ideal Volunteer (2021).",
    c_title: "تواصل معي مباشرة",
    c_desc: "للفرص الوظيفية في التحليل المالي والمحاسبة (SAP FICO) أو الاستشارات وأنظمة البيانات، أرسل رسالتك وسيتم إرسالها فوراً.",
    lbl_phone: "الهاتف",
    lbl_email: "البريد الإلكتروني",
    f_name: "الاسم *",
    f_phone: "رقم الهاتف *",
    f_email: "البريد الإلكتروني *",
    f_msg: "الرسالة *",
    f_send: "إرسال الرسالة",
    footer_rights: "© 2026 أحمد عبد الحميد. جميع الحقوق محفوظة."
  },
  en: {
    brand_name: "Ahmed Abdelhamed",
    nav_home: "Home",
    nav_exp: "Experience",
    nav_projects: "Projects & Certs",
    nav_contact: "Contact",
    hero_badge: "Financial Analyst • SAP FICO • Financial Data Analysis",
    hero_welcome: "Welcome to my official portfolio, I'm",
    hero_name: "Ahmed Abdelhamed",
    hero_subtitle: "Financial Analyst | Data Analysis | SAP FICO | Accountant",
    hero_bio: "Business Information Systems student and Student Union Social Committee Head with hands-on finance experience across SAP FICO, banking, auditing, and accounting internships, including Accounts Payable, Accounts Receivable, and Bank Accounting. Combines financial analysis, Power BI, SQL, and Excel with systems and platforms to deliver measurable impact.",
    cta_exp: "View Experience & Internships",
    cta_contact: "Contact Me",
    m1: "Operating Cost Reduction via Audit",
    m2: "Core Finance Processes in SAP FICO",
    m3: "Months Managing Data Analysis",
    card_title: "Financial & Accounting Snapshot",
    h1_t: "Accounting & ERP",
    h1_d: "SAP FICO, Oracle, General Ledger, Accounts Payable, Accounts Receivable, Bank Accounting, Fixed Assets, Withholding Tax & Audit.",
    h2_t: "Data Analysis & Reporting",
    h2_d: "Microsoft Power BI, Tableau, SQL, Microsoft Access, Advanced Excel, Management Accounting & Data Validation.",
    h3_t: "Education & Leadership",
    h3_d: "B.Sc. Business Information Systems (Future Academy, Expected Jul 2027) • Harvard Leadership • Student Union Social Committee Head.",
    card_link: "Projects & Certs →",
    exp_page_title: "Professional Experience & Banking Programs",
    exp_page_sub: "Complete record across finance, banking, auditing, accounting, and ventures.",
    bank_title: "Banking, Finance & Training Programs",
    pr_page_title: "Projects & Platforms",
    pr1_d: "Designed and published a data analysis and business systems portfolio featuring projects, courses, and certificates.",
    pr2_d: "Built a clinic data-entry system alongside UI/UX web designs.",
    pr3_d: "Brand and social media work for TO-BIM, Three Engineers, KCAU logo, Gossor, and NETPEAS.",
    sk_title: "Skills & Languages",
    cert_heading: "Education, Certifications & Honors",
    edu_summary: "Future Academy — Business Information Systems (Sep 2023 – Jul 2027 Expected, Very Good) • Harvard University Leadership • Student Union Social Committee Head • Ideal Researcher (2023–2024) & Ideal Volunteer (2021).",
    c_title: "Direct Contact",
    c_desc: "For Financial Analysis, Accounting (SAP FICO), or Data Analysis opportunities and inquiries, send your message directly.",
    lbl_phone: "Phone",
    lbl_email: "Email",
    f_name: "Name *",
    f_phone: "Phone *",
    f_email: "Email *",
    f_msg: "Message *",
    f_send: "Send Message",
    footer_rights: "© 2026 Ahmed Abdelhamed. All Rights Reserved."
  }
};

const htmlEl = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function applyTheme(isDark) {
  htmlEl.classList.toggle("dark", isDark);
  if (themeIcon) {
    themeIcon.className = isDark ? "fa-solid fa-sun text-amber-400" : "fa-solid fa-moon text-slate-700";
  }
  localStorage.setItem("portfolio_theme", isDark ? "dark" : "light");
}

const savedTheme = localStorage.getItem("portfolio_theme");
applyTheme(savedTheme ? savedTheme === "dark" : true);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    applyTheme(!htmlEl.classList.contains("dark"));
  });
}

const langToggle = document.getElementById("langToggle");
const langLabel = document.getElementById("langLabel");
let currentLang = localStorage.getItem("portfolio_lang") || "ar";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);
  htmlEl.lang = lang;
  htmlEl.dir = lang === "ar" ? "rtl" : "ltr";
  if (langLabel) {
    langLabel.textContent = lang === "ar" ? "EN" : "عربي";
  }
  document.body.classList.toggle("font-arabic", lang === "ar");
  document.body.classList.toggle("font-english", lang !== "ar");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
}

applyLang(currentLang);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    applyLang(currentLang === "ar" ? "en" : "ar");
  });
}

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
}

const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const statusBox = document.getElementById("statusBox");

if (contactForm) {
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
}
