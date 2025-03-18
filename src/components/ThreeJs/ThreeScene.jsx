import React, { Suspense }  from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls  } from '@react-three/drei'
import { BedroomBaked } from './BedroomBaked'
import { EffectComposer, Bloom, Vignette, Noise  } from '@react-three/postprocessing'


const ThreeScene = () => {

	return (	
		<Canvas 
			camera={{  
				position: [3, 3, 3],
				fov: 50
			}}
			style={{ height: '100vh' }}
			dpr={[1, 2]} 
			gl={{ antialias: true }}
			>

			<Suspense fallbacl={null}>
				<ambientLight intensity={1} />
				<OrbitControls target={[0, 1, 0]}/>
				<BedroomBaked />
			</Suspense>
			<EffectComposer>
				<Bloom intensity={0.03} luminanceThreshold={0.8} luminanceSmoothing={0.5} />
				<Vignette offset={0.2} darkness={0.7} eskil={false} />
				<Noise opacity={0.005} />
			</EffectComposer>
		</Canvas>	
	)
}

export default ThreeScene