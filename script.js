const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const requestForm = document.getElementById("request-form");
if (requestForm) {
  requestForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value?.trim();
    const service = document.getElementById("service")?.value?.trim();
    const details = document.getElementById("details")?.value?.trim();

    const message = `مرحباً، أنا ${name || "عميل جديد"}.\nأرغب في طلب: ${service || "خدمة تصميم"}.\nالتفاصيل: ${details || "سيتم التوضيح لاحقاً"}`;
    const url = `https://wa.me/201029100044?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
}
