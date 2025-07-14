import React from "react";

type BoundedProps = {
    as?: React.ElementType,
    className?: string,
    children: React.ReactNode,
}

export default async function Bounded({ as: Comp = "section", className, children, ...restProps }: BoundedProps) {
    return (
        <Comp className={`mx-auto w-full max-w-6xl px-4 py-6 md:py-8 md:px-6 lg:py-10 ${className}`} {...restProps}>
            {children}
        </Comp>
    );
}