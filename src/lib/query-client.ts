import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10, // renamed from cacheTime in v5
      retry: 2,
      refetchOnWindowFocus: false, // not applicable on mobile
    },
  },
});
