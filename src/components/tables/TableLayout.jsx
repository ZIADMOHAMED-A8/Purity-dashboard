import Heading from "../ui/Heading";

export default function TableLayout({
  title,
  columns,
  children,
  firstColumnWide = true,
  containerClassName = "",
}) {
  const headClassName = firstColumnWide
    ? "w-full text-gray-400 border-gray-300 [&>th:first-child]:w-1/2 uppercase"
    : "w-full text-gray-400 border-gray-300 uppercase";

  return (
    <div
      className={`flex flex-[3] flex-col bg-white p-4 rounded-2xl gap-10 ${containerClassName}`.trim()}
    >
      {title ? <Heading>{title}</Heading> : null}
      <table
        className="[&>thead]:border-b-1 [&>tbody>tr]:border-b-1 [&>tbody>tr]:border-gray-300 [&>thead>th]:pb-4 [&>thead>th]:text-start [&>tbody>tr:last-child]:border-b-0 w-full"
      >
        <thead className={headClassName}>
          {columns.map((column) => (
            <th key={column.id} className="text-sm">
              {column.title}
            </th>
          ))}
        </thead>
        <tbody className="[&>tr>td]:py-4">{children}</tbody>
      </table>
    </div>
  );
}
