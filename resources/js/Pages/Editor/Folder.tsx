import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import NavBar from "@/Components/DashboardComponents/NavBarComponents/NavBar";
import StepList from "@/Components/EditorFolderComponents/StepListComponents/StepList";
import DocumentTypeList from "@/Components/EditorFolderComponents/DocumentTypeListComponents/DocumentTypeList";
import DocumentList from "@/Components/EditorFolderComponents/DocumentListComponents/DocumentList";

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
                    <DocumentList />
                    <DocumentTypeList />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
