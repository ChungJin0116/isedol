gsap.config ({
    nullTargetWarn : false,
    trialWarn: false
  })

gsap.to(".typo_text01", {
    x: "130vw",
    transformOrigin: "center center",
    scrollTrigger: {
      trigger: ".typo_text02",
      start: "top 62%",
      end: "bottom top-=200",
      scrub: 2
    }
  });

  gsap.to(".typo_text02", {
    x: "-130vw",
    transformOrigin: "center center",
    scrollTrigger: {
    marker: 'true',
      trigger: ".typo_text02",
      start: "top 62%",
      end: "bottom top-=200",
      scrub: 2
    }
  });