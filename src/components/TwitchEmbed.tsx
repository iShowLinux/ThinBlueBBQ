import React from "react";

type TwitchEmbedProps = {
  channel?: string;
  muted?: boolean;
  autoplay?: boolean;
  height?: number;
};

const TwitchEmbed: React.FC<TwitchEmbedProps> = ({
  channel = "ThinBlueBarBQue",
  muted = true,
  autoplay = false,
  height = 360,
}) => {
  // Note: Twitch requires the `parent` param to match your domain in production.
  const hostname = typeof window !== "undefined" ? window.location.hostname : "";
  // Twitch requires a parent param; provide a sensible default list if hostname is empty.
  const parent = hostname || "thinbluebbq.com";
  const src = `https://player.twitch.tv/?channel=${encodeURIComponent(
    channel,
  )}&parent=${encodeURIComponent(parent)}&autoplay=${autoplay ? "true" : "false"}&muted=${muted ? "true" : "false"}`;

  // Use a fixed 16:9 aspect ratio (56.25%) to avoid layout jump/height issues.
  const aspectPercentage = (9 / 16) * 100; // 56.25

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg bg-black">
      <div className="relative" style={{ paddingTop: `${aspectPercentage}%` }}>
        <iframe
          title={`Twitch - ${channel}`}
          src={src}
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
      <noscript className="block p-4 text-sm text-muted-foreground bg-muted/10">Enable JavaScript to view the live stream.</noscript>
    </div>
  );
};

export default TwitchEmbed;
