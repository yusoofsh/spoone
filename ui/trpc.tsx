"use client";

import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  unstable_httpBatchStreamLink as httpBatchStreamLink,
  // loggerLink,
} from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "@/lib/server/api/root";
import { getUrl, transformer } from "@/lib/utils";

const { createClient, Provider } = createTRPCReact<AppRouter>();

export const TRPCReactProvider = (props: {
  children: React.ReactNode;
  cookies: string;
}) => {
  const queryClient = useMemo(() => () => new QueryClient(), []);

  const trpcClient = useMemo(
    () => () =>
      createClient({
        transformer,
        links: [
          // loggerLink({
          //   enabled: (op) =>
          //     process.env.NODE_ENV === "development" ||
          //     (op.direction === "down" && op.result instanceof Error),
          // }),
          httpBatchStreamLink({
            url: getUrl(),
            headers() {
              return {
                cookie: props.cookies,
                "x-trpc-source": "react",
              };
            },
          }),
        ],
      }),
    [props.cookies],
  );

  return (
    <QueryClientProvider client={queryClient()}>
      <Provider client={trpcClient()} queryClient={queryClient()}>
        {props.children}
      </Provider>
    </QueryClientProvider>
  );
};
