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
      <div className="h-screen relative">
        <Header />
        <h1 className="font-bold text-5xl absolute top-1/3 max-w-[100px] px-6">Launching Soon</h1>
      </div>
    </main>
  );
}
