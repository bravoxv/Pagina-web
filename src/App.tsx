import React, { useState } from 'react';
import { socialLinks } from './constants';
import SocialLink from './components/SocialLink';
import Modal from './components/Modal';
import BackgroundEffects from './components/BackgroundEffects';
import DonateModalContent from './components/DonateModalContent';
import { profileImage } from './profileImageData';
import GiscusComments from './components/GiscusComments';

const App: React.FC = () => {
    const [isDonateModalOpen, setDonateModalOpen] = useState(false);
    const [isCommentModalOpen, setCommentModalOpen] = useState(false);
    
    return (
        <div className="relative min-h-screen w-full font-sans text-white overflow-hidden flex items-center justify-center p-4">
            <BackgroundEffects />
            
            <div className="absolute top-5 right-5 z-20">
                <button 
                    onClick={() => setDonateModalOpen(true)}
                    className="px-5 py-2.5 font-medium bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 rounded-lg text-sm backdrop-blur-sm hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300"
                >
                    Donar
                </button>
            </div>

            <main className="container relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto animate-fade-in-up">
                <div className="relative w-[450px] h-[450px] mb-6 flex items-center justify-center">
                    <img
                        src={profileImage}
                        alt="Logo de Bravo-XV"
                        className="w-56 h-56 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-500/50 shadow-[0_0_25px_rgba(34,211,238,0.4)] object-cover"
                    />
                    
                    {/* Superposición para ocultar el icono de la cámara */}
                    <div className="absolute z-20 w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full shadow-[0_0_12px_4px_rgba(34,211,238,0.5)] border border-cyan-500/30"></div>

                    <div className="absolute w-full h-full">
                        {socialLinks.map((link, index) => {
                            const angle = (index / socialLinks.length) * 360;
                            const radius = 200;
                            const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
                            const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
                            return (
                                <div
                                    key={link.platform}
                                    className="absolute top-1/2 left-1/2 w-20 h-20 -m-10"
                                    style={{
                                        transform: `translate(${x}px, ${y}px)`
                                    }}
                                >
                                    <SocialLink
                                        href={link.href}
                                        icon={link.icon}
                                        svgIcon={link.svgIcon}
                                        platform={link.platform}
                                        colorClass={link.color}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{textShadow: '0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(100,180,255,0.3)'}}>
                    Bienvenido a mi universo
                </h1>
                <p className="text-md md:text-lg text-gray-300 mb-8">
                    Conéctate a mis mundos sociales.
                </p>

                <button
                    onClick={() => setCommentModalOpen(true)}
                    className="px-5 py-2.5 font-medium bg-purple-500/10 border border-purple-400/30 text-purple-300 rounded-lg text-sm backdrop-blur-sm hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_15px_rgba(192,132,252,0.5)] transition-all duration-300"
                >
                    Comentar
                </button>

                <p className="mt-8 text-gray-400 text-sm">
                    ¡Gracias por tu visita estelar!
                </p>
            </main>

            <Modal isOpen={isDonateModalOpen} onClose={() => setDonateModalOpen(false)} title="Apoya la Misión">
                <DonateModalContent />
            </Modal>

            <Modal isOpen={isCommentModalOpen} onClose={() => setCommentModalOpen(false)} title="Comentarios Estelares">
                <GiscusComments />
            </Modal>

             <style>{`
                 @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default App;