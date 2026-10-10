import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Roles } from "@/components/sections/roles"
import { Stats } from "@/components/sections/stats"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Prizes } from "@/components/sections/prizes"
import { Timeline } from "@/components/sections/timeline"
import { Sponsors } from "@/components/sections/sponsors"

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col relative overflow-hidden bg-background">
      <Hero />
      <Stats />
      
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        <Features />
      </div>

      <Roles />
      <HowItWorks />
      <Prizes />
      <Timeline />
      <Sponsors />
    </main>
  );
}
