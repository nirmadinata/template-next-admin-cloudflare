import "./globals.css";

import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { ClientProvider } from "@/components/molecules/client-provider";
import { DEFAULT_ROOT_METADATA } from "@/configs/constants";
import { geistMono, geistSans } from "@/configs/fonts";

export async function generateMetadata(): Promise<Metadata> {
    return DEFAULT_ROOT_METADATA;
}

type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function Layout({ children }: Props) {
    return (
        <html>
            <head>{/* Put favicon here */}</head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NextIntlClientProvider>
                    <NuqsAdapter>
                        <ClientProvider>{children}</ClientProvider>
                    </NuqsAdapter>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
