import TextInput from "@/Components/EditorFolderComponents/DocumentTypeListComponents/Components/TextInput";
import Select from "@/Components/EditorFolderComponents/DocumentTypeListComponents/Components/Select";

export default function DocumentType({ type }: {type: string}) {
    switch (type) {
        case 'text':
            return (
                <TextInput logo={'comment'} placeholder={'Text'} />
            );
        case 'name':
            return (
                <TextInput logo={'name'} placeholder={'Nom'} />
            );
        case 'email':
            return (
                <TextInput logo={'email'} placeholder={'Email'} />
            );
        case 'select':
            return (
                <Select />
            );
        default:
            return (
                <TextInput logo={'search'} placeholder={'Nom'} />
            );
    }
}
