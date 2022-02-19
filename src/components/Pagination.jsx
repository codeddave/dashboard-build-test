const Pagination = ({ dataPerPage, data, handlePageNumberCLick }) => {
  console.log(data);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data?.data?.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <nav className="b text-white mb-10 px-4 border w-1/4 shadow h-12 mt-2  flex flex-col justify-center ml-12">
      <div className="text-blue-400 flex items-center font-bold">
        <button className="pr-4">Prev</button>
        <ul className="paginatin flex">
          {pageNumbers.map((number) => (
            <div className=" border p px-4 mr-3 rounded shadow-sm">
              <li key={number} className="cursor-pointer pl text-blue-400  ">
                <span
                  className="page-link"
                  onClick={() => handlePageNumberCLick(number)}
                >
                  {number}
                </span>
              </li>
            </div>
          ))}
        </ul>
        <button className="pl-4 border px-4 rounded py-0.5">Next</button>
      </div>
    </nav>
  );
};
export default Pagination;
