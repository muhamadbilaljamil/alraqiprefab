import image1 from "../../assets/images/products/image1.jpeg";
import image2 from "../../assets/images/products/image2.jpeg";
import image3 from "../../assets/images/products/image3.jpeg";
import image4 from "../../assets/images/products/image4.jpeg";
import image5 from "../../assets/images/products/image5.jpeg";
import image6 from "../../assets/images/products/image6.jpeg";
import image7 from "../../assets/images/products/image7.jpeg";
import image8 from "../../assets/images/products/image8.jpeg";
import image9 from "../../assets/images/products/image9.jpeg";
import image10 from "../../assets/images/products/image10.jpeg";
import image11 from "../../assets/images/products/image11.jpeg";
import image12 from "../../assets/images/products/image12.jpeg";
import image13 from "../../assets/images/products/image13.jpeg";
import image14 from "../../assets/images/products/image14.jpeg";
import image15 from "../../assets/images/products/image15.jpeg";
import image16 from "../../assets/images/products/image16.jpeg";
import image17 from "../../assets/images/products/image17.jpeg";
import image18 from "../../assets/images/products/image18.jpeg";
import image19 from "../../assets/images/products/image19.jpeg";
import image20 from "../../assets/images/products/image20.jpeg";
import image21 from "../../assets/images/products/image21.jpeg";
import image22 from "../../assets/images/products/image22.jpeg";
import image23 from "../../assets/images/products/image23.jpeg";
import image24 from "../../assets/images/products/image24.jpeg";
import image25 from "../../assets/images/products/image25.jpeg";
import image26 from "../../assets/images/products/image26.jpeg";
import image27 from "../../assets/images/products/image27.jpeg";
import image28 from "../../assets/images/products/image28.jpeg";
import image29 from "../../assets/images/products/image29.jpeg";
import image30 from "../../assets/images/products/image30.jpeg";
import image31 from "../../assets/images/products/image31.jpeg";
import image32 from "../../assets/images/products/image32.jpeg";
import image33 from "../../assets/images/products/image33.jpeg";
import image34 from "../../assets/images/products/image34.jpeg";
import image35 from "../../assets/images/products/image35.jpeg";
import image36 from "../../assets/images/products/image36.jpeg";
import image37 from "../../assets/images/products/image37.jpeg";
import Lightroom from "react-lightbox-gallery";
import { useLocation } from "react-router-dom";

const data = {
  "/gallery": {
    title: "Project Gallery",
    images: [
      { src: image1, desc: "", sub: "" },
      { src: image2, desc: "", sub: "" },
      { src: image3, desc: "", sub: "" },
      { src: image4, desc: "", sub: "" },
      { src: image5, desc: "", sub: "" },
      { src: image6, desc: "", sub: "" },
      { src: image9, desc: "", sub: "" },
      { src: image10, desc: "", sub: "" },
      { src: image11, desc: "", sub: "" },
      { src: image12, desc: "", sub: "" },
      { src: image13, desc: "", sub: "" },
      { src: image16, desc: "", sub: "" },
      { src: image17, desc: "", sub: "" },
      { src: image18, desc: "", sub: "" },
      { src: image19, desc: "", sub: "" },
      { src: image20, desc: "", sub: "" },
      { src: image21, desc: "", sub: "" },
      { src: image22, desc: "", sub: "" },
      { src: image23, desc: "", sub: "" },
      { src: image24, desc: "", sub: "" },
      { src: image26, desc: "", sub: "" },
      { src: image27, desc: "", sub: "" },
      { src: image29, desc: "", sub: "" },
      { src: image30, desc: "", sub: "" },
      { src: image32, desc: "", sub: "" },
      { src: image33, desc: "", sub: "" },
      { src: image34, desc: "", sub: "" },
      { src: image35, desc: "", sub: "" },
      { src: image36, desc: "", sub: "" },
      { src: image37, desc: "", sub: "" },
      { src: image7, desc: "", sub: "" },
      { src: image8, desc: "", sub: "" },
      { src: image14, desc: "", sub: "" },
      { src: image15, desc: "", sub: "" },
      { src: image25, desc: "", sub: "" },
      { src: image28, desc: "", sub: "" },
      { src: image31, desc: "", sub: "" },
    ],
  },
  "/porta-cabins": {
    title: "Porta Cabins",
    images: [{ src: image1, desc: "", sub: "" }],
  },
  "/security-cabins": {
    title: "Security Cabins",
    images: [{ src: image1, desc: "", sub: "" }],
  },
  "/modular-concepts": {
    title: "Modular Concepts",
    images: [{ src: image1, desc: "", sub: "" }],
  },
  "/container-converted-units": {
    title: "Container Converted Units",
    images: [{ src: image1, desc: "", sub: "" }],
  },
  "/refurbished-units": {
    title: "Refurbished Units",
    images: [{ src: image1, desc: "", sub: "" }],
  },
  "/double-storey-units": {
    title: "Double Story Units",
    images: [{ src: image1, desc: "", sub: "" }],
  },
  "/toilet-GRP-units": {
    title: "Toilet / GRP Units",
    images: [{ src: image1, desc: "", sub: "" }],
  },
  "/mosques": {
    title: "Mosques",
    images: [{ src: image1, desc: "", sub: "" }],
  },
  "/villas": {
    title: "Villas",
    images: [{ src: image1, desc: "", sub: "" }],
  },
  "/majlis": {
    title: "Majlis",
    images: [{ src: image1, desc: "", sub: "" }],
  },
};
var settings = {
  className: "rounded",
  columnCount: {
    default: 3,
    mobile: 3,
    tab: 4,
  },
  mode: "dark",
};

export const Gallery = () => {
  const { pathname } = useLocation();
  const item = data[pathname];

  return (
    <div className="gallary-wrapper max-w-[1340px] p-4 mx-auto mt-[80px] md:mt-[200px]">
      <div className="gallary-group-header">
        <h4 className="font-spaceG text-3xl text-[#12497f] md:text-[45px] font-extrabold">
          {item.title}
        </h4>
      </div>

      <div className="py-8 md:mt-12">
        <Lightroom images={item.images} settings={settings} />
      </div>
    </div>
  );
};
