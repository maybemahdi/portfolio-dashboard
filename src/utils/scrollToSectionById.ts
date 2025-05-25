'use client';

import { useRouter } from 'next/navigation';

// for single page navigation
// use:
// const handleScrollToSubscription = () => {
//   scrollToSection("sales-benefits");
// };

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

// for different page navigation
// use:
//  const ScrollToSectionOnPage = useScrollToSectionOnPage();
//   const handleScrollToSubscription = () => {
//     ScrollToSectionOnPage("/", "sales-benefits");
//   };

export const useScrollToSectionOnPage = () => {
  const router = useRouter();

  const scrollToSectionOnPage = (path: string, sectionId: string) => {
    // Navigate to the desired path with query parameter
    router.push(`${path}?sectionId=${sectionId}`);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  return scrollToSectionOnPage;
};
