
const DocumentationItem = ({
  title,
  response,
  statusCode,
  access
}) => {

  return (
    <div className="px-[72px] py-[48px]">
      <div className="flex flex-col gap-x-4 justify-between">
        <h2 className="text-5xl">{title}</h2>
        <div className="bg-gray-800 text-white">
          <p>{response}</p>
        </div>
        <h2 className="text-5xl">Status Code</h2>
        <div className="bg-gray-800 text-white">
          <p>{statusCode}</p>
        </div>
        <h2 className="text-5xl">Access</h2>
        <div className="bg-gray-800 text-white">
          <p>{access}</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentationItem;
