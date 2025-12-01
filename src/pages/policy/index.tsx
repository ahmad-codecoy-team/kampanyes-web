// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// function PolicyPage() {
//   return (
//     <div className="min-h-screen flex flex-col bg-background">
//       <Header />

//       <main className="flex-1 pt-24">
//         <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
//           <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//             Privacy Policy
//           </h1>

//           <p className="text-sm text-muted mb-8">Last updated: January 1, 2025</p>

//           <div className="space-y-8">
//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">
//                 1. Introduction
//               </h2>
//               <p className="text-base text-muted leading-relaxed">
//                 Welcome to KampanYES. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our app and tell you about your privacy rights and how the law protects you.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">
//                 2. Information We Collect
//               </h2>
//               <p className="text-base text-muted leading-relaxed mb-4">
//                 We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
//               </p>
//               <ul className="space-y-2 text-base text-muted ml-6">
//                 <li className="list-disc"><strong className="text-foreground">Identity Data:</strong> includes first name, last name, username or similar identifier</li>
//                 <li className="list-disc"><strong className="text-foreground">Contact Data:</strong> includes email address and telephone numbers</li>
//                 <li className="list-disc"><strong className="text-foreground">Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, operating system and platform</li>
//                 <li className="list-disc"><strong className="text-foreground">Usage Data:</strong> includes information about how you use our app and services</li>
//                 <li className="list-disc"><strong className="text-foreground">Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and your communication preferences</li>
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">
//                 3. How We Use Your Information
//               </h2>
//               <p className="text-base text-muted leading-relaxed mb-4">
//                 We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
//               </p>
//               <ul className="space-y-2 text-base text-muted ml-6">
//                 <li className="list-disc">To provide and maintain our Service</li>
//                 <li className="list-disc">To notify you about changes to our Service</li>
//                 <li className="list-disc">To allow you to participate in interactive features when you choose to do so</li>
//                 <li className="list-disc">To provide customer support</li>
//                 <li className="list-disc">To gather analysis or valuable information so that we can improve our Service</li>
//                 <li className="list-disc">To monitor the usage of our Service</li>
//                 <li className="list-disc">To detect, prevent and address technical issues</li>
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">
//                 4. Data Security
//               </h2>
//               <p className="text-base text-muted leading-relaxed">
//                 We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">
//                 5. Data Retention
//               </h2>
//               <p className="text-base text-muted leading-relaxed">
//                 We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">
//                 6. Your Legal Rights
//               </h2>
//               <p className="text-base text-muted leading-relaxed mb-4">
//                 Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
//               </p>
//               <ul className="space-y-2 text-base text-muted ml-6">
//                 <li className="list-disc">Request access to your personal data</li>
//                 <li className="list-disc">Request correction of your personal data</li>
//                 <li className="list-disc">Request erasure of your personal data</li>
//                 <li className="list-disc">Object to processing of your personal data</li>
//                 <li className="list-disc">Request restriction of processing your personal data</li>
//                 <li className="list-disc">Request transfer of your personal data</li>
//                 <li className="list-disc">Right to withdraw consent</li>
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">
//                 7. Third-Party Links
//               </h2>
//               <p className="text-base text-muted leading-relaxed">
//                 Our app may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">
//                 8. Cookies
//               </h2>
//               <p className="text-base text-muted leading-relaxed">
//                 We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">
//                 9. Changes to This Privacy Policy
//               </h2>
//               <p className="text-base text-muted leading-relaxed">
//                 We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-foreground mb-4">
//                 10. Contact Us
//               </h2>
//               <p className="text-base text-muted leading-relaxed">
//                 If you have any questions about this Privacy Policy, please contact us at{" "}
//                 <a href="mailto:privacy@kampanyes.com" className="text-brand hover:underline">
//                   privacy@kampanyes.com
//                 </a>
//               </p>
//             </section>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default PolicyPage;


function PolicyPage() {
    return (
        <div>
            Policy Page
        </div>
    )
}

export default PolicyPage;
