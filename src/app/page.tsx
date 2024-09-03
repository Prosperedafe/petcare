import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-[1fr_.6fr]">
        <section className="py-24 px-[7.5%]">
          <h1 className="uppercase text-[#062D3E] text-3xl lg:text-7xl font-semibold mb-12">A pet-first <br /> <span className="text-[#ED5C01]">approach to</span> wellness</h1>
          <button className="rounded-[30px] bg-[#ED5C01] text-white text-xl py-4 px-6">Learn More</button>
        </section>
        <div className="relative pt-[1rem] overflow-hidden pr-24">
          <div className="bg-[#062D3E] absolute h-full w-[60%] right-0 top-0 bottom-0 -z-[1]">
          </div>
          <Image src={require('@/assets/frame-2.png')} className="absolute -top-[10%] -z-[1] right-[50%]" alt='bg-cover' />
          <Image src={require('@/assets/Frame-3.png')} className="absolute bottom-0 -z-[1] right-[50%]" alt='bg-cover' />
          <Image src={require('@/assets/pattern-1.png')} className="absolute top-[50%] -translate-y-[50%] -z-[1] right-0" alt='bg-pattern' />
          <figure className="max-w-[480px]">
            <Image src={require('@/assets/dog000 1.png')} alt='pet dog image' />
          </figure>
        </div>
      </div>
      <div className="px-[5%] grid md:grid-cols-2 gap-8 items-center bg-[#189CAB] py-12 text-white">
        <figure>
          <Image src={require('@/assets/Union.png')} alt="Making pet parenting easy for everyone" />
        </figure>
        <section className="text-lg">
          <h2 className="text-4xl">Making pet parenting easy for everyone</h2>
          <p className="py-6">Could this be the dog with the longest tail? The Rampur Greyhound - shy, sensitive, alert, and faithful. This is a breed that has climbed its way to being top dog because of its intelligence</p>
          <ul className="list-[circle] pl-8 marker:text-[#062D3E]">
            <li>Adoption</li>
            <li>Frozen Raw</li>
            <li>Next Day Delivery</li>
          </ul>
          <button className="rounded-[30px] bg-[#062D3E] text-white text-xl py-4 px-6 mt-12">Explore</button>
        </section>
      </div>
      <div className="px-[5%] grid md:grid-cols-2 gap-8 items-center py-12 text-[#062D3E]">
        <figure>
          <Image src={require('@/assets/customer.png')} alt="customer" className="border-[1px] border-black rounded-[40px]" />
        </figure>
        <section className="text-lg">
          <h2 className="text-4xl mb-6">Customer Reviews</h2>
          <div className="relative max-w-[400px]">
            <Image src={require('@/assets/Vector 1.png')} alt="customer" className="w-full" />
            <p className="py-6 font-medium absolute top-[50%] translate-y-[-50%] left-6 right-6">As we continue to push for better regulation in the Australian pet food industry it can be hard to trust many pet food brands. Our 2021 Best Cat Food in Australia list will offer you a great starting point in deciding what to feed your cat.</p>
          </div>
        </section>
      </div>
      <div className="grid md:grid-cols-2 text-[#062D3E]">
        <figure className="bg-[#FBBD08] px-[4%]">
          <Image src={require('@/assets/dog.png')} alt="customer" className="mx-auto -mt-12" />
        </figure>
        <div className="bg-[#ED5C01] px-[8%] flex items-center">
          <h2 className="text-4xl mb-6">Subscribe & Get Pet Updatenews</h2>
        </div>
      </div>
    </main>
  );
}
