window.onscroll = function() {
  myFunction();
};
let my_header = document.querySelector("header");
let sticky = my_header.offsetTop;
function myFunction() {
  if (window.pageYOffset >= 5) {
    my_header.classList.add("fixed_header");
  } else {
    my_header.classList.remove("fixed_header");
  }
}

let portfolio_click = document.getElementById("portfolio");
portfolio_click.onclick = function portfolio_click() {
  window.scrollTo(0, 1050);
  document.getElementById("portfolio").classList.add("inactive_portfolio");
  services_click.classList.remove("inactive_services");
  about_click.classList.remove("inactive_about");
  contact_click.classList.remove("inactive_contact");
  return true;
};

let services_click = document.getElementById("services");
services_click.onclick = function services_click() {
  window.scrollTo(0, 520);
  document.getElementById("services").classList.add("inactive_services");
  portfolio_click.classList.remove("inactive_portfolio");
  about_click.classList.remove("inactive_about");
  contact_click.classList.remove("inactive_contact");
};

let about_click = document.getElementById("about");
about_click.onclick = function() {
  window.scrollTo(0, 1925);
  document.getElementById("about").classList.add("inactive_about");
  services_click.classList.remove("inactive_services");
  portfolio_click.classList.remove("inactive_portfolio");
  contact_click.classList.remove("inactive_contact");
  return true;
};

let contact_click = document.getElementById("contact");
contact_click.onclick = function() {
  window.scrollTo(0, 2675);
  document.getElementById("contact").classList.add("inactive_contact");
  services_click.classList.remove("inactive_services");
  portfolio_click.classList.remove("inactive_portfolio");
  about_click.classList.remove("inactive_about");
  return;
};
/*let slider = [];
let blue_theme = document.getElementById("Leftchev");
blue_theme.onclick = function() {
  document.getElementById("wrapper").classList.add("blue");
  document.body.classList.add("bluebody");
  let counter = 0;
  let interval = setInterval(function() {
    document.querySelectorAll(".item").forEach(item => {
      if (item.style.left === "-797px") {
        clearInterval(interval);
        return;
      }
      counter -= 1;
      item.style.left = `${counter}px`;
    });
  }, 0.001);
  return;
};

let persik_theme = document.getElementById("Rightchev");
persik_theme.onclick = function() {
  document.getElementById("wrapper").classList.remove("blue");
  document.body.classList.remove("bluebody");
  let counterr = 0;
  let intervalr = setInterval(function() {
    document.querySelectorAll(".item").forEach(item => {
      if (item.style.left === "0px") {
        clearInterval(intervalr);
        return;
      }
      counterr += 1;
      item.style.left = `${counterr}px`;
    });
  }, 0.001);
  return;
};*/
let slides = document.querySelectorAll(".item");
let slider = [];
console.log(slides);
for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i].id;
  slides[i].remove();
}
console.log(slider);
let step = 0;
let offset = 0;
function draw() {
  let div = document.createElement("div");
  div.id = slider[step];
  div.classList.add("newSlide");
  div.style.left = offset * 797 + "px";
  document.querySelector(".contentOFcontent").appendChild("div");
}
draw();
