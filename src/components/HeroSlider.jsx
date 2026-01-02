import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    title: "Limpiezas integrales con atención personalizada",
    desc: "Limpiezas puntuales y a medida. Llevamos nuestros productos y materiales. Trabajamos con responsabilidad, respeto y dedicación.",
    img: "/ventanales.png",
    cta: { text: "Pedir presupuesto", href: "#contacto" },
  },
  {
    title: "Prolijidad, confianza y coordinación fácil",
    desc: "Hogares, oficinas, limpiezas profundas y lo que necesites. Nos adaptamos a cada caso.",
    img: "/ventanales.png",
    cta: { text: "Ver servicios", href: "#servicios" },
  },
  {
    title: "Emprendimiento familiar en Colonia del Sacramento",
    desc: "Trabajamos con responsabilidad, respeto y dedicación. Productos incluidos y atención personalizada.",
    img: "/ventanales.png",
    cta: { text: "Contactar", href: "#contacto" },
  },
];

export default function HeroSlider({ whatsappUrl }) {
  return (
    <section className="hero hero-slider" id="inicio">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        speed={650}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.title}>
            <div
              className="hero__slide"
              style={{
                backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.65), rgba(37, 99, 235, 0.65)), url(${s.img})`,
              }}
            >
              <div className="container hero__content">
                <motion.h1
                  key={s.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {s.title}
                </motion.h1>

                <motion.p
                  key={s.desc}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 }}
                  className="hero__desc"
                >
                  {s.desc}
                </motion.p>

                <motion.a
                  className="btn primary"
                  href={s.cta.href === "#contacto" ? whatsappUrl : s.cta.href}
                  target={s.cta.href === "#contacto" ? "_blank" : undefined}
                  rel={s.cta.href === "#contacto" ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
                >
                  {s.cta.text}
                </motion.a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

