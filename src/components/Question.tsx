type QuestionProps = {
  label: string;
  isBlurred: boolean;
  isChecked: boolean;
};

export default function Question({
  label,
  isBlurred,
  isChecked,
}: QuestionProps) {
  return (
    <h1
      className={`text-3xl text-gray-700 font-bold max-md:text-2xl flex gap-3 items-center max-md:items-start ${
        isBlurred ? "opacity-50" : ""
      }`}
    >
      {isChecked ? <GreenCircle /> : <PulsatingProgress />}
      {label}
    </h1>
  );
}

function PulsatingProgress(): JSX.Element {
  return (
    <div className="h-5 w-5 flex items-center justify-center max-md:mt-1">
      <div className="h-3 w-3 bg-accent animate-ping-fast rounded-full"></div>
      <div className="h-2.5 w-2.5 rounded-full bg-accent absolute"></div>
    </div>
  );
}

function GreenCircle(): JSX.Element {
  return (
    <div className="h-5 w-5 flex items-center justify-center max-md:mt-1">
      <div className="bg-green-400 rounded-full opacity-30"></div>
      <div className="h-2.5 w-2.5 rounded-full bg-green-400 absolute"></div>
    </div>
  );
}
