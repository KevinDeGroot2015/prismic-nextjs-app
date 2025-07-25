import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { asLink } from "@prismicio/helpers";

type PrismicRichTextProps = {
    field: RichTextField | null | undefined
};

export default async function PrismicRichtext({ field }: PrismicRichTextProps) {
    const linkResolver = (doc: { uid?: string }) => `/${doc.uid ?? ""}`;

    return (
        <PrismicRichText field={field} components={{
            heading1: ({ children }) => <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight font-display text-slate-700 max-w-2xl">{children}</h1>,
            heading2: ({ children }) => <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight font-display text-slate-700">{children}</h2>,
            heading3: ({ children }) => <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight font-display text-slate-700">{children}</h3>,
            heading4: ({ children }) => <h4 className="text-xl md:text-2xl font-bold leading-tight tracking-tight font-display text-slate-700">{children}</h4>,
            heading5: ({ children }) => <h5 className="text-lg md:text-xl font-bold leading-tight tracking-tight font-display text-slate-700">{children}</h5>,
            heading6: ({ children }) => <h6 className="text-base md:text-lg font-bold leading-tight tracking-tight font-display text-slate-700">{children}</h6>,
            paragraph: ({ children }) => <p className="text-base md:text-lg leading-relaxed tracking-tight text-slate-700">{children}</p>,
            preformatted: ({ children }) => <pre className="text-base md:text-lg leading-relaxed tracking-tight text-slate-700 bg-slate-100 p-4 rounded-lg shadow-sm">{children}</pre>,
            strong: ({ children }) => <strong className="font-semibold text-slate-700">{children}</strong>,
            em: ({ children }) => <em className="italic text-slate-700">{children}</em>,
            listItem: ({ children }) => <li className="text-base md:text-lg leading-relaxed tracking-tight text-slate-700 list-disc pl-5">{children}</li>,
            oListItem: ({ children }) => <li className="text-base md:text-lg leading-relaxed tracking-tight text-slate-700 list-decimal pl-5">{children}</li>,
            list: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
            oList: ({ children }) => <ol className="list-decimal pl-5">{children}</ol>,
            image: ({ node }) =>
                node.linkTo
                    ? `[![${node.alt}](${node.url})](${node.linkTo.url})\n\n`
                    : `![${node.alt}](${node.url})\n\n`,
            embed: ({ node }) => `${node.oembed.html}\n\n`,
            hyperlink: ({ node, children }) =>
                `[${children.join("")}](${asLink(node.data, linkResolver)})`,
            label: ({ children }) => children.join(""),
            span: ({ text }) => text.replace("\n", "<br/>"),
        }} />
    )
}