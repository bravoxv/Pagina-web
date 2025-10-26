import React from 'react';

interface SocialLinkProps {
    href: string;
    icon?: string;
    svgIcon?: string;
    platform: string;
    colorClass: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, svgIcon, platform, colorClass }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={platform}
            className={`w-12 h-12 flex items-center justify-center bg-black/30 backdrop-blur-sm border rounded-full transition-all duration-300 hover:bg-black/50 ${colorClass}`}
        >
            {icon && <i className={`${icon} text-xl text-gray-300 group-hover:text-white transition-colors`}></i>}
            {svgIcon && <span className="text-gray-300 group-hover:text-white transition-colors" dangerouslySetInnerHTML={{ __html: svgIcon }} />}
        </a>
    );
};

export default SocialLink;
