import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles["footer"]}>
        <ul id="footer-links">
            <li className="footer-link"><a href="">Help</a></li>
            <li className="footer-link"><a href="">Careers</a></li>
            <li className="footer-link"><a href="">Privacy</a></li>
        </ul>
        <a href="/"><img id="footer-logo" src="src/assets/Makers-Logo.png"/></a>
        <p>© 2025</p>
    </div>
  )
}

export default Footer