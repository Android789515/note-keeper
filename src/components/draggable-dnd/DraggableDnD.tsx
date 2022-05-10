import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { NoteID } from '../../types/noteTypes'

interface Props {
    draggableID: NoteID
    index: number
}

const DraggableDnD: React.FC<Props> = (props) => {
    return (
        <Draggable draggableId={props.draggableID} index={props.index}>
            {({ innerRef, draggableProps, dragHandleProps }) => (
                <li ref={innerRef} {...draggableProps} {...dragHandleProps}>
                    {props.children}
                </li>
            )}
        </Draggable>
    )
}

export default DraggableDnD