"use client"

import { motion, type Variants } from "motion/react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { Hero } from "@/components/sections/hero"
import { Timeline } from "@/components/sections/timeline"
import { GitPullRequest, Users, Award } from "lucide-react"

export default function HomePage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  }

  return (
    <main className="flex-1 flex flex-col relative overflow-hidden bg-background">
      <Hero />
      
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        
        {/* About / Features Section */}
        <section id="about">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading subheading="Program Details">
              Why Join NSoC?
            </SectionHeading>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div variants={cardVariants}>
              <Card className="h-full hover:-translate-y-1 transition-transform duration-300">
                <CardHeader className="pb-4">
                  <div className="mb-2 h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary glow-border">
                    <GitPullRequest className="h-5 w-5" />
                  </div>
                  <CardTitle>Hands-on Learning</CardTitle>
                  <CardDescription>Master open-source workflows.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Bridge the gap between theory and practical implementation. Learn to use Git/GitHub, communicate with maintainers, read project documentation, and manage pull requests.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="h-full hover:-translate-y-1 transition-transform duration-300">
                <CardHeader className="pb-4">
                  <div className="mb-2 h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary glow-border">
                    <Users className="h-5 w-5" />
                  </div>
                  <CardTitle>Flexible Roles</CardTitle>
                  <CardDescription>Contribute or Mentor.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Join as a <strong>Contributor</strong> to work on issues and code, or apply as <strong>Project Kernel</strong> (mentors and administrators) to manage projects and review contributions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="h-full hover:-translate-y-1 transition-transform duration-300">
                <CardHeader className="pb-4">
                  <div className="mb-2 h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary glow-border">
                    <Award className="h-5 w-5" />
                  </div>
                  <CardTitle>Real Outcomes</CardTitle>
                  <CardDescription>Recognition and growth.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Build a stronger GitHub profile and gain valuable networking opportunities. Top participants receive recognition such as certificates and letters of recommendation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* Timeline Section */}
        <Timeline />

      </div>
    </main>
  );
}
