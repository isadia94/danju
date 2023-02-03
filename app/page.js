import Image from "next/image";
import { Poppins } from "@next/font/google";
import styles from "./page.module.css";
import Header from "@/components/Header";

const poppins = Poppins({
  weight: ["100", "200", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <div className="h-screen relative landing ">
        <Header />
        <h1 className="font-extrabold text-4xl md:text-7xl absolute top-1/3 max-w-[300px] md:max-w-[650px] px-6">
          Great things are coming soon
        </h1>
      </div>
    </main>
  );
}
