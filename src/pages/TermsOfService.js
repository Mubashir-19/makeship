import React, { useEffect } from 'react';
import { resetScroll } from '../utils/scroll';

const Section = ({ title, children }) => (
    <div className="mb-10">
        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">{title}</h2>
        <div className="space-y-4 text-gray-400 leading-relaxed font-sans">{children}</div>
    </div>
);

const TermsOfService = () => {
    useEffect(() => {
        resetScroll();
    }, []);

    return (
        <div className="pt-32 pb-24 bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-sm font-semibold text-primary tracking-wide uppercase mb-4 block font-sans">Legal</span>
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-text-dark mb-6 tracking-tight">
                    Terms of Service
                </h1>
                <p className="text-gray-500 text-sm mb-16 font-sans">Last updated: August 3, 2026</p>

                <Section title="1. Agreement to Terms">
                    <p>
                        These Terms of Service ("Terms") govern your access to and use of makeship.dev (the "Site") and the
                        services offered by Makeship.dev ("Makeship," "we," "us," or "our"), including web, mobile, AI, and
                        blockchain product development, and the design, management, and execution of advertising and social
                        media campaigns on platforms such as Meta (Facebook/Instagram), TikTok, Google, LinkedIn, Pinterest, and
                        X. By accessing the Site or engaging our services, you agree to be bound by these Terms.
                    </p>
                </Section>

                <Section title="2. Our Services">
                    <p>
                        Makeship provides digital agency services including but not limited to web and mobile application
                        development, cloud infrastructure, AI/ML and data solutions, blockchain development, marketing website
                        creation, and paid or organic social media advertising and account management performed on behalf of
                        clients. Specific scope, deliverables, timelines, and fees for any engagement are set out in a separate
                        proposal, statement of work, or signed agreement ("Engagement"), which takes precedence over these
                        Terms in the event of a conflict.
                    </p>
                </Section>

                <Section title="3. Client & Third-Party Platform Responsibilities">
                    <p>
                        Where our services include creating, managing, or advertising on client accounts on Meta, TikTok,
                        Google, LinkedIn, Pinterest, X, or similar platforms, the client remains the owner of its business
                        accounts, ad accounts, and associated data unless otherwise agreed in writing. Clients are responsible
                        for ensuring that all content, products, and offers they ask us to promote comply with the advertising
                        policies, community standards, and business terms of the relevant platform (including Meta's
                        Advertising Standards and Community Standards, and TikTok's Community Guidelines and Advertising
                        Policies). Makeship will not knowingly create or run campaigns that violate a platform's policies, and
                        reserves the right to refuse or pause work that we reasonably believe does so.
                    </p>
                </Section>

                <Section title="4. Acceptable Use">
                    <p>You agree not to use the Site or our services to:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Submit false, misleading, or fraudulent information</li>
                        <li>Promote content that is illegal, infringing, defamatory, or that violates any third-party platform's advertising or content policies</li>
                        <li>Attempt to gain unauthorized access to our systems, accounts, or data</li>
                        <li>Interfere with or disrupt the integrity or performance of the Site or related services</li>
                        <li>Use the Site to transmit malware or engage in any activity that could harm Makeship, its clients, or third parties</li>
                    </ul>
                </Section>

                <Section title="5. Intellectual Property">
                    <p>
                        Unless otherwise agreed in a signed Engagement, upon full payment, clients receive ownership of the
                        final deliverables created specifically for them (e.g., custom code, designs, and creative assets),
                        excluding any pre-existing tools, frameworks, libraries, or proprietary methodologies owned by Makeship,
                        which remain our property and are licensed to the client for use in connection with the delivered work.
                        All content on the Site itself, including text, graphics, logos, and the "makeship.dev" name and mark,
                        is owned by Makeship and may not be copied or used without our prior written consent.
                    </p>
                </Section>

                <Section title="6. Fees & Payment">
                    <p>
                        Fees, invoicing schedules, and payment terms for any Engagement are set out in the applicable proposal
                        or agreement. Late payments may result in suspension of services, including pausing of active
                        advertising campaigns, until outstanding amounts are settled. Third-party platform advertising spend
                        (ad budgets paid directly to Meta, TikTok, Google, etc.) is separate from and in addition to our
                        service fees unless expressly stated otherwise.
                    </p>
                </Section>

                <Section title="7. Confidentiality">
                    <p>
                        Each party agrees to keep confidential any non-public business, technical, or financial information
                        disclosed by the other party in connection with an Engagement, and to use such information only for the
                        purposes of that Engagement.
                    </p>
                </Section>

                <Section title="8. Disclaimers">
                    <p>
                        The Site and our services are provided "as is" and "as available" without warranties of any kind,
                        express or implied. We do not guarantee specific advertising results, rankings, conversion rates, or
                        outcomes on any social or advertising platform, as these are influenced by factors outside our control,
                        including changes to third-party platform algorithms, policies, and availability.
                    </p>
                </Section>

                <Section title="9. Limitation of Liability">
                    <p>
                        To the maximum extent permitted by law, Makeship shall not be liable for any indirect, incidental,
                        special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill,
                        arising out of or related to your use of the Site or our services. Our total aggregate liability for
                        any claim arising out of an Engagement shall not exceed the fees paid by you to Makeship for the
                        specific services giving rise to the claim in the three (3) months preceding the claim.
                    </p>
                </Section>

                <Section title="10. Indemnification">
                    <p>
                        You agree to indemnify and hold Makeship harmless from any claims, damages, liabilities, and expenses
                        (including reasonable legal fees) arising from your breach of these Terms, your violation of any
                        third-party platform's policies, or content or instructions you provide to us for use in campaigns or
                        deliverables.
                    </p>
                </Section>

                <Section title="11. Third-Party Platform Terms">
                    <p>
                        Our services may involve creating, publishing to, or managing accounts on third-party platforms.
                        Your and our use of those platforms is separately governed by each platform's own terms of service,
                        developer policies, and advertising policies (including Meta's Terms of Service and Advertising
                        Standards, and TikTok's Terms of Service and Business/Advertising Terms). Nothing in these Terms
                        overrides or modifies those third-party terms.
                    </p>
                </Section>

                <Section title="12. Termination">
                    <p>
                        Either party may terminate an ongoing Engagement in accordance with its termination provisions, or, in
                        the absence of a written Engagement, with 30 days' written notice. Upon termination, you remain
                        responsible for fees incurred for work performed and ad spend committed up to the termination date.
                    </p>
                </Section>

                <Section title="13. Governing Law">
                    <p>
                        These Terms are governed by the laws of the jurisdiction in which Makeship is registered to do
                        business, without regard to conflict-of-law principles, unless a separate Engagement specifies
                        otherwise.
                    </p>
                </Section>

                <Section title="14. Changes to These Terms">
                    <p>
                        We may update these Terms from time to time. Material changes will be reflected by an updated "Last
                        updated" date at the top of this page. Continued use of the Site or our services after changes take
                        effect constitutes acceptance of the revised Terms.
                    </p>
                </Section>

                <Section title="15. Contact Us">
                    <p>
                        Questions about these Terms can be directed to{' '}
                        <a href="mailto:admin@theimplantengine.com" className="text-primary hover:underline">admin@theimplantengine.com</a>.
                    </p>
                </Section>
            </div>
        </div>
    );
};

export default TermsOfService;
