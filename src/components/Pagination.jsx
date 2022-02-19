const Pagination = ({ dataPerPage, totalData, handlePageNumberCLick }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="d-flex justify-content-center">
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
