import type { ReactNode } from "react";

interface CardGridProps {
  children: ReactNode;
  page: number;
  hasMore: boolean;
  loading: boolean;
  loadNext: () => void;
  loadPrev: () => void;
}

export default function CardGrid({ children, page, hasMore, loading, loadNext, loadPrev }: CardGridProps) {
  return (
    <div className="bg-[url('/CloudBackgroundImage.jpg')] bg-center bg-cover p-5">
      {/* Grid genérico */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10">
        {children}
      </div>

      {/* Paginación */}
      <div className="flex justify-center gap-4 my-6">
        <button
          onClick={loadPrev}
          disabled={page <= 1 || loading}
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Back
        </button>
        <span className="px-4 py-2 text-gray-700">Page {page}</span>
        <button
          onClick={loadNext}
          disabled={!hasMore || loading}
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}