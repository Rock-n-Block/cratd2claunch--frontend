(function () {
  const options = {
    type: 'carousel',
    breakpoints: {
      980: {
        perView: 2,
      },
      420: {
        perView: 1,
      },
    },
  };
  new Glide('.roadmap-slider--glide', options).mount();
})();
