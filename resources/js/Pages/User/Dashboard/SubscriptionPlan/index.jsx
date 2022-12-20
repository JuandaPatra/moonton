import Authenticated from "@/Layouts/Authenticated/index";
import PriceCard from "@/Components/PriceCard";
import { Inertia } from '@inertiajs/inertia'
export default function SubscriptionPlan({ auth, reguler, premium }) {

    const selectSubcription = id =>{
        alert(id)
    }

    return (
        <Authenticated auth={auth}>
            <div className="ml-[212px] px-[50px]">
                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>
                    {/* Pricing Card  */}
                    <div className="flex justify-center gap-10 mt-[70px]">
                        <PriceCard dataPackage={reguler} />

                        {/* For Greatest  */}
                        <PriceCard isPremium={true} dataPackage={premium} />
                    </div>
                    {/* /Pricing Card  */}
                </div>
            </div>
        </Authenticated>
    );
}
