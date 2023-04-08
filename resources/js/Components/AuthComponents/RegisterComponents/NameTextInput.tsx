import { forwardRef, useEffect, useImperativeHandle, useRef, InputHTMLAttributes } from 'react';
import Icons from "@/Components/Icons";

export default forwardRef(function NameTextInput(
    { type = 'text', className = '', isFocused = false, ...props }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <div className="relative w-full">
            <Icons className={"absolute inset-y-0 my-auto w-12 fill-text-light-disabled dark:fill-text-dark-disabled"} iconName={'name'} size={25} />
            <input
                {...props}
                type={type}
                className="text-text-light-secondary dark:text-text-dark-secondary text-sm md:text-base placeholder:text-text-light-disabled placeholder:dark:text-text-dark-disabled placeholder:text-sm placeholder:md:text-base w-full p-3 pl-12 rounded-xl bg-transparent border-2 border-background-light-neutral dark:border-background-dark-neutral focus:border-primary-main focus:dark:border-primary-main transition-colors duration-150 focus:ring-0"
                ref={localRef}
            />
        </div>
    );
});
