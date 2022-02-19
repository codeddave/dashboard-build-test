const Pagination = ({ dataPerPage, data, handlePageNumberCLick }) => {
  console.log(data);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data?.data?.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <nav className="b text-white mb-10">
      <p>afbwfkbn wbkrkbk</p>
      <ul className="pagination flex">
        {pageNumbers.map((number) => (
          <div className=" border p-1 px-4">
            <li key={number} className="cursor-pointer pl text-blue-500">
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
    </nav>
  );
};
export default Pagination;
