import NavBar from "@/Components/DashboardComponents/OrganizationComponents/OrganizationPagesComponents/NavBar";
import TeamPage from "@/Components/DashboardComponents/OrganizationComponents/OrganizationPagesComponents/TeamPageComponents/TeamPage";
import SettingsPage
    from "@/Components/DashboardComponents/OrganizationComponents/OrganizationPagesComponents/SettingsPageComponents/SettingsPage";
import {useState} from "react";

export default function OrganizationPages() {
    const [page, setPage] = useState(0);

    const changePage = (page: number) => {
        setPage(page);
    }

    return (
        <div className="flex flex-col justify-start items-start w-full h-full gap-10 overflow-hidden">
            <NavBar pageSelected={(page: number) => changePage(page)} />
            {
                page === 0 ?
                    <TeamPage />
                    :
                    <SettingsPage />
            }
        </div>
    );
}
