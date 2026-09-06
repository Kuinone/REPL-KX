import { Suspense } from "react";
import SongScreen from "@/components/editor/SongScreen";

// The song id lives in the URL query (`/song?id=<id>`), so this is a plain
// static route — no dynamic params needed, which keeps `output: export` clean.
// Suspense is required around the client component because it uses
// `useSearchParams`.
export default function SongPage() {
  return (
    <Suspense>
      <SongScreen />
    </Suspense>
  );
}