import PrimaryBtn from "@/components/PrimaryBtn";
import SecondaryBtn from "@/components/SecondaryBtn";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#004A99] to-[#00B4DB] p-5">
      <div>
        <Image
          src="/Tafaling logo.png"
          alt="Image"
          width={200}
          height={100}
          className="mix-blend-plus-darker"
        ></Image>
      </div>
      <div className="h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-7xl font-semibold text-white">
          Welcome to <span className="text-[#26d5fc]">Tafaling.com</span>
        </h1>

        <p className="text-2xl text-center mt-2 text-gray-200">
          Your journey with us starts here. Whether you&apos;re new or
          returning, we&apos;re excited to have you. <br />
          Please choose an option below to get started :
        </p>

        <div className="flex w-[50%] mt-10">
          <Link href={"/login"} className=" w-full flex justify-center">
            <PrimaryBtn text={"Go to Sign In"} icon width={"80%"}></PrimaryBtn>
          </Link>

          <Link href={"/register"} className=" w-full flex justify-center">
            <SecondaryBtn
              text={"Go to Sign Up"}
              icon
              width={"80%"}
            ></SecondaryBtn>
          </Link>
        </div>
      </div>
    </main>
  );
}
