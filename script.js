function locomotive(){
    gsap.registerPlugin(ScrollTrigger);  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
//   locomotive();
  
  /**Mode dark or light */
  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const select = document.querySelector("select");
    const body = document.body;
    const header = document.querySelector("header");
    const special = document.getElementById("special");
    const elementsToToggleColor = [document.querySelector("h1"), document.querySelector("h2"), document.querySelector("h3")];
  
    function applyStyles(isDarkMode) {
        const backgroundColor = isDarkMode ? '#1a1a1a' : '#ffffff';
        const textColor = isDarkMode ? '#ffffff' : '#000000';
  
        document.querySelector(".menu-content").style.backgroundColor = "black";
        document.documentElement.style.backgroundColor = backgroundColor;
        document.documentElement.style.color = textColor;
        header.style.backgroundColor = isDarkMode ? "black" : "white";
        special.style.color = textColor;
  
        for (const element of elementsToToggleColor) {
            element.style.color = textColor;
        }
        menuContent.style.right = '-100%';
    }
  
    toggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        applyStyles(isDarkMode);
    });
  
    select.addEventListener('change', function (event) {
        const selectedValue = event.target.value;
        const isDarkMode = selectedValue !== "";
        body.classList.toggle('dark-mode', isDarkMode);
        applyStyles(isDarkMode);
    });
  
  });

  /** Mobile  menue  */
  const menu = document.querySelector('#menu')

  const  menuContent = document.querySelector(".menu-content");
 let flag = true; 
 menu.addEventListener('click',()=>{
  if(flag){
    menuContent.style.right = "0";
    flag = false;
  }else{
    menuContent.style.right = "-100%";
    flag = true;
  }
 })
  const linkContainer = document.querySelectorAll(".link-container");
  linkContainer.forEach((elm)=>{
    elm.addEventListener('click',()=>{
      menuContent.style.right = "-100%";
    })
  })
  /** Reload Page */
  window.addEventListener('resize', function () {
    location.reload();
  });
  
  /** Type Js */
  function typeJs(){
    var typed = new Typed('.auto-type', {
      strings: ["into Front-End Development","a Problem Solver","learning Back-End"],
      smartBackspace: true,
      loop:true, 
      typeSpeed:70,
    });
  }
  typeJs();
  
  /**Swipper Js */
  function swiperJs(){
    var swiper = new Swiper(".mySwiper", {
      direction: "horizontal",
      autoplay:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  swiperJs();
  
  /**Download Resume */
  function resume(){
    var documentUrl = 'https://drive.google.com/file/d/1sZGW5G_HYOD0C5agLwG-0JUmMNZKpR4F/view?usp=drivesdk.pdf';
  
    var link = document.createElement('a');
    link.href = documentUrl;
  
    link.download = 'https://drive.google.com/file/d/1sZGW5G_HYOD0C5agLwG-0JUmMNZKpR4F/view?usp=drivesdk.pdf';
  
    document.body.appendChild(link);
    link.click();
  
    document.body.removeChild(link);
  }
  
  const downloadResume =document.querySelectorAll("#resume");
  downloadResume.forEach((elem)=>{
    elem.addEventListener('click',()=>{
      resume();
    })
  })
  
  /**Hire me Now */
  function hrieRequestBtn(){
    var phoneNumber = "+91 9155061725"; 
    var massage = "Hii%Nitesh,"; 
    var whatsAppUri = `whatsapp://send?phone=${phoneNumber}&text=${massage}`; 
    window.open(whatsAppUri);
  }
  const hireRequestButton = document.querySelectorAll(".leftBtn"); 
  hireRequestButton.forEach((elem)=>{
    elem.addEventListener('click',()=>{
      hrieRequestBtn();
    })
  })
  
  /**Black Text Color in DarkMode of Project conatiner */
  const darkText = function(){
   document.querySelectorAll('.content h1')
   .forEach((elem)=>{
    elem.style.color = "black";
   })
   document.querySelectorAll('.content p')
   .forEach((elem)=>{
    elem.style.color = "black";
   })
  }
  darkText();
  
  /** Nav a */