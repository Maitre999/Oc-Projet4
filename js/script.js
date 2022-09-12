"use strict";

function myFunction() {
  let element = document.getElementById("nav-slide");
  element.classList.toggle("open");
}

const images = document.querySelectorAll(".open-modal");
const body = document.querySelector("body");
const modal = document.getElementById("lightbox-modal");
const modalOverlay = document.getElementById("overlay");
const changeImage = document.getElementById("lightbox-image");
const textData = [
  "Refonte d'un site web pour un journal local",
  "Création d'un site web pour photographes",
  "Création d'un site internet pour un voyageur",
  "Conception d'un site pour une agence de mariage",
];

const nextBtnImg = (display) => {
  document.querySelector(".next-lightbox").style.display = display;
};
const prevBtnImg = (display) => {
  document.querySelector(".prev-lightbox").style.display = display;
};

function textChange() {
  document.querySelector(".lightbox-caption").textContent =
    textData[arrayNumber];
}

let arrayNumber = "";
let imgNumber = "";

for (let i = 0; i < images.length; i++)
  images[i].addEventListener("click", () => {
    arrayNumber = i;
    imgNumber = i + 1;
    changeImage.src = `./assets/img/${imgNumber}.webp`;
    document.querySelector(".lightbox-caption").textContent = textData[i];
    body.classList.add("modal-open");
    document.getElementById("lightbox-modal").classList.add("opened");
    modalOverlay.style.visibility = "visible";
    modalOverlay.style.opacity = ".5";
    if (arrayNumber === 0) {
      prevBtnImg("none");
    } else if (arrayNumber === 3) {
      nextBtnImg("none");
    } else if (arrayNumber > 0 && arrayNumber < 3) {
      prevBtnImg("block");
      nextBtnImg("block");
    }
  });

document.querySelector(".prev-lightbox").addEventListener("click", () => {
  imgNumber--;
  arrayNumber--;
  textChange();
  changeImage.src = `./assets/img/${imgNumber}.webp`;
  if (arrayNumber === 0) {
    prevBtnImg("none");
  } else if (arrayNumber > 0 && arrayNumber < 3) {
    prevBtnImg("block");
    nextBtnImg("block");
  }
});
document.querySelector(".next-lightbox").addEventListener("click", () => {
  imgNumber++;
  arrayNumber++;
  document.querySelector(".lightbox-caption").textContent =
    textData[arrayNumber];
  changeImage.src = `./assets/img/${imgNumber}.webp`;
  if (arrayNumber === 3) {
    nextBtnImg("none");
  } else if (arrayNumber > 0 && arrayNumber < 3) {
    prevBtnImg("block");
    nextBtnImg("block");
  }
});

document.querySelector(".close-lightbox").addEventListener("click", () => {
  document.getElementById("lightbox-modal").classList.remove("opened");
  modalOverlay.style.visibility = "hidden";
  modalOverlay.style.opacity = "0";
  body.classList.remove("modal-open");
  prevBtnImg("block");
  nextBtnImg("block");
});

document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("lightbox-modal").classList.remove("opened");
  modalOverlay.style.visibility = "hidden";
  modalOverlay.style.opacity = "0";
  body.classList.remove("modal-open");
  prevBtnImg("block");
  nextBtnImg("block");
});

document.querySelector(".modal").addEventListener("swiped-left", () => {
  if (arrayNumber < 3) {
    prevBtnImg("block");
    nextBtnImg("block");
    imgNumber++;
    arrayNumber++;
    document.querySelector(".lightbox-caption").textContent =
      textData[arrayNumber];
    changeImage.src = `./assets/img/${imgNumber}.webp`;
  }
  if (arrayNumber === 3) {
    nextBtnImg("none");
  }
});

document.querySelector(".modal").addEventListener("swiped-right", () => {
  if (arrayNumber > 0) {
    prevBtnImg("block");
    nextBtnImg("block");
    imgNumber--;
    arrayNumber--;
    textChange();
    changeImage.src = `./assets/img/${imgNumber}.webp`;
  }
  if (arrayNumber === 0) {
    prevBtnImg("none");
  }
});

/*!
 * pure-swipe.js - v1.0.5
 * Pure JavaScript swipe events
 * https://github.com/john-doherty/pure-swipe
 * @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
!(function (t, e) {
  "use strict";
  "initCustomEvent" in e.createEvent("CustomEvent") &&
    ((t.CustomEvent = function (t, n) {
      n = n || { bubbles: !1, cancelable: !1, detail: void 0 };
      var u = e.createEvent("CustomEvent");
      return u.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), u;
    }),
    (t.CustomEvent.prototype = t.Event.prototype)),
    e.addEventListener(
      "touchstart",
      function (t) {
        if ("true" === t.target.getAttribute("data-swipe-ignore")) return;
        (l = t.target),
          (i = Date.now()),
          (n = t.touches[0].clientX),
          (u = t.touches[0].clientY),
          (a = 0),
          (o = 0);
      },
      !1
    ),
    e.addEventListener(
      "touchmove",
      function (t) {
        if (!n || !u) return;
        var e = t.touches[0].clientX,
          i = t.touches[0].clientY;
        (a = n - e), (o = u - i);
      },
      !1
    ),
    e.addEventListener(
      "touchend",
      function (t) {
        if (l !== t.target) return;
        var e = parseInt(l.getAttribute("data-swipe-threshold") || "20", 10),
          s = parseInt(l.getAttribute("data-swipe-timeout") || "500", 10),
          r = Date.now() - i,
          c = "";
        Math.abs(a) > Math.abs(o)
          ? Math.abs(a) > e &&
            r < s &&
            (c = a > 0 ? "swiped-left" : "swiped-right")
          : Math.abs(o) > e &&
            r < s &&
            (c = o > 0 ? "swiped-up" : "swiped-down");
        "" !== c &&
          l.dispatchEvent(new CustomEvent(c, { bubbles: !0, cancelable: !0 }));
        // console &&
        // console.log &&
        // console.log(c + " fired on " + l.className));
        (n = null), (u = null), (i = null);
      },
      !1
    );
  var n = null,
    u = null,
    a = null,
    o = null,
    i = null,
    l = null;
})(this, document);
