type ChoiceProps = {
  label: string;
  value: string;
  isBlurred?: boolean;
  selected?: boolean;
  imageSrc?: string;
  onChoiceSelected: (value: string) => void;
};

export default function Choice({
  label,
  isBlurred,
  value,
  selected,
  imageSrc,
  onChoiceSelected,
}: ChoiceProps) {
  return (
    <button
      onClick={(): void => onChoiceSelected(value)}
      className={`px-11 py-3 border border-primary text-base rounded-lg max-md:px-5 max-md:py-3 max-md:text-base flex flex-col items-center gap-2 ${
        isBlurred ? "opacity-50" : ""
      } ${selected ? "bg-primary text-white" : "text-primary bg-white "}`}
      disabled={isBlurred}
    >
      {imageSrc && (
        <img
          className="h-[60px] max-md:h-10 p-1 bg-white rounded-sm w-auto"
          src={imageSrc}
        />
      )}
      {label}
    </button>
  );
}
