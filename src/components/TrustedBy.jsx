/* TrustedBy — horizontal strip of partner/client logos */

/* Logo image assets from Figma */
const imgZenZap    = "https://www.figma.com/api/mcp/asset/7eb0067a-16dd-4f53-9497-44760a1bd260";
const imgSparkle   = "https://www.figma.com/api/mcp/asset/8b2e79bb-fceb-470c-aebb-0bfe7821cc79";
const imgCraftgram = "https://www.figma.com/api/mcp/asset/9fc56741-bafa-458b-97c2-f134a65ca3e3";
const imgPulse     = "https://www.figma.com/api/mcp/asset/be462bb8-b715-4979-af35-d47c6d2c6f45";
const imgSparkle2  = "https://www.figma.com/api/mcp/asset/8b2e79bb-fceb-470c-aebb-0bfe7821cc79";
const imgSwift     = "https://www.figma.com/api/mcp/asset/041f4e5e-ca5d-4d55-ac58-e13ba90c4753";

const logos = [
  { src: imgZenZap,    alt: "ZenZap",    w: 96,  h: 30 },
  { src: imgSparkle,   alt: "Sparkle",   w: 94,  h: 26 },
  { src: imgCraftgram, alt: "Craftgram", w: 119, h: 24 },
  { src: imgPulse,     alt: "Pulse",     w: 80,  h: 21 },
  { src: imgSparkle2,  alt: "Sparkle",   w: 94,  h: 26 },
  { src: imgSwift,     alt: "Swift",     w: 67,  h: 19 },
];

const TrustedBy = () => {
  return (
    <section className="bg-[#fafafa] py-[64px]">
      <div className="mx-auto max-w-[1224px] px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-[80px]">

          {/* Label */}
          <p
            className="font-inter font-normal text-[rgba(20,20,20,0.7)] leading-[1.66] flex-shrink-0 max-w-[250px]"
            style={{ fontSize: "16px", letterSpacing: "-0.64px" }}
          >
            Trusted by fast-growing companies around the world
          </p>

          {/* Logo row */}
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 flex-1">
            {logos.map(({ src, alt, w, h }) => (
              <img
                key={alt + w}
                src={src}
                alt={alt}
                style={{ width: w, height: h }}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
