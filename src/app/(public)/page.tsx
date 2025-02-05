import { Button } from "@/components/ui/button";
import LandingPageHeader from "../_content/LandingPage/Header";
import LandingPageOverView from "../_content/LandingPage/OverView";
import LandingPageInforCards from "../_content/LandingPage/InfoCards";
import LandingPagePlans from "../_content/LandingPage/Plans";


export default function Home() {
  return (
    <>
      <LandingPageHeader/>

      <main>

        <LandingPageOverView/>
        <LandingPageInforCards/>
        <LandingPagePlans/>

      </main>

    </>
  );
}
