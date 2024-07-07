import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";
import Gallery from '@/components/Gallery'
import ProductCard from "@/components/productCard";
export default function Home() {
  return (
    <main className="flex mx-auto max-w-screen-xl min-h-screen flex-col px-4 sm:px-6 lg:px-8">
      <HeroBanner />
      <Gallery />
      <ProductCard />
    </main>
  );
}
