"use client";

import { useParams } from "next/navigation";
import EditorScreenLoader from "./EditorScreenLoader";

/**
 * Reads the dynamic route's `id` param on the client. The app is local-first
 * (songs live in the browser's IndexedDB), so there is no server-side list of
 * ids to pre-render; this wrapper lets the whole route be statically exported.
 */
export default function SongScreen() {
  const params = useParams<{ id: string }>();
  const songId = Array.isArray(params?.id) ? params.id[0] : params?.id ?? "new";
  return <EditorScreenLoader songId={songId} />;
}