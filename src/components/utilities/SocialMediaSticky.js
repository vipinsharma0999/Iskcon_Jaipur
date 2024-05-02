"use client"
import { motion } from "framer-motion";

const SocialMediaSticky = () => {
  return (
    <div className="fixed p-2 z-50 top-[50vh]">
      <motion.div
      className="flex flex-col gap-2"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <img src="/Home/Hero/social_media_icons/instagram.svg" />
      <img src="/Home/Hero/social_media_icons/facebook.svg" />
      <img src="/Home/Hero/social_media_icons/youtube.svg" />
      <img src="/Home/Hero/social_media_icons/whatsapp.svg" />
    </motion.div>
    </div>
  );
};

export default SocialMediaSticky;
