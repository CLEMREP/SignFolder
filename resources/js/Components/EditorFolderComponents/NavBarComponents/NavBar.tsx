import IconButton from "@/Components/EditorFolderComponents/NavBarComponents/IconButton";
import DarkModeIconButton from "@/Components/EditorFolderComponents/NavBarComponents/DarkModeIconButton";

export default function NavBar({title, onClick, onSave}: { title: string, onClick?: any, onSave: boolean}) {
    return (
        <div className="flex flex-row justify-between items-center text-gray-800 dark:text-gray-200 w-full">
            <h1 className="text-text-light-primary dark:text-text-dark-primary text-xl md:text-3xl font-bold">{title}</h1>
            <div className="flex flex-row gap-5 justify-center items-center">
                <div className="flex flex-row justify-center items-center gap-3 text-primary-main text-xl">
                    <DarkModeIconButton />
                    {
                        onSave ? <IconButton iconName={'save'} notified={false} onClick={onClick} /> : <></>
                    }
                </div>
            </div>
        </div>
    );
}
