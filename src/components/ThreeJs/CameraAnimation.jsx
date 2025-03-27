import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const CameraAnimation = () => {
    const { camera } = useThree();
    const tl = useRef();
    const lookAtTarget = useRef({ x: 0, y: 1, z: 0 });

    useFrame(() => {
        camera.lookAt(lookAtTarget.current.x, lookAtTarget.current.y, lookAtTarget.current.z);
    });

    useGSAP(() => {
        const midPosition = { x: 1.6, y: 0.9, z: 1.6 };
        const finalPosition = { x: 0.615, y: 0.8, z: 0.44 };
        const finalLookAt = { x: -0.615, y: 0.8, z: 0.44 };

        tl.current = gsap
            .timeline({
                scrollTrigger: {
                    trigger: "#section0",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.2,
                },
            })
            .to(camera.position, { ...midPosition, duration: 0.5 }, 0)
            .to(lookAtTarget.current, { y: 0.8, duration: 0.5 }, 0)
            .to(camera.position, { ...finalPosition, duration: 0.5 }, 0.5)
            .to(lookAtTarget.current, { ...finalLookAt, duration: 0.5 }, 0.5)
    }, []);

    return null;
};
