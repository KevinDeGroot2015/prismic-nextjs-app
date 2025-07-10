import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

type RichTextProps = {
    field: RichTextField | null | undefined
};

export default async function Richtext({ field }: RichTextProps) {
    return (
        <PrismicRichText field={field} components={{
            heading1: ({ children }) => <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight font-display text-slate-700">{children}</h1>,
        }} />
    )
}