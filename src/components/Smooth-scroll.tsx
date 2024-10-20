"use client"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function SmoothScroll({ children }:any) {
    const lenis = useLenis(({ scroll }) => {

    })

    return (
        <ReactLenis root options={{ lerp: 0.03, }}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll