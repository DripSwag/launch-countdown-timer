interface Params {
  text: string
}

export default function FlipCalendar({text}: Params) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="h-full w-full bg-gradient-to-b from-[#2c2c44] to-quaternary">
        <h3 className="">5</h3>
      </div>
      <h2 className="font-redhat text-primary text-[14px] tracking-[0.3rem]">{text}</h2>
    </div>
  )
}
