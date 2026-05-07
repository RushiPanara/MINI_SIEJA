type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <button className="px-8 py-4 rounded-full bg-cyan-400 text-black font-bold glow hover:scale-105 transition-all duration-300">
      {text}
    </button>
  );
}