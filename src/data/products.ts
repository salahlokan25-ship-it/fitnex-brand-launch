import imgCyclingJacket from "@/assets/products/cycling-jacket.jpg";
import imgWristAnkleWeights from "@/assets/products/wrist-ankle-weights.jpg";
import imgWeightedJumpRope from "@/assets/products/weighted-jump-rope.jpg";
import imgVintageCyclingCap from "@/assets/products/vintage-cycling-cap.jpg";
import imgCyclingJacketPro from "@/assets/products/cycling-jacket-pro.jpg";
import imgPushUpBoard from "@/assets/products/push-up-board.jpg";
import imgCompressionTank from "@/assets/products/compression-tank.jpg";
import imgThermoSculpt from "@/assets/products/thermo-sculpt.jpg";
import imgSweatSculpt from "@/assets/products/sweat-sculpt.jpg";
import imgStormproofJacket from "@/assets/products/stormproof-jacket.jpg";
import imgAbsStimulator from "@/assets/products/abs-stimulator.jpg";
import imgSculptLeggings from "@/assets/products/sculpt-leggings.jpg";
import imgResistanceBandsSet from "@/assets/products/resistance-bands-set.jpg";
import imgGymPants from "@/assets/products/gym-pants.jpg";
import imgYogaMat from "@/assets/products/yoga-mat.jpg";
import imgLiftingStraps from "@/assets/products/lifting-straps.jpg";
import imgPowergripForearm from "@/assets/products/powergrip-forearm.jpg";
import imgRunningShirt from "@/assets/products/running-shirt.jpg";
import imgCompressionBaseLayer from "@/assets/products/compression-base-layer.jpg";
import imgYogaCropTank from "@/assets/products/yoga-crop-tank.jpg";
import imgGymShorts from "@/assets/products/gym-shorts.jpg";
import imgSportsBra from "@/assets/products/sports-bra.jpg";
import imgCyclingSocks from "@/assets/products/cycling-socks.jpg";
import imgResistanceLoopBands from "@/assets/products/resistance-loop-bands.jpg";
import imgRunningShoes from "@/assets/products/running-shoes.jpg";
import imgGripSocks from "@/assets/products/grip-socks.jpg";
import imgAnkleStraps from "@/assets/products/ankle-straps.jpg";
import imgDryBag from "@/assets/products/dry-bag.jpg";

export interface Product {
  id: string;
  title: string;
  price: number;
  comparePrice: number;
  image: string;
  images: string[];
  colors: string[];
  sizes?: string[];
  category: string;
  description: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "cycling-jacket",
    title: "Storm Shield Cycling Jacket — Ride Through Anything",
    price: 29.99,
    comparePrice: 49.99,
    image: imgCyclingJacket,
    images: [imgCyclingJacket],
    colors: ["White", "Orange", "Green", "Black", "Yellow"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Cycling",
    description: "Don't let the weather decide your ride. Featherlight windproof & waterproof shell locks out rain and cold while high-visibility reflective strips keep you seen after dark. Your best ride is ahead — no excuses.",
    badge: "BEST SELLER",
  },
  {
    id: "wrist-ankle-weights",
    title: "Precision Load Wrist & Ankle Weights — Build More. Everywhere.",
    price: 29.99,
    comparePrice: 39.99,
    image: imgWristAnkleWeights,
    images: [imgWristAnkleWeights],
    colors: ["Black"],
    category: "Accessories",
    description: "Every walk, run or stretch becomes a real workout. Adjustable resistance wraps securely around wrists or ankles — burn more calories without changing your routine. Turn ordinary movement into extraordinary results.",
  },
  {
    id: "weighted-jump-rope",
    title: "PowerBurn Jump Rope — 1,000 Calories Won't Know What Hit Them",
    price: 19.99,
    comparePrice: 29.99,
    image: imgWeightedJumpRope,
    images: [imgWeightedJumpRope],
    colors: ["Pink", "Gray"],
    category: "Cardio",
    description: "Torch fat faster than a treadmill session in half the time. The weighted handles intensify every jump, building stamina, coordination and lean muscle simultaneously. 15 minutes. Real results. No gym needed.",
    badge: "HOT",
  },
  {
    id: "vintage-cycling-cap",
    title: "Retro Rider Cap — Classic Style, Pro-Level Performance",
    price: 14.99,
    comparePrice: 24.99,
    image: imgVintageCyclingCap,
    images: [imgVintageCyclingCap],
    colors: ["Orange", "White", "Blue", "Yellow"],
    category: "Cycling",
    description: "Built for riders who refuse to look ordinary. Breathable moisture-wicking fabric shields you from glare while the iconic retro silhouette turns heads on every climb. Look fast. Ride faster.",
  },
  {
    id: "cycling-jacket-pro",
    title: "AeroShield Pro Jacket — Wind Stops Here",
    price: 29.99,
    comparePrice: 39.99,
    image: imgCyclingJacketPro,
    images: [imgCyclingJacketPro],
    colors: ["White", "Orange", "Yellow", "Green"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Cycling",
    description: "Elite-level wind and rain protection packed into a jacket you can stuff in your jersey pocket. Reflective detailing for safety at dusk and dawn. Engineered for cyclists who train no matter the forecast.",
  },
  {
    id: "push-up-board",
    title: "BodyForge 12-in-1 Push-Up Board — Your Home Gym in One Board",
    price: 24.99,
    comparePrice: 34.99,
    image: imgPushUpBoard,
    images: [imgPushUpBoard],
    colors: ["Multi"],
    category: "Equipment",
    description: "Cancel your gym membership. 12 targeted positions sculpt your chest, shoulders, triceps and core from a single foldable board. Full-body transformation in 15 minutes a day — from living room to lean machine.",
    badge: "NEW",
  },
  {
    id: "compression-tank",
    title: "IceFlex Compression Tank — Stay Ice-Cold. Train Harder.",
    price: 19.99,
    comparePrice: 29.99,
    image: imgCompressionTank,
    images: [imgCompressionTank],
    colors: ["Black", "Green", "Navy", "White", "Blue"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "Apparel",
    description: "Sweat smart, not harder. ThermoRegulate fabric pulls heat away from your body so you can push through your last rep feeling as fresh as your first. Built for those who refuse to quit.",
  },
  {
    id: "thermo-sculpt",
    title: "ThermoSculpt Waist Trainer — Sweat More. Shrink Faster.",
    price: 19.99,
    comparePrice: 29.99,
    image: imgThermoSculpt,
    images: [imgThermoSculpt],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    colors: ["Black"],
    category: "Body Shapers",
    description: "Amplify every workout session. The heat-trapping core layer multiplies perspiration around your midsection, supports your lower back and cinches your waist — so you look as strong as you feel from day one.",
  },
  {
    id: "sweat-sculpt",
    title: "SweatSculpt Waist Belt — Melt the Stubborn. Own Your Core.",
    price: 19.99,
    comparePrice: 29.99,
    image: imgSweatSculpt,
    images: [imgSweatSculpt],
    sizes: ["S", "M", "L"],
    colors: ["Green", "Pink"],
    category: "Body Shapers",
    description: "Targeting belly fat has never felt this empowering. Premium neoprene core belt raises your midsection temperature, intensifies every workout and delivers visible results faster. Wear it. Feel it. See it.",
  },
  {
    id: "stormproof-jacket",
    title: "StormForce Training Jacket — Trained for the Worst. Built for the Best.",
    price: 29.99,
    comparePrice: 39.99,
    image: imgStormproofJacket,
    images: [imgStormproofJacket],
    colors: ["Blue", "Beige", "Gray"],
    sizes: ["L", "XL", "2XL", "3XL", "4XL", "5XL"],
    category: "Apparel",
    description: "Rain, wind, and cold have zero power over your training schedule. Lightweight yet fully sealed construction keeps you dry and unrestricted through hikes, runs and outdoor circuits. Zero excuses. All performance.",
    badge: "POPULAR",
  },
  {
    id: "abs-stimulator",
    title: "PulseCore EMS Abs Stimulator — Six-Pack Science, Zero Crunches",
    price: 19.99,
    comparePrice: 29.99,
    image: imgAbsStimulator,
    images: [imgAbsStimulator],
    colors: ["Black"],
    category: "Electronics",
    description: "EMS technology sends targeted electrical pulses directly to your abdominal muscles — activating and toning them while you work, rest or recover. Wireless, rechargeable, 6 intensity levels. Your core, upgraded.",
  },
  {
    id: "sculpt-leggings",
    title: "ContourFit Sculpt Leggings — Hug Your Curves. Own the Room.",
    price: 29.99,
    comparePrice: 39.99,
    image: imgSculptLeggings,
    images: [imgSculptLeggings],
    colors: ["Gray", "Green", "Black", "Beige", "Red"],
    sizes: ["S", "M", "L", "XL"],
    category: "Apparel",
    description: "The leggings that make you want to move. 4-way stretch sculpting fabric lifts, supports and flatters through every squat, lunge and stretch. 100% squat-proof. So comfortable you'll forget you're even working out.",
    badge: "TRENDING",
  },
  {
    id: "resistance-bands-set",
    title: "FlexForce Resistance Bands — Your Entire Gym Fits in Your Bag",
    price: 19.99,
    comparePrice: 29.99,
    image: imgResistanceBandsSet,
    images: [imgResistanceBandsSet],
    colors: ["Green", "Yellow", "Multicolor"],
    category: "Equipment",
    description: "Hotel room. Backyard. Living room floor. Wherever you are, this is your gym. Progressive resistance from gentle warm-up to full-on beast mode — build real strength with zero machines, zero membership fees.",
  },
  {
    id: "gym-pants",
    title: "FlexPro Training Pants — Move Without Limits. Look Unstoppable.",
    price: 29.99,
    comparePrice: 39.99,
    image: imgGymPants,
    images: [imgGymPants],
    colors: ["Green", "Black"],
    sizes: ["XL"],
    category: "Apparel",
    description: "Engineered for powerlifters who demand both function and form. Ultra-breathable mesh panels prevent overheating. Reinforced squat-proof fabric moves with your body — not against it. Train like a pro, look like one.",
  },
  {
    id: "yoga-mat",
    title: "ZenGrip Pro Mat — Your Foundation for Every Breakthrough",
    price: 19.99,
    comparePrice: 29.99,
    image: imgYogaMat,
    images: [imgYogaMat],
    colors: ["Blue", "Pink", "Black"],
    category: "Equipment",
    description: "Slip-free. Pain-free. Distraction-free. Extra-thick cushioning absorbs every impact while the textured non-slip surface locks you in — whether you're deep in warrior pose or grinding out burpees. Pure focus, pure results.",
  },
  {
    id: "lifting-straps",
    title: "IronGrip Lifting Straps — Never Drop Another PR",
    price: 9.99,
    comparePrice: 14.99,
    image: imgLiftingStraps,
    images: [imgLiftingStraps],
    colors: ["Blue", "Red", "Black", "Camouflage", "Pink", "Green"],
    category: "Accessories",
    description: "Your grip is the only thing holding you back from your next personal record. Heavy-duty cotton weave wraps your wrists in ironclad security — deadlifts, rows, shrugs. Pull heavier. Break records. No limits.",
  },
  {
    id: "powergrip-forearm",
    title: "GripCrusher Forearm Trainer — Unlock the Strength Everyone Can See",
    price: 19.99,
    comparePrice: 29.99,
    image: imgPowergripForearm,
    images: [imgPowergripForearm],
    colors: ["Black"],
    category: "Accessories",
    description: "Forearms and grip strength are the foundation of every elite athlete. Progressive resistance builds crushing power in your hands, wrists and forearms — turning your weakest link into your most powerful weapon.",
  },
  {
    id: "running-shirt",
    title: "AirFlow Running Shirt — So Light, You'll Forget You're Wearing It",
    price: 19.99,
    comparePrice: 29.99,
    image: imgRunningShirt,
    images: [imgRunningShirt],
    colors: ["Gray", "Green", "Black", "White", "Navy"],
    sizes: ["M", "L", "XL", "2XL", "3XL", "4XL"],
    category: "Apparel",
    description: "Engineered for athletes who demand invisible performance. Rapid-dry micro-ventilation fabric wicks sweat on contact and keeps you cool through every kilometer. Run farther. Run faster. Feel nothing holding you back.",
  },
  {
    id: "compression-base-layer",
    title: "EliteForce Compression Base Layer — Dominate Every Rep. Every Set.",
    price: 29.99,
    comparePrice: 49.99,
    image: imgCompressionBaseLayer,
    images: [imgCompressionBaseLayer],
    colors: ["Black", "Red", "Blue", "White"],
    sizes: ["M", "L", "XL", "2XL", "3XL"],
    category: "Apparel",
    description: "Graduated compression technology increases blood flow, reduces muscle fatigue and accelerates recovery — so you come back stronger every single session. Worn by athletes who train to win, not just participate.",
    badge: "ELITE",
  },
  {
    id: "yoga-crop-tank",
    title: "FlowFlex Backless Crop Tank — Move Beautifully. Feel Unstoppable.",
    price: 24.99,
    comparePrice: 39.99,
    image: imgYogaCropTank,
    images: [imgYogaCropTank],
    colors: ["Gray", "Pink"],
    category: "Apparel",
    description: "The tank that moves with your body, not against it. Built-in padded support, an open back for maximum breathability and a flattering crop length — perfect for yoga, pilates, or anything that demands confidence.",
  },
  {
    id: "gym-shorts",
    title: "DualFlex 2-in-1 Gym Shorts — The Last Shorts You'll Ever Need",
    price: 19.99,
    comparePrice: 29.99,
    image: imgGymShorts,
    images: [imgGymShorts],
    colors: ["Black", "Red", "Green", "White"],
    sizes: ["M", "L", "XL", "2XL", "3XL"],
    category: "Apparel",
    description: "Anti-chafe inner liner. Secure phone pocket. Quick-dry mesh that keeps you cool. These aren't just shorts — they're a complete solution for athletes who hate distractions and love results. Wear them. Forget them. Train hard.",
  },
  {
    id: "sports-bra",
    title: "Freedom Flex Sports Bra — Maximum Support. Zero Compromise.",
    price: 19.99,
    comparePrice: 29.99,
    image: imgSportsBra,
    images: [imgSportsBra],
    colors: ["Black", "Beige", "Blue", "Gray", "Purple", "Pink", "White"],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL", "XXXXL", "XXXXXL"],
    category: "Apparel",
    description: "Stop letting discomfort interrupt your best sessions. Front-zip closure for effortless on/off, moisture-wicking fabric that stays fresh for hours, and cross-back support that holds you through every jump, sprint and lift.",
    badge: "TOP PICK",
  },
  {
    id: "cycling-socks",
    title: "PedalPro Cycling Socks 4-Pack — Your Feet Will Thank You at Mile 50",
    price: 12.99,
    comparePrice: 19.99,
    image: imgCyclingSocks,
    images: [imgCyclingSocks],
    colors: ["Black", "White", "Green", "Orange"],
    category: "Cycling",
    description: "Every serious ride deserves serious socks. Arch compression reduces fatigue on long hauls while moisture-wicking fibers prevent the dreaded hot-spot blister. Four pairs — one for every condition you ride in.",
  },
  {
    id: "resistance-loop-bands",
    title: "BandForce 5-Level Loop Bands — Progressive Strength, Anywhere",
    price: 16.99,
    comparePrice: 24.99,
    image: imgResistanceLoopBands,
    images: [imgResistanceLoopBands],
    colors: ["Green", "Blue", "Red", "Black"],
    category: "Equipment",
    description: "One set to take you from rehab to record-breaking. Five color-coded resistance levels guide your progression from light activation to heavy muscle building — glutes, legs, arms, back. Total body. Total control.",
  },
  {
    id: "running-shoes",
    title: "CloudStrike Running Shoes — Every Step. Cushioned. Powerful. Yours.",
    price: 49.99,
    comparePrice: 79.99,
    image: imgRunningShoes,
    images: [imgRunningShoes],
    colors: ["Orange", "Red", "Black", "Purple", "White", "Blue"],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"],
    category: "Footwear",
    description: "Your knees will thank you. Maximum dual-density cushioning absorbs shock on every stride while the adaptive fit cradles your foot for all-day comfort. Made for heavy runners who demand more from every kilometer.",
    badge: "PREMIUM",
  },
  {
    id: "grip-socks",
    title: "GripMaxx Non-Slip Socks — Never Slip Again. Train with Total Confidence.",
    price: 9.99,
    comparePrice: 14.99,
    image: imgGripSocks,
    images: [imgGripSocks],
    colors: ["Striped", "Purple", "Green", "Gray", "Beige", "Orange", "Blue", "Black", "Pink", "White"],
    category: "Accessories",
    description: "One bad slip can end your whole session. GripMaxx silicone sole pads create an invisible anchor between you and any surface — yoga studio, pilates reformer or gym floor. Stability, style and serious performance.",
  },
  {
    id: "ankle-straps",
    title: "IronFlex Ankle Straps — Sculpt the Lower Body You've Always Wanted",
    price: 14.99,
    comparePrice: 24.99,
    image: imgAnkleStraps,
    images: [imgAnkleStraps],
    colors: ["Black", "Red", "Purple", "Pink", "Blue"],
    category: "Accessories",
    description: "Cable machine meets lower body perfection. Heavy-duty D-ring attachment locks onto any cable system for glute kickbacks, leg raises and hip abductions that actually isolate the muscles you want to sculpt. Attach. Lift. Transform.",
  },
  {
    id: "dry-bag",
    title: "AquaVault Dry Bag — Waterproof. Rugged. Built for Real Adventures.",
    price: 17.99,
    comparePrice: 29.99,
    image: imgDryBag,
    images: [imgDryBag],
    colors: ["Purple", "Gray", "Black", "Orange"],
    category: "Accessories",
    description: "Your phone, keys and wallet are not waterproof. Your bag should be. Military-grade dry sealing keeps everything 100% dry through kayaking, beach runs, hiking in rain or any adventure life throws at you. Bring everything. Fear nothing.",
  },
];

export const categories = ["All", "Apparel", "Cycling", "Equipment", "Accessories", "Cardio", "Body Shapers", "Footwear", "Electronics"];
