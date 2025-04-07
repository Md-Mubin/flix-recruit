import React from 'react'

const Industry = () => {

    const jobCategories = [
        { title: "Backend Development", positions: 6, icon: "🌐" },
        { title: "Distributed Systems", positions: 6, icon: "💓" },
        { title: "IT Project Management", positions: 6, icon: "📈" },
        { title: "Computer Networks", positions: 5, icon: "🎨" },
        { title: "Databases & Big Data", positions: 6, icon: "🎓" },
        { title: "Mobile Software Development", positions: 2, icon: "🌱" },
        { title: "Frontend Development", positions: 2, icon: "🛡️" },
        { title: "IT Consulting", positions: 7, icon: "⚛️" },
        { title: "Statistics & Data Science", positions: 1, icon: "🍴" },
    ];

    return (
        <>
            <section className='py-20 bg-[#d2e8fd] text-center'>
                <div className="container">
                    <h2 className='font-bold text-[56px] text-[#000]'>Popular Industries</h2>
                    <p className='font-normal text-2xl text-[#555555]'>Get started with best industries</p>

                    <div className="m-auto flex flex-wrap justify-center gap-6 mt-10">
                        {
                            jobCategories.map((category, index) => (
                                <ul key={index} className="w-[420px] flex items-center gap-4 p-6 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-lg hover:bg-[#95b7e5] group transition duration-200 ">
                                    <li className="text-3xl bg-[#d2e8fd] w-[60px] h-[60px] rounded-sm flex items-center justify-center group-hover:bg-[#fff]">
                                        {category.icon}
                                    </li>
                                    <li className='w-full text-start'>
                                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#fff] duration-200 tracking-widest">{category.title}</h3>
                                        <p className="text-gray-500 text-sm group-hover:text-[#fff] duration-200 text-start tracking-widest">{category.positions} open positions</p>
                                    </li>
                                </ul>
                                
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Industry