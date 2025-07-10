import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import RichText from "@/components/slicetypes/RichText";
import Link from "@/components/slicetypes/Link";
import Image from "@/components/slicetypes/Image";

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
            <RichText field={slice.primary.heading} />
            <RichText field={slice.primary.body} />
            <Link field={slice.primary.button_link} className="bg-cyan-700 hover:bg-cyan-900 rounded-full text-white px-5 py-3 transition-colors duration-200" label={slice.primary.button_text} />
            <Image field={slice.primary.image} />
        </Bounded>
    );
};

export default Hero;
