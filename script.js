document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            const tab = this.getAttribute("data-tab");
            
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => {
                content.classList.remove("active");
                content.style.opacity = "0";
            });

            this.classList.add("active");
            const activeTab = document.getElementById(tab);
            activeTab.classList.add("active");
            setTimeout(() => {
                activeTab.style.opacity = "1";
            }, 10);
        });
    });
});

function copyIP() {
    const ipAddress = "play.flurryworld.net";
    navigator.clipboard.writeText(ipAddress).then(() => {
        const ipButton = document.querySelector(".ip-btn");
        ipButton.classList.add("copied");
        setTimeout(() => {
            ipButton.classList.remove("copied");
        }, 2000);
    }).catch(err => {
        console.error("Ошибка копирования IP: ", err);
    });
}