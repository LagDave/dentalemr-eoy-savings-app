import { useEffect, useRef, useState } from "react";
import questions from "../questions";
import QuizItem from "../components/QuizItem";
import Button from "../components/Button";
import LeadForm from "./LeadForm";
import axios from "axios";
import ConfettiExplosion from "react-confetti-explosion";
import Lottie from "lottie-react";
import successLottie from "../assets/success-lottie.json";

type QuizContainerProps = {
  onProgressChange: (percentage: number) => void;
  onRefsPopulated: (refs: (HTMLDivElement | null)[]) => void;
};

export default function QuizContainer({
  onProgressChange,
  onRefsPopulated,
}: QuizContainerProps) {
  const [currentItem, setCurrentItem] = useState(0);
  const [answers, setAnswers] = useState<{
    [id: number]: {
      question: string;
      value: string;
    };
  }>({});
  const [email, setEmail] = useState("");
  const [outlineEmail, setOutlineEmail] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasAAEID, setHasAAEID] = useState(false);

  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const leadFormRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const aaeID = window.location.href.indexOf("aae-2024");
    if (aaeID !== -1) setHasAAEID(true);
  }, []);

  useEffect(() => {
    if (refs.current.length) {
      onRefsPopulated(refs.current);
    }
  }, [refs, onRefsPopulated]);

  function handleChoiceSelected(
    id: number,
    question: string,
    value: string
  ): void {
    setAnswers({ ...answers, [id]: { question, value } });
    if (id === currentItem) {
      setCurrentItem(currentItem + 1);

      const progress = ((currentItem + 1) / questions.length) * 100;
      onProgressChange(progress);
    }

    if (currentItem < questions.length - 1) {
      const scrollToRef = refs.current[id + 1];
      if (scrollToRef) {
        scrollToRef.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      leadFormRef.current &&
        leadFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function validateEmail(): boolean {
    if (email.length > 0) return true;
    setOutlineEmail(true);
    return false;
  }

  async function submitResults() {
    if (!validateEmail()) return;

    setIsLoading(true);

    axios
      .post("https://dentalemr.com/wp-json/dqp/v1/complete-assessment", {
        email,
        answers,
        hasAAEID,
      })
      .then(() => {
        axios
          .post(
            "https://api.hsforms.com/submissions/v3/integration/submit/4134004/47aa0dc2-b2d5-40ca-b9de-22f1b1ede6d2",
            {
              fields: [
                {
                  objectTypeId: "0-1",
                  name: "email",
                  value: email,
                },
              ],
              context: {
                pageUri: "dentalemr.com/apps/assessment",
                pageName: "Quiz App",
              },
            }
          )
          .then(() => {
            setIsLoading(false);
            setIsSuccessful(true);
          });
      })
      .catch(() => {
        setIsError(true);
        axios.get("https://dentalemr.com/wp-json/dqp/v1/assessment-error");
      });
  }

  return isError ? (
    <ErrorScreen />
  ) : isSuccessful ? (
    <SuccessScreen />
  ) : (
    <div className="flex flex-col items-start gap-10 max-w-[980px] mx-auto pb-[500px] px-5">
      {questions.map((item, index) => (
        <div
          key={index}
          ref={(el: HTMLDivElement | null) => (refs.current[index] = el)}
        >
          <QuizItem
            isChecked={index < currentItem}
            id={index}
            question={item.question}
            choices={item.choices}
            isBlurred={index > currentItem}
            selectedItem={
              answers[index] !== undefined ? answers[index].value : undefined
            }
            inline={item.inline}
            onChoiceSelected={handleChoiceSelected}
          />
        </div>
      ))}
      <div ref={leadFormRef}>
        <LeadForm
          outlineEmail={outlineEmail}
          onInputChange={(email): void => setEmail(email)}
          isBlurred={currentItem < questions.length}
        />
      </div>
      <Button
        onClick={submitResults}
        style="accent"
        label={isLoading ? "Please wait" : "Complete Assessment"}
        isLoading={isLoading}
      />
    </div>
  );
}

function ErrorScreen(): JSX.Element {
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-white flex items-center justify-center flex-col gap-2">
      <h3 className="text-3xl text-gray-600">Oops. Something went wrong.</h3>
      <p className="text-gray-500">
        The developer has been notified and is now working on a fix.
      </p>
    </div>
  );
}

function SuccessScreen(): JSX.Element {
  return (
    <div className="fixed top-0 left-0 z-20 h-[100vh] w-[100vw] flex items-center justify-center flex-col gap-4 max-md:gap-4 px-8">
      <ConfettiExplosion zIndex={100} />
      <div className="animate-splash-circle h-[100%] w-[100%] bg-primary rounded-full absolute top-0 left-0 -z-10"></div>
      <div className="w-[450px] -my-[100px] max-md:-my-[80px] max-md:w-[300px]">
        <Lottie animationData={successLottie} loop={false} />
      </div>
      <h1 className="text-center text-6xl font-bold max-md:text-3xl text-white">
        Boom!
      </h1>
      <div className="flex flex-col gap-1">
        <p className="text-center font-light text-lg max-md:text-base text-white/60">
          Looks like we're the perfect match to assist you in meeting your
          goals!
        </p>
        <p className="text-center font-light text-lg max-md:text-base text-white/60">
          What's next? Schedule a test drive so you can experience DentalEMR for
          yourself.
        </p>
      </div>
      <div className="mt-4">
        <Button
          href="https://dentalemr.com/request-your-free-demo/"
          label="Get Started"
          style="accent"
        />
      </div>
    </div>
  );
}
