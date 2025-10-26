import React, { useState } from 'react';
import { socialLinks } from './constants';
import SocialLink from './components/SocialLink';
import Modal from './components/Modal';
import BackgroundEffects from './components/BackgroundEffects';
import DonateModalContent from './components/DonateModalContent';
import GiscusComments from './components/GiscusComments'; // Cambiado
import { profileImage } from './profileImageData';

const App: React.FC = () => {
    const [isDonateModalOpen, setDonateModalOpen] = useState(false);
    const [isCommentModalOpen, setCommentModalOpen] = useState(false);
    
    return (
        <div className="relative min-h-screen w-full font-sans text-white overflow-hidden flex items-center justify-center p-4">
            <BackgroundEffects />
            
            <div className="absolute top-5 left-5 z-20">
                 <button 
                    onClick={() => setCommentModalOpen(true)}
                    className="px-5 py-2.5 font-medium bg-sky-500/10 border border-sky-400/30 text-sky-300 rounded-lg text-sm backdrop-blur-sm hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300"
                >
                    Comentar
                </button>
            </div>
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
                        className="w-56 h-auto absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                    <div className="absolute w-full h-full">
                        {socialLinks.map((link, index) => {
                            const angle = (index / socialLinks.length) * 360;
                            const radius = 200; // Increased radius to accommodate larger icons
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

                <p className="mt-8 text-gray-400 text-sm">
                    ¡Gracias por tu visita estelar!
                </p>
            </main>

            <Modal isOpen={isCommentModalOpen} onClose={() => setCommentModalOpen(false)} title="Muro de Comentarios Cósmicos">
                 <GiscusComments />
            </Modal>

            <Modal isOpen={isDonateModalOpen} onClose={() => setDonateModalOpen(false)} title="Apoya la Misión">
                <DonateModalContent />
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