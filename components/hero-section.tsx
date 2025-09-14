import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 px-4 text-center mx-auto">
      <div className="container max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            Transform Your <span className="text-primary">Git Commits</span>{" "}
            Into a Professional Resume
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Showcase your coding journey with an automatically generated resume
            based on your Git commit history. Perfect for developers who want
            their work to speak for itself.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="text-lg px-8">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          <div className="pt-8">
            <div className="bg-card rounded-lg p-6 max-w-2xl mx-auto border">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-left font-mono text-sm space-y-2">
                <div className="text-muted-foreground">$ git log --oneline</div>
                <div className="text-primary">
                  a1b2c3d feat: implement user authentication
                </div>
                <div className="text-primary">
                  e4f5g6h fix: resolve database connection issue
                </div>
                <div className="text-primary">
                  i7j8k9l docs: update API documentation
                </div>
                <div className="text-muted-foreground">...</div>
                <div className="pt-2 text-accent">
                  ✨ Generating professional resume...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
