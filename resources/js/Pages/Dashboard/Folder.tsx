import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import NavBar from "@/Components/NavBarComponents/NavBar";
import SideBar from "@/Components/SideBarComponents/SideBar";
import BurgerButton from "@/Components/BottomNavBarComponents/BurgerButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import Select from "@/Components/TableComponents/Select";
import Table from "@/Components/TableComponents/Table";
export default function Folder({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user} >
            <Head title="Folder" />

            <div className="flex flex-row items-start h-full">
                <SideBar routeName="dashboard_folder" />
                <div className="flex flex-col justify-start items-start w-full h-full p-5 md:p-10 gap-10">
                    <NavBar />
                    <div className="flex flex-col justify-start items-start w-full h-full gap-10">
                        <h2 className="text-text-light-primary dark:text-text-dark-primary text-xl md:text-2xl font-bold">Dossiers</h2>
                        <Table />
                    </div>
                </div>
            </div>

            <BurgerButton routeName="dashboard_folder" />
        </AuthenticatedLayout>
    );
}
