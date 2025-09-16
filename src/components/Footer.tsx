import { Heart, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-smoke text-smoke-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">TB</span>
              </div>
              <span className="text-xl font-bold text-smoke-foreground">Thin Blue BBQ</span>
            </div>
            <p className="text-smoke-foreground/80 leading-relaxed">
              Championship-level BBQ catering and competition team serving Michigan 
              with passion, quality, and warm hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-smoke-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Our Team", href: "#team" },
                { name: "Competitions", href: "#competitions" },
                { name: "Instagram", href: "#instagram" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-smoke-foreground/70 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-smoke-foreground">Our Services</h4>
            <ul className="space-y-2 text-smoke-foreground/70">
              <li>Wedding Catering</li>
              <li>Corporate Events</li>
              <li>Private Parties</li>
              <li>Competition BBQ</li>
              <li>BBQ Consultation</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-smoke-foreground">Follow Us</h4>
            <p className="text-smoke-foreground/70 mb-4">
              Stay connected with our latest BBQ adventures and competitions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/@gregsawmillerthinbluebbq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full transition-smooth hover:scale-110"
                aria-label="Follow us on YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/thin_blue_bbq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full transition-smooth hover:scale-110"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/thinbluebbqmotorcity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full transition-smooth hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.808 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.808-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243s.122-.928.49-1.243c.368-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243s-.122.928-.49 1.243c-.368.315-.807.49-1.297.49z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-smoke-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-smoke-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 Thin Blue BBQ. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-1 text-smoke-foreground/60 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-secondary fill-current" />
              <span>for BBQ lovers everywhere</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;