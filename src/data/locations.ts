import type { Faq } from "./services";

export type Location = {
  slug: string;
  city: string;
  county: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  points: string[];
  rule: string;
  fits: { href: string; label: string; note: string }[];
  faqs: Faq[];
  nearby: string[];
};

export const locations: Location[] = [
  {
    slug: "beaumont-tx",
    city: "Beaumont",
    county: "Jefferson County",
    title: "Fence Company in Beaumont, TX | JD's Fence Company",
    description:
      "Fence installation in Beaumont, TX for homes and commercial lots. See the city permit rule, then call JD's Fence Company at (409) 254-6532.",
    h1: "Fence Company in Beaumont, TX",
    intro:
      "Beaumont is home base. Most calls are city lots: a backyard privacy fence, a gate that no longer latches, or a side yard that is tighter than it looks on a photo. We also fence commercial yards inside the city.",
    points: [
      "Jefferson County clay holds water after a hard rain. Posts set short in that ground move. We set them for the soil and the height of the fence.",
      "In-town lots often have a narrow side yard. Newer subdivisions, especially on the north side of the city, are more likely to add an HOA review on top of the city rule. We ask before materials are ordered.",
      "Wood and vinyl cover most privacy jobs. Aluminum is the open fence for pools and front yards. Chain link is the usual commercial yard fence.",
    ],
    rule: "The City of Beaumont says a fence on private property that is 6 feet tall or shorter does not need a permit. Over 6 feet, the fence has to be windstorm certified. It cannot extend into the city right-of-way or block an easement or alley. That rule is the city's, not a countywide rule, and it does not transfer to Port Arthur, Orange, or the other towns we serve. Source: the City of Beaumont permit FAQ.",
    fits: [
      {
        href: "/wood-fence.html",
        label: "Wood fence",
        note: "The usual privacy fence on a Beaumont backyard.",
      },
      {
        href: "/vinyl-fence.html",
        label: "Vinyl fence",
        note: "Privacy or picket when you want to skip staining.",
      },
      {
        href: "/aluminum-fence.html",
        label: "Aluminum fence",
        note: "Pools and front yards that should stay open.",
      },
    ],
    faqs: [
      {
        q: "Does Beaumont require a fence permit?",
        a: "A fence on private property that is 6 feet or shorter does not. The City of Beaumont requires windstorm certification when the fence is taller than 6 feet. The fence also has to stay off the right-of-way and out of easements and alleys. An HOA can add its own review even when the city does not issue a permit.",
      },
      {
        q: "Can you install a 6-foot privacy fence on a city lot?",
        a: "Yes, when the fence stays on private property and the lot can take the posts. A 6-foot wood or vinyl privacy fence is the job we see most often in Beaumont. Narrow side yards and a gate for the mower are usually the details that change the layout, not the height.",
      },
      {
        q: "What if the fence line crosses an easement?",
        a: "We stop the fence at the easement or shift the line so it does not block it. The city is explicit that a fence cannot block an easement or an alley. If a survey or a plat shows the easement, send it with the quote request so we are not measuring a line we cannot build.",
      },
    ],
    nearby: ["nederland-tx", "vidor-tx", "lumberton-tx", "port-arthur-tx"],
  },
  {
    slug: "port-arthur-tx",
    city: "Port Arthur",
    county: "Jefferson County",
    title: "Fence Company in Port Arthur, TX | JD's Fence Company",
    description:
      "Fence company for Port Arthur homes and commercial yards. Fence permits start at about 4 feet. Call JD's Fence Company at (409) 254-6532.",
    h1: "Fence Company in Port Arthur, TX",
    intro:
      "Port Arthur jobs split two ways: residential privacy on neighborhood lots, and chain link with a drive gate on commercial yards closer to the industrial side of town. Humidity off the ship channel is part of the material choice.",
    points: [
      "The City of Port Arthur requires a fence permit for fences that are 4 feet and taller. That is a lower threshold than Beaumont's 6-foot exemption, so a standard privacy fence here is a permitted job.",
      "Salt air and humidity are harder on bare steel than on aluminum or on coated chain link. We do not spec a bare steel ornamental fence for a yard that stays damp.",
      "Corner lots need a clear view at the intersection. We keep the fence out of that sight area instead of running a tall solid line to the corner.",
    ],
    rule: "Port Arthur's own FAQ states that fence permits are required for fences from 4 feet high and above. Do not apply Beaumont's 6-foot exemption to a Port Arthur address. We confirm the current application before we schedule.",
    fits: [
      {
        href: "/commercial-fencing.html",
        label: "Commercial fencing",
        note: "Chain link and drive gates for yards and shops.",
      },
      {
        href: "/chain-link-fence.html",
        label: "Chain-link fence",
        note: "Residential edges, kennels, and coated fabric.",
      },
      {
        href: "/aluminum-fence.html",
        label: "Aluminum fence",
        note: "Open metal lines that skip a steel rust cycle.",
      },
    ],
    faqs: [
      {
        q: "Is a Port Arthur fence permit the same as Beaumont's?",
        a: "No. Beaumont exempts private-property fences at 6 feet and under. Port Arthur requires a permit for fences that are 4 feet and taller. A typical privacy fence in Port Arthur needs that permit. We treat the two cities as separate rules.",
      },
      {
        q: "Can you fence a commercial yard in Port Arthur?",
        a: "Yes. Chain link with a vehicle gate is the layout we use for shops and storage yards. Tell us the truck size and whether the site has to stay open during the day. Aluminum is the other option when the frontage should stay open and finished.",
      },
      {
        q: "Which material holds up near the ship channel?",
        a: "Aluminum and vinyl-coated chain link handle the damp air better than bare steel. Wood still works for a privacy screen, and the bottom of the boards will want a finish if you care about the color. We will say which one fits the exposure on your lot.",
      },
    ],
    nearby: ["groves-tx", "port-neches-tx", "bridge-city-tx", "nederland-tx"],
  },
  {
    slug: "nederland-tx",
    city: "Nederland",
    county: "Jefferson County",
    title: "Fence Company in Nederland, TX | JD's Fence Company",
    description:
      "Privacy fence installation for compact lots in Nederland, TX. Wood and vinyl, quoted on site. Call JD's Fence Company at (409) 254-6532.",
    h1: "Fence Company in Nederland, TX",
    intro:
      "Nederland sits between Beaumont and Port Arthur, and the lots are usually tighter than a north-Beaumont subdivision. The common job is a privacy fence between houses, with a gate wide enough for a mower.",
    points: [
      "Side yards are often narrow. The gate location and the post at the corner matter more than a decorative top rail.",
      "Rear lines frequently follow a drainage swale or a utility easement. We place the fence where it can stand, not on top of the drainage.",
      "Wood privacy and vinyl privacy are the two screens we install most here. Chain link shows up when the yard needs a dog run more than a solid wall.",
    ],
    rule: "Nederland is its own city. Beaumont's 6-foot permit exemption does not automatically cover a Nederland address, and Port Arthur's 4-foot permit rule does not either. We check the lot before we build, including any easement along the rear line.",
    fits: [
      {
        href: "/wood-fence.html",
        label: "Wood fence",
        note: "Solid privacy between close-set houses.",
      },
      {
        href: "/vinyl-fence.html",
        label: "Vinyl fence",
        note: "The same screen without a stain schedule.",
      },
      {
        href: "/chain-link-fence.html",
        label: "Chain-link fence",
        note: "A side run or a dog area that can stay open.",
      },
    ],
    faqs: [
      {
        q: "Can you fit a privacy fence on a narrow Nederland lot?",
        a: "Yes, if the posts can sit on your side of the line and the gate still opens. We measure the side yard in person because a narrow gate is the piece that fails on these lots. Tell us whether the mower, the trash carts, or both have to pass.",
      },
      {
        q: "Do you keep the fence off a rear easement?",
        a: "Yes. A fence that blocks a drainage or utility easement becomes the problem after the first heavy rain or the next utility visit. If you have a survey, send it. If you do not, we look for markers and we will not guess across an obvious swale.",
      },
      {
        q: "Should a small yard be wood or vinyl?",
        a: "Both can close the yard. Wood costs less up front on most privacy runs and needs a finish if you want the color to last. Vinyl costs more at the start and skips that stain cycle. On a short Nederland lot the length is often modest, so the material choice is about upkeep more than footage.",
      },
    ],
    nearby: ["port-neches-tx", "beaumont-tx", "groves-tx", "port-arthur-tx"],
  },
  {
    slug: "port-neches-tx",
    city: "Port Neches",
    county: "Jefferson County",
    title: "Fence Company in Port Neches, TX | JD's Fence Company",
    description:
      "Wood and vinyl fences for Port Neches homes. JD's Fence Company quotes from the lot. Call (409) 254-6532.",
    h1: "Fence Company in Port Neches, TX",
    intro:
      "Port Neches jobs are residential. Houses sit along the Neches, the air stays humid, and a lot of the fences we replace have already failed at the bottom rail. The new line is usually wood or vinyl privacy, not a farm fence.",
    points: [
      "Humidity off the river reaches the ground line. On a wood fence, that is the board and the post we watch. Vinyl avoids that rot path.",
      "Many lots have an alley or a rear utility line. The fence stops where access has to remain.",
      "Gates are part of the quote. A replacement that copies a sagging opening just repeats the old problem.",
    ],
    rule: "Port Neches does not inherit Beaumont's permit chart or Port Arthur's. We confirm the address, and we keep the fence on the private lot and clear of alleys and easements either way.",
    fits: [
      {
        href: "/vinyl-fence.html",
        label: "Vinyl fence",
        note: "Privacy that does not take on river humidity the way wood does.",
      },
      {
        href: "/wood-fence.html",
        label: "Wood fence",
        note: "A solid screen when you want wood and will maintain the finish.",
      },
      {
        href: "/aluminum-fence.html",
        label: "Aluminum fence",
        note: "An open line for a pool or a front yard.",
      },
    ],
    faqs: [
      {
        q: "Why do wood fences fail first at the bottom in Port Neches?",
        a: "The air stays damp and the ground stays wet longer near the river. The post at grade and the bottom board stay in that moisture. A wood fence can still be the right screen, and it needs a finish if you want it to last visually. Vinyl is the option when you want to skip that.",
      },
      {
        q: "Can you replace a fence along an alley?",
        a: "We can replace the fence on your side of the line. We do not set it in the alley or across a utility easement. If the old fence was already in the wrong place, the new one moves. Bring any survey notes you have.",
      },
      {
        q: "Do you install anything besides privacy fence here?",
        a: "Yes. Picket and aluminum show up on front yards and pools, and a short chain-link run shows up for a dog area. Acreage-style farm fence is uncommon on these lots. If the property is a pasture, it is probably outside Port Neches proper.",
      },
    ],
    nearby: ["groves-tx", "nederland-tx", "port-arthur-tx", "bridge-city-tx"],
  },
  {
    slug: "groves-tx",
    city: "Groves",
    county: "Jefferson County",
    title: "Fence Company in Groves, TX | JD's Fence Company",
    description:
      "Dog runs, side-yard chain link, and privacy fences in Groves, TX. Call JD's Fence Company at (409) 254-6532.",
    h1: "Fence Company in Groves, TX",
    intro:
      "Groves is a residential town next to Port Neches, and the calls we get are often smaller than a full property wrap. A dog run, a side-yard chain-link section, or a privacy fence on the rear line is the typical scope.",
    points: [
      "Lots are not deep. A full privacy wrap can feel like it eats the yard, so some owners close only the rear and leave a chain-link side for airflow and a view of pets.",
      "Mixing materials is normal here: wood or vinyl on the neighbor line, chain link on the run. We plan the posts where the two fences meet so the joint is solid.",
      "Gate width still decides the job. A dog gate and a mower gate are not the same opening.",
    ],
    rule: "Groves sets its own requirements. We do not copy Beaumont's 6-foot exemption or Port Arthur's 4-foot permit onto a Groves lot. Placement still has to respect property lines and any easement on the survey.",
    fits: [
      {
        href: "/chain-link-fence.html",
        label: "Chain-link fence",
        note: "Dog runs and side yards that should stay visible.",
      },
      {
        href: "/wood-fence.html",
        label: "Wood fence",
        note: "Rear-line privacy between houses.",
      },
      {
        href: "/vinyl-fence.html",
        label: "Vinyl fence",
        note: "Privacy on the rear line without staining.",
      },
    ],
    faqs: [
      {
        q: "Can you build a dog run without fencing the whole yard?",
        a: "Yes. A run inside the yard, or a chain-link side section, is a common Groves job. Tell us if the dog climbs or digs so the height and the bottom of the fence match that. The rest of the yard can stay open or get a separate privacy line.",
      },
      {
        q: "Can wood and chain link meet on the same lot?",
        a: "Yes. We end each run on its own post and fasten the joint so neither fence is hanging on the other. The privacy section and the chain-link section can be different heights. We mark that on the quote so the corner is not a surprise.",
      },
      {
        q: "Is a Groves lot the same fence job as Port Neches?",
        a: "The towns touch, and both are humid residential lots. Groves requests more often include a partial chain-link run for pets. Port Neches requests more often replace a full privacy line that failed at the bottom. We price the layout you have, not the neighboring city.",
      },
    ],
    nearby: ["port-neches-tx", "port-arthur-tx", "nederland-tx", "bridge-city-tx"],
  },
  {
    slug: "orange-tx",
    city: "Orange",
    county: "Orange County",
    title: "Fence Company in Orange, TX | JD's Fence Company",
    description:
      "Fence installation in Orange, TX for in-town lots and county acreage. Rules differ from Beaumont. Call (409) 254-6532.",
    h1: "Fence Company in Orange, TX",
    intro:
      "Orange is far enough east that the work changes. In town, we install wood and vinyl privacy on residential lots. Toward the county line, the same drive can end in a pasture that needs farm fence and an equipment gate.",
    points: [
      "The City of Orange lists a certificate of appropriateness application for a new fence, used where exterior work is reviewed. That is not a Beaumont permit exemption. We check whether the address needs an application before we order material.",
      "Ground in parts of the city holds water. Post depth follows the soil, and a wood finish weathers faster where the lot stays damp.",
      "A house fence and a field fence on the same county property are two lines. We quote them separately so the pasture is not priced like a backyard.",
    ],
    rule: "Do not use the City of Beaumont's 6-foot rule in Orange. In-town Orange projects can require a permit application, and some districts review a new fence through a certificate of appropriateness. County acreage is a different jurisdiction from the city limits. We confirm which one the address sits in.",
    fits: [
      {
        href: "/wood-fence.html",
        label: "Wood fence",
        note: "In-town privacy around the house.",
      },
      {
        href: "/vinyl-fence.html",
        label: "Vinyl fence",
        note: "Privacy with less upkeep in damp air.",
      },
      {
        href: "/farm-fence.html",
        label: "Farm fence",
        note: "Pasture and crop edges outside the tight lots.",
      },
    ],
    faqs: [
      {
        q: "Does Beaumont's fence permit rule apply in Orange?",
        a: "No. Orange is a different city in a different county. Beaumont exempts many fences at 6 feet and under. Orange has its own applications, including a certificate of appropriateness for a new fence where exterior changes are reviewed. We look up the address instead of assuming the Beaumont exemption.",
      },
      {
        q: "Can you fence acreage outside Orange city limits?",
        a: "Yes. Field fence, ranch rail, and equipment gates are the farm jobs on the county side. The house, if it needs privacy, gets its own wood or vinyl run. Tell us which animals are on the place so the field fence matches them.",
      },
      {
        q: "What should I send for an Orange quote?",
        a: "The address, the approximate length, and whether the job is the house yard, a pasture, or both. If the city has already told you a review is required, say so. We would rather know about an application before the posts are scheduled.",
      },
    ],
    nearby: ["bridge-city-tx", "vidor-tx", "beaumont-tx", "port-arthur-tx"],
  },
  {
    slug: "vidor-tx",
    city: "Vidor",
    county: "Orange County",
    title: "Fence Company in Vidor, TX | JD's Fence Company",
    description:
      "Wood privacy and farm fence in Vidor, TX, including lots with trees. JD's Fence Company walks the line first. Call (409) 254-6532.",
    h1: "Fence Company in Vidor, TX",
    intro:
      "Vidor sits north of Beaumont where the lots open up and the pines start. A house may need wood privacy near the porch and a longer field fence once the property leaves the yard. Trees are usually in the way of a straight line.",
    points: [
      "Roots and soft spots decide post locations. We walk the line because a map measurement misses the trees and the low ground.",
      "Wood privacy is the common screen around the house. Farm fence takes over on the larger tracts. Chain link is the odd job, usually a kennel near the house.",
      "Orange County rules apply, not the City of Beaumont fence exemption. We confirm the jurisdiction on the address.",
    ],
    rule: "Vidor is in Orange County. A Beaumont city permit answer does not clear a Vidor lot. If the property is inside Vidor city limits, that city is the one we check. If it is county acreage, the county is. We do not start from the wrong rule.",
    fits: [
      {
        href: "/wood-fence.html",
        label: "Wood fence",
        note: "Privacy around the house between the trees.",
      },
      {
        href: "/farm-fence.html",
        label: "Farm fence",
        note: "Field fence and rail once the lot becomes acreage.",
      },
      {
        href: "/chain-link-fence.html",
        label: "Chain-link fence",
        note: "Kennels and short runs near the house.",
      },
    ],
    faqs: [
      {
        q: "Can you run a fence through trees in Vidor?",
        a: "We can run it along the trees. We do not set a post in a major root or promise a laser-straight line through a pine stand. The walk shows where the fence can go and where a corner has to move. That is why we quote Vidor jobs from the property.",
      },
      {
        q: "Can one property have privacy fence and farm fence?",
        a: "Yes. The house line is wood or vinyl. The pasture line is field fence or ranch rail, with a gate for the truck. They meet at a corner we build for both. The quote lists them as two scopes so the pasture footage is not priced like privacy boards.",
      },
      {
        q: "Do you use Beaumont permit rules in Vidor?",
        a: "No. Vidor is in Orange County, a short drive north of Beaumont and a different jurisdiction. We check the Vidor or county requirement for that address. The fence still has to sit on your property and clear any easement.",
      },
    ],
    nearby: ["lumberton-tx", "beaumont-tx", "orange-tx", "bridge-city-tx"],
  },
  {
    slug: "lumberton-tx",
    city: "Lumberton",
    county: "Hardin County",
    title: "Fence Company in Lumberton, TX | JD's Fence Company",
    description:
      "House-line privacy and pasture fence in Lumberton, TX. JD's Fence Company serves Hardin County from Beaumont. Call (409) 254-6532.",
    h1: "Fence Company in Lumberton, TX",
    intro:
      "Lumberton is north of Beaumont in Hardin County. Lots are larger, pines are part of the layout, and a single driveway can need a privacy fence by the house and a pasture fence beyond it.",
    points: [
      "This is not a tight city side-yard job. The planning issues are slope, tree cover, and the change from yard to field.",
      "Wood privacy is the house fence. Ranch rail and field fence are the acreage fence. We spec them separately.",
      "Hardin County and the City of Lumberton do not use the City of Beaumont's 6-foot exemption. We check the jurisdiction printed on the address.",
    ],
    rule: "Lumberton is in Hardin County. Bring the address so we know whether the lot is inside the city or in the county. Either way, the Beaumont windstorm note for fences over 6 feet is a Beaumont city requirement, and we do not paste it onto a Lumberton permit answer.",
    fits: [
      {
        href: "/farm-fence.html",
        label: "Farm fence",
        note: "Pasture lines, rail, and equipment gates.",
      },
      {
        href: "/wood-fence.html",
        label: "Wood fence",
        note: "Privacy around the house on a larger lot.",
      },
      {
        href: "/vinyl-fence.html",
        label: "Vinyl fence",
        note: "A house screen when you do not want to stain it.",
      },
    ],
    faqs: [
      {
        q: "Can you fence both the house and the pasture?",
        a: "Yes. We treat them as two fences on one property. Privacy boards stop where the yard stops. Field fence or ranch rail picks up on the pasture, with a gate that fits the truck or the tractor. One quote can cover both, with the prices listed apart.",
      },
      {
        q: "How do pines change the fence line?",
        a: "Large roots block post holes, and canopy drip keeps the ground softer. We shift posts off the roots and we do not promise the line will ignore a tree you want to keep. If a tree is already on the property line, we talk about that before we order material.",
      },
      {
        q: "Are you based in Lumberton?",
        a: "JD's Fence Company is a Beaumont company. Lumberton is inside the area we drive for residential and acreage work. Call (409) 254-6532 and give us the address so the quote uses Hardin County conditions, not a Beaumont city lot.",
      },
    ],
    nearby: ["vidor-tx", "beaumont-tx", "orange-tx", "nederland-tx"],
  },
  {
    slug: "bridge-city-tx",
    city: "Bridge City",
    county: "Orange County",
    title: "Fence Company in Bridge City, TX | JD's Fence Company",
    description:
      "Aluminum, vinyl, and chain link fences in Bridge City, TX, where humidity is hard on bare steel. Call (409) 254-6532.",
    h1: "Fence Company in Bridge City, TX",
    intro:
      "Bridge City sits between Orange and Port Arthur, close to the Neches. Residential streets are the main work. A few commercial edges sit along the highway. The damp air is the reason we talk about material before style.",
    points: [
      "Bare steel ornamental fence is a poor spec here. Aluminum keeps the open metal look without that rust cycle. Vinyl does the same for a privacy screen.",
      "Wood still builds a solid backyard, and the ground line needs a finish if the color matters to you.",
      "Highway-front commercial jobs are chain link or aluminum with a gate. They are not priced like a backyard panel.",
    ],
    rule: "Bridge City is in Orange County, with its own city rules. It does not use Beaumont's 6-foot exemption or Port Arthur's 4-foot permit trigger. We confirm the Bridge City requirement for the address before we build.",
    fits: [
      {
        href: "/aluminum-fence.html",
        label: "Aluminum fence",
        note: "Open lines and pools in salt-tinged humidity.",
      },
      {
        href: "/vinyl-fence.html",
        label: "Vinyl fence",
        note: "Privacy without a yearly stain.",
      },
      {
        href: "/chain-link-fence.html",
        label: "Chain-link fence",
        note: "Side yards and small commercial edges.",
      },
    ],
    faqs: [
      {
        q: "What fence material lasts in Bridge City humidity?",
        a: "Aluminum and vinyl are the two we recommend when you want to avoid rust or rot at the ground line. Coated chain link is the third, for a yard or a small commercial edge that can stay open. Wood is still available for privacy, with the understanding that the finish is part of owning it.",
      },
      {
        q: "Do you fence commercial frontage along the highway?",
        a: "Yes, when the site needs chain link or aluminum and a gate that clears the vehicles using it. Send the address and the gate width. A residential privacy fence behind a house is a different quote from a highway-front yard.",
      },
      {
        q: "Which city's permit should I look up?",
        a: "Bridge City's. Orange and Port Arthur are nearby and they are not the same rulebook. Beaumont's 6-foot note does not clear a Bridge City lot. We check the address so the application, if one is required, is the right city's.",
      },
    ],
    nearby: ["orange-tx", "port-arthur-tx", "groves-tx", "vidor-tx"],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
