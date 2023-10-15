export const scrollController = () => {
  const topScreenButton = document.getElementById("top-screen-button");
  // const headerSection = document.getElementById("header-section");

  const handleScroll = () => {
    if (window.pageYOffset > 250) {
      topScreenButton.classList.add("active");
      // headerSection.classList.add("active");
    } else {
      topScreenButton.classList.remove("active");
      // headerSection.classList.remove("active");
    }
  };
  window.addEventListener("scroll", handleScroll);
};
