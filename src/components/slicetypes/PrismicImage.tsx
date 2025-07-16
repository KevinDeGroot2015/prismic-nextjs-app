import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

type PrismicImageProps = {
    field: ImageField | null | undefined,
    className?: string,
    alt?: string;
};

export default async function PrismicImage({ field, className }: PrismicImageProps) {
    const resolvedAlt = field?.alt ?? "";

    return (
        <PrismicNextImage field={field} className={className} alt={resolvedAlt as ""} />
    );
}
