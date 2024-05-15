"use client";

import "./Deities.css";
import { deities } from "./deitiesData";

const Deities = () => {
  return (
    <>
      <div className="speakers pt-32 px-12">
        <h1>Eternal Beauty</h1>
      </div>
      <div className="image-accordion overflow-hidden pb-10">
        <div className="image-row flex h-[450px] justify-center mb-5 mr-0">
          {deities.map((dts, index) => (
            <div
              key={index}
              className="image-item"
              style={{
                backgroundImage: `url(${dts.image})`,
              }}
            >
              <h3>{dts.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Deities;
