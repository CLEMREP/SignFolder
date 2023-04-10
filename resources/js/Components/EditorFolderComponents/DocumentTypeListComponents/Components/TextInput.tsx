import Icons from "@/Components/Icons";

export default function TextInput({ logo, placeholder, onClick }: { logo: string, placeholder: string, onClick: any }) {
    return (
        <div className="relative w-full">
            <div className="absolute w-full h-full z-10 bg-transparent cursor-pointer hover:bg-primary-main/10 rounded-xl transition-colors duration-150" onClick={onClick}></div>

            <Icons className={"absolute inset-y-0 my-auto w-12 fill-text-light-disabled dark:fill-text-dark-disabled"} iconName={logo} size={25} />
            <input className="relative text-text-light-secondary dark:text-text-dark-secondary text-sm md:text-base placeholder:text-text-light-disabled placeholder:dark:text-text-dark-disabled placeholder:text-sm placeholder:md:text-base w-full p-3 pl-12 rounded-xl bg-transparent border-dashed border-2 border-background-light-neutral dark:border-background-dark-neutral focus:border-primary-main focus:dark:border-primary-main transition-colors duration-150 focus:ring-0" type="search" placeholder={placeholder} />
        </div>
    );
}
