import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, MessageCircle, Heart, Users } from "lucide-react"

export function CommunitySection() {
  return (
    <section id="community" className="py-20 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            GitResume is built by developers, for developers. Join us in making resume generation better for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-0 shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">2.5k+</CardTitle>
              <CardDescription>Active Users</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center border-0 shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">150+</CardTitle>
              <CardDescription>Contributors</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center border-0 shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">5.2k</CardTitle>
              <CardDescription>GitHub Stars</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center border-0 shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">24/7</CardTitle>
              <CardDescription>Community Support</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Github className="h-5 w-5" />
                <span>Contribute</span>
              </CardTitle>
              <CardDescription>
                Help us improve GitResume by contributing code, reporting bugs, or suggesting features.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">View Contributing Guide</Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Get Support</span>
              </CardTitle>
              <CardDescription>
                Join our Discord community for help, discussions, and to connect with other developers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent">
                Join Discord
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
