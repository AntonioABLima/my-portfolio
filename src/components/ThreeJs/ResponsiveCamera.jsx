import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

export const ResponsiveCamera = () => {
	const { camera, size } = useThree();

	useEffect(() => {
		
		if (size.width < 600) {
			camera.position.set(6, 6, 6); 
		} else {
			camera.position.set(4, 4, 4); 
		}

		camera.updateProjectionMatrix(); 
	}, [size, camera]);

	return null; 
};
