import Waypoint from "./components/Waypoint";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import ProjectCard from "./components/ProjectCard";
import Marquee from "./components/Marquee";
import TextMarquee from "./components/TextMarquee";
import { projects, skillsMarquee } from "./data";

export default function Home() {
  return (
    <>
      <Waypoint />
      <Nav />

      <main id="top">
        <section className="hero">
          <div className="hero__photo">
  <img 
    src="/images/Face.png" 
  />
</div>
          <div className="hero__copy">
            <h1 className="hero__stack">
              
              <span className="hero__stack-accent">XR Developer / Software engineer</span>
            </h1>
            <p className="hero__lede">
              I&apos;m Gilles Beugnies, a recent XR Developer graduate from
              Howest. I care about one question: how do AI glasses and XR
              make people feel more connected and Productive  not less?
            </p>
            <div className="hero__actions">
              <a href="#work" className="btn btn--primary">
                See the work
              </a>
              <a href="#contact" className="btn btn--ghost">
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <Reveal>
          <section id="about">
            <p className="section-label">
              <span className="coord">01</span>About
            </p>
            <p className="about__text">
              I recently graduated from Howest&apos;s Multimedia &amp;
              Creative Technologies programme, XR Developer track, in
              Kortrijk. Across school and personal projects I&apos;ve built
              spatial interfaces, indoor navigation for accessibility, and
              hands free assistance tools always circling the same idea:
              technology should shrink the distance between people, not add
              another screen between them. I&apos;m currently looking for my
              first role in software engineering, based near Antwerp.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section id="work">
            <p className="section-label">
              <span className="coord">02</span>Projects
            </p>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project}  />
            ))}
          </section>
        </Reveal>

        <Reveal>
          <section id="skills" className="skills-section">
            <p className="section-label">
              <span className="coord">03</span>Skills
            </p>
            <Marquee items={skillsMarquee} speed={32} />
            <Marquee items={[...skillsMarquee].reverse()} speed={38} />
          </section>
        </Reveal>

        <Reveal>
          <section id="contact">
            <p className="section-label">
              <span className="coord">04</span>Contact
            </p>
            <h2 className="contact__title">
              Let&apos;s build the next
              <br />
              layer together.
            </h2>
            <p className="contact__text">
              Looking for XR/AR/software engineering roles near Antwerp. Reach out however&apos;s easiest for you.
            </p>
            <div className="contact__links">
              <a
                href="mailto:gilles.beugnies@outlook.com"
                className="contact__link"
                aria-label="Email Gilles"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/gilles-beugnies/"
                className="contact__link"
                aria-label="LinkedIn profile"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.5 8.5V18M6.5 5.8v.1M10.5 18v-5.3c0-2.3 1.4-3.7 3.3-3.7 2.1 0 3.7 1.3 3.7 4.4V18M10.5 12.2C10.5 10 12 9 13.8 9" />
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </section>
        </Reveal>
      </main>

      <TextMarquee text="let's connect" speed={20} />

      <footer className="footer">
        <p>© 2026 - Gilles Beugnies — XR Developer / Software engineer</p>
      </footer>
    </>
  );
}
