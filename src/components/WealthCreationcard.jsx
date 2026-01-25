import wimage from '../assets/Background.png'

export default function WealthCard(){
    return(
        <>
            <article className='bg-white flex px-4 rounded-2xl flex-[2] items-center'>
                <div className=' relative' >
                    <img className='max-w-full rounded-2xl' src={wimage} alt="" />
                    <div className='absolute top-4 left-4'>
                        <h2 className='text-white text-xl font-medium m-2'>Work with the Rockets</h2>
                        <p className='text-white text-sm m-2 w-120'>
Wealth creation is an evolutionarily recent positive-sum game.
It is all about who take the opportunity first.</p>
                    </div>
                </div>
            </article>
        
        </>
    )
}