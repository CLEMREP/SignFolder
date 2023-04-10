import TextInput from "@/Components/EditorFolderComponents/DocumentTypeListComponents/Components/TextInput";
import Select from "@/Components/EditorFolderComponents/DocumentTypeListComponents/Components/Select";

export default function DocumentType({ type, onClick }: {type: string, onClick: any}) {
    switch (type) {
        case 'text':
            return (
                <TextInput logo={'comment'} placeholder={'Text'} onClick={() => onClick(type)} />
            );
        case 'name':
            return (
                <TextInput logo={'name'} placeholder={'Nom'} onClick={() => onClick(type)} />
            );
        case 'email':
            return (
                <TextInput logo={'email'} placeholder={'Email'} onClick={() => onClick(type)} />
            );
        case 'select':
            return (
                <Select onClick={() => onClick(type)} />
            );
        default:
            return (
                <TextInput logo={'search'} placeholder={'Nom'} onClick={() => onClick(type)} />
            );
    }
}
