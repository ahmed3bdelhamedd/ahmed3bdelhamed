const CONTACT_ENDPOINT = "api/contact.php";

const i18n = {
  ar: {
    brand: "أحمد عبد الحميد",
    nav_home: "الرئيسية",
    nav_exp: "الخبرات",
    nav_projects: "المشاريع والشهادات",
    nav_contact: "تواصل",
    intro_tag: "محاسب • محلل مالي • SAP FICO",
    intro_hi: "أهلاً، أنا",
    intro_name: "أحمد عبد الحميد",
    intro_role: "Financial Analyst | Data Analysis | SAP FICO | Accountant",
    intro_bio: "طالب في نظم معلومات الأعمال ورئيس اللجنة الاجتماعية باتحاد الطلاب، أعمل في مجال المحاسبة والتحليل المالي عبر أنظمة SAP FICO، والتدريب المصرفي، والمراجعة المالية، ومكاتب المحاسبة والضرائب—مع خبرة عملية في حسابات الموردين والعملاء ومحاسبة البنوك، والربط بين التحليل المالي وأدوات Power BI و SQL و Excel لتقديم تقارير دقيقة وأثر مالي واضح.",
    cta_exp: "استعراض الخبرات",
    cta_contact: "تواصل معي",
    fig1: "خفض تكاليف التشغيل عبر المراجعة",
    fig2: "عمليات مالية أساسية على SAP FICO",
    fig3: "شهراً في إدارة تحليل البيانات",
    p1_title: "المحاسبة وأنظمة ERP",
    p1_desc: "SAP FICO, Oracle, General Ledger, Accounts Payable, Accounts Receivable, Bank Accounting, Fixed Assets, Withholding Tax & Audit.",
    p2_title: "التحليل المالي والبيانات",
    p2_desc: "Financial Reporting, Microsoft Power BI, Tableau, SQL, Microsoft Access, Advanced Excel, Management Accounting & Data Validation.",
    p3_title: "نظم الأعمال والمنصات",
    p3_desc: "BIS student at Future Academy (Expected Jul 2027), data-entry systems, UI/UX & web layouts, and founder roles across education & career hubs.",
    exp_h1: "الخبرات والتدريبات",
    exp_sub: "الأدوار المحاسبية والمالية والمصرفية والريادية حسب السيرة الذاتية.",
    tr_h2: "البرامج التدريبية والمصرفية",
    pr_h1: "المشاريع والشهادات",
    pr_sub: "المشاريع، المهارات، التعليم، والشهادات الواردة في السيرة الذاتية.",
    pr1: "تصميم ونشر موقع بورتفوليو لتحليل البيانات ونظم الأعمال يعرض المشاريع والدورات والشهادات.",
    pr2: "بناء نظام إدخال بيانات لعميل عيادة إلى جانب تصميم واجهات الويب UI/UX.",
    pr3: "أعمال الهوية البصرية والسوشيال ميديا لـ TO-BIM و Three Engineers و KCAU و Gossor و NETPEAS.",
    edu_cert_h2: "التعليم والشهادات والتكريمات",
    edu_line: "Future Academy — Business Information Systems (Sep 2023 – Jul 2027 Expected, Very Good) • Harvard University Leadership • Student Union Social Committee Head • Ideal Researcher (2023–2024) & Ideal Volunteer (2021).",
    c_h1: "تواصل معي",
    c_sub: "للفرص الوظيفية في التحليل المالي والمحاسبة (SAP FICO) أو الاستشارات والبيانات.",
    lbl_phone: "الهاتف",
    lbl_email: "البريد الإلكتروني",
    f_name: "الاسم *",
    f_phone: "رقم الهاتف *",
    f_email: "البريد الإلكتروني *",
    f_msg: "الرسالة *",
    f_send: "إرسال الرسالة",
    footer: "أحمد عبد الحميد — ahmed3bdelhamedwork@gmail.com • 01116512028"
  },
  en: {
    brand: "Ahmed Abdelhamed",
    nav_home: "Home",
    nav_exp: "Experience",
    nav_projects: "Projects & Certs",
    nav_contact: "Contact",
    intro_tag: "Accountant • Financial Analyst • SAP FICO",
    intro_hi: "Hello, I'm",
    intro_name: "Ahmed Abdelhamed",
    intro_role: "Financial Analyst | Data Analysis | SAP FICO | Accountant",
    intro_bio: "Business Information Systems student and Student Union Social Committee Head with hands-on finance experience across SAP FICO, banking, auditing, and accounting internships, including Accounts Payable, Accounts Receivable, and Bank Accounting. Combines financial analysis, Power BI, SQL, and Excel with systems and platforms to deliver measurable impact.",
    cta_exp: "View Experience",
    cta_contact: "Get in Touch",
    fig1: "Operating Cost Reduction via Audit",
    fig2: "Core Finance Processes in SAP FICO",
    fig3: "Months Managing Data Analysis",
    p1_title: "Accounting & ERP",
    p1_desc: "SAP FICO, Oracle, General Ledger, Accounts Payable, Accounts Receivable, Bank Accounting, Fixed Assets, Withholding Tax & Audit.",
    p2_title: "Data Analysis & Reporting",
    p2_desc: "Financial Reporting, Microsoft Power BI, Tableau, SQL, Microsoft Access, Advanced Excel, Management Accounting & Data Validation.",
    p3_title: "Business Systems & Ventures",
    p3_desc: "BIS student at Future Academy (Expected Jul 2027), data-entry systems, UI/UX & web layouts, and founder roles across education & career hubs.",
    exp_h1: "Experience & Internships",
    exp_sub: "Accounting, finance, banking, auditing, and venture roles from the CV.",
    tr_h2: "Banking & Training Programs",
    pr_h1: "Projects & Certifications",
    pr_sub: "Projects, skills, education, and certifications from the CV.",
    pr1: "Designed and published a data analysis and business systems portfolio featuring projects, courses, and certificates.",
    pr2: "Built a clinic data-entry system alongside UI/UX web designs.",
    pr3: "Brand and social media work for TO-BIM, Three Engineers, KCAU logo, Gossor, and NETPEAS.",
    edu_cert_h2: "Education, Certifications & Honors",
    edu_line: "Future Academy — Business Information Systems (Sep 2023 – Jul 2027 Expected, Very Good) • Harvard University Leadership • Student Union Social Committee Head • Ideal Researcher (2023–2024) & Ideal Volunteer (2021).",
    c_h1: "Contact",
    c_sub: "For Financial Analysis, Accounting (SAP FICO), or Data Analysis inquiries.",
    lbl_phone: "Phone",
    lbl_email: "Email",
    f_name: "Name *",
    f_phone: "Phone *",
    f_email: "Email *",
    f_msg: "Message *",
    f_send: "Send Message",
    footer: "Ahmed Abdelhamed — ahmed3bdelhamedwork@gmail.com • 01116512028"
  }
};

const htmlEl = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function applyTheme(isDark) {
  htmlEl.classList.toggle("dark", isDark);
  if (themeIcon) {
    themeIcon.className = isDark ? "fa-solid fa-sun text-xs text-amber-400" : "fa-solid fa-moon text-xs text-zinc-700";
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
    submitBtn.classList.add("opacity-60");
    statusBox.className = "hidden p-3.5 rounded-xl text-xs sm:text-sm font-semibold";

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
          ? "تم إرسال رسالتك بنجاح."
          : "Your message has been sent.";
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
      submitBtn.classList.remove("opacity-60");
    }
  });
}
