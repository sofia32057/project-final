export const Heading = ({ content, level, pre }) => {
  const Tag = `h${level}`;
  const styling = {
    1: "text-primary text-1xl font-bold sm:text-3xl sm:tracking-tight leading-snug",
    2: "text-primary text-1xl font-bold sm:text-3xl sm:tracking-tight",
    3: "mt-16 text-2xl font-bold tracking-tight ",
  };

  return (
    <>
      {pre && (
        <p className="text-base text-secondary pt-4 font-cormorant font-bold leading-6">
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
