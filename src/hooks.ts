import {useState, useEffect, CSSProperties} from 'react'

const scGap = 0.02 
const delay = 20 

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev) => {
                        if (prev > 1) {
                            clearInterval(interval)
                            setAnimated(false)
                            return 0
                        }
                        return prev + 0.02 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const size : number = Math.min(w, h) / 10 
    const position = 'absolute'
    const sf : number = Math.sin(scale * Math.PI)
    const left = `${0}px`
    const top = `${(h - size) * (1 - sf)}px`
    const width = `${size}px`
    const height = `${size + (h - size) * sf}px`
    const background = 'indigo'
    return {
        blockStyle() : CSSProperties {
            return {
                position, 
                left, 
                top, 
                width, 
                height,
                background
            }
        }
    }
}