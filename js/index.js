const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = document.querySelector("nav");
navLength = Object.keys(siteContent["nav"]).length;

for (i = 0; i <= 5; i++){
  navBar.children[i].innerHTML = Object.values(siteContent.nav)[i]
}

let navImg = document.getElementById("cta-img")
navImg.src = siteContent.cta["img-src"]

let cta = document.querySelector(".cta")
cta.children[0].children[0].innerHTML = siteContent.cta["h1"]
cta.children[0].children[1].innerHTML = siteContent.cta["button"]

let topContent = document.querySelector(".top-content")

topContent.children[0].children[0].innerHTML = siteContent["main-content"]["features-h4"]
topContent.children[0].children[1].innerHTML = siteContent["main-content"]["features-content"]
topContent.children[1].children[0].innerHTML = siteContent["main-content"]["about-h4"]
topContent.children[1].children[1].innerHTML = siteContent["main-content"]["about-content"]

let middleImg = document.querySelector(".middle-img")
middleImg.src = siteContent["main-content"]["middle-img-src"]

let bottomContent = document.querySelector(".bottom-content")
bottomContent.children[0].children[0].innerHTML = siteContent["main-content"]["services-h4"]
bottomContent.children[0].children[1].innerHTML = siteContent["main-content"]["services-content"]
bottomContent.children[1].children[0].innerHTML = siteContent["main-content"]["product-h4"]
bottomContent.children[1].children[1].innerHTML = siteContent["main-content"]["product-content"]
bottomContent.children[2].children[0].innerHTML = siteContent["main-content"]["vision-h4"]
bottomContent.children[2].children[1].innerHTML = siteContent["main-content"]["vision-content"]

let contact = document.querySelector(".contact")
contact.children[0].innerHTML = siteContent["contact"]["contact-h4"]
contact.children[1].innerHTML = siteContent["contact"]["address"]
contact.children[2].innerHTML = siteContent["contact"]["phone"]
contact.children[3].innerHTML = siteContent["contact"]["email"]

let footer = document.querySelector("footer")
console.log(footer)
footer.children[0].innerHTML = siteContent["footer"]["copyright"]