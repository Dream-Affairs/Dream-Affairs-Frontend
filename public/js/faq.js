const checks = document.querySelectorAll('.checks');
const navigations = document.querySelectorAll(".faq-nav");
const nav_displays = document.querySelectorAll(".displays");

for (let nav of navigations) {
    nav.addEventListener("click",(event) => {
        for (let display of nav_displays) {
            display.style.display = 'none'
        }
        for (let nav of navigations){
            nav.classList.remove("active_faq_nav");
        }
        
        event.target.classList.add("active_faq_nav")
        document.getElementById(`${event.currentTarget.id}_display`).style.display = "block"
    })
}

for (let check of checks) {
    check.addEventListener("change",(e)=> {
               changeListener(e.target,`label0_${e.currentTarget.id}`,`label1_${e.currentTarget.id}`);
    })
}

function changeListener(element,initialLabel,displayLabel) {
    if (element.checked) {
        document.getElementById(`${displayLabel}`).style.display = "block"
        document.getElementById(`${initialLabel}`).style.display = "none"
    } else {
        document.getElementById(`${displayLabel}`).style.display = "none"
        document.getElementById(`${initialLabel}`).style.display = "block"
    }
}