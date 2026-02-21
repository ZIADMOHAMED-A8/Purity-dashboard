import { supabase } from "../../../../supabaseClient";

export async function onCreateProject({
    values,
    projects,
    setProjects,
    previewUrl,
    watchedPhoto,
    closeModal,
    placeholder,
}) {
    const prev = [...projects];
    const id = crypto.randomUUID();

    const optiProject = {
        id,
        tag: `Project #${projects.length + 1}`,
        title: values.title.trim(),
        description: values.description.trim(),
        image: previewUrl || placeholder,
    };

    setProjects((p) => [...p, optiProject]);
    const file = watchedPhoto?.[0];
    closeModal();

    try {
        const { data: storageData, error: storageError } = await supabase.storage
            .from("avatars")
            .upload(`project_${id}`, file);

        if (storageError) throw storageError;

        const { data: publicUrlData } = supabase.storage
            .from("avatars")
            .getPublicUrl(storageData.path);

        const newProject = {
            ...optiProject,
            image: publicUrlData.publicUrl,
        };

        const updatedProjects = [...prev, newProject];

        await supabase.auth.updateUser({
            data: { projects: updatedProjects },
        });

        setProjects(updatedProjects);
    } catch (e) {
        setProjects(prev);
    }
}
