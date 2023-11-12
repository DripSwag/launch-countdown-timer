import background from './assets/pattern-hills.svg'
import stars from './assets/bg-stars.svg'
import FlipCalendar from './components/FlipCalendar.js'
import SocialButton from './components/SocialButton.js'
import Facebook from './logos/Facebook.js'
import Instagram from './logos/Instagram.js'
import Pinterest from './logos/Pinterest.js'
import { useEffect, useState } from 'react'

interface Time {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeDifference(): Time {
  const now = new Date()
  const next = new Date()
  next.setDate(next.getDate() + (8 - next.getDay()))
  next.setHours(0, 0, 0)
  const time = next.getTime() - now.getTime()
  const days = Math.floor(time / (1000 * 60 * 60 * 24)) % 7
  const hours = Math.floor(time / (1000 * 60 * 60)) % 24
  const minutes = Math.floor(time / (1000 * 60)) % 60
  const seconds = Math.floor(time / 1000) % 60
  return { days, hours, minutes, seconds }
}

function App() {
  const [time, setTime] = useState<Time>(getTimeDifference())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeDifference())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <main className='h-screen w-screen bg-gradient-to-b from-[#1e1e28] to-[#251D2C] to-70%'>
      <div className='max-w-2xl h-[40%] relative left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/3 z-50 flex items-center flex-col gap-16 px-8'>
        <h1 className='font-redhat text-lg text-white tracking-[0.5rem] text-center'>
          WE&apos;RE LAUNCHING SOON
        </h1>
        <div className='grid grid-cols-4 w-full h-full gap-4'>
          <FlipCalendar text='Days' value={time.days} />
          <FlipCalendar text='Hours' value={time.hours} />
          <FlipCalendar text='Minutes' value={time.minutes} />
          <FlipCalendar text='Seconds' value={time.seconds} />
        </div>
      </div>
      <div className='absolute left-1/2 w-max bottom-[7%] z-20 flex gap-4 -translate-x-1/2'>
        <SocialButton platform='Facebook'>
          <Facebook />
        </SocialButton>
        <SocialButton platform='Pinterest'>
          <Pinterest />
        </SocialButton>
        <SocialButton platform='Instagram'>
          <Instagram />
        </SocialButton>
      </div>
      <img
        src={stars}
        className='w-screen h-screen fixed z-0 top-0'
        alt=''
      ></img>
      <img
        src={background}
        className='w-full fixed bottom-0 z-10 min-h-[150px]'
        alt=''
      ></img>
    </main>
  )
}

export default App
