export const Heading = ({ content, level, pre }) => {
  const Tag = `h${level}`;
  const styling = {
    1: "text-primary text-3xl font-bold md:text-4xl md:tracking-tight leading-snug",
    2: "text-primary text-2xl text-center font-bold md:text-3xl tracking-tight leading-snug",
    3: "mt-16 text-2xl font-bold tracking-tight ",
  };

  return (
    <>
      {pre && (
        <p className="text-secondary font-cormorant pt-4 text-base font-bold leading-6">
          {pre}
        </p>
      )}
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <Tag className={styling[level]}>{content}</Tag>
        </div>
      </div>
    </>
  );
};
