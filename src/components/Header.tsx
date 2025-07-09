import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");

    return (
        <header>
            {settings.data.site_title}
            <nav>
                <ul>
                    {settings.data.navigation?.map(({label, link}) => (
                        <li key={label}>
                            <PrismicNextLink field={link}>{label}</PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}