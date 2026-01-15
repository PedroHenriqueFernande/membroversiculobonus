import { useEffect, useState } from "react";
import "./App.css";

const heroTitle =
  '<p>Transforma tu lectura de la <span style="color: #fbb03b;">Biblia</span> en una experiencia poderosa y reveladora con un estudio de los <span style="color: #fbb03b;">cuatro Evangelios</span> que te mostrará cómo las enseñanzas de <span style="color: #fbb03b;">Cristo</span> pueden cambiar tu vida.</p>';

const heroSub =
  'Explicaciones detalladas y fáciles de entender: <strong>Cada versículo de los cuatro evangelios explicado de manera clara, sin complicaciones teológicas,</strong> para que comprendas el mensaje con profundidad por solo: <span style="color: #fbb03b;">$ 3,90<strong> (¡Este valor será convertido a su moneda local en el momento del pago para facilitar su compra!)</strong></span>';

const contentTitle =
  '<p>POR DENTRO DEL <span style="color: #fbb03b;">CONTENIDO:</span></p>';

const contentBody =
  '<p>¡Los 4 Evangelios <span style="color: #fbb03b;">Revelados</span>: Entiende Cada Versículo con Claridad y Profundidad!</p><p><span style="color: #fbb03b;">Tendrás acceso a contextos históricos y culturales: Descubre</span> cómo las palabras de Jesús tenían sentido en su época y cómo siguen siendo relevantes hoy en día, con enriquecedores</p>';

const idealTitle =
  'ES <span style="color:#fbb03b;">IDEAL</span> PARA TI QUE DESEAS:';

const ctaTitle =
  '<p>DICHO ESTO, AHORA TIENES <span style="color: #fbb03b;">2 OPCIONES</span> <span style="color: #aaff00;">(LA 2 ES LA MEJOR)</span>:</p>';

const option1Label = '<p>OPCIÓN <span style="color: #fbb03b;">1</span></p>';
const option1Desc =
  '<p><span style="color: #fbb03b; text-decoration: underline;">BÁSICO:</span></p><p>SOLO MÓDULOS BÁSICOS.</p>';
const option1Attention =
  '<span style="background-color: #ea1d2c; color: white; padding: 5px 5px; line-height: 1.8; border-radius: 5px; box-decoration-break: clone; box-shadow: 0 0 10px rgba(234, 29, 44, 0.8);">¡ATENCIÓN: Tenemos una oferta aún más VENTAJOSA para ti! Mira justo abajo.</span>';

const option2Label = '<p>OPCIÓN <span style="color: #fbb03b;">2</span></p>';
const option2Desc =
  '<p><span style="color: #fbb03b; text-decoration: underline;">COMBO COMPLETO:</span></p><p>TODA LA COLECCIÓN + BONO.</p>';

const option1Features = [
  "Los cuatro libros del Evangelio Explicados Versículo por Versículo.",
  "Material a través del área de miembros.",
  "Acceso por 12 meses",
];

const option2Features = [
  "Los cuatro libros del Evangelio Explicados Versículo por Versículo.",
  "Material a través del área de miembros.",
  "Acceso de por vida",
];

const option2Bonus = [
  "BONO#01 - Comunicación Eficaz en el Púlpito.",
  "BONO#02 - Desarrollo Espiritual del Predicador.",
  "BONOS#03 - Exégesis y Hermenéutica Bíblica.",
  "BONO#04 - Historia de la Predicación Cristiana.",
  "BONO#05 - Predicación Expositiva.",
  "BONO#06 - Predicación Temática.",
  "BONO#07 - Preparación de Sermones Guía Práctica.",
  "Sumando Son: $ 50,00 en contenido.",
  "Soporte 24h Vía E-mail.",
];

const faqItems = [
  {
    question: "¿Dónde recibiré acceso a este material?",
    answer:
      "<p>Todo nuestro material estará disponible a través de una hermosa área de miembros en la plataforma de Cartpanda.</p>",
  },
  {
    question: "¿Los enseñanzas están basadas en la Biblia?",
    answer:
      "<p>Sí, todo nuestro material fue desarrollado por pastores y hombres de Dios que, a través de la revelación dada por el Señor a ellos, desarrollaron este material.</p>",
  },
  {
    question: "¿Para quién está indicado este material?",
    answer:
      "<p>Para Pastores, Líderes de Grupos de Estudio, Seminaristas, Voluntarios y Líderes de Ministerios que tienen la bendita misión de llevar la Palabra de Dios en diversas ocasiones.</p>",
  },
  {
    question: "¿Qué formas de pago se aceptan?",
    answer:
      "<p>Aceptamos todo tipo de tarjetas de crédito y todas las demás formas de pago disponibles en la plataforma Cartpanda.</p>",
  },
  {
    question: "¿Existe alguna garantía?",
    answer:
      "<p>Ofrecemos 7 días de garantía incondicional; si no estás satisfecho, te devolvemos el 100% de tu dinero de manera rápida y sin complicaciones.</p>",
  },
];

const carouselImages = [
  "https://gledigital.com/wp-content/uploads/2025/01/1e.webp",
  "https://gledigital.com/wp-content/uploads/2025/01/4e.webp",
  "https://gledigital.com/wp-content/uploads/2025/01/3e.webp",
  "https://gledigital.com/wp-content/uploads/2025/01/2e.webp",
];

const desireImages = [
  "https://gledigital.com/wp-content/uploads/2025/01/b1.webp",
  "https://gledigital.com/wp-content/uploads/2025/01/b2.webp",
];

const marqueeOne = "DESCUENTO APLICADO ● ENTREGA INMEDIATA ●";
const marqueeTwo = "APROBADO POR MÁS DE 4957 CREYENTES ●";

export default function App() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <header className="top-banner">
        <span>Descuento solo </span>
        <span className="highlight">HOY</span>
        <span> en esta </span>
        <span className="highlight">PÁGINA</span>
      </header>

      <main className="content">
        <section className="hero">
          <div className="hero-spacer" />
          <img
            className="hero-logo reveal from-top"
            data-reveal
            src="https://gledigital.com/wp-content/uploads/2025/01/Logo-Pagina-2.webp"
            alt="Logo Evangelio"
          />
          <div
            className="hero-title reveal from-right"
            data-reveal
            dangerouslySetInnerHTML={{ __html: heroTitle }}
          />
          <img
            className="hero-image reveal from-top"
            data-reveal
            src="https://gledigital.com/wp-content/uploads/2025/01/Principal-2.webp"
            alt="Contenido principal"
          />
          <a className="cta-button hero-cta reveal from-bottom" data-reveal href="#ctacompra">
            VER OPCIONES
          </a>
          <p
            className="hero-sub reveal from-left"
            data-reveal
            dangerouslySetInnerHTML={{ __html: heroSub }}
          />
        </section>

        <section className="marquee marquee--one">
          <div className="marquee-track">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={`marquee-one-${index}`}>{marqueeOne}</span>
            ))}
          </div>
        </section>

        <section className="marquee marquee--two">
          <div className="marquee-track">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={`marquee-two-${index}`}>{marqueeTwo}</span>
            ))}
          </div>
        </section>

        <section className="mockup">
          <div className="arrow reveal from-bottom" data-reveal>
            ↓
          </div>
          <div
            className="section-title reveal from-bottom"
            data-reveal
            dangerouslySetInnerHTML={{ __html: contentTitle }}
          />
          <div className="carousel reveal from-top" data-reveal>
            {carouselImages.map((src) => (
              <img key={src} src={src} alt="Vista del contenido" />
            ))}
          </div>
          <div
            className="section-text reveal from-bottom"
            data-reveal
            dangerouslySetInnerHTML={{ __html: contentBody }}
          />
          <div className="arrow reveal from-bottom" data-reveal>
            ↓
          </div>
          <div
            className="section-title reveal from-bottom"
            data-reveal
            dangerouslySetInnerHTML={{ __html: idealTitle }}
          />
          <div className="desire-images">
            {desireImages.map((src) => (
              <img
                key={src}
                className="reveal from-right"
                data-reveal
                src={src}
                alt="Beneficio"
              />
            ))}
          </div>
        </section>

        <section className="cta" id="ctacompra">
          <div className="arrow reveal from-bottom" data-reveal>
            ↓
          </div>
          <div
            className="cta-title reveal from-right"
            data-reveal
            dangerouslySetInnerHTML={{ __html: ctaTitle }}
          />

          <div className="pricing-grid">
            <article className="price-card price-card--basic reveal from-left" data-reveal>
              <div
                className="price-card__label"
                dangerouslySetInnerHTML={{ __html: option1Label }}
              />
              <div
                className="price-card__desc"
                dangerouslySetInnerHTML={{ __html: option1Desc }}
              />
              <ul className="feature-list">
                {option1Features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="price">$3,90</div>
              <a
                className="cta-button"
                href="https://pay.hotmart.com/T103835240A?off=33hni3wl&checkoutMode=10"
                target="_blank"
                rel="noreferrer"
              >
                QUIERO SOLAMENTE LO BÁSICO
              </a>
              <div
                className="attention"
                dangerouslySetInnerHTML={{ __html: option1Attention }}
              />
            </article>

            <article className="price-card price-card--pro reveal from-right" data-reveal>
              <div className="badge">¡MÁS VENDIDO!</div>
              <div
                className="price-card__label"
                dangerouslySetInnerHTML={{ __html: option2Label }}
              />
              <div
                className="price-card__desc"
                dangerouslySetInnerHTML={{ __html: option2Desc }}
              />
              <ul className="feature-list">
                {option2Features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="divider" />
              <ul className="feature-list">
                {option2Bonus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="price-stack">
                <span className="price-old">$59,9</span>
                <span className="price">$7,90</span>
              </div>
              <a
                className="cta-button cta-button--primary"
                href="https://pay.hotmart.com/T103835240A?off=qt0teogo&checkoutMode=10"
                target="_blank"
                rel="noreferrer"
              >
                QUIERO EL COMBO COMPLETO
              </a>
            </article>
          </div>
        </section>

        <section className="faq">
          <div
            className="section-title"
            dangerouslySetInnerHTML={{
              __html:
                'PREGUNTAS <span style="color: #fbb03b;">FRECUENTES</span>:',
            }}
          />
          <div className="accordion">
            {faqItems.map((item, index) => {
              const isOpen = index === openIndex;
              return (
                <div className="accordion-item" key={item.question}>
                  <button
                    type="button"
                    className="accordion-trigger"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className="accordion-icon">{isOpen ? "–" : "+"}</span>
                  </button>
                  <div
                    className={`accordion-panel ${isOpen ? "open" : ""}`}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              );
            })}
          </div>
          <a className="button-preco" href="#ctacompra">
            Aclaré mis dudas, ahora quiero adquirirlo.
          </a>
        </section>
      </main>

      <footer className="footer">
        © 2025 – Todos los Derechos Reservados.
      </footer>
    </div>
  );
}
