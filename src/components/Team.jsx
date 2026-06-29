/* Team — six team member cards, each with photo, name, role and social icons */

const imgPolygon = "https://www.figma.com/api/mcp/asset/47d28c6a-1890-4cec-8559-db691003d9e2";
const imgLinkedIn  = "https://www.figma.com/api/mcp/asset/bd6ce668-b858-4262-bbef-2c21f77b3b3c";
const imgInstagram = "https://www.figma.com/api/mcp/asset/7d81b9b7-36c6-43a2-8a30-4af848459b92";
const imgFacebook  = "https://www.figma.com/api/mcp/asset/c4e2a333-f51b-4d3a-aaad-68943bb61751";

/* Frosted-glass top band rendered as a gradient overlay */
const GlassOverlay = () => (
  <div
    className="absolute inset-x-0 top-0 h-[113px] overflow-hidden pointer-events-none"
    style={{
      background:
        "linear-gradient(270deg, rgba(255,255,255,0.4) 1%, rgba(255,255,255,0.4) 17%, rgba(255,255,255,0.004) 99%)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
    }}
  />
);

const members = [
  {
    name: "Jacob Jones",
    role: "CEO & Founder",
    photo: "https://www.figma.com/api/mcp/asset/c5d1b01d-068e-457e-9f6c-fcffe731cc7a",
  },
  {
    name: "Ethan Johnson",
    role: "Marketing Director",
    photo: "https://www.figma.com/api/mcp/asset/be70dde5-c163-4d7c-be77-c8718d7b435a",
  },
  {
    name: "Sophia Patel",
    role: "CTO",
    photo: "https://www.figma.com/api/mcp/asset/3eb65775-b7ed-4ccb-98ad-a2d40ed12877",
  },
  {
    name: "Mia Thompson",
    role: "Data Analyst",
    photo: "https://www.figma.com/api/mcp/asset/3c8749a0-1d62-4b30-94c9-a403c4f03492",
  },
  {
    name: "Ava Martinez",
    role: "UX Designer",
    photo: "https://www.figma.com/api/mcp/asset/334fe2d2-e127-42e6-be31-44170d6153a9",
  },
  {
    name: "Liam Chen",
    role: "Product Manager",
    photo: "https://www.figma.com/api/mcp/asset/a3898527-4fa1-4bea-90bb-23f9db028f9a",
  },
];

/* Social icon button */
const SocialBtn = ({ src, alt }) => (
  <button
    className="w-9 h-9 rounded-full bg-white border border-[rgba(0,0,0,0.04)] flex items-center justify-center
               hover:bg-[#f0f0f0] transition-colors"
  >
    <img src={src} alt={alt} className="w-5 h-5 object-contain" />
  </button>
);

/* Individual team card */
const TeamCard = ({ name, role, photo }) => (
  <div className="bg-white border border-[rgba(0,0,0,0.08)] rounded-[24px] overflow-hidden relative h-[204px]">
    {/* Decorative polygon at top-right */}
    <div className="absolute top-[-61px] left-[273px] w-[132px] h-[147px] pointer-events-none">
      <div className="absolute" style={{ inset: "-68.03% -75.76%" }}>
        <img src={imgPolygon} alt="" className="block w-full h-full max-w-none" />
      </div>
    </div>

    {/* Frosted glass overlay across top */}
    <GlassOverlay />

    {/* Social icons — top right */}
    <div className="absolute top-[23px] right-[23px] flex items-center gap-[6px] z-10">
      <SocialBtn src={imgLinkedIn}  alt="LinkedIn"  />
      <SocialBtn src={imgInstagram} alt="Instagram" />
      <SocialBtn src={imgFacebook}  alt="Facebook"  />
    </div>

    {/* Photo — bottom left */}
    <div className="absolute top-[23px] left-[23px] w-[156px] h-[156px] rounded-2xl overflow-hidden">
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Name + role — bottom right, text aligned right */}
    <div className="absolute bottom-[23px] right-[23px] text-right flex flex-col gap-2">
      <p
        className="font-clash font-medium text-black leading-[1.12]"
        style={{ fontSize: "24px", letterSpacing: "-0.72px" }}
      >
        {name}
      </p>
      <p
        className="font-inter font-normal text-[rgba(0,0,0,0.7)] leading-[1.5]"
        style={{ fontSize: "16px", letterSpacing: "-0.64px" }}
      >
        {role}
      </p>
    </div>
  </div>
);

const Team = () => {
  return (
    <section id="team" className="bg-[#fafafa] py-[100px]">
      <div className="mx-auto max-w-[1224px] px-4 sm:px-6 lg:px-0">

        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <p
            className="font-inter font-normal text-primary capitalize leading-[1.66]"
            style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
          >
            • Team •
          </p>
          <h2
            className="font-rubik font-medium text-[#141414] leading-[1.12] max-w-[467px]"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-2.88px" }}
          >
            Meet the mastermind behind the pixels
          </h2>
        </div>

        {/* 3-column team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
