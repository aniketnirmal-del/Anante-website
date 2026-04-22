import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* CTA Banner */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4 text-balance">
            Ready to taste authentic home food?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Order now and experience the warmth of home-cooked meals delivered
            to your doorstep.
          </p>
          <a
            href="https://wa.me/919511961444?text=Hi!%20I%27d%20like%20to%20order%20from%20Anant%C3%A9%20Foods."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-full font-semibold hover:bg-background/90 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <span className="text-3xl font-serif font-bold text-primary">
                  ananté
                </span>
              </Link>
              <p className="text-background/70 mb-6 max-w-md">
                Fresh, traditional Indian meals prepared with love and delivered
                across Pune. Experience the warmth of home-cooked food, made
                with authentic recipes.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/919511961444?text=Hi!%20I%27d%20like%20to%20order%20from%20Anant%C3%A9%20Foods."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#menu"
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="leading-7 tracking-tight">
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919511961444" className="flex items-center gap-2 group/phone">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0 group-hover/phone:text-accent transition-colors" />
                      <p className="text-background/70 group-hover/phone:text-primary transition-colors">+91 9511961444</p>
                    </a>
                    <a href="tel:+917350777177" className="flex items-center gap-2 group/phone">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0 group-hover/phone:text-accent transition-colors" />
                      <p className="text-background/70 group-hover/phone:text-primary transition-colors">+91 7350777177</p>
                    </a>
                    <a href="tel:+919011065037" className="flex items-center gap-2 group/phone">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0 group-hover/phone:text-accent transition-colors" />
                      <p className="text-background/70 group-hover/phone:text-primary transition-colors">+91 9011065037</p>
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <a href="mailto:hello@anantefoods.com" className="flex items-center gap-3 group/mail">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 group-hover/mail:text-accent transition-colors" />
                    <p className="text-background/70 group-hover/mail:text-primary transition-colors">{"hello@anantefoods.com"}</p>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-background/70">
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>© 2026 ananté. All rights reserved.</p>
          <p>Made with love in Pune</p>
        </div>
      </div>
    </footer>
  );
}
