"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center h-60 w-full"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <Loader2 className="w-8 h-8 text-pink-600 animate-spin" />
      </motion.div>
    </motion.div>
  );
}
