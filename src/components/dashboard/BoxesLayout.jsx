import DashboardBox from "./DashboardBox";

export default function BoxesLayout({list}){

    return (
        <>
            <div className="flex w-full justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {list.map((e, index) => 
                    <DashboardBox key={index} label={e.label} Icon={e.Icon}></DashboardBox>
                )}


            </div>
        </>
    )
}
