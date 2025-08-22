'use client'

import { useRouter } from "next/navigation";
import css from './NotePreview.module.css';
import { Note } from "@/types/note";
import Modal from "@/components/Modal/Modal";

type Props = {
    data: Note;
}

const NotePreviewClient = ({ data }: Props) => {
    const router = useRouter();

    const formattedData = data.updatedAt ? `Updated at: ${data.updatedAt}` : `Created at: ${data.createdAt}`;

    const handleClosePreview = () => {
        router.back();
    }


    return (
        <>
            {data && <Modal onClose={handleClosePreview}>
                <div className={css.container}>
                    <div className={css.item}>
                        <div className={css.header}>
                            <h2>{data.title}</h2>
                        </div>
                        <p className={css.content}>{data.content}</p>
                        <p className={css.date}>{formattedData}</p>
                    </div>
                    <button type="button" className={css.button} onClick={handleClosePreview}>Close</button>
                </div>

            </Modal>}
        </>
    )
}

export default NotePreviewClient