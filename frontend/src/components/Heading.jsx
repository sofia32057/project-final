export const Heading = ({ content, level, pre }) => {
  const Tag = `h${level}`;
  const styling = {
    1: "text-primary text-3xl font-bold md:text-4xl md:tracking-tight leading-tight",
    2: "text-primary text-2xl text-left font-bold md:text-3xl tracking-tight md:leading-tight leading-9",
    3: "mt-16 text-2xl font-bold tracking-tight ",
  };

  return (
    <>
      {pre && (
        <p className="text-base pt-4 font-cormorant font-bold leading-6 text-secondary">
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
