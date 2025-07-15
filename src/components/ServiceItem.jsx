export default function ServiceItem({ title }) {
  return (
    <li
      className="mx-auto flex min-h-[3rem] w-full max-w-md items-center justify-center rounded border border-platinum bg-deepgray px-4 py-3 text-center text-lightgray transition-colors hover:bg-black"
    >
      {title}
    </li>
  );
}
