/* Pricing — three tiered plans shown alongside a description column */

const imgArrow    = "https://www.figma.com/api/mcp/asset/8bb415a6-8819-40a7-939d-2994afebf442";
const imgCheck    = "https://www.figma.com/api/mcp/asset/e3994afc-1826-46e2-9f87-038d223e0e56";
const imgArrowCyan = "https://www.figma.com/api/mcp/asset/d2c3bb0e-66dc-423c-a6f5-9709b40d7ece";

/* Starter icon */
const imgIconStarter    = "https://www.figma.com/api/mcp/asset/be1e5d1c-d921-411c-8c42-760f5d674c3f";
/* Growth icon */
const imgIconGrowth     = "https://www.figma.com/api/mcp/asset/a279e771-54fd-4f17-8c10-b9db9ac1b30b";
/* Enterprise icon */
const imgIconEnterprise = "https://www.figma.com/api/mcp/asset/64162437-0629-4f63-8ba8-15e76fe07df7";

const plans = [
  {
    icon: imgIconStarter,
    iconBg: "#8a79f1",
    name: "Starter",
    price: "$2,999",
    subtitle: "Perfect for startups validating their idea.",
    cta: "Start a Project",
    ctaStyle: "border",
    ctaArrow: imgArrow,
    features: [
      "Landing Page Design",
      "Up to 5 Sections",
      "Responsive Design",
      "Figma Source File",
      "1 Week Delivery",
    ],
  },
  {
    icon: imgIconGrowth,
    iconBg: "#3fbbe0",
    name: "Growth",
    price: "$5,999",
    subtitle: "For growing businesses ready to scale.",
    cta: "Book A Discovery Call →",
    ctaStyle: "filled",
    ctaArrow: imgArrowCyan,
    features: [
      "Website up to 10 Pages",
      "Custom Design System",
      "Advanced UX Strategy",
      "Interactive Prototypes",
      "3 Weeks Delivery",
    ],
  },
  {
    icon: imgIconEnterprise,
    iconBg: "#3fac92",
    name: "Enterprise",
    price: "$8,999",
    subtitle: "AI-powered experiences design.",
    cta: "Schedule A Strategy Call",
    ctaStyle: "border",
    ctaArrow: imgArrow,
    features: [
      "Web App / SaaS Design",
      "AI Product Strategy",
      "Responsive Design",
      "Dedicated Design Partner",
      "7 Weeks Delivery",
    ],
  },
];

/* Reusable feature list item */
const Feature = ({ text }) => (
  <div className="flex items-center gap-2">
    <img src={imgCheck} alt="" className="w-5 h-5 flex-shrink-0" />
    <p
      className="font-inter font-normal text-[rgba(20,20,20,0.7)] capitalize leading-[1.66]"
      style={{ fontSize: "16px", letterSpacing: "-0.64px" }}
    >
      {text}
    </p>
  </div>
);

/* One pricing plan card */
const PlanCard = ({ icon, iconBg, name, price, subtitle, cta, ctaStyle, ctaArrow, features }) => (
  <div className="bg-white rounded-2xl p-3 flex gap-3 items-stretch">

    {/* Left: plan details + CTA */}
    <div className="flex-1 bg-[#fafafa] rounded-xl p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        {/* Icon + name */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 p-[10px]"
            style={{ backgroundColor: iconBg }}
          >
            <img src={icon} alt="" className="w-5 h-5" />
          </div>
          <p
            className="font-clash font-medium text-[#141414] leading-[1.12]"
            style={{ fontSize: "24px", letterSpacing: "-0.72px" }}
          >
            {name}
          </p>
        </div>

        {/* Price + subtitle */}
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-0 relative">
            <span
              className="font-rubik font-medium text-[#141414] leading-[1.12]"
              style={{ fontSize: "48px", letterSpacing: "-2.88px" }}
            >
              {price}
            </span>
            <span
              className="font-inter font-medium text-[rgba(20,20,20,0.7)] leading-[1.66] mb-1 ml-1"
              style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
            >
              /project
            </span>
          </div>
          <p
            className="font-inter font-normal text-[rgba(20,20,20,0.7)] capitalize leading-[1.66]"
            style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* CTA button */}
      <button
        className={`flex items-center justify-center gap-2 h-12 w-full rounded-lg font-inter font-medium
                    capitalize leading-[1.56] transition-colors
                    ${ctaStyle === "filled"
                      ? "bg-primary text-white hover:bg-[#33a8cc]"
                      : "border border-[rgba(20,20,20,0.16)] text-[#141414] hover:bg-[#f0f0f0]"
                    }`}
        style={{ fontSize: "16px", letterSpacing: "-0.64px" }}
      >
        {cta}
        <img src={ctaArrow} alt="" className="w-5 h-5" />
      </button>
    </div>

    {/* Right: feature list */}
    <div className="bg-[#fafafa] rounded-xl p-4 flex flex-col gap-4 w-[272px] flex-shrink-0">
      <p
        className="font-inter font-medium text-[rgba(20,20,20,0.7)] capitalize leading-[1.66]"
        style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
      >
        What's included:
      </p>
      <div className="flex flex-col gap-2">
        {features.map((f) => (
          <Feature key={f} text={f} />
        ))}
      </div>
    </div>

  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#fafafa] py-[100px]">
      <div className="mx-auto max-w-[1224px] px-4 sm:px-6 lg:px-0">

        {/* Two-column layout at desktop: description left, plans right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 items-start">

          {/* Left: section description */}
          <div className="flex flex-col gap-4 max-w-[453px] lg:pt-[46px]">
            <p
              className="font-inter font-normal text-primary capitalize leading-[1.66]"
              style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
            >
              • Pricing •
            </p>
            <h2
              className="font-rubik font-medium text-[#141414] leading-[1.12]"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-2.88px" }}
            >
              Pricing built for every stage of growth
            </h2>
            <p
              className="font-inter font-normal text-[rgba(20,20,20,0.7)] capitalize leading-[1.66]"
              style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
            >
              From startup launches to enterprise-scale platforms, choose the level of
              AI-powered design support.
            </p>
          </div>

          {/* Right: plan cards stacked vertically */}
          <div className="flex flex-col gap-10 flex-1">
            {plans.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
