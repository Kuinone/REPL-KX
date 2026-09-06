import SongScreen from "@/components/editor/SongScreen";

// The song id lives in the URL hash (`/song#<id>`), so this is a plain static
// route — no dynamic params needed, which keeps `output: export` clean.
export default function SongPage() {
  return <SongScreen />;
}