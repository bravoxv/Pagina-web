import React, { useState } from 'react';

const DonateModalContent: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const cvu = "0000177500000007475928";

    const handleCopy = () => {
        navigator.clipboard.writeText(cvu).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="text-center text-gray-300 space-y-6">
            <p>
                Si te gusta mi contenido, considera apoyarme. ¡Cada contribución me ayuda a seguir creando y explorando nuevos universos!
            </p>
            
            <div className="space-y-4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <p className="text-sm text-cyan-400 font-semibold mb-2">CVU</p>
                    <div className="flex items-center justify-between bg-slate-900/70 p-2 rounded-md">
                        <span className="font-mono text-sm tracking-tighter text-gray-200">{cvu}</span>
                        <button 
                            onClick={handleCopy} 
                            className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold py-1 px-3 rounded-md transition-all duration-200 hover:shadow-[0_0_10px_rgba(192,132,252,0.6)]"
                            aria-label="Copiar CVU"
                        >
                            {copied ? '¡Copiado!' : 'Copiar'}
                        </button>
                    </div>
                </div>

                <a
                    href="https://link.mercadopago.com.ar/bravoxv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                >
                    Donar con Mercado Pago
                </a>
            </div>
        </div>
    );
};

export default DonateModalContent;