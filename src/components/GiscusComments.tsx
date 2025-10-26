import React, { useRef, useEffect } from 'react';

const GiscusComments: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) {
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.setAttribute('data-repo', 'bravoxv/mi-universo-bravo-xv');
        script.setAttribute('data-repo-id', 'R_kgDOQJLdOg'); 
        script.setAttribute('data-category', 'Announcements');
        script.setAttribute('data-category-id', 'DIC_kwDOQJLdOs4CxEk9');
        script.setAttribute('data-mapping', 'url');
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'bottom');
        // Se establece un tema oscuro para que coincida con el diseño del sitio.
        script.setAttribute('data-theme', 'dark');
        script.setAttribute('data-lang', 'es');
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;

        // Limpia el contenedor para evitar duplicados en desarrollo con React StrictMode.
        container.innerHTML = ''; 
        container.appendChild(script);

        return () => {
            // Limpia el script y el iframe de Giscus cuando el componente se desmonta.
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    // Giscus necesita que el contenedor tenga la clase 'giscus' para renderizarse correctamente.
    return <div ref={containerRef} className="giscus" />;
};

export default GiscusComments;
