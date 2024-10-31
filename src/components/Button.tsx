import { ReactNode } from "react";

type ButtonProps = {
  label: string;
  style: "primary" | "accent";
  isLoading?: boolean;
  href?: string;
  onClick?: () => void;
};

const styles = {
  primary: "text-white bg-primary border-primary ",
  accent: "text-white border-accent bg-accent",
};

export default function Button({
  label,
  style,
  isLoading,
  href,
  onClick,
}: ButtonProps) {
  return (
    <LinkWrapper href={href}>
      <button
        disabled={isLoading}
        onClick={onClick}
        className={`${
          isLoading ? "animate-pulse" : ""
        } px-11 py-3 border-2 text-base rounded-lg max-md:px-5 max-md:py-3 max-md:text-base flex gap-2 items-center ${
          styles[style]
        }`}
      >
        {isLoading && (
          <div className="h-3 w-3 border-2 border-b-0 border-l-0 bg-transparent border-white rounded-full animate-spin-fast"></div>
        )}

        {label}
      </button>
    </LinkWrapper>
  );
}

function LinkWrapper({
  children,
  href,
}: {
  children: ReactNode;
  href?: string;
}) {
  return href ? <a href={href}>{children}</a> : children;
}
