import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main suppressHydrationWarning={true}>
      {/* <div className="loader"></div> */}

      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
