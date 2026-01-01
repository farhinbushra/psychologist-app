import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>MentalHealthCare</h3>
        <p>Supporting your mental health, every step of the way.</p>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>

        <small>© {new Date().getFullYear()} MindCare. All rights reserved.</small>
      </div>
      
    </footer>
  );
}

export default Footer;
