/* Process — full-width image with three overlaid step cards */

/* Background team-meeting photo */
const imgBg = "https://www.figma.com/api/mcp/asset/22d671c4-863f-4cde-baf2-a20cd1c87f3a";

/* Each step has a colour-coded number badge */
const steps = [
  {
    num: "1",
    color: "#3fbbe0",
    border: "rgba(63,187,224,0.12)",
    title: "Discover",
    desc: "We immerse in your business, map the highest opportunities, and align on outcomes.",
  },
  {
    num: "2",
    color: "#8a79f1",
    border: "rgba(138,121,241,0.12)",
    title: "Design",
    desc: "Rapid prototypes and system blueprints — UX, data model, evaluation criteria.",
  },
  {
    num: "3",
    color: "#3fac92",
    border: "rgba(63,172,146,0.12)",
    title: "Build",
    desc: "Production-grade AI features, shipped in two-week increments with weekly demos.",
  },
];

const Process = () => {
  return (
    <section id="process" className="bg-[#fafafa] py-[100px]">
      <div className="mx-auto max-w-[1224px] px-4 sm:px-6 lg:px-0">

        {/* Section header — centred */}
        <div className="flex flex-col items-center text-center gap-4 mb-[54px]">
          <p
            className="font-inter font-normal text-primary capitalize leading-[1.66]"
            style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
          >
            • Process •
          </p>
          <h2
            className="font-rubik font-medium text-[#141414] leading-[1.12] max-w-[425px]"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-2.88px" }}
          >
            A clear path from idea to impact
          </h2>
        </div>

        {/* Full-width image card with step cards overlaid at the bottom */}
        <div className="relative rounded-[24px] overflow-hidden h-[612px]">

          {/* Background photo */}
          <div className="absolute inset-0">
            <img
              src={imgBg}
              alt="Team collaborating in a meeting"
              className="absolute max-w-none"
              style={{
                width: "100%",
                height: "133.3%",
                top: "-24.69%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Gradient overlay at the bottom — darkens so white cards pop */}
          <div
            className="absolute bottom-0 left-0 w-full h-[204px]"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.32) 100%)",
            }}
          />

          {/* Step cards row */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col sm:flex-row gap-6 p-6">
            {steps.map(({ num, color, border, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl flex-1 overflow-hidden p-6 flex flex-col gap-4"
              >
                {/* Numbered badge */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border-4"
                  style={{ backgroundColor: color, borderColor: border }}
                >
                  <span
                    className="font-inter font-medium text-white capitalize leading-[1.56]"
                    style={{ fontSize: "16px", letterSpacing: "-0.64px" }}
                  >
                    {num}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-clash font-medium text-black leading-[1.12]"
                    style={{ fontSize: "24px", letterSpacing: "-0.72px" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="font-inter font-normal text-[rgba(0,0,0,0.7)] leading-[1.5]"
                    style={{ fontSize: "16px", letterSpacing: "-0.64px" }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
