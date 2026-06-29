/* Footer — logo, description, nav links, services, contact, copyright */

const imgPolygonBg = "https://www.figma.com/api/mcp/asset/bd797a26-2563-41c8-b7ba-720a3f10ce31";
const imgAiencyWm  = "https://www.figma.com/api/mcp/asset/65dc49e7-782b-426a-956c-95e31e023f69";
const imgLogo      = "https://www.figma.com/api/mcp/asset/77cb8d8d-54ac-4524-a34a-bbfaf7685126";
const imgArrow     = "https://www.figma.com/api/mcp/asset/e292ccac-e7d1-4e02-a7bf-97be81a606ec";
const imgMail      = "https://www.figma.com/api/mcp/asset/bf9208d0-1865-4b7e-90f0-634e8d5d24c8";
const imgPhone     = "https://www.figma.com/api/mcp/asset/601a707b-012d-4037-8172-40d085880ecb";
const imgLocation  = "https://www.figma.com/api/mcp/asset/154e6a89-a9ea-431a-9561-a7210d0a98b7";

const quickLinks = ["Home", "About", "Services", "Process", "Pricing"];
const serviceLinks = ["AI Product Design", "SaaS Design", "Website Design", "UX Research", "AI Strategy"];

/* Reusable footer link column */
const LinkColumn = ({ heading, links }) => (
  <div className="flex flex-col gap-3">
    <p
      className="font-inter font-medium text-[#141414] capitalize leading-[1.66]"
      style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
    >
      {heading}
    </p>
    <div className="flex flex-col gap-[6px]">
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="font-inter font-normal text-[rgba(20,20,20,0.7)] capitalize leading-[1.66]
                     hover:text-[#141414] transition-colors"
          style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
        >
          {link}
        </a>
      ))}
    </div>
  </div>
);

/* Contact row item */
const ContactItem = ({ icon, text }) => (
  <div className="flex items-start gap-3">
    <div className="w-8 h-8 bg-[#fafafa] rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
      <img src={icon} alt="" className="w-5 h-5 object-contain" />
    </div>
    <p
      className="font-inter font-normal text-[rgba(20,20,20,0.7)] capitalize leading-[1.66]"
      style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
    >
      {text}
    </p>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] relative overflow-hidden pt-[100px] pb-0">

      {/* Decorative polygon background */}
      <div className="absolute inset-x-0 top-0 h-[570px] pointer-events-none">
        <div className="absolute" style={{ inset: "-70.18% -34.03% -109.65% -34.03%" }}>
          <img src={imgPolygonBg} alt="" className="block w-full h-full max-w-none" />
        </div>
      </div>

      {/* Blur overlay at top */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          bottom: "514px",
          width: "1512px",
          height: "173px",
          backgroundColor: "#fafafa",
          filter: "blur(44px)",
        }}
      />

      {/* Large "Aiency" watermark text behind the card */}
      <div
        className="absolute pointer-events-none hidden xl:block"
        style={{ top: "313px", left: "calc(45.83% + 39px)", transform: "translateX(-50%)" }}
      >
        <img src={imgAiencyWm} alt="" style={{ width: "1482px", height: "471px" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-[1224px] px-4 sm:px-6 lg:px-0 flex flex-col gap-4 pb-0">

        {/* Main footer card */}
        <div className="bg-white rounded-2xl p-6 flex flex-col lg:flex-row items-start justify-between gap-10">

          {/* Left: logo + description + CTA */}
          <div className="flex flex-col gap-16 max-w-[339px]">
            <div className="flex flex-col gap-[18px]">
              <img src={imgLogo} alt="Aiency" className="h-8 w-[116px] object-contain" />
              <p
                className="font-inter font-normal text-[rgba(20,20,20,0.7)] capitalize leading-[1.66]"
                style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
              >
                Designing intelligent products, AI-powered experiences, and scalable digital
                systems for ambitious businesses.
              </p>
            </div>
            <button
              className="flex items-center gap-2 bg-primary text-white font-inter font-medium
                         capitalize leading-[1.56] px-6 py-4 rounded-lg h-14 w-fit
                         hover:bg-[#33a8cc] transition-colors"
              style={{ fontSize: "16px", letterSpacing: "-0.64px" }}
            >
              Try it For free
              <img src={imgArrow} alt="" className="w-5 h-5" />
            </button>
          </div>

          {/* Right: link columns + contact */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-10 flex-1 sm:max-w-[665px]">
            <LinkColumn heading="Quick Links" links={quickLinks} />
            <LinkColumn heading="Services"    links={serviceLinks} />

            {/* Contact column */}
            <div className="flex flex-col gap-3">
              <p
                className="font-inter font-medium text-[#141414] capitalize leading-[1.66]"
                style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
              >
                Contact Us
              </p>
              <div className="flex flex-col gap-3">
                <ContactItem icon={imgMail}     text="support@aiency.com"           />
                <ContactItem icon={imgPhone}    text="+1-800-123-4567"               />
                <ContactItem icon={imgLocation} text="123 Scheduler St, Tech City, USA" />
              </div>
            </div>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="bg-white rounded-2xl p-6 flex items-center justify-center">
          <p
            className="font-inter font-normal text-[rgba(20,20,20,0.7)] capitalize leading-[1.66]"
            style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
          >
            © 2026 Aiency. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
