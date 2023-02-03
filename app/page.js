import Image from "next/image";
import { Poppins } from "@next/font/google";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const poppins = Poppins({
  weight: ["100", "200", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <div className="h-screen relative landing ">
        <Header />
        <div className="absolute top-1/3 px-6 space-y-2">
          <p className="text-blue-700 underline">We Offer</p>
          <h1 className="font-extrabold text-4xl md:text-7xl max-w-[300px] md:max-w-[650px] uppercase">
            Efficient and Reliable Roadworks Services
          </h1>
          <button className="bg-blue-700 px-6 py-3 rounded-full text-gray-300 flex items-center justify-between space-x-4 w-44">
            Find out More
            <ArrowRightIcon className="h-4" />
          </button>
        </div>
      </div>
    </main>
  );
}
