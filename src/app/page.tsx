import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Feature from "@/components/Feature/Feature";
import type { Project } from "@/components/Feature/Feature";
import Service from "@/components/Service/Service";
import Testimonial from "@/components/Testimonial/Testimonial";
import Footer from "@/components/Footer/Footer";

// ─── Shared image map (filename → public path) ────────────────────────────────
// Filenames have spaces so we encode them for safe use in src attributes.
const img = {
  artisan:  "/assets/images/Artisan%20Coffee%20Co%20.webp",
  novatech: "/assets/images/NovaTech%20Startup.webp",
  greenleaf:"/assets/images/GreenLeaf%20Organics.webp",
  lumex:    "/assets/images/Lumex%20Architecture.webp",
  urbane:   "/assets/images/Urbane%20Collective.webp",
  solaris:  "/assets/images/Solaris%20Energy.webp",
  bloom:    "/assets/images/Bloom%20Wellness.webp",
  apex:     "/assets/images/Apex%20Ventures.webp",
};

// ─── Branding ────────────────────────────────────────────────────────────────

const brandingProjects: Project[] = [
  { title: "Artisan Coffee Co.",  desc: "Full brand identity & packaging.",      image: img.artisan   },
  { title: "NovaTech Startup",    desc: "Logo design & brand guidelines.",        image: img.novatech  },
  { title: "GreenLeaf Organics",  desc: "Growth marketing & visual identity.",    image: img.greenleaf },
  { title: "Lumex Architecture",  desc: "Corporate branding & print.",            image: img.lumex     },
  { title: "Urbane Collective",   desc: "Brand strategy & ad shoot.",             image: img.urbane    },
  { title: "Solaris Energy",      desc: "Package design & creatives.",            image: img.solaris   },
  { title: "Bloom Wellness",      desc: "Identity system & social assets.",       image: img.bloom     },
  { title: "Apex Ventures",       desc: "Pitch deck & brand refresh.",            image: img.apex      },
];

// ─── Growth Marketing ─────────────────────────────────────────────────────────

const growthMarketingProjects: Project[] = [
  { title: "NovaBrand Campaign",  desc: "Paid social & performance ads.",         image: img.novatech  },
  { title: "GreenLeaf Launch",    desc: "Email funnel & lead generation.",         image: img.greenleaf },
  { title: "Lumex Tech Growth",   desc: "SEO strategy & content marketing.",       image: img.lumex     },
  { title: "Bloom Wellness Ads",  desc: "Meta & Google ad campaigns.",             image: img.bloom     },
  { title: "Apex Scale-Up",       desc: "Conversion rate optimisation.",           image: img.apex      },
  { title: "Solaris Awareness",   desc: "Influencer & PR outreach.",               image: img.solaris   },
  { title: "Urbane Social",       desc: "Organic growth & community.",             image: img.urbane    },
  { title: "Artisan Retention",   desc: "Loyalty programme & CRM.",               image: img.artisan   },
];

// ─── Package Design ───────────────────────────────────────────────────────────

const packageDesignProjects: Project[] = [
  { title: "Artisan Coffee Box",  desc: "Premium retail packaging.",               image: img.artisan   },
  { title: "Bloom Skincare Set",  desc: "Eco-friendly product range.",             image: img.bloom     },
  { title: "GreenLeaf Pouches",   desc: "Sustainable flexible packaging.",         image: img.greenleaf },
  { title: "Solaris Gift Box",    desc: "Luxury unboxing experience.",             image: img.solaris   },
  { title: "NovaTech Kit",        desc: "Tech product packaging system.",          image: img.novatech  },
  { title: "Urbane Apparel Tag",  desc: "Hang tags & tissue wraps.",               image: img.urbane    },
  { title: "Apex Mailer Box",     desc: "D2C shipping & brand touch.",             image: img.apex      },
  { title: "Lumex Stationery",    desc: "Corporate print collateral.",             image: img.lumex     },
];

// ─── Advertising ─────────────────────────────────────────────────────────────

const advertisingProjects: Project[] = [
  { title: "Artisan OOH Campaign",desc: "Billboard & transit ads.",                image: img.artisan   },
  { title: "NovaTech Launch Ad",  desc: "TV & digital video spots.",               image: img.novatech  },
  { title: "Bloom Print Series",  desc: "Magazine & press advertising.",           image: img.bloom     },
  { title: "Solaris Social Ads",  desc: "Scroll-stopping creatives.",              image: img.solaris   },
  { title: "Urbane Radio Spot",   desc: "Audio brand storytelling.",               image: img.urbane    },
  { title: "GreenLeaf Influencer",desc: "Sponsored content & reels.",              image: img.greenleaf },
  { title: "Lumex Trade Show",    desc: "Exhibition & event materials.",           image: img.lumex     },
  { title: "Apex Retargeting",    desc: "Display & programmatic ads.",             image: img.apex      },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />

        {/* Branding */}
        <Feature
          title="Branding"
          description="We approach branding as strategic architecture. By leveraging deep insights and future-forward creativity, we build resilient, compelling brand experiences designed to evolve, ensuring your identity timeless."
          learnMoreHref="/branding"
          projects={brandingProjects}
        />

        {/* Growth Marketing */}
        <Feature
          title="Growth Marketing"
          description="We drive growth through creativity and data, reach the right audience at the right time, scale brands with measurable impact, and continuously optimize for better performance."
          learnMoreHref="/growth-marketing"
          projects={growthMarketingProjects}
        />

        {/* Package Design */}
        <Feature
          title="Package Design"
          description="We design packaging that looks good and works better. Focused on clarity, appeal, and impact, we help your product stand out and connect with your audience from the first glance."
          learnMoreHref="/package-design"
          projects={packageDesignProjects}
        />

        {/* Advertising */}
        <Feature
          title="Advertising"
          description="We create advertising that captures attention and drives action, blending creativity with strategy to connect with the right audience, build brand recall, and deliver measurable results."
          learnMoreHref="/advertising"
          projects={advertisingProjects}
        />

        <Service />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
