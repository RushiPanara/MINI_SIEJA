export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 100,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};