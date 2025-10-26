import React, { useRef, useEffect } from 'react';

const UtterancesComments: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.setAttribute('repo', 'bravoxv/mi-universo-bravo-xv');
        script.setAttribute('issue-term', 'pathname');
        script.setAttribute('theme', 'github-dark');
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;

        const container = containerRef.current;
        if (container) {
            container.appendChild(script);
        }

        // Limpieza: elimina el script cuando el componente se desmonta
        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    return <div ref={containerRef} />;
};

export default UtterancesComments;
