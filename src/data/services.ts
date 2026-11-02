export type Faq = { q: string; a: string };
export type Block = { h: string; p: string };

export type Service = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  card: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  intro: string;
  whenTitle: string;
  when: string;
  whenImage: string;
  whenAlt: string;
  whenWidth: number;
  whenHeight: number;
  process: Block[];
  costs: Block[];
  faqs: Faq[];
  related: { href: string; label: string }[];
};

export const services: Service[] = [
  {
    slug: "wood-fence",
    name: "Wood Fence",
    title: "Wood Fence Installation in Beaumont, TX",
    description:
      "Wood privacy, picket, and rail fence installation in Beaumont, TX. Posts set for local soil, with a gate sized to the opening. Call (409) 254-6532.",
    h1: "Wood Fence Installation in Beaumont, TX",
    card: "Privacy, picket, and rail fences for yards that want wood. Posts are set for the soil, and the gate is built for the opening.",
    image: "/images/wood.jpg",
    imageAlt: "Wood privacy fence with vertical boards along a residential yard",
    width: 1200,
    height: 800,
    intro:
      "JD's Fence Company builds wood fences for Beaumont homes, and wood is still the usual privacy fence on a city lot. We install privacy, board-on-board, shadowbox, picket, and rail styles. Posts that touch the ground are pressure-treated and set for local clay soil. The gate is hung with the rest of the line so it latches without dragging. We measure the property first and send a written quote before any work starts.",
    whenTitle: "When a wood fence is the right job",
    when: "Choose wood when you want a solid screen or a rail line and you are willing to wash and finish it. Privacy, board-on-board, and shadowbox close a backyard. Picket and ranch rail mark a boundary and leave the yard open. Gulf humidity reaches the bottom board and the post at grade first, so wood is a poor fit if you want a fence with no finish schedule. In that case, look at vinyl.",
    whenImage: "/images/wood.jpg",
    whenAlt: "Wood privacy fence with vertical boards along a residential yard",
    whenWidth: 1200,
    whenHeight: 800,
    process: [
      {
        h: "Measure the line",
        p: "We walk the property, mark gates, and note slopes, trees, and anything the fence cannot cross.",
      },
      {
        h: "Pick the style",
        p: "Privacy, board-on-board, shadowbox, picket, or rail, plus the height and the gate width you use.",
      },
      {
        h: "Set posts and build",
        p: "Ground-contact posts are pressure-treated. Rails, pickets, and galvanized fasteners follow, then the gate.",
      },
      {
        h: "Walk the finished line",
        p: "We check the latch, the swing, and the line with you before we call the job done.",
      },
    ],
    costs: [
      {
        h: "Length and height",
        p: "More linear feet and a taller fence use more posts, rails, and pickets.",
      },
      {
        h: "Style",
        p: "Solid privacy and board-on-board use more lumber than a picket or a simple rail.",
      },
      {
        h: "Gates",
        p: "Each walk or drive gate adds a frame, hinges, and a latch. Wider gates need a stronger frame.",
      },
      {
        h: "The ground",
        p: "Old-fence removal, roots, and wet clay add time. A straight, clear line does not.",
      },
    ],
    faqs: [
      {
        q: "How much does a wood fence cost in Beaumont?",
        a: "The number moves with length, height, style, and gates. Solid privacy on a clear city lot is a smaller job than a tall line with two drive gates and an old fence to haul off. Wet clay can add time when posts need a deeper set. We measure the property and give you a written quote before any work starts.",
      },
      {
        q: "Can you build privacy, shadowbox, and picket styles?",
        a: "Yes. Privacy and board-on-board give a solid screen. Shadowbox staggers the boards so air can move and both sides look finished. Picket and ranch rail mark a line and leave the yard visible. Tell us what the yard needs to do, or bring a photo, and we will match the style to that.",
      },
      {
        q: "Do you set pressure-treated posts?",
        a: "Yes. Posts that touch the ground are pressure-treated, and we fasten the fence with galvanized nails so the hardware is not the first thing to fail in humid weather. A larger gate can sit on a galvanized frame so the opening does not sag. You can stain the boards after they dry if you want a color.",
      },
      {
        q: "Do I need a permit for a 6-foot wood fence in Beaumont?",
        a: "Inside the City of Beaumont, a fence on private property that is 6 feet or shorter does not need a permit. Taller than 6 feet, it has to be windstorm certified. It cannot run into the right-of-way or block an easement or alley. Outside the city, or where an HOA has its own rule, we check that address before we build.",
      },
      {
        q: "Can you replace a rotten section without rebuilding the whole line?",
        a: "Often, yes. If the other posts are still tight and the rails are sound, we can replace the bad posts and boards and tie into the standing fence. If several posts rock at the ground, new pickets will not hold the line. We will tell you which span can stay.",
      },
      {
        q: "How does Beaumont humidity affect a wood fence?",
        a: "Moisture sits in the clay and in the air, so the bottom of a board and the post at grade age first. Wood is still a sound choice for privacy, and it needs a wash and a finish if you want to keep the color. If you do not want that upkeep, a vinyl privacy fence is the other solid screen we install.",
      },
    ],
    related: [
      { href: "/vinyl-fence.html", label: "Vinyl fence" },
      { href: "/farm-fence.html", label: "Farm fence" },
      { href: "/beaumont-tx.html", label: "Beaumont" },
      { href: "/lumberton-tx.html", label: "Lumberton" },
    ],
  },
  {
    slug: "vinyl-fence",
    name: "Vinyl Fence",
    title: "Vinyl Fence Installation in Beaumont, TX",
    description:
      "Vinyl privacy, picket, and ranch rail installation in Beaumont, TX. A fence that skips routine staining. Call JD's Fence Company at (409) 254-6532.",
    h1: "Vinyl Fence Installation in Beaumont, TX",
    card: "Privacy and picket styles that skip routine staining. A practical fit on humid Beaumont lots where painted wood means more upkeep.",
    image: "/images/vinyl.jpg",
    imageAlt: "White vinyl picket fence along a residential lawn",
    width: 1200,
    height: 800,
    intro:
      "JD's Fence Company installs vinyl fences for Beaumont yards where you want a straight line without a stain schedule. We build privacy, picket, and ranch rail styles, including two-, three-, and four-rail profiles. Vinyl does not absorb water the way a wood board does, which helps in Gulf humidity. Posts are set for the panel system and the soil so the line stays put. We measure the lot and send a written quote so you can compare it with wood.",
    whenTitle: "When vinyl is the right job",
    when: "Vinyl fits a homeowner who wants privacy or a clean picket line and does not want to paint or stain. It usually costs more than a comparable wood fence at the start, and it avoids the repeat finish work wood asks for in this humidity. It can still crack if something hits it, and the color can shift slightly over years in full sun. It is a weak choice for a long livestock line. That job belongs on the farm fence page.",
    whenImage: "/images/vinyl.jpg",
    whenAlt: "White vinyl picket fence along a residential lawn",
    whenWidth: 1200,
    whenHeight: 800,
    process: [
      {
        h: "Confirm the style",
        p: "Privacy, picket, or ranch rail, plus color, height, and where the gates need to land.",
      },
      {
        h: "Check the grade",
        p: "We step or rack the line to follow the yard so panels do not gap at the low side.",
      },
      {
        h: "Set the posts",
        p: "Posts are set for the panel system and the soil, then the rails and pickets lock in.",
      },
      {
        h: "Hang the gates",
        p: "Walk and drive gates go in with the fence so the latch lines up with the opening you use.",
      },
    ],
    costs: [
      {
        h: "Style and height",
        p: "Privacy panels cost more than a picket or a ranch rail of the same length.",
      },
      {
        h: "Color",
        p: "White is the common profile. A darker color can change the panel price.",
      },
      {
        h: "Gates and corners",
        p: "Each opening, corner, and end post is its own piece, not just more panel.",
      },
      {
        h: "Grade and removal",
        p: "A sloped yard, tree roots, or a wood fence to remove changes the labor.",
      },
    ],
    faqs: [
      {
        q: "How much more is vinyl than a wood fence?",
        a: "On most Beaumont privacy jobs, vinyl costs more on day one than wood of a similar height and length. The difference is the material, not a longer install. Wood then needs stain or paint if you want it to hold its color in this humidity. We price both from the same measurement so you can compare the two quotes.",
      },
      {
        q: "Can you install privacy, picket, and ranch rail?",
        a: "Yes. Privacy is the solid backyard screen. Picket fits a front or side line where you still want to see the yard. Ranch rail comes in two, three, and four rails for a boundary that is not meant to be private. We will tell you which profile fits the opening and the slope.",
      },
      {
        q: "Will vinyl hold up in Beaumont heat and humidity?",
        a: "Vinyl does not absorb water the way a wood board does, so it does not need a stain cycle to stay sound. Full sun can still warm a dark panel, and a hard impact can crack one. We set the posts so the line stays put in wet ground. Rinse it when you wash the house if you want it to look fresh.",
      },
      {
        q: "Can you run vinyl on a sloped yard?",
        a: "Yes. We either rack the panel to follow the slope or step it so each section stays level. Stepping leaves a small gap under the downhill end unless we trim or fill that gap. We decide that on the lot, because a photo of the yard rarely shows the grade.",
      },
      {
        q: "Do I still need approval if the city does not require a permit?",
        a: "Sometimes. A City of Beaumont fence at 6 feet or under on private property does not need a building permit, and taller fences have a separate windstorm rule. An HOA can still require a color, a height, or a style even when the city does not. Other towns nearby do not use Beaumont's rule. We ask about both before we order panels.",
      },
      {
        q: "Can you set vinyl panels on my old wood posts?",
        a: "Usually no. Vinyl uses its own post and rail system, and old wood posts are rarely spaced or sized for those panels. If the wood posts are already loose, they should come out. We quote the new post line with the panels so the fence is one system.",
      },
    ],
    related: [
      { href: "/wood-fence.html", label: "Wood fence" },
      { href: "/aluminum-fence.html", label: "Aluminum fence" },
      { href: "/beaumont-tx.html", label: "Beaumont" },
      { href: "/nederland-tx.html", label: "Nederland" },
    ],
  },
  {
    slug: "chain-link-fence",
    name: "Chain-link Fence",
    title: "Chain Link Fence Installation in Beaumont, TX",
    description:
      "Chain link fence installation in Beaumont, TX for yards, kennels, and commercial edges. Galvanized or coated fabric. Call (409) 254-6532.",
    h1: "Chain Link Fence Installation in Beaumont, TX",
    card: "Galvanized or coated chain link for yards, kennels, and commercial edges. You keep a clear view and a secure line, with slats if you want them.",
    image: "/images/chain-link.jpg",
    imageAlt: "Galvanized chain-link fence with round metal posts",
    width: 1200,
    height: 800,
    intro:
      "JD's Fence Company installs chain-link fences for residential yards, dog runs, and commercial edges around Beaumont. Chain link is the practical choice when you need a secure line and do not need a solid screen. We offer galvanized fabric, plus black or green vinyl-coated fabric when you want it to blend into the yard. Slats and windscreens can be added if you want partial privacy. We measure the line and quote the gates and posts with the fabric.",
    whenTitle: "When chain link is the right job",
    when: "Use chain link for a yard, a kennel, a side lot, or a business edge where you want to see through the fence. It costs less than a privacy fence of the same length, and it does not give you backyard privacy unless you add slats or a screen. Black or green coated fabric sits quieter against a lawn than plain galvanized. For a shop yard with truck gates, start on the commercial fencing page.",
    whenImage: "/images/chain-link.jpg",
    whenAlt: "Galvanized chain-link fence with round metal posts",
    whenWidth: 1200,
    whenHeight: 800,
    process: [
      {
        h: "Mark the use",
        p: "A dog run, a full yard, and a commercial edge do not use the same height or fabric.",
      },
      {
        h: "Choose the fabric",
        p: "Galvanized, or black or green vinyl-coated, plus slats if you want a partial screen.",
      },
      {
        h: "Set terminal posts",
        p: "Ends, corners, and gates carry the tension. Those posts go in before the line posts and fabric.",
      },
      {
        h: "Stretch and hang gates",
        p: "We stretch the fabric tight, tie it off, and hang the gate so it latches without dragging.",
      },
    ],
    costs: [
      {
        h: "Height and gauge",
        p: "A taller or heavier fabric costs more than a standard residential run.",
      },
      {
        h: "Coating",
        p: "Vinyl-coated black or green fabric costs more than plain galvanized.",
      },
      {
        h: "Gates",
        p: "Walk gates are simple. A wide drive gate needs a heavier frame and posts.",
      },
      {
        h: "Privacy add-ons",
        p: "Slats or a windscreen are extra material on top of the fence itself.",
      },
    ],
    faqs: [
      {
        q: "How much does chain link cost compared with wood privacy?",
        a: "A standard chain-link yard fence usually costs less per foot than a wood privacy fence of the same length, because it uses less material and it is not a solid screen. Coated fabric, extra height, and slats close that gap. A commercial run with a drive gate is priced on its own. We quote from the measurement, not from a catalog rate.",
      },
      {
        q: "Can you add privacy slats or a windscreen?",
        a: "Yes. Slats weave into the fabric and cut the view without turning the fence into a solid wall. A windscreen is a panel laced to the fence, and it catches more wind, so the posts and the height have to be up to that load. We will say if the existing or planned posts can take it.",
      },
      {
        q: "Do you install taller chain link for commercial yards?",
        a: "Yes. Residential yards are often four to six feet. A storage yard, a contractor lot, or a sports edge may need a taller line so people and equipment stay on the right side. Taller fences also catch more wind. We spec the posts for that height instead of stretching a short residential system.",
      },
      {
        q: "Can you fence a dog run or kennel?",
        a: "Yes. Tell us the breed and whether the dog climbs or digs. A kennel often wants a tighter fabric, a buried edge or a bottom rail, and a gate the dog cannot push open. A full backyard fence and a small run are different layouts, and we price the one you describe.",
      },
      {
        q: "Which coatings do you install?",
        a: "We install galvanized chain link, and black or green vinyl-coated fabric when you want the fence to blend into the yard. The coating is color and a layer over the steel. The posts, the rail, the fabric, and the gate are still the structure of the job. Coated fabric is the upgrade when the look matters and the budget allows it.",
      },
      {
        q: "Can a new chain-link run tie into old posts?",
        a: "Sometimes. If the old terminal posts are plumb, solid, and the right size, we can stretch new fabric to them. Bent posts, thin residential posts on a taller line, and posts with failed concrete should come out. We check that before we quote a partial replacement.",
      },
    ],
    related: [
      { href: "/commercial-fencing.html", label: "Commercial fencing" },
      { href: "/aluminum-fence.html", label: "Aluminum fence" },
      { href: "/port-arthur-tx.html", label: "Port Arthur" },
      { href: "/groves-tx.html", label: "Groves" },
    ],
  },
  {
    slug: "aluminum-fence",
    name: "Aluminum Fence",
    title: "Aluminum Fence Installation in Beaumont, TX",
    description:
      "Ornamental aluminum fence installation in Beaumont, TX for pools, front yards, and open lines. Call JD's Fence Company at (409) 254-6532.",
    h1: "Aluminum Fence Installation in Beaumont, TX",
    card: "Ornamental aluminum for pools, front yards, and open lines. It gives a metal look without the rust cycle bare steel gets in Gulf humidity.",
    image: "/images/aluminum.jpg",
    imageAlt: "Black ornamental fence with pointed finials behind a trimmed hedge",
    width: 1200,
    height: 800,
    intro:
      "JD's Fence Company installs ornamental aluminum fences for Beaumont pools, front yards, and any line where you want to see through the fence. Aluminum gives the look people associate with iron. It does not rust the way bare steel does in this humidity. We set posts on the layout and hang gates that latch cleanly, including self-closing pool gates when the layout calls for them. We measure the line, count the openings, and send a written quote.",
    whenTitle: "When aluminum is the right job",
    when: "Choose aluminum when the fence should stay open: a pool barrier, a frontage, or a side yard you do not want to wall off. It is a poor substitute for a privacy screen. Wood or vinyl does that job. Around Beaumont, Port Arthur, and Bridge City, the humid air is hard on bare steel. Aluminum avoids that rust cycle. Confirm any pool-barrier rule for your city before we schedule, and we will build the height and gate style that layout needs.",
    whenImage: "/images/aluminum.jpg",
    whenAlt: "Black ornamental fence with pointed finials behind a trimmed hedge",
    whenWidth: 1200,
    whenHeight: 800,
    process: [
      {
        h: "Map the opening",
        p: "Pools, walks, and driveways set the gate locations before we talk about picket style.",
      },
      {
        h: "Match the finish",
        p: "Black is the common ornamental finish. We confirm the color against the house and any HOA note.",
      },
      {
        h: "Set posts on layout",
        p: "Posts follow the grade and the gate openings so the rails stay in line.",
      },
      {
        h: "Fit gates and hardware",
        p: "Gates are hung to latch cleanly. Pool gates can be set up to close on their own when the layout calls for it.",
      },
    ],
    costs: [
      {
        h: "Height and style",
        p: "Taller ornamental styles and decorative pickets cost more than a simple flat-top rail.",
      },
      {
        h: "Gates",
        p: "A self-closing pool gate and a wide drive gate are priced differently from a basic walk gate.",
      },
      {
        h: "Layout",
        p: "Curves, lots of corners, and steps in the grade add posts and cuts.",
      },
      {
        h: "Removal",
        p: "Taking out an old wood or chain-link line is separate from the new aluminum.",
      },
    ],
    faqs: [
      {
        q: "How much does an aluminum fence cost in Beaumont?",
        a: "Ornamental aluminum usually lands above basic chain link and in a different range from wood privacy, because you are buying a finished metal system rather than boards or fabric. Height, picket style, and gates move the price more than the color does. We measure the line, count the openings, and quote that layout.",
      },
      {
        q: "Can you fence a pool with aluminum?",
        a: "Yes. Aluminum is a common pool fence here because water and humidity do not rust it the way they rust bare steel. The height, the gap at the bottom, and a gate that closes and latches are part of the local barrier rule, and that rule is not the same in every city. We build to the layout you need and ask you to confirm the barrier requirement before we schedule.",
      },
      {
        q: "Will aluminum rust in Beaumont humidity?",
        a: "Aluminum does not rust the way bare steel and iron do. It can still stain or dull if it is left against sprinkler overspray and never rinsed, and a deep scratch can show the metal under the finish. For a pool or a front yard in this climate, that is the reason we recommend it over a steel fence that has to be painted to survive.",
      },
      {
        q: "Can you match a black or bronze finish?",
        a: "Black is the finish we install most often, and bronze is available on many of the same ornamental styles. We match the house and any HOA color note before the material is ordered. Once the finish is on the aluminum, it is not a paint you refresh every year the way a steel fence is.",
      },
      {
        q: "Can you put aluminum on a front yard?",
        a: "Yes. An open metal fence keeps the view of the house and still marks the line. Some Beaumont districts limit how tall a solid front-yard fence can be, which is another reason an open style fits the front. We still keep the fence on private property and out of the right-of-way.",
      },
      {
        q: "Do you build the gate with the fence?",
        a: "Yes. The gate is part of the layout, not an add-on after the pickets are up. We set the opening for the walk, the mower, or the pool equipment, and we hang the hardware so the gate meets the latch. A gate that is framed too light will sag, so the width decides the frame.",
      },
    ],
    related: [
      { href: "/vinyl-fence.html", label: "Vinyl fence" },
      { href: "/commercial-fencing.html", label: "Commercial fencing" },
      { href: "/beaumont-tx.html", label: "Beaumont" },
      { href: "/bridge-city-tx.html", label: "Bridge City" },
    ],
  },
  {
    slug: "farm-fence",
    name: "Farm Fence",
    title: "Farm Fence Installation in Beaumont, TX",
    description:
      "Farm and ranch fence for acreage around Beaumont, Vidor, Lumberton, and Orange County. Field fence, ranch rail, and equipment gates. Call (409) 254-6532.",
    h1: "Farm Fence Installation around Beaumont, TX",
    card: "Field fence and ranch rail for pasture and acreage around Beaumont. Built for the animals you keep, with a gate wide enough for trucks.",
    image: "/images/farm.jpg",
    imageAlt: "Wooden ranch rail fence along a grassy field",
    width: 1200,
    height: 800,
    intro:
      "JD's Fence Company builds farm fence for acreage around Beaumont, not for city backyards. We install field fence and ranch rail for livestock and crop edges, including lots in Lumberton, Vidor, and Orange County. The mesh, rail, and height change with the animals you keep. Corner and gate posts are set to carry the load, and gates are sized for the truck or tractor that uses them. We walk the line before we quote because pasture fences cross soft ground, ditches, and trees.",
    whenTitle: "When a farm fence is the right job",
    when: "Use farm fence when the line has to hold animals or keep them out of a crop. Horses need a rail they can see. Cattle are often held with field fence and a solid post. Goats test mesh and latches. A privacy fence around the house is a separate run of wood or vinyl. The two can meet on the same property, and they should not be forced into one product. We walk the line because pasture fences cross soft ground, ditches, and trees.",
    whenImage: "/images/farm.jpg",
    whenAlt: "Wooden ranch rail fence along a grassy field",
    whenWidth: 1200,
    whenHeight: 800,
    process: [
      {
        h: "Name the animals",
        p: "Horses, cattle, goats, or a crop edge each change the mesh, the rail, and the height.",
      },
      {
        h: "Walk the acreage",
        p: "We mark gates for trucks and equipment, plus low spots and trees the line has to pass.",
      },
      {
        h: "Set the posts",
        p: "Corners and gate posts take the load. Line posts follow at a spacing that fits the fence type.",
      },
      {
        h: "Hang a working gate",
        p: "A farm gate has to clear the tractor or the trailer you actually drive through.",
      },
    ],
    costs: [
      {
        h: "Distance",
        p: "Acreage is priced by the length of the line and by how many corners it turns.",
      },
      {
        h: "Fence type",
        p: "Woven field fence, ranch rail, and a mix of the two do not share a price.",
      },
      {
        h: "Gates",
        p: "A wide equipment gate costs more than a narrow walk-through in the same line.",
      },
      {
        h: "Access and ground",
        p: "Soft ground, brush, and a line far from the road add time to the same footage.",
      },
    ],
    faqs: [
      {
        q: "How much does a farm fence cost?",
        a: "A pasture line is priced by length, fence type, and gates, and it is rarely the same per-foot number as a city privacy fence. Field fence on clear ground is a different job from ranch rail through trees with two equipment gates. We walk the line and quote that route. A photo of the field is not enough to price the corners and the low spots.",
      },
      {
        q: "Can you fence horses, cattle, or goats?",
        a: "Yes, and they do not share one fence. Horses need a visible rail so they do not run into a thin wire. Cattle can be held with field fence and posts that stay put at the corners. Goats climb and push latches, so the mesh and the gate hardware change. Tell us which animals are on the place.",
      },
      {
        q: "What is the difference between field fence and ranch rail?",
        a: "Field fence is a woven wire mesh that contains livestock and still lets you see the field. Ranch rail is a wood rail line, easier for a horse to see and better where you want a visible boundary. Mesh keeps smaller animals in. Rail alone does not. Some places need rail along the road and field fence on the pasture.",
      },
      {
        q: "Can one fence keep stock in and animals out of a crop?",
        a: "Those are opposite jobs, and the fence is built for the one you name. A line that holds your cattle is not always the line that keeps a neighbor's stock out of a crop row. If you need both, we plan two runs or a mesh-and-rail combination instead of stretching one style around the whole place.",
      },
      {
        q: "Do you work outside Beaumont city limits?",
        a: "Yes. Farm jobs are usually on acreage in Hardin County around Lumberton, in Vidor, and on the Orange County side, as well as larger Jefferson County tracts. The City of Beaumont permit rule for a 6-foot yard fence does not decide a pasture line in another jurisdiction. We confirm the address before we build.",
      },
      {
        q: "Can you add a farm gate for equipment?",
        a: "Yes. Tell us what has to pass: a truck, a tractor, a trailer, or a stock trailer. The opening width and the hinge post are set from that, not from a standard walk gate. A gate that is too narrow becomes the daily problem on an otherwise sound fence.",
      },
    ],
    related: [
      { href: "/wood-fence.html", label: "Wood fence" },
      { href: "/chain-link-fence.html", label: "Chain-link fence" },
      { href: "/lumberton-tx.html", label: "Lumberton" },
      { href: "/vidor-tx.html", label: "Vidor" },
      { href: "/orange-tx.html", label: "Orange" },
    ],
  },
  {
    slug: "commercial-fencing",
    name: "Commercial Fencing",
    title: "Commercial Fencing in Beaumont, TX",
    description:
      "Commercial chain link, aluminum, and drive gates for Beaumont and Port Arthur yards and job sites. Quoted from the site. Call (409) 254-6532.",
    h1: "Commercial Fencing in Beaumont, TX",
    card: "Chain link, aluminum, and drive gates for shops, yards, and job sites. The layout follows truck access and the length of the yard.",
    image: "/images/commercial.jpg",
    imageAlt: "Chain-link fence suited to commercial yards and drive gates",
    width: 1200,
    height: 800,
    intro:
      "JD's Fence Company installs commercial fencing for shops, storage yards, and job sites in Beaumont. The fence is usually chain link, sometimes aluminum, and almost always paired with a gate a truck can use. We plan the line around the yard, the equipment, and the city's rule for that address. Posts and fabric are specified for the height the site needs instead of a residential kit. We read the site, then send a written quote that prices the gates and the fence together.",
    whenTitle: "When a commercial fence is the right job",
    when: "A shop, a storage yard, a contractor lot, or a light industrial edge needs a spec, not a backyard panel. Chain link is the fence we install most often for businesses in the Beaumont area. Aluminum fits a frontage that should stay open and finished. A wood privacy fence is the wrong product around a yard full of trucks. Security toppers such as barbed wire go on commercial sites only where that city allows them.",
    whenImage: "/images/commercial.jpg",
    whenAlt: "Chain-link fence suited to commercial yards and drive gates",
    whenWidth: 1200,
    whenHeight: 800,
    process: [
      {
        h: "Read the site",
        p: "We look at truck paths, pedestrian gates, and where the fence has to stop for access or an easement.",
      },
      {
        h: "Match the material",
        p: "Chain link for the yard, aluminum where the frontage should stay open, and the gate hardware the traffic needs.",
      },
      {
        h: "Confirm the local rule",
        p: "Beaumont and Port Arthur do not use the same permit threshold. We check the job address before we build.",
      },
      {
        h: "Build and test the gates",
        p: "The fence is finished when the drive gate swings or rolls clear of the trucks that use it.",
      },
    ],
    costs: [
      {
        h: "Linear feet and height",
        p: "Commercial height and heavier fabric cost more than a residential chain-link run.",
      },
      {
        h: "Vehicle gates",
        p: "A drive gate, and any operator, is often a larger share of the price than the fence line.",
      },
      {
        h: "Spec extras",
        p: "Coated fabric, privacy screen, and a permitted security topper are separate line items.",
      },
      {
        h: "Site conditions",
        p: "Concrete, utilities, and a fence that has to stay open during business hours change the labor.",
      },
    ],
    faqs: [
      {
        q: "How much does commercial fencing cost?",
        a: "A commercial price depends on height, fabric, linear feet, and the gates. The drive gate is often the expensive piece, not the fence between the posts. A short aluminum frontage and a tall chain-link yard are different quotes. We look at the site, or a plan if you have one, and price that layout.",
      },
      {
        q: "Can you install chain link around a business?",
        a: "Yes. Chain link is the commercial fence we install most often around Beaumont. It marks the yard, keeps a sight line, and takes a vehicle gate. We size the posts and the fabric for the height you need instead of using a residential kit on a commercial lot.",
      },
      {
        q: "Do you build vehicle gates?",
        a: "Yes. Tell us what drives through and whether the gate needs to swing in, swing out, or roll. The opening has to clear the truck, and the hinge or the track has to sit where it will not block the drive aisle. We quote the gate with the fence so the posts are built for that load.",
      },
      {
        q: "Can you add a security topper?",
        a: "On a commercial site, sometimes. Barbed wire and similar toppers are allowed only where the property type and the city rule permit them. We do not put that hardware on a residential line. If you want it, we confirm the address first and include it in the quote only when it is allowed.",
      },
      {
        q: "Do you work from a contractor's plan?",
        a: "Yes. Property managers and general contractors can send a layout, a gate width, and a height. We still look at the ground, because a plan does not show a utility crossing or a drive that is tighter than the drawing. If there is no plan, we measure the yard and write the scope from that.",
      },
      {
        q: "What do you install most often for Beaumont businesses?",
        a: "Chain link, with a gate sized for vehicles, is the usual commercial job. Aluminum shows up on frontages and on sites that want an open metal line. If the project is a house yard, it belongs on the wood, vinyl, or aluminum pages instead of this one.",
      },
    ],
    related: [
      { href: "/chain-link-fence.html", label: "Chain-link fence" },
      { href: "/aluminum-fence.html", label: "Aluminum fence" },
      { href: "/port-arthur-tx.html", label: "Port Arthur" },
      { href: "/beaumont-tx.html", label: "Beaumont" },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
