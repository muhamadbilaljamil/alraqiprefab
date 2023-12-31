import React from "react";
import PackageCard from "./PackageCard";
import card1 from "../../assets/images/services/portable_cabins/portable_cabin3.jpeg";
import card2 from "../../assets/images/services/security_cabins/security_cabin3.jpeg";
import card3 from "../../assets/images/services/modular_concept/modular_concept1.jpeg";
import card4 from "../../assets/images/services/container_converted/container_converted4.jpeg";
import card5 from "../../assets/images/services/refurbished_units/refurbished_unit2.jpeg";
import card6 from "../../assets/images/services/double_stories/double_story2.jpeg";
import card9 from "../../assets/images/services/masjid/masjid1.jpeg";
import card10 from "../../assets/images/services/villas/villas1.jpeg";

function PackageGridWrapper() {
  return (
    <>
      {/* ===============  Package gird area start =============== */}
      <div className=" package-wrapper mt-10 md:pt-110">
        <div className="container max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 row gap-8">
            <PackageCard
              image={card1}
              title="PORTA CABINS"
              path="/porta-cabins"
            />
            <PackageCard
              image={card2}
              title="SECURITY CABINS"
              path="/security-cabins"
            />
            <PackageCard
              image={card3}
              title="Modular Concepts"
              path="/modular-concepts"
            />
            <PackageCard
              image={card4}
              title="Container Converted Units"
              path="/container-converted-units"
            />
            <PackageCard
              image={card5}
              title="Refurbished Units"
              path="/refurbished-units"
            />
            <PackageCard
              image={card6}
              title="Double Storey Units"
              path="/double-storey-units"
            />
            <PackageCard image={card9} title="Mosques" path="/mosques" />
            <PackageCard image={card10} title="Villas" path="/villas" />
          </div>
        </div>
      </div>
      {/* ===============  Package gird area end =============== */}
    </>
  );
}

export default PackageGridWrapper;
