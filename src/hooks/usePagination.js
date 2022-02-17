import { useSearchParams } from "react-router-dom";

const usePagination = ({ totalPages, scrollToTop }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  const goToPrevPage = async () => {
    if (page <= 1) return;
    setSearchParams({ page: page - 1 });
    if (scrollToTop) window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goToNextPage = async () => {
    if (page >= totalPages) return;
    setSearchParams({ page: page + 1 });
    if (scrollToTop) window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return { page, goToNextPage, goToPrevPage, hasNextPage, hasPreviousPage };
};

export default usePagination;
