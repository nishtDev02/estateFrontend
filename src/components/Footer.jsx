import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111827] text-[#9CA3AF] pt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-gray-700">
          
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              EstateHub
            </h3>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#F9FAFB] font-semibold mb-2">Company</h4>
            {["About us", "How it works", "Blog", "Contact", "Resources"].map(
              (item) => (
                <span
                  key={item}
                  className="hover:text-emerald-400 cursor-pointer transition"
                >
                  {item}
                </span>
              )
            )}
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#F9FAFB] font-semibold mb-2">Support</h4>
            {["FAQ", "Documentation", "Community", "Guides", "Legal"].map(
              (item) => (
                <span
                  key={item}
                  className="hover:text-emerald-400 cursor-pointer transition"
                >
                  {item}
                </span>
              )
            )}
          </div>

          {/* Privacy */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#F9FAFB] font-semibold mb-2">
              Privacy policy
            </h4>
            {["Terms", "Cookies", "Compliance", "Security", "Updates"].map(
              (item) => (
                <span
                  key={item}
                  className="hover:text-emerald-400 cursor-pointer transition"
                >
                  {item}
                </span>
              )
            )}
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#F9FAFB] font-semibold">News</h4>
            <p className="text-sm">
              Get the latest insights and updates delivered straight to
              your inbox each week.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border border-gray-600 px-3 py-2 text-sm w-full rounded-md focus:outline-none focus:border-emerald-400"
              />
              <button className="bg-emerald-500 text-black px-4 py-2 rounded-md font-medium hover:bg-emerald-600 transition">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-500">
              By subscribing you agree to our Privacy Policy and consent
              to receive updates.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4 text-sm">
          <p>
            © 2024 Real-Estate Growth System. All rights reserved.
          </p>

          <div className="flex gap-4">
            <span className="hover:text-emerald-400 cursor-pointer">
              Privacy policy
            </span>
            <span className="hover:text-emerald-400 cursor-pointer">
              Terms of service
            </span>
            <span className="hover:text-emerald-400 cursor-pointer">
              Cookies settings
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-[#F9FAFB]">
            <Facebook size={18} className="hover:text-emerald-400 cursor-pointer" />
            <Instagram size={18} className="hover:text-emerald-400 cursor-pointer" />
            <Twitter size={18} className="hover:text-emerald-400 cursor-pointer" />
            <Linkedin size={18} className="hover:text-emerald-400 cursor-pointer" />
            <Youtube size={18} className="hover:text-emerald-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
