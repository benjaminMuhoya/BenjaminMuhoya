import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  GraduationCap,
  FileText,
  ExternalLink,
  Microscope,
  Dna,
  Globe2,
  Camera,
} from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div className={`rounded-3xl border border-black/10 bg-white shadow-sm ${className}`}>
    {children}
  </div>
);

const Button = ({ children, className = "", variant = "solid" }) => {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition";
  const style =
    variant === "outline"
      ? "border border-white/40 bg-white/10 text-white hover:bg-white/20"
      : "bg-[#c76b28] text-white hover:bg-[#a34f1d]";

  return <button className={`${base} ${style} ${className}`}>{children}</button>;
};

const TextIcon = ({ children }) => (
  <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-sm text-xs font-bold">
    {children}
  </span>
);

const ImageBlock = ({ src, alt, className = "" }) => (
  <div
    className={`relative overflow-hidden bg-gradient-to-br from-[#d69a46] via-[#efe3d2] to-[#386641] ${className}`}
  >
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
    />
  </div>
);

const makeSectionId = (label) => label.toLowerCase().replaceAll(" ", "-");

const navItems = ["Research Interests", "Publications", "CV", "Gallery", "Contact"];

const researchInterests = [
  {
    icon: <Microscope className="h-5 w-5" />,
    title: "Metabolic Phenotypes",
    text: "I use NMR and mass spectrometry technologies to quantify metabolic phenotypes.",
  },
  {
    icon: <Dna className="h-5 w-5" />,
    title: "Gene × Environment Interactions",
    text: "I am interested in the context dependency of metabolic phenotypes: how much is dictated by environment, genetics, and their interaction.",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Beyond the Western World",
    text: "My research focuses on communities with lifestyles divergent from the Western lifestyle and how lifestyle shifts affect metabolic phenotypes.",
  },
];

const publications = [
  "Lea A. J., Caldas I. V., Garske K. M., Kahumbu J., Kinyua P., Miano C., Muhoya B., Peng J., Rabinowitz J. D., Roichman A., et al. Adaptations to water stress and pastoralism. Science, 2025.",
  "Lea A. J., Waigwa C., Muhoya B., Lotukoi F., Peng J., Henry L., Abhyankar V., et al. Socioeconomic status effects on health vary between rural and urban Turkana. Evolution, Medicine, and Public Health, 2021.",
  "Arner A. M., Muhoya B., Snyder-Mackler N., Ayroles J. F., & Lea A. J. Sex differences in immune function and disease risk are not easily explained by an evolutionary mismatch. bioRxiv, 2024.",
  "Watowich M. M., Arner A. M., Wang S., Mwai C. M., Muhoya B., Mukoma B., Wallace I. J., Ayroles J. F., Kraft T. S., Lea A. J., et al. The built environment is more predictive of cardiometabolic health than other aspects of lifestyle in two rapidly transitioning Indigenous populations. medRxiv, 2024.",
];

const galleryImages = [
  "images/Diet_Turka.jpg",
  "images/turkana_machine.jpg",
  "images/landscape_background.jpg",
  "images/fieldwork_turkana_group.jpg",
  "images/in_the_field.jpg",
  "images/presentation.jpg",
  "images/lab_microscope.jpg",
  "images/desert_background.jpg",
  "images/snow_princeton.jpg",
  "images/lab_photo.jpg",
  "images/podcast_princeton.jpg",
  "images/cshl.jpg",
  "images/teaching_field_course.jpg",
  "images/turkana_landscape.jpg",
  "images/panama_canopy.jpg",
];

const tests = [
  {
    name: "nav section ids are generated correctly",
    passed: makeSectionId("Research Interests") === "research-interests",
  },
  {
    name: "gallery has at least one image",
    passed: galleryImages.length > 0,
  },
  {
    name: "publications list is not empty",
    passed: publications.length > 0,
  },
];

console.assert(
  tests.every((test) => test.passed),
  "One or more website data checks failed",
  tests
);

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-[#f7f0e6] text-[#22160f]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f7f0e6]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            Benjamin Muhoya
          </a>
          <div className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${makeSectionId(item)}`}
                className="text-[#4b382b] transition hover:text-[#a34f1d]"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden pt-24">
        <div className="absolute inset-0">
          <ImageBlock
            src="images/landscape_background.jpg"
            alt="Website cover background"
            className="h-full w-full"
            fallback="Website cover background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7f0e6] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-[#f4c46a]">
              Ecology · Metabolism · Human Genetics
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
              Studying how environments shape human biology.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85">
              I am a PhD student currently pursuing my doctorate in Ecology and Evolutionary Biology. My first degree was in Medical Laboratory Science, and over the years, I have gained extensive experience spanning remote fieldwork, several wet-lab techniques, and computational data analysis. My research focuses on metabolic phenotypes and the context dependence of these phenotypes; that is, how they are affected by the environment vs. genotypes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#research-interests">
                <Button>Explore Research</Button>
              </a>
              <a href="Benjamin_Muhoya_CV.pdf">
                <Button variant="outline">Download CV</Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden md:block"
          >
            <div className="overflow-hidden rounded-[2.2rem] border border-white/25 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <ImageBlock
                src="images/Cover_home_page.jpg"
                alt="Benjamin Muhoya in the lab"
                className="h-[520px] w-full rounded-[1.7rem]"
                fallback="Lab portrait"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="research-interests" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a34f1d]">
              Research Interests
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Metabolism in varying context.
            </h2>
            <p className="mt-5 leading-8 text-[#5d493b]">
              My research connects lifestyle variation, metabolomics, genomics and computational analysis to understand how lifestyle transitions reshape human metabolism.
            </p>
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm">
              <ImageBlock
                src="images/lifestyle_graphic.png"
                alt="Research graphic showing lifestyle transition"
                className="h-[360px] w-full"
                fallback="Lifestyle transition research graphic"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {researchInterests.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur">
                  <div className="p-6">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f2c66d]/40 text-[#a34f1d]">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[#5d493b]">{item.text}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="bg-[#22160f] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f2c66d]">
            Publications
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Selected work.
          </h2>
          <div className="mt-10 grid gap-4">
            {publications.map((pub) => (
              <div key={pub} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6">
                <div className="flex gap-4">
                  <FileText className="mt-1 h-5 w-5 shrink-0 text-[#f2c66d]" />
                  <p className="leading-7 text-white/85">{pub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cv" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a34f1d]">CV</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Training, teaching, and experience.
            </h2>
          </div>
          <Card>
            <div className="space-y-6 p-8">
              <div>
                <h3 className="flex items-center gap-2 text-2xl font-semibold">
                  <GraduationCap className="h-5 w-5 text-[#a34f1d]" /> Education
                </h3>
                <p className="mt-3 text-[#5d493b]">
                  PhD student in Ecology and Evolutionary Biology, Princeton University. Bachelor’s degree in Medical Laboratory Science, Technical University of Kenya.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Teaching</h3>
                <ul className="mt-3 space-y-2 text-[#5d493b]">
                  <li>2023: Princeton EEB 388 — Genomics in the Wild, Mpala Research Center, Kenya.</li>
                  <li>2024: Princeton EEB 321 — Ecology: Species Interactions, Biodiversity and Society.</li>
                  <li>2025: Princeton EEB 355 — Statistics for Biologists.</li>
                  <li>2026: Princeton EEB 347 — Tropical Forest Ecology Field Course, Barro Colorado Island, Panama.</li>
                </ul>
              </div>
              <a href="Benjamin_Muhoya_CV.pdf">
                <Button>Download full CV</Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      <section id="gallery" className="bg-[#efe3d2] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a34f1d]">Gallery</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Field, lab, and life.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#5d493b]">
              Behind the science are the places, people, and special moments that make it beautiful.
            </p>
          </div>

          <div className="mb-8 overflow-hidden rounded-[2.2rem] border border-black/10 bg-white p-3 shadow-sm">
            <div className="relative overflow-hidden rounded-[1.7rem]">
              <ImageBlock
                src="images/ayroles_lab.jpg"
                alt="Ayroles lab group"
                className="h-[520px] w-full"
                fallback="My Lab"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="mb-2 flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-[#f2c66d]">
                  <Camera className="h-4 w-4" /> The
                </p>
                <h3 className="text-4xl font-semibold">Ayroles Lab</h3>
              </div>
            </div>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((img) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="mb-4 break-inside-avoid overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-2 shadow-sm"
              >
                <ImageBlock
                  src={img}
                  alt="Gallery image"
                  className="h-72 w-full rounded-[1.1rem]"
                  fallback="Gallery image"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2.2rem] bg-[#22160f] p-8 text-white shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f2c66d]">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Let’s connect.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/75">
            For research collaborations, talks, teaching, fieldwork, wet-lab consultation, or science communication.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:bm0211@princeton.edu">
                <Button variant="outline">
                    <Mail className="mr-2 h-4 w-4" /> Email
                </Button>
            </a>
            <a href="https://www.linkedin.com/in/benjamin-muhoya/" target="_blank" rel="noreferrer">
              <Button variant="outline">
                <TextIcon>in</TextIcon> LinkedIn
              </Button>
            </a>
            <a href="https://orcid.org/0000-0003-2228-3649" target="_blank" rel="noreferrer">
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" /> ORCID
              </Button>
            </a>
            <a
              href="https://scholar.google.com/citations?user=0tp-g1cAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" /> Google Scholar
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-sm text-[#5d493b]">
        © 2026 Benjamin Muhoya. Ecology, metabolism, and human genetics.
      </footer>
    </div>
  );
}
