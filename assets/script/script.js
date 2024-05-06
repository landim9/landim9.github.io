        const header = document.querySelector(".header-bg");
    const links = header.querySelectorAll("ul li a");
    
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
    
        sections.forEach((section) => {
            const id = section.getAttribute("id");
            const offset = section.offsetTop - 200;
            const height = section.offsetHeight;
    
            if (scrollPosition >= offset && scrollPosition < offset + height) {
                links.forEach((link) => {
                    if (link.getAttribute("href").includes(id)) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    });