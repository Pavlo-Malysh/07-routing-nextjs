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
            {isOpen && <ul className={css.menuList}>
                {tagName.map((tag, index) => <li className={css.menuItem} key={index} onClick={togle}>
                    <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                        {tag}
                    </Link>
                </li>)}

            </ul>}

        </div>

    )
}

export default TagsMenu