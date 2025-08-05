import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles["hero"]}>
        <img src="src/assets/hero.jpg" alt="" />
        <h1>What Have You Done Today To Make You Feel Proud?</h1>
    </div>
  )
}

export default Hero