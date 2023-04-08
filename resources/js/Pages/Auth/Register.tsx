import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import EmailTextInput from "@/Components/AuthComponents/LoginComponents/EmailTextInput";
import PasswordTextInput from "@/Components/AuthComponents/LoginComponents/PasswordTextInput";
import Checkbox from "@/Components/AuthComponents/LoginComponents/Checkbox";
import Button from "@/Components/AuthComponents/LoginComponents/Button";
import NameTextInput from "@/Components/AuthComponents/RegisterComponents/NameTextInput";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className="flex flex-col justify-center items-center w-full gap-10">
                    <div className="flex flex-col justify-center items-center w-full gap-2">
                        <h1 className="text-text-light-primary dark:text-text-dark-primary text-xl md:text-3xl font-bold text-center">Bienvenue sur notre plateforme de gestion !</h1>
                        <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm md:text-base">Créez votre compte pour continuer</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-5 w-full px-5 md:px-20">
                        <div className="flex flex-col justify-center items-center gap-5 w-full">
                            <div className="flex flex-col justify-center items-end gap-2 w-full">
                                <NameTextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    autoComplete="name"
                                    placeholder="Nom complet"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />

                                <InputError message={errors.name} />
                            </div>

                            <div className="flex flex-col justify-center items-end gap-2 w-full">
                                <EmailTextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    placeholder="Adresse électronique"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />

                                <InputError message={errors.email} />
                            </div>

                            <div className="flex flex-col justify-center items-end gap-2 w-full">
                                <PasswordTextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    placeholder="Mot de passe"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password} />
                            </div>

                            <div className="flex flex-col justify-center items-end gap-2 w-full">
                                <PasswordTextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    placeholder="Confirmer le mot de passe"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password_confirmation} />
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-center w-full">
                            <Button className="w-full text-center" disabled={processing}>
                                S'inscrire
                            </Button>
                        </div>
                    </div>

                    <div className="text-sm">
                        <span className="text-text-light-secondary dark:text-text-dark-secondary" >Vous avez déjà un compte ? </span>
                        <Link
                            href={route('login')}
                            className="text-sm text-primary-main hover:underline"
                        >
                            Connectez-vous
                        </Link>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
