# Ishan Shivankar - Professional Portfolio

A modern, responsive portfolio website showcasing the skills, experience, and achievements of Ishan Shivankar, a technology professional specializing in Machine Learning, Computer Vision, and Blockchain Development.

## 🌟 Features

### Frontend
- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling, navigation highlighting, and engaging animations
- **Performance Optimized**: Fast loading with optimized assets and lazy loading
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

### Backend (Serverless)
- **Netlify Functions**: Serverless backend for contact form processing
- **Email Integration**: Automated email sending with nodemailer
- **Form Validation**: Server-side validation for contact form submissions
- **Auto-Reply**: Automatic response emails to form submissions
- **Security**: CORS headers and input sanitization

### Sections
1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Professional background and key statistics
3. **Projects**: Showcase of technical projects with technologies used
4. **Experience**: Professional timeline with achievements
5. **Skills**: Interactive skill bars showing proficiency levels
6. **Achievements**: Awards, certifications, and notable accomplishments
7. **Contact**: Working contact form with serverless backend

## 🚀 Live Demo

Visit the live portfolio: [https://ishan-shivankar.netlify.app](https://ishan-shivankar.netlify.app)

## 🛠 Technologies Used

### Frontend
- **HTML5**: Semantic markup with modern best practices
- **CSS3**: Custom styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Modern JavaScript with async/await and modules
- **Font Awesome**: Icon library for professional icons
- **Google Fonts**: Inter font family for modern typography

### Backend
- **Node.js**: Runtime environment for serverless functions
- **Netlify Functions**: Serverless backend infrastructure
- **Nodemailer**: Email sending functionality
- **Environment Variables**: Secure configuration management

### Deployment
- **Netlify**: Continuous deployment and hosting
- **Git**: Version control
- **GitHub**: Repository hosting

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ishan-shivankar/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Visit `http://localhost:8888` to view the portfolio

### Alternative Local Server
If you prefer a simple HTTP server:
```bash
npm run serve
```
Then visit `http://localhost:8080`

## 🚀 Deployment

### Deploy to Netlify

#### Method 1: Continuous Deployment (Recommended)
1. Fork or clone this repository to your GitHub account
2. Log in to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set the following build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.`
6. Add environment variables in Netlify dashboard:
   - `EMAIL_USER`: Your email address
   - `EMAIL_PASS`: Your email app password
7. Deploy!

#### Method 2: Manual Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to draft URL
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Environment Variables Setup

For the contact form to work, you need to set up email credentials:

1. **Gmail Setup** (recommended):
   - Enable 2-factor authentication on your Gmail account
   - Generate an app password: [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Use your Gmail address as `EMAIL_USER`
   - Use the generated app password as `EMAIL_PASS`

2. **Other Email Providers**:
   - Update the `service` field in `netlify/functions/contact.js`
   - Refer to [Nodemailer documentation](https://nodemailer.com/smtp/well-known/) for other providers

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── script.js           # Main JavaScript file
├── netlify/
│   └── functions/
│       └── contact.js      # Serverless contact form handler
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot instructions
├── .vscode/
│   └── tasks.json          # VS Code tasks
├── netlify.toml            # Netlify configuration
├── package.json            # Dependencies and scripts
├── README.md               # Project documentation
└── .env.example            # Environment variables template
```

## ✨ Customization

### Personal Information
Update the following files with your personal information:

1. **index.html**: 
   - Change name, title, and contact information
   - Update project descriptions and links
   - Modify experience timeline
   - Add your achievements and certifications

2. **css/style.css**:
   - Customize colors in CSS variables
   - Adjust typography and spacing
   - Modify animations and transitions

3. **js/script.js**:
   - Update email address in contact form
   - Customize animations and interactions

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `css/style.css`
3. Add any JavaScript functionality in `js/script.js`
4. Update navigation menu if needed

### Changing Colors
The main color scheme uses:
- Primary: `#2563eb` (Blue)
- Accent: `#ffd700` (Gold)
- Background: `#f8fafc` (Light gray)
- Text: `#333` (Dark gray)

You can easily change these by updating the CSS custom properties.

## 🔧 Features in Detail

### Contact Form
- **Frontend Validation**: Real-time form validation
- **Backend Processing**: Serverless function handles form submission
- **Email Notifications**: Sends email to portfolio owner
- **Auto-Reply**: Automatic thank you email to sender
- **Security**: Input sanitization and CORS protection

### Animations
- **Scroll Animations**: Elements animate in as you scroll
- **Skill Bars**: Animated progress bars for skills
- **Hover Effects**: Interactive hover states throughout
- **Smooth Scrolling**: Smooth navigation between sections

### Performance
- **Optimized CSS**: Efficient selectors and minimal reflows
- **Lazy Loading**: Images load as needed
- **Debounced Events**: Optimized scroll and resize handlers
- **Minification Ready**: Code structure ready for minification

## 🐛 Troubleshooting

### Common Issues

1. **Contact form not working**:
   - Check environment variables are set correctly
   - Verify email credentials
   - Check Netlify function logs

2. **Styles not loading**:
   - Check file paths are correct
   - Ensure CSS file is properly linked
   - Check for CSS syntax errors

3. **JavaScript errors**:
   - Check browser console for errors
   - Verify all JavaScript files are loaded
   - Check for typos in function names

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub or contact:

- **Email**: ishan.shivankar@email.com
- **LinkedIn**: [Ishan Shivankar](https://linkedin.com/in/ishan-shivankar)
- **GitHub**: [@ishan-shivankar](https://github.com/ishan-shivankar)

## 🙏 Acknowledgments

- Font Awesome for the icon library
- Google Fonts for the typography
- Netlify for hosting and serverless functions
- The open-source community for inspiration and tools

---

**Built with ❤️ by Ishan Shivankar**
#   P o r t f o l i o _  
 