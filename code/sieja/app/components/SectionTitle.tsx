type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-20">
      <p className="uppercase tracking-[0.4em] text-cyan-400 mb-4">
        {subtitle}
      </p>

      <h2 className="text-5xl md:text-6xl font-black">
        {title}
      </h2>
    </div>
  );
}