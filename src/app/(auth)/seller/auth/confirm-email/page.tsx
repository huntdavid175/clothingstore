import Image from "next/image";
import React from "react";

const ConfirmEmail = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-8 px-8">
      <div>
        <Image
          src={"/email-sent.svg"}
          alt="confirm-email"
          width={150}
          height={150}
          className="lg:animate-bounce"
        />
      </div>
      <h4 className="text-lg lg:text-2xl font-raleway text-center">
        Please check your email to continue the signup process
      </h4>
    </div>
  );
};

export default ConfirmEmail;
