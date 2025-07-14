import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

type PrismicLinkProps = {
    as?: "Link" | "Button",
    field: LinkField | null | undefined,
    className?: string,
    label: KeyTextField,
};

export default async function PrismicLink({ as = "Link", field, className, label }: PrismicLinkProps) {
    const isButton = as === "Button";
    const buttonClasses = "bg-cyan-700 hover:bg-cyan-900 rounded-full text-white px-5 py-3 transition-colors duration-200";
    const linkClasses = "underline text-cyan-700 hover:text-cyan-900";
    const combinedClassName = `${className} ${isButton ? buttonClasses : linkClasses}`.trim();

    return (
        <PrismicNextLink field={field} className={combinedClassName}>
            {label}
        </PrismicNextLink>
    )
}