import Button from "../Components/Button";
import { shoe8 } from "../assets/images";


const SuperQuality = () => {
    return (
        <section id="about-us" className="flex justify-between
        items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">

      <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg '>
      We Provide You
        <br />
        <span className='text-coral-red'>
        Super </span>
        <span className='text-coral-red'>
        Quality </span> Shoes
      </h2>
      <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        Discover stylish Nike arrivals, quality comfort, and innovation for
        your active life.
      </p>
      <div className="mt-11">
      <Button label="View Details.." /></div>
      </div>
      <div className=" flex-1 flex justify-center items-center">
      <img src={shoe8} alt="shoe8" width={570} height={525}
      className="object-contain "/>
      </div>
        </section>
    )
}

export default SuperQuality;