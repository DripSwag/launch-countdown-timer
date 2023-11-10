import background from '../assets/pattern-hills.svg'
import stars from '../assets/bg-stars.svg'
import FlipCalendar from './components/FlipCalendar.js'

function App() {
  return (
    <main className='h-screen w-screen bg-gradient-to-b from-[#1e1e28] to-[#251D2C] to-70%'>
      <div className='max-w-[1440px] w-1/2 h-[40%] relative left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/3 z-50 flex items-center flex-col gap-16'>
        <h1 className='font-redhat text-lg text-white tracking-[0.5rem]'>WE&apos;RE LAUNCHING SOON</h1>
        <div className='grid grid-cols-4 w-full h-full gap-4'>
          <FlipCalendar text='Days' />
          <FlipCalendar text='Hours' />
          <FlipCalendar text='Minutes' />
          <FlipCalendar text='Seconds' />
        </div>
      </div>
      <img src={stars} className='w-screen h-screen fixed z-0 top-0'></img>
      <img src={background} className='w-full fixed bottom-0 z-10'></img>
    </main>
  )
}

export default App
