import React, { useRef, useEffect } from 'react';

const GiscusComments: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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
        script.setAttribute('data-theme', 'preferred_color_scheme');
        script.setAttribute('data-lang', 'es');
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;

        const container = containerRef.current;
        if (container) {
            // Limpia el contenedor antes de añadir el nuevo script
            // para evitar duplicados en desarrollo con Fast Refresh.
            container.innerHTML = ''; 
            container.appendChild(script);
        }

        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    return <div ref={containerRef} />;
};

export default GiscusComments;
