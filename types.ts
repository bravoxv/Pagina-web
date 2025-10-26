export interface SocialLinkType {
    platform: string;
    href: string;
    icon?: string;
    svgIcon?: string;
    color: string;
}

export interface CommentType {
  id: number;
  name: string;
  text: string;
  timestamp: string;
}
