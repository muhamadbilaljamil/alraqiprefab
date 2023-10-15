// ** React Imports
import { createContext, useState } from "react";

// ** Defaults
const defaultProvider = {
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
  loading: false,
  setLoading: () => Boolean,
};
const Context = createContext(defaultProvider);

const ContextProvider = ({ children }) => {
  // ** States
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

  const handleClickScroll = (e) => {
    const element = document.getElementById(e);
    // console.log("Element: ", element);
    setMenuOpen(false);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const values = {
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
    loading,
    setLoading,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
