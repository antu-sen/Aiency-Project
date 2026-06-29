/* AgenticAI — "Meet Agentic AI" stats card with four key metrics */

/* Divider line between stats */
const imgDivider = "https://www.figma.com/api/mcp/asset/eabe4e6f-f673-4191-b9a1-579fdda6f556";

const stats = [
  { label: "Increase in Qualified Leads",  value: "70%" },
  { label: "Faster Workflow Automation",   value: "4×"  },
  { label: "Reduction in Operating Costs", value: "64%" },
  { label: "Client Satisfaction Score",    value: "98%" },
];

const AgenticAI = () => {
  return (
    <section id="about" className="bg-[#fafafa] py-[100px]">
      <div className="mx-auto max-w-[1224px] px-4 sm:px-6 lg:px-0">

        {/* White card container */}
        <div className="bg-white rounded-[24px] p-10 flex flex-col gap-[80px] items-center">

          {/* Section copy */}
          <div className="max-w-[1080px] text-center flex flex-col gap-4">
            <p
              className="font-inter font-normal text-primary capitalize leading-[1.66]"
              style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
            >
              • Meet Agentic AI •
            </p>
            <p
              className="font-clash font-medium text-[#141414] leading-[1.12]"
              style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.96px" }}
            >
              We help executives, founders, and high-performers unlock sustainable energy,
              sharper focus, and elite performance through evidence-based nutrition.
            </p>
          </div>

          {/* Stats row */}
          <div className="w-full max-w-[1080px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-0">
            {stats.map(({ label, value }, idx) => (
              <div key={label} className="flex items-center gap-0 flex-1">

                {/* Individual stat */}
                <div className="flex flex-col gap-[40px] items-start">
                  <p
                    className="font-inter font-normal text-[rgba(20,20,20,0.7)] capitalize leading-[1.66]"
                    style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
                  >
                    {label}
                  </p>
                  <p
                    className="font-clash font-medium text-[#141414] leading-[1.12]"
                    style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-1.44px" }}
                  >
                    {value}
                  </p>
                </div>

                {/* Divider between stats (hidden after last item) */}
                {idx < stats.length - 1 && (
                  <div className="hidden sm:flex items-center justify-center mx-8 h-[86px] w-px">
                    <img src={imgDivider} alt="" className="h-full" />
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgenticAI;
