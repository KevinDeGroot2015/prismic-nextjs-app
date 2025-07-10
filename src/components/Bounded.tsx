type BoundedProps = {
    className?: string,
    children: React.ReactNode,
}

export default async function Bounded({ className, children }: BoundedProps) {
    return (
        <section className={className}>
            {children}
        </section>
    );
}