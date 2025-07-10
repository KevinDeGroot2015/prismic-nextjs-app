import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

type PrismicLinkProps = {
    field: LinkField | null | undefined,
    className?: string,
    label: KeyTextField,
};

export default async function PrismicLink({ field, className, label }: PrismicLinkProps) {
    return (
        <PrismicNextLink field={field} className={`${className} bg-cyan-700 hover:bg-cyan-900 rounded-full text-white px-5 py-3 transition-colors duration-200`}>
            {label}
        </PrismicNextLink>
    )
}