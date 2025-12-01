import Header from "@/components/Header";
import Footer from "@/components/Footer";

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About KampanYES
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-base text-muted leading-relaxed mb-4">
                At KampanYES, we believe shopping should be exciting, not overwhelming. Our mission is to make it easy for people to discover the best deals from their favorite stores, all in one convenient place.
              </p>
              <p className="text-base text-muted leading-relaxed">
                We're passionate about helping consumers save money and time by organizing promotional campaigns into easy-to-browse folders, so you never miss out on a great deal again.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                What We Do
              </h2>
              <p className="text-base text-muted leading-relaxed mb-4">
                KampanYES aggregates promotional campaigns, special offers, and exclusive discounts from a wide variety of retailers and brands. Our platform organizes these deals into intuitive folders based on categories, making it simple to find exactly what you're looking for.
              </p>
              <p className="text-base text-muted leading-relaxed">
                Whether you're hunting for fashion deals, electronics discounts, or grocery savings, KampanYES brings them all together in one user-friendly app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Why Choose KampanYES?
              </h2>
              <ul className="space-y-3 text-base text-muted">
                <li className="flex gap-3">
                  <span className="text-brand font-semibold">•</span>
                  <span><strong className="text-foreground">Organized folders:</strong> Browse deals by category, store, or type</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand font-semibold">•</span>
                  <span><strong className="text-foreground">Real-time updates:</strong> Get instant notifications about new campaigns</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand font-semibold">•</span>
                  <span><strong className="text-foreground">Follow favorites:</strong> Keep track of your preferred stores and never miss their offers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand font-semibold">•</span>
                  <span><strong className="text-foreground">Easy sharing:</strong> Share great deals with friends and family instantly</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand font-semibold">•</span>
                  <span><strong className="text-foreground">Completely free:</strong> No subscriptions, no hidden fees</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our Team
              </h2>
              <p className="text-base text-muted leading-relaxed">
                We're a dedicated team of developers, designers, and deal enthusiasts who understand the value of smart shopping. We're constantly working to improve KampanYES and add new features that make your deal-hunting experience even better.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-base text-muted leading-relaxed">
                Have questions, feedback, or partnership inquiries? We'd love to hear from you!
              </p>
              <p className="text-base text-muted leading-relaxed mt-4">
                Email us at{" "}
                <a href="mailto:hello@kampanyes.com" className="text-brand hover:underline">
                  hello@kampanyes.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
