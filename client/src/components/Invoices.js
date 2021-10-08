import React, {useState, useEffect} from 'react';


export default function Invoices(){

    const [jobsInfo, setJobsInfo] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res=>res.json())
        .then(jobsInfo)
    },[])

    return(

        <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Customer
                                </th>
                                <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Description
                                </th>
                                <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Subtotal
                                </th>
                                <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Grand Total
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {jobsInfo.map((jobsInfoObj) => {
                                <tr key={jobsInfoObj.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        {/* <img className="h-10 w-10 rounded-full" src={person.image} alt="" /> */}
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">{jobsInfo.customer}</div>
                                        <div className="text-sm text-gray-500">{jobsInfo.address}</div>
                                    </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{jobsInfo.description}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    <div className="text-sm text-gray-500">{jobsInfo.subtotal}</div>
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jobsInfo.grand_total}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                    Edit
                                    </a>
                                </td>
                                </tr>
                                })}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
    )
}