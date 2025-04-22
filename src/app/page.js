import Image from "next/image";
import Cards from "./components/Cards"

export default function Home() {
  return (
    <div className="bg-gray-800 h-screen items-center">
      <div className="bg-gray-700 text-gray-300 text-center  py-10 px-5 shadow-lg">    <img src="https://kodwise.org/images/features.svg" alt="Banner Görseli" class="mx-auto mb-6 w-200 " />
      <h1 class="text-4xl  text-white-600 mb-4">Coding Platform</h1> </div>
      <Cards/>
    </div>
  );
}
