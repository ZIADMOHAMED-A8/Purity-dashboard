import wimage from '../../assets/Background.png'

export default function WealthCard(){
    return(
        <>
            <article className='bg-white flex px-3 justify-center sm:px-4 rounded-2xl flex-[2] items-center shadow-sm hover:shadow-md transition-shadow overflow-hidden max-w-full'>
                <div className='relative w-full max-w-lg mx-auto'>
                    <img className='w-full h-auto rounded-2xl object-cover' src={wimage} alt="" />
                    <div className='absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4'>
                        <h2 className='text-white text-base sm:text-lg md:text-xl font-medium m-1 sm:m-2'>Work with the Rockets</h2>
                        <p className='text-white text-xs sm:text-sm m-1 sm:m-2 max-w-xs sm:max-w-sm md:max-w-md'>
Wealth creation is an evolutionarily recent positive-sum game.
It is all about who take the opportunity first.</p>
                    </div>
                </div>
            </article>
        
        </>
    )
}
