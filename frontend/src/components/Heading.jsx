export const Heading = ({ content, level }) => {
  const Tag = `h${level}`;
  const styling = {
    1: "text-gray-900 text-2xl font-bold sm:truncate sm:text-3xl sm:tracking-tight",
    2: "text-gray-900 text-1xl font-bold sm:truncate sm:text-3xl sm:tracking-tight",
    3: "text-gray-900 mt-16 text-2xl font-bold tracking-tight",
  };

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <Tag className={styling[level]}>{content}</Tag>
      </div>
    </div>
  );
};
