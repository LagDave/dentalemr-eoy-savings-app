import Question from "./Question";
import Choice from "./Choice";
import { Choices } from "../quiz-app-types";

type QuizItemProps = {
  question: string;
  choices: Choices;
  isBlurred: boolean;
  selectedItem?: string;
  isChecked: boolean;
  id: number;
  inline?: boolean;
  onChoiceSelected: (id: number, question: string, value: string) => void;
};

export default function QuizItem({
  question,
  choices,
  isBlurred,
  selectedItem,
  isChecked,
  id,
  inline,
  onChoiceSelected,
}: QuizItemProps) {
  return (
    <div className="flex flex-col gap-8 pt-[150px]">
      <Question label={question} isBlurred={isBlurred} isChecked={isChecked} />
      <div
        className={`flex ${
          !inline ? "flex-col" : "flex-wrap"
        } items-start gap-2`}
      >
        {choices.map((choice, index) => (
          <Choice
            key={index}
            label={choice.label}
            value={choice.value}
            isBlurred={isBlurred}
            imageSrc={choice.imageSrc}
            selected={
              selectedItem !== undefined && selectedItem === choice.value
            }
            onChoiceSelected={(value): void =>
              onChoiceSelected(id, question, value)
            }
          />
        ))}
      </div>
    </div>
  );
}
