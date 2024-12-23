"use client";
import { Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Earth from "@/components/ui/globe";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loadingToastId = toast.loading("Message sending...");

    try {
      const response = await fetch("https://formspree.io/f/xldrekyy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", phone: "" });
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Failed to send message!");
    } finally {
      toast.dismiss(loadingToastId);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full min-h-[90vh] px-4 py-12">
      {/* Background Globe for mobile/tablet */}
      <div className="absolute inset-0 lg:hidden">
        <Earth
          className="w-full h-full opacity-20"
          baseColor={[0.7, 0.3, 0.9]}
          glowColor={[0.6, 0.2, 0.8]}
          mapBrightness={6}
          scale={2}
          dark={1}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl anton-text tracking-wider font-medium bg-clip-text text-transparent bg-gradient-to-t from-purple-300 to-violet-600 md:text-6xl text-center mb-8">
          Get in Touch
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 space-y-6 bg-purple-950/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
            {["name", "email", "phone"].map((field) => (
              <div key={field}>
                <label className="block text-purple-200 text-sm font-medium mb-2 capitalize">
                  {field}
                </label>
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : "text"
                  }
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-purple-900/40 border border-purple-500/30 rounded-lg 
                           text-purple-100 placeholder-purple-300/50 focus:outline-none focus:ring-2 
                           focus:ring-purple-500/50 transition-all duration-300"
                  placeholder={`Enter your ${field}`}
                  disabled={isSubmitting}
                />
              </div>
            ))}

            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-purple-900/40 border border-purple-500/30 rounded-lg 
                         text-purple-100 placeholder-purple-300/50 focus:outline-none focus:ring-2 
                         focus:ring-purple-500/50 transition-all duration-300 resize-none"
                placeholder="Your message..."
                disabled={isSubmitting}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg
                       text-white font-medium flex items-center justify-center gap-2 
                       hover:opacity-90 transition-all duration-300 disabled:opacity-50">
              <Mail size={18} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Desktop Globe */}
          <div className="hidden lg:flex w-1/2 items-center justify-center">
            <Earth
              className="w-[500px] h-[500px]"
              baseColor={[0.7, 0.3, 0.9]}
              glowColor={[0.6, 0.2, 0.8]}
              mapBrightness={6}
              scale={1.1}
              diffuse={1.2}
              dark={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
