import Image from "next/image";
import {
  Pencil,
  Camera,
  PenTool,
  Sparkles,
  Palette,
  Mail,
  Globe,
  CameraIcon,
  MapPin,
  Share2,
} from "lucide-react";

// Hero card images
const heroImages = {
  card1:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAeqAPXJUZVe8rjorXLXo4RUbCibOR_xmU6VTRHhcOgdvbEGxIaGH9qLsrqf1Z1G69D2Yo3ZrFYKuQC3bOZAAjr6TcQYhjfgm_au8RHRsH_gy7nYJgqmjatgHt8_6X0-E28oSR_-PG-fUz4hcGz9n4_N7t6DSai8NUqjmkyGZhRyD2bdLsTLdbqBzyJ_QdxsMQCG8YbYzFtuzZKWR8KK6S9_aJhQKFy4z3d31H-0-JyDVsKyXUbfCffcidHVbQ6H8UiI9uQhqMXCiQ7",
  card2:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDvnKqP7NajGYGzpyuUXBctOP-3cdYbZ9XxZAzBSo00qWwDCHf2iJn_18mT--Qh0o1R6jUfMrQhyWeQsZ4aPiSRiM5S97EN8URNd7QCtC5qe12Emsi6aXwGWa92QQxPDiCAS4OiNKhC9kZJ03g1rEbQASg4-DJ5hwdxdayUVr5W8pzIfzf4pohAazXdhM_0-74tKNqgjk6FZmQ8IcLs1ZmFuVTZPB_R8NuTbYjTd9O4ZFRvcV4HmlHNq62XtkiSvTNk3tIMTRI8xgWo",
};

// Comparison section images
const comparisonImages = {
  forest:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBxYaURFe3QAL0SNFarjYjNolpSJHfFqwcWB6hTI9LWF4A7OAljZlYpxiwgv6_W1F-GHj-SXgtcXZtY0DNOj1LzAan1JT9K7e4sdq90aQAg8eTSSJ0G6OZUR3xoyga0068gaSETax_M_HvyXOJhkJXUE-cZ2Y5DbpmrRJiow0M9AcaTI3b5fcw8uKN4WIx4gLiJfOdxqp4u7AuDXMaaVOJMknpNZqeG5EBLtAOSIfis3K8QXcHtk-EmDzgmzxj6xBSZSF4mBMmmCGma",
  dogOriginal:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBNcqmMGJLhi6Ik1tgFXPx96wSWOfwSwKOP1ZxEhDergOvfZNaie_8jbL81BmfMCi3ogpwRmuzefYid3FoVkGs7gobDJZLvXyB34vkPelrHpcyPXdIQiv6nsz28dJRkP4MgmtsAtaaGc5_GKwAPXxXmvBfRjpbvResczRVZqk8VvbqIhjaDzVll-vg7m9QgK1m_yVZs184j6oLKzxKWo0l539MgeNRjnwW8WzpYO64MJwxM0if1Glzk7hy9X7E5W9gaibEZf2t-72hV",
  dogPainted:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDdRdJVEJ3UJShDq_kGwJMj8aTFJtlB1TWnKDxsJ3bBJ63yYix1baR4WRGpaMtQanU1KvXw0TJSY8v5Hqc3mfF84Wt_IJVtt0Vb39iLsmmR2wAAANEdo8f0OskJ-p6R5DcVnSk7pfr9GIDbeTgsvfaw6TeKSgY8Gw45nT3aWcJH1n-7pyixe04uBNyZ4D5d9mbLAxE9Q8lijRjU_o2U4YNstR-bQ8eFqBhbG8amBk_dJ7edJQzilr7mH9QlPZX1-07wFn649b-KLdwx",
  fireplace:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCtsWQW2UyLOpAJhPL0r9KNGedy6OH6oxiJnRGptOBxoj4eMLS8y8BH1OWN_FM_0wrBIn2Ty8asOBMZaeMicvE7AUzd0xh13lp2NuQyWVK-v_evTXXfirzRb9eUrItI9bINYqzpePheAisbE-uVz1VGRRXHL6OvqhvwDRv8Z2YhRFauz_qQD65RnxQOn7edMWBcqU_p-EJbkqgc2H-BDKYesQUNCvAl-lZz5UAF_e1nF_4s8jouPdShvTX09aOyWGs7NFE4g0VrPKlA",
};

// Template images
const templateImages = {
  nordic:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC_cV-zK5lQxN_Wc_ZXlMiqPRTmPDCKx4r9FpnN6RGsmrGFAI3fHKd4QM9P3AW98IQM7UxRVyx2Gw0u-WtqufPTxqee01YnN9a_QIfiW4sJaGmz7iKmvU3eQSGMaAxpnp3cozg-TeNOkanJ5EuSq0y_y8khIL2rwuG32A9OCGN-D6ftilmFVCryAnT-13ComSIT8aQ8rwbDuexHv2YMAgaIvcBCyEYJ8T18OlSxUQOiNs_KyMuQjqNMB9gGMqCYJIwEIUmPdPUhImUM",
  golden:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCY4kv5HuTFVG_REBwSjLrABOIC1hR5R0beI2lYJxkx-JC7o0LG0z3jsRz69sPf7jYjKpA7l-P-VsH6EUcDWfc_1AhtBsbPGHMftLLyxK4BbJ-KZ0jDv_5pGfj5J1GF-Sv9tUXABzkCTXh61-QY9JH2qD9rHXC50H5JHSCvworJOy4SK9afhoeUdC0liVO0LE1pa_F6Ay63SUwYac-lp3sndRlm56qSBljODgF_lz4Rwz6wOIY5zi9Gbpl-pT9VyNNPgzuvdLFEYxps",
  village:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAsEeveBv_VeNy7Uw-Z2TdA18nz1PEKB72O0ZIejU96bektuqTkNVGlzngYvo-ClkrtQkHMcshOHWF_ouEkOp4b_vq9B7yBFT0qsbBZtY9yYNPimhmEp0QfhKdTTX9CvZOMThBtWfRMgXAmsJFNvKeCGG6iB00ya3wrwaNKe7f_GtIa_uk7t4-G9_TLRidu5XZxThRKtvJtrfJCKUA5ToRvuc6BQTZhb1dEdY8Aj8Nz50v33EYys76phZ_6OU-PFcWRckxGokaTre5E",
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans antialiased">
      {/* ─── TopNavBar ─── */}
      <nav className="fixed top-0 w-full z-50 bg-[#fcf9f3]/80 backdrop-blur-lg">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <span className="text-2xl font-heading font-bold text-primary-container">
            Personal Prints
          </span>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            <a
              className="text-primary-container font-bold border-b-2 border-secondary text-sm tracking-wide"
              href="#how-it-works"
            >
              How it Works
            </a>
            <a
              className="text-primary-container/70 font-medium hover:text-primary-container transition-all text-sm tracking-wide"
              href="#templates"
            >
              Pricing
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="text-sm font-sans uppercase tracking-widest text-primary-container/70 hover:text-primary-container">
              Sign In
            </button>
            <button className="bg-primary text-primary-foreground px-6 py-2.5 text-xs font-sans uppercase tracking-[0.2em] hover:opacity-90 transition-all active:scale-95 duration-150">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* ─── Hero Section ─── */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="z-10 space-y-8">
              <span className="inline-block font-sans text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">
                The Digital Atelier
              </span>
              <h1 className="font-heading text-6xl md:text-8xl text-primary leading-[1.1] tracking-tight">
                Send Cards <br />
                <span className="italic font-normal">
                  They&apos;ll Actually Keep
                </span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                AI-generated custom art. Choose a template, add your own AI
                image, and we&apos;ll take care of the rest. High-cotton paper
                meets high-tech vision.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-secondary-container text-on-secondary-container px-10 py-4 font-sans text-xs uppercase tracking-[0.2em] font-bold hover:brightness-105 transition-all">
                  Design Your Card
                </button>
                <button className="border border-outline/20 px-10 py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-surface-container-low transition-all">
                  See Examples
                </button>
              </div>
            </div>

            {/* Gallery Stack */}
            <div className="relative">
              <div className="relative w-full aspect-[4/5] bg-surface-container-low p-12 overflow-hidden">
                <div className="absolute top-10 right-0 w-3/4 aspect-[3/4] bg-surface-container-lowest shadow-editorial -rotate-6 transform translate-x-12">
                  <Image
                    alt="Minimalist holiday card design with forest theme"
                    className="w-full h-full object-cover p-2"
                    src={heroImages.card1}
                    width={600}
                    height={800}
                  />
                </div>
                <div className="absolute bottom-10 left-0 w-3/4 aspect-[3/4] bg-surface-container-lowest shadow-editorial rotate-3 transform -translate-x-8">
                  <Image
                    alt="Elegant gold foil holiday card mockup"
                    className="w-full h-full object-cover p-2"
                    src={heroImages.card2}
                    width={600}
                    height={800}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 1: How the Magic Works ─── */}
        <section className="py-24 bg-[#F5F0E8]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20 space-y-4">
              <h2 className="font-heading text-4xl md:text-5xl italic text-primary">
                From Your Idea to a Card Worth Keeping
              </h2>
              <p className="text-on-surface-variant text-lg">
                Just describe what you want — or upload a photo. Our AI does the
                rest.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Comparison Card 1 */}
              <ComparisonCard
                icon={<Pencil className="text-outline w-7 h-7" />}
                inputLabel="Your Prompt"
                inputContent={
                  <p className="text-xs italic text-on-surface-variant leading-relaxed">
                    &quot;A snowy pine forest at dusk, watercolor style, warm
                    golden light between the trees&quot;
                  </p>
                }
                outputLabel="Your Card Art"
                outputImage={comparisonImages.forest}
                outputAlt="Watercolor Forest Illustration"
              />

              {/* Comparison Card 2 */}
              <ComparisonCard
                icon={<Camera className="text-outline w-7 h-7" />}
                inputLabel="Your Photo"
                inputContent={
                  <div className="w-20 h-20 overflow-hidden rounded-md -rotate-3 border-2 border-white shadow-sm">
                    <Image
                      alt="Original Dog Photo"
                      className="w-full h-full object-cover"
                      src={comparisonImages.dogOriginal}
                      width={80}
                      height={80}
                    />
                  </div>
                }
                outputLabel="Your Card Art"
                outputImage={comparisonImages.dogPainted}
                outputAlt="Painterly Dog Illustration"
              />

              {/* Comparison Card 3 */}
              <ComparisonCard
                icon={<PenTool className="text-outline w-7 h-7" />}
                inputLabel="Your Prompt"
                inputContent={
                  <p className="text-xs italic text-on-surface-variant leading-relaxed">
                    &quot;Cozy holiday scene with a fireplace, felt stockings,
                    and a tabby cat sleeping&quot;
                  </p>
                }
                outputLabel="Your Card Art"
                outputImage={comparisonImages.fireplace}
                outputAlt="Cozy Fireplace Illustration"
              />
            </div>

            <div className="text-center space-y-10">
              <p className="italic text-on-surface/60 text-sm">
                Each image is uniquely generated for your card. No two are
                alike.
              </p>
              <button className="bg-[#C9A84C] text-white px-12 py-4 font-sans text-xs uppercase tracking-[0.3em] font-bold shadow-lg hover:brightness-105 transition-all">
                Try It Free
              </button>
            </div>
          </div>
        </section>

        {/* ─── Section 2: High-Cotton Paper ─── */}
        <section className="py-24 bg-[#1B3A2D] text-[#F5F0E8]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16 space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#C9A84C] font-bold">
                The Craft
              </span>
              <h2 className="font-heading text-4xl md:text-5xl">
                High-Cotton Paper. Museum-Grade Ink.
              </h2>
              <p className="text-[#F5F0E8]/70 max-w-2xl mx-auto leading-relaxed">
                We partner with a premium global printing network to deliver
                archival-quality prints. Every card is produced on 200gsm heavy
                cotton-blend cardstock, ensuring your holiday message carries the
                weight it deserves.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 items-center py-10 border-y border-[#C9A84C]/20">
                <CraftFeature
                  icon={
                    <svg
                      className="w-7 h-7 text-[#C9A84C]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path d="M4 4h16v16H4z" />
                      <path d="M4 8h16M8 4v16" />
                    </svg>
                  }
                  title="200gsm Cotton Stock"
                  subtitle="Tactile & Archival"
                />
                <CraftFeature
                  icon={<Globe className="w-7 h-7 text-[#C9A84C]" />}
                  title="Printed Near You"
                  subtitle="Fast & Sustainable"
                  className="border-y md:border-y-0 md:border-x border-[#C9A84C]/20"
                />
                <CraftFeature
                  icon={<Mail className="w-7 h-7 text-[#C9A84C]" />}
                  title="Mailed Direct"
                  subtitle="We Handle Everything"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 3: Explore Templates ─── */}
        <section id="templates" className="py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="space-y-4">
                <h2 className="font-heading text-4xl text-primary">
                  Explore Templates
                </h2>
                <div className="h-1 w-12 bg-secondary" />
              </div>
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
                {["All", "Holiday", "Christmas", "Hanukkah", "New Year"].map(
                  (cat, i) => (
                    <button
                      key={cat}
                      className={
                        i === 0
                          ? "px-6 py-2 bg-primary text-primary-foreground font-sans text-[10px] uppercase tracking-widest"
                          : "px-6 py-2 text-on-surface/60 font-sans text-[10px] uppercase tracking-widest hover:text-primary transition-colors"
                      }
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Template Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <TemplateCard
                image={templateImages.nordic}
                title="Nordic Nights"
                tags="Minimalist · Forest"
                alt="Nordic style holiday card with minimalist trees"
              />
              <TemplateCard
                image={templateImages.golden}
                title="Golden Glow"
                tags="Luxury · Foil"
                alt="Golden glow luxury holiday card template"
              />
              <TemplateCard
                image={templateImages.village}
                title="Winter Village"
                tags="Traditional · Cozy"
                alt="Traditional winter village holiday card"
              />
            </div>
          </div>
        </section>

        {/* ─── Section 4: The Process ─── */}
        <section
          id="how-it-works"
          className="py-32 bg-primary-container text-primary-foreground"
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-24 space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-on-primary-container font-bold">
                The Process
              </span>
              <h2 className="font-heading text-5xl italic">
                Simple. Seamless. Singular.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-16 relative">
              <ProcessStep
                number="01"
                icon={<Palette className="w-5 h-5 text-primary" />}
                title="Pick a template"
                description="Start with one of our designer-crafted holiday layouts. Each one is built to frame your story perfectly."
              />
              <ProcessStep
                number="02"
                icon={<Sparkles className="w-5 h-5 text-primary" />}
                title="Generate your AI image"
                description="Use our built-in AI tool to create a one-of-a-kind art piece for your card. From oil paintings to modernist sketches."
              />
              <ProcessStep
                number="03"
                icon={<Mail className="w-5 h-5 text-primary" />}
                title="We print & mail it"
                description="We use premium heavy cardstock and high-quality inks, and we handle all the mailing for you. Truly hands-off elegance."
              />
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="py-32 bg-surface overflow-hidden">
          <div className="max-w-5xl mx-auto px-8 bg-surface-container-low py-20 relative text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 -mr-16 -mt-16 rounded-full blur-3xl" />
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="font-heading text-4xl text-primary">
                Ready to create your heirloom?
              </h2>
              <p className="text-on-surface-variant">
                The most beautiful cards your family has ever received are just a
                few clicks away.
              </p>
              <button className="bg-primary text-primary-foreground px-12 py-5 font-sans text-xs uppercase tracking-[0.3em] font-bold shadow-xl hover:translate-y-[-2px] transition-all">
                Get Started Now
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="w-full bg-[#1b3022] border-t border-[#fcf9f3]/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
          <div className="col-span-2 md:col-span-1 space-y-6">
            <span className="text-xl font-heading text-[#d4af37]">
              Personal Prints
            </span>
            <p className="text-[#fcf9f3]/60 font-sans text-sm uppercase tracking-widest leading-loose">
              &copy; 2024 Personal Prints. <br /> Crafted with care.
            </p>
          </div>

          <FooterColumn
            title="Shop"
            links={["Holiday Cards", "New Year", "Custom Prints"]}
          />
          <FooterColumn
            title="Company"
            links={["Our Story", "Support", "Privacy"]}
          />

          <div className="space-y-6">
            <h4 className="font-heading italic text-[#fcf9f3] text-lg">
              Follow
            </h4>
            <div className="flex gap-4">
              <a
                className="text-[#fcf9f3]/60 hover:text-[#d4af37] transition-colors p-1"
                href="#"
              >
                <CameraIcon className="w-5 h-5" />
              </a>
              <a
                className="text-[#fcf9f3]/60 hover:text-[#d4af37] transition-colors p-1"
                href="#"
              >
                <MapPin className="w-5 h-5" />
              </a>
              <a
                className="text-[#fcf9f3]/60 hover:text-[#d4af37] transition-colors p-1"
                href="#"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── Sub-components ─── */

function ComparisonCard({
  icon,
  inputLabel,
  inputContent,
  outputLabel,
  outputImage,
  outputAlt,
}: {
  icon: React.ReactNode;
  inputLabel: string;
  inputContent: React.ReactNode;
  outputLabel: string;
  outputImage: string;
  outputAlt: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex h-64 border border-outline/10 shadow-sm overflow-hidden">
        <div className="w-1/2 bg-surface-container-highest p-6 flex flex-col justify-center items-center text-center gap-4 border-r border-outline/10">
          {icon}
          <span className="text-[10px] font-sans uppercase tracking-widest text-outline">
            {inputLabel}
          </span>
          {inputContent}
        </div>
        <div className="w-1/2 bg-white relative">
          <Image
            alt={outputAlt}
            className="w-full h-full object-cover"
            src={outputImage}
            fill
            sizes="(max-width: 768px) 50vw, 20vw"
          />
          <div className="absolute top-4 right-4 bg-white/90 p-1.5 shadow-sm rounded-full">
            <Sparkles className="text-secondary w-4 h-4" />
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] font-sans uppercase tracking-widest text-white drop-shadow-md">
              {outputLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CraftFeature({
  icon,
  title,
  subtitle,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-6 px-4 py-4 md:py-0 ${className}`}>
      {icon}
      <div>
        <h4 className="font-heading text-lg">{title}</h4>
        <p className="text-xs text-[#F5F0E8]/60 uppercase tracking-wider mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function TemplateCard({
  image,
  title,
  tags,
  alt,
}: {
  image: string;
  title: string;
  tags: string;
  alt: string;
}) {
  return (
    <div className="group">
      <div className="aspect-[3/4] bg-surface-container-lowest mb-6 overflow-hidden relative">
        <Image
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-heading text-xl text-primary">{title}</h3>
          <p className="text-[10px] font-sans uppercase tracking-widest text-on-surface/40 mt-1">
            {tags}
          </p>
        </div>
        <button className="text-secondary font-sans text-[10px] uppercase tracking-widest font-bold border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-all">
          Customize
        </button>
      </div>
    </div>
  );
}

function ProcessStep({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative">
      <div className="text-8xl font-heading italic text-on-primary-container/20 absolute -top-12 -left-4">
        {number}
      </div>
      <div className="relative z-10 pt-12 space-y-6">
        <div className="w-12 h-12 flex items-center justify-center bg-secondary-container rounded-full">
          {icon}
        </div>
        <h3 className="font-heading text-2xl">{title}</h3>
        <p className="text-on-primary-container leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="space-y-6">
      <h4 className="font-heading italic text-[#fcf9f3] text-lg">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              className="text-[#fcf9f3]/60 font-sans text-xs uppercase tracking-widest hover:text-[#d4af37] transition-colors"
              href="#"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
