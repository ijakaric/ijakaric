"use strict";

module.exports = {
  init: function () {
    const scrollTime = .8;
    const scrollDistance = 400;

    $(window).on("mousewheel DOMMouseScroll", function (event) {
      event.preventDefault();

      let delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
      let scrollTop = $(window).scrollTop();
      let finalScroll = scrollTop - parseInt(delta * scrollDistance);

      TweenLite.to($(window), scrollTime, {
        scrollTo: {
          y: finalScroll,
          autoKill: true
        },
        ease: Power1.ease,
        overwrite: 5
      });
    });

  }
};