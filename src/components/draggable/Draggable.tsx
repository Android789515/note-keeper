import React, { useRef } from 'react'
import ReactDraggable, { DraggableData, DraggableEventHandler } from 'react-draggable'

import { Position2D } from '../../types/types'

import styles from './Draggable.module.scss'

interface Props {
    isActiveDraggable: boolean
    position?: Position2D
    updatePosition?: (event: Event, data: DraggableData) => void | false
}

const Draggable: React.FC<Props> = (props) => {
    const nodeRef = useRef(null)

    return (
        <ReactDraggable
            bounds='.notesCanvas'
            position={props.position}
            onDrag={props.updatePosition as DraggableEventHandler}
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