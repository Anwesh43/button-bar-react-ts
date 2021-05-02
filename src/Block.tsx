import React from 'react'
import {
    useStyle
} from './hooks'
import withContext from './withContext'

interface BlockProps {
    w : number, 
    h : number,
    scale : number, 
    onClick : Function, 
}
const Block : React.FC<BlockProps> = (props : BlockProps) => {
    const {blockStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <div style = {blockStyle()} onClick = {() => props.onClick()}>
        </div>
    )
}

export default withContext(Block) 