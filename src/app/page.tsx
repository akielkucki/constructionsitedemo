import {
  Header,
  Hero,
  About,
  Services,
  Projects,
  Stats,
  Testimonials,
  CTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
