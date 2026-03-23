import { BrandLogo, DisplayText, LabelText } from "@/components/ui";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-surface-container-low/80 backdrop-blur-[16px] sticky top-0 z-50">
        <BrandLogo size="md" />
        <div className="flex items-center gap-6">
          <Button variant="ghost">Browse Cards</Button>
          <Button variant="ghost">How It Works</Button>
          <Button>Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col">
        <section className="flex flex-col items-start justify-center px-8 md:px-16 py-[7rem] bg-background max-w-5xl mx-auto w-full">
          <LabelText size="md" className="text-on-surface-variant mb-6">
            AI-Powered Personalization
          </LabelText>
          <DisplayText size="lg" className="text-primary max-w-2xl mb-8">
            Cards as unique as the people you love.
          </DisplayText>
          <p className="text-lg leading-8 text-on-surface-variant max-w-md mb-12 font-sans tracking-[0.009em]">
            Design one-of-a-kind greeting cards and stationery with our
            intelligent customization tools. Every detail, crafted with
            intention.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground">
              Start Creating
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-secondary/10 text-secondary-foreground"
            >
              View Gallery
            </Button>
          </div>
        </section>

        {/* Feature Section */}
        <section className="bg-surface-container-low py-[5.5rem] px-8 md:px-16">
          <div className="max-w-5xl mx-auto">
            <LabelText size="md" className="text-on-surface-variant mb-4 block">
              The Experience
            </LabelText>
            <DisplayText
              as="h2"
              size="sm"
              className="text-primary max-w-lg mb-16"
            >
              A digital atelier for your most personal moments.
            </DisplayText>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Choose Your Canvas",
                  description:
                    "Select from curated card formats—folded, flat, or postcard—each sized for real-world printing.",
                },
                {
                  title: "Design with AI",
                  description:
                    "Describe your vision and watch it come to life. Our AI understands style, tone, and occasion.",
                },
                {
                  title: "Print & Send",
                  description:
                    "Premium cotton cardstock, hand-finished edges. Shipped directly or download for local printing.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-surface-container-lowest p-8 rounded-[0.25rem]"
                >
                  <h3 className="font-heading text-xl font-normal text-on-surface mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-6 text-on-surface-variant tracking-[0.016em]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
