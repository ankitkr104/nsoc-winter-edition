import {
  Code, Users, Rocket, Trophy, Target, HeartHandshake, ShieldCheck, 
  MapPin, Gift, BookOpen, Star, Crown, Medal, UserCheck
} from "lucide-react"

export const siteContent = {
  hero: {
    tagline: "A 45-day open source program where project maintainers bring real-world projects, and contributors work on solving actual issues, building features, and shipping production-ready code.",
    subTagline: "No toy projects. No filler tasks. Just meaningful work and a community that grows together.",
    highlight: "Open source, the way it was meant to be."
  },
  stats: {
    quote: "“No toy projects. No filler tasks. Just 45 days of work that lands in production — and a community that levels up together.”",
    items: [
      { label: "Day Sprint", value: "45" },
      { label: "Expected Participants", value: "10K+" },
      { label: "Expected Projects", value: "300+" },
    ]
  },
  features: [
    {
      id: "01",
      title: "Real projects.",
      description: "Project Kernels bring their actual codebases — not dummy repos or toy problems. Every issue you close ships to real users.",
      icon: Target
    },
    {
      id: "02",
      title: "Structured guidance.",
      description: "Admins mentor contributors through the review process. You don't just get a comment — you get context, feedback, and a reason.",
      icon: HeartHandshake
    },
    {
      id: "03",
      title: "Earned recognition.",
      description: "Points for every merged PR. A public leaderboard. A profile that shows exactly what you built and where it landed.",
      icon: Trophy
    },
    {
      id: "04",
      title: "A real community.",
      description: "45 days of builders, maintainers, and contributors working in the same direction. The connections outlast the program.",
      icon: Users
    }
  ],
  roles: [
    {
      title: "contributor",
      subtitle: "You write code.",
      points: [
        "Pick a track that matches your stack",
        "Browse curated open issues from real projects",
        "Submit PRs, get reviewed, earn points per merge",
        "Climb the leaderboard, claim prizes"
      ],
      icon: Code
    },
    {
      title: "project kernel",
      subtitle: "You bring the project.",
      points: [
        "Submit your open source project for the program",
        "Curate issues fit for contributors of all levels",
        "Review PRs and mentor contributors through your codebase",
        "Get meaningful contributions — and give someone their first real merge"
      ],
      icon: ShieldCheck
    },
    {
      title: "campus ambassador",
      subtitle: "You lead the campus.",
      points: [
        "Represent NSoC as the official face on your campus",
        "Onboard & mentor student peers into open source",
        "Drive registrations, build cohorts, host meetups",
        "Earn exclusive swags, leadership certificates & perks"
      ],
      icon: MapPin
    }
  ],
  howItWorks: [
    {
      step: "01",
      title: "Register",
      description: "Create your profile. Pick a track that matches your skills and ambition.",
      icon: UserCheck
    },
    {
      step: "02",
      title: "Explore",
      description: "Browse curated open issues across repos waiting for contributors.",
      icon: BookOpen
    },
    {
      step: "03",
      title: "Contribute",
      description: "Submit PRs. Get reviewed. Earn points for every merge that lands.",
      icon: Rocket
    },
    {
      step: "04",
      title: "Win",
      description: "Top builders claim prizes, swag, and direct job referrals.",
      icon: Gift
    }
  ],
  timeline: [
    {
      date: "October 1, 2026",
      title: "Registration Opens",
      description: "Registrations are open on October 1st and anyone can register now to join the program.",
      step: "Step 01 / 06"
    },
    {
      date: "October 12, 2026",
      title: "Projects Announced",
      description: "All approved projects are published and available for contributors to explore.",
      step: "Step 02 / 06"
    },
    {
      date: "October 15, 2026",
      title: "Contribution Period Begins",
      description: "Contributors start working on their selected projects.",
      step: "Step 03 / 06"
    },
    {
      date: "To Be Declared",
      title: "Registrations Close",
      description: "Final deadline for new participant registrations.",
      step: "Step 04 / 06"
    },
    {
      date: "December 30, 2026",
      title: "Program Ends",
      description: "Contribution period concludes and final submissions are due.",
      step: "Step 05 / 06"
    },
    {
      date: "January 15, 2027",
      title: "Results Announced",
      description: "Winners and top contributors are recognised and results are declared.",
      step: "Step 06 / 06"
    }
  ],
  prizes: {
    ranks: [
      {
        rank: "Rank 1",
        rewards: "07 rewards",
        tag: "Top prize",
        items: ["NSoC T-Shirt", "Unstop T-Shirt", "NSoC Cap", "Diary, Bookmark & Pen", "NSoC Hard Copy Certificate", ".xyz Domain", "Social Media Recognition"],
        icon: Crown
      },
      {
        rank: "Top 3",
        rewards: "07 rewards",
        items: ["NSoC T-Shirt", "Diary, Bookmark & Pen", "NSoC Cap", ".xyz Domain", "Unstop T-Shirt", "NSoC Hard Copy Certificate", "Social Media Recognition"],
        icon: Medal
      },
      {
        rank: "Top 5",
        rewards: "06 rewards",
        items: ["NSoC T-Shirt", "Diary, Bookmark & Pen", "NSoC Cap", "NSoC Hard Copy Certificate", ".xyz Domain", "Social Media Recognition"],
        icon: Star
      },
      {
        rank: "Top 10",
        rewards: "06 rewards",
        items: ["Diary, Bookmark & Pen", "NSoC Cap", "NSoC Hard Copy Certificate", ".xyz Domain", "NSoC Digital Certificate", "Social Media Recognition"],
        icon: Medal
      }
    ],
    all: [
      "TruScholar Digital Certificate",
      "NSoC Digital Certificate",
      "Badge Point Base"
    ]
  },
  sponsors: [
    { tier: "Title Sponsor", name: "Unstop", description: "A leading platform for hosting and managing online competitions, hackathons, and hiring challenges, fostering student talent across tech domains.", url: "https://unstop.com/p/open-source-program-nexus-spring-of-code-1661333" },
    { tier: "Gold Sponsor", name: "Arkham Experience", description: "An immersive media-tech company pioneering Gen AI, Agentic AI, Holographics, Spatial Computing, AR/XR, and distributed networks.", url: "https://arkhamarchives.net/" },
    { tier: "Silver Sponsor", name: "Extension Shield", description: "Security-first browser extension management. Protecting developers and organizations from malicious extensions and supply chain risks.", url: "https://extensionshield.com/" }
  ],
  partners: [
    { name: "Indian Society for Technical Education", url: "https://www.linkedin.com/company/indian-society-for-technical-education" },
    { name: "Microsoft Learn Community GGITS", url: "https://www.linkedin.com/company/ms-ggits" },
    { name: "Enginow", url: "https://www.enginow.in/" },
    { name: "Oz Lunara", url: "https://app.ozlunara.com/" },
    { name: "HackDays", url: "#" },
    { name: "Celtrix", url: "https://www.celtrix.tech/" },
    { name: "AlgoZenith", url: "https://maang.in/" },
    { name: "Kanpur Ai Space", url: "https://metaedschool.com/" },
    { name: "Aarambh Network", url: "#" },
    { name: "WETEAMRK7", url: "https://www.linkedin.com/company/weteamrk7/" },
    { name: "GeeksforGeeks Campus Body", url: "https://terminal-troops.super.site/" },
    { name: "SphereX", url: "https://spherexcommunity.vercel.app/" },
    { name: "Amogha AI", url: "https://jamun.app/" },
    { name: "Sotercare", url: "https://www.linkedin.com/company/sotercare" },
    { name: "The Event Wallah", url: "#" }
  ]
}
