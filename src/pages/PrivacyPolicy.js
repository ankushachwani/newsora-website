import React from 'react';
import { motion } from 'framer-motion';
import './LegalPage.css';

const PrivacyPolicy = () => {
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
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: {lastUpdated}</p>
        </motion.div>

        <motion.div 
          className="legal-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <section className="legal-section">
            <h2>Introduction</h2>
            <p>
              Welcome to Newsora. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you use 
              our mobile application and related services.
            </p>
          </section>

          <section className="legal-section">
            <h2>Information We Collect</h2>
            
            <h3>Information You Provide</h3>
            <ul>
              <li><strong>Account Information:</strong> When you create an account using social login (Google, Facebook, Microsoft, Apple, Twitter) or email, we collect your name, email address, and profile information.</li>
              <li><strong>Preferences:</strong> Your news preferences, categories of interest, and app settings.</li>
              <li><strong>Chat Data:</strong> Messages and interactions with our AI-powered news chat feature.</li>
            </ul>

            <h3>Information We Collect Automatically</h3>
            <ul>
              <li><strong>Usage Data:</strong> Information about how you use the app, including articles read, time spent, and features used.</li>
              <li><strong>Device Information:</strong> Device type, operating system, app version, and device identifiers.</li>
              <li><strong>Analytics:</strong> App performance data and crash reports to improve our service.</li>
            </ul>

            <h3>Third-Party Information</h3>
            <ul>
              <li><strong>Social Login:</strong> Basic profile information from your chosen social media platform.</li>
              <li><strong>News Sources:</strong> We aggregate news from various public sources and APIs.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>How We Use Your Information</h2>
            <ul>
              <li><strong>Personalization:</strong> To provide personalized news recommendations and content.</li>
              <li><strong>Communication:</strong> To send you app updates, news alerts, and important notifications.</li>
              <li><strong>Improvement:</strong> To analyze usage patterns and improve our app features.</li>
              <li><strong>AI Features:</strong> To power our AI chat functionality and provide intelligent insights.</li>
              <li><strong>Security:</strong> To detect fraud, abuse, and ensure platform security.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Data Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your data in these limited circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted third-party services that help us operate the app (analytics, cloud storage, authentication).</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and users' safety.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</li>
              <li><strong>Consent:</strong> With your explicit consent for specific purposes.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Third-Party Services</h2>
            <p>Newsora integrates with several third-party services:</p>
            <ul>
              <li><strong>Authentication:</strong> Google, Facebook, Microsoft, Apple, Twitter for social login</li>
              <li><strong>Backend Services:</strong> Supabase for data storage and authentication</li>
              <li><strong>Analytics:</strong> For app performance and usage analytics</li>
              <li><strong>AI Services:</strong> For news chat and content analysis</li>
              <li><strong>News APIs:</strong> For aggregating news content from various sources</li>
            </ul>
            <p>These services have their own privacy policies, and we encourage you to review them.</p>
          </section>

          <section className="legal-section">
            <h2>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data, including:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication requirements</li>
              <li>Secure cloud infrastructure</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2>Your Rights and Choices</h2>
            <ul>
              <li><strong>Access:</strong> You can access and review your personal information in the app settings.</li>
              <li><strong>Correction:</strong> You can update or correct your information at any time.</li>
              <li><strong>Deletion:</strong> You can request deletion of your account and associated data.</li>
              <li><strong>Portability:</strong> You can request a copy of your data in a portable format.</li>
              <li><strong>Opt-out:</strong> You can opt out of notifications and certain data collection practices.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Children's Privacy</h2>
            <p>
              Newsora is not intended for users under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If we discover that we have collected 
              such information, we will delete it immediately.
            </p>
          </section>

          <section className="legal-section">
            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your data in accordance with 
              applicable privacy laws.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any material 
              changes through the app or by email. Your continued use of the app after changes 
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <ul>
              <li>Email: privacy@newsora.app</li>
              <li>Website: https://ankushachwani.github.io/newsora-website</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
