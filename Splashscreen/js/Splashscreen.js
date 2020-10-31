
document.addEventListener("DOMContentLoaded", () => {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      animationTimingFunc: "ease-in-out",
      perView: 1
    }).mount();
  });