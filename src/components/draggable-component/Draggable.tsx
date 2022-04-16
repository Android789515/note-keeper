import React, { useRef } from 'react'
import ReactDraggable from 'react-draggable'

const Draggable: React.FC = ({ children }) => {
    const nodeRef = useRef(null)

    return (
        <ReactDraggable nodeRef={nodeRef}>
            <span ref={nodeRef}>
                {children}
            </span>
        </ReactDraggable>
    )
}

export default Draggable