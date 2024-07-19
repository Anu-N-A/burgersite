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
    //SCROLL SECTIONS ACTIVE LINK
    //SCROLL REVEAL ANIMATION