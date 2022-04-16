import React, { useRef } from 'react'
import ReactDraggable from 'react-draggable'

const Draggable: React.FC = ({ children }) => {
    const nodeRef = useRef(null)

    return (
        <ReactDraggable nodeRef={nodeRef}>
            <li ref={nodeRef}>
                {children}
            </li>
        </ReactDraggable>
    )
}

export default Draggable