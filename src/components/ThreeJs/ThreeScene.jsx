import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette, Noise, HueSaturation } from '@react-three/postprocessing';
import { CameraAnimation } from './CameraAnimation';
import { ResponsiveCamera } from './ResponsiveCamera';
import Model from './Model';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollIndicator from '../ScrollIndicator';
import { Html, useProgress } from '@react-three/drei'
import { Suspense } from 'react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Loader() {
	const { progress } = useProgress()
	return <Html center>{progress} % loaded</Html>
}

const ThreeScene = () => {
	const tl = useRef(); 
	const canvasRef = useRef(null);
	const scrollIndicatorRef = useRef(null);

	useGSAP(() => {
		tl.current = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#section1', 
				start: 'top 85%',
				end: 'top top', 
				scrub: 0.5,
			},
		})
		.to(canvasRef.current, {
			opacity: 0,
			duration: 1,
			ease: 'power2.out',
		});
		
		gsap.timeline({
			scrollTrigger: {
				trigger: '#section0', 
				start: 'top top',
				toggleActions: "play none none reverse", 
			},
		})
		.to(scrollIndicatorRef.current, {
			opacity: 0,   
			duration: 0.2,
			ease: 'power1',
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: "#section0",
				start: "bottom-=1100 top",
				end: "bottom-=900 top",
				toggleActions: "play reverse play reverse", 
			},
		})
		.to(scrollIndicatorRef.current, {
			opacity: 1,
			duration: 0.2,
			ease: "power1",
		});

	}, {});

	return (
		<>
		<ScrollIndicator ref={scrollIndicatorRef}/>
		<div
			ref={canvasRef}
			style={{
				position: 'fixed',
				inset: 0,
				opacity: 1,
				pointerEvents: 'none',
			}}
		>
			<Canvas
				style={{ width: '100%', height: '100%' }}
				camera={{
					position: [4, 4, 4],
					fov: 45,
				}}
				dpr={[1, window.devicePixelRatio]}
				gl={{ antialias: true }}
			>
				<ambientLight intensity={3} />
				<ResponsiveCamera />
				<Suspense fallback={<Loader />}>
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
