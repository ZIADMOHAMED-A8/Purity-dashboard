import { getEditableFields } from "./helpers";

export default function EditableDataSection({ title, rows, formKey, register }) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      {rows.length === 0 ? (
        <p className="mt-3 text-gray-500">No rows found.</p>
      ) : (
        <div className="mt-5 flex flex-col gap-6">
          {rows.map((row, rowIndex) => {
            const rowTitle = row?.name || `Item ${row?.id ?? rowIndex + 1}`;

            return (
              <article
                key={`${formKey}-${row?.id ?? rowIndex}`}
                className="rounded-xl border border-gray-200 p-4"
              >
                <h4 className="text-lg font-medium">{rowTitle}</h4>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input type="hidden" {...register(`${formKey}.${rowIndex}.id`)} />
                  {getEditableFields(row).map((field) => (
                    <label
                      key={`${formKey}-${row?.id ?? rowIndex}-${field}`}
                      className="flex flex-col gap-2"
                    >
                      <span className="text-sm font-medium text-gray-600">{field}</span>
                      <input
                        type="text"
                        {...register(`${formKey}.${rowIndex}.${field}`)}
                        className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-black"
                      />
                    </label>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
