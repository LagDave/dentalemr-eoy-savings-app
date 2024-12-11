import TopBar from "./sections/TopBar";
import QuizContainer from "./sections/QuizContainer";
import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import ReactGA from "react-ga4";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      page: "/apps/eoy-savings-calculator-app",
      title: "DentalEMR EOY Savings Calculator App",
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
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
