import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 w-full flex flex-1 flex-col gap-12 items-start justify-center">
          <h2 className="capitalize bold-40 lg:bold-64 xl:max-w-[320px]">
            get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Andriod
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
          <Button
            type="button"
            title="App Store"
            icon="/apple.svg"
            variant="btn_white"
            full
          />
          <Button
            type="button"
            title="Play Store"
            icon="/android.svg"
            variant="btn_drak_green_outline"
            full
          />
        </div>
        </div>
        <div className="flex flex-1 items-start justify-end">
          <Image src="/phones.png" alt="mobile phones" height={870} width={550}/>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
