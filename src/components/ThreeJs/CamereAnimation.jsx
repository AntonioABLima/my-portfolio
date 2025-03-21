import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export const CameraAnimation = () => {
    const { camera } = useThree();
    const lookAtTarget = useRef({ x: 0, y: 1, z: 0 }); 

    useFrame(() => {
        camera.lookAt(lookAtTarget.current.x, lookAtTarget.current.y, lookAtTarget.current.z);
        console.log(`${lookAtTarget.current.x}, ${lookAtTarget.current.y}, ${lookAtTarget.current.z}\n${camera.position.x}, ${camera.position.y}, ${camera.position.x}`)
    });

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#section0',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                markers: true,
            },
        });

        const midPosition = { x: 1.6, y: 0.9, z: 1.6 };
        const finalPosition = { x: 0.615, y: 0.8, z: 0.44 };
        const finalLookAt = { x: -0.615, y: 0.8, z: 0.44 };

       
        timeline.to(camera.position, {
            ...midPosition,
            duration: 0.5,
        }, 0);
        timeline.to(lookAtTarget.current, {
            y: 0.8,  
            duration: 0.5,
        }, 0); 

        // Tempo 2
        timeline.to(camera.position, {
            ...finalPosition,
            duration: 0.5,
        }, 0.5); 

        timeline.to(lookAtTarget.current, {
            ...finalLookAt,
            duration: 0.5,
        }, 0.5); 

        return () => {
            timeline.kill();
        };
    }, [camera]);

    return null;
};
