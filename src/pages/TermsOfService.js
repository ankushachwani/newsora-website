import React from 'react';
import { motion } from 'framer-motion';
import './LegalPage.css';

const TermsOfService = () => {
  const lastUpdated = "January 28, 2025";

  return (
    <div className="legal-page">
      <div className="container">
        <motion.div 
          className="legal-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: {lastUpdated}</p>
        </motion.div>

        <motion.div 
          className="legal-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <section className="legal-section">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using the Newsora mobile application ("App"), you agree to be bound by these 
              Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
            </p>
          </section>

          <section className="legal-section">
            <h2>Description of Service</h2>
            <p>
              Newsora is a news aggregation and AI-powered news experience application that provides:
            </p>
            <ul>
              <li>Curated news content from various sources</li>
              <li>AI-powered news insights and analysis</li>
              <li>Interactive chat features for news discussion</li>
              <li>Personalized news recommendations</li>
              <li>Real-time news updates and notifications</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>User Accounts and Registration</h2>
            <h3>Account Creation</h3>
            <ul>
              <li>You may create an account using social login (Google, Facebook, Microsoft, Apple, Twitter) or email registration</li>
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must be at least 13 years old to use the App</li>
            </ul>

            <h3>Account Responsibilities</h3>
            <ul>
              <li>You are responsible for all activities under your account</li>
              <li>You must notify us immediately of any unauthorized use</li>
              <li>You may not share your account credentials with others</li>
              <li>You may not create multiple accounts or impersonate others</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>User Conduct and Acceptable Use</h2>
            <p>You agree to use the App responsibly and not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the App's functionality</li>
              <li>Use the App for commercial purposes without permission</li>
              <li>Spread misinformation or false news content</li>
              <li>Harass, abuse, or harm other users</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Content and News Sources</h2>
            <h3>News Content</h3>
            <ul>
              <li>News content is aggregated from various third-party sources</li>
              <li>We do not create or own the news content displayed</li>
              <li>Content accuracy is the responsibility of the original sources</li>
              <li>We may moderate or remove content that violates our policies</li>
            </ul>

            <h3>User-Generated Content</h3>
            <ul>
              <li>You retain ownership of content you create (comments, chat messages)</li>
              <li>You grant us a license to use, display, and distribute your content</li>
              <li>You are responsible for the accuracy and legality of your content</li>
              <li>We may remove content that violates these Terms</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>AI Features and Chat</h2>
            <p>Our AI-powered features include:</p>
            <ul>
              <li>Automated news analysis and insights</li>
              <li>Personalized content recommendations</li>
              <li>Interactive chat functionality</li>
              <li>Content summarization and categorization</li>
            </ul>
            <p>
              AI responses are generated automatically and may not always be accurate. 
              You should verify important information from authoritative sources.
            </p>
          </section>

          <section className="legal-section">
            <h2>Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Our collection and use of your personal information 
              is governed by our Privacy Policy, which is incorporated into these Terms by reference. 
              By using the App, you consent to our data practices as described in the Privacy Policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>Intellectual Property Rights</h2>
            <h3>Our Rights</h3>
            <ul>
              <li>The App, its design, and functionality are our intellectual property</li>
              <li>You may not copy, modify, or distribute our proprietary content</li>
              <li>Our trademarks and logos are protected by intellectual property laws</li>
            </ul>

            <h3>Third-Party Rights</h3>
            <ul>
              <li>News content belongs to the respective publishers and sources</li>
              <li>We respect intellectual property rights and respond to valid takedown requests</li>
              <li>Users must respect third-party intellectual property rights</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Disclaimers and Limitations</h2>
            <h3>Service Availability</h3>
            <ul>
              <li>The App is provided "as is" without warranties of any kind</li>
              <li>We do not guarantee uninterrupted or error-free service</li>
              <li>We may modify, suspend, or discontinue features at any time</li>
            </ul>

            <h3>Content Accuracy</h3>
            <ul>
              <li>We do not verify the accuracy of third-party news content</li>
              <li>AI-generated insights may contain errors or inaccuracies</li>
              <li>You should verify important information independently</li>
            </ul>

            <h3>Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect, 
              incidental, special, or consequential damages arising from your use of the App.
            </p>
          </section>

          <section className="legal-section">
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold us harmless from any claims, damages, or expenses 
              arising from your use of the App, violation of these Terms, or infringement of 
              any rights of another party.
            </p>
          </section>

          <section className="legal-section">
            <h2>Termination</h2>
            <h3>By You</h3>
            <ul>
              <li>You may delete your account and stop using the App at any time</li>
              <li>Account deletion will remove your personal data according to our Privacy Policy</li>
            </ul>

            <h3>By Us</h3>
            <ul>
              <li>We may suspend or terminate your account for violation of these Terms</li>
              <li>We may discontinue the App with reasonable notice</li>
              <li>Termination does not affect rights and obligations that arose before termination</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of [Your Jurisdiction]. Any disputes arising 
              from these Terms or the App will be resolved through binding arbitration or in 
              the courts of [Your Jurisdiction].
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes 
              through the App or by email. Your continued use of the App after changes constitutes 
              acceptance of the updated Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li>Email: legal@newsora.app</li>
              <li>Website: https://ankushachwani.github.io/newsora-website</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining 
              provisions will continue to be valid and enforceable.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
