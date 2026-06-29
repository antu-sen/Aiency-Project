/* Hero — full-width hero section with heading, CTA buttons, and floating stat cards */
import Navbar from "./Navbar";

/* ── Image assets from Figma ─────────────────────────────────────── */
const imgLeftMask   = "https://www.figma.com/api/mcp/asset/f1c1191a-e54a-431d-945f-85d0c56f2af7";
const imgRightMask  = "https://www.figma.com/api/mcp/asset/c8bf47fd-c395-442e-9061-c01b3f804ce1";
const imgArrow      = "https://www.figma.com/api/mcp/asset/92f367c3-a0bf-468d-8dd9-02e643b92995";
const imgPolygonBg  = "https://www.figma.com/api/mcp/asset/afcc34c1-d794-4a0f-be28-a7a6d9451873";

/* Stat card assets — each card is a Figma-masked UI screenshot */
const imgStatLeft      = "https://www.figma.com/api/mcp/asset/8d668ad4-7d49-4da1-b0ce-34392332d941";
const imgStatLeftMask  = "https://www.figma.com/api/mcp/asset/6b68d918-3b5f-45f6-9a0a-9a13401fae42";
const imgStatRight     = "https://www.figma.com/api/mcp/asset/a45bd06f-817a-4f64-9cc7-9773b9dfebd9";
const imgStatRightMask = "https://www.figma.com/api/mcp/asset/2974da2d-dacd-4ee9-ab48-0b0e7d9c0b95";

/* Center AI person image */
const imgPersonMask    = "https://www.figma.com/api/mcp/asset/d6faa321-5217-4f0b-8f0b-f4c1ef003820";
const imgPerson        = "https://www.figma.com/api/mcp/asset/5aa58d6c-4575-455e-8d95-ca27bed746c6";

const Hero = () => {
  return (
    /* The hero section is 1109px tall at desktop, matches the Figma "Rubik" frame */
    <section
      id="home"
      className="bg-[#fafafa] relative overflow-hidden"
      style={{ minHeight: "1109px" }}
    >
      {/* ── Decorative masks (left and right edge gradients) ─────────── */}
      <div className="absolute left-0 top-0 w-[516px] h-[651px] hidden xl:block pointer-events-none">
        <img
          src={imgLeftMask}
          alt=""
          className="w-full h-full object-cover"
          style={{ transform: "rotate(90deg) scaleY(-1)", transformOrigin: "center" }}
        />
      </div>
      <div className="absolute right-0 top-0 w-[516px] h-[651px] hidden xl:block pointer-events-none">
        <img
          src={imgRightMask}
          alt=""
          className="w-full h-full object-cover"
          style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
        />
      </div>

      {/* ── Navbar ───────────────────────────────────────────────────── */}
      <Navbar />

      {/* ── Hero content (heading + subtitle + CTAs) ─────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-[160px] pb-8">
        <div className="max-w-[688px] flex flex-col gap-4">
          {/* Main heading — uses Rubik font as in Figma */}
          <h1
            className="font-rubik font-medium text-[#141414] leading-[1.12]"
            style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-4.32px" }}
          >
            AI design agency for modern business
          </h1>
          <p
            className="font-inter font-normal text-[rgba(20,20,20,0.7)] capitalize leading-[1.66]"
            style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
          >
            Scale your digital ecosystem through intelligent systems that adapt, learn, and grow
            with your business goals, driving continuous innovation and efficiency.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex gap-3 mt-7 flex-wrap justify-center">
          <button
            className="flex items-center gap-2 bg-primary text-white font-inter font-medium
                       text-[16px] leading-[1.56] tracking-[-0.64px] capitalize
                       px-6 py-4 rounded-lg hover:bg-[#33a8cc] transition-colors"
          >
            Start a Project
            <img src={imgArrow} alt="" className="w-5 h-5" />
          </button>
          <button
            className="flex items-center bg-white border border-[rgba(20,20,20,0.24)]
                       font-inter font-medium text-[#141414] text-[16px] leading-[1.56]
                       tracking-[-0.64px] capitalize px-6 py-4 rounded-lg
                       hover:bg-[#f0f0f0] transition-colors"
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* ── Hexagonal polygon decorative background ───────────────────── */}
      <div className="absolute bottom-0 left-0 w-full h-[570px] pointer-events-none">
        <div
          className="absolute"
          style={{
            inset: "-70.18% -34.03% -109.65% -34.03%",
          }}
        >
          <img src={imgPolygonBg} alt="" className="block w-full h-full max-w-none" />
        </div>
      </div>

      {/* ── Blur overlay (fades out the bottom of the polygon bg) ─────── */}
      <div
        className="absolute bottom-[-104px] left-[-36px] pointer-events-none"
        style={{
          width: "1512px",
          height: "194px",
          backgroundColor: "#fafafa",
          filter: "blur(44px)",
        }}
      />

      {/* ── Floating stat cards + center AI image ─────────────────────── */}
      <div className="hidden lg:block">

        {/* Left stat card */}
        <div
          className="absolute"
          style={{
            top: "647px",
            left: "108px",
            width: "475px",
            height: "250px",
            WebkitMaskImage: `url("${imgStatLeftMask}")`,
            maskImage: `url("${imgStatLeftMask}")`,
            WebkitMaskSize: "468.354px 250px",
            maskSize: "468.354px 250px",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "-0.395px 0px",
            maskPosition: "-0.395px 0px",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src={imgStatLeft}
              alt="Aiency stats: Tasks Automated, Automation metrics"
              className="absolute max-w-none"
              style={{
                height: "123.74%",
                left: "-16.67%",
                top: "-11.51%",
                width: "140.91%",
              }}
            />
          </div>
        </div>

        {/* Center AI person image */}
        <div
          className="absolute"
          style={{
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "540.038px",
            height: "578.572px",
            WebkitMaskImage: `url("${imgPersonMask}")`,
            maskImage: `url("${imgPersonMask}")`,
            WebkitMaskSize: "540.038px 578.572px",
            maskSize: "540.038px 578.572px",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "0px -0.428px",
            maskPosition: "0px -0.428px",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src={imgPerson}
              alt="AI-powered professional with smart visor"
              className="absolute max-w-none"
              style={{
                height: "107.52%",
                left: "-29.56%",
                top: "-7.52%",
                width: "141.9%",
              }}
            />
          </div>
        </div>

        {/* Right stat card */}
        <div
          className="absolute"
          style={{
            top: "647px",
            left: "calc(58.33% + 12px)",
            width: "480px",
            height: "250px",
            WebkitMaskImage: `url("${imgStatRightMask}")`,
            maskImage: `url("${imgStatRightMask}")`,
            WebkitMaskSize: "468px 250px",
            maskSize: "468px 250px",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "12px 0px",
            maskPosition: "12px 0px",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src={imgStatRight}
              alt="Aiency stats: Optimization, Intelligence Index"
              className="absolute max-w-none"
              style={{
                height: "123.32%",
                left: "-23.53%",
                top: "-11.54%",
                width: "139.67%",
              }}
            />
          </div>
        </div>

      </div>

      {/* ── Mobile stat card previews (shown instead of the masked version) ── */}
      <div className="lg:hidden flex justify-center gap-4 px-4 mt-8 pb-12 flex-wrap">
        <img
          src={imgStatLeft}
          alt="Aiency stats"
          className="w-full max-w-[280px] rounded-2xl shadow-sm"
        />
        <img
          src={imgStatRight}
          alt="Aiency stats"
          className="w-full max-w-[280px] rounded-2xl shadow-sm"
        />
      </div>

    </section>
  );
};

export default Hero;
