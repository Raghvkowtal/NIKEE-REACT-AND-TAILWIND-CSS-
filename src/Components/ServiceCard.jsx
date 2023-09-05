

const ServiceCard = ({imgURL, label, subtext}) => {
    return (
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px]
        w-full rounded-[20px] shadow-3xl px-10 py-16">
        <div className="w-11 h-11 flex justify-center
        items-center bg-coral-red rounded-full ">
        <img src={imgURL} alt={label}
        width={24} height={24} 
        />
        </div>
        <h3 className="mt-4 font-mono break-words normal-leading text-2xl font-bold flex flex-1">{label}</h3>
        <p className="mt-2 font-serif font-semibold flex-1 flex hover:cursor-pointer">{subtext}</p>
        </div>
    )
}

export default ServiceCard
