import clsx from 'clsx';

export default function PageIndicator({ pages, current, onSelect }) {
  return (
    <nav aria-label="Page indicator" className="mt-4">
      <ul className="flex items-center justify-center gap-2">
        {pages.map((page, i) => (
          <li key={page}>
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`Go to page ${i + 1}`}
              className={clsx(
                'h-2 w-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent',
                current === i ? 'bg-accent' : 'bg-platinum/40'
              )}
            >
              <span className="sr-only">{`Page ${i + 1}`}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
