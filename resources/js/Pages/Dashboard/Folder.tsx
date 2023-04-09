import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import NavBar from "@/Components/DashboardComponents/NavBarComponents/NavBar";
import SideBar from "@/Components/DashboardComponents/SideBarComponents/SideBar";
import BottomNavBar from "@/Components/DashboardComponents/BottomNavBarComponents/BottomNavBar";
import Table from "@/Components/DashboardComponents/TableComponents/Table";
import NewFolderButton from "@/Components/DashboardComponents/NewFolderButton";
export default function Folder({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user} >
            <Head title="Folder" />

            <div className="flex flex-row items-start h-full">
                <SideBar routeName="dashboard_folder" />
                <div className="flex flex-col justify-start items-start w-full h-full p-5 md:p-10 gap-10">
                    <NavBar title={'Tableau de bord'} />
                    <div className="flex flex-col justify-start items-start w-full h-full gap-10 overflow-hidden drop-shadow-lg">
                        <div className="flex flex-row justify-between items-center w-full">
                            <h2 className="text-text-light-primary dark:text-text-dark-primary text-xl md:text-2xl font-bold">Dossiers</h2>
                            <NewFolderButton routeName={'editor_folder'} />
                        </div>
                        <Table />
                    </div>
                </div>
            </div>

            <BottomNavBar routeName="dashboard_folder" />
        </AuthenticatedLayout>
    );
}
