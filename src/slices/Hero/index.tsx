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
        <Bounded className="flex flex-col items-center justify-center gap-8 py-5 text-center">
            <PrismicRichText field={slice.primary.heading} />
            <PrismicRichText field={slice.primary.body} />
            <PrismicLink field={slice.primary.button_link} label={slice.primary.button_text} />
            <PrismicImage field={slice.primary.image} />
        </Bounded>
    );
};

export default Hero;
