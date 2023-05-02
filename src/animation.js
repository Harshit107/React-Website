const animation = [
  {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    config: { duration: 600 },
  },
  {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 600 },
  },
  {
    from: { transform: "rotateY(180deg)" },
    enter: { transform: "rotateY(0deg)" },
    config: { duration: 600 },
  },

  {
    from: { transform: "translateY(100%)" },
    enter: { transform: "translateY(0%)" },
    config: { duration: 600 },
  },
  {
    from: { transform: "scale(0)" },
    enter: { transform: "scale(1)" },
    config: { duration: 600 },
  },

  {
    from: { transform: "skewY(-70deg)" },
    enter: { transform: "skewY(0deg)" },
    config: { duration: 600 },
  },
];

export default animation;