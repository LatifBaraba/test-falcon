import Banner from '@/components/detail/banner'
import Navbar from '@/components/detail/navbar'
import Poster from '@/components/detail/poster'
import Tabs from '@/components/detail/tabs'

export default function Detail() {
    return (
        <div className='w-full h-screen'>
            {/* Navbar */}
            <Navbar />
            {/* COntent */}
            <div className='flex flex-col justify-center items-center'>
                {/* Banner */}
                <Banner />
                {/* Info */}
                <div className='flex gap-4 p-5 w-[70%]'>
                    <div className='w-1/5 relative'>
                        <div className='absolute top-[-50px] left-0'>
                            <Poster />
                        </div>
                    </div>
                    <div className='w-4/5'>
                        <div className='flex flex-col ml-14 gap-4'>
                            <h2 className='text-4xl font-semibold text-black'>Sujud Terakhir Bapak</h2>
                            <div className='flex gap-4'>
                                <button className='btn btn-primary btn-md'>68 Minutes</button>
                                <button className='btn btn-secondary btn-md'>Drama</button>
                            </div>
                            <Tabs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
