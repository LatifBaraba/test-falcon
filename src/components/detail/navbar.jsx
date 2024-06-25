import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='w-full py-5 px-10'>
            <Link href='/'>
                <button className='btn btn-primary'>Home</button>
            </Link>
        </div>
    )
}
