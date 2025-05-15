"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import productAnimationData from "@/public/lottie/prodcut_lottie.json";
import servicesAnimationData from "@/public/lottie/Services_lottie.json";
import courseAnimationData from "@/public/lottie/VMelPmtOTu.json";
import gmailAnimationData from "@/public/lottie/gmail-animation.json";
import contactanimation from "@/public/lottie/contact_animation.json";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Reusable Lottie Animation Component
const LottieAnimation = ({ animationData }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents SSR issues

  return (
    <div>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

// Export individual animations using the reusable component
export const CourseLottieAnimation = () => (
  <LottieAnimation animationData={courseAnimationData} />
);

export const ProductLottieAnimation = () => (
  <LottieAnimation animationData={productAnimationData} />
);

export const ServicesLottieAnimation = () => (
  <LottieAnimation animationData={servicesAnimationData} />
);


export const GmailLottieAnimation = () => (
  <LottieAnimation animationData={gmailAnimationData} />
);


export const ContactAnimation = () => (
  <LottieAnimation animationData={contactanimation} />
);
