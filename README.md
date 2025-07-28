# Newsora Website

A modern, responsive website for the Newsora news app built with React and Framer Motion.

## Features

- 🎨 Modern, dark-themed design matching the app
- 📱 Fully responsive design
- ⚡ Fast performance with React
- 🎭 Smooth animations with Framer Motion
- 📄 Complete legal pages (Privacy Policy, Terms of Service)
- 🔗 App Store download links

## Setup Instructions

### Prerequisites

1. Install Node.js (version 14 or higher)
2. Install npm or yarn

### Installation

1. Navigate to the website directory:
   ```bash
   cd newsora-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the website

### Deployment to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Build and deploy:
   ```bash
   npm run deploy
   ```

3. The website will be available at: https://ankushachwani.github.io/newsora-website

## File Structure

```
newsora-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── logo files
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── *.css
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── PrivacyPolicy.js
│   │   ├── TermsOfService.js
│   │   └── *.css
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.js
│   └── index.js
└── package.json
```

## Customization

### Updating App Store Links

Update the download links in:
- `src/components/Navbar.js`
- `src/components/Footer.js`
- `src/pages/HomePage.js`

### Modifying Content

- **Homepage content**: Edit `src/pages/HomePage.js`
- **Privacy Policy**: Edit `src/pages/PrivacyPolicy.js`
- **Terms of Service**: Edit `src/pages/TermsOfService.js`

### Styling

- **Global styles**: `src/styles/index.css`
- **Component styles**: Individual CSS files for each component

## Legal Pages

The website includes comprehensive legal pages required for OAuth providers:

### Privacy Policy
- Data collection and usage
- Third-party integrations
- User rights and choices
- Security measures
- International data transfers

### Terms of Service
- User responsibilities
- Acceptable use policy
- Content ownership
- Service limitations
- Dispute resolution

## OAuth Provider Requirements

These legal pages satisfy the requirements for:
- ✅ Facebook Login
- ✅ Google Sign-In
- ✅ Microsoft/Azure AD
- ✅ Apple Sign-In
- ✅ Twitter Login

## Deployment

The website is configured for GitHub Pages deployment with:
- Proper routing setup
- Asset optimization
- SEO meta tags
- Social media previews

## Support

For questions or issues, contact:
- Email: support@newsora.app
- Website: https://ankushachwani.github.io/newsora-website
