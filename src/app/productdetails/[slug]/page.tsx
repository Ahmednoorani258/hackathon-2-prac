import Card from "@/components/ForyouCard";

import Image from "next/image";
import { arr } from "@/data/data";
import Dynamicroutessec from "@/components/dynamicroutesec";

const foryou = [
    {
        title: "Kids Electric Car",
        image: "/products/toycar.png",
        price: 960,
        key: 5
    },
    {
        title: "Jr. Zoom Soccer Cleats",
        image: "/products/shoess.png",
        price: 1160,
        key: 6
    },
    {
        title: "GP11 Shooter USB Gamepad",
        image: "/products/gamecontroller.png",
        price: 660,
        key: 7
    },
    {
        title: "Quilted Satin Jacket",
        image: "/products/jacket.png",
        price: 600,
        key: 8
    },
]

const ProdDetails = ({ params }: { params: { productid: string } }) => {

    const product = arr.find((data) => data.id.toString() === params.productid)
    if(product)

    return (
        <div className="max-w-[1280px] min-h-[80vh] p-3 m-auto">
            
            <div className="w-full flex md:flex-row flex-col md:py-12">
                <div className="md:w-3/5 w-full md:flex gap-6">
                    <div className="w-full md:hidden block p-6 bg-[#F5F5F5] mb-3">
                        <Image src={product.image} alt={""} width={600} height={600} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 gap-3">
                        <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
                            <Image src={product.image} alt={""} width={600} height={600} className="w-full h-full object-cover" />
                        </span>
                        <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
                            <Image src={product.image} alt={""} width={600} height={600} className="w-full h-full object-cover" />
                        </span>
                        <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
                            <Image src={product.image} alt={""} width={600} height={600} className="w-full h-full object-cover" />
                        </span>
                        <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
                            <Image src={product.image} alt={""} width={600} height={600} className="w-full h-full object-cover" />
                        </span>
                    </div>
                    <div className="md:w-[500px] md:block hidden p-6 bg-[#F5F5F5]">
                        <Image src={product?.image} alt={""} width={600} height={600} className="w-full h-full object-contain" />
                    </div>
                </div>

                <Dynamicroutessec product={product} />
            </div>

            <div className="w-full pt-12">
            <div className="w-full text-[#DB4444] flex items-center gap-3 font-medium">
                <span className="w-5 h-10 bg-[#DB4444] rounded-md"></span>
                <span>Related Item</span>
            </div>
            
        </div>
            <div className="w-full flex flex-wrap sm:gap-6 gap-3 justify-center my-8 mb-20">
                {foryou.map((sec) => <Card image={sec.image}  title={sec.title} price={sec.price} key={sec.key}/>)}
            </div>
        </div>
    )
}

export default ProdDetails