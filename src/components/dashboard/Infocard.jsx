import image from '../../assets/Image.png'
export default function InfoCard(){
    return (
        <>
            <article className='flex flex-col sm:flex-row p-4 sm:p-6 rounded-2xl justify-between flex-[3] w-full bg-white shadow-sm hover:shadow-md transition-shadow' >
                <div className="flex-1 mb-4 sm:mb-0">
                    <p className='text-gray-400 font-medium m-2 text-xs sm:text-sm'>Built by developers </p>
                    <p className='m-2 text-lg sm:text-xl md:text-2xl font-bold'>Purity UI Dashboard</p>
                    <p className='m-2 text-gray-400 text-xs sm:text-sm md:text-base max-w-full'>
From colors, cards, typography to complex elements,
you will find the full documentation.</p>
                </div>
                <div className="flex-shrink-0 sm:ml-4">
                    <img src={image} alt="" className="w-full sm:w-auto max-w-[200px] sm:max-w-none mx-auto sm:mx-0" />
                </div>

            </article>

        </>
    )
}
