import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

useGLTF.preload("src/assets/models/IsometricBedroomOnlyTexturesNoMaterial.glb");
gsap.registerPlugin(ScrollTrigger);


export default function Model() {
    const { scene } = useGLTF("src/assets/models/IsometricBedroomOnlyTexturesNoMaterial.glb");
    const groupRef = useRef();
    const myselfObj = scene.getObjectByName("Myself");
    const material = myselfObj.material;
    
    useEffect(() => {
        myselfObj.scale.set(0.9, 0.9, 0.9);
        myselfObj.position.set(-0.7, 0.8, 0.42);
    }, [scene]);
    
    useGSAP(() => {
            material.opacity = 0;
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#section0", 
                    start: "bottom-=1100 top", 
                    end: "bottom bottom",
                    markers: true,
                    toggleActions: "play none none reverse", 
                },
            })
            .to(material, { opacity: 1, duration: 0.4 }, 0) 
    }, [scene]);


    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            <primitive object={scene} />
        </group>
    );
}
