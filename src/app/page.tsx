import { CustomFooter } from "@/components/custom-footer";
import { DomainInterfaceComponent } from "@/components/domain-interface";
import { HeaderComponent } from "@/components/header";
import { TradingCarouselComponent } from "@/components/trading-carousel";
import Image from "next/image";
// import Crousel from "@/components/ui/Crousel";

export default function Home() {
  return (
    <div className="">
      <header className="sticky top-0 z-50">
      <HeaderComponent />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <TradingCarouselComponent/>

       <DomainInterfaceComponent />

       <CustomFooter/>
      </main>




    </div>
  );
}
