import { useEffect, useRef } from "react";
import * as THREE from "three";

type NavNode = {
  anchor: string;
  baseY: number;
  pulseOffset: number;
  mesh: THREE.Mesh<THREE.IcosahedronGeometry, THREE.MeshStandardMaterial>;
};

const SECTION_ANCHORS = ["#home", "#about", "#technologies", "#projects", "#contact"];

const prefersDarkTheme = () => {
  const root = document.documentElement;
  if (root.classList.contains("dark")) return true;
  if (root.classList.contains("light")) return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const NeonScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const fog = new THREE.FogExp2(0x05070f, 0.085);
    scene.fog = fog;

    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 120);
    camera.position.set(0, 0.2, 12.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const sceneRoot = new THREE.Group();
    const orbitGroup = new THREE.Group();
    sceneRoot.add(orbitGroup);
    scene.add(sceneRoot);

    const ambient = new THREE.AmbientLight(0x9ccfff, 0.3);
    const hemisphere = new THREE.HemisphereLight(0x7dd3fc, 0x06080f, 0.35);
    const cyanLight = new THREE.PointLight(0x00e5ff, 22, 28, 2);
    cyanLight.position.set(-4.8, -0.6, 4.8);
    const pinkLight = new THREE.PointLight(0xff3cac, 18, 28, 2);
    pinkLight.position.set(4.8, 1.2, 3.8);
    const limeLight = new THREE.PointLight(0x9dff8f, 10, 18, 2);
    limeLight.position.set(0, 3.8, -1.5);
    scene.add(ambient, hemisphere, cyanLight, pinkLight, limeLight);

    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x77c6ff,
      roughness: 0.22,
      metalness: 0.68,
      clearcoat: 1,
      clearcoatRoughness: 0.16,
      transparent: true,
      opacity: 0.72,
      emissive: new THREE.Color(0x1c5da0),
      emissiveIntensity: 1.25,
    });
    const core = new THREE.Mesh(new THREE.TorusKnotGeometry(2.7, 0.17, 240, 32), coreMaterial);
    orbitGroup.add(core);

    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0xff54c0,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });
    const halo = new THREE.Mesh(new THREE.TorusGeometry(5.2, 0.08, 28, 220), haloMaterial);
    halo.rotation.set(Math.PI * 0.35, 0, 0);
    sceneRoot.add(halo);

    const secondaryHaloMaterial = new THREE.MeshBasicMaterial({
      color: 0x24f3ff,
      transparent: true,
      opacity: 0.24,
      blending: THREE.AdditiveBlending,
    });
    const secondaryHalo = new THREE.Mesh(
      new THREE.TorusGeometry(6.3, 0.05, 16, 180),
      secondaryHaloMaterial,
    );
    secondaryHalo.rotation.set(Math.PI * 0.12, Math.PI * 0.15, 0);
    sceneRoot.add(secondaryHalo);

    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 1200;
    const starsPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const radius = 7.5 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starsPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starsPositions[i * 3 + 1] = radius * Math.cos(phi);
      starsPositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starsPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0x83f8ff,
      size: 0.035,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const nodeGeometry = new THREE.IcosahedronGeometry(0.23, 0);
    const ringGeometry = new THREE.TorusGeometry(0.37, 0.02, 10, 42);
    const navMaterials: THREE.MeshStandardMaterial[] = [];
    const navNodes: NavNode[] = [];

    SECTION_ANCHORS.forEach((anchor, index) => {
      const angle = (index / SECTION_ANCHORS.length) * Math.PI * 2;
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(0.55 + index * 0.065, 0.82, 0.62),
        metalness: 0.78,
        roughness: 0.2,
        emissive: new THREE.Color().setHSL(0.62 + index * 0.05, 0.8, 0.28),
        emissiveIntensity: 1.25,
      });
      navMaterials.push(material);

      const mesh = new THREE.Mesh(nodeGeometry, material);
      mesh.position.set(
        Math.cos(angle) * 4.5,
        Math.sin(angle * 1.35) * 1.45,
        Math.sin(angle) * 2.35,
      );

      const ring = new THREE.Mesh(
        ringGeometry,
        new THREE.MeshBasicMaterial({
          color: material.color,
          transparent: true,
          opacity: 0.42,
          blending: THREE.AdditiveBlending,
        }),
      );
      ring.position.copy(mesh.position);
      ring.rotation.x = Math.PI / 2;
      ring.scale.setScalar(1.08);

      orbitGroup.add(mesh, ring);
      navNodes.push({
        anchor,
        baseY: mesh.position.y,
        pulseOffset: index * 1.2,
        mesh,
      });
    });

    const clickableMeshes = navNodes.map(({ mesh }) => mesh);
    const raycaster = new THREE.Raycaster();
    raycaster.far = 35;
    const pointer = new THREE.Vector2(2, 2);
    const pointerTarget = new THREE.Vector2(2, 2);
    const tmpScale = new THREE.Vector3(1, 1, 1);
    const clock = new THREE.Clock();
    let hoveredNode: NavNode | null = null;
    let rafId = 0;

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointerTarget.set(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -((clientY - rect.top) / rect.height) * 2 + 1,
      );
    };

    const onPointerMove = (event: PointerEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const onPointerLeave = () => {
      pointerTarget.set(2, 2);
    };

    const onClick = () => {
      if (!hoveredNode) return;
      const target = document.querySelector(hoveredNode.anchor);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const updateTheme = () => {
      const dark = prefersDarkTheme();
      if (dark) {
        fog.color.setHex(0x05070f);
        fog.density = 0.085;
        renderer.toneMappingExposure = 1.15;
        starsMaterial.color.setHex(0x83f8ff);
        haloMaterial.color.setHex(0xff54c0);
        secondaryHaloMaterial.color.setHex(0x24f3ff);
        coreMaterial.color.setHex(0x77c6ff);
        coreMaterial.emissive.setHex(0x1c5da0);
      } else {
        fog.color.setHex(0xe6f8ff);
        fog.density = 0.052;
        renderer.toneMappingExposure = 1.0;
        starsMaterial.color.setHex(0x3cb5ff);
        haloMaterial.color.setHex(0xff4ca0);
        secondaryHaloMaterial.color.setHex(0x00b9ff);
        coreMaterial.color.setHex(0x42a7ff);
        coreMaterial.emissive.setHex(0x0b4b84);
      }
    };

    const onResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onThemeQueryChange = () => updateTheme();
    themeQuery.addEventListener("change", onThemeQueryChange);

    const themeObserver = new MutationObserver(updateTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const animate = () => {
      rafId = window.requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      pointer.lerp(pointerTarget, 0.09);

      orbitGroup.rotation.y = elapsed * 0.08 + pointer.x * 0.28;
      orbitGroup.rotation.x = pointer.y * 0.13;
      core.rotation.x = elapsed * 0.22;
      core.rotation.y = elapsed * 0.31;
      halo.rotation.z = elapsed * 0.11;
      secondaryHalo.rotation.z = -elapsed * 0.08;
      stars.rotation.y = elapsed * 0.012;
      stars.rotation.x = Math.sin(elapsed * 0.15) * 0.028;

      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(clickableMeshes, false)[0]?.object;
      hoveredNode = navNodes.find(({ mesh }) => mesh === hit) ?? null;
      renderer.domElement.style.cursor = hoveredNode ? "pointer" : "default";

      navNodes.forEach((node, index) => {
        node.mesh.position.y = node.baseY + Math.sin(elapsed * 1.6 + node.pulseOffset) * (0.14 + index * 0.01);
        const active = hoveredNode?.mesh === node.mesh;
        tmpScale.setScalar(active ? 1.65 : 1);
        node.mesh.scale.lerp(tmpScale, 0.14);
        node.mesh.material.emissiveIntensity += ((active ? 2.8 : 1.25) - node.mesh.material.emissiveIntensity) * 0.14;
      });

      renderer.render(scene, camera);
    };

    renderer.domElement.addEventListener("pointermove", onPointerMove, { passive: true });
    renderer.domElement.addEventListener("pointerleave", onPointerLeave);
    renderer.domElement.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);

    onResize();
    updateTheme();
    animate();

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerleave", onPointerLeave);
      renderer.domElement.removeEventListener("click", onClick);
      themeQuery.removeEventListener("change", onThemeQueryChange);
      themeObserver.disconnect();

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
        if (object instanceof THREE.Points) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      navMaterials.length = 0;
    };
  }, []);

  return <div ref={containerRef} className="three-canvas-layer" aria-hidden="true" />;
};

export default NeonScene;
