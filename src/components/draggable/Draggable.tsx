import React, { useRef } from 'react'
import ReactDraggable from 'react-draggable'

import styles from './Draggable.module.scss'

interface Props {
    isActiveDraggable: boolean
}

const Draggable: React.FC<Props> = (props) => {
    const nodeRef = useRef(null)

    return (
        <ReactDraggable
            bounds='.notesCanvas'
            nodeRef={nodeRef}
        >
            <li
                className={`${styles.draggable} ${props.isActiveDraggable ? styles.activeDraggable : ''}`}
                ref={nodeRef}
            >
                {props.children}
            </li>
        </ReactDraggable>
    )
}

export default Draggable