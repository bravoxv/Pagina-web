import React, { useEffect, useRef } from 'react';

/**
 * Componente robusto para incrustar comentarios de Giscus.
 * Crea e inyecta dinámicamente el script de Giscus en el DOM,
 * asegurando que funcione correctamente dentro del ciclo de vida de un componente de React.
 */
const GiscusComments: React.FC = () => {
    // Una referencia al elemento contenedor donde se montará Giscus.
    const commentsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const commentsContainer = commentsRef.current;
        if (!commentsContainer) {
            return;
        }

        // Para evitar que se agreguen scripts duplicados por el StrictMode de React
        // en desarrollo, primero limpiamos el contenedor.
        commentsContainer.innerHTML = '';

        // Creamos el elemento script con toda la configuración necesaria de Giscus.
        const scriptEl = document.createElement('script');
        scriptEl.src = 'https://giscus.app/client.js';
        scriptEl.async = true;
        scriptEl.setAttribute('crossorigin', 'anonymous');

        // --- Configuración de Giscus ---
        // Estos atributos son críticos para conectar con el repositorio y la discusión correctos de GitHub.
        scriptEl.setAttribute('data-repo', 'bravoxv/mi-universo-bravo-xv');
        scriptEl.setAttribute('data-repo-id', 'R_kgDOQJLdOg');
        scriptEl.setAttribute('data-category', 'General');
        scriptEl.setAttribute('data-category-id', 'DIC_kwDOQJLdOs4CxEk-');
        
        // Se cambia a 'title' para que la discusión se base en el título de la página,
        // una estrategia más robusta para esta aplicación de página única.
        scriptEl.setAttribute('data-mapping', 'title'); 
        
        scriptEl.setAttribute('data-strict', '0');
        scriptEl.setAttribute('data-reactions-enabled', '1');
        scriptEl.setAttribute('data-emit-metadata', '0');
        scriptEl.setAttribute('data-input-position', 'bottom');
        scriptEl.setAttribute('data-theme', 'preferred_color_scheme');
        scriptEl.setAttribute('data-lang', 'es');

        // Añadimos el script configurado a nuestro contenedor, lo que activa la carga de Giscus.
        commentsContainer.appendChild(scriptEl);

        // La función de limpieza se asegura de que el contenedor se vacíe cuando el componente se desmonte.
        return () => {
            if (commentsContainer) {
                commentsContainer.innerHTML = '';
            }
        };

    }, []); // El array de dependencias vacío asegura que este efecto se ejecute solo una vez cuando el componente se monta.

    // Este div es el destino de Giscus. La clase 'giscus' ayuda a Giscus a identificar el contenedor.
    return <div ref={commentsRef} className="giscus" />;
};

export default GiscusComments;