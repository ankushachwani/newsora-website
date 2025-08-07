import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../assets/Newsora_Logo_Transparent.png';
import './HomePage.css';

const HomePage = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Insights',
      description: 'Get personalized news summaries and intelligent analysis powered by advanced AI technology.'
    },
    {
      icon: '💬',
      title: 'News Chat',
      description: 'Engage in meaningful conversations about breaking news with our intelligent chat system.'
    },
    {
      icon: '🔍',
      title: 'Smart Discovery',
      description: 'Discover news that matters to you with our advanced recommendation algorithms.'
    },
    {
      icon: '📱',
      title: 'Beautiful Design',
      description: 'Experience news in a clean, modern interface designed for the mobile-first world.'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your data is protected with enterprise-grade security and privacy controls.'
    },
    {
      icon: '⚡',
      title: 'Real-time Updates',
      description: 'Stay ahead with instant notifications and real-time news as it happens.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="hero-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={logoImage} alt="Newsora" className="hero-logo-img animate-float" />
            </motion.div>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The Future of News is Here
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Discover, follow, and chat about news that matters. 
              Experience intelligent news consumption with AI-powered insights, 
              real-time updates, and engaging conversations.
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a 
                href="https://apps.apple.com/app/newsora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-large animate-glow"
              >
                <span>📱</span>
                Download for iOS
              </a>
              <a 
                href="#features" 
                className="btn btn-secondary btn-large"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features section">
        <div className="container">
          <motion.div 
            className="features-header text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Newsora?</h2>
            <p>
              Experience the next generation of news consumption with features 
              designed for the modern reader.
            </p>
          </motion.div>

          <motion.div 
            className="features-grid grid grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <motion.div 
            className="cta-content text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your News Experience?</h2>
            <p>
              Join thousands of users who have already discovered the future of news.
              Download Newsora today and never miss what matters.
            </p>
            <motion.a 
              href="https://apps.apple.com/app/newsora" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🚀</span>
              Get Started Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="app-preview section">
        <div className="container">
          <motion.div 
            className="preview-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="preview-text">
              <h2>Designed for Excellence</h2>
              <p>
                Every pixel crafted with care. Every interaction thoughtfully designed. 
                Newsora brings you a premium news experience that's both beautiful and functional.
              </p>
              <ul className="preview-features">
                <li>✨ Clean, intuitive interface</li>
                <li>🌙 Dark mode optimized</li>
                <li>📊 Personalized analytics</li>
                <li>🔄 Seamless sync across devices</li>
              </ul>
            </div>
            <div className="preview-visual">
              <div className="app-video-container">
                <video 
                  width="300" 
                  height="500" 
                  controls 
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  style={{
                    borderRadius: '30px',
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                  }}
                >
                  <source src={`${process.env.PUBLIC_URL}/app_use.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Deletion Section */}
      <section className="data-deletion section">
        <div className="container">
          <motion.div 
            className="data-deletion-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Need to Delete Your Account?</h2>
            <p>
              If you have a Newsora account and want to delete it, click the button below to submit a deletion request.
            </p>
            <motion.a 
              href="https://forms.gle/pcwUm8K8iGZED9K68" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🗑️ Delete Account
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
