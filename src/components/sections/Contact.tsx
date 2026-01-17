import { BlurFade } from "@/components/magicui/blur-fade";
import { ShineBorder } from "@/components/magicui/shine-border";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const contacts = [
  {
    title: "Email corporativo",
    description: "Contacto directo para oportunidades profesionales.",
    value: "ricardocarremar@icloud.com",
    href: "mailto:ricardocarremar@icloud.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    description: "Actividad profesional, certificaciones y networking.",
    value: "linkedin.com/in/ricardo-carreno-939b78338",
    href: "https://www.linkedin.com/in/ricardo-carreno-939b78338",
    icon: Linkedin,
  },
  {
    title: "GitHub",
    description: "Repositorios, contribuciones y proyectos activos.",
    value: "github.com/RIKICARRE",
    href: "https://github.com/RIKICARRE",
    icon: Github,
  },
];

const ContactSection = () => (
  <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-12">
    <BlurFade>
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Contacto</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-muted-foreground">
          ¿Hablamos? Estas son mis vías principales para colaborar, compartir propuestas o explorar oportunidades.
        </p>
      </div>
    </BlurFade>

    <div className="grid gap-6 md:grid-cols-3">
      {contacts.map((contact, index) => (
        <motion.a
          key={contact.title}
          href={contact.href}
          target={contact.href.startsWith("mailto") ? undefined : "_blank"}
          rel={contact.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1"
        >
          <ShineBorder shineColor={["#22C55E", "#3B82F6", "#EC4899"]} borderWidth={1} />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/10" />
          </div>
          <div className="relative flex flex-col gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <contact.icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{contact.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{contact.description}</p>
            </div>
            <span className="text-sm font-medium text-foreground/80">{contact.value}</span>
          </div>
        </motion.a>
      ))}
    </div>
  </div>
);

export default ContactSection;
