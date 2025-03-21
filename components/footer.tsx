import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">JustWatch Free</h3>
            <p className="text-muted-foreground">
              Discover and watch the Movies | Tv Show | Adult Content from around the world for free.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="../category/movie" className="text-muted-foreground hover:text-foreground transition-colors">
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  href="/category/tvshow"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tv Show
                </Link>
              </li>
              <li>
                <Link
                  href="/category/adult"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Adult
                </Link>
              </li>
              <li>
                <Link
                  href="/category/Hindi-Dubbed"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hindi Dubbed
                </Link>
              </li>
             </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              {/* <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li> */}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Subscribe</h3>
            <p className="text-muted-foreground">Get notified about new Movies | Tv Show | Adult Content and updates.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="max-w-[220px]" required />
              <Button type="submit">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} JustWatch Free. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

