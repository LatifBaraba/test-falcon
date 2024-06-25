'use client'
import { useState } from 'react'

export default function Tabs() {
    const [tabs, setTabs] = useState(1)

    return (
        <div className='w-full flex flex-col gap-4 text-black'>
            <div className='w-full flex'>
                <div
                    className={`w-1/2 p-2 text-center cursor-pointer ${tabs == 1 && 'border-b-2 border-black'}`}
                    onClick={() => setTabs(1)}
                >
                    <span className='text-xl font-semibold'>Info Film</span>
                </div>
                <div
                    className={`w-1/2 p-2 text-center cursor-pointer ${tabs == 2 && 'border-b-2 border-black'}`}
                    onClick={() => setTabs(2)}
                >
                    <span className='text-xl font-semibold'>Detail Film</span>
                </div>
            </div>
            <div className='w-full'>
                {tabs == 1 && (
                    <div className='w-full'>
                        Kebaikan yang kita tanam tak perlu di perlihatkan dengan ucapan. Terkadang nilai-nilai kebaikan dan keburukan selalu
                        tampak bias pada diri seseorang
                    </div>
                )}
                {tabs == 2 && (
                    <div className='flex w-full overflow-x-auto'>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th className='border-none '>
                                        <span className='text-black font-semibold'>Rating</span>
                                    </th>
                                    <td className='border-none '>
                                        <span className='text-black'>Semua Umur</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='border-none '>
                                        <span className='text-black font-semibold'>Year</span>
                                    </th>
                                    <td className='border-none '>
                                        <span className='text-black'>2024</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='border-none '>
                                        <span className='text-black font-semibold'>Genre</span>
                                    </th>
                                    <td className='border-none '>
                                        <span className='text-black'>Drama Family</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='border-none '>
                                        <span className='text-black font-semibold'>Producer</span>
                                    </th>
                                    <td className='border-none '>
                                        <span className='text-black'>Sentot Sahid</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='border-none '>
                                        <span className='text-black font-semibold'>Director</span>
                                    </th>
                                    <td className='border-none '>
                                        <span className='text-black'>Reka Wijaya</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='border-none '>
                                        <span className='text-black font-semibold'>Cast</span>
                                    </th>
                                    <td className='border-none '>
                                        <span className='text-black'>Aulia Sarah, Indro Warkop, Rey Mbayang, Shennina Cinnamon</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
