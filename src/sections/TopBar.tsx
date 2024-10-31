import Progress from "../components/Progress";

export default function TopBar({ percentage }: { percentage: number }) {
  return (
    <header className="py-6 bg-white shadow-lg sticky top-0 z-10">
      <div className="max-w-[980px] mx-auto px-5 flex items-center">
        <div className="w-2/3">
          <img
            src="https://dentalemr.com/wp-content/uploads/2023/10/logo.png"
            className="w-[200px] max-md:w-[130px]"
          />
        </div>
        <div className="ml-auto w-3/4">
          <Progress percentage={percentage} />
        </div>
      </div>
    </header>
  );
}
