export const siteUrl = "https://www.beaumontfence.com";
export const businessName = "JD's Fence Company";
export const alternateName = "Beaumont TX Fence Company";
export const phoneDisplay = "(409) 254-6532";
export const phoneTel = "+14092546532";
export const sourceName = "beaumontfence.com";
export const tallySrc =
  "https://tally.so/embed/xX6B0y?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&source=beaumontfence.com";

export const homeFaqs = [
  {
    q: "How much does a fence cost in Beaumont?",
    a: "The price follows the length, the height, the material, the number of gates, and what is already in the ground. A wood privacy run on a clear city lot is a different job from coated chain link around a commercial yard or a long farm line on soft ground. We measure the property and send a written quote. Call (409) 254-6532 or use the form and include the city and an approximate length.",
  },
  {
    q: "Can you replace part of a fence or match an existing line?",
    a: "Yes, when the remaining posts are still sound. We look at post movement, rot at the ground line, and whether the old spacing will accept new boards, panels, or fabric. If the posts are failing, new pickets only delay the repair. We will tell you which sections can stay and which should be rebuilt.",
  },
  {
    q: "Do you offer wood, vinyl, aluminum, chain link, and farm fence?",
    a: "Yes. Those are the materials we install for homes, commercial lots, and acreage around Beaumont. Wood and vinyl cover most privacy jobs. Aluminum fits pools and open frontages. Chain link covers yards, kennels, and commercial edges. Farm fence is for livestock and field lines. If you are unsure, describe the job and we will recommend one.",
  },
  {
    q: "Do I need a permit for a fence in Beaumont?",
    a: "In the City of Beaumont, a fence on private property that is 6 feet tall or shorter does not require a permit. A fence taller than 6 feet has to be windstorm certified. The fence also cannot extend into the city right-of-way or block an easement or alley. Neighboring cities set their own rules, so we confirm the requirement for the address before we build.",
  },
  {
    q: "Can you include a gate with the fence?",
    a: "Yes. Walk gates and drive gates are part of most jobs, and the opening has to fit how you use the yard. A mower, a trailer, or a pool equipment door changes the width and the hinge hardware. We size the gate with the fence so you are not left with a gap to solve later.",
  },
];

export function canonical(path: string) {
  if (path === "/" || path === "") return `${siteUrl}/`;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function normalizePath(path: string) {
  if (path.endsWith(".html")) path = path.slice(0, -5);
  if (path === "/index" || path === "") return "/";
  return path || "/";
}
