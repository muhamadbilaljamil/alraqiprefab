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

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image9,
  image10,
  image11,
  image12,
  image13,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image26,
  image27,
  image29,
  image30,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image7,
  image8,
  image14,
  image15,
  image25,
  image28,
  image31,
];

export const Gallery = () => {
  return (
    <div className="">
      <div className="gallary-wrapper max-w-[1340px] mx-auto mt-[200px]">
        <div className="gallary-group-header">
          <h4 className="gallary-group-title">Projects Gallery</h4>
        </div>
        <div className="gallery-wrapper">
          <div className="grid grid-cols-4  py-8 mt-24 gap-6">
            {images.map((image, index) => (
              <div className="overflow-hidden rounded-lg h-fit transition-all duration-300 border-[6px] border-white hover:scale-[1.1]">
                <img
                  src={image}
                  alt="gallery"
                  key={index}
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
