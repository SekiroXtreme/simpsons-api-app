import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CardItemProps {
  to?: string; // ruta opcional
  children: ReactNode;
}

export default function CardItem({ to, children }: CardItemProps) {
  const Wrapper = to ? Link : "div";

  return (
    <Wrapper
      to={to ?? ""}
      className="bg-white shadow-lg overflow-hidden border hover:shadow-2xl transition-shadow duration-300"
    >
      <div>
        {children}
      </div>
    </Wrapper>
  );
}
