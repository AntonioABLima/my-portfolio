import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from '@react-three/fiber';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

useGLTF.preload("src/assets/models/TesteWebP.glb");
gsap.registerPlugin(ScrollTrigger);

export default function Model() {
    const { scene } = useGLTF("src/assets/models/TestWebP.glb");
    const groupRef = useRef();
    const { camera, size } = useThree();

    const myselfObj = scene.getObjectByName("Myself");
    const material = myselfObj.material;
    
    useEffect(() => {
        let scale = 0;
        let posY = 0;

        if (size.width < 600) {
            scale = 1;
            posY = 0.7;
        } else {
            scale = 1.2;
            posY = 0.8;
        }

        myselfObj.scale.set(scale, scale, scale);
        myselfObj.position.set(-0.7, posY, 0.42);

        material.roughness = 1;
        material.metalness = 0.1;
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
        <group ref={groupRef} position={[0, 0, 0]}>
            <primitive object={scene} />
        </group>
    );
}
