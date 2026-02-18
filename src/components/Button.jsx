import { Loader2 } from "lucide-react"
import { motion } from "framer-motion";

const MotionButton = motion.button;

export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  loading = false,
  children,
  disabled,
  ...props
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5",
    secondary:
      "bg-muted text-foreground hover:bg-muted/80",
    ghost:
      "bg-transparent border border-border hover:border-primary hover:text-primary",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <MotionButton
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300 }}
      disabled={disabled || loading}
      className={classes}
      {...props}
    >
      <span className="absolute inset-0 rounded-full bg-linear-to-r from-white/0 via-white/10 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-500" />

      <span className="relative z-10 flex items-center gap-2">
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </span>
    </MotionButton>
  );
};
