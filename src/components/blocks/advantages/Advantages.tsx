import style from './advantages.module.scss'
// Components
import Tabs from '@/components/ui/tabs/Tabs'
import Tab from '@/components/ui/tabs/Tab'

export default function Advantages() {
  return (
    <div>
      <h2 className="header-2">NASA’s mission</h2>
      <Tabs>
        <>
          <Tab header="Science">
            <div className={style['advantage']}>
              <div className={style['advantage__text']}>
                Peering into the creation of the universe and traversing Mars
                <br />
                <br />
                The James Webb Space Telescope is an orbiting infrared
                observatory that will look to the beginning of time and to hunt
                for the unobserved formation of the first galaxies, as well as
                to look inside dust clouds where stars and planetary systems are
                forming today.
                <br />
                <br />
                Much closer to home, NASA has sent five robotic vehicles, called
                rovers, to Mars. Rovers help scientists in their quest to
                understand what different parts of the planet are made of.
              </div>
              <img
                src="/src/assets/images/main-page/science.jpg"
                className={style['advantage__image']}
                width="350"
                height="350"
              />
            </div>
          </Tab>

          <Tab header="Human">
            <div className={style['advantage']}>
              <div className={style['advantage__text']}>
                Rotational crews have been living in low Earth orbit
                continuously aboard the International Space Station since 2000.
                Located about 250 miles above Earth, the space station is a
                full-time microgravity laboratory. On behalf of researchers
                worldwide, station crews conduct experiments only possible in
                the unique conditions of space, observe Earth as a system, and
                test new technologies that ultimately will help send humans far
                beyond Earth.
                <br />
                <br />
                Artemis missions will send humans to the Moon for long-term
                scientific exploration and discovery. Artemis I was an uncrewed
                flight test that traveled 40,000 miles past the far side of the
                Moon and back to Earth to validate the Space Launch System
                rocket, Orion spacecraft, and other key systems. Artemis II will
                be the first flight test with astronauts to validate crew life
                support systems, and Artemis III will mark the beginning of
                humanity’s return to the lunar surface.
              </div>
              <img
                src="/src/assets/images/main-page/human.jpg"
                className={style['advantage__image']}
                width="350"
                height="350"
              />
            </div>
          </Tab>

          <Tab header="Aeronautics">
            <div className={style['advantage']}>
              <div className={style['advantage__text']}>
                NASA’s aeronautical innovators are leading a government-industry
                team to collect data that could make supersonic flight over land
                possible, dramatically reducing travel time in the United States
                or anywhere in the world.
              </div>
              <img
                src="/src/assets/images/main-page/aero.jpg"
                className={style['advantage__image']}
                width="350"
                height="350"
              />
            </div>
          </Tab>

          <Tab header="Technology">
            <div className={style['advantage']}>
              <div className={style['advantage__text']}>
                Technology drives exploration and the space economy. Technology
                demonstrations enable NASA to mature the cutting-edge,
                laboratory-proven technologies and new capabilities that will
                transform future science and space exploration goals. Through
                these missions, we conduct ground-based or in-space testing to
                determine the feasibility of technologies and systems for use in
                NASA missions, for other government agencies, and with the
                commercial space industry
              </div>
              <img
                src="/src/assets/images/main-page/technologies.jpg"
                className={style['advantage__image']}
                width="350"
                height="350"
              />
            </div>
          </Tab>
        </>
      </Tabs>
    </div>
  )
}
