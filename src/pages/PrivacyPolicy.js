import React, { useEffect } from 'react';

const Section = ({ title, children }) => (
    <div className="mb-10">
        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">{title}</h2>
        <div className="space-y-4 text-gray-400 leading-relaxed font-sans">{children}</div>
    </div>
);

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-sm font-semibold text-primary tracking-wide uppercase mb-4 block font-sans">Legal</span>
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-text-dark mb-6 tracking-tight">
                    Privacy Policy
                </h1>
                <p className="text-gray-500 text-sm mb-16 font-sans">Last updated: August 3, 2026</p>

                <Section title="1. Introduction">
                    <p>
                        Makeship.dev ("Makeship," "we," "us," or "our") is a digital product agency that designs, builds, and
                        markets websites, applications, and advertising campaigns for our clients, including campaigns run on
                        third-party social and advertising platforms such as Meta (Facebook/Instagram), TikTok, Google, LinkedIn,
                        Pinterest, and X. This Privacy Policy explains what information we collect through makeship.dev (the
                        "Site"), how we use it, and the choices you have. It is written to comply with the data-handling and
                        transparency requirements imposed on advertisers and business partners by the platforms listed above,
                        as well as applicable laws including the EU/UK GDPR and the California Consumer Privacy Act (CCPA/CPRA).
                    </p>
                </Section>

                <Section title="2. Information We Collect">
                    <p><strong className="text-text-dark">Information you provide directly:</strong> name, email address, project
                        description, project category/type, budget or timeline details, and any other information you submit
                        through our contact and project intake forms.</p>
                    <p><strong className="text-text-dark">Information collected automatically:</strong> IP address, browser type,
                        device identifiers, pages visited, referral source, and general usage analytics collected via cookies,
                        pixels, and similar tracking technologies (including, where applicable, the Meta Pixel, TikTok Pixel,
                        Google Analytics/Ads tags, and LinkedIn Insight Tag) used to measure and optimize advertising campaigns
                        we run for ourselves and on behalf of clients.</p>
                    <p><strong className="text-text-dark">Information from social platforms:</strong> if you interact with our
                        content, ads, or pages on Meta, TikTok, Google, LinkedIn, or similar platforms, those platforms may share
                        aggregated or pseudonymized engagement data with us in accordance with their own privacy policies and
                        your settings on those platforms.</p>
                </Section>

                <Section title="3. How We Use Information">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Respond to inquiries and provide quotes for our services</li>
                        <li>Deliver, operate, and improve our Site and services</li>
                        <li>Measure, report on, and optimize advertising campaigns (our own and, where authorized, our clients')</li>
                        <li>Communicate updates, proposals, invoices, and project-related correspondence</li>
                        <li>Comply with legal obligations and enforce our Terms of Service</li>
                        <li>Prevent fraud, abuse, and security incidents</li>
                    </ul>
                    <p>We do not sell your personal information. We do not use the personal information collected through this
                        Site to build audiences for advertising on behalf of unrelated third parties without your consent.</p>
                </Section>

                <Section title="4. Cookies & Advertising Technologies">
                    <p>
                        We and our advertising platform partners use cookies, pixels, SDKs, and similar technologies to
                        recognize your browser or device, measure ad performance, and build interest-based advertising
                        audiences (e.g., Custom Audiences, Lookalike Audiences, and conversion tracking on Meta and TikTok).
                        Where required, we obtain consent before loading non-essential cookies or pixels, via a consent banner
                        or equivalent mechanism. You can control cookies through your browser settings and opt out of
                        interest-based advertising using tools such as the{' '}
                        <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Your Online Choices</a>,{' '}
                        <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">DAA WebChoices</a>, or the ad
                        preference settings within Facebook, Instagram, TikTok, Google, and LinkedIn directly.
                    </p>
                </Section>

                <Section title="5. Sharing of Information">
                    <p>We may share information with:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong className="text-text-dark">Service providers</strong> who help us operate our Site, host data, process forms, or manage advertising (e.g., Google, Meta, TikTok, hosting and email providers), bound by confidentiality and data-processing obligations</li>
                        <li><strong className="text-text-dark">Clients</strong>, only where you have engaged with a campaign we run on a client's behalf and consented to that data flow</li>
                        <li><strong className="text-text-dark">Legal and safety authorities</strong>, where required by law, regulation, legal process, or to protect the rights, property, or safety of Makeship, our clients, or others</li>
                        <li><strong className="text-text-dark">Business transfers</strong>, in connection with a merger, acquisition, or sale of assets, subject to this Policy</li>
                    </ul>
                </Section>

                <Section title="6. Data Retention">
                    <p>
                        We retain personal information only for as long as necessary to fulfill the purposes described in this
                        Policy, satisfy legal, accounting, or reporting requirements, and resolve disputes. Contact and project
                        inquiry data is generally retained for up to 24 months from your last interaction unless you request
                        earlier deletion or a longer period is required by law.
                    </p>
                </Section>

                <Section title="7. Your Rights & Choices">
                    <p>
                        Depending on your location, you may have the right to access, correct, delete, or export your personal
                        information, restrict or object to certain processing, and withdraw consent at any time. To exercise
                        any of these rights, contact us at{' '}
                        <a href="mailto:admin@theimplantengine.com" className="text-primary hover:underline">admin@theimplantengine.com</a>.
                        We will respond within the timeframe required by applicable law. You may also lodge a complaint with
                        your local data protection authority.
                    </p>
                </Section>

                <Section title="8. International Data Transfers">
                    <p>
                        We and our service providers may process information in countries other than your own. Where required,
                        we rely on appropriate safeguards (such as Standard Contractual Clauses) to protect information
                        transferred internationally.
                    </p>
                </Section>

                <Section title="9. Children's Privacy">
                    <p>
                        Our Site and services are directed at businesses and are not intended for individuals under the age of
                        16. We do not knowingly collect personal information from children. If you believe a child has provided
                        us with personal information, please contact us so we can delete it.
                    </p>
                </Section>

                <Section title="10. Security">
                    <p>
                        We implement reasonable technical and organizational measures designed to protect personal information
                        against unauthorized access, loss, misuse, or alteration. No method of transmission or storage is
                        completely secure, and we cannot guarantee absolute security.
                    </p>
                </Section>

                <Section title="11. Third-Party Platform Terms">
                    <p>
                        When we advertise, publish, or manage accounts on behalf of ourselves or clients on Meta, TikTok,
                        Google, LinkedIn, Pinterest, or X, that activity is additionally governed by each platform's own terms,
                        including the Meta Advertising Standards and Business Tools Terms, TikTok's Advertising Policies and
                        Business Terms, and equivalent policies on other platforms. This Policy does not limit or override those
                        third-party terms, which apply independently to activity conducted on those platforms.
                    </p>
                </Section>

                <Section title="12. Changes to This Policy">
                    <p>
                        We may update this Privacy Policy from time to time. Material changes will be reflected by an updated
                        "Last updated" date at the top of this page. Continued use of the Site after changes take effect
                        constitutes acceptance of the revised Policy.
                    </p>
                </Section>

                <Section title="13. Contact Us">
                    <p>
                        Questions about this Privacy Policy or our data practices can be directed to{' '}
                        <a href="mailto:admin@theimplantengine.com" className="text-primary hover:underline">admin@theimplantengine.com</a>.
                    </p>
                </Section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
