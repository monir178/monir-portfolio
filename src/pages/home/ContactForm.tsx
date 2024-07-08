// components/ContactForm.js
"use client";
import { GlobeDemo } from "@/components/ContactGlobe";
import { Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Variants, motion } from "framer-motion";
import { toast } from "sonner";

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
    const response = await fetch("https://formspree.io/f/xldrekyy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Message sent successfully!", {
        duration: 2000,
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-6"
      id="contact">
      <motion.form
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
            className="w-full px-3 py-2 bg-purple-100 border border-purple-300   rounded"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-purple-200 font-bold mb-2 "
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
            className="w-full px-3 py-2 bg-purple-100  border-purple-300 border rounded"
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
            className="w-full px-3 py-2 bg-purple-100 border border-purple-300  rounded"></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
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

      <GlobeDemo />
    </div>
  );
};

export default ContactForm;
