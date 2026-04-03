import { useQuery } from "@tanstack/react-query";

async function fetchHealth(): Promise<{ status: string }> {
  const res = await fetch("https://httpbin.org/get");
  if (!res.ok) throw new Error("Network error");
  return res.json() as Promise<{ status: string }>;
}

export function useHealth() {
  return useQuery({ queryKey: ["health"], queryFn: fetchHealth });
}
