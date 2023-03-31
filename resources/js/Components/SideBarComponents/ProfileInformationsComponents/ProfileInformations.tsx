import Picture from "@/Components/SideBarComponents/ProfileInformationsComponents/Picture";

export default function ProfileInformations() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <Picture />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-text-light-primary dark:text-text-dark-primary font-semibold">Prénom NOM</h1>
                <h1 className="text-text-light-disabled dark:text-text-dark-disabled text-sm font-semibold">User</h1>
            </div>
        </div>
    );
}
