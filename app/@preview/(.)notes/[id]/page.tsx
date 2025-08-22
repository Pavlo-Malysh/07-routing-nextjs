
import { fetchNoteById } from "@/lib/api";
import NoteDetailsPreviewClient from "./NoteDetailsPreview.client";


type Props = {
    params: Promise<{ id: string }>
}

const PreviewPage = async ({ params }: Props) => {
    const { id } = await params;

    const note = await fetchNoteById(id)


    return (
        <>
            <NoteDetailsPreviewClient data={note} />

        </>

    )
}

export default PreviewPage;

