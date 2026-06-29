/* CTA — "Ready to build" call-to-action banner with person photo and grid decoration */

const imgArrow  = "https://www.figma.com/api/mcp/asset/c39d22c5-3f59-4fd5-beea-e6010e950a5b";
const imgPerson = "https://www.figma.com/api/mcp/asset/2f099e13-801c-4bf1-b94e-dc6f8397c3a7";

/*
 * The decorative grid is made of small peach-coloured rectangles arranged in a
 * staircase pattern. We generate the positions programmatically from the Figma
 * coordinates so the pattern is pixel-accurate.
 */
const gridBlocks = [
  // column x, rows (top values from Figma, 43px step)
  ...[0,1].flatMap((_, ci) => [215,172,129,86,43,0].slice(ci).map((t) => ({ l: 0,   t }))),
  { l: 83,  t: 172 }, { l: 83,  t: 215 },
  { l: 166, t: 172 }, { l: 166, t: 215 },
  { l: 249, t: 129 }, { l: 249, t: 172 }, { l: 249, t: 215 },
  { l: 332, t: 86  }, { l: 332, t: 129 }, { l: 332, t: 172 }, { l: 332, t: 215 },
  { l: 415, t: 0   }, { l: 415, t: 43  }, { l: 415, t: 86  }, { l: 415, t: 129 }, { l: 415, t: 172 }, { l: 415, t: 215 },
  { l: 498, t: 0   }, { l: 498, t: 43  }, { l: 498, t: 86  }, { l: 498, t: 129 }, { l: 498, t: 172 }, { l: 498, t: 215 },
  { l: 581, t: 0   }, { l: 581, t: 43  }, { l: 581, t: 86  }, { l: 581, t: 129 },
  { l: 664, t: 0   }, { l: 664, t: 43  }, { l: 664, t: 86  }, { l: 664, t: 129 },
];

const CTA = () => {
  return (
    <section className="bg-[#fafafa] py-[100px]">
      <div className="mx-auto max-w-[1224px] px-4 sm:px-6 lg:px-0">

        {/* White outer wrapper */}
        <div className="bg-white rounded-[20px] p-4">

          {/* Inner light-grey card */}
          <div className="bg-[#fafafa] rounded-xl overflow-hidden relative min-h-[392px] p-16">

            {/* ── Left: text + buttons ───────────────────────────────── */}
            <div className="flex flex-col gap-6 max-w-[486px] relative z-10">
              <div className="flex flex-col gap-4">
                <h2
                  className="font-rubik font-medium text-[#141414] leading-[1.12]"
                  style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-2.88px" }}
                >
                  Ready to build smarter digital experiences?
                </h2>
                <p
                  className="font-inter font-normal text-[rgba(20,20,20,0.7)] capitalize leading-[1.66]"
                  style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
                >
                  Partner with a team that combines strategy, design, and AI to deliver products.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <button
                  className="flex items-center gap-2 bg-primary text-white font-inter font-medium
                             capitalize leading-[1.56] px-6 py-4 rounded-lg h-14
                             hover:bg-[#33a8cc] transition-colors"
                  style={{ fontSize: "16px", letterSpacing: "-0.64px" }}
                >
                  Start a Project
                  <img src={imgArrow} alt="" className="w-5 h-5" />
                </button>
                <button
                  className="flex items-center bg-white border border-[rgba(20,20,20,0.24)]
                             font-inter font-medium text-[#141414] capitalize leading-[1.56]
                             px-6 py-4 rounded-lg h-14 hover:bg-[#f0f0f0] transition-colors"
                  style={{ fontSize: "16px", letterSpacing: "-0.64px" }}
                >
                  View Our Work
                </button>
              </div>
            </div>

            {/* ── Decorative staircase grid (right side, desktop only) ── */}
            <div
              className="absolute hidden lg:block pointer-events-none"
              style={{ top: 0, right: 0, width: "744px", height: "255px" }}
            >
              {gridBlocks.map(({ l, t }, i) => (
                <div
                  key={i}
                  className="absolute bg-[rgba(254,204,130,0.24)]"
                  style={{ left: l, top: t, width: 80, height: 40 }}
                />
              ))}
            </div>

            {/* ── AI professional photo (right side, desktop only) ────── */}
            <div
              className="absolute hidden lg:block right-[56px] top-4 w-[404px] h-[376px] overflow-hidden pointer-events-none"
            >
              <img
                src={imgPerson}
                alt="AI product specialist"
                className="absolute max-w-none"
                style={{
                  width: "142.33%",
                  height: "193.74%",
                  left: "-18.07%",
                  top: "-12.62%",
                  objectFit: "cover",
                }}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;
