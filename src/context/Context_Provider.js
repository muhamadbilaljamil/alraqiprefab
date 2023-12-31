import { createContext, useState } from "react";

const defaultProvider = {
  menus: [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/services",
      title: "Services",
      icon: true,
      children: [
        { path: "/porta-cabins", title: "Porta Cabins" },
        { path: "/security-cabins", title: "Security Cabins" },
        { path: "/modular-concepts", title: "Modular Concepts" },
        {
          path: "/container-converted-units",
          title: "Container Converted Units",
        },
        { path: "/refurbished-units", title: "Refurbished Units" },
        { path: "/double-storey-units", title: "Double Storey Units" },
        // { path: "/toilet-GRP-units", title: "Toilet / GRP Units" },
        { path: "/mosques", title: "Mosques" },
        { path: "/villas", title: "Villas" },
        // { path: "/majlis", title: "Majlis" },
      ],
    },
    { path: "/gallery", title: "Gallery" },
    { path: "/about-us", title: "About us" },
    { path: "/contact-us", title: "Contact us" },
  ],
  menuOpen: false,
  setMenuOpen: () => {},
  user: null,
  setUser: () => null,
  showProfile: false,
  setShowProfile: () => Boolean,
  isToast: false,
  setIsToast: () => Boolean,
  isModal: false,
  setIsModal: () => Boolean,
  toastData: {
    title: "",
    description: "",
    setIsToast: "",
  },
  setToastData: () => {},
  handleClickScroll: () => {},
  handleScrollToTop: () => {},
  loading: false,
  setLoading: () => Boolean,
};
const Context = createContext(defaultProvider);

const ContextProvider = ({ children }) => {
  // ** States
  const menus = defaultProvider.menus;
  const [menuOpen, setMenuOpen] = useState(defaultProvider.menuOpen);
  const [showProfile, setShowProfile] = useState(defaultProvider.showProfile);
  const [user, setUser] = useState(defaultProvider.user);
  const [isToast, setIsToast] = useState(defaultProvider.isToast);
  const [isModal, setIsModal] = useState(defaultProvider.isModal);
  const [toastData, setToastData] = useState(defaultProvider.toastData);
  const [loading, setLoading] = useState(defaultProvider.loading);

  const showToast = (title, description) => {
    setToastData({
      title,
      description,
      setIsToast,
    });
    return setIsToast(true);
  };

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      // left: 0,
      behavior: "smooth",
    });
  };

  const handleClickScroll = (e) => {
    const element = document.getElementById(e);
    setMenuOpen(false);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const values = {
    menus,
    menuOpen,
    setMenuOpen,
    showProfile,
    setShowProfile,
    user,
    setUser,
    isToast,
    setIsToast,
    showToast,
    isModal,
    setIsModal,
    toastData,
    setToastData,
    handleClickScroll,
    handleScrollToTop,
    loading,
    setLoading,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
