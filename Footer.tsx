import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "API Reference",
    "Status",
  ],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="sm:col-span-3 lg:col-span-2 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/sea.jpg"
                alt="CodeFlow Logo"
                className="w-6 h-6 sm:w-8 sm:h-8 border rounded-full"
              />
              <span className="text-white text-lg font-semibold">
                GrowMore
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-xs text-center sm:text-left">
              AI powered development platform helping teams ship better
              software faster.
            </p>
            <div className="flex gap-4 mt-4 text-slate-400">
              <Github size={18} className="cursor-pointer hover:text-white" />
              <Twitter size={18} className="cursor-pointer hover:text-white" />
              <Linkedin size={18} className="cursor-pointer hover:text-white" />
              <Mail size={18} className="cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>

              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 text-sm hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} CodeFlow. All rights reserved.
        </div>

      </div>
    </footer>
  );
}