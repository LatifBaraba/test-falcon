'use client'
import Image from 'next/image'
import ThumbnailImage from '@/assets/images/thumbnail.jpg'
import { Play } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Poster() {
    const router = useRouter()

    return (
        <div className='relative w-full'>
            <Image className='w-[180px] h-[280px]' src={ThumbnailImage} alt='Picture of the author' placeholder='blur' />
            <div
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl rounded-full p-4 cursor-pointer'
                onClick={() => router.push('/video')}
            >
                <Play className='text-2xl' />
            </div>
        </div>
    )
}
