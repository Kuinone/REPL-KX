"use client";

import { useEffect, useState } from "react";
import EditorScreenLoader from "./EditorScreenLoader";

/**
 * The editor lives at a single static route (`/song`) and the song id travels
 * in the URL hash (`/song#<id>`). This is fully static-host friendly — there
 * are no dynamic routes to pre-render — so it deploys cleanly on Cloudflare
 * Pages without rewrites. Reading `window.location.hash` directly (instead of
 * `useParams`) keeps us decoupled from Next.js's dynamic-route resolution,
 * which cannot know arbitrary song ids at build time.
 */
function songIdFromHash(): string {
  if (typeof window === "undefined") return "new";
  const hash = window.location.hash.replace(/^#/, "");
  // support both `/song#abc` and `/song#/abc`
  const id = hash.replace(/^\/+/, "").replace(/\/+$/, "");
  return id || "new";
}

export default function SongScreen() {
  const [songId, setSongId] = useState<string>(songIdFromHash);

  useEffect(() => {
    const onHash = () => setSongId(songIdFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return <EditorScreenLoader songId={songId} />;
}