/* Services — 3×2 grid of service cards with images and text */

const imgPolygon1 = "https://www.figma.com/api/mcp/asset/c4bca033-d4ff-4606-b6d6-0bf4b92e3b56";
const imgPolygon2 = "https://www.figma.com/api/mcp/asset/a3f2ecea-621b-4e43-a75d-8eda9a4545fb";
const imgPolygon3 = "https://www.figma.com/api/mcp/asset/22d4174e-f1f4-4939-a63e-854d55b180e6";
const imgPolygon4 = "https://www.figma.com/api/mcp/asset/3de0a490-9070-4b87-bb57-00c3da4b82b7";
const imgWave     = "https://www.figma.com/api/mcp/asset/ae5d9b26-d444-4489-ac60-8abd31c2e0d8";
const imgArrow    = "https://www.figma.com/api/mcp/asset/a52c594c-ad8b-45b8-9b91-9470b51d1b65";
const imgPhoto1   = "https://www.figma.com/api/mcp/asset/2afbbc39-5bfd-4a2a-9d36-c05e10929170"; // team at computers
const imgPhoto2   = "https://www.figma.com/api/mcp/asset/1f5083d7-8bba-475f-98da-4a5687198172"; // team collaboration

/* Each service text card shares the same layout; polygon/wave differ */
const services = [
  {
    id: "ai-agents",
    title: "AI Agents",
    desc: "Autonomous agents that handle support, sales, and research. Trained on your data, voice, and policies.",
    polygon: imgPolygon1,
  },
  {
    id: "workflow",
    title: "Workflow Automation",
    desc: "Replace busywork with intelligent pipelines that connect your stack and execute end-to-end.",
    polygon: imgPolygon3,
  },
  {
    id: "data-rag",
    title: "Data & RAG",
    desc: "Pipelines, embeddings, and retrieval that turn your knowledge into a Professional strategic advantage.",
    polygon: imgPolygon2,
  },
  {
    id: "conv-ux",
    title: "Conversational UX",
    desc: "Design chat & voice interfaces that feel inevitable, lightning-fast, trustworthy, and consistently on-brand.",
    polygon: imgPolygon4,
  },
];

/* A single text-based service card */
const ServiceCard = ({ title, desc, polygon }) => (
  <div className="bg-white rounded-[24px] overflow-hidden relative h-[208px]">
    {/* Decorative polygon at top-right */}
    <div className="absolute top-[-60px] right-0 w-[108px] h-[120px] pointer-events-none">
      <div className="absolute" style={{ inset: "-83.33% -92.59%" }}>
        <img src={polygon} alt="" className="block w-full h-full max-w-none" />
      </div>
    </div>

    {/* Decorative wave at right edge */}
    <div
      className="absolute right-[-0.28px] pointer-events-none"
      style={{
        top: "calc(50% - 39.18px)",
        transform: "translateY(-50%)",
        width: "136.28px",
        height: "247.639px",
      }}
    >
      <div className="flex-none" style={{ transform: "rotate(90deg) scaleY(-1)" }}>
        <img
          src={imgWave}
          alt=""
          className="block max-w-none"
          style={{ width: "247.639px", height: "136.28px" }}
        />
      </div>
    </div>

    {/* Card content */}
    <div className="absolute top-6 left-6 flex flex-col gap-6 w-[312px]">
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
      <button
        className="flex items-center gap-2 text-primary font-inter font-medium capitalize
                   leading-[1.56] transition-opacity hover:opacity-70"
        style={{ fontSize: "16px", letterSpacing: "-0.64px" }}
      >
        Learn More
        <img src={imgArrow} alt="" className="w-5 h-5" />
      </button>
    </div>
  </div>
);

/* An image-only card */
const ImageCard = ({ src, alt }) => (
  <div className="bg-white rounded-[24px] overflow-hidden relative h-[208px]">
    <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
  </div>
);

const Services = () => {
  return (
    <section id="services" className="bg-[#fafafa] py-[100px]">
      <div className="mx-auto max-w-[1224px] px-4 sm:px-6 lg:px-0">

        {/* Section header */}
        <div className="flex flex-col gap-4 mb-14">
          <p
            className="font-inter font-normal text-primary capitalize leading-[1.66]"
            style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
          >
            • Services •
          </p>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
            <h2
              className="font-rubik font-medium text-[#141414] leading-[1.12]"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-2.88px", maxWidth: "449px" }}
            >
              Intelligence, designed end-to-end
            </h2>
            <p
              className="font-inter font-normal text-[rgba(20,20,20,0.7)] capitalize leading-[1.66] max-w-[453px]"
              style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
            >
              We blend design, engineering, and applied AI to deliver products that learn and
              compound in value over time.
            </p>
          </div>
        </div>

        {/* 3-column grid — matches Figma layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Row 1: AI Agents | Workflow Automation | Photo */}
          <ServiceCard {...services[0]} />
          <ServiceCard {...services[1]} />
          <ImageCard src={imgPhoto1} alt="Team working with computers" />

          {/* Row 2: Photo | Data & RAG | Conversational UX */}
          <ImageCard src={imgPhoto2} alt="Team collaborating" />
          <ServiceCard {...services[2]} />
          <ServiceCard {...services[3]} />
        </div>

      </div>
    </section>
  );
};

export default Services;
