import { motion } from "framer-motion";

const MotionButton = motion.button;
const MotionRect = motion.rect;

export const AnimatedBorderButton = ({
  children,
  href,
  download,
  className = "",
  ...props
}) => {
  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      href={href}
      download={download}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative inline-flex items-center justify-center 
      px-8 py-4 text-lg font-medium rounded-full
      bg-transparent text-foreground
      border border-border
      overflow-hidden group
      focus:outline-none focus-visible:ring-2
      focus-visible:ring-primary focus-visible:ring-offset-2
      transition-colors duration-300
      ${className}`}
      {...props}
    >
      
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <MotionRect
          x="1"
          y="1"
          width="98"
          height="38"
          rx="20"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="300"
          strokeDashoffset="300"
          className="text-primary"
          initial={{ strokeDashoffset: 300 }}
          whileHover={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </svg>


      <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
};
