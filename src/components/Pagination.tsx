interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  className,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <ul className={`flex mx-auto border-2 divide-x-2 w-max ${className}`}>
      <li
        className={`flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer w-12 h-10 ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePrevious}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 fill-ferrari-red"
          viewBox="0 0 55.753 55.753"
        >
          <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
        </svg>
      </li>
      {Array.from({ length: totalPages }).map((_, index) => (
        <li
          key={index}
          className={`flex items-center justify-center shrink-0 cursor-pointer text-base font-bold w-12 h-10 ${
            currentPage === index + 1
              ? "bg-ferrari-red text-white"
              : "text-ferrari-red hover:bg-gray-50"
          }`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </li>
      ))}
      <li
        className={`flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer w-12 h-10 ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 fill-ferrari-red rotate-180"
          viewBox="0 0 55.753 55.753"
        >
          <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
        </svg>
      </li>
    </ul>
  );
}
