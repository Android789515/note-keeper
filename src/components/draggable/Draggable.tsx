import React, { useRef } from 'react'
import ReactDraggable from 'react-draggable'

import styles from './Draggable.module.scss'

interface Props {
    render: () => JSX.Element
    isActiveDraggable: boolean
}

const Draggable = ({ render, isActiveDraggable }: Props) => {
    const nodeRef = useRef(null)

    return (
        <ReactDraggable nodeRef={nodeRef}>
            <span
                className={`${styles.draggable} ${isActiveDraggable ? styles.activeDraggable : ''}`}
                ref={nodeRef}
            >
                {render()}
            </span>
        </ReactDraggable>
    )
}

export default Draggable