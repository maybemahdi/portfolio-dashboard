// export const menuItems = [
//   // { title: 'Home', path: '/' },
//   { title: 'Package', path: '/package' },
//   { title: 'Service', path: '/service' },
//   { title: 'About Us', path: '/about' },
//   { title: 'Contact', path: '/contact' },
// ];

export type NavItemWithLink = {
  title: string;
  path: string;
  type: 'link';
};

export type NavItemWithChildren = {
  title: string;
  type: 'dropdown';
  children: NavItem[];
};

export type NavItem = NavItemWithLink | NavItemWithChildren;

export const menuItems: NavItem[] = [
  {
    title: 'Package',
    type: 'dropdown',
    children: [
      { title: 'GPU Hosting', path: '/pricing/gpu-hosting', type: 'link' },
      { title: 'VPS Hosting', path: '/pricing/vps-hosting', type: 'link' },
      {
        title: 'Dedicated Server',
        path: '/pricing/dedicated-hosting',
        type: 'link',
      },
    ],
  },
  { title: 'Resources', path: '/resources', type: 'link' },
  { title: 'Blogs', path: '/blogs', type: 'link' },
  // { title: 'About Us', path: '/about', type: 'link' },
  { title: 'Contact', path: '/contact', type: 'link' },
];
