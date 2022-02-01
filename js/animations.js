export function animations(){
  anime({
    targets: ".navcomp",
    translateX: 400,
    direction: "reverse",
    duration: 1000,
    opacity: ["100", "0"],
    delay: 400
  })
  anime({
    targets: ".logo",
    translateY: -50,
    direction: "reverse",
    duration: 1000,
    delay: 400,
    opacity: ["100", "0"]
  })
  anime({
    targets: "#carouselheader",
    translateX: -1000,
    duration: 1500,
    delay: 600,
    direction: "reverse",
    opacity: ["100", "0"]
  })
}