const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }
  
function viewHandler(event) {
    // create a variable to hold the element **image!** that was clicked on from event.target
    let clickedElement = event.target;

    // get the src attribute from that element and 'split' it on the "-"
    let srcAttribute = clickedElement.src.split("-");

    // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    let fullImage = `${srcAttribute[0]}-full.jpeg`;

    // insert the viewerTemplate into the top of the body element
    let viewerTemplate = `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${fullImage}" alt="Full size image">
        </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate);

    // add a listener to the close button (X) that calls a function called closeViewer when clicked
    let closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', viewHandler);
});