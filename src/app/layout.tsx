import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import type { Metadata, ResolvingMetadata } from 'next'

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client.getSingle("settings");

    return {
        title: page.data.site_title || "Default Title",
        description: page.data.meta_description || "Default description",
        openGraph: {
            images: [page.data.og_image?.url || "Missing image"],
        }
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <header>Header</header>
                {children}
                <footer>Footer</footer>
            </body>
        </html>
    );
}
