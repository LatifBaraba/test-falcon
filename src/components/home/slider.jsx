'use client' // <===== REQUIRED

import React from 'react'
import Image from 'next/image'
import ThumbnailImage from '@/assets/images/thumbnail.jpg'
import { Autoplay, Navigation, Pagination, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useRouter } from 'next/navigation'

const DemoSlider = () => {
    const router = useRouter()

    return (
        <div className='w-[90%]'>
            <Swiper
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[FreeMode, Pagination, Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                }}
                className='p-12'
            >
                <SwiperSlide className=''>
                    <div className='w-36 h-60 m-auto'>
                        <div className='flex justify-center items-center'>
                            <Image
                                className='w-full h-full rounded-xl cursor-pointer'
                                src={ThumbnailImage}
                                alt='Picture of the author'
                                placeholder='blur'
                                onClick={() => router.push('/detail')}
                            />
                            <h2 className='absolute bottom-0 text-black'>Things</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='w-36 h-60 m-auto'>
                        <div className='flex justify-center items-center'>
                            <Image
                                className='w-full h-full rounded-xl cursor-pointer'
                                src={ThumbnailImage}
                                alt='Picture of the author'
                                placeholder='blur'
                                onClick={() => router.push('/detail')}
                            />
                            <h2 className='absolute bottom-0 text-black'>Things</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='w-36 h-60 m-auto'>
                        <div className='flex justify-center items-center'>
                            <Image
                                className='w-full h-full rounded-xl cursor-pointer'
                                src={ThumbnailImage}
                                alt='Picture of the author'
                                placeholder='blur'
                                onClick={() => router.push('/detail')}
                            />
                            <h2 className='absolute bottom-0 text-black'>Things</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='w-36 h-60 m-auto'>
                        <div className='flex justify-center items-center'>
                            <Image
                                className='w-full h-full rounded-xl cursor-pointer'
                                src={ThumbnailImage}
                                alt='Picture of the author'
                                placeholder='blur'
                                onClick={() => router.push('/detail')}
                            />
                            <h2 className='absolute bottom-0 text-black'>Things</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='w-36 h-60 m-auto'>
                        <div className='flex justify-center items-center'>
                            <Image
                                className='w-full h-full rounded-xl cursor-pointer'
                                src={ThumbnailImage}
                                alt='Picture of the author'
                                placeholder='blur'
                                onClick={() => router.push('/detail')}
                            />
                            <h2 className='absolute bottom-0 text-black'>Things</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='w-36 h-60 m-auto'>
                        <div className='flex justify-center items-center'>
                            <Image
                                className='w-full h-full rounded-xl cursor-pointer'
                                src={ThumbnailImage}
                                alt='Picture of the author'
                                placeholder='blur'
                                onClick={() => router.push('/detail')}
                            />
                            <h2 className='absolute bottom-0 text-black'>Things</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='w-36 h-60 m-auto'>
                        <div className='flex justify-center items-center'>
                            <Image
                                className='w-full h-full rounded-xl cursor-pointer'
                                src={ThumbnailImage}
                                alt='Picture of the author'
                                placeholder='blur'
                                onClick={() => router.push('/detail')}
                            />
                            <h2 className='absolute bottom-0 text-black'>Things</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='w-36 h-60 m-auto'>
                        <div className='flex justify-center items-center'>
                            <Image
                                className='w-full h-full rounded-xl cursor-pointer'
                                src={ThumbnailImage}
                                alt='Picture of the author'
                                placeholder='blur'
                                onClick={() => router.push('/detail')}
                            />
                            <h2 className='absolute bottom-0 text-black'>Things</h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default DemoSlider
