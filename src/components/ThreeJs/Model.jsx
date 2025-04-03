import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from '@react-three/fiber';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

useGLTF.preload("/models/TestWebP.glb");
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Model() {
    const { scene } = useGLTF("/models/TestWebP.glb");
    const groupRef = useRef();
    const { camera, size } = useThree();

    const myselfObj = scene.getObjectByName("Myself");
    const material = myselfObj.material;
    
    useEffect(() => {
        let scale = size.width < 600 ? 1 : 1.2;
        let posY = size.width < 600 ? 0.72 : 0.8;

        myselfObj.scale.set(scale, scale, scale);
        myselfObj.position.set(-0.7, posY, 0.43);

    }, [scene, size]); 

    useGSAP(() => {
        material.opacity = 0;
        gsap.timeline({
            scrollTrigger: {
                trigger: "#section0", 
                start: "bottom-=1100 top", 
                end: "bottom bottom",
                toggleActions: "play none none reverse", 
            },
        })
        .to(material, { opacity: 1, duration: 0.4 }, 0);
    }, [scene]);

    return (
        <group ref={groupRef} position={[0, 0, 0]} >
            <primitive object={scene} />
        </group>
    );
}
