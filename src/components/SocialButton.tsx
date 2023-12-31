interface Params {
  children: React.ReactNode
  platform: string
}

export default function SocialButton({ children, platform }: Params) {
  return (
    <a href='#' className='w-8 aspect-square' aria-label={platform}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        data-darkreader-inline-fill=''
        className='fill-primary hover:fill-secondary hover:cursor-pointer aspect-square w-full h-full'
      >
        {children}
      </svg>
    </a>
  )
}
