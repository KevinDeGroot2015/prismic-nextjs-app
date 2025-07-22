import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import PrismicRichText from "@/components/slicetypes/PrismicRichText";
import PrismicLink from "@/components/slicetypes/PrismicLink";
import PrismicImage from "@/components/slicetypes/PrismicImage";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
    return (
        <>
            {slice.variation === "default" && (
                <Bounded className="grid grid-cols-1 place-items-center gap-10 text-center" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
                    <PrismicRichText field={slice.primary.heading} />
                    <PrismicRichText field={slice.primary.body} />
                    <PrismicLink field={slice.primary.button_link} label={slice.primary.button_text} as="Button" />
                    <PrismicImage field={slice.primary.image} />
                </Bounded>
            )}
            {slice.variation === "horizontal" && (
                <Bounded className="grid md:grid-cols-2 gap-10" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
                    <div className="grid grid-rows-[1fr,auto,auto] gap-10 h-fit">
                        <PrismicRichText field={slice.primary.heading} />
                        <PrismicRichText field={slice.primary.body} />
                        <PrismicLink field={slice.primary.button_link} label={slice.primary.button_text} as="Button" />
                    </div>
                    <PrismicImage field={slice.primary.image} />
                </Bounded>
            )}
        </>
    );
};

export default Hero;
