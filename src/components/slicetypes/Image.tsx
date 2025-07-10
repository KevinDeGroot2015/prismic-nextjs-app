import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

type ImageProps = {
    field: ImageField | null | undefined,
};

export default async function Image({ field }: ImageProps) {
    return (
        <PrismicNextImage field={field} />
    )
}