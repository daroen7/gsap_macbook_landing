import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Showcase = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })

  useGSAP(() => {
    if (isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#showcase',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: true,
        }
      })

      timeline
        .to(".mask img", {
          transform: 'scale(1.1)'
        }).to('.content', {opacity: 1, y: 0, ease: "power1.in"})
    }
  }, [isTablet])


  return (
    <section id='showcase'>
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" alt="" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing {" "}
                <span className='text-white'>
                  M4, the next generation of Apple Silicon
                </span>
                . M4 powers
              </p>

              <p>
                it drives Apple Intelligence on iPad Pro, so you can write, cretae, and acomplish more with ease. All in a design that's unbelievably thin. light, and powerful.
              </p>
              <p>
                A-brand-new display engine delivers up to 2.5x faster performance, while a new media engine provides up to 2x faster video processing. And with a new 16-core Neural Engine, M4 can perform up to 15.8 trillion operations per second, making it the most powerful chip ever in an iPad.
              </p>

              <p className='text-primary'>
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-">
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>pro rendering performance than m2</p>
            </div>
            <div className="space-">
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than m2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase