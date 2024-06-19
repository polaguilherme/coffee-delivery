import { ButtonHTMLAttributes, ReactNode } from "react";

interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variantColor?: "yellow" | "purple";
}

export function HeaderButton({ children, variantColor }: HeaderButtonProps) {
  return (
    <button
      className={`flex gap-1 items-center justify-center bg-${variantColor}-light p-2 rounded-md cursor-pointer`}
    >
      {children}
    </button>
  );
}
