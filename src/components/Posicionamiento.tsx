import { useEffect, useRef, useState } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';

type Marker = { name: string; lat: number; lng: number; };
const markers: Marker[] = [
  { name: 'México',         lat: 23.6345, lng: -102.5528 },
  { name: 'Estados Unidos', lat: 37.0902,  lng:  -95.7129 },
  { name: 'Cuba',           lat: 21.5218,  lng:  -77.7812 },
  { name: 'Rusia',          lat: 61.5240,  lng:  105.3188 },
  { name: 'Suiza',          lat: 46.8182,  lng:    8.2275 },
];

export default function Posicionamiento() {
  const globeEl = useRef<GlobeMethods>();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Ciclo de países
  useEffect(() => {
    let idx = 0;
    const iv = setInterval(() => {
      setActiveIndex(idx);
      idx = (idx + 1) % markers.length;
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  // Controles fijos y auto-rotación
  useEffect(() => {
    const globe = globeEl.current;
    if (!globe) return;
    const c = globe.controls();
    c.enableZoom = false;
    c.enablePan  = false;
    c.minPolarAngle = Math.PI/2;
    c.maxPolarAngle = Math.PI/2;
    const d = c.getDistance();
    c.minDistance = d;
    c.maxDistance = d;
    c.autoRotate = true;
    c.autoRotateSpeed = 0.2;
    globe.pointOfView({ lat: 0, lng: 0, altitude: 2 }, 0);
  }, []);

  useEffect(() => {
  const globe = globeEl.current;
  if (globe && activeIndex !== null) {
    const { lat, lng } = markers[activeIndex];
    globe.pointOfView(
      { lat, lng, altitude: 2 },  // misma altura que usas para el htmlElement
      1000                        // duración de la animación en ms
    );
  }
}, [activeIndex]);

  return (
    <section className="w-full py-16 bg-background text-foreground">
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Nuestra Presencia Global
        </h2>
        <p className="text-lg text-muted-foreground mx-auto max-w-2xl">
          Estamos posicionados en México, Estados Unidos, Cuba, Rusia y Suiza.
        </p>

        <div className="flex justify-center">
          <div style={{ width: 500, height: 500, position: 'relative' }}>
            <Globe
              ref={globeEl}
              width={500}
              height={500}
              globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
              backgroundColor="rgba(0,0,0,0)"
              showAtmosphere
              atmosphereColor="rgba(var(--color-secondary),0.4)"
              pointsData={markers}
              pointLat={(d:any) => d.lat}
              pointLng={(d:any) => d.lng}
              pointAltitude={0.05}
              pointRadius={1}
              pointColor={() => 'rgb(var(--color-primary))'}
              // Aquí la clave: sólo el país activo
              htmlElementsData={[markers[activeIndex]]}
              htmlLat={(d:any) => d.lat}
              htmlLng={(d:any) => d.lng}
              htmlElement={(d:any) => {
                const el = document.createElement('div');
                // Estilos para puntito + etiqueta
                el.style.position = 'absolute';
                el.style.transform = 'translate(-50%, -50%)';
                el.innerHTML = `
                  <div style="
                    width:12px; height:12px;
                    background:rgb(var(--color-primary));
                    border-radius:50%;
                    margin-bottom:4px;
                  "></div>
                  <span style="
                    color:white;
                    font-weight:bold;
                    font-size:1rem;
                    white-space:nowrap;
                  ">${d.name}</span>
                `;
                return el;
              }}
              htmlTransitionDuration={500}
              enablePointerInteraction={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
