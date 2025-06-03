import { useEffect, useRef, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
    EffectComposer,
    Bloom,
    Vignette,
    Noise,
    HueSaturation,
} from "@react-three/postprocessing";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { CameraAnimation } from "./CameraAnimation";
import { ResponsiveCamera } from "./ResponsiveCamera";
import Model from "./Model";
import ScrollIndicator from "../ScrollIndicator";
import Loader from "../Loader/Loader";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ThreeScene = () => {
    const { progress, active } = useProgress(); 
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
		const newOverflow = active ? 'hidden' : '';
		
		if (document.body.style.overflow !== newOverflow) {
			document.body.style.overflow = newOverflow;
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [progress]);
    
    const opacityMaskRef = useRef(null);
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
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#section1",
                start: "top 85%",
                end: "top top",
                scrub: 0.5,
            }
        }).to(opacityMaskRef.current, {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        });


        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#section0",
                start: "top top",
                toggleActions: "play none none reverse",
            }
        }).to(scrollIndicatorRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power1",
        });

        const tl3 = gsap.timeline({
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

        return () => {
            tl1.kill()
            tl2.kill();
            tl3.kill();
        };
    }, []);

    return (
        <>
            <ScrollIndicator ref={scrollIndicatorRef} />
            {!isLoaded && <Loader />}
            <div
                ref={opacityMaskRef}
                style={{
                    position: "fixed",
                    inset: 0,
                    opacity: 0,
                    height: "100vh",
                    width: "100vw",
                    backgroundColor: "var(--background-color)",
                    zIndex: 1
                }}/>
            <div
                ref={canvasRef}
                style={{
                    position: "fixed",
                    inset: 0,
                    opacity: 0,
                    height: "100vh",
                    width: "100vw",
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
                    <CameraAnimation />
                    
                    <Suspense fallback={null}>
                        <ambientLight intensity={3}/>
                        <Model />
                    </Suspense>
                    
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
