export default function SaveStatus({ mutation, isSubmitting }) {
  return (
    <div className="flex items-center gap-4">
      <button
        type="submit"
        disabled={mutation.isPending || isSubmitting}
        className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {mutation.isPending ? "Saving..." : "Save"}
      </button>
      {mutation.isSuccess && (
        <p className="text-sm text-green-700">Data saved successfully.</p>
      )}
      {mutation.isError && (
        <p className="text-sm text-red-600">
          {mutation.error?.message || "Failed to save data."}
        </p>
      )}
    </div>
  );
}
