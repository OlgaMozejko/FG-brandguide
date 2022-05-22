"use strict";

//loader

window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});


//left side navigation 1

const indicators = document.querySelectorAll(".indicator");
const sections = document.querySelectorAll(".side-section");

function resetCurrentActiveIndicator() {
  const activeIndicator = document.querySelector(".active");
  activeIndicator.classList.remove("active");
}

function onSectionLeavesViewport(section) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resetCurrentActiveIndicator();
          const element = entry.target;
          const indicator = document.querySelector(`a[href='#${element.id}']`);
          indicator.classList.add("active");
          return;
        }
      });
    },
    {
      root: null,
     rootMargin: "0px",
      threshold: 0.2
    }
  );
  observer.observe(section);
}

indicators.forEach((indicator) => {
  indicator.addEventListener("click", function (event) {
    event.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    resetCurrentActiveIndicator();
    this.classList.add("active");
  });
});

sections.forEach(onSectionLeavesViewport);



// menu drop down

var timeOutValue = 100;  
    var setTimeToHide_ID, mItem;

    function showmenu(obj) {
        if (mItem) mItem.style.display = 'none';

        mItem = document.getElementById(obj);
        mItem.style.display = 'block';
    }

    function setTimeToHide() { 
        setTimeToHide_ID = window.setTimeout(HideMenu, timeOutValue); 
    }

    function HideMenu() { 
        if (mItem) mItem.style.display = 'none'; 
    } 

    function ReSetTimer() {
        if (setTimeToHide_ID) {
            window.clearTimeout(setTimeToHide_ID);
            setTimeToHide_ID = 0;
        }
    };


    // product photos gallery

    function myImageFunction(productSmallImg) {
      var productFullImg = document.getElementById("img-Box");
      productFullImg.src = productSmallImg.src;
  }