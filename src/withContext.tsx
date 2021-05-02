import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'

const withContext = (Component : React.FC<any>) => {
    
    return () => {
        const {scale, start} = useAnimatedScale()
        const {w, h} = useDimension()
        const props = {
            w, 
            h, 
            scale, 
            onClick : () => start()
        } 
        return <Component {...props}></Component>
    }
}

export default withContext