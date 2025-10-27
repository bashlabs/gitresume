import { Button } from "@/components/ui/button";
import { Edit, Edit2Icon, GitBranch, Github, Star } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <GitBranch className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">GitResume</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            How It Works
          </a>
          {/*<a
            href="#setup"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Get Started
          </a>
          <a
            href="https://github.com/yourusername/gitresume"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Documentation
          </a> */}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex items-center space-x-2 bg-transparent"
          >
            <a href="#" className="flex items-center space-x-2">
              <Edit className="h-4 w-4" />
              <span>Give feedback</span>
            </a>
          </Button>
          {/* <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex items-center space-x-2 bg-transparent"
          >
            <Star className="h-4 w-4" />
            <span>Star</span>
          </Button> */}
          <Button>
            <a
              href="https://github.com/iamhabbeboy/gitresume-cli"
              className="flex items-center space-x-2"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
