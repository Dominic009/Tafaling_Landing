import PrimaryBtn from "@/components/PrimaryBtn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-[#004A99] to-[#00B4DB]">
      <div className="opacity-20 absolute -left-52 scale-125"></div>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 w-full items-center justify-center"
        style={{
          backgroundImage: `url('/Pattern 3.png')`,
          backgroundSize: "1700px",
          backgroundPosition: "-600px -150px",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left side */}
        <div className="z-50 flex flex-col items-center justify-center lg:border-r scale-50 lg:scale-100 h-[50%]">
          <h1 className="font-semibold text-[#08B7EB] text-4xl mb-3">
            Welcome to
          </h1>
          <Link href={'/'}>
            <Image
              src="/Tafaling logo.png"
              alt="Image"
              width={500}
              height={200}
              className="mix-blend-plus-darker"
            ></Image>
          </Link>
        </div>

        {/* Rigth side */}
        <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto z-50">
          <div className="bg-gray-900/30 backdrop-blur-[2px] py-10 rounded-xl flex flex-col items-center">
            <h1 className="text-3xl text-white border-b-4 border-[#008EAD] mb-8">
              Sign In
            </h1>

            {/* Input fields */}
            <div className="flex flex-col gap-5 w-[80%]">
              {/* Email */}
              <input
                placeholder="Your Email"
                type="text"
                className="px-4 py-2 rounded-md outline-none"
              ></input>
              {/* Password */}
              <div className="relative">
                <input
                  placeholder="Your Password"
                  type="password"
                  className="px-4 py-2 rounded-md outline-none w-full"
                ></input>
                <Image
                  src={"/Eye.png"}
                  alt="Eye_Icon"
                  width={20}
                  height={20}
                  className="absolute right-3 top-3"
                ></Image>
              </div>
              <a href="#" className="text-[#D6EAFF]/50 -mt-5 text-sm">
                Forgotten password?
              </a>
            </div>

            {/* Sign In button */}
            <div className="flex items-center gap-1 w-[80%] mt-8">
              <input type="checkbox" />
              <p className="text-[#D6EAFF]/50">Remember Me</p>
            </div>

            {/* Sign in btn */}
            <PrimaryBtn text={"Sign In"} width={"80%"} />

            {/* Third party log in */}
            <div className="w-[80%] mt-7 flex gap-2 items-center mb-3">
              <div className="border-b border-[#BFB0B0] w-[33%]"></div>
              <div className="text-[#D6EAFF]/50 flex-1 text-center">
                or continue with
              </div>
              <div className="border-b border-[#BFB0B0] w-[33%]"></div>
            </div>

            <p className="text-center font-light text-gray-400 text-sm md:text-md">
              By clicking continue, you agree to Tafalings <br />{" "}
              <a href="#" className="text-gray-300">
                User Agreement
              </a>
              ,{" "}
              <a href="#" className="text-gray-300">
                Privacy Policy{" "}
              </a>{" "}
              &{" "}
              <a href="#" className="text-gray-300">
                Cookie Policy
              </a>
            </p>

            <div className="flex gap-4 text-[#00B4DB] font-normal w-[70%] mt-5">
              <button className="bg-[#F2F2F2] w-[100%] py-2 px-4 rounded-md text-lg flex justify-center items-center gap-2">
                <Image
                  src="/google.png"
                  alt="google"
                  width={25}
                  height={50}
                ></Image>
                Google
              </button>
              <button className="bg-[#F2F2F2] w-[100%] py-2 px-4 rounded-md lg:text-lg">
                Other
              </button>
            </div>
          </div>

          {/* Join Now link */}
          <h2 className="mt-7 text-white text-center text-xl font-light">
            New to Tafaling?{" "}
            <Link href="/register" className="text-[#025C70] font-semibold">
              JOIN NOW
            </Link>
          </h2>
        </div>
      </div>
    </main>
  );
};

export default page;
