import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp site"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Nandi Hills Camp area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5 ">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  alt="stars"
                  key={index}
                  width={29}
                  height={29}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            210k
            <span className="regular-16 lg:regular-20 ml-1">
              Excllent reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download" variant="btn_green" />
          <Button
            type="button"
            title="How do we work?"
            icon="/play.svg"
            variant="btn_white"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
          <div className="relative z-20 w-[268px] flex flex-col rounded-3xl gap-8 bg-green-90 px-7 py-8">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Location</p>
                <Image 
                src="/close.svg"
                alt="closed"
                width={24}
                height={24}
                />
              </div>
              <p className="regular-16 bold-20 text-white">Mysore outskirts</p>
            </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 text-gray-20">Distance</p>
                <p className="regular-16 bold-20 text-white">198 kms</p>
              </div>
            </div>

              <div className="flex flex-col">
                <p className="regular-16 text-gray-20">Elevation</p>
                <p className="regular-16 bold-20 text-white">2.404Km</p>
              </div>
            
          </div>
        </div>
    </section>
  );
};

export default Hero;