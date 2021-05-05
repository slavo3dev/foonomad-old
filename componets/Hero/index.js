import Image from 'next/image'
import "./hero.module.css"

export function Hero() {

    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/profile.jpeg"
                    alt="Profile Image"
                    width={300}
                    height={300} />
                <h1>Wellocome to foo(nomad)</h1>
                <p>
                    I blog about digital nomad life style!! 
                </p>
          </div>
        </section>
    )
}

