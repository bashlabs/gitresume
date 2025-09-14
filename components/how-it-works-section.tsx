import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, GitBranch, FileText, Download } from "lucide-react"

const steps = [
  {
    icon: GitBranch,
    title: "Connect Repository",
    description: "Link your GitHub, GitLab, or local Git repository to analyze your commit history.",
  },
  {
    icon: FileText,
    title: "AI Analysis",
    description: "Our AI analyzes your commits, identifies projects, technologies, and contributions.",
  },
  {
    icon: Download,
    title: "Generate Resume",
    description: "Get a professional resume highlighting your development experience and skills.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your Git history into a compelling resume.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center border-0 shadow-sm">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-lg p-8 max-w-3xl mx-auto border">
            <h3 className="text-2xl font-semibold mb-4">See It In Action</h3>
            <div className="bg-muted rounded-lg p-6 font-mono text-sm text-left">
              <div className="text-muted-foreground mb-2"># Sample output from your commits:</div>
              <div className="space-y-1">
                <div>
                  <span className="text-accent">Projects:</span> E-commerce Platform, Task Manager, API Gateway
                </div>
                <div>
                  <span className="text-accent">Technologies:</span> React, Node.js, Python, PostgreSQL, Docker
                </div>
                <div>
                  <span className="text-accent">Contributions:</span> 847 commits, 15 repositories, 2 years active
                </div>
                <div>
                  <span className="text-accent">Key Skills:</span> Full-stack development, Database design, DevOps
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
