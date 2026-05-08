import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GlassCard({ children }: Props) {
  return (
    <div className="glass rounded-3xl p-8 hover:-translate-y-3 transition-all duration-500">
      {children}
    </div>
  );
}