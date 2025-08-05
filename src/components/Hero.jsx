import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles["hero"]}>
        <img src="/hero.jpg" alt="" />
        <h1>What Have You Done Today To Make You Feel Proud?</h1>
    </div>
  )
}

export default Hero