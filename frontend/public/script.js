async function parseJSON(url) {
    const response = await fetch(url);
    return response.json();
}

function swiperComponent(data, comp) {

    return `
        <div class="swiper">
            <div class="swiper-wrapper">
                ${data.map(image => comp(image)).join("")}
            </div>
        </div>
    `;
}

function slideComponent({filename, title}) {
    return `
    <div class="swiper-slide">
        <h2>${title}</h2>
        <img src="/public/${filename}">
    </div>
    `
}

async function loadEvent() {
    const rootElement = document.getElementById("root");
    const result = await parseJSON("/image-list");

    rootElement.insertAdjacentHTML("beforeend", swiperComponent(result, slideComponent));
    const swiper = new Swiper(".swiper", {
        loop: true
    });


    
}

window.addEventListener("load", loadEvent);