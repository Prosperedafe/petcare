import Image from "next/image"

export const AppFooter = () => {
    return (
        <footer className="bg-[#062D3E] px-[5%] py-12">
            <Image src={require('@/assets/Pet-First.svg')} alt='pet first' />
        </footer>
    )
}