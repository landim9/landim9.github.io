const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }

    let boxes = document.querySelectorAll(".box");

    window.onload = function(){
        setTimeout(() => {
            load_bars();
        }, 1000);
    }

    function load_bars(){
        boxes.forEach(box => {
            let line = box.querySelector(".line");
            let increasing_percentage = box.querySelector(".increasing_percentage");
            let total_percentage = box.querySelector(".total_percentage");
            
            let p = 0;
            let my_interval = setInterval(() => {
                p++;
                line.style.width = p + "%";
                increasing_percentage.innerHTML = p + "%";
                if(increasing_percentage.innerHTML == total_percentage.innerHTML){
                    clearInterval(my_interval);
                }
            }, 25);
        });
    }
