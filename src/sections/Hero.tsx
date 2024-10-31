import Button from "../components/Button";

export default function Hero({
  firstItemRef,
}: {
  firstItemRef?: HTMLDivElement;
}) {
  function scrollToFirstItem(): void {
    firstItemRef !== undefined &&
      firstItemRef.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="w-[980px] mx-auto px-5 py-[150px] flex flex-col gap-8 max-md:gap-5 max-md:py-[50px] max-md:w-auto">
      <h1 className="text-6xl max-md:text-4xl font-black text-gray-700">
        30-SECOND <br />
        ASSESSMENT
      </h1>
      <p className="text-2xl max-md:text-xl text-gray-500 font-light leading-10">
        Find out if DentalEMR is the right fit for you.
      </p>
      <div className="flex gap-3">
        <Button
          onClick={(): void => {
            scrollToFirstItem();
          }}
          label="Get started"
          style="accent"
        />
        <Button
          href="https://dentalemr.com/faq"
          label="Learn more"
          style="primary"
        />
      </div>
    </section>
  );
}
