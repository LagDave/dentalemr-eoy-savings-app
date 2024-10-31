import TopBar from "./sections/TopBar";
import QuizContainer from "./sections/QuizContainer";
import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import ReactGA from "react-ga4";
const TRACKING_ID = "G-VZJCZT58F3"; // your Measurement ID

function App() {
  const [percentage, setPercentage] = useState(0);
  const [firstItemRef, setFirstItemRef] = useState<HTMLDivElement | null>(null);

  function handleRefs(refs: (HTMLDivElement | null)[]) {
    setFirstItemRef(refs[0]);
  }

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({
      hitType: "pageview",
      page: "/apps/assessment",
      title: "DentalEMR Assessment",
    });
  }, []);

  return (
    <div className="bg-gray-50/30">
      <TopBar percentage={percentage} />
      <Hero firstItemRef={firstItemRef !== null ? firstItemRef : undefined} />
      <QuizContainer
        onRefsPopulated={handleRefs}
        onProgressChange={setPercentage}
      />
    </div>
  );
}

export default App;
