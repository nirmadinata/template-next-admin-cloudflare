"use client";

import { PropsWithChildren } from "react";

import { TanStackDevtools } from "@tanstack/react-devtools";
import { FormDevtoolsPanel } from "@tanstack/react-form-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";

import { LocaleChangeHandler } from "./locale-change-handler";
import queryClient from "@/lib/tanstack-query-client";

type Props = PropsWithChildren;

export function ClientProvider({ children }: Props) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <TanStackDevtools
                plugins={[
                    {
                        name: "TStack Form",
                        defaultOpen: false,
                        render: <FormDevtoolsPanel />,
                    },
                    {
                        name: "TStack Query",
                        defaultOpen: false,
                        render: <ReactQueryDevtoolsPanel />,
                    },
                ]}
            />
            <LocaleChangeHandler />
        </QueryClientProvider>
    );
}
