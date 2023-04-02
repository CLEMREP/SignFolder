import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import NavBar from "@/Components/NavBarComponents/NavBar";
import SideBar from "@/Components/SideBarComponents/SideBar";
import BottomNavBar from "@/Components/BottomNavBarComponents/BottomNavBar";
export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user} >
            <Head title="Dashboard" />

            <div className="flex flex-row items-start h-full">
                <SideBar routeName="dashboard" />
                <div className="flex flex-col justify-start items-start w-full h-full p-5 md:p-10">
                    <NavBar />
                </div>
            </div>

            <BottomNavBar routeName="dashboard" />
        </AuthenticatedLayout>
    );
}
