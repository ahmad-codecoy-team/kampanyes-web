import Header from "@/components/Header";
import Footer from "@/components/Footer";

function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>

          <p className="text-sm text-muted mb-8">Last updated: January 1, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-base text-muted leading-relaxed">
                By accessing and using KampanYES ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Use License
              </h2>
              <p className="text-base text-muted leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of KampanYES for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-base text-muted ml-6">
                <li className="list-disc">Modify or copy the materials</li>
                <li className="list-disc">Use the materials for any commercial purpose</li>
                <li className="list-disc">Attempt to decompile or reverse engineer any software contained in KampanYES</li>
                <li className="list-disc">Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. User Accounts
              </h2>
              <p className="text-base text-muted leading-relaxed mb-4">
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
              <p className="text-base text-muted leading-relaxed">
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Content and Intellectual Property
              </h2>
              <p className="text-base text-muted leading-relaxed">
                All content displayed on KampanYES, including but not limited to promotional materials, images, logos, and text, is the property of their respective owners. KampanYES does not claim ownership of third-party content but aggregates publicly available promotional information for user convenience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Disclaimer
              </h2>
              <p className="text-base text-muted leading-relaxed">
                The materials on KampanYES are provided on an 'as is' basis. KampanYES makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Limitations
              </h2>
              <p className="text-base text-muted leading-relaxed">
                In no event shall KampanYES or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use KampanYES.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Modifications
              </h2>
              <p className="text-base text-muted leading-relaxed">
                KampanYES may revise these Terms of Service at any time without notice. By using the Service, you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Governing Law
              </h2>
              <p className="text-base text-muted leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Contact Information
              </h2>
              <p className="text-base text-muted leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@kampanyes.com" className="text-brand hover:underline">
                  legal@kampanyes.com
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

export default TermsPage;
