import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const MotionDiv = motion.div;
const MotionA = motion.a;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "reddynandan120@gmail.com",
    href: "mailto:reddynandan120@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9xxxxxx210",
    href: "tel:+919xxxxxx210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "https://www.google.com/maps/place/India",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        formData,
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 bg-linear-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-6 max-w-6xl">

        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm uppercase tracking-widest text-primary font-medium" >
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let’s work together.
          </h2>

          <p className="text-muted-foreground mt-6 text-lg">
            Have an idea or opportunity? I’d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl border border-border bg-background shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  {submitStatus.message}
                </div>
              )}
            </form>
          </MotionDiv>

          <div className="space-y-8">
            {contactInfo.map((item, i) => (
              <MotionA
                key={i}
                href={item.href}
                whileHover={{ x: 6 }}
                className="flex items-center gap-6 p-6 rounded-2xl border border-border bg-background hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="font-medium">{item.value}</div>
                </div>
              </MotionA>
            ))}

            <div className="p-8 rounded-2xl border border-primary/30 bg-primary/5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Open to Opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently available for full-time roles and freelance projects.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
