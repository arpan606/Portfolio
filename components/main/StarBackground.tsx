"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
    const ref: any = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.2 })
    );
    let toggle = false;
    useFrame((state, delta) => {
        if (toggle) {
            ref.current.rotation.z += delta / 15;
        } else {
            ref.current.rotation.z -= delta / 5;
        }
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    })


    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            {/* @ts-ignore */}
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                {/* @ts-ignore */}
                <PointMaterial
                    transparent
                    color={props.color}
                    size={0.004}
                    sizeAttenuation={true}
                    dethWrite={false}
                />
            </Points>
        </group>
    )
};

const StarsCanvas = (props: any) => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        {/* @ts-ignore */}
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground color={props.color} />
            </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;