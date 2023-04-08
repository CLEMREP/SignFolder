import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import Button from "@/Components/AuthComponents/LoginComponents/Button";
import EmailTextInput from "@/Components/AuthComponents/LoginComponents/EmailTextInput";
import PasswordTextInput from "@/Components/AuthComponents/LoginComponents/PasswordTextInput";
import Checkbox from "@/Components/AuthComponents/LoginComponents/Checkbox";


export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div className="flex flex-col justify-center items-center w-full gap-10">
                    <div className="flex flex-col justify-center items-center w-full gap-2">
                        <h1 className="text-text-light-primary dark:text-text-dark-primary text-xl md:text-3xl font-bold text-center">Bon retour sur notre plateforme de gestion !</h1>
                        <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm md:text-base">Connectez-vous pour continuer</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-5 w-full px-5 md:px-20">
                        <div className="flex flex-col justify-center items-center gap-5 w-full">
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

                            <div className="flex flex-col justify-center items-end gap-2 w-full">
                                <div className="flex flex-col justify-center items-end gap-2 w-full">
                                    <PasswordTextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        placeholder="Mot de passe"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />

                                    <InputError message={errors.password} />
                                </div>

                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="text-sm text-primary-main hover:underline"
                                    >
                                        Mot de passe oublié ?
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-start gap-2 w-full">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Réster connecté</span>
                            </label>

                            <div className="flex flex-row justify-center items-center w-full">
                                <Button className="w-full text-center" disabled={processing}>
                                    Se connecter
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm">
                        <span className="text-text-light-secondary dark:text-text-dark-secondary" >Vous n'avez pas encore de compte ? </span>
                        <Link
                            href={route('register')}
                            className="text-sm text-primary-main hover:underline"
                        >
                            S'inscrire
                        </Link>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
