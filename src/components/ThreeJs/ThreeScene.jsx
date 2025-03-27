import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette, Noise, HueSaturation } from '@react-three/postprocessing';
import { CameraAnimation } from './CameraAnimation';
import { ResponsiveCamera } from './ResponsiveCamera';
import Model from './Model';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ThreeScene = () => {
	const canvasRef = useRef(null);
	const tl = useRef(); 

	useGSAP(() => {
		tl.current = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#section1', 
				start: 'top 65%',
				end: 'top top', 
				scrub: 0.5,
			},
		})
		.to(canvasRef.current, {
			opacity: 0,
			duration: 1,
			ease: 'power2.out',
		});

	}, {});

	return (
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
				<ambientLight intensity={1} />
				<ResponsiveCamera />
				<Model />
				<CameraAnimation />
				<EffectComposer>
					<Bloom intensity={0.03} luminanceThreshold={0.8} luminanceSmoothing={0.5} />
					<Vignette offset={0.2} darkness={0.7} eskil={false} />
					<HueSaturation hue={0} saturation={-0.05} />
					<Noise opacity={0.005} />
				</EffectComposer>
			</Canvas>
		</div>
	);
};

export default ThreeScene;
