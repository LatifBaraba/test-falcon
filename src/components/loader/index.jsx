'use client'
import React, { useEffect, useState } from 'react'

const Loader = () => {
    useEffect(() => {
        setTimeout(() => setLoad(false), 2000)
    }, [])

    const [load, setLoad] = useState(true)

    return (
        <>
            {load && (
                <div className='loader h-screen w-screen flex justify-center items-center'>
                    <div
                        class='animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full'
                        role='status'
                        aria-label='loading'
                    >
                        <span class='sr-only'>Loading...</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default Loader
