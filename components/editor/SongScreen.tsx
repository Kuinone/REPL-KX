"use client";

import { useSearchParams } from "next/navigation";
import EditorScreenLoader from "./EditorScreenLoader";

/**
 * The editor lives at a single static route (`/song`) and the song id travels
 * in a query param (`/song?id=<id>`; `new` or missing = create a new song).
 * Reading `useSearchParams()` keeps us decoupled from dynamic-route resolution,
 * so the whole app is static-host friendly (deploys cleanly on Cloudflare
 * Pages) while still being reactive to client-side navigation.
 */
export default function SongScreen() {
  const searchParams = useSearchParams();
  const songId = searchParams.get("id") || "new";
  return <EditorScreenLoader songId={songId} />;
}