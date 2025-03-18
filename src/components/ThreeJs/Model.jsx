import React, { useEffect, useRef } from 'react'
import { useGLTF } from "@react-three/drei"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload('src/assets/models/IsometricBedroomOnlyTexturesNoMaterial.glb')

export default function Model() {
    const { nodes, materials, scene } = useGLTF("src/assets/models/IsometricBedroomOnlyTexturesNoMaterial.glb")
    
    const groupRef = useRef();
    
    useEffect(() => {
        if(!groupRef.current) return;

        gsap.timeline({
            scrollTrigger: {
                trigger: '#section0',
                start: 'top top',
                end: "bottom top",
                scrub: true,
            }
        })
        .to(
            groupRef.current.rotation,
            {
                y: Math.PI / 4,
                ease: 'power2.inOut'
            }
        );
    })
        
    return (
        <group 
            ref={groupRef}
                position={[0, -1, 0]}

            >

            <primitive object={scene} />
        </group>
    )
}
