"use client";
import { Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Variants, motion } from "framer-motion";
import { toast } from "sonner";
import Lottie from "lottie-react";
import animationData from "../../../public/assets/contact.json";

const formAnimate = {
  hidden: {
    boxShadow: "0px 0px 20px rgba(192, 132, 252, 1)",
  },
  animate: {
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    transition: {
      ease: "easeInOut",
      duration: 0.7,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loadingToastId = toast.loading("Message sending...", {
      position: "top-center",
    });

    const response = await fetch("https://formspree.io/f/xldrekyy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    toast.dismiss(loadingToastId);

    if (response.ok) {
      toast.success("Message sent successfully!", {
        duration: 2000,
        position: "top-center",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message!", {
        position: "top-center",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="relative">
      <h1 className="bg-gradient-to-br from-purple-400 to-purple-100 bg-clip-text text-center text-2xl font-bold tracking-widest uppercase text-transparent md:text-3xl lg:text-4xl mb-4">
        Contact
      </h1>
      <h1 className="bg-gradient-to-br from-purple-400 to-purple-100 bg-clip-text text-center text-xl font-medium text-transparent md:text-2xl lg:text-3xl mb-4 md:mb-20">
        Ready to Collaborate Worldwide!
      </h1>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6">
        <motion.form
          id="contact"
          variants={formAnimate as Variants}
          initial="hidden"
          animate="animate"
          onSubmit={handleSubmit}
          className="w-full  p-4 border border-purple-400 rounded-lg z-10">
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-purple-200"
              htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-purple-100 border border-purple-300 rounded"
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-purple-200 font-bold mb-2"
              htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-purple-100 border-purple-300 border rounded"
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-purple-200 font-bold mb-2"
              htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-purple-100 border border-purple-300 rounded"
              disabled={isSubmitting}></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              disabled={isSubmitting}>
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <div className="flex items-center justify-between gap-1">
                  <Mail size={16} />
                  <span>Send Message</span>
                </div>
              </span>
            </button>
          </div>
        </motion.form>

        <div className="w-full flex justify-center">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full h-full max-w-sm max-h-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
