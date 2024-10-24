import React from "react";
import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-28">
        <Image src="/camp.svg" alt="camp image" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          we are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="capitalize bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide you to easy path
          </h2>
          <p className="text-gray-30 regular-14 xl:max-w-[530px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full">
        <Image
        src="/boat.png"
        alt="boat image"
        width={1440}
        height={540}
        className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-4 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
          src="/meter.svg"
          alt="meters map"
          width={16}
          height={158}
          className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween gap-4 w-full">
                <p className="regular-16 text-gray-20 ">Destination</p>
                <p className="bold-16 text-green-50">48 mins</p>
              </div>
              <p className="bold-20 mt-2">Aguas caliantis</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Banglore</h4>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Guide;
