const fadeInOut = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.6 },
  },
};

export default fadeInOut;
