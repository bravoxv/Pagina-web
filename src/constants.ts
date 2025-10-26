import type { SocialLinkType } from './types';

export const socialLinks: SocialLinkType[] = [
    {
        platform: 'YouTube',
        href: 'https://www.youtube.com/@Bravo-XV',
        icon: 'fab fa-youtube',
        color: 'border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.7)] hover:border-red-400'
    },
    {
        platform: 'Instagram',
        href: 'https://www.instagram.com/bravoxv2025/',
        icon: 'fab fa-instagram',
        color: 'border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.7)] hover:border-pink-400'
    },
    {
        platform: 'Discord',
        href: 'https://discord.com/invite/NDJxRGQAaF',
        icon: 'fab fa-discord',
        color: 'border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.7)] hover:border-indigo-400'
    },
    {
        platform: 'Twitch',
        href: 'https://www.twitch.tv/bravoxv_',
        icon: 'fab fa-twitch',
        color: 'border-purple-600/50 hover:shadow-[0_0_15px_rgba(147,51,234,0.7)] hover:border-purple-500'
    },
    {
        platform: 'TikTok',
        href: 'https://www.tiktok.com/@elbravoxv',
        icon: 'fab fa-tiktok',
        color: 'border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.7)] hover:border-cyan-300'
    },
    {
        platform: 'Kick',
        href: 'https://kick.com/bravoxv',
        svgIcon: '<svg width="30" height="30" viewBox="0 0 5 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges;"><path d="M0 0 h2 v7 h-2 z M3 0 h2 v2 h-2 z M2 2 h2 v1 h-2 z M2 3 h1 v1 h-1 z M3 4 h2 v3 h-2 z"/></svg>',
        color: 'border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.7)] hover:border-green-400'
    }
];