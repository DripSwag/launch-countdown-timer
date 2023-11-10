import background from '../assets/pattern-hills.svg'
import stars from '../assets/bg-stars.svg'

function App() {
  return (
    <main className='h-screen w-screen bg-gradient-to-b from-[#1e1e28] to-[#251D2C] to-70%'>
      <div className='max-w-[1440px] w-1/2 h-1/2 bg-white relative left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/3 z-50 flex items-center flex-col gap-16'>
        <h1>We&apos;re launching soon</h1>
        <div className='grid grid-cols-4 w-full h-full'></div>
      </div>
      <img src={stars} className='w-full h-full fixed z-10'></img>
      <img src={background} className='w-full fixed bottom-0 z-0'></img>
    </main>
  )
}

export default App
