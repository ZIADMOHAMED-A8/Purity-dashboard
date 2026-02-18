import Heading from "../ui/Heading";

export default function TableLayout({
  title,
  columns,
  children,
  firstColumnWide = true,
  containerClassName = "",
}) {
  const minWidthClass = columns.length >= 4 ? "min-w-[640px]" : "min-w-[520px]";

  const headClassName = firstColumnWide
    ? "w-full text-gray-400 border-gray-300 [&>th:first-child]:w-1/2 uppercase"
    : "w-full text-gray-400 border-gray-300 uppercase";

  return (
    <div
      className={`flex flex-[3] flex-col overflow-hidden rounded-2xl bg-white p-3 sm:p-4 gap-4 sm:gap-8 ${containerClassName}`.trim()}
    >
      {title ? <Heading>{title}</Heading> : null}
      <div className="-mx-3 overflow-x-auto px-3 sm:mx-0 sm:px-0">
        <table
          className={`${minWidthClass} w-full [&>thead]:border-b-1 [&>tbody>tr]:border-b-1 [&>tbody>tr]:border-gray-300 [&>thead>th]:pb-3 sm:[&>thead>th]:pb-4 [&>thead>th]:text-start [&>tbody>tr:last-child]:border-b-0`.trim()}
        >
          <thead className={headClassName}>
            {columns.map((column) => (
              <th key={column.id} className="whitespace-nowrap text-xs sm:text-sm">
                {column.title}
              </th>
            ))}
          </thead>
          <tbody className="[&>tr>td]:py-3 sm:[&>tr>td]:py-4 [&>tr>td]:pr-3 sm:[&>tr>td]:pr-4">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
}
