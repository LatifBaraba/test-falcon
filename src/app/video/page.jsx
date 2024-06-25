"use client"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Video() {
    const router = useRouter()

    return (
        <div className='relative w-full h-screen flex justify-center items-center bg-black'>
            <video width='' height='' controls preload='none'>
                <source src='https://drm-test.kineticastudios.com/gotg2-trailer.mp4' type='video/mp4' />
                {/* <track src='/path/to/captions.vtt' kind='subtitles' srcLang='en' label='English' /> */}
                Your browser does not support the video tag.
            </video>
            <X className="absolute top-5 left-5 bg-white w-10 h-10 rounded-full p-2 text-black cursor-pointer" onClick={() => router.back()}/>
        </div>
    )
}
