import Link from 'next/link';
import css from './SidebarNotes.module.css';
import { tagName } from '@/lib/tags';

const SidebarNotes = () => {

    return (
        <ul className={css.menuList}>
            {tagName.map((tag, index) => <li className={css.menuItem} key={index}>
                <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                    {tag}
                </Link>
            </li>)}

        </ul>

    )
}

export default SidebarNotes