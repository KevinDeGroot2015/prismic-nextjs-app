import { createClient } from "@/prismicio";

export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>©{year} {settings.data.site_title}</p>
        </footer>
    );
}