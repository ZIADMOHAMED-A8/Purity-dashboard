import  image from '../assets/image.png'
export default function InfoCard(){
    return (
        <>
            <article className='flex p-4 rounded-2xl justify-between flex-[3] w-full  bg-white' >
                <div className='min-w-0'>
                    <p className='text-gray-400 font-medium m-2'>Built by developers </p>
                    <p className='m-2 text-xl font-bold'>Purity UI Dashboard</p>
                    <p className='m-2 text-gray-400 w-100 '>
From colors, cards, typography to complex elements,
you will find the full documentation.</p>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>

            </article>

        </>
    )
}