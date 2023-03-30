import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import NavBar from "@/Components/NavBarComponents/NavBar";
import SideBar from "@/Components/SideBarComponents/SideBar";
export default function Folder({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user} >
            <Head title="Folder" />

            <div className="flex flex-row items-start h-full">
                <SideBar routeName="folder" />
                <div className="flex flex-col justify-start items-start w-full h-full p-10">
                    <NavBar />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
