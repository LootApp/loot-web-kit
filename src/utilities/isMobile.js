/**
 * @desc detects mobile devices
 * @return {Boolean}
 */
const isMobile = () => {
  if (
    "ontouchstart" in window &&
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <=
      800
  )
    return true;
  return false;
};

export default isMobile;
