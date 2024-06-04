export const Heading = ({ content, level }) => {
  const Tag = `h${level}`;

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <Tag className="text-gray-900 text-2xl font-bold sm:truncate sm:text-3xl sm:tracking-tight">
          {content}
        </Tag>
      </div>
    </div>
  );
};
