import { EllipsisVertical, EyeIcon, Trash } from 'lucide-react';
import React from 'react'
import LeafLetMap from './LeafLetMap';

const Dashboard = () => {
    const data = [
        {
            id: 1, name: "Bros warner", item: '600', profit: "$14,000",
            completion: '60%',
        },
        {
            id: 1, name: "Bros warner", item: '600', profit: "$14,000",
            completion: '60%',
        },
        {
            id: 1, name: "Bros warner", item: '600', profit: "$14,000",
            completion: '60%',
        },
        {
            id: 1, name: "Bros warner", item: '600', profit: "$14,000",
            completion: '60%',
        },
        {
            id: 1, name: "Bros warner", item: '600', profit: "$14,000",
            completion: '60%',
        },
    ];
    return (
        <>
            <div className="flex gap-5 mb-4">
                <div className="w-[27.313rem] overflow-y-auto card-gradient border-[1.5px] py-8 px-6 rounded-3xl">
                    <div className="">
                        <div className="flex justify-between items-center mb-2">
                            <p className='text-white font-bold text-base'>
                                Cash out
                            </p>
                            <div className="card-gradient border-[1.5px] px-2 rounded-full">
                                <select className=' text-white p-3 outline-0 text-sm font-bold'>
                                    <option value="">July 2025</option>
                                    <option value="">June 2025</option>
                                    <option value="">May 2025</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-9">
                        <div className="">
                            <p className='font-bold text-sm text-[#838383]'>
                                Total Storefront Revenue
                            </p>
                            <h1 className='text-[4.563rem] font-extrabold bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent leading-[1]'>
                                $3.6m
                            </h1>
                        </div>
                        <div className="">
                            <p className='font-bold text-sm text-[#838383]'>
                                Total Cashouts
                            </p>
                            <h1 className='text-[4.563rem] font-extrabold bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent leading-[1]'>
                                $25k
                            </h1>
                        </div>
                        <div className="">
                            <p className='font-bold text-sm text-[#838383]'>
                                Storefront Views
                            </p>
                            <h1 className='text-[4.563rem] font-extrabold bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent leading-[1]'>
                                100 k
                            </h1>
                        </div>
                        <div className="text-center">
                            <button className='py-3.5 px-11 bg-[#57430D] text-sm font-bold text-white rounded-2xl' type='button'>
                                View More
                            </button>
                        </div>
                    </div>

                </div>
                <div className="grow">
                    <div className="w-full overflow-y-auto card-gradient border-[1.5px] py-8 px-6 rounded-3xl">
                        <div className="">
                            <div className="flex justify-between items-center mb-2">
                                <p className='text-white font-bold text-base'>
                                    Cash out
                                </p>
                                <div className="card-gradient border-[1.5px] px-2 rounded-full">
                                    <select className=' text-white p-3 outline-0 text-sm font-bold'>
                                        <option value="">July 2025</option>
                                        <option value="">June 2025</option>
                                        <option value="">May 2025</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-9 relative">
                            <LeafLetMap />
                            <div className="absolute left-0 bottom-2">
                                <button className='py-3.5 px-11 bg-[#57430D] text-sm font-bold text-white rounded-2xl' type='button'>
                                    View More
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="card-gradient border-[1.5px] py-8 px-14 rounded-3xl">
                <div className="">
                    <div className="flex justify-between items-center mb-16">
                        <p className='text-white font-bold text-base'>
                            Reviews
                        </p>
                        <div className="card-gradient border-[1.5px] px-2 rounded-full">
                            <select className=' text-white p-3 outline-0'>
                                <option value="">July 2025</option>
                                <option value="">June 2025</option>
                                <option value="">May 2025</option>
                            </select>
                        </div>
                    </div>
                    <div className="">
                        <table className="min-w-full bg-transparent border-0 rounded-lg shadow-sm h-[300px] overflow-y-auto">
                            <thead>
                                <tr className="bg-[rgba(0,0,0,0.02)] text-left text-sm font-bold text-[#838383]">
                                    <th className="px-6 py-3 border-b border-[#323232]">ITEM NAME / TOTAL SHOP</th>
                                    <th className="px-6 py-3 border-b border-[#323232]">TOTAL ITEM</th>
                                    <th className="px-6 py-3 border-b border-[#323232]">TOTAL PROFITS</th>
                                    <th className="px-6 py-3 border-b border-[#323232]">COMPLETION</th>
                                    <th className="px-6 py-3 border-b border-[#323232] w-10">ACTION</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-600">
                                {data.map((row) => (
                                    <tr key={row.id} className="hover:bg-[255,255,255,0.2]">
                                        <td className="px-6 py-4 border-b border-[#323232]">
                                            <div className="flex items-center gap-6">
                                                <div className="bg-[#D9D9D9] w-[3.563rem] h-[3.25rem] rounded-lg"></div>
                                                <div className='text-[#D4BC6D] font-bold'>
                                                    {row.name}
                                                    <p className='text-[#838383] font-bold text-sm'>
                                                        Branded Stripe
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 border-b border-[#323232]">
                                            <div className='text-[#D4BC6D] font-bold'>
                                                {row.item}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 border-b border-[#323232]">
                                            <div className='text-[#D4BC6D] font-bold'>
                                                {row.profit}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 border-b border-[#323232]">
                                            <div className='text-[#D4BC6D] font-bold mb-0.5'>
                                                {row.completion}
                                            </div>
                                            <div className='h-[10px] w-[150px] bg-[#282828] rounded-full'>
                                                <div className="h-full bg-[#D4BC6D] rounded-full" style={{ width: row?.completion }} />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 border-b border-[#323232]">
                                            <div className="flex gap-3">
                                                <Trash type='button' />
                                                <EyeIcon type='button' />
                                                <EllipsisVertical type='button' />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard