import Question from "../components/Question";

type LeadFormProps = {
  isBlurred: boolean;
  outlineEmail: boolean;
  onInputChange: (email: string) => void;
};

export default function LeadForm({
  isBlurred,
  outlineEmail,
  onInputChange,
}: LeadFormProps) {
  return (
    <div className="pt-[150px] flex flex-col gap-3">
      <Question
        label="Get your results!"
        isBlurred={isBlurred}
        isChecked={false}
      />
      <input
        className={`px-3 py-3 border-b  focus:border-primary duration-300 text-base max-md:py-2 max-md:text-base= outline-none ${
          isBlurred ? "opacity-50" : ""
        } ${outlineEmail ? "border-accent" : "border-gray-100"}`}
        type="email"
        placeholder="Enter your email here"
        disabled={isBlurred}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
}
