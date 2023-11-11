interface Params {
  text: string
  value: number
}

export default function FlipCalendar({ text, value }: Params) {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className='w-full max-w-[125px] aspect-square bg-background flex justify-center items-center dropshadow relative'>
        <h3 className='text-[10vw] sm:text-6xl text-secondary font-bold font-redhat z-10'>
          {value.toString().length == 1
            ? '0' + value.toString()
            : value.toString()}
        </h3>
        <span className='lighthalf'></span>
        <span className='semicircle-left'></span>
        <span className='semicircle-right'></span>
      </div>
      <h2 className='font-redhat text-primary text-[12px] sm:text-[14px] tracking-[0.3rem]'>
        {text}
      </h2>
    </div>
  )
}
