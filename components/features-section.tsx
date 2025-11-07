import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CogIcon,
  GitBranch,
  Zap,
  Users,
  Download,
  Palette,
  Shield,
  Brain,
  LayoutDashboard,
} from "lucide-react";

const features = [
  {
    icon: CogIcon,
    title: "Resume Builder",
    description:
      "Build a professional resume effortlessly, seed your Git histories for instant insights or create one manually to highlight your experience your way.",
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description:
      "Gitresume seamlessly connects with your local Git projects, analyzing commit history to extract meaningful insights and project details.",
  },
  {
    icon: Brain,
    title: "AI Support",
    description:
      "Generate personalized insights from your commits with a custom prompt that highlights your work. Gitresume currently supports Llama, Gemini and OpenAI integrations.",
  },
  {
    icon: LayoutDashboard,
    title: "Personalized Dashboard",
    description:
      "Manage your seeded commits, projects, prompts, and resumes in one place. Refine your content and track your progress effortlessly.",
  },
  {
    icon: Download,
    title: "Multiple Formats",
    description:
      "Export your resume as PDF, HTML, or Markdown. Perfect for different application requirements.",
  },
  {
    icon: Users,
    title: "Open Source",
    description:
      "Fully open source and community-driven. Contribute features, templates, and improvements.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data stays private. Gitresume processes everything locally.",
  },
  {
    icon: Zap,
    title: "Save Time",
    description:
      "Generate a professional resume in seconds.Nearly 70% of your resume is already done, just add your final touches.",
  },
  {
    icon: Palette,
    title: "Customizable Templates",
    description: "We currently offer one template, with more on the way", //Choose from multiple professional templates and customize the layout to match your personal brand.
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Gitresume?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built by developers, for developers. Every feature is designed to
            showcase your coding expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
