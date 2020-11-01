document.addEventListener("DOMContentLoaded", () => {
    new Glide(".banner", {
      type: "carousel",
      startAt: 0,
      animationTimingFunc: "ease-in-out",
      perView: 1
    }).mount();

    new Glide(".typeService", {
        type: "carousel",
        startAt: 0,
        animationTimingFunc: "ease-in-out",
        perView: 4
      }).mount();

    new Glide(".bannerService", {
        type: "carousel",
        startAt: 0,
        animationTimingFunc: "ease-in-out",
        perView: 1.2
    }).mount();

    new Glide(".bannerhotDoctor", {
        type: "carousel",
        startAt: 0,
        animationTimingFunc: "ease-in-out",
        perView: 1.5
    }).mount();

    new Glide(".bannerhotHospital", {
        type: "carousel",
        startAt: 0,
        animationTimingFunc: "ease-in-out",
        perView: 1.5
    }).mount();

    new Glide(".bannerBlog", {
        type: "carousel",
        startAt: 0,
        animationTimingFunc: "ease-in-out",
        perView: 1.7
    }).mount();
  });