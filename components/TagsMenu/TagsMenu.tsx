'use client'
import Link from 'next/link';
import css from './TagsMenu.module.css'
import { useState } from 'react';
import { tagName } from '@/lib/tags';

const TagsMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const togle = () => setIsOpen(!isOpen)
    return (
        <div className={css.menuContainer}>
            <button className={css.menuButton} onClick={togle}>
                Notes ▾
            </button>
            {isOpen && <ul onClick={togle} className={css.menuList}>
                <li className={css.menuItem} >
                    <Link href={`/notes/filter/all`} className={css.menuLink}>
                        All notes
                    </Link>
                </li>
                {tagName.map((tag, index) => <li className={css.menuItem} key={index}>
                    <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                        {tag}
                    </Link>
                </li>)}

            </ul>}

        </div>

    )
}

export default TagsMenu