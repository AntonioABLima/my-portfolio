import React, { useRef } from 'react'
import { useGLTF } from "@react-three/drei"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

useGLTF.preload('src/assets/models/IsometricBedroomOnlyTexturesNoMaterial.glb')
gsap.registerPlugin(ScrollTrigger);

export default function Model() {
    const { nodes, materials, scene } = useGLTF("src/assets/models/IsometricBedroomOnlyTexturesNoMaterial.glb")
    
    const groupRef = useRef();
        
    return (
        <group 
            ref={groupRef}
                position={[0, 0, 0]}
            >
            <primitive object={scene} />
        </group>
    )
}
