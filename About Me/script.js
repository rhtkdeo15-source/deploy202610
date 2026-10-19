function updateClock() {
    const clock = document.querySelector("#time");

    if (!clock) {
        return;
    }

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);

function updateYear() {
    const yearElements = document.querySelectorAll(".current-year");
    const currentYear = new Date().getFullYear();

    yearElements.forEach((element) => {
        element.textContent = currentYear;
    });
}

updateYear();

document.addEventListener("click", function (event) {
    const link = event.target.closest(
        ".social-links a, #sns a.sns-link"
    );

    if (!link) {
        return;
    }

    const url = new URL(link.href);
    const host = url.hostname.toLowerCase();

    let siteName = link.getAttribute("aria-label");

    if (!siteName) {
        if (host.includes("instagram.com")) {
            siteName = "인스타그램";
        } else if (host.includes("kakao.com")) {
            siteName = "카카오";
        } else if (host.includes("github.com")) {
            siteName = "깃허브";
        } else {
            siteName = link.textContent.trim() || "SNS";
        }
    }

    const answer = confirm(
        `${siteName}으로 이동하시겠습니까?`
    );

    if (!answer) {
        event.preventDefault();
    }
});