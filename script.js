function openPDF(fileName) {
    window.open(fileName, "_blank");
}

const contentDiv = document.getElementById("content");
const buttonWithContent = document.querySelector(".button-with-content button");

buttonWithContent.addEventListener("click", (e) => {
    e.stopPropagation();

    // Toggle حجم الزرار
    buttonWithContent.style.transform = contentDiv.classList.contains("show") ? "scale(1)" : "scale(0.9)";
    
    // Toggle المحتوى
    contentDiv.classList.toggle("show");
    if (!contentDiv.classList.contains("show")) {
        // إغلاق بسلسلة
        const cards = contentDiv.querySelectorAll(".transport-card");
        cards.forEach((card, index) => {
            setTimeout(() => card.classList.remove("show"), index * 100);
        });
        setTimeout(() => contentDiv.style.display = "none", 400);
    } else {
        contentDiv.style.display = "flex";
        contentDiv.style.flexWrap = "wrap";
        contentDiv.style.justifyContent = "center";
        contentDiv.style.gap = "20px";

        let html = `
          <button class="transport-card" onclick="window.open('https://maps.app.goo.gl/3V9tLTfM1K3f4Duk9?g_st=aw', '_blank')">
            <h3>📍 الموقع على الخريطة</h3>
          </button>

          <button class="transport-card" onclick="openPDF('مخطط مباني المنطقة.pdf')">
            <h3>🗺️ مخطط المباني</h3>
          </button>
        `;
        contentDiv.innerHTML = html;

        const cards = contentDiv.querySelectorAll(".transport-card");
        cards.forEach((card, index) => {
            setTimeout(() => card.classList.add("show"), index * 150);
        });
    }
});

// إغلاق عند الضغط خارج الزرار أو المحتوى
document.addEventListener("click", (event) => {
    if (!contentDiv.contains(event.target) && !event.target.closest("button[data-tab]")) {
        contentDiv.classList.remove("show");
        buttonWithContent.style.transform = "scale(1)";
        const cards = contentDiv.querySelectorAll(".transport-card");
        cards.forEach((card, index) => {
            setTimeout(() => card.classList.remove("show"), index * 100);
        });
        setTimeout(() => contentDiv.style.display = "none", 400);
    }
});

