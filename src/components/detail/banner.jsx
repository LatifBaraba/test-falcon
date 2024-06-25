import Image from 'next/image'
import BannerImage from '@/assets/images/banner.jpg'

export default function Banner() {
    return (
        <div className='w-full'>
            <Image className='w-full' src={BannerImage} alt='Picture of the author' placeholder='blur' />
        </div>
    )
}
