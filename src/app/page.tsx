import { CustomFooter } from "@/components/custom-footer";
import { DomainInterfaceComponent } from "@/components/domain-interface";
import { GlassmorphicCards } from "@/components/glassmorphic-cards";
import GlassmorphicCard from "@/components/glassmorphicCards";
import { HeaderComponent } from "@/components/header";
import { LandingPageComponent } from "@/components/landing-page";
import { TradingCarouselComponent } from "@/components/trading-carousel";
import Image from "next/image";
// import Crousel from "@/components/ui/Crousel";

export default function Home() {
  return (
    <div className="container-main">
      {/* <HeaderComponent /> */}
      <section className="one">
        <LandingPageComponent />
      </section>

      {/* <GlassmorphicCard /> */}
      <section className="mt-10 two flex justify-center items-center">
        <GlassmorphicCards />
      </section>
      {/* <TradingCarouselComponent /> */}

      <section className="three">
        <DomainInterfaceComponent />
      </section>
      <div className="bg-slate-200 p-6 rounded-lg shadow-md transition-transform duration-300">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold">We’re Working on Something Exciting!</h3>
            <p className="text-sm mb-4">Thank you for visiting Synergy Incorporation. We’re currently upgrading our platform to bring you an even better trading experience. Our team is hard at work building new features, enhancing performance, and ensuring that everything runs smoothly to meet your needs.We know how valuable your time is, and we appreciate your patience as we finalize these improvements. Rest assured, we’ll be back soon with an even more robust and intuitive trading platform that will help you excel in the Indian futures market.</p>
            <p className="text-sm mb-4">In the meantime, stay tuned for updates! We’ll notify you as soon as our services are back online and ready to empower your trading journey. Thank you for your understanding and continued support.

            </p>
          </div>

        </div>
        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300" >
          <a href="mailto:synergyincorporationllc@gmail.com">
            Contact Us
          </a>
        </button>

      </div>
      <CustomFooter />

    </div>
  );
}
