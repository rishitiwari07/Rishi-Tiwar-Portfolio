const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


// ========================================
// sticky navigation
// ========================================
const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    },
     {
        // viewport
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
// when the hero section end part reached then we need to show the sticky navigation
observer.observe(section_hero);

// ========================================
// creating a portfolio tabbed component
// ========================================

const port_btn = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");
});   