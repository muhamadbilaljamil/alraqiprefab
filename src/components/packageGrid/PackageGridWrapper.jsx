import React from "react";
import PackageCard from "./PackageCard";
import card1 from "../../assets/image/package/p-alpha1.png";
import card2 from "../../assets/image/package/p-alpha2.png";
import card3 from "../../assets/image/package/p-alpha3.png";
import card4 from "../../assets/image/package/p-alpha4.png";
import card5 from "../../assets/image/package/p-alpha5.png";
import card6 from "../../assets/image/package/p-alpha6.png";
import card7 from "../../assets/image/package/p-alpha7.png";
import card8 from "../../assets/image/package/p-alpha8.png";
import card9 from "../../assets/image/package/p-alpha9.png";
import card10 from "../../assets/image/package/p-alpha10.png";
import card11 from "../../assets/image/package/p-alpha11.png";

function PackageGridWrapper() {
  return (
    <>
      {/* ===============  Package gird area start =============== */}
      <div className="package-wrapper pt-110">
        <div className="container max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 row gap-8">
            <PackageCard
              image={card1}
              // date="7 Day &amp; 6 night"
              title="PORTA CABINS"
              price="More Datail"
            />
            <PackageCard
              image={card2}
              date=""
              title="SECURITY CABINS"
              price="More Datail"
            />
            <PackageCard
              image={card3}
              date=""
              title="Modular Concepts"
              price="More Datail"
            />
            <PackageCard
              image={card4}
              date=""
              title="Container Converted Units"
              price="More Datail"
            />
            <PackageCard
              image={card5}
              date=""
              title="Refurbished Units"
              price="More Datail"
            />
            <PackageCard
              image={card6}
              date=""
              title="Double Storey Units"
              price="More Datail"
            />
            <PackageCard
              image={card7}
              date=""
              title="Eye Wash Units"
              price="More Datail"
            />
            <PackageCard
              image={card8}
              date=""
              title="Toilet / GRP Units"
              price="More Datail"
            />
            <PackageCard
              image={card9}
              date=""
              title="Mosques"
              price="More Datail"
            />
            <PackageCard
              image={card10}
              date=""
              title="Villas"
              price="More Datail"
            />
            <PackageCard
              image={card11}
              date=""
              title="Majlis"
              price="More Datail"
            />
          </div>
        </div>
      </div>
      {/* ===============  Package gird area end =============== */}
    </>
  );
}

export default PackageGridWrapper;
