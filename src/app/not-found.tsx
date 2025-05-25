"use client";
import pageNotFound from "@/assets/lottieFiles/pageNotFound.json";
import Lottie from "lottie-react";

const NotFoundPage = () => {
  return (
    <div className="h-screen">
      <Lottie
        className="h-[calc(100vh-200px)] pt-5"
        animationData={pageNotFound}
        loop={true}
      />
      <h3 className="text-center text-8xl font-semibold">Page Not Found</h3>
    </div>
  );
};

export default NotFoundPage;
