import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center flex-col gap-10 px-10 py-8 w-screen min-h-screen bg-[#F6F6F6]">
      <Navbar />

      <h1 className="text-black text-3xl font-semibold">Ahlan wa sahlan-Selamat Datang! di Bandung Islamic School</h1>
      <div className="flex justify-center w-full rounded-xl overflow-hidden">
        <Image src="/BISC.jpeg" alt="Home" width={900} height={700} priority className="rounded-lg" />
      </div>
    </div>
  );
}
