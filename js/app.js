// ==========================================
// 6. إرسال بيانات الحجز عبر api/contact.php
// ==========================================
const bookingForm = document.getElementById("bookingForm");
const formStatus = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

// لو الـ PHP على نفس الدومين خليه "api/contact.php"
// لو الـ PHP على سيرفر تاني حط الرابط الكامل مثل: "https://ahmedabdelhamed.com/api/contact.php"
const CONTACT_ENDPOINT = "https://www.ahmedabdelhamed.com/api/contact.php";

bookingForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("clientName").value.trim();
  const phone = document.getElementById("clientPhone").value.trim();
  const email = document.getElementById("clientEmail").value.trim();
  const service = document.getElementById("serviceType").value;
  const messageBody = document.getElementById("clientMessage").value.trim();

  // في ملف contact.php الحقول المطلوبة هي: name, email, phone, message
  const payload = {
    name: name,
    email: email,
    phone: phone,
    message: `Service / Inquiry Type: ${service}\n\n${messageBody}`
  };

  submitBtn.disabled = true;
  submitBtn.classList.add("opacity-70");
  formStatus.classList.remove(
    "hidden",
    "bg-emerald-500/15",
    "text-emerald-500",
    "bg-rose-500/15",
    "text-rose-500"
  );

  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok && data.ok) {
      formStatus.textContent = currentLang === "ar"
        ? "✅ تم إرسال طلبك بنجاح! سأتواصل معك قريباً."
        : "✅ Request sent successfully! I will get back to you soon.";
      formStatus.classList.add("bg-emerald-500/15", "text-emerald-500");
      bookingForm.reset();
    } else {
      throw new Error(data.error || "Failed to send message");
    }
  } catch (error) {
    formStatus.textContent = currentLang === "ar"
      ? `⚠️ تعذر إرسال الطلب: ${error.message}`
      : `⚠️ Unable to send request: ${error.message}`;
    formStatus.classList.add("bg-rose-500/15", "text-rose-500");
  } finally {
    formStatus.classList.remove("hidden");
    submitBtn.disabled = false;
    submitBtn.classList.remove("opacity-70");
  }
});
