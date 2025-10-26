import React, { useRef, useEffect } from 'react';

const GiscusComments: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.setAttribute('data-repo', 'bravoxv/mi-universo-bravo-xv');
        // ¡IMPORTANTE! Reemplaza estos valores con los que obtengas de la página de Giscus
        script.setAttribute('data-repo-id', 'TU_REPO_ID'); 
        script.setAttribute('data-category', 'Comentarios');
        script.setAttribute('data-category-id', 'TU_CATEGORY_ID');
        // ---
        script.setAttribute('data-mapping', 'pathname');
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'top');
        script.setAttribute('data-theme', 'dark_dimmed');
        script.setAttribute('data-lang', 'es');
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;

        const container = containerRef.current;
        if (container) {
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
