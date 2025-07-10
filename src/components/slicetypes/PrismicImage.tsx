import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

type PrismicImageProps = {
    field: ImageField | null | undefined,
    className?: string
};

export default async function PrismicImage({ field, className }: PrismicImageProps) {
    return (
        <PrismicNextImage field={field} className={className} />
    )
}