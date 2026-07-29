"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import {
  siteProfile,
  soundCloudGroups,
  videos,
  type SoundCloudTrack,
} from "@/content/site";

function playerSrc(trackId: string) {
  return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23c4a574&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;
}

export default function Work() {
  const [groupId, setGroupId] = useState(soundCloudGroups[0]?.id ?? "");
  const group = useMemo(
    () => soundCloudGroups.find((g) => g.id === groupId) ?? soundCloudGroups[0],
    [groupId]
  );
  const [track, setTrack] = useState<SoundCloudTrack | undefined>(
    group?.tracks[0]
  );
  const [videoId, setVideoId] = useState(videos[0]?.id ?? "");
  const [scPlaying, setScPlaying] = useState(false);
  const [ytPlaying, setYtPlaying] = useState(false);

  const activeVideo = useMemo(
    () => videos.find((v) => v.id === videoId) ?? videos[0],
    [videoId]
  );

  function selectGroup(id: string) {
    setGroupId(id);
    const next = soundCloudGroups.find((g) => g.id === id);
    setTrack(next?.tracks[0]);
    setScPlaying(false);
  }

  function selectTrack(t: SoundCloudTrack) {
    setTrack(t);
    setScPlaying(false);
  }

  function selectVideo(id: string) {
    setVideoId(id);
    setYtPlaying(false);
  }

  return (
    <section id="work" className="scroll-mt-nav bg-[var(--bg)] py-20 md:py-28">
      <div className="container-site">
        <Reveal className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            Work
          </p>
          <h2 className="font-display text-3xl text-[var(--text)] md:text-4xl">
            Listen
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            Session and ensemble recordings, grouped by project. Full catalog on
            SoundCloud.
          </p>
        </Reveal>

        <Reveal delayMs={60} className="mb-16">
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
            {soundCloudGroups.map((g) => (
              <button
                key={g.id}
                type="button"
                aria-pressed={groupId === g.id}
                onClick={() => selectGroup(g.id)}
                className={`rounded-sm px-3 py-1.5 text-xs uppercase tracking-[0.14em] transition-colors ${
                  groupId === g.id
                    ? "bg-[var(--accent)] text-[var(--bg)]"
                    : "bg-white/5 text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-start">
            <ul className="flex flex-col gap-1 lg:col-span-4">
              {group?.tracks.map((t) => (
                <li key={t.id}>
                  <button
                    type="button"
                    aria-pressed={track?.id === t.id}
                    onClick={() => selectTrack(t)}
                    className={`w-full rounded-sm px-3 py-2.5 text-left transition-colors ${
                      track?.id === t.id
                        ? "bg-white/10 text-[var(--text)]"
                        : "text-[var(--text-muted)] hover:bg-white/5 hover:text-[var(--text)]"
                    }`}
                  >
                    <span className="block text-sm">{t.title}</span>
                    <span className="block text-xs opacity-70">{t.artist}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="lg:col-span-8">
              {track ? (
                scPlaying ? (
                  <iframe
                    key={track.id}
                    title={`${track.title} on SoundCloud`}
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={playerSrc(track.id)}
                    className="w-full bg-black/30"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setScPlaying(true)}
                    className="flex h-[166px] w-full flex-col items-start justify-center gap-2 border border-white/15 bg-black/40 px-4 text-left transition-colors hover:border-[var(--accent)] sm:px-6"
                    aria-label={`Load SoundCloud player for ${track.title}`}
                  >
                    <span className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                      SoundCloud
                    </span>
                    <span className="font-display text-xl text-[var(--text)] md:text-2xl">
                      {track.title}
                    </span>
                    <span className="text-sm text-[var(--text-muted)]">
                      {track.artist}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[var(--text)]">
                      <span
                        className="inline-block border-l-[10px] border-y-[6px] border-y-transparent border-l-[var(--accent)]"
                        aria-hidden
                      />
                      Play embed
                    </span>
                  </button>
                )
              ) : null}
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a
                  href="https://soundcloud.com/ogrods"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  Open full SoundCloud
                </a>
                <a
                  href="https://izelamusic.bandcamp.com/album/i-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  Izela - album I on Bandcamp
                </a>
                <a
                  href="https://soundcloud.com/zaubnasty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  ZAUB on SoundCloud
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <h3 className="font-display text-2xl text-[var(--text)]">
            Video
          </h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-start">
            <ul className="flex flex-col gap-1 lg:col-span-4">
              {videos.map((v) => (
                <li key={v.id}>
                  <button
                    type="button"
                    aria-pressed={videoId === v.id}
                    onClick={() => selectVideo(v.id)}
                    className={`w-full rounded-sm px-3 py-2.5 text-left transition-colors ${
                      videoId === v.id
                        ? "bg-white/10 text-[var(--text)]"
                        : "text-[var(--text-muted)] hover:bg-white/5 hover:text-[var(--text)]"
                    }`}
                  >
                    <span className="block text-sm">{v.title}</span>
                    <span className="block text-xs opacity-70">{v.detail}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="lg:col-span-8">
              <div className="aspect-video overflow-hidden bg-black">
                {activeVideo ? (
                  ytPlaying ? (
                    <iframe
                      key={activeVideo.id}
                      title={`${activeVideo.title} - ${activeVideo.detail}`}
                      src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setYtPlaying(true)}
                      className="group relative block h-full w-full"
                      aria-label={`Play video: ${activeVideo.title}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element -- facade poster from YT CDN before iframe loads */}
                      <img
                        src={`https://i.ytimg.com/vi/${activeVideo.id}/hqdefault.jpg`}
                        alt=""
                        className="h-full w-full scale-110 object-cover opacity-90 transition-opacity group-hover:opacity-100"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="absolute inset-0 bg-black/35" aria-hidden />
                      <span
                        className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg)] shadow-lg transition-transform group-hover:scale-105"
                        aria-hidden
                      >
                        <span className="ml-1 inline-block border-l-[14px] border-y-[9px] border-y-transparent border-l-[var(--bg)]" />
                      </span>
                      <span className="absolute bottom-3 left-3 right-3 text-left text-sm text-white drop-shadow">
                        {activeVideo.title}
                      </span>
                    </button>
                  )
                ) : null}
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                {activeVideo?.relatedUrl ? (
                  <a
                    href={activeVideo.relatedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] underline-offset-4 hover:underline"
                  >
                    {activeVideo.relatedLabel ?? "Related link"}
                  </a>
                ) : null}
                {siteProfile.social.map((s) => (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] underline-offset-4 hover:underline"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
