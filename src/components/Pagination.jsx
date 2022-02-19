const Pagination = ({ dataPerPage, data, handlePageNumberCLick }) => {
  console.log(data);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data?.data?.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <nav className="d-flex justify-content-center bg-black text-white">
      <p>afbwfkbn wbkrkbk</p>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <span
              className="page-link"
              onClick={() => handlePageNumberCLick(number)}
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
