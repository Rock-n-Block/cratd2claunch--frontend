(function () {
  const options = {
    type: 'carousel',
    perView: 3,
    autoplay: 2500,
    breakpoints: {
      1180: {
        perView: 2,
      },
      980: {
        perView: 2,
      },
      640: {
        perView: 1,
      }
    },
  };
  new Glide('.lifestyle-slider', options).mount();
})();
