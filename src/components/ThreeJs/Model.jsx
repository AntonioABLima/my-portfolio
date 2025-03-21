import React, { useEffect, useRef } from 'react'
import { useGLTF } from "@react-three/drei"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload('src/assets/models/IsometricBedroomOnlyTexturesNoMaterial.glb')

export default function Model() {
    const { nodes, materials, scene } = useGLTF("src/assets/models/IsometricBedroomOnlyTexturesNoMaterial.glb")
    
    const groupRef = useRef();
    
    // useEffect(() => {
    //     if (!groupRef.current) return;
    
    //     gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '#section0',
    //             start: 'top top',
    //             end: 'bottom bottom',
    //             scrub: true,
    //             markers: true,
    //         },
    //     })
    //     .to(groupRef.current.rotation, {
    //         y: -(Math.PI / 4),
    //     }, 0)
    //     .to(groupRef.current.position, {
    //         z: 3, 
    //         x: 2.5,
    //         y: 3,
    //     }, 0)
    //     .to(groupRef.current.position, {
    //         y: 1,
    //     }, 1)
    //     .to(groupRef.current.rotation, {
    //         z: (Math.PI / 4),
    //     }, 1)

    // }, []);
        
    return (
        <group 
            ref={groupRef}
                position={[0, 0, 0]}
            >
            <primitive object={scene} />
        </group>
    )
}
