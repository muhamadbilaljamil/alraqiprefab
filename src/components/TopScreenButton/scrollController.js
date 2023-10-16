export const scrollController = () => {
  const topScreenButton = document.getElementById("top-screen-button");

  const handleScroll = () => {
    if (window.pageYOffset > 250) {
      topScreenButton.classList.add("active");
    } else {
      topScreenButton.classList.remove("active");
    }
  };
  window.addEventListener("scroll", handleScroll);
};
