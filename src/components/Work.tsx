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

  function selectGroup(id: string) {
    setGroupId(id);
    const next = soundCloudGroups.find((g) => g.id === id);
    setTrack(next?.tracks[0]);
  }

  return (
    <section id="work" className="scroll-mt-16 bg-[var(--bg)] py-20 md:py-28">
      <div className="container-site">
        <Reveal className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            Work
          </p>
          <h2 className="font-display text-3xl text-[var(--text)] md:text-4xl">
            Listen
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            Session and ensemble recordings grouped by project. One player at a
            time — full archive on SoundCloud.
          </p>
        </Reveal>

        <Reveal delayMs={60} className="mb-16">
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
            {soundCloudGroups.map((g) => (
              <button
                key={g.id}
                type="button"
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

          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            <ul className="flex flex-col gap-1 lg:col-span-4">
              {group?.tracks.map((t) => (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => setTrack(t)}
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
                <iframe
                  key={track.id}
                  title={`${track.title} on SoundCloud`}
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  loading="lazy"
                  src={playerSrc(track.id)}
                  className="w-full bg-black/30"
                />
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
                  Izela — album I on Bandcamp
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <h3 className="mb-4 font-display text-2xl text-[var(--text)]">
            Video
          </h3>
          <div className="grid gap-6 lg:grid-cols-12">
            <ul className="flex flex-col gap-1 lg:col-span-4">
              {videos.map((v) => (
                <li key={v.id}>
                  <button
                    type="button"
                    onClick={() => setVideoId(v.id)}
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
            <div className="aspect-video overflow-hidden bg-black lg:col-span-8">
              {videoId ? (
                <iframe
                  key={videoId}
                  title="Selected video"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : null}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-[var(--text-muted)]">
            {siteProfile.social.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
