import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import NavBar from "@/Components/DashboardComponents/NavBarComponents/NavBar";
import SideBar from "@/Components/DashboardComponents/SideBarComponents/SideBar";
import BottomNavBar from "@/Components/DashboardComponents/BottomNavBarComponents/BottomNavBar";
import Table from "@/Components/DashboardComponents/TableComponents/Table";
import NewFolderButton from "@/Components/DashboardComponents/NewFolderButton";
import StepList from "@/Components/EditorFolderComponents/StepListComponents/StepList";
import ComponentList from "@/Components/EditorFolderComponents/DocumentListComponents/ComponentList";
export default function Folder({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user} >
            <Head title="Folder" />

            <div className="flex flex-col h-full">
                <div className="flex flex-row px-10 py-5">
                    <input type="text" className="w-full bg-transparent border-none focus:outline-none focus:ring-0 p-0 text-text-light-primary dark:text-text-dark-primary text-xl md:text-xl font-semibold" defaultValue="Dossier de contrat de travail" />
                    <NavBar title={''} />
                </div>
                <div className="flex flex-row justify-between items-start h-full overflow-auto">
                    <StepList />
                    <ComponentList />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
