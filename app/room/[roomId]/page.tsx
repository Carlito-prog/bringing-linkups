import Image from "next/image";

type RoomRedirectPageProps = {
  params: Promise<{
    roomId: string;
  }>;
};

export default async function RoomRedirectPage({
  params,
}: RoomRedirectPageProps) {
  const { roomId } = await params;
  const roomUrl = `https://www.bringinglinkups.com/room/${roomId}`;

  return (
    <main className="min-h-[70vh] bg-[#111111] px-6 py-24 text-white">
      <section className="mx-auto flex max-w-xl flex-col items-center text-center">
        <Image
          src="/images/blu-icon.svg"
          alt="BLU"
          width={80}
          height={80}
          className="mb-8 h-20 w-20"
        />
        <h1 className="font-[family-name:var(--font-merri)] text-4xl font-black leading-tight md:text-5xl">
          Open This Room In BLU
        </h1>
        <p className="mt-6 text-lg text-white/80">
          This link is set up to open directly in the BLU app when it is
          installed.
        </p>
        <a
          href={roomUrl}
          className="mt-8 rounded-md bg-[#dcff00] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-white"
        >
          Open Room
        </a>
      </section>
    </main>
  );
}
