import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {Head, Link, useForm} from '@inertiajs/react';
import { FormEventHandler } from 'react';
import EmailTextInput from "@/Components/AuthComponents/LoginComponents/EmailTextInput";
import PasswordTextInput from "@/Components/AuthComponents/LoginComponents/PasswordTextInput";
import Checkbox from "@/Components/AuthComponents/LoginComponents/Checkbox";
import Button from "@/Components/AuthComponents/LoginComponents/Button";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            {status && <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">{status}</div>}

            <form onSubmit={submit}>
                <div className="flex flex-col justify-center items-center w-full gap-10">
                    <div className="flex flex-col justify-center items-center w-full gap-2">
                        <h1 className="text-text-light-primary dark:text-text-dark-primary text-xl md:text-3xl font-bold text-center">Vous avez oublié votre mot de passe ?</h1>
                        <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm md:text-base">Pas de problème, nous allons vous aider à le réinitialiser</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-5 w-full px-5 md:px-20">
                        <div className="flex flex-col justify-center items-end gap-2 w-full">
                            <EmailTextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="Adresse électronique"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} />
                        </div>

                        <div className="flex flex-row justify-center items-center w-full">
                            <Button className="w-full text-center" disabled={processing}>
                                Envoyer le lien de réinitialisation
                            </Button>
                        </div>
                    </div>

                    <div className="text-sm">
                        <span className="text-text-light-secondary dark:text-text-dark-secondary" >Votre mot de passe vous revient ? </span>
                        <Link
                            href={route('login')}
                            className="text-sm text-primary-main hover:underline"
                        >
                            Se connecter
                        </Link>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
