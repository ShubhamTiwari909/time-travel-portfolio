import * as THREE from "three";

export type DriveEra = "past" | "present" | "future";
export type DriveController = {
    readonly available: boolean;
    setVisible: (visible: boolean) => void;
    setReduced: (reduced: boolean) => void;
    setEra: (era: DriveEra) => void;
    rotate: (delta: number) => void;
    reset: () => void;
    jump: () => void;
    dispose: () => void;
};
type Options = { reduced: boolean; era: DriveEra; onArrival: () => void; onUnavailable: () => void };
const eraColors = { past: 0xff9b45, present: 0x62f5ff, future: 0x8ea5ff };

/** This module (including Three.js) is imported only when the section is nearby. */
export function createTimeMachine(canvas: HTMLCanvasElement, options: Options): DriveController {
    const context = canvas.getContext("webgl2", { alpha: true, antialias: true, powerPreference: "low-power" });
    if (!context || context.isContextLost()) throw new Error("WebGL2 unavailable");
    const renderer = new THREE.WebGLRenderer({ canvas, context, alpha: true, antialias: true });
    renderer.setClearColor(0x030a10, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030a10, 0.035);
    const camera = new THREE.PerspectiveCamera(39, 1, 0.1, 90);
    const assembly = new THREE.Group();
    scene.add(assembly);
    const geometries = new Set<THREE.BufferGeometry>();
    const materials = new Set<THREE.Material>();
    try {
        function geometry<T extends THREE.BufferGeometry>(value: T) { geometries.add(value); return value; }
        function material<T extends THREE.Material>(value: T) { materials.add(value); return value; }
        const hullMaterial = material(new THREE.MeshStandardMaterial({ color: 0x182c39, metalness: 0.7, roughness: 0.38 }));
        const darkMaterial = material(new THREE.MeshStandardMaterial({ color: 0x0a1521, metalness: 0.8, roughness: 0.3 }));
        const trimMaterial = material(new THREE.MeshBasicMaterial({ color: eraColors[options.era], toneMapped: false }));
        const glowMaterial = material(new THREE.MeshBasicMaterial({ color: eraColors[options.era], transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
        const orangeMaterial = material(new THREE.MeshBasicMaterial({ color: 0xff9b45, toneMapped: false }));
        const edgeMaterial = material(new THREE.LineBasicMaterial({ color: eraColors[options.era], transparent: true, opacity: 0.6, toneMapped: false }));
        function mesh(shape: THREE.BufferGeometry, surface: THREE.Material, parent: THREE.Object3D = assembly) {
            const object = new THREE.Mesh(geometry(shape), surface);
            parent.add(object);
            return object;
        }
        function outlined(object: THREE.Mesh) {
            object.add(new THREE.LineSegments(geometry(new THREE.EdgesGeometry(object.geometry, 25)), edgeMaterial));
        }
        function torus(radius: number, tube: number, parent: THREE.Object3D, surface: THREE.Material = trimMaterial, arc = Math.PI * 2) {
            return mesh(new THREE.TorusGeometry(radius, tube, 6, 96, arc), surface, parent);
        }
        function beam(from: THREE.Vector3, to: THREE.Vector3, width: number, surface: THREE.Material, parent: THREE.Object3D) {
            const object = mesh(new THREE.CylinderGeometry(width, width, from.distanceTo(to), 5), surface, parent);
            object.position.copy(from).add(to).multiplyScalar(0.5);
            object.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), to.clone().sub(from).normalize());
            return object;
        }
        scene.add(new THREE.HemisphereLight(0x9acbe0, 0x182436, 2.5));
        const keyLight = new THREE.DirectionalLight(0xc2e6ff, 4);
        keyLight.position.set(3, 7, 5);
        scene.add(keyLight);
        const rimLight = new THREE.PointLight(eraColors[options.era], 65, 18, 2);
        rimLight.position.set(-4, 3, 2);
        scene.add(rimLight);
        const engineLight = new THREE.PointLight(0xff9b45, 45, 12, 2);
        engineLight.position.set(0, 1, -4);
        scene.add(engineLight);

        // Independently oriented hoops establish depth around the temporal craft.
        const outerRing = new THREE.Group();
        outerRing.rotation.set(0.12, -0.28, 0.12);
        assembly.add(outerRing);
        torus(3.7, 0.075, outerRing, darkMaterial);
        torus(3.76, 0.014, outerRing);
        torus(3.64, 0.012, outerRing);
        torus(3.76, 0.085, outerRing, glowMaterial);
        const tickGeometry = geometry(new THREE.BoxGeometry(0.022, 0.13, 0.045));
        const ticks = new THREE.InstancedMesh(tickGeometry, trimMaterial, 60);
        const dummy = new THREE.Object3D();
        for (let i = 0; i < 60; i++) {
            const angle = i / 60 * Math.PI * 2;
            dummy.position.set(Math.sin(angle) * 3.51, Math.cos(angle) * 3.51, 0);
            dummy.rotation.set(0, 0, -angle);
            dummy.scale.set(i % 5 === 0 ? 2 : 1, i % 5 === 0 ? 2.4 : 1, 1);
            dummy.updateMatrix();
            ticks.setMatrixAt(i, dummy.matrix);
        }
        outerRing.add(ticks);
        for (let i = 0; i < 4; i++) {
            const bracket = torus(3.85, 0.045, outerRing, trimMaterial, 0.26);
            bracket.rotation.z = i * Math.PI / 2;
        }
        const gyroA = new THREE.Group();
        gyroA.rotation.set(1.05, 0.3, -0.45);
        assembly.add(gyroA);
        torus(3.2, 0.08, gyroA, hullMaterial);
        torus(3.28, 0.021, gyroA);
        torus(3.28, 0.105, gyroA, glowMaterial);
        const gyroB = new THREE.Group();
        gyroB.rotation.set(-0.6, 1.1, 0.5);
        assembly.add(gyroB);
        torus(2.95, 0.042, gyroB, darkMaterial);
        torus(2.99, 0.018, gyroB);
        for (let i = 0; i < 8; i++) {
            const pod = mesh(new THREE.BoxGeometry(0.24, 0.11, 0.16), hullMaterial, gyroA);
            const angle = i * Math.PI / 4;
            pod.position.set(Math.cos(angle) * 3.2, Math.sin(angle) * 3.2, 0);
            pod.rotation.z = angle;
            outlined(pod);
        }

        const ship = new THREE.Group();
        ship.rotation.y = -0.2;
        assembly.add(ship);
        function plate(points: [number, number][], depth: number, surface: THREE.Material) {
            const shape = new THREE.Shape();
            points.forEach(([x, z], i) => i === 0 ? shape.moveTo(x, z) : shape.lineTo(x, z));
            shape.closePath();
            const object = mesh(new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false }), surface, ship);
            object.rotation.x = Math.PI / 2;
            outlined(object);
            return object;
        }
        // Angular wings, a faceted cockpit, rear turbines and a visible clock reactor.
        plate([[0, 2.55], [0.72, 0.4], [0.64, -1.72], [-0.64, -1.72], [-0.72, 0.4]], 0.3, hullMaterial);
        for (const side of [-1, 1]) {
            plate([[side * 0.6, 0.55], [side * 2.65, -1.2], [side * 2.55, -1.75], [side * 1.05, -1.1], [side * 0.56, 1.25]], 0.12, darkMaterial);
            beam(new THREE.Vector3(side * 0.64, 0.02, 1.05), new THREE.Vector3(side * 2.6, 0.02, -1.35), 0.022, trimMaterial, ship);
            const engine = mesh(new THREE.CylinderGeometry(0.29, 0.38, 1.45, 10), hullMaterial, ship);
            engine.rotation.x = Math.PI / 2;
            engine.position.set(side * 1.1, -0.03, -1.15);
            outlined(engine);
            const nozzle = torus(0.27, 0.05, ship, orangeMaterial);
            nozzle.position.set(side * 1.1, -0.03, -1.9);
            const exhaust = mesh(new THREE.ConeGeometry(0.22, 1.1, 12, 1, true), glowMaterial, ship);
            exhaust.rotation.x = Math.PI / 2;
            exhaust.position.set(side * 1.1, -0.03, -2.5);
        }
        const cockpit = mesh(new THREE.OctahedronGeometry(1, 0), darkMaterial, ship);
        cockpit.scale.set(0.46, 0.38, 1.08);
        cockpit.position.set(0, 0.25, 0.9);
        outlined(cockpit);
        beam(new THREE.Vector3(0, 0.65, 0.1), new THREE.Vector3(0, 0.05, 2.55), 0.018, trimMaterial, ship);
        const reactor = new THREE.Group();
        reactor.position.set(0, 0.2, -0.65);
        reactor.rotation.x = -Math.PI / 2;
        ship.add(reactor);
        const coreBase = mesh(new THREE.CylinderGeometry(0.57, 0.64, 0.18, 24), darkMaterial, ship);
        coreBase.position.set(0, 0.03, -0.65);
        torus(0.55, 0.024, reactor);
        torus(0.44, 0.009, reactor);
        const clockHands = new THREE.Group();
        reactor.add(clockHands);
        beam(new THREE.Vector3(0, 0, 0.04), new THREE.Vector3(0.28, 0.15, 0.04), 0.016, trimMaterial, clockHands);
        beam(new THREE.Vector3(0, 0, 0.04), new THREE.Vector3(-0.12, 0.32, 0.04), 0.011, orangeMaterial, clockHands);
        const core = mesh(new THREE.IcosahedronGeometry(0.13, 1), trimMaterial, reactor);
        core.position.z = 0.13;

        // Soft radial energy without textures or postprocessing render targets.
        const portalMaterial = material(new THREE.ShaderMaterial({
            uniforms: { uTime: { value: 0 }, uJump: { value: 0 }, uColor: { value: new THREE.Color(eraColors[options.era]) } },
            vertexShader: "varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
            fragmentShader: `varying vec2 vUv; uniform float uTime; uniform float uJump; uniform vec3 uColor;
                void main(){vec2 p=vUv*2.0-1.0; float r=length(p); float a=atan(p.y,p.x);
                float edge=pow(max(0.0,1.0-abs(r-.78)*12.0),2.0);
                float rings=pow(.5+.5*sin(r*68.0-uTime*1.8),8.0)*.05;
                float spokes=pow(.5+.5*sin(a*12.0+r*8.0-uTime*.5),16.0)*.05;
                float mask=(1.0-smoothstep(.86,1.0,r))*smoothstep(.12,.45,r);
                float energy=(edge*.32+rings+spokes+uJump*.1)*mask;
                gl_FragColor=vec4(uColor,energy);}`,
            transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false,
        }));
        const membrane = mesh(new THREE.PlaneGeometry(7.2, 7.2), portalMaterial);
        membrane.position.z = -1.7;
        const grid = new THREE.GridHelper(48, 48, 0x244b59, 0x102936);
        grid.position.y = -3.85;
        geometry(grid.geometry);
        const gridMaterial = grid.material as THREE.LineBasicMaterial;
        material(gridMaterial);
        gridMaterial.transparent = true;
        gridMaterial.opacity = 0.55;
        scene.add(grid);
        const platform = new THREE.Group();
        platform.rotation.x = -Math.PI / 2;
        platform.position.y = -3.8;
        scene.add(platform);
        const platformMaterial = material(new THREE.MeshBasicMaterial({ color: eraColors[options.era], transparent: true, opacity: 0.25, depthWrite: false }));
        torus(4.9, 0.012, platform, platformMaterial);
        torus(4.4, 0.008, platform, platformMaterial);
        const stars = new Float32Array(180 * 3);
        for (let i = 0; i < 180; i++) {
            const a = i * 2.399963;
            const r = 7 + (i % 11) * 0.7;
            stars[i * 3] = Math.cos(a) * r;
            stars[i * 3 + 1] = Math.sin(a) * r * 0.65 + 1;
            stars[i * 3 + 2] = -8 - (i % 9) * 2;
        }
        const starGeometry = geometry(new THREE.BufferGeometry());
        starGeometry.setAttribute("position", new THREE.BufferAttribute(stars, 3));
        const starMaterial = material(new THREE.PointsMaterial({ color: 0x91c6dd, size: 0.025, transparent: true, opacity: 0.65 }));
        scene.add(new THREE.Points(starGeometry, starMaterial));
        const streakPositions = new Float32Array(36 * 6);
        for (let i = 0; i < 36; i++) {
            const a = i * 2.399963;
            const r = 4.5 + i % 5;
            streakPositions.set([Math.cos(a) * r, Math.sin(a) * r, -18, Math.cos(a) * r, Math.sin(a) * r, -5], i * 6);
        }
        const streakGeometry = geometry(new THREE.BufferGeometry());
        streakGeometry.setAttribute("position", new THREE.BufferAttribute(streakPositions, 3));
        const streakMaterial = material(new THREE.LineBasicMaterial({ color: eraColors[options.era], transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
        const streaks = new THREE.LineSegments(streakGeometry, streakMaterial);
        scene.add(streaks);

        let disposed = false;
        let unavailable = false;
        let visible = false;
        let reduced = options.reduced;
        let running = false;
        let elapsed = 0;
        let lastFrame = 0;
        let yaw = 0;
        let jumpTime: number | null = null;
        let drag: { id: number; x: number; y: number; yaw: number; captured: boolean } | null = null;
        const homeCamera = new THREE.Vector3();
        function render() {
            if (disposed || unavailable) return;
            try { renderer.render(scene, camera); }
            catch {
                unavailable = true;
                syncLoop();
                options.onUnavailable();
            }
        }
        function updatePose() {
            const progress = jumpTime === null ? 0 : Math.min(1, jumpTime / 3.2);
            const energy = Math.sin(progress * Math.PI) ** 2;
            assembly.rotation.y = yaw + (reduced ? 0 : Math.sin(elapsed * 0.13) * 0.08);
            assembly.position.y = reduced ? 0 : Math.sin(elapsed * 0.7) * 0.12;
            outerRing.rotation.z = 0.12 + elapsed * 0.055 + energy * 0.3;
            gyroA.rotation.y = 0.3 + elapsed * 0.09 + energy * 1.6;
            gyroB.rotation.x = -0.6 - elapsed * 0.07 - energy * 1.2;
            clockHands.rotation.z = -elapsed * 0.5;
            core.rotation.z = elapsed * 0.5;
            glowMaterial.opacity = 0.08 + energy * 0.16;
            streakMaterial.opacity = energy * 0.6;
            streaks.position.z = progress * 9;
            portalMaterial.uniforms.uTime.value = elapsed;
            portalMaterial.uniforms.uJump.value = energy;
            camera.position.copy(homeCamera).multiplyScalar(1 - energy * 0.09);
            camera.lookAt(0, -0.35, 0);
        }
        function frame(now: number) {
            // 30fps ceiling; capped elapsed time prevents a large jump on tab resume.
            if (lastFrame && now - lastFrame < 1000 / 30) return;
            const delta = lastFrame ? Math.min((now - lastFrame) / 1000, 0.075) : 0;
            lastFrame = now;
            elapsed += delta;
            if (jumpTime !== null) {
                jumpTime += delta;
                if (jumpTime >= 3.2) { jumpTime = null; options.onArrival(); }
            }
            updatePose(); render();
        }
        function syncLoop() {
            const shouldRun = visible && !reduced && !disposed && !unavailable;
            if (shouldRun === running) return;
            running = shouldRun;
            lastFrame = 0;
            renderer.setAnimationLoop(shouldRun ? frame : null);
        }
        function resize() {
            if (disposed || unavailable) return;
            const { width, height } = canvas.getBoundingClientRect();
            if (!width || !height) return;
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, width < 650 ? 1.25 : 1.5));
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            const distance = width < 650 ? 14.5 : 15.5;
            // Fit the complete craft on phones instead of clipping its rings.
            const fit = Math.max(1, 0.9 / camera.aspect);
            homeCamera.set(0.52, 0.33, 0.79).normalize().multiplyScalar(distance * fit);
            updatePose(); render();
        }
        function pointerDown(event: PointerEvent) {
            if (!event.isPrimary || event.button !== 0 || unavailable) return;
            drag = { id: event.pointerId, x: event.clientX, y: event.clientY, yaw, captured: false };
        }
        function pointerMove(event: PointerEvent) {
            if (!drag || drag.id !== event.pointerId) return;
            const dx = event.clientX - drag.x, dy = event.clientY - drag.y;
            if (!drag.captured) {
                if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 8) { drag = null; return; }
                if (Math.abs(dx) < 8) return;
                canvas.setPointerCapture(event.pointerId);
                drag.captured = true;
            }
            yaw = drag.yaw + dx * 0.008;
            updatePose(); render();
        }
        function pointerUp(event: PointerEvent) {
            if (drag?.id !== event.pointerId) return;
            if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
            drag = null;
        }
        function lost(event: Event) {
            event.preventDefault();
            unavailable = true;
            syncLoop();
            options.onUnavailable();
        }
        renderer.debug.onShaderError = () => {
            unavailable = true;
            syncLoop();
            options.onUnavailable();
        };
        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvas);
        canvas.addEventListener("pointerdown", pointerDown);
        canvas.addEventListener("pointermove", pointerMove);
        canvas.addEventListener("pointerup", pointerUp);
        canvas.addEventListener("pointercancel", pointerUp);
        canvas.addEventListener("lostpointercapture", pointerUp);
        canvas.addEventListener("webglcontextlost", lost);
        resize();

        return {
            get available() { return !unavailable && !disposed; },
            setVisible(value) { visible = value; syncLoop(); },
            setReduced(value) {
                reduced = value;
                if (value && jumpTime !== null) { jumpTime = null; options.onArrival(); }
                syncLoop(); updatePose(); render();
            },
            setEra(era) {
                const color = eraColors[era];
                for (const surface of [trimMaterial, glowMaterial, edgeMaterial, streakMaterial, platformMaterial]) surface.color.setHex(color);
                rimLight.color.setHex(color);
                portalMaterial.uniforms.uColor.value.setHex(color);
                render();
            },
            rotate(delta) { yaw += delta; updatePose(); render(); },
            reset() { yaw = 0; updatePose(); render(); },
            jump() {
                if (unavailable || disposed || jumpTime !== null) return;
                if (reduced) { options.onArrival(); render(); }
                else { jumpTime = 0; syncLoop(); }
            },
            dispose() {
                if (disposed) return;
                disposed = true;
                renderer.setAnimationLoop(null);
                resizeObserver.disconnect();
                canvas.removeEventListener("pointerdown", pointerDown);
                canvas.removeEventListener("pointermove", pointerMove);
                canvas.removeEventListener("pointerup", pointerUp);
                canvas.removeEventListener("pointercancel", pointerUp);
                canvas.removeEventListener("lostpointercapture", pointerUp);
                canvas.removeEventListener("webglcontextlost", lost);
                if (drag && canvas.hasPointerCapture(drag.id)) canvas.releasePointerCapture(drag.id);
                ticks.dispose();
                geometries.forEach((value) => value.dispose());
                materials.forEach((value) => value.dispose());
                renderer.dispose();
                renderer.forceContextLoss();
            },
        };
    } catch (error) {
        // Failed initialization must not retain a context or partially built resources.
        geometries.forEach((value) => value.dispose());
        materials.forEach((value) => value.dispose());
        renderer.setAnimationLoop(null);
        renderer.dispose();
        renderer.forceContextLoss();
        throw error;
    }
}
