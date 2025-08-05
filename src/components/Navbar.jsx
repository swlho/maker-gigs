import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
        <ul>
            <li>
                <a href="">
                    <img src="public/assets/Makers-Logo.png" alt="" />
                </a>
            </li>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Gigs</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar