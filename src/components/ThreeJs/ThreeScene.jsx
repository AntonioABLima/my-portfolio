import { useEffect, useRef, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
    EffectComposer,
    Bloom,
    Vignette,
    Noise,
    HueSaturation,
} from "@react-three/postprocessing";
import { CameraAnimation } from "./CameraAnimation";
import { ResponsiveCamera } from "./ResponsiveCamera";
import Model from "./Model";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollIndicator from "../ScrollIndicator";
import Loader from "../Loader/Loader";
import { useProgress } from "@react-three/drei";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ThreeScene = () => {
    const { progress, active } = useProgress(); 
    const [isLoaded, setIsLoaded] = useState(false);
    const tl = useRef();

    useEffect(() => {
		const newOverflow = active ? 'hidden' : '';
		
		if (document.body.style.overflow !== newOverflow) {
			document.body.style.overflow = newOverflow;
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [progress]);
    
    const canvasRef = useRef(null);
    const scrollIndicatorRef = useRef(null);

    useEffect(() => {
        if (!active) {
            setTimeout(() => {
                setIsLoaded(true); 
                gsap.to(canvasRef.current, {
                    opacity: 1,
                    duration: 1.5,
                    ease: "power.out",
                });

                gsap.to(scrollIndicatorRef.current, {
                    opacity: 1,
                    duration: 1.5,
                    ease: "power.out",
                });
            }, 500);
        }
    }, [active]);

     useGSAP(() => {
        tl.current = gsap
            .timeline({
                scrollTrigger: {
                    trigger: "#section1",
                    start: "top 85%",
                    end: "top top",
                    scrub: 0.5,
                },
            })
            .to(canvasRef.current, {
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#section0",
                start: "top top",
                toggleActions: "play none none reverse",
            },
        }).to(scrollIndicatorRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power1",
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#section0",
                start: "bottom-=1100 top",
                end: "bottom-=900 top",
                toggleActions: "play reverse play reverse",
            },
        }).to(scrollIndicatorRef.current, {
            opacity: 1,
            duration: 0.2,
            ease: "power1",
        });
    }, []);

    return (
        <>
            <ScrollIndicator ref={scrollIndicatorRef} />
            {!isLoaded && <Loader />}
            <div
                ref={canvasRef}
                style={{
                    position: "fixed",
                    inset: 0,
                    opacity: 0,
                    height: "100vh",
                    width: "100vw",
                    pointerEvents: isLoaded ? 'auto' : 'none',
                }}
            >
                <Canvas
                    style={{ width: "100%", height: "100%" }}
                    camera={{
                        position: [4, 4, 4],
                        fov: 45,
                    }}
                    dpr={[1, window.devicePixelRatio]}
                    gl={{ antialias: true }}
                >
                    <ResponsiveCamera />
                    <Suspense fallback={null}>
                        <ambientLight intensity={3} />
                        <Model />
                    </Suspense>
                    <CameraAnimation />
                    <EffectComposer>
                        <Bloom intensity={0.03} luminanceThreshold={0.8} luminanceSmoothing={0.5} />
                        <Vignette offset={0.2} darkness={0.7} eskil={false} />
                        <HueSaturation hue={0} saturation={-0.05} />
                        <Noise opacity={0.005} />
                    </EffectComposer>
                </Canvas>
            </div>
        </>
    );
};

export default ThreeScene;
