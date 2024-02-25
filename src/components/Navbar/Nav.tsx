import Logo from './Logo'
import Mode from './Mode'

export default function Nav() {
  return (
    <div className='flex justify-around bg-slate-800 p-3'>
        <Logo/>
        <Mode/>
    </div>
  )
}
