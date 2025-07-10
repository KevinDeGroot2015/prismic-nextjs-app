import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

type LinkProps = {
    field: LinkField | null | undefined,
    className?: string,
    label: KeyTextField,
};

export default async function Link({ field, className, label }: LinkProps) {
    return (
        <PrismicNextLink field={field} className={className}>
            {label}
        </PrismicNextLink>
    )
}