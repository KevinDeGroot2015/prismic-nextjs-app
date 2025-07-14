import { createClient } from "@/prismicio";
import Link from "next/link";
import PrismicLink from "./slicetypes/PrismicLink";

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");

    return (
        <header>
            <Link href="/">
                {settings.data.site_title}
            </Link>
            <nav>
                <ul>
                    {settings.data.navigation?.map(({ label, link }) => (
                        <li key={label}>
                            <PrismicLink as="Link" field={link} label={label} />
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}