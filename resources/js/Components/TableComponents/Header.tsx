export default function Header() {
    return (
        <div className="flex flex-row justify-center items-center w-full bg-background-light-neutral dark:bg-background-dark-neutral p-5">
            <span className="text-text-light-secondary dark:text-text-dark-secondary w-full text-left text-sm md:text-base">Numéro de dossier</span>
            <span className="text-text-light-secondary dark:text-text-dark-secondary w-full text-left text-sm md:text-base hidden md:block">Ouvert le</span>
            <span className="text-text-light-secondary dark:text-text-dark-secondary w-full text-left text-sm md:text-base hidden md:block">Etape</span>
            <span className="text-text-light-secondary dark:text-text-dark-secondary w-full text-left text-sm md:text-base">Status</span>
            <span className="text-text-light-secondary dark:text-text-dark-secondary w-1/12 text-right text-sm md:text-base"></span>
        </div>
    );
}
