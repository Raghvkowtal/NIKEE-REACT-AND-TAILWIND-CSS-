import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name}
         className="w-[280px] h-[280px] rounded-full"/>
         <div className="mt-8 flex justify-start gap-2.5">
         
         <img src={star}alt="rating"
         width={24} height={24} />
         <p className="font-montserrat tetx-xl leading-normal 
         text-slate-gray">4.5</p>
         </div>
         <h3 className="font-montserrat text-indigo-600 mt-2 leading-normal text-3xl font-semibold">{name}</h3>
         <p className="text-coral-red text-lg mt-2 font-bold text-2xl leading-normal font-mono">{price}</p>
        </div>
    )
}

export default PopularProductCard
