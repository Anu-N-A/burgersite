    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById('nav-menu');
    const closeIcon = document.getElementById("nav-close");
    const navLink = document.querySelectorAll(".nav__link");

    navLink.forEach( link => 
        link.addEventListener("click",() => {
            navMenu.classList.add('hidden')
        })
    )
    closeIcon.addEventListener("click",() => {
        navMenu.classList.add('hidden')
    })

    hamburger.addEventListener("click",() => {
        navMenu.classList.remove('hidden')
    })

    const tabs = document.querySelectorAll(".tabs_wrap ul li");
    const all = document.querySelectorAll('.item-wrap');
    const food = document.querySelectorAll('.food');
    const snack = document.querySelectorAll('.snack');
    const beverage = document.querySelectorAll('.beverage')

    tabs.forEach(tab => {
        tabs.addEventListener("click", () => {
            tabs.forEach(tab => {
                tab.classList.add('active')
            })

            tab.classList.add('active')

            const tabval = tab.getAttribute('data-tabs')
            
            all.forEach(item => {
                item.style.display = 'none'
            })

            if (tabval == 'food'){
                foods.forEach(item => {
                    item.style.display = 'block'
                })
            }
            else if (tabval == 'snack'){
                snack.forEach(item => {
                    item.style.display = 'block'
                })
            }
            else if (tabval == 'beverage'){
                beverage.forEach(item => {
                    item.style.display = 'block'
                })
            }
            else {
                all.forEach(item => {
                    item.style.display = 'block'
                });
            }
        });
    });
    //DARK LIGHT THEME

    const html = document.querySelector("html");
    const themeBtn = document.getElementById("theme-toggle");

    if(localStorage.getItem("mode") == "dark"){
       darkMode();
    }else{
        lightMode();
    }

    themeBtn.addEventListener('click', (e) => {
        if(localStorage.getItem("mode") == "light"){
            darkMode();
        }else{
            lightMode();
        }
       
    })
    function darkMode() {
        html.classList.add("dark");
        themeBtn.classList.replace("ri-moon-line","ri-sun-line");
        localStorage.setItem("node","dark");

    }
    function lightMode() {
        html.classList.remove("dark");
        themeBtn.classList.replace("ri-sun-line","ri-moon-line");
        localStorage.setItem("node","light");

    }

    //SHOW SCROLL UP
    const scrollUp = {} => {
        const scrollUpBtn = document.getElementsById("scroll-up")
        if(this.scrollY >= 250){
            scrollUpBtn.classList.remove("-bottom-1/2");
            scrollUpBtn.classList.add("-bottom-4");
        }else{
            scrollUpBtn.classList.add("-bottom-1/2");
            scrollUpBtn.classList.remove("-bottom-4");
        }
    }
    window.addEventListener('scroll',scrollUp)
    //CHANGE BACKGROUND HEADER
    const scrollHeader = {} => {
        const header = document.getElementsById("header")
        if(this.scrollY >= 50){
            header.classList.add("border-b","border-secondaryColor");
        }else{
            header.classList.remove("border-b","border-secondaryColor");
        }
    }
    window.addEventListener('scroll',scrollUp)
    //SCROLL SECTIONS ACTIVE LINK
      
     const activeLink = () => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav__link"); 

        let current = 'home';

        sections.forEach(section =>{
            const sectionTop = section.offsetTop;

            if(this.scrollY >= sectionTop - 60){
                current - section.getAttribute("id");
            }
        });
        navLink.forEach((item) => {
            item.classList.remove("text secondaryColor");
            if(item.href.includes(current)){
                item.classList.add("text-secondaryColor");
            }
        });
     };
     window.addEventListener('scroll',activeLink)

    //SCROLL REVEAL ANIMATION
    const src = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2500,
        delay: 480
    })
    src.reveal(".home__image")
    src.reveal(".home__content",{origin: "bottom"});
    src.reveal(".category__card",{interval: 300})
    src.reveal(".promo__card1",{origin: "left"});
    src.reveal(".promo__card2",{origin: "right"});
    src.reveal(".about__img",{origin: "bottom"});
    src.reveal(".about__content",{origin: "top"});
    src.reveal(".menu__items",{origin: "left"});
    src.reveal(".customer__review",{origin: "right"});
    src.reveal(".footer");
    