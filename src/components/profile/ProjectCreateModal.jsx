export default function ProjectCreateModal({
    isOpen,
    closeModal,
    handleSubmit,
    onSubmit,
    register,
    errors,
    previewUrl,
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
                <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-800">Create Project</h3>
                    <button
                        type="button"
                        onClick={closeModal}
                        className="rounded-lg px-2 py-1 text-slate-500 hover:bg-slate-100"
                    >
                        X
                    </button>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="mb-1 block text-sm font-semibold text-slate-700">Photo</label>
                        <input
                            type="file"
                            accept="image/*"
                            className="w-full rounded-lg border border-slate-300 p-2 text-sm"
                            {...register("photo", {
                                required: "Project photo is required",
                            })}
                        />
                        {errors.photo && (
                            <p className="mt-1 text-xs text-red-500">{errors.photo.message}</p>
                        )}
                    </div>

                    {previewUrl && (
                        <img
                            src={previewUrl}
                            alt="Project preview"
                            className="h-36 w-full rounded-xl object-cover"
                        />
                    )}

                    <div>
                        <label className="mb-1 block text-sm font-semibold text-slate-700">Title</label>
                        <input
                            type="text"
                            className="w-full rounded-lg border border-slate-300 p-2 text-sm outline-none focus:border-cyan-400"
                            placeholder="Enter title"
                            {...register("title", {
                                required: "Title is required",
                            })}
                        />
                        {errors.title && (
                            <p className="mt-1 text-xs text-red-500">{errors.title.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-semibold text-slate-700">Description</label>
                        <textarea
                            rows={4}
                            className="w-full rounded-lg border border-slate-300 p-2 text-sm outline-none focus:border-cyan-400"
                            placeholder="Enter description"
                            {...register("description", {
                                required: "Description is required",
                            })}
                        />
                        {errors.description && (
                            <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>
                        )}
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-600"
                        >
                            Create Project
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
