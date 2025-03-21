import React from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, Vignette, Noise, HueSaturation} from '@react-three/postprocessing'
import { CameraAnimation } from './CamereAnimation'
import Model from './Model'

const ThreeScene = () => {

	return (	
		<div id='canva' style={{position: "fixed", inset: 0}}>
			<Canvas 
				camera={{  
					position: [4, 4, 4],
					fov: 45
				}}
				dpr={[1, 2]} 
				gl={{ antialias: true }}
				>
				
				<ambientLight intensity={1} />
				<Model/>
				<CameraAnimation/>
				<EffectComposer>
					<Bloom intensity={0.03} luminanceThreshold={0.8} luminanceSmoothing={0.5} />
					<Vignette offset={0.2} darkness={0.7} eskil={false} />
					<HueSaturation hue={0} saturation={-0.05} />
					<Noise opacity={0.005} />
				</EffectComposer>
				<axesHelper args={[5]} />
			</Canvas>	
		</div>
	)
}

export default ThreeScene