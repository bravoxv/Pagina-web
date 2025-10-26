import React, { ReactNode, useEffect, useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    const [isRendering, setIsRendering] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsRendering(true);
        } else {
            // Wait for animation to finish before unmounting
            const timer = setTimeout(() => setIsRendering(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isRendering) return null;

    return (
        <div 
            className={`fixed inset-0 flex justify-center items-center z-50 p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={onClose}
        >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div
                className={`relative bg-slate-900/80 rounded-lg shadow-2xl w-full max-w-md transition-all duration-300 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Neon Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur opacity-60 animate-pulse-slow"></div>
                
                <div className="relative z-10 p-6 bg-slate-900 rounded-lg">
                    <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-3">
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">{title}</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl leading-none transition-transform duration-200 hover:rotate-90">
                            &times;
                        </button>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
             <style>{`
                 @keyframes pulse-slow {
                    0%, 100% { opacity: 0.6; }
                    50% { opacity: 0.8; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Modal;