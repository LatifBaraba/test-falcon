import Image from 'next/image'
import BannerImage from '@/assets/images/banner.jpg'
import Slider from '@/components/home/slider'

export default function Home() {
    return (
        <main className='flex w-full min-h-screen flex-col items-center'>
            {/* Banner */}
            <div className='w-full shadow-xl'>
                <Image className='w-full' src={BannerImage} alt='Picture of the author' placeholder='blur' />
            </div>
            {/* Main */}
            <div className='flex flex-col justify-center items-center gap-6 w-screen p-9'>
                <div className='w-full text-left'>
                    <h2 className='font-bold text-3xl text-black'>Drama</h2>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <Slider />
                </div>
            </div>
        </main>
    )
}
