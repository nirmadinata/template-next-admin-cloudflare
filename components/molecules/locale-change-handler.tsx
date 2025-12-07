import { useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";
import { useLocale } from "next-intl";

export function LocaleChangeHandler() {
    const locale = useLocale();

    const client = useQueryClient();

    useEffect(() => {
        client.invalidateQueries();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale]);

    return null;
}
