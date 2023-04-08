import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-background-light-default dark:bg-background-dark-default">
            {children}
        </div>
    );
}
