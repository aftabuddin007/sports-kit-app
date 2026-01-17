import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import NewsletterCTA from "@/Components/NewsLetterCTA/NewsLetterCTA";
import WhyChooseUs from "@/Components/WhyChoose/WhyChoose";
import Image from "next/image";
export  const metadata = {
  title: "Sports Kit Store App",
  description: "Selling items like football, bat, ball, leg pad, boots, gloves, etc",
};
export default function Home() {

  return (
    <div className="">
      <HeroBanner></HeroBanner>
      <WhyChooseUs></WhyChooseUs>
      <NewsletterCTA></NewsletterCTA>
    </div>
  );
}
