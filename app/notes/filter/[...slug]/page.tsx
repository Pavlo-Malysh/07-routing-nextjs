
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
    params: Promise<{ slug: string[] }>;
}

const NotesByTag = async ({ params }: Props) => {
    const { slug } = await params;
    const currentPage = 1;
    const searchQuery = '';


    const tagName = slug[0] === "all" ? undefined : slug[0]

    const data = await fetchNotes(currentPage, searchQuery, tagName)


    return (

        <NotesClient initialData={data} tag={tagName} />
    )
}

export default NotesByTag