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
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NuqsAdapter>
                    <NextIntlClientProvider>
                        <ClientProvider>{children}</ClientProvider>
                    </NextIntlClientProvider>
                </NuqsAdapter>
            </body>
        </html>
    );
}
