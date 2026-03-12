export const botConfig = {
  name: "HIVE AI",
  tagline: "Your CODE NECTAR guide",
  avatar: "🍯",
  greeting: "Hey! I'm HIVE — your CODE NECTAR guide. Ask me anything about ingredients, products, or how to get started. 🍯",
  fallback: "Great question! I'd recommend reaching out to our team at hello@codenutra.com for more on that. Want me to help with something else?"
};

export const quickReplies = [
  "What's in Code Nectar?",
  "How do I take it?",
  "Compare the flavors",
  "Is it safe for me?",
  "What's the price?",
  "Subscribe vs one-time?",
  "How is this different?",
  "What does raw honey do?"
];

export const qaDatabase = [
  // PRODUCT QUESTIONS
  {
    id: "what_is",
    triggers: ["what is", "tell me about", "what's code", "about nectar", "what is code"],
    answer: "CODE NECTAR is the world's cleanest pre-workout — built around 100% raw honey instead of synthetic sugars. It delivers 4–6 hours of smooth, sustained energy using just 8 whole-food ingredients. No artificial sweeteners, no synthetic caffeine, no fillers. Ever. 🍯"
  },
  {
    id: "ingredients",
    triggers: ["ingredients", "what's in", "what is in", "formula", "contents", "inside"],
    answer: "CODE NECTAR has just 8 clean ingredients:\n\n🍯 Raw Honey (20g) — your primary energy fuel\n🍵 Green Tea Caffeine — smooth, natural alertness\n🌿 Guarana Caffeine — slow-release energy extension\n🧠 L-Theanine — no jitters, pure focus\n🫀 Beetroot (6% nitrates) — blood flow + oxygen delivery\n🧂 Redmond Sea Salt — electrolytes & hydration\n+ Natural flavoring (Ginger-Lemon / Matcha / Vanilla)\n\nThat's it. Nothing artificial. Nothing hidden."
  },
  {
    id: "flavors",
    triggers: ["flavors", "editions", "types", "varieties", "beetroot", "matcha", "vanilla", "compare flavors", "which flavor", "difference between"],
    answer: "We have 4 options to match your goals:\n\n🔴 Beetroot Edition (Ginger-Lemon) — The OG. Adds natural nitrates for blood flow and pump. Best for high-intensity training.\n\n🍵 Matcha Edition — Ceremonial-grade matcha adds extra L-theanine for even smoother, calmer focus. Best for mind-muscle connection.\n\n🍦 Vanilla Edition — Madagascar vanilla, mildest flavor. Perfect if you prefer a subtle taste or mix it into smoothies.\n\n💪 Creatine Edition — 5g creatine monohydrate + 15g raw honey. Best for strength & muscle building goals.\n\nAll editions: same clean base, 150mg natural caffeine, zero artificial anything."
  },
  {
    id: "creatine",
    triggers: ["creatine", "creatine monohydrate", "muscle", "strength"],
    answer: "Our Creatine Monohydrate edition is unique — it delivers 5g of pure creatine monohydrate with 15g of raw honey as the carrier. Raw honey's glucose-fructose combo actually enhances creatine uptake. Zero artificial ingredients. Available in packs of 15 or 30 servings. Perfect to stack with any Nectar pre-workout edition. 💪"
  },
  // HOW TO USE
  {
    id: "how_to_use",
    triggers: ["how to", "how do i", "how to take", "when to take", "use it", "instructions", "rip sip", "directions"],
    answer: "It's as simple as 1-2-3:\n\n01 RIP — Tear open the packet (no shaker, no mixing required)\n02 SIP — Squeeze the honey gel directly or add to water\n03 GO — You're ready to perform in 20–30 minutes\n\n⏰ Best taken 20–30 minutes before training, competition, or deep work. It lasts 4–6 hours so time it accordingly!"
  },
  {
    id: "when_to_take",
    triggers: ["when", "timing", "before workout", "before gym", "morning", "best time"],
    answer: "CODE NECTAR works great for:\n\n⚡ Pre-Training — 20-30 min before your session for clean power and focus\n🧠 Cognitive Work — Before deep work, studying, or strategy sessions\n🏆 Competition Days — When stakes are highest and you need composure + output\n🔄 Recovery — Honey's minerals and antioxidants support recovery cycles\n\nAvoid taking within 4–5 hours of sleep since it contains 150mg caffeine."
  },
  // PRICING & PURCHASING
  {
    id: "price",
    triggers: ["price", "cost", "how much", "pricing", "buy", "purchase", "order"],
    answer: "Here's the full pricing breakdown:\n\nNECTAR (Beetroot/Matcha/Vanilla):\n📦 12-pack: $29.74\n📦 24-pack: $50.99\n📦 48-pack: $93.49\n🔄 Subscribe (monthly): $29.99 (save 15%)\n💳 One-time: $34.99\n\nCREATINE:\n📦 15-pack: $25.49\n📦 30-pack: $38.24\n🔄 Subscribe: $29.99\n\nAll orders: 🔒 Secure checkout | 30-day guarantee | Free returns"
  },
  {
    id: "subscribe",
    triggers: ["subscribe", "subscription", "recurring", "cancel", "save", "discount", "membership"],
    answer: "Our Subscribe & Save plan gives you:\n\n✅ 15% off every order (save $5.25 per order)\n✅ Never run out — automatic resupply\n✅ Choose delivery: every 2 weeks or monthly\n✅ Cancel anytime — no risk, no commitment\n✅ Lock in your price against any future increases\n\nYou can manage or cancel your subscription anytime from your account. No hidden fees. No catch. 🍯"
  },
  // SAFETY & SCIENCE
  {
    id: "caffeine",
    triggers: ["caffeine", "stimulant", "how much caffeine", "safe caffeine", "jitters", "anxiety"],
    answer: "CODE NECTAR has 150mg of natural caffeine from TWO sources:\n\n🍵 Green Tea Extract — fast-acting, smooth alertness\n🌿 Guarana — releases 2-3x slower, extends your curve\n\nL-Theanine is paired with both to reduce jitters and anxiety. The result: no spike-and-crash. Just steady, clean energy.\n\n150mg is equivalent to roughly 1.5 cups of coffee — a clinically effective dose. Avoid if you're sensitive to caffeine or pregnant."
  },
  {
    id: "safe",
    triggers: ["safe", "is it safe", "side effects", "health", "safe for me", "pregnant", "medication"],
    answer: "CODE NECTAR is made from whole-food ingredients with no artificial additives. That said:\n\n⚠️ Contains 150mg natural caffeine — avoid if sensitive to caffeine\n⚠️ Not recommended during pregnancy or nursing\n⚠️ If you're on medications or have health conditions, consult your doctor first\n⚠️ Not intended for those under 18\n\nFor most healthy adults, the clean whole-food formula is gentler than conventional pre-workouts. Our formula is glyphosate-free, no seed oils, and zero synthetic anything."
  },
  {
    id: "raw_honey",
    triggers: ["honey", "raw honey", "sugar", "carbs", "glucose", "fructose", "natural sugar"],
    answer: "Raw honey is our secret weapon — here's why it beats every artificial alternative:\n\n🍯 Dual absorption: Glucose (fast fuel) + Fructose (slow fuel) = sustained energy without spikes\n🛡️ Antioxidants: Polyphenols reduce oxidative stress during high-output activity\n🌿 100% natural: No processing, no additives — straight from the source\n💪 Carb-driven energy: Fuels muscles directly without relying purely on stimulants\n\nUnlike dextrose or maltodextrin, raw honey supports your body's natural energy systems. That's why it's the base of every CODE product."
  },
  {
    id: "glyphosate",
    triggers: ["glyphosate", "pesticide", "clean", "organic", "gmo"],
    answer: "All CODE NECTAR ingredients are sourced and tested to be glyphosate-free. We don't use GMO ingredients or conventional pesticide-treated sources. Our sea salt is Redmond Real Salt — unrefined and naturally mineral-rich. Clean label means clean sourcing, not just clean marketing. 🌿"
  },
  // COMPARISON QUESTIONS
  {
    id: "vs_others",
    triggers: ["vs", "compared to", "difference", "better than", "other pre workouts", "c4", "ghost", "bang", "competitors"],
    answer: "Here's how CODE NECTAR stacks up against conventional pre-workouts:\n\nCODE NECTAR ✓\n• Dual-source organic caffeine (green tea + guarana)\n• Raw honey sweetness — real, usable fuel\n• 8 clean whole-food ingredients\n• 4–6 hours of smooth energy\n• Zero artificial anything\n\nBig Brand Pre-Workouts ✕\n• Synthetic caffeine anhydrous → hard crash\n• Sucralose / Ace-K → gut disruption\n• 20–40+ synthetic compounds\n• 1–2 hour spike then crash + brain fog\n• Artificial dyes, flavors, and fillers\n\nFundamentally different philosophy: we work WITH your body, not against it."
  },
  // SHIPPING & RETURNS
  {
    id: "shipping",
    triggers: ["shipping", "delivery", "how long", "ship", "track", "arrive"],
    answer: "📦 Standard Shipping: 3–7 business days (US)\n🚀 Express: 2–3 business days (US)\n🌍 International shipping available — rates calculated at checkout\n\nYou'll receive a tracking number via email once your order ships. Track your order anytime in your account dashboard.\n\nAll orders come with free returns and a 30-day satisfaction guarantee."
  },
  {
    id: "returns",
    triggers: ["return", "refund", "guarantee", "money back", "not satisfied", "30 day"],
    answer: "We stand fully behind CODE NECTAR with a 30-Day Money-Back Guarantee.\n\n✅ If you're not satisfied for any reason within 30 days, we'll refund you — no questions asked.\n✅ Free returns on all orders\n✅ Secure checkout on all transactions\n\nJust contact us at hello@codenutra.com with your order number and we'll take care of you immediately. 🍯"
  }
];
