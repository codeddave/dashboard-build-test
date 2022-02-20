const Pagination = ({
  dataPerPage,
  data,
  handlePageNumberCLick,
  handleNextClick,
  handlePrevClick,
}) => {
  console.log(data);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data?.data?.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  if (!pageNumbers.length) return null;
  return (
    <nav className="b text-white mb-10 px-4 border rounded fit-content py-2 shadow h-12 mt-2  flex flex-col justify-center ml-6 md:ml-12">
      <div className="text-blue-400 flex items-center font-bold">
        <button onClick={handlePrevClick} className="pr-4">
          Prev
        </button>
        <ul className="paginatin flex">
          {pageNumbers.map((number) => (
            <div
              onClick={() => handlePageNumberCLick(number)}
              key={number}
              className=" border p px-4 mr-3 rounded shadow cursor-pointer"
            >
              <li className=" pl text-blue-400  ">
                <span className="page-link">{number}</span>
              </li>
            </div>
          ))}
        </ul>
        <button
          onClick={handleNextClick}
          className="pl-4 border px-4 rounded py-0.5"
        >
          Next
        </button>
      </div>
    </nav>
  );
};
export default Pagination;
