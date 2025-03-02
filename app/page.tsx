import { Hero } from "@/components/hero";
import { Works } from "@/components/works";
import {Vid_page} from "@/components/vid_page";
import {Testimonials} from "@/components/testimonials"
import {Vid_page2} from "@/components/vid_page2";
import { Feat1 } from "@/components/feat1";
import { Footer } from "@/components/footer";


export default function Home() {
  return (
    <div>
      <Hero />
      <Works/>
      <Vid_page/>
      <Testimonials/>
      <Vid_page2/>
      <Feat1/>
      <Footer/>
    </div>
  );
}
