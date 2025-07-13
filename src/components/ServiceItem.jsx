export default function ServiceItem({ title }) {
  return (
    <li className="rounded border border-platinum bg-deepgray p-4 text-center text-platinum transition-colors hover:bg-black">
      {title}
    </li>
  );
}
