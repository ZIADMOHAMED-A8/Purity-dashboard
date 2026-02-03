import Heading from "./Heading";

export default function(){
    const userData = [{
        name: "Oliver Liam",
        companyName: "Viking Burrito",
        email: "oliver@burrito.com",
        vatNumber: "FRB1235476"
      },
      {
        name: "Oliver Liam",
        companyName: "Viking Burrito",
        email: "oliver@burrito.com",
        vatNumber: "FRB1235476"
      },
      {
        name: "Oliver Liam",
        companyName: "Viking Burrito",
        email: "oliver@burrito.com",
        vatNumber: "FRB1235476"
      }];
    return (
        <>
        <article className="bg-white rounded-2xl flex flex-col gap-6 p-4 flex-3 ">
            <Heading>Billing Information</Heading>
                {userData.map(e=>
                    <div className="p-8 bg-gray-100 rounded-xl">
                        <h1 className="text-xl font-semibold text-gray-500 mb-2">{e.name}</h1>
                        <div className="text-sm text-slate-400">Company name :  <span className="font-semibold text-slate-600">{e.companyName}</span></div>
                        <div className="text-sm text-slate-400">Email address <span className="font-semibold text-slate-600">{e.email}</span></div>
                        <div className="text-sm text-slate-400">VAT :<span className="font-semibold text-slate-600">{e.vatNumber}</span></div>

                    </div>
                )}
            </article>
        </>
    )
}