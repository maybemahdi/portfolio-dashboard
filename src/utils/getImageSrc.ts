import { StaticImport } from "next/dist/shared/lib/get-img-props";

 export const getImageSrc = (src: string | StaticImport): string => {
    if (typeof src === 'string') {
      return src;
    }
    // StaticImport may have a 'default' property that contains the string URL
    // or it may be an object with a 'src' property (for older Next.js versions)
    if (typeof (src as any).default === 'string') {
      return (src as any).default;
    }
    if (typeof (src as any).src === 'string') {
      return (src as any).src;
    }
    return '';
  };