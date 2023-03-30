import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { User } from '@/types';

export default function Authenticated({ user, children }: PropsWithChildren<{ user: User }>) {
    return (
        <div className="h-screen bg-background-light-default dark:bg-background-dark-default">
            <main className="h-full">{children}</main>
        </div>
    );
}
