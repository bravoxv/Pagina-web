import React from 'react';

const BackgroundEffects: React.FC = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-black z-0">
            {/* Pulsating Nebula Gradient - Now monochromatic */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-gray-900/50 via-black/20 to-black animate-pulse-slow"></div>
            
            {/* Star Layers for Parallax Effect */}
            <div className="stars-bg small"></div>
            <div className="stars-bg medium"></div>
            <div className="stars-bg large"></div>
            
            {/* Shooting Star */}
            <div className="shooting-star"></div>

            <style>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 1; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 15s ease-in-out infinite;
                }

                @keyframes move-stars {
                    from { transform: translateY(0px); }
                    to { transform: translateY(-2000px); }
                }

                .stars-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 200%;
                    background-repeat: repeat;
                    background-position: 0 0;
                    animation: move-stars linear infinite;
                }

                /* Faster animation durations for more prominent effect */
                .small {
                    background-image: radial-gradient(1px 1px at 25px 25px, white, transparent),
                                      radial-gradient(1px 1px at 75px 100px, white, transparent),
                                      radial-gradient(1px 1px at 150px 50px, white, transparent),
                                      radial-gradient(1px 1px at 200px 180px, white, transparent);
                    background-size: 200px 200px;
                    animation-duration: 80s;
                    opacity: 0.8;
                }

                .medium {
                    background-image: radial-gradient(1.5px 1.5px at 50px 100px, white, transparent),
                                      radial-gradient(1.5px 1.5px at 125px 175px, white, transparent),
                                      radial-gradient(1.5px 1.5px at 200px 25px, white, transparent);
                    background-size: 250px 250px;
                    animation-duration: 60s;
                    opacity: 0.6;
                }

                .large {
                    background-image: radial-gradient(2px 2px at 100px 150px, white, transparent),
                                      radial-gradient(2px 2px at 300px 50px, white, transparent);
                    background-size: 400px 400px;
                    animation-duration: 40s;
                    opacity: 0.4;
                }
                
                @keyframes shooting {
                    0% {
                        transform: translate(100vw, -100px) rotate(-45deg);
                        opacity: 1;
                        height: 2px;
                        width: 100px;
                    }
                    8% {
                        opacity: 0;
                    }
                    100% {
                         transform: translate(-50vw, 100vh) rotate(-45deg);
                         opacity: 0;
                         height: 2px;
                         width: 100px;
                    }
                }
                
                .shooting-star {
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: linear-gradient(to left, rgba(255, 255, 255, 0.7), transparent);
                    border-radius: 9999px;
                    animation: shooting 15s ease-in-out infinite;
                    animation-delay: 5s; 
                }
            `}</style>
        </div>
    );
};

export default BackgroundEffects;
