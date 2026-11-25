// =====================================================
// Endpoint Configuration (Posts JSON to api/contact.php)
// =====================================================
// If frontend is on GitHub Pages and PHP is hosted on your domain/server,
// use full URL like: "https://ahmedabdelhamed.com/api/contact.php"
// If both are on the same PHP server, "api/contact.php" works directly.
const CONTACT_ENDPOINT = "https://www.ahmedabdelhamed.com/api/contact.php";

// =====================================================
// Translations (AR / EN)
// =====================================================
const i18n = {
  ar: {
    brand_name: "أحمد عبد الحميد",
    nav_about: "عني",
    nav_exp: "الخبرات",
    nav_ventures: "المنصات والمشاريع",
    nav_services: "الخدمات",
    nav_book: "تواصل وحجز",
    hero_badge: "مفتوح للفرص النوعية، الاستشارات، وتنفيذ الأنظمة",
    hero_hi: "مرحباً، أنا",
    hero_name: "أحمد عبد الحميد",
    hero_roles: "Financial Analyst (SAP FICO) • Full-Stack Web Developer • EdTech Founder",
    hero_desc: "أجمع بين التحليل المالي وأنظمة SAP FICO، وتطوير تطبيقات الويب المتكاملة، والتصميم الإبداعي. مؤسس أكاديمية أحمد عبد الحميد و Smart Career Hub، وأبني أنظمة رقمية وحلول مالية وتقنية قابلة للنمو.",
    hero_cta_primary: "احجز استشارة أو اطلب مشروع",
    hero_cta_secondary: "استعرض السيرة والخبرات",
    stat_1: "متابع على LinkedIn",
    stat_2: "خبرات وتدريبات عملية",
    stat_3: "منصات تعليمية وريادية",
    spot_title: "أين أصنع الفارق؟",
    spot1_t: "SAP FICO & Financial Control",
    spot1_d: "GL, AP, AR, Bank Accounting, WHT، مراجعة العقود، والنماذج المالية على Excel و Power BI.",
    spot2_t: "Full-Stack & API Integrations",
    spot2_d: "PHP, MySQL, JS, Tailwind، تكامل Odoo API، بوابات Paymob، وبوتات Telegram.",
    spot3_t: "Creative Production & Growth",
    spot3_d: "Illustrator, Premiere Pro, Canva، إدارة المنصات، وبناء الحضور المهني على LinkedIn.",
    about_tag: "PROFILE & BACKGROUND",
    about_title: "التعليم، القيادة، والشهادات",
    about_sub: "خلفية أكاديمية في نظم معلومات الأعمال مدعومة بالقيادة الطلابية والمبادرات والمنافسات العملية.",
    edu_title: "بكالوريوس نظم معلومات الأعمال (BIS)",
    edu_place: "Future Academy for Specialized Technological Studies",
    edu_desc: "دراسة تجمع بين نظم المعلومات الإدارية، المحاسبة، قواعد البيانات، وتحليل الأعمال.",
    lead_title: "القيادة الطلابية والمجتمعية",
    lead_desc: "PR Leader وعضو فريق التصميم في GDG Future Academy، رئيس اللجنة الاجتماعية باتحاد الطلاب، وقيادة مبادرة نواة التنموية مع مؤسسة سند.",
    cert_title: "إنجازات وبرامج تدريبية",
    exp_tag: "CAREER & INTERNSHIPS",
    exp_title: "الخبرات العملية والتدريبات كاملة",
    exp_sub: "تسلسل زمني كامل لأدواري الحالية والسابقة في التحليل المالي، البنوك، المراجعة، والتشغيل الرقمي.",
    e1_t: "Junior Financial Analyst (SAP FICO)",
    e1_o: "مؤسسة أهل مصر ومستشفى أهل مصر لعلاج الحروق (Ahl Masr Foundation)",
    e1_d: "العمل ضمن SAP FICO عبر الأستاذ العام (GL)، حسابات الموردين والعملاء (AP/AR)، محاسبة البنوك، وضرائب الخصم والتحصيل (WHT).",
    e2_t: "Digital Creative Specialist & Training Operations Coordinator",
    e2_d: "إدارة التصميم الجرافيكي والموشن، تطوير المنصات الإلكترونية، جدولة المحاضرات على Google Classroom، وتفعيل حسابات Autodesk، ودعم المتدربين.",
    e3_t: "Banking Internships (Retail Banking & Customer Service)",
    e3_d: "تدريبات مصرفية عملية في البنك التجاري الدولي وبنك مصر تغطي الخدمات المصرفية للأفراد، خدمة العملاء، وفهم العمليات البنكية.",
    e4_t: "Junior Accountant Trainee",
    e4_o: "مكتب ياسر عبد المجيد للمحاسبة والضرائب",
    e4_d: "إدخال البيانات المالية، إعداد القيود والحسابات، ومتابعة دورات العمل المحاسبية والضريبية.",
    e5_t: "Financial Auditor",
    e5_d: "مراجعة عقود الموردين والسجلات المالية والتحقق من دقة البيانات والقيود.",
    e6_t: "Social Media Specialist & Data/Expense Assistant",
    e6_o: "عيادات أندلسية لطب الأسنان (Andalucía Dental Clinic)",
    e6_d: "إدارة المحتوى والتصميمات الترويجية وبناء نظام تتبع بيانات المرضى ومساعدة مستمرة في شيتات المصروفات والبيانات.",
    e7_t: "Research Assistant",
    e7_o: "مؤسسة سند للرعاية الوالدية البديلة",
    e7_d: "جمع وتحليل المعلومات ودعم الأبحاث والأنشطة المجتمعية المرتبطة بالرعاية البديلة.",
    e8_t: "Retail Sales & Cashier",
    e8_o: "تجارة التجزئة والملابس الحريمي والطرح",
    e8_d: "البيع المباشر، خدمة العملاء، وإدارة الكاشير وحسابات المبيعات اليومية.",
    port_tag: "VENTURES & SYSTEMS",
    port_title: "المنصات والمشاريع والأنظمة",
    port_sub: "مشاريع تعليمية، تكاملات ERP، ولوحات تحكم وأنظمة متابعة.",
    f_all: "الكل",
    f_ventures: "المنصات",
    f_web: "الأنظمة والويب",
    f_fin: "المالية والبيانات",
    w1_d: "منصة تعليمية تضم كورس LinkedIn Growth Engine 2026: From Profile to Placement وتجربة مستخدم متكاملة.",
    w2_d: "منصة تأهيل مهني وتدريب في تحليل البيانات والمالية والمحاسبة مع بنية قواعد بيانات متكاملة.",
    w3_d: "منصة حجز مواعيد وإدارة صحية متصلة بواجهة برمجة Odoo (edu-smartcare.odoo.com).",
    w4_d: "موقع رسمي وحجوزات بخلفيات فيديو، تضمين تيك توك، قسم فيلم وثائقي قصير، وإشعارات Telegram Bot.",
    w5_d: "بوابات ويب ولوحات تحكم داخلية لمتابعة الاشتراكات والمدفوعات وإشعارات البريد SMTP.",
    w6_t: "نماذج مالية وأتمتة بيانات",
    w6_d: "أتمتة القيود اليومية، القوائم المالية، الرواتب، وبيانات العيادات والمرضى عبر Excel و Google Sheets و Power BI.",
    srv_tag: "SERVICES",
    srv_title: "الخدمات والاستشارات",
    srv_sub: "حلول عملية للعملاء، الشركات، وصناع المحتوى والباحثين عن فرص مهنية.",
    s1_t: "تطوير المواقع والمنصات",
    s1_d: "مواقع بورتفوليو، منصات تعليمية، ولوحات تحكم بواجهة عصرية ودعم لغتين.",
    s2_t: "الأتمتة المالية والمحاسبية",
    s2_d: "شيتات حسابية وقوائم مالية ورواتب وتقارير Power BI دقيقة وسريعة.",
    s3_t: "استشارات LinkedIn والكارير",
    s3_d: "تحسين ملف LinkedIn، السيرة الذاتية، واستراتيجيات الوصول للوظائف.",
    s4_t: "الجرافيك والمونتاج والموشن",
    s4_d: "تصميمات سوشيال ميديا، مونتاج فيديو، ومواد بصرية للمشاريع والحملات.",
    c_tag: "DIRECT DISPATCH",
    c_title: "تواصل معي أو احجز استشارة",
    c_desc: "يتم إرسال رسالتك مباشرة عبر api/contact.php إلى بوت تليجرام الخاص بي لتصلك استجابة سريعة.",
    lbl_phone: "الهاتف / واتساب",
    lbl_email: "البريد الإلكتروني",
    lbl_loc: "الموقع والمناطق المفضلة",
    val_loc: "مصر الجديدة، القاهرة (ومدينة نصر)",
    f_name: "الاسم *",
    f_phone: "رقم الهاتف *",
    f_email: "البريد الإلكتروني *",
    f_topic: "نوع الطلب",
    t_web: "تطوير موقع أو نظام",
    t_fin: "مالية / Excel / SAP",
    t_car: "استشارة LinkedIn ومسار مهني",
    t_des: "جرافيك / مونتاج / تصميم",
    t_opp: "فرصة عمل أو تعاون",
    f_msg: "الرسالة / التفاصيل *",
    f_send: "إرسال الرسالة",
    footer_rights: "© 2026 أحمد عبد الحميد. جميع الحقوق محفوظة."
  },
  en: {
    brand_name: "Ahmed Abdelhamed",
    nav_about: "About",
    nav_exp: "Experience",
    nav_ventures: "Ventures & Work",
    nav_services: "Services",
    nav_book: "Contact & Book",
    hero_badge: "Open for High-Impact Roles, Consulting & System Builds",
    hero_hi: "Hello, I'm",
    hero_name: "Ahmed Abdelhamed",
    hero_roles: "Financial Analyst (SAP FICO) • Full-Stack Web Developer • EdTech Founder",
    hero_desc: "Combining Financial Analysis & SAP FICO with Full-Stack Web Development and Creative Design. Founder of Ahmed Abdelhamed Academy & Smart Career Hub, building scalable systems, financial workflows, and digital platforms.",
    hero_cta_primary: "Book Consultation / Project",
    hero_cta_secondary: "View Full Experience",
    stat_1: "LinkedIn Followers",
    stat_2: "Roles & Internships",
    stat_3: "Founded Platforms",
    spot_title: "Where I Create Value",
    spot1_t: "SAP FICO & Financial Control",
    spot1_d: "GL, AP, AR, Bank Accounting, WHT, contract reviews, and Excel / Power BI models.",
    spot2_t: "Full-Stack & API Integrations",
    spot2_d: "PHP, MySQL, JS, Tailwind, Odoo API integration, Paymob flows, and Telegram bots.",
    spot3_t: "Creative Production & Growth",
    spot3_d: "Illustrator, Premiere Pro, Canva, platform operations, and LinkedIn positioning.",
    about_tag: "PROFILE & BACKGROUND",
    about_title: "Education, Leadership & Credentials",
    about_sub: "Business Information Systems foundation backed by student leadership, initiatives, and competitions.",
    edu_title: "B.Sc. in Business Information Systems (BIS)",
    edu_place: "Future Academy for Specialized Technological Studies",
    edu_desc: "Bridging business management, accounting, databases, systems analysis, and data workflows.",
    lead_title: "Student & Community Leadership",
    lead_desc: "PR Leader & Core Design Member at GDG Future Academy, Head of Social Committee at Student Union, and Co-lead of Nawaa Initiative with Sanad.",
    cert_title: "Honors & Training Programs",
    exp_tag: "CAREER & INTERNSHIPS",
    exp_title: "Complete Experience & Internships",
    exp_sub: "Full chronological record across financial analysis, banking, auditing, and digital operations.",
    e1_t: "Junior Financial Analyst (SAP FICO)",
    e1_o: "Ahl Masr Foundation & Ahl Masr Burn Hospital",
    e1_d: "Worked across SAP FICO covering General Ledger (GL), Accounts Payable/Receivable (AP/AR), Bank Accounting, and Withholding Tax (WHT).",
    e2_t: "Digital Creative Specialist & Training Operations Coordinator",
    e2_d: "Managing graphic & motion design, web portals, Google Classroom schedules, Autodesk account activations, and trainee support.",
    e3_t: "Banking Internships (Retail Banking & Customer Service)",
    e3_d: "Completed retail banking and customer service internships at CIB Egypt (Future Vest) and Banque Misr (Ruwad Program).",
    e4_t: "Junior Accountant Trainee",
    e4_o: "Yasser Abdel Mageed Accounting & Tax Office",
    e4_d: "Financial data entry, accounting records, and tax/accounting workflow support.",
    e5_t: "Financial Auditor",
    e5_d: "Auditing vendor contracts and financial records for accuracy and compliance.",
    e6_t: "Social Media Specialist & Data/Expense Assistant",
    e6_o: "Andalucía Dental Clinic",
    e6_d: "Promotional design, social media management, patient data tracking system, and ongoing assistance with expense & clinic sheets.",
    e7_t: "Research Assistant",
    e7_o: "Sanad Association for Alternative Parental Care",
    e7_d: "Research gathering, documentation, and support for alternative parental care initiatives.",
    e8_t: "Retail Sales & Cashier",
    e8_o: "Women's Clothing & Scarves Retail",
    e8_d: "Direct sales, customer service, cashier operations, and daily sales reconciliation.",
    port_tag: "VENTURES & SYSTEMS",
    port_title: "Platforms, Projects & Systems",
    port_sub: "Educational platforms, ERP API integrations, dashboards, and automation systems.",
    f_all: "All",
    f_ventures: "Platforms",
    f_web: "Web & Systems",
    f_fin: "Finance & Data",
    w1_d: "Learning platform hosting LinkedIn Growth Engine 2026: From Profile to Placement.",
    w2_d: "Career development hub offering Data Analysis and Finance & Accounting tracks with custom database architecture.",
    w3_d: "Healthcare appointment and hospital booking web platform integrated with Odoo API (edu-smartcare.odoo.com).",
    w4_d: "Official creator site & booking flow with video loops, TikTok embeds, documentary section, and Telegram Bot alerts.",
    w5_d: "Web portals and internal subscription/payment dashboards with SMTP notifications.",
    w6_t: "Financial Models & Data Automation",
    w6_d: "Journal entries, financial statements, payroll calculations, and clinic data tracking via Excel, Sheets, and Power BI.",
    srv_tag: "SERVICES",
    srv_title: "Services & Consulting",
    srv_sub: "Practical execution for businesses, founders, creators, and job seekers.",
    s1_t: "Web & Platform Development",
    s1_d: "Portfolios, learning platforms, and admin dashboards with bilingual support.",
    s2_t: "Financial & Excel Automation",
    s2_d: "Financial statements, payroll sheets, expense trackers, and Power BI reporting.",
    s3_t: "LinkedIn & Career Consulting",
    s3_d: "LinkedIn positioning, CV optimization, and targeted job-search strategy.",
    s4_t: "Graphic, Video & Motion",
    s4_d: "Social visuals, video editing, and promotional creative assets.",
    c_tag: "DIRECT DISPATCH",
    c_title: "Get in Touch or Book a Session",
    c_desc: "Submissions post directly to api/contact.php and deliver an instant Telegram notification.",
    lbl_phone: "Phone / WhatsApp",
    lbl_email: "Email",
    lbl_loc: "Location & Preferred Areas",
    val_loc: "Heliopolis, Cairo (and Nasr City)",
    f_name: "Name *",
    f_phone: "Phone *",
    f_email: "Email *",
    f_topic: "Inquiry Type",
    t_web: "Web / System Development",
    t_fin: "Finance / Excel / SAP",
    t_car: "LinkedIn & Career Session",
    t_des: "Graphic / Video / Design",
    t_opp: "Job Opportunity / Partnership",
    f_msg: "Message / Details *",
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
// Mobile Menu & Portfolio Filter
// =====================================================
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
mobileMenuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

const filterChips = document.querySelectorAll(".filter-chip");
const workCards = document.querySelectorAll(".work-card");

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    filterChips.forEach((c) => c.classList.remove("active-chip"));
    chip.classList.add("active-chip");

    const cat = chip.getAttribute("data-filter");
    workCards.forEach((card) => {
      card.style.display = (cat === "all" || card.getAttribute("data-cat") === cat) ? "flex" : "none";
    });
  });
});

// =====================================================
// Form Submission -> api/contact.php
// =====================================================
const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const statusBox = document.getElementById("statusBox");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const topic = document.getElementById("topic").value;
  const rawMessage = document.getElementById("message").value.trim();

  const payload = {
    name,
    email,
    phone,
    message: `[Topic: ${topic}]\n\n${rawMessage}`
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
      throw new Error(data.error || "Request failed");
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
