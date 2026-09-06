import SongScreen from '@/components/editor/SongScreen';

// Static export requires a fixed set of params for dynamic routes. The real
// song id is read from the URL on the client (local-first app), so a single
// placeholder is enough to emit the route at build time.
export function generateStaticParams() {
  return [{ id: "new" }];
}

export default function SongPage() {
  return <SongScreen />;
}
