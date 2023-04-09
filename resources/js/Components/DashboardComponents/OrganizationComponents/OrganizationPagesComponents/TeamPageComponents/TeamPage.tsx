import Person
    from "@/Components/DashboardComponents/OrganizationComponents/OrganizationPagesComponents/TeamPageComponents/Person";
import SearchBar
    from "@/Components/DashboardComponents/OrganizationComponents/OrganizationPagesComponents/TeamPageComponents/SearchBar";

export default function TeamPage() {
    return (
        <div className="flex flex-col justify-start items-start w-full h-full gap-5 overflow-auto">
            <SearchBar />
            <div className="flex flex-row flex-wrap justify-start items-start w-full h-full">
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
            </div>
        </div>
    );
}
