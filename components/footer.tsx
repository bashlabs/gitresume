import { GitBranch, Github, Twitter, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GitBranch className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">GitResume</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transform your Git commits into professional resumes. Open source and developer-friendly.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername/gitresume" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/gitresume" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://discord.gg/gitresume" className="text-muted-foreground hover:text-primary">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/templates" className="text-muted-foreground hover:text-primary">
                  Templates
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-muted-foreground hover:text-primary">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Developers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/docs" className="text-muted-foreground hover:text-primary">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/api" className="text-muted-foreground hover:text-primary">
                  API Reference
                </a>
              </li>
              <li>
                <a href="/contributing" className="text-muted-foreground hover:text-primary">
                  Contributing
                </a>
              </li>
              <li>
                <a href="/changelog" className="text-muted-foreground hover:text-primary">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/yourusername/gitresume"
                  className="text-muted-foreground hover:text-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.gg/gitresume" className="text-muted-foreground hover:text-primary">
                  Discord
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="/support" className="text-muted-foreground hover:text-primary">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 GitResume. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  )
}
