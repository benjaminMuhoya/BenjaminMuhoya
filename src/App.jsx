import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ExternalLink,
  Microscope,
  Dna,
  Globe2,
  Camera,
  Menu,
  X,
  Map,
  FlaskConical,
  Mouse,
  Waves,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const navItems = [
  { label: "Research Focus", href: "#research-focus" },
  { label: "Projects", href: "#current-projects" },
  { label: "Writing", href: "#writing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const researchInterests = [
  {
    number: "01",
    icon: <Microscope className="h-5 w-5" />,
    title: "Metabolic Phenotypes",
    text: "I use NMR and mass spectrometry technologies to quantify metabolic phenotypes and apply different computational and statistical methods to make sense of these complex data.",
  },
  {
    number: "02",
    icon: <Dna className="h-5 w-5" />,
    title: "Gene × Environment Interactions",
    text: "I am interested in the context dependency of metabolic phenotypes: how much is dictated by environment, genetics, and their interaction.",
  },
  {
    number: "03",
    icon: <Globe2 className="h-5 w-5" />,
    title: "Beyond the Western World",
    text: "My work is focused on communities with lifestyles divergent from the Western lifestyle and how lifestyle shifts affect metabolic phenotypes.",
  },
];

const currentProjects = [
  {
    icon: <Map className="h-5 w-5" />,
    eyebrow: "Population biology",
    title: "Turkana health and lifestyle transitions",
    text: "Studying how unique lifestyles and rapid lifestyle change reshapes metabolism and cardiometabolic disease risk.",
    image: "images/turkana_machine.jpg",
  },
  {
    icon: <FlaskConical className="h-5 w-5" />,
    eyebrow: "Molecular phenotyping",
    title: "Targeted and untargeted metabolomics and lipidomics",
    text: "I have used mass spec and NMR-based metabolomic approaches to quantify hundreds of metabolic phenotypes",
    image: "images/network_node.png",
  },
  {
    icon: <Waves className="h-5 w-5" />,
    eyebrow: "Lipid biology",
    title: "Lipoprotein subclasses, diet, and inflammation",
    text: "Using current high resolution NMR technology I am investigating how Lipoprotein dynamics vary across contexts.",
    image: "images/apolipo.png",
  },
  {
    icon: <Mouse className="h-5 w-5" />,
    eyebrow: "Experimental models",
    title: "Animal models for studying metabolism.",
    text: "Testing inflammation-driven metabolic remodeling under controlled experimental conditions.",
    image: "images/Mouse_model.png",
  },
];

const publications = [
  {
    type: "Publication",
    title:
      "Built environment is a key driver of cardiometabolic health in two Indigenous groups undergoing rapid lifestyle change.",
    citation:
      "Watowich M. M., Arner A. M., Wang S., John E., Kahumbu J. C., Kinyua P., Lopurudoi A., Lotukoi F., Mwai C. M., Muhoya B., et al. Evolution, Medicine, and Public Health, 14(1), 1–16, 2026.",
    doi: "10.1093/emph/eoag007",
    href: "https://doi.org/10.1093/emph/eoag007",
  },
  {
    type: "Manuscript",
    title:
      "Urbanization exacerbates age-associated declines in cardiometabolic health in Turkana and Orang Asli.",
    citation:
      "Watowich M. M., Brassington L., Longtin A., Wang S., Rossow R., Reinhardt K. D., John E., Kahumbu J. C., Kinyua P., Lopurudoi A., Lotukoi F., Miano C., Muhoya B., et al. medRxiv preprint, June 2025.",
    doi: "10.1101/2025.06.06.25329160",
    href: "https://doi.org/10.1101/2025.06.06.25329160",
  },
  {
    type: "Publication",
    title:
      "Adaptations to water stress and pastoralism.",
    citation:
      "Lea A. J., Caldas I. V., Garske K. M., Kahumbu J., Kinyua P., Miano C., Muhoya B., Peng J., Rabinowitz J. D., Roichman A., et al. Science, 2025.",
  },
  {
    type: "Publication",
    title:
      "Socioeconomic status effects on health vary between rural and urban Turkana.",
    citation:
      "Lea A. J., Waigwa C., Muhoya B., Lotukoi F., Peng J., Henry L., Abhyankar V., et al. Evolution, Medicine, and Public Health, 2021.",
  },
  {
    type: "Manuscript",
    title:
      "Sex differences in immune function and disease risk are not easily explained by an evolutionary mismatch.",
    citation:
      "Arner A. M., Muhoya B., Snyder-Mackler N., Ayroles J. F., & Lea A. J. bioRxiv, 2024.",
  },
];

const galleryImages = [
  { src: "images/cshl.jpg", caption: "Meetings and Learning" },
  { src: "images/teaching_field_course.jpg", caption: "Heading to Turkana; Emma and Thomas" },
  { src: "images/turkana_landscape.jpg", caption: "A warm welcome from the Turkana" },
  { src: "images/turkana_machine.jpg", caption: "Real time lifestyle Transitions" },
  { src: "images/Turkana_home.jpg", caption: "A Unique Lifestyle" },
  { src: "images/presentation.jpg", caption: "Presenting our work at Mpala Research Center" },
  { src: "images/lab_microscope.jpg", caption: "Laikipia Governor visits the Lab" },
  { src: "images/snow_princeton.jpg", caption: "First time meeting a SnowWoman @ Princeton" },
  { src: "images/lab_photo.jpg", caption: "The lab, where all the magic happens" },
  { src: "images/podcast_princeton.jpg", caption: "Science communication" },
  { src: "images/fieldwork_turkana_group.jpg", caption: "The Field Team in Kenya" },
  { src: "images/ayroles_lab.jpg", caption: "The Ayroles Lab" },
];


const tags = [
  "metabolism",
  "human health",
  "inflammation",
  "lifestyle transitions",
];

const ImageBlock = ({ src, alt, className = "", imgClassName = "" }) => (
  <figure className={`overflow-hidden bg-[#e9eadf] ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`h-full w-full object-cover ${imgClassName}`}
    />
  </figure>
);

const SectionKicker = ({ children }) => (
  <p className="mb-6 text-4xl font-semibold uppercase tracking-[0.18em] text-[#8a6f2c] sm:text-5xl">
    {children}
  </p>
);

const LinkButton = ({ href, children, variant = "solid", external = false }) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition";
  const styles =
    variant === "outline"
      ? "border border-[#9aaa88]/50 bg-white/70 text-[#263028] hover:border-[#8a6f2c] hover:bg-[#f8f2df]"
      : "bg-[#637357] text-white shadow-sm hover:bg-[#4f6046]";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
};

export default function PersonalWebsite() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbfaf4] text-[#20231f]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#20231f]/10 bg-[#fbfaf4]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="group inline-flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#8fa37d] transition group-hover:bg-[#b78b35]" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#20231f]">
              Benjamin Muhoya
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-[#20231f]/10 bg-white/70 p-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-[#4c5348] transition hover:bg-[#e9eadf] hover:text-[#20231f]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#20231f]/10 bg-white text-[#20231f] md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-[#20231f]/10 bg-[#fbfaf4] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-[#4c5348] shadow-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute left-0 top-0 h-[480px] w-[480px] rounded-full bg-[#e9eadf] blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-24 h-[360px] w-[360px] rounded-full bg-[#f1dfb6] blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-10 pb-20 pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:pb-28">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-[#20231f] sm:text-6xl lg:text-7xl">
                Studying how different environments shape human biology.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#4c5348]">
                I am a PhD student currently pursuing my doctorate in Ecology and Evolutionary Biology.
                My first degree was in Medical Laboratory Science, and over the years, I have gained
                extensive experience spanning remote fieldwork, several wet-lab techniques, and
                computational data analysis. My research focuses on metabolic phenotypes and the context
                dependence of these phenotypes; that is, how they are affected by the environment vs.
                genotypes.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <LinkButton href="#research-focus">Research Interests</LinkButton>
                <LinkButton href="Benjamin_Muhoya_CV.pdf" variant="outline">
                  Download CV <ArrowUpRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -left-4 top-10 hidden h-28 w-28 rounded-full border border-[#8fa37d]/40 lg:block" />
              <div className="absolute -right-4 bottom-16 hidden h-20 w-20 rounded-full bg-[#d9c27c]/30 lg:block" />

              <div className="grid gap-4 sm:grid-cols-[0.86fr_1.14fr] lg:min-h-[660px]">
                <div className="flex flex-col gap-4 sm:pt-20">
                  <ImageBlock
                    src="images/Science_cover.png"
                    alt="Turkana landscape"
                    className="h-72 rounded-[2rem] border border-[#20231f]/10 shadow-sm"
                  />
                  <div className="rounded-[2rem] border border-[#20231f]/10 bg-[#eef0e6] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6f2c]">
                      Science Cover
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#4c5348]">
                      The genetic basis of dehydration reselience in the Turkana People of Northern Kenya. 
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <ImageBlock
                    src="images/Cover_home_page.jpg"
                    alt="Benjamin Muhoya"
                    className="h-[460px] rounded-[2.6rem] border border-[#20231f]/10 shadow-sm sm:h-[620px]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="research-focus" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionKicker>Research Focus</SectionKicker>
                <h2 className="max-w-lg text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                  Gene × environment interactions, read through metabolism.
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#5d6658]">
                  My research connects lifestyle variation, metabolomics, genomics and computational
                  analysis to understand how lifestyle transitions reshape human metabolism.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-8 top-0 hidden h-full w-px bg-[#20231f]/10 sm:block" />

                <div className="space-y-8">
                  {researchInterests.map((item, index) => (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className={`relative rounded-[2rem] border border-[#20231f]/10 bg-white p-6 shadow-sm sm:ml-16 sm:p-8 ${
                        index === 1 ? "sm:translate-x-8" : ""
                      }`}
                    >
                      <div className="absolute -left-[4.55rem] top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-[#8fa37d]/50 bg-[#fbfaf4] text-xs font-bold text-[#637357] sm:flex">
                        {item.number}
                      </div>

                      <div className="mb-5 flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef0e6] text-[#637357]">
                          {item.icon}
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#20231f]">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-[#4c5348]">
                        {item.text}
                      </p>
                    </motion.article>
                  ))}
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                  <ImageBlock
                    src="images/lifestyle_graphic.png"
                    alt="Lifestyle transition research graphic"
                    className="h-[320px] rounded-[2rem] border border-[#20231f]/10 bg-white p-2 shadow-sm"
                  />
                  <div className="rounded-[2rem] border border-[#20231f]/10 bg-[#f7efd9] p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6f2c]">
                      Overarching Question
                    </p>
                    <p className="mt-4 text-2xl font-semibold leading-snug tracking-[-0.03em] text-[#20231f]">
                      How do unique lifestyles shape the metabolome and what happens to metabolic health during and after lifestyle transitions?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="current-projects" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <SectionKicker>Current Projects</SectionKicker>
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                </h2>
              </div>
              <p className="max-w-md text-base leading-8 text-[#5d6658]">
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-4 lg:grid-rows-[auto_auto]">
              {currentProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group overflow-hidden rounded-[2rem] border border-[#20231f]/10 bg-white shadow-sm ${
                    index === 0
                      ? "lg:col-span-2"
                      : index === 1
                        ? "lg:col-span-2"
                        : "lg:col-span-2"
                  }`}
                >
                  <div className="grid min-h-full gap-0 sm:grid-cols-[0.92fr_1.08fr]">
                    <ImageBlock
                      src={project.image}
                      alt={project.title}
                      className="h-64 rounded-none sm:h-full"
                      imgClassName="transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="flex flex-col justify-between p-7">
                      <div>
                        <div className="mb-5 flex items-center justify-between gap-4">
                          <span className="inline-flex items-center gap-2 rounded-full bg-[#eef0e6] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#637357]">
                            {project.icon}
                            {project.eyebrow}
                          </span>
                        </div>

                        <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em]">
                          {project.title}
                        </h3>
                        <p className="mt-4 text-base leading-8 text-[#4c5348]">{project.text}</p>
                      </div>

                      <div className="mt-8 h-px w-full bg-gradient-to-r from-[#8fa37d] via-[#d9c27c] to-transparent" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="writing" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <SectionKicker>Publications</SectionKicker>
                <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#5d6658]">
              </p>
            </div>

            <div className="divide-y divide-[#20231f]/10 overflow-hidden rounded-[2rem] border border-[#20231f]/10 bg-white shadow-sm">
              {publications.map((item, index) => (
                <article key={item.title} className="grid gap-4 p-6 transition hover:bg-[#fbfaf4] md:grid-cols-[160px_1fr_auto] md:p-8">
                  <div className="flex items-start gap-3">
                    <FileText className="mt-1 h-4 w-4 text-[#8fa37d]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6f2c]">
                      {item.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold leading-snug tracking-[-0.02em] text-[#20231f]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5d6658]">{item.citation}</p>
                    {item.doi && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#9aaa88]/50 bg-[#fbfaf4] px-4 py-2 text-xs font-semibold tracking-[0.04em] text-[#637357] transition hover:border-[#8a6f2c] hover:bg-[#f8f2df] hover:text-[#8a6f2c]"
                        aria-label={`Open DOI ${item.doi}`}
                      >
                        DOI: {item.doi}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>

                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <SectionKicker>Gallery</SectionKicker>
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                  Scenes from Turkana, the awesome people behing the work, and life....
                </h2>
              </div>
              <p className="max-w-md text-base leading-8 text-[#5d6658]">
              </p>
            </div>

            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
              {galleryImages.map((image, index) => (
                <motion.figure
                  key={image.src}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.18) }}
                  className="mb-5 break-inside-avoid overflow-hidden rounded-[2rem] border border-[#20231f]/10 bg-white p-3 shadow-sm"
                >
                  <ImageBlock
                    src={image.src}
                    alt={image.caption}
                    className={`rounded-[1.45rem] ${
                      index % 5 === 0
                        ? "h-[390px]"
                        : index % 3 === 0
                          ? "h-[320px]"
                          : "h-[260px]"
                    }`}
                  />
                  <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-[#5d6658]">
                    {image.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[2.4rem] border border-[#20231f]/10 bg-[#eef0e6] shadow-sm">
              <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="p-8 sm:p-10 lg:p-12">
                  <SectionKicker>Contact</SectionKicker>
                  <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                    Let’s connect
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4c5348]">
                    For collaborations, consultation, science communication
                    or any idea you might have.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <LinkButton href="mailto:bm0211@princeton.edu">
                      <Mail className="h-4 w-4" />
                      Email
                    </LinkButton>
                    <LinkButton
                      href="https://www.linkedin.com/in/benjamin-muhoya/"
                      variant="outline"
                      external
                    >
                      LinkedIn <ExternalLink className="h-4 w-4" />
                    </LinkButton>
                    <LinkButton
                      href="https://orcid.org/0000-0003-2228-3649"
                      variant="outline"
                      external
                    >
                      ORCID <ExternalLink className="h-4 w-4" />
                    </LinkButton>
                    <LinkButton
                      href="https://scholar.google.com/citations?user=0tp-g1cAAAAJ&hl=en&oi=ao"
                      variant="outline"
                      external
                    >
                      Google Scholar <ExternalLink className="h-4 w-4" />
                    </LinkButton>
                  </div>
                </div>

                <div className="relative min-h-[360px] bg-[#dfe4d4] p-4 lg:p-6">
                  <ImageBlock
                    src="images/Handshake.png"
                    alt="Panama canopy"
                    className="h-full min-h-[360px] rounded-[2rem] border border-white/70"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#20231f]/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-[#5d6658] sm:flex-row">
          <p>© 2026 Benjamin Muhoya.</p>
          <p>Context dependency of Metabolism</p>
        </div>
      </footer>
    </div>
  );
}
