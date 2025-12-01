import Header from "@/components/Header";
import Footer from "@/components/Footer";

function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Help Center
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Getting Started
              </h2>
              <p className="text-base text-muted leading-relaxed mb-4">
                Welcome to KampanYES! Our app helps you discover the best deals from your favorite stores all in one place.
              </p>
              <p className="text-base text-muted leading-relaxed">
                Download the app from the App Store or Google Play to get started. Create an account to personalize your experience and never miss exclusive discounts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                How to Use KampanYES
              </h2>
              <ul className="space-y-3 text-base text-muted">
                <li className="flex gap-3">
                  <span className="font-semibold text-brand">1.</span>
                  <span>Browse organized folders to find deals from various stores and categories</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-brand">2.</span>
                  <span>Follow your favorite stores to get notified about new campaigns</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-brand">3.</span>
                  <span>Save deals you're interested in for quick access later</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-brand">4.</span>
                  <span>Share great deals with friends and family</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Is KampanYES free to use?</h3>
                  <p className="text-base text-muted leading-relaxed">
                    Yes! KampanYES is completely free to download and use. We don't charge any subscription fees.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How often are deals updated?</h3>
                  <p className="text-base text-muted leading-relaxed">
                    Deals are updated in real-time as stores publish new campaigns. You'll always see the latest offers available.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Can I use KampanYES offline?</h3>
                  <p className="text-base text-muted leading-relaxed">
                    You can view previously loaded content offline, but you'll need an internet connection to see the latest deals and updates.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Need More Help?
              </h2>
              <p className="text-base text-muted leading-relaxed">
                If you have questions that aren't answered here, please contact our support team at{" "}
                <a href="mailto:support@kampanyes.com" className="text-brand hover:underline">
                  support@kampanyes.com
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

export default HelpPage;
