import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import NavBar from "@/Components/DashboardComponents/NavBarComponents/NavBar";
import SideBar from "@/Components/DashboardComponents/SideBarComponents/SideBar";
import BottomNavBar from "@/Components/DashboardComponents/BottomNavBarComponents/BottomNavBar";
import Table from "@/Components/DashboardComponents/TableComponents/Table";
import NewFolderButton from "@/Components/DashboardComponents/NewFolderButton";
import StepList from "@/Components/EditorFolderComponents/StepList";
export default function Folder({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user} >
            <Head title="Folder" />

            <div className="flex flex-row items-start h-full">
                <StepList />
            </div>

            <BottomNavBar routeName="dashboard_folder" />
        </AuthenticatedLayout>
    );
}
