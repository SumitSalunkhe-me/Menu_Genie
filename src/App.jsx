import React, { useState, useEffect, useRef, useCallback } from "react";

const T = {
  saffron: "#E8750A",
  saffronLight: "#FFF3E6",
  saffronDark: "#B85C00",
  burgundy: "#6B1A2A",
  burgundyD: "#4A0F1C",
  cream: "#FDFAF5",
  creamD: "#F5EAD8",
  charcoal: "#1C1410",
  warmGrey: "#7A6858",
  success: "#2D7A4F",
  danger: "#C0392B",
  white: "#FFFDF8",
};

const IMG = {
  paneerTikka: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80",
  manchurian: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
  butterChicken: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&q=80",
  dalMakhani: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&q=80",
  palakPaneer: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=500&q=80",
  naan: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&q=80",
  gulabJamun: "https://images.unsplash.com/photo-1666189043769-61ee0ad01d53?w=500&q=80",
  mangoLassi: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500&q=80",
  pavBhaji: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80",
  buddhaBowl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
  spiceGarden: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80",
  mumbaiFoods: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80",
  greenBowl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700&q=80",
  // New restaurant hero images
  tandoorTales: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=700&q=80",
  coastalCurry: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=700&q=80",
  streetBites: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&q=80",
  // New dish images
  seekhKebab: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80",
  mughlaiChicken: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80",
  biryani: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80",
  sheerKhorma: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80",
  paratha: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80",
  roohAfza: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80",
  dosaMasala: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80",
  chettinadChicken: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80",
  prawnsKoliwada: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&q=80",
  sambarRice: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=500&q=80",
  coconutChutney: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80",
  filterCoffee: "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=500&q=80",
  rassmalai: "https://images.unsplash.com/photo-1666189043769-61ee0ad01d53?w=500&q=80",
  vadaPav: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80",
  chole: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&q=80",
  paniPuri: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
  keemaPav: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80",
  jalebi: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80",
  masalaChai: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&q=80",
};

const GIF_FRAMES = [
  "linear-gradient(45deg,rgba(232,117,10,0.38) 0%,transparent 65%)",
  "linear-gradient(135deg,rgba(107,26,42,0.32) 0%,transparent 65%)",
  "linear-gradient(225deg,rgba(255,180,50,0.28) 0%,transparent 65%)",
  "linear-gradient(315deg,rgba(45,122,79,0.28) 0%,transparent 65%)",
];

function GifImage({ src, alt, style, gifMode }) {
  const [frame, setFrame] = useState(0);
  const [zoom, setZoom] = useState(1);
  const iv = useRef(null);
  useEffect(() => {
    if (gifMode) {
      iv.current = setInterval(() => {
        setFrame((f) => (f + 1) % GIF_FRAMES.length);
        setZoom((z) => (z === 1 ? 1.06 : 1));
      }, 380);
    } else {
      clearInterval(iv.current);
      setFrame(0);
      setZoom(1);
    }
    return () => clearInterval(iv.current);
  }, [gifMode]);

  return (
    <div style={{ ...style, position: "relative", overflow: "hidden" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: gifMode ? "transform 0.38s ease" : "transform 0.3s",
          transform: `scale(${zoom})`,
        }}
        onError={(e) => { e.target.style.opacity = 0; }}
      />
      {gifMode && (
        <>
          <div style={{ position: "absolute", inset: 0, background: GIF_FRAMES[frame], transition: "background 0.32s", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 7, left: 7, background: "rgba(0,0,0,0.72)", color: "#fff", fontSize: 9, fontWeight: 900, padding: "2px 6px", borderRadius: 4, letterSpacing: 1, fontFamily: "monospace" }}>GIF</div>
        </>
      )}
    </div>
  );
}

const RESTS = [
  { id: 1, name: "Spice Garden", cuisine: "Authentic Indian", city: "Pune", area: "FC Road", rating: 4.6, reviews: 842, fssai: "10020042012345", openTill: "11 PM", emoji: "🍛", popular: true, img: IMG.spiceGarden, phone: "+91 99999 11111", location: { lat: 18.5204, lng: 73.8567 } },
  { id: 2, name: "Mumbai Tadka", cuisine: "Street Food & Chaats", city: "Mumbai", area: "Bandra West", rating: 4.4, reviews: 534, fssai: "10020042067890", openTill: "10 PM", emoji: "🌮", popular: false, img: IMG.mumbaiFoods, phone: "+91 99999 22222", location: { lat: 19.0596, lng: 72.8295 } },
  { id: 3, name: "The Green Bowl", cuisine: "Healthy & Vegan", city: "Pune", area: "Koregaon Park", rating: 4.8, reviews: 317, fssai: "10020042099123", openTill: "9 PM", emoji: "🥗", popular: true, img: IMG.greenBowl, phone: "+91 99999 33333", location: { lat: 18.5362, lng: 73.8939 } },
  { id: 4, name: "Tandoor Tales", cuisine: "Mughlai & North Indian", city: "Delhi", area: "Connaught Place", rating: 4.7, reviews: 1124, fssai: "10020042031456", openTill: "11:30 PM", emoji: "🔥", popular: true, img: IMG.tandoorTales, phone: "+91 99999 44444", location: { lat: 28.6315, lng: 77.2167 } },
  { id: 5, name: "Coastal Curry House", cuisine: "South Indian & Seafood", city: "Chennai", area: "T. Nagar", rating: 4.5, reviews: 689, fssai: "10020042055789", openTill: "10:30 PM", emoji: "🦐", popular: false, img: IMG.coastalCurry, phone: "+91 99999 55555", location: { lat: 13.0418, lng: 80.2341 } },
  { id: 6, name: "Street Bites Co.", cuisine: "Pan-Indian Street Food", city: "Bangalore", area: "Indiranagar", rating: 4.3, reviews: 478, fssai: "10020042078901", openTill: "11 PM", emoji: "🍢", popular: true, img: IMG.streetBites, phone: "+91 99999 66666", location: { lat: 12.9784, lng: 77.6408 } },
];

const DISHES = [
  // ── Spice Garden (restId: 1) ──────────────────────────────────────────────
  { id: 1, restId: 1, cat: "starter", name: "Paneer Tikka", price: 220, popular: true, veg: true, spice: 2, desc: "Soft cottage cheese cubes marinated in spiced yogurt, chargrilled in a tandoor.", emoji: "🧀", calories: 310, health: "ok", prepTime: 15, allergens: ["dairy", "gluten"], ingredients: "Paneer, yogurt, ginger, garlic, cumin, kashmiri chilli, lemon juice, mustard oil, bell peppers.", rating: 4.8, reviews: 142, img: IMG.paneerTikka, nameHi: "पनीर टिक्का", nameMr: "पनीर टिक्का", descHi: "तंदूर में बनाया मसालेदार पनीर।", descMr: "तंदूरमध्ये पनीर." },
  { id: 2, restId: 1, cat: "starter", name: "Veg Manchurian", price: 180, popular: false, veg: true, spice: 3, desc: "Crispy vegetable dumplings tossed in a tangy Indo-Chinese sauce.", emoji: "🥬", calories: 280, health: "ok", prepTime: 12, allergens: ["gluten", "soy"], ingredients: "Mixed vegetables, cornflour, soy sauce, garlic, ginger, green chilli, spring onion.", rating: 4.3, reviews: 89, img: IMG.manchurian, nameHi: "वेज मंचूरियन", nameMr: "वेज मंचुरियन", descHi: "तीखी चटनी में कुरकुरे बॉल्स।", descMr: "तिखट चटणीत भाजी बॉल्स." },
  { id: 3, restId: 1, cat: "main", name: "Butter Chicken", price: 320, popular: true, veg: false, spice: 1, desc: "Tender chicken in a velvety tomato-cream sauce, slow-cooked with aromatic spices.", emoji: "🍗", calories: 480, health: "indulge", prepTime: 25, allergens: ["dairy", "nuts"], ingredients: "Chicken, tomatoes, cream, butter, cashews, onion, ginger, garlic, garam masala.", rating: 4.9, reviews: 318, img: IMG.butterChicken, nameHi: "बटर चिकन", nameMr: "बटर चिकन", descHi: "मलाईदार टमाटर सॉस में चिकन।", descMr: "मलईदार सॉसमध्ये चिकन." },
  { id: 4, restId: 1, cat: "main", name: "Dal Makhani", price: 240, popular: false, veg: true, spice: 1, desc: "Black lentils slow-cooked overnight with butter and cream. Rich, smoky, comforting.", emoji: "🫘", calories: 360, health: "ok", prepTime: 20, allergens: ["dairy"], ingredients: "Black urad dal, rajma, butter, cream, tomatoes, onion, cumin.", rating: 4.7, reviews: 204, img: IMG.dalMakhani, nameHi: "दाल मखनी", nameMr: "दाल मखनी", descHi: "रात भर पकाई गई दाल।", descMr: "रात्रभर शिजवलेली दाल." },
  { id: 5, restId: 1, cat: "main", name: "Palak Paneer", price: 260, popular: false, veg: true, spice: 1, desc: "Fresh cottage cheese in a silky spinach gravy, seasoned with garlic and mild spices.", emoji: "🥬", calories: 340, health: "great", prepTime: 18, allergens: ["dairy"], ingredients: "Spinach, paneer, onion, tomato, cream, garlic, ginger, cumin, coriander.", rating: 4.5, reviews: 167, img: IMG.palakPaneer, nameHi: "पालक पनीर", nameMr: "पालक पनीर", descHi: "पालक की मलाईदार पनीर।", descMr: "पालकाच्या ग्रेव्हीत पनीर." },
  { id: 6, restId: 1, cat: "bread", name: "Butter Naan", price: 50, popular: true, veg: true, spice: 0, desc: "Leavened flatbread baked in tandoor, brushed generously with butter.", emoji: "🫓", calories: 180, health: "ok", prepTime: 8, allergens: ["gluten", "dairy", "egg"], ingredients: "Refined flour, yeast, yogurt, egg, sugar, salt, butter.", rating: 4.6, reviews: 410, img: IMG.naan, nameHi: "बटर नान", nameMr: "बटर नान", descHi: "तंदूर में बना नान।", descMr: "बटर नान." },
  { id: 7, restId: 1, cat: "dessert", name: "Gulab Jamun", price: 90, popular: true, veg: true, spice: 0, desc: "Soft milk-solid dumplings soaked in rose-cardamom sugar syrup. Served warm.", emoji: "🍮", calories: 290, health: "indulge", prepTime: 5, allergens: ["dairy", "gluten"], ingredients: "Milk powder, khoya, flour, ghee, sugar, rose water, cardamom, saffron.", rating: 4.8, reviews: 256, img: IMG.gulabJamun, nameHi: "गुलाब जामुन", nameMr: "गुलाब जामून", descHi: "गुलाब चाशनी में मिठाई।", descMr: "गुलाब शर्बतात मिठाई." },
  { id: 8, restId: 1, cat: "drinks", name: "Mango Lassi", price: 110, popular: true, veg: true, spice: 0, desc: "Thick chilled yogurt blended with ripe Alphonso mangoes. Naturally sweetened.", emoji: "🥭", calories: 210, health: "great", prepTime: 5, allergens: ["dairy"], ingredients: "Yogurt, Alphonso mango pulp, sugar, cardamom, ice, saffron.", rating: 4.9, reviews: 189, img: IMG.mangoLassi, nameHi: "मैंगो लस्सी", nameMr: "मँगो लस्सी", descHi: "आम और दही की लस्सी।", descMr: "आंबा लस्सी." },

  // ── Mumbai Tadka (restId: 2) ───────────────────────────────────────────────
  { id: 9, restId: 2, cat: "starter", name: "Pav Bhaji", price: 120, popular: true, veg: true, spice: 2, desc: "Spiced mashed vegetables with buttered pav buns. Mumbai's iconic street dish.", emoji: "🫕", calories: 380, health: "ok", prepTime: 10, allergens: ["gluten", "dairy"], ingredients: "Mixed vegetables, butter, pav bhaji masala, onion, tomato, lemon, pav buns.", rating: 4.7, reviews: 289, img: IMG.pavBhaji, nameHi: "पाव भाजी", nameMr: "पाव भाजी", descHi: "मुंबई की पाव भाजी।", descMr: "मुंबईची पाव भाजी." },

  // ── The Green Bowl (restId: 3) ─────────────────────────────────────────────
  { id: 10, restId: 3, cat: "main", name: "Quinoa Buddha Bowl", price: 350, popular: true, veg: true, spice: 0, desc: "Wholesome quinoa with roasted veggies, hummus, avocado and tahini dressing.", emoji: "🥗", calories: 420, health: "great", prepTime: 15, allergens: ["nuts"], ingredients: "Quinoa, chickpeas, avocado, roasted bell peppers, hummus, tahini, lemon, olive oil.", rating: 4.9, reviews: 143, img: IMG.buddhaBowl, nameHi: "बुद्धा बाउल", nameMr: "बुद्धा बाउल", descHi: "स्वस्थ बुद्धा बाउल।", descMr: "पौष्टिक बाउल." },

  // ── Tandoor Tales (restId: 4) ─────────────────────────────────────────────
  { id: 11, restId: 4, cat: "starter", name: "Seekh Kebab", price: 280, popular: true, veg: false, spice: 2, desc: "Minced lamb and beef skewers seasoned with fresh herbs, grilled over live charcoal.", emoji: "🍢", calories: 340, health: "ok", prepTime: 18, allergens: ["gluten"], ingredients: "Minced lamb, onion, green chilli, coriander, ginger, garlic, garam masala, chaat masala.", rating: 4.8, reviews: 203, img: IMG.seekhKebab, nameHi: "सीख कबाब", nameMr: "सीख कबाब", descHi: "चारकोल पर ग्रिल्ड सीख कबाब।", descMr: "कोळशावर ग्रील्ड सीख कबाब." },
  { id: 12, restId: 4, cat: "starter", name: "Paneer Malai Tikka", price: 260, popular: false, veg: true, spice: 1, desc: "Cottage cheese marinated in cream and mild spices, gently cooked in a clay oven.", emoji: "🧀", calories: 330, health: "ok", prepTime: 16, allergens: ["dairy", "gluten"], ingredients: "Paneer, malai, cardamom, white pepper, kasuri methi, ginger, garlic, lemon.", rating: 4.6, reviews: 117, img: IMG.paneerTikka, nameHi: "पनीर मलाई टिक्का", nameMr: "पनीर मलाई टिक्का", descHi: "मलाई में पनीर टिक्का।", descMr: "मलईत पनीर टिक्का." },
  { id: 13, restId: 4, cat: "main", name: "Mughlai Chicken Korma", price: 380, popular: true, veg: false, spice: 1, desc: "Slow-braised chicken in a rich almond-saffron gravy, perfumed with rose water.", emoji: "🍗", calories: 520, health: "indulge", prepTime: 30, allergens: ["dairy", "nuts"], ingredients: "Chicken, almond paste, saffron, cream, onion, cardamom, rose water, cashews, ghee.", rating: 4.9, reviews: 334, img: IMG.mughlaiChicken, nameHi: "मुगलई चिकन कोरमा", nameMr: "मुगलई चिकन कोरमा", descHi: "शाही बादाम-केसर ग्रेवी में चिकन।", descMr: "बदाम-केशर ग्रेव्हीत चिकन." },
  { id: 14, restId: 4, cat: "main", name: "Dum Biryani", price: 420, popular: true, veg: false, spice: 2, desc: "Fragrant basmati layered with slow-cooked mutton, sealed and steamed in the dum style.", emoji: "🍚", calories: 610, health: "indulge", prepTime: 35, allergens: ["dairy", "gluten"], ingredients: "Basmati rice, mutton, caramelised onions, saffron milk, ghee, whole spices, mint.", rating: 4.9, reviews: 412, img: IMG.biryani, nameHi: "दम बिरयानी", nameMr: "दम बिर्याणी", descHi: "दम स्टाइल मटन बिरयानी।", descMr: "दम स्टाईल मटण बिर्याणी." },
  { id: 15, restId: 4, cat: "bread", name: "Roomali Roti", price: 40, popular: false, veg: true, spice: 0, desc: "Wafer-thin handkerchief bread folded and served warm, perfect for scooping rich gravies.", emoji: "🫓", calories: 120, health: "ok", prepTime: 7, allergens: ["gluten"], ingredients: "Whole wheat flour, refined flour, salt, water, oil.", rating: 4.4, reviews: 198, img: IMG.naan, nameHi: "रूमाली रोटी", nameMr: "रूमाली रोटी", descHi: "पतली रूमाली रोटी।", descMr: "पातळ रूमाली रोटी." },
  { id: 16, restId: 4, cat: "dessert", name: "Sheer Khurma", price: 130, popular: false, veg: true, spice: 0, desc: "Silky vermicelli pudding cooked in whole milk with dates, nuts and saffron strands.", emoji: "🍮", calories: 380, health: "indulge", prepTime: 12, allergens: ["dairy", "nuts", "gluten"], ingredients: "Vermicelli, full-fat milk, dates, almonds, pistachios, saffron, cardamom, ghee, sugar.", rating: 4.7, reviews: 145, img: IMG.sheerKhorma, nameHi: "शीर खुरमा", nameMr: "शीर खुरमा", descHi: "सेवई का हलवा।", descMr: "सेवईची खीर." },
  { id: 17, restId: 4, cat: "drinks", name: "Rose Sharbat", price: 80, popular: true, veg: true, spice: 0, desc: "Chilled rose-flavoured drink with basil seeds, a cooling Mughal court favourite.", emoji: "🌹", calories: 140, health: "ok", prepTime: 3, allergens: [], ingredients: "Rose syrup, sabja seeds, chilled water, lemon, ice, sugar.", rating: 4.5, reviews: 92, img: IMG.roohAfza, nameHi: "गुलाब शरबत", nameMr: "गुलाब शर्बत", descHi: "गुलाब का ठंडा शरबत।", descMr: "थंड गुलाब शर्बत." },

  // ── Coastal Curry House (restId: 5) ───────────────────────────────────────
  { id: 18, restId: 5, cat: "starter", name: "Masala Dosa", price: 140, popular: true, veg: true, spice: 2, desc: "Crispy golden crepe made from fermented rice-lentil batter, filled with spiced potato.", emoji: "🥞", calories: 290, health: "ok", prepTime: 14, allergens: ["gluten"], ingredients: "Rice, urad dal, potato masala, mustard seeds, curry leaves, onion, turmeric, oil.", rating: 4.8, reviews: 267, img: IMG.dosaMasala, nameHi: "मसाला डोसा", nameMr: "मसाला डोसा", descHi: "कुरकुरा मसाला डोसा।", descMr: "कुरकुरीत मसाला डोसा." },
  { id: 19, restId: 5, cat: "starter", name: "Prawns Koliwada", price: 310, popular: true, veg: false, spice: 3, desc: "Tiger prawns coated in spiced chickpea batter and deep-fried until crispy and golden.", emoji: "🦐", calories: 370, health: "ok", prepTime: 16, allergens: ["gluten"], ingredients: "Tiger prawns, chickpea flour, red chilli, turmeric, ajwain, ginger-garlic paste, lemon.", rating: 4.7, reviews: 189, img: IMG.prawnsKoliwada, nameHi: "झींगे कोलीवाडा", nameMr: "कोळंबी कोलीवाडा", descHi: "मसालेदार झींगे।", descMr: "मसालेदार कोळंबी." },
  { id: 20, restId: 5, cat: "main", name: "Chettinad Chicken", price: 340, popular: false, veg: false, spice: 3, desc: "Fiery South Indian curry with whole spices, kalpasi and star anise — bold and aromatic.", emoji: "🍗", calories: 460, health: "ok", prepTime: 28, allergens: [], ingredients: "Chicken, kalpasi, star anise, marathi mokku, coconut paste, curry leaves, black pepper.", rating: 4.6, reviews: 153, img: IMG.chettinadChicken, nameHi: "चेट्टीनाड चिकन", nameMr: "चेट्टीनाड चिकन", descHi: "दक्षिण भारतीय चेट्टीनाड चिकन।", descMr: "दक्षिण भारतीय चेट्टीनाड चिकन." },
  { id: 21, restId: 5, cat: "main", name: "Sambar Rice", price: 160, popular: false, veg: true, spice: 1, desc: "Comforting steamed rice served with piping hot lentil-vegetable sambar and ghee.", emoji: "🍚", calories: 340, health: "great", prepTime: 15, allergens: [], ingredients: "Parboiled rice, toor dal, tamarind, tomato, onion, drumstick, sambar powder, ghee.", rating: 4.5, reviews: 198, img: IMG.sambarRice, nameHi: "सांभर राइस", nameMr: "सांभर राइस", descHi: "सांभर के साथ चावल।", descMr: "सांभर राइस." },
  { id: 22, restId: 5, cat: "bread", name: "Appam with Coconut Milk", price: 90, popular: false, veg: true, spice: 0, desc: "Lacy fermented rice hoppers served with sweetened coconut milk — a Kerala breakfast staple.", emoji: "🥛", calories: 210, health: "ok", prepTime: 10, allergens: [], ingredients: "Raw rice, coconut milk, yeast, sugar, salt, coconut cream.", rating: 4.4, reviews: 102, img: IMG.coconutChutney, nameHi: "अप्पम", nameMr: "अप्पम", descHi: "नारियल दूध के साथ अप्पम।", descMr: "नारळाच्या दुधासह अप्पम." },
  { id: 23, restId: 5, cat: "dessert", name: "Rassmalai", price: 110, popular: true, veg: true, spice: 0, desc: "Soft chenna patties soaked in chilled saffron-cardamom milk, garnished with pistachios.", emoji: "🍮", calories: 260, health: "indulge", prepTime: 5, allergens: ["dairy"], ingredients: "Chenna, full-fat milk, sugar, saffron, cardamom, pistachios, rose water.", rating: 4.8, reviews: 176, img: IMG.rassmalai, nameHi: "रसमलाई", nameMr: "रसमलाई", descHi: "केसर दूध में रसमलाई।", descMr: "केशर दुधात रसमलाई." },
  { id: 24, restId: 5, cat: "drinks", name: "Filter Coffee", price: 70, popular: true, veg: true, spice: 0, desc: "Strong South Indian decoction mixed with hot frothed milk, served in a traditional davara.", emoji: "☕", calories: 90, health: "ok", prepTime: 5, allergens: ["dairy"], ingredients: "Chicory coffee blend, hot milk, sugar.", rating: 4.9, reviews: 312, img: IMG.filterCoffee, nameHi: "फिल्टर कॉफी", nameMr: "फिल्टर कॉफी", descHi: "दक्षिण भारतीय फिल्टर कॉफी।", descMr: "साउथ इंडियन फिल्टर कॉफी." },

  // ── Street Bites Co. (restId: 6) ─────────────────────────────────────────
  { id: 25, restId: 6, cat: "starter", name: "Vada Pav", price: 60, popular: true, veg: true, spice: 2, desc: "Crispy spiced potato fritter sandwiched in a soft pav with green and tamarind chutneys.", emoji: "🍔", calories: 290, health: "ok", prepTime: 8, allergens: ["gluten", "dairy"], ingredients: "Potato, besan, mustard seeds, green chilli, garlic, pav buns, coriander chutney, tamarind.", rating: 4.6, reviews: 221, img: IMG.vadaPav, nameHi: "वड़ा पाव", nameMr: "वडा पाव", descHi: "मुंबई का वड़ा पाव।", descMr: "मुंबईचा वडा पाव." },
  { id: 26, restId: 6, cat: "starter", name: "Pani Puri", price: 70, popular: true, veg: true, spice: 3, desc: "Hollow crispy puris filled with tangy mint water, mashed potato and sprouted moong.", emoji: "🫧", calories: 190, health: "ok", prepTime: 5, allergens: ["gluten"], ingredients: "Semolina puris, mint water, tamarind water, potato, chickpeas, sprouted moong, chaat masala.", rating: 4.8, reviews: 309, img: IMG.paniPuri, nameHi: "पानी पूरी", nameMr: "पाणी पुरी", descHi: "तीखी पानी पूरी।", descMr: "झणझणीत पाणी पुरी." },
  { id: 27, restId: 6, cat: "main", name: "Chole Bhature", price: 150, popular: false, veg: true, spice: 2, desc: "Puffed deep-fried bread paired with spicy chickpea masala. A Punjabi street-food legend.", emoji: "🫘", calories: 520, health: "indulge", prepTime: 18, allergens: ["gluten", "dairy"], ingredients: "Chickpeas, bhature dough, onion, tomato, dried mango powder, black cardamom, ginger.", rating: 4.5, reviews: 142, img: IMG.chole, nameHi: "छोले भटूरे", nameMr: "छोले भटुरे", descHi: "पंजाबी छोले भटूरे।", descMr: "पंजाबी छोले भटुरे." },
  { id: 28, restId: 6, cat: "main", name: "Keema Pav", price: 170, popular: true, veg: false, spice: 2, desc: "Spiced minced mutton cooked with peas and tomatoes, served with buttered pav.", emoji: "🍞", calories: 430, health: "ok", prepTime: 20, allergens: ["gluten", "dairy"], ingredients: "Minced mutton, peas, tomato, onion, green chilli, garam masala, butter, pav.", rating: 4.7, reviews: 188, img: IMG.keemaPav, nameHi: "कीमा पाव", nameMr: "कीमा पाव", descHi: "मटन कीमा पाव।", descMr: "मटण कीमा पाव." },
  { id: 29, restId: 6, cat: "dessert", name: "Jalebi", price: 80, popular: false, veg: true, spice: 0, desc: "Crispy fermented batter spirals soaked in warm saffron sugar syrup. Best eaten hot.", emoji: "🍩", calories: 310, health: "indulge", prepTime: 6, allergens: ["gluten", "dairy"], ingredients: "Refined flour, curd, baking powder, saffron, sugar, ghee, cardamom, rose water.", rating: 4.5, reviews: 134, img: IMG.jalebi, nameHi: "जलेबी", nameMr: "जलेबी", descHi: "गरम जलेबी।", descMr: "गरम जिलेबी." },
  { id: 30, restId: 6, cat: "drinks", name: "Masala Chai", price: 50, popular: true, veg: true, spice: 1, desc: "Strong CTC tea brewed with ginger, cardamom and milk — the ultimate Indian comfort drink.", emoji: "🍵", calories: 80, health: "ok", prepTime: 5, allergens: ["dairy"], ingredients: "CTC tea, milk, ginger, cardamom, black pepper, cloves, sugar.", rating: 4.8, reviews: 287, img: IMG.masalaChai, nameHi: "मसाला चाय", nameMr: "मसाला चहा", descHi: "अदरक मसाला चाय।", descMr: "आलं मसाला चहा." },
];

const LABELS = {
  en: { all: "All", starter: "Starters", main: "Mains", bread: "Breads", dessert: "Desserts", drinks: "Drinks", search: "Search dishes...", veg: "🌿 Veg", nonveg: "🍗 Non-Veg", all2: "All", bestsellers: "Bestsellers", add: "Add", cart: "Cart", orderWA: "Order on WhatsApp", prep: "Prep", cal: "cal", ingredients: "Ingredients", persons: "Persons", login: "Login", logout: "Logout", admin: "Admin", home: "Home", feedback: "Feedback", noItems: "No dishes found.", fssai: "FSSAI Certified", openTill: "Open till", map: "Map", maxPrice: "Max Price", maxTime: "Max Prep Time", gifOn: "✦ GIF ON", gifOff: "✦ GIF", back: "← Back", history: "History", quickNav: "Quick Nav", noHistory: "No history yet", sort: "Sort", sortDef: "Default", sortFast: "⚡ Fastest", sortPrice: "💰 Price", sortRating: "⭐ Rating", diet: "Diet", filters: "Filters", lastVisit: "Last visited", speak: "Listening… say what you want", submit: "Submit", cancel: "Cancel", thankyou: "Thanks for your feedback 🙏" },
  hi: { all: "सभी", starter: "स्टार्टर", main: "मुख्य", bread: "रोटी", dessert: "मिठाई", drinks: "पेय", search: "व्यंजन खोजें...", veg: "🌿 शाकाहारी", nonveg: "🍗 मांसाहारी", all2: "सभी", bestsellers: "केवल बेस्टसेलर", add: "जोड़ें", cart: "कार्ट", orderWA: "WhatsApp ऑर्डर", prep: "समय", cal: "कैलोरी", ingredients: "सामग्री", persons: "व्यक्ति", login: "लॉगिन", logout: "लॉगआउट", admin: "एडमिन", home: "होम", feedback: "प्रतिक्रिया", noItems: "कोई व्यंजन नहीं।", fssai: "FSSAI प्रमाणित", openTill: "खुला", map: "नक्शा", maxPrice: "अधिकतम मूल्य", maxTime: "समय सीमा", gifOn: "✦ GIF चालू", gifOff: "✦ GIF", back: "← वापस", history: "इतिहास", quickNav: "शीघ्र नेव", noHistory: "कोई इतिहास नहीं", sort: "क्रम", sortDef: "डिफ़ॉल्ट", sortFast: "⚡ जल्दी", sortPrice: "💰 मूल्य", sortRating: "⭐ रेटिंग", diet: "आहार", filters: "फिल्टर", lastVisit: "अंतिम विज़िट", speak: "सुन रहा है...", submit: "जमा करें", cancel: "रद्द करें", thankyou: "प्रतिक्रिया के लिए धन्यवाद 🙏" },
  mr: { all: "सर्व", starter: "स्टार्टर", main: "मुख्य", bread: "भाकरी", dessert: "मिठाई", drinks: "पेय", search: "पदार्थ शोधा...", veg: "🌿 शाकाहारी", nonveg: "🍗 मांसाहारी", all2: "सर्व", bestsellers: "फक्त बेस्टसेलर", add: "जोडा", cart: "कार्ट", orderWA: "WhatsApp ऑर्डर", prep: "वेळ", cal: "कॅलरी", ingredients: "साहित्य", persons: "व्यक्ती", login: "लॉगिन", logout: "लॉगआउट", admin: "अॅडमिन", home: "होम", feedback: "अभिप्राय", noItems: "पदार्थ नाही.", fssai: "FSSAI प्रमाणित", openTill: "उघडे", map: "नकाशा", maxPrice: "कमाल किंमत", maxTime: "कमाल वेळ", gifOn: "✦ GIF चालू", gifOff: "✦ GIF", back: "← परत", history: "इतिहास", quickNav: "जलद नेव", noHistory: "इतिहास नाही", sort: "क्रम", sortDef: "डिफॉल्ट", sortFast: "⚡ जलद", sortPrice: "💰 किंमत", sortRating: "⭐ रेटिंग", diet: "आहार", filters: "फिल्टर", lastVisit: "अखेरची भेट", speak: "ऐकत आहे...", submit: "सबमिट", cancel: "रद्द", thankyou: "अभिप्रायाबद्दल धन्यवाद 🙏" },
};

const allergenColor = { dairy: "#EBF5FB:#1A6B9A", nuts: "#FEF9E7:#9A7D0A", gluten: "#FDF2F8:#9B59B6", egg: "#FEF5E7:#CA6F1E", soy: "#F0F3FF:#2E4BA0" };
const healthStyle = { great: ["#EAFAF1", "#1E8449", "✓ Healthy"], ok: ["#FEF9E7", "#9A7D0A", "◎ Moderate"], indulge: ["#FDEDEC", "#C0392B", "✦ Indulgent"] };
const nm = (d, l) => l === "hi" ? d.nameHi : l === "mr" ? d.nameMr : d.name;
const dc = (d, l) => l === "hi" ? d.descHi : l === "mr" ? d.descMr : d.desc;

function useToast() {
  const [toasts, setToasts] = useState([]);
  const show = useCallback((msg, type = "success") => {
    const id = Date.now();
    setToasts((t) => [...t, { id, msg, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2500);
  }, []);
  return { toasts, show };
}

function Toasts({ toasts }) {
  return (
    <div style={{ position: "fixed", bottom: 92, left: "50%", transform: "translateX(-50%)", zIndex: 999, display: "flex", flexDirection: "column", gap: 7, alignItems: "center", pointerEvents: "none" }}>
      {toasts.map((t) => (
        <div key={t.id} style={{ background: t.type === "error" ? T.danger : T.charcoal, color: "#fff", padding: "9px 20px", borderRadius: 10, fontSize: 13, fontWeight: 500, boxShadow: "0 4px 20px rgba(0,0,0,0.2)", whiteSpace: "nowrap" }}>
          {t.type === "success" ? "✓ " : "✕ "}
          {t.msg}
        </div>
      ))}
    </div>
  );
}

// ─── HISTORY DROPDOWN ─────────────────────────────────────────────────────────
function HistoryPanel({ hist, restaurants, setRestId, setPage, onClose, L }) {
  return (
    <div style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, background: "#fff", borderRadius: 16, boxShadow: "0 10px 40px rgba(0,0,0,0.2)", border: `1px solid ${T.saffron}33`, zIndex: 400, minWidth: 240, overflow: "hidden" }}>
      <div style={{ padding: "10px 14px 6px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: T.warmGrey, borderBottom: `1px solid ${T.saffron}22` }}>{L.history}</div>
      {hist.length === 0 ? (
        <div style={{ padding: "14px", fontSize: 13, color: "#bbb" }}>{L.noHistory}</div>
      ) : (
        hist.slice().reverse().slice(0, 5).map((h, i) => {
          const r = restaurants.find((x) => x.id === h.restId);
          return (
            <button key={i} onClick={() => { setRestId(h.restId); setPage("menu"); onClose(); }}
              style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "9px 14px", background: "none", border: "none", cursor: "pointer", textAlign: "left", borderBottom: `1px solid ${T.saffron}11` }}
              onMouseEnter={(e) => e.currentTarget.style.background = T.saffronLight}
              onMouseLeave={(e) => e.currentTarget.style.background = "none"}
            >
              <div style={{ width: 34, height: 34, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
                <img src={r?.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => e.target.style.display = "none"} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: T.charcoal }}>{r?.emoji} {r?.name}</div>
                <div style={{ fontSize: 10, color: T.warmGrey }}>{h.time}</div>
              </div>
            </button>
          );
        })
      )}
      <div style={{ padding: "8px 14px 5px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: T.warmGrey, borderTop: `1px solid ${T.saffron}22` }}>{L.quickNav}</div>
      {restaurants.map((r) => (
        <button key={r.id} onClick={() => { setRestId(r.id); setPage("menu"); onClose(); }}
          style={{ width: "100%", display: "flex", alignItems: "center", gap: 9, padding: "8px 14px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
          onMouseEnter={(e) => e.currentTarget.style.background = T.saffronLight}
          onMouseLeave={(e) => e.currentTarget.style.background = "none"}
        >
          <GifImage src={r.img} alt={r.name} style={{ width: 32, height: 32, borderRadius: 7 }} gifMode={false} />
          <div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>{r.emoji} {r.name}</div>
            <div style={{ fontSize: 10, color: T.warmGrey }}>{r.cuisine} · ⭐{r.rating}</div>
          </div>
        </button>
      ))}
    </div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav({ page, setPage, user, setUser, cart, lang, setLang, L, hist, restaurants, setRestId, gifMode, setGifMode }) {
  const [histOpen, setHistOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [form, setForm] = useState({ email: "", pass: "", name: "" });
  const panelRef = useRef(null);
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  useEffect(() => {
    const fn = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setHistOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const btn = (label, onClick, active, color = T.saffron) => (
    <button onClick={onClick} style={{ background: active ? color : "#fff", color: active ? "#fff" : color, border: `1px solid ${color}55`, borderRadius: 9, padding: "5px 11px", fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all 0.18s", whiteSpace: "nowrap" }}>
      {label}
    </button>
  );

  return (
    <>
      <nav style={{ position: "sticky", top: 0, zIndex: 200, background: "rgba(253,250,245,0.97)", backdropFilter: "blur(14px)", borderBottom: `1px solid ${T.saffron}22`, padding: "10px 14px", minHeight: 56, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
        {page !== "home" && (
          <button onClick={() => setPage("home")} style={{ background: "none", border: `1px solid ${T.saffron}55`, borderRadius: 9, padding: "5px 10px", fontSize: 12, fontWeight: 700, color: T.saffronDark, cursor: "pointer", flexShrink: 0 }}>
            {L.back}
          </button>
        )}
        <button onClick={() => setPage("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }}>
          <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 19, color: T.burgundy }}>Menu</span>
          <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 19, color: T.saffron }}>Genie</span>
          <span style={{ fontSize: 15 }}>🧞</span>
        </button>

        <div style={{ flex: 1, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6, justifyContent: "flex-end" }}>
          <button onClick={() => setGifMode((g) => !g)} style={{ background: gifMode ? "linear-gradient(135deg,#FF6B35,#F4A261)" : "#fff", color: gifMode ? "#fff" : T.saffron, border: `1px solid ${gifMode ? "#FF6B35" : T.saffron + "44"}`, borderRadius: 9, padding: "5px 10px", fontSize: 11, fontWeight: 800, cursor: "pointer", letterSpacing: 0.5 }}>
            {gifMode ? L.gifOn : L.gifOff}
          </button>
          <select value={lang} onChange={(e) => setLang(e.target.value)} style={{ border: `1px solid ${T.saffron}44`, borderRadius: 8, padding: "4px 7px", fontSize: 12, background: "#fff", cursor: "pointer" }}>
            <option value="en">EN</option>
            <option value="hi">हि</option>
            <option value="mr">म</option>
          </select>
          <div style={{ position: "relative" }} ref={panelRef}>
            {btn(`🕐 ${L.history}${hist.length ? ` (${hist.length})` : ""}`, () => setHistOpen((o) => !o), histOpen, T.burgundy)}
            {histOpen && <HistoryPanel hist={hist} restaurants={restaurants} setRestId={setRestId} setPage={setPage} onClose={() => setHistOpen(false)} L={L} />}
          </div>
          {page !== "home" && (
            <button onClick={() => setPage("cart")} style={{ background: cartCount > 0 ? T.saffron : "#fff", color: cartCount > 0 ? "#fff" : T.saffron, border: `1px solid ${T.saffron}55`, borderRadius: 9, padding: "5px 11px", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
              🛒 {L.cart} {cartCount > 0 && <span style={{ background: "rgba(255,255,255,0.3)", borderRadius: 6, padding: "0 5px", fontSize: 10, fontWeight: 700 }}>{cartCount}</span>}
            </button>
          )}
          {user?.isAdmin && btn("⚙ Admin", () => setPage("admin"), page === "admin", T.burgundy)}
          {!user ? (
            <button onClick={() => setLoginOpen(true)} style={{ background: T.burgundy, color: "#fff", border: "none", borderRadius: 9, padding: "6px 13px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>{L.login}</button>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: T.saffron, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 12 }}>{user.name[0].toUpperCase()}</div>
              <button onClick={() => setUser(null)} style={{ background: "none", border: "none", fontSize: 11, color: T.warmGrey, cursor: "pointer" }}>{L.logout}</button>
            </div>
          )}
        </div>
      </nav>

      {loginOpen && (
        <div onClick={(e) => e.target === e.currentTarget && setLoginOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.52)", backdropFilter: "blur(5px)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div style={{ background: "#fff", borderRadius: 22, padding: 30, width: "100%", maxWidth: 360 }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 21, color: T.burgundy, marginBottom: 4 }}>Welcome 👋</h3>
            <p style={{ fontSize: 12, color: T.warmGrey, marginBottom: 18 }}>Use <em>admin@</em> email to get admin access.</p>
            {[["Name (optional)", "name", "text"], ["Email", "email", "email"], ["Password", "pass", "password"]].map(([label, key, type]) => (
              <div key={key} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: T.warmGrey, marginBottom: 3 }}>{label}</div>
                <input type={type} value={form[key]} onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))} style={{ width: "100%", border: `1px solid ${T.saffron}44`, borderRadius: 9, padding: "9px 12px", fontSize: 13, outline: "none" }} />
              </div>
            ))}
            <button onClick={() => { if (!form.email || !form.pass) return; setUser({ name: form.name || form.email.split("@")[0], email: form.email, isAdmin: form.email.startsWith("admin") }); setLoginOpen(false); }} style={{ width: "100%", background: T.saffron, color: "#fff", border: "none", borderRadius: 11, padding: "12px", fontSize: 14, fontWeight: 700, cursor: "pointer", marginTop: 4 }}>
              Login / Sign Up
            </button>
            <button onClick={() => setLoginOpen(false)} style={{ width: "100%", background: "none", border: "none", fontSize: 12, color: T.warmGrey, cursor: "pointer", marginTop: 10 }}>Continue as Guest →</button>
          </div>
        </div>
      )}
    </>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function Home({ restaurants, setPage, setRestId, L, gifMode, hist }) {
  const [search, setSearch] = useState("");
  const filtered = restaurants.filter((r) => r.name.toLowerCase().includes(search.toLowerCase()) || r.cuisine.toLowerCase().includes(search.toLowerCase()) || r.city.toLowerCase().includes(search.toLowerCase()));
  const lastRest = hist.length ? restaurants.find((r) => r.id === hist[hist.length - 1]?.restId) : null;

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 14px" }}>
      <div style={{ background: `linear-gradient(135deg,${T.burgundyD},${T.burgundy} 55%,#8B2438)`, borderRadius: 22, padding: "36px 28px", marginBottom: 26, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: "rgba(232,117,10,0.14)" }} />
        <div style={{ position: "absolute", bottom: -30, left: 120, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ color: T.saffron, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontFamily: "monospace", marginBottom: 8 }}>MenuGenie Platform 🧞</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,5vw,46px)", color: "#fff", fontWeight: 900, lineHeight: 1.1, marginBottom: 10 }}>Scan. See. <em style={{ color: T.saffron }}>Order.</em></h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.65, maxWidth: 400 }}>Digital menus with real photos, allergens, calories & WhatsApp ordering — no app needed.</p>
          {lastRest && (
            <div style={{ marginTop: 14, display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", borderRadius: 10, padding: "7px 14px", cursor: "pointer" }} onClick={() => { setRestId(lastRest.id); setPage("menu"); }}>
              <div style={{ width: 28, height: 28, borderRadius: 7, overflow: "hidden" }}>
                <img src={lastRest.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{L.lastVisit}: <strong style={{ color: "#fff" }}>{lastRest.name}</strong> →</span>
            </div>
          )}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", border: `1.5px solid ${T.saffron}44`, borderRadius: 13, padding: "12px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", marginBottom: 22 }}>
        <span style={{ color: "#B0B0B0" }}>🔍</span>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search restaurants, cuisines, cities..." style={{ border: "none", outline: "none", flex: 1, fontSize: 14, background: "transparent" }} />
      </div>

      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, color: T.charcoal, marginBottom: 14 }}>{filtered.length} Restaurant{filtered.length !== 1 ? "s" : ""}</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: 18 }}>
        {filtered.map((r) => (
          <div key={r.id} onClick={() => { setRestId(r.id); setPage("menu"); }} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: `1px solid rgba(0,0,0,0.07)`, boxShadow: "0 2px 14px rgba(0,0,0,0.06)", cursor: "pointer", transition: "transform 0.2s,box-shadow 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(0,0,0,0.12)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 14px rgba(0,0,0,0.06)"; }}>
            <div style={{ height: 175, position: "relative" }}>
              <GifImage src={r.img} alt={r.name} style={{ width: "100%", height: "100%" }} gifMode={gifMode} />
              {r.popular && <div style={{ position: "absolute", top: 10, right: 10, background: T.saffron, color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 9 }}>⭐ Popular</div>}
              {hist.some((h) => h.restId === r.id) && <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(0,0,0,0.65)", color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 7, letterSpacing: 0.5 }}>🕐 Visited</div>}
            </div>
            <div style={{ padding: "14px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 5 }}>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, color: T.charcoal }}>{r.name}</h3>
                  <p style={{ fontSize: 12, color: T.warmGrey, marginTop: 2 }}>{r.cuisine}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: T.saffron }}>⭐ {r.rating}</div>
                  <div style={{ fontSize: 10, color: T.warmGrey }}>{r.reviews} reviews</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, fontSize: 11, color: T.warmGrey, marginBottom: 9 }}>
                <span>📍 {r.area}, {r.city}</span>
                <span>🕐 Till {r.openTill}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: T.success, fontWeight: 600, background: "#EAFAF1", borderRadius: 7, padding: "3px 9px", width: "fit-content" }}>✓ {L.fssai}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MENU PAGE ─────────────────────────────────────────────────────────────────
function Menu({ rest, dishes, cart, setCart, user, lang, L, toast, gifMode, setPage }) {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("all");
  const [diet, setDiet] = useState("all");
  const [bestsOnly, setBestsOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [maxTime, setMaxTime] = useState(60);
  const [sort, setSort] = useState("default");
  const [persons, setPersons] = useState(1);
  const [expanded, setExpanded] = useState({});
  const [listening, setListening] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [fb, setFb] = useState({ text: "", rating: 5, photo: null });

  const restDishes = dishes.filter((d) => d.restId === rest.id);
  const cats = ["all", ...new Set(restDishes.map((d) => d.cat))];

  const startVoice = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { toast.show("Voice not supported", "error"); return; }
    const r = new SR(); r.lang = lang === "hi" ? "hi-IN" : lang === "mr" ? "mr-IN" : "en-IN";
    r.onstart = () => setListening(true);
    r.onresult = (e) => { setSearch(e.results[0][0].transcript); setListening(false); };
    r.onerror = () => setListening(false); r.onend = () => setListening(false);
    r.start();
  };

  const filtered = restDishes.filter((d) => {
    if (cat !== "all" && d.cat !== cat) return false;
    if (diet === "veg" && !d.veg) return false;
    if (diet === "nonveg" && d.veg) return false;
    if (bestsOnly && !d.popular) return false;
    if (d.price > maxPrice) return false;
    if (d.prepTime > maxTime) return false;
    if (search) { const q = search.toLowerCase(); if (!d.name.toLowerCase().includes(q) && !d.desc.toLowerCase().includes(q) && !d.ingredients.toLowerCase().includes(q)) return false; }
    return true;
  }).sort((a, b) => (sort === "fastest" ? a.prepTime - b.prepTime : sort === "price" ? a.price - b.price : sort === "rating" ? b.rating - a.rating : 0));

  const add = (id) => { setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 })); toast.show(`${nm(restDishes.find((x) => x.id === id), lang)} added!`); };
  const rem = (id) => setCart((c) => { const n = { ...c }; if (n[id] > 1) n[id]--; else delete n[id]; return n; });
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((s, [id, q]) => { const d = dishes.find((x) => x.id == id); return s + (d ? d.price * q : 0); }, 0);

  const catLabel = { all: L.all, starter: L.starter, main: L.main, bread: L.bread, dessert: L.dessert, drinks: L.drinks };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <div style={{ position: "relative", background: T.charcoal }}>
        <div style={{ height: 140, overflow: "hidden", position: "relative" }}>
          <GifImage src={rest.img} alt={rest.name} style={{ width: "100%", height: "100%" }} gifMode={gifMode} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 25%,rgba(28,20,16,0.88))" }} />
        </div>
        <div style={{ padding: "12px 16px 16px", background: `linear-gradient(${T.charcoal},#2D1A00)` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 21, color: "#fff", fontWeight: 700 }}>{rest.emoji} {rest.name}</h2>
              <p style={{ fontSize: 11, color: T.saffron, letterSpacing: 1, marginTop: 2 }}>{rest.cuisine} · {rest.area}, {rest.city}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 6, fontSize: 10, color: T.success, fontWeight: 600, background: "rgba(45,122,79,0.2)", borderRadius: 7, padding: "2px 9px", width: "fit-content" }}>✓ {L.fssai}: {rest.fssai}</div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: T.saffron }}>⭐ {rest.rating}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>{rest.reviews} reviews</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", fontSize: 11, color: "rgba(255,255,255,0.55)" }}>
            <span>🕐 {L.openTill} {rest.openTill}</span>
            <span>📞 {rest.phone}</span>
            <a href={`https://maps.google.com?q=$${rest.location.lat},${rest.location.lng}`} target="_blank" rel="noreferrer" style={{ color: T.saffron, textDecoration: "none" }}>🗺 {L.map} →</a>
          </div>
        </div>
      </div>

      <div style={{ padding: "10px 14px 0", background: "#fff", borderBottom: `1px solid ${T.saffron}22`, position: "sticky", top: 56, zIndex: 100 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 9 }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 7, background: T.cream, border: `1.5px solid ${listening ? T.saffron : T.saffron + "44"}`, borderRadius: 11, padding: "8px 13px", minWidth: "200px" }}>
            <span style={{ color: "#bbb" }}>🔍</span>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={L.search} style={{ border: "none", outline: "none", flex: 1, fontSize: 13, background: "transparent" }} />
            <button onClick={startVoice} style={{ background: listening ? T.saffron : "transparent", border: `1px solid ${T.saffron}55`, borderRadius: 7, padding: "2px 7px", cursor: "pointer", fontSize: 14 }}>{listening ? "🔴" : "🎤"}</button>
          </div>
          <button onClick={() => setShowFilters((f) => !f)} style={{ background: showFilters ? T.burgundy : "#fff", color: showFilters ? "#fff" : T.burgundy, border: `1px solid ${T.burgundy}44`, borderRadius: 11, padding: "8px 13px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>⚙ {L.filters}</button>
        </div>

        {listening && <p style={{ fontSize: 11, color: T.saffron, textAlign: "center", marginBottom: 6 }}>🎤 {L.speak}</p>}

        {showFilters && (
          <div style={{ background: T.creamD, borderRadius: 13, padding: 14, marginBottom: 9, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(145px,1fr))", gap: 12 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.warmGrey, marginBottom: 5, textTransform: "uppercase" }}>{L.diet}</div>
              <div style={{ display: "flex", gap: 3 }}>
                {[["all", L.all2], ["veg", L.veg], ["nonveg", L.nonveg]].map(([v, lbl]) => (
                  <button key={v} onClick={() => setDiet(v)} style={{ flex: 1, padding: "5px 3px", borderRadius: 7, border: `1px solid ${T.saffron}44`, background: diet === v ? T.saffron : "#fff", color: diet === v ? "#fff" : T.charcoal, fontSize: 10, fontWeight: 600, cursor: "pointer" }}>{lbl}</button>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.warmGrey, marginBottom: 5, textTransform: "uppercase" }}>{L.sort}</div>
              <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ width: "100%", border: `1px solid ${T.saffron}44`, borderRadius: 7, padding: "6px 8px", fontSize: 11, background: "#fff" }}>
                <option value="default">{L.sortDef}</option>
                <option value="fastest">{L.sortFast}</option>
                <option value="price">{L.sortPrice}</option>
                <option value="rating">{L.sortRating}</option>
              </select>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.warmGrey, marginBottom: 5, textTransform: "uppercase" }}>{L.maxPrice}: ₹{maxPrice}</div>
              <input type="range" min={50} max={1000} step={50} value={maxPrice} onChange={(e) => setMaxPrice(+e.target.value)} style={{ width: "100%", accentColor: T.saffron }} />
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.warmGrey, marginBottom: 5, textTransform: "uppercase" }}>{L.maxTime}: {maxTime}m</div>
              <input type="range" min={5} max={60} step={5} value={maxTime} onChange={(e) => setMaxTime(+e.target.value)} style={{ width: "100%", accentColor: T.saffron }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <input type="checkbox" id="bonly" checked={bestsOnly} onChange={(e) => setBestsOnly(e.target.checked)} style={{ accentColor: T.saffron, width: 15, height: 15 }} />
              <label htmlFor="bonly" style={{ fontSize: 12, fontWeight: 600, cursor: "pointer" }}>⭐ {L.bestsellers}</label>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.warmGrey, marginBottom: 5, textTransform: "uppercase" }}>{L.persons}: {persons}</div>
              <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                <button onClick={() => setPersons((p) => Math.max(1, p - 1))} style={{ width: 26, height: 26, borderRadius: 7, border: `1px solid ${T.saffron}44`, background: "#fff", fontSize: 16, cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                <span style={{ flex: 1, textAlign: "center", fontWeight: 800, fontSize: 16 }}>{persons}</span>
                <button onClick={() => setPersons((p) => p + 1)} style={{ width: 26, height: 26, borderRadius: 7, border: `1px solid ${T.saffron}44`, background: "#fff", fontSize: 16, cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
              </div>
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: 7, overflowX: "auto", paddingBottom: 10, scrollbarWidth: "none" }}>
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} style={{ whiteSpace: "nowrap", border: cat === c ? "none" : `1px solid ${T.saffron}44`, cursor: "pointer", padding: "6px 15px", borderRadius: 20, fontSize: 12, fontWeight: 500, background: cat === c ? T.saffron : "#fff", color: cat === c ? "#fff" : T.warmGrey }}>
              {catLabel[c] || c}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "10px 14px 110px", display: "flex", flexDirection: "column", gap: 15 }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#bbb", fontSize: 15 }}>{L.noItems}</div>
        ) : (
          filtered.map((d) => {
            const qty = cart[d.id] || 0;
            const [hBg, hCol, hTxt] = healthStyle[d.health];
            return (
              <div key={d.id} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: `1px solid rgba(0,0,0,0.07)`, boxShadow: "0 2px 14px rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", height: 168 }}>
                  <GifImage src={d.img} alt={nm(d, lang)} style={{ width: "100%", height: "100%" }} gifMode={gifMode} />
                  <div style={{ position: "absolute", top: 10, left: 10, width: 20, height: 20, borderRadius: 4, border: `2px solid ${d.veg ? T.success : T.danger}`, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: d.veg ? T.success : T.danger }} />
                  </div>
                  {d.popular && <div style={{ position: "absolute", top: 10, right: 10, background: T.saffron, color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 9 }}>⭐ Popular</div>}
                  <div style={{ position: "absolute", bottom: 10, left: 10, display: "flex", gap: 3 }}>
                    {Array.from({ length: d.spice }).map((_, i) => <span key={i} style={{ background: "rgba(0,0,0,0.55)", borderRadius: 4, padding: "2px 4px", fontSize: 10 }}>🌶</span>)}
                  </div>
                  <div style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(0,0,0,0.62)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 7 }}>⏱ {d.prepTime} min</div>
                </div>

                <div style={{ padding: "13px 15px 15px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
                    <span style={{ color: "#F4C430", fontSize: 11 }}>{"★".repeat(Math.floor(d.rating))}{"☆".repeat(5 - Math.floor(d.rating))}</span>
                    <span style={{ fontSize: 11, color: T.warmGrey }}>{d.rating} ({d.reviews})</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 5 }}>
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, lineHeight: 1.3 }}>{nm(d, lang)}</h3>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontSize: 17, fontWeight: 700, color: T.saffron }}>₹{d.price}</div>
                      {persons > 1 && <div style={{ fontSize: 10, color: T.warmGrey }}>₹{d.price * persons} × {persons}</div>}
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: T.warmGrey, lineHeight: 1.55, marginBottom: 9 }}>{dc(d, lang)}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 9 }}>
                    {d.allergens.map((a) => {
                      const [bg, col] = (allergenColor[a] || "#eee:#666").split(":");
                      return <span key={a} style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: bg, color: col, textTransform: "uppercase" }}>{a}</span>;
                    })}
                    <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: hBg, color: hCol }}>{hTxt}</span>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                    <div>
                      <div style={{ fontSize: 12, color: T.warmGrey, marginBottom: 4 }}>🔥 {Math.round(d.calories * persons)} {L.cal}{persons > 1 ? ` (×${persons})` : ""}</div>
                      <button onClick={() => setExpanded((p) => ({ ...p, [d.id]: !p[d.id] }))} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, color: T.saffron, fontWeight: 600, padding: 0 }}>
                        {expanded[d.id] ? "▾" : "▸"} {L.ingredients}
                      </button>
                    </div>
                    {qty === 0 ? (
                      <button onClick={() => add(d.id)} style={{ background: T.saffron, color: "#fff", border: "none", cursor: "pointer", padding: "8px 20px", borderRadius: 10, fontSize: 13, fontWeight: 700 }}>{L.add}</button>
                    ) : (
                      <div style={{ display: "flex", alignItems: "center", gap: 8, background: T.saffronLight, borderRadius: 10, padding: "4px 8px" }}>
                        <button onClick={() => rem(d.id)} style={{ width: 28, height: 28, borderRadius: 8, background: T.saffron, border: "none", color: "#fff", fontSize: 18, cursor: "pointer", fontWeight: 700 }}>−</button>
                        <span style={{ fontWeight: 700, fontSize: 15, minWidth: 20, textAlign: "center" }}>{qty}</span>
                        <button onClick={() => add(d.id)} style={{ width: 28, height: 28, borderRadius: 8, background: T.saffron, border: "none", color: "#fff", fontSize: 18, cursor: "pointer", fontWeight: 700 }}>+</button>
                      </div>
                    )}
                  </div>

                  {expanded[d.id] && (
                    <div style={{ marginTop: 10, padding: "10px 13px", background: T.saffronLight, borderRadius: 10, fontSize: 12, color: T.charcoal, lineHeight: 1.65, borderLeft: `3px solid ${T.saffron}` }}>
                      <strong style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 1, color: T.saffronDark }}>Ingredients</strong><br />{d.ingredients}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {user && (
        <button onClick={() => setShowFeedback(true)} style={{ position: "fixed", bottom: 90, right: 16, zIndex: 150, background: T.burgundy, color: "#fff", border: "none", borderRadius: 14, padding: "10px 15px", fontSize: 13, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 18px rgba(107,26,42,0.3)" }}>
          ✍ {L.feedback}
        </button>
      )}
      {showFeedback && (
        <div onClick={(e) => e.target === e.currentTarget && setShowFeedback(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 500, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: "20px 20px 0 0", padding: 24, width: "100%", maxWidth: 500 }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, marginBottom: 14, color: T.burgundy }}>Leave Feedback</h3>
            <div style={{ display: "flex", gap: 5, marginBottom: 12 }}>
              {[1, 2, 3, 4, 5].map((s) => <button key={s} onClick={() => setFb((f) => ({ ...f, rating: s }))} style={{ fontSize: 24, background: "none", border: "none", cursor: "pointer", color: s <= fb.rating ? "#F4C430" : "#DDD" }}>★</button>)}
            </div>
            <textarea value={fb.text} onChange={(e) => setFb((f) => ({ ...f, text: e.target.value }))} rows={3} placeholder="Tell us about your experience..." style={{ width: "100%", border: `1px solid ${T.saffron}44`, borderRadius: 10, padding: "10px 13px", fontSize: 13, resize: "none", outline: "none" }} />
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", border: `1px dashed ${T.saffron}66`, borderRadius: 10, padding: "10px 13px", fontSize: 13, color: T.warmGrey, margin: "10px 0" }}>
              📷 {L.feedback} photo
              <input type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => setFb((f) => ({ ...f, photo: e.target.files[0] }))} />
              {fb.photo && <span style={{ color: T.success, fontSize: 12 }}>✓ {fb.photo.name}</span>}
            </label>
            <button onClick={() => { toast.show(L.thankyou); setShowFeedback(false); setFb({ text: "", rating: 5, photo: null }); }} style={{ width: "100%", background: T.saffron, color: "#fff", border: "none", borderRadius: 12, padding: 13, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>{L.submit}</button>
          </div>
        </div>
      )}

      {cartCount > 0 && (
        <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "min(900px,100%)", padding: "10px 14px", zIndex: 150 }}>
          <div style={{ background: T.charcoal, borderRadius: 14, padding: "12px 18px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10, boxShadow: "0 -4px 30px rgba(0,0,0,0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ background: T.saffron, color: "#fff", width: 26, height: 26, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700 }}>{cartCount}</div>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>items · ₹{cartTotal}</span>
            </div>
            <button onClick={() => setPage("cart")} style={{ background: "#25D366", color: "#fff", border: "none", borderRadius: 10, padding: "8px 16px", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              View Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── CART PAGE ─────────────────────────────────────────────────────────────────
function Cart({ cart, setCart, dishes, rest, L, setPage, lang, gifMode }) {
  const items = Object.entries(cart).map(([id, qty]) => ({ dish: dishes.find((d) => d.id == id), qty })).filter((x) => x.dish && x.dish.restId === rest?.id);
  const total = items.reduce((s, { dish, qty }) => s + dish.price * qty, 0);
  const add = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const rem = (id) => setCart((c) => { const n = { ...c }; if (n[id] > 1) n[id]--; else delete n[id]; return n; });
  const del = (id) => setCart((c) => { const n = { ...c }; delete n[id]; return n; });

  const orderWA = () => {
    const lines = items.map(({ dish, qty }) => `• ${nm(dish, lang)} ×${qty} — ₹${dish.price * qty}`);
    const msg = `Hello! Order from ${rest?.name}:\n\n${lines.join("\n")}\n\nTotal: ₹${total}\n\nThank you! 🙏`;
    window.open(`https://wa.me/${rest?.phone?.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "18px 14px 130px" }}>
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, color: T.burgundy, marginBottom: 3 }}>Your Cart 🛒</h2>
      <p style={{ fontSize: 13, color: T.warmGrey, marginBottom: 18 }}>{rest?.name} · {items.length} item{items.length !== 1 ? "s" : ""}</p>

      {items.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <div style={{ fontSize: 60 }}>🛒</div>
          <p style={{ color: "#bbb", marginTop: 12, fontSize: 15 }}>Your cart is empty</p>
          <button onClick={() => setPage("menu")} style={{ marginTop: 16, background: T.saffron, color: "#fff", border: "none", borderRadius: 12, padding: "12px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Browse Menu →</button>
        </div>
      ) : (
        <>
          {items.map(({ dish, qty }) => (
            <div key={dish.id} style={{ background: "#fff", borderRadius: 16, border: `1px solid rgba(0,0,0,0.07)`, marginBottom: 11, padding: "14px", display: "flex", flexWrap: "wrap", gap: 13, alignItems: "center" }}>
              <div style={{ width: 62, height: 62, borderRadius: 11, overflow: "hidden", flexShrink: 0 }}>
                <GifImage src={dish.img} alt={nm(dish, lang)} style={{ width: "100%", height: "100%" }} gifMode={gifMode} />
              </div>
              <div style={{ flex: 1, minWidth: "150px" }}>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{nm(dish, lang)}</div>
                <div style={{ fontSize: 12, color: T.warmGrey, marginBottom: 6 }}>₹{dish.price} each · ⏱ {dish.prepTime}m prep</div>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <button onClick={() => rem(dish.id)} style={{ width: 27, height: 27, borderRadius: 7, background: T.saffronLight, border: `1px solid ${T.saffron}44`, fontSize: 16, cursor: "pointer", fontWeight: 700 }}>−</button>
                  <span style={{ fontWeight: 700, fontSize: 15, minWidth: 20, textAlign: "center" }}>{qty}</span>
                  <button onClick={() => add(dish.id)} style={{ width: 27, height: 27, borderRadius: 7, background: T.saffron, border: "none", color: "#fff", fontSize: 16, cursor: "pointer", fontWeight: 700 }}>+</button>
                  <button onClick={() => del(dish.id)} style={{ marginLeft: 6, background: "none", border: "none", color: T.danger, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>✕ Remove</button>
                </div>
              </div>
              <div style={{ fontWeight: 700, fontSize: 16, color: T.saffron, flexShrink: 0 }}>₹{dish.price * qty}</div>
            </div>
          ))}

          <div style={{ background: "#fff", borderRadius: 16, border: `1px solid rgba(0,0,0,0.07)`, padding: 18, marginTop: 6 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7, fontSize: 14, color: T.warmGrey }}><span>Subtotal</span><span>₹{total}</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7, fontSize: 14, color: T.warmGrey }}><span>Est. prep time</span><span>⏱ {Math.max(...items.map((x) => x.dish.prepTime))} min</span></div>
            <div style={{ borderTop: `1px solid ${T.creamD}`, paddingTop: 11, display: "flex", justifyContent: "space-between", fontSize: 17, fontWeight: 700, color: T.charcoal }}>
              <span>Total</span><span style={{ color: T.saffron }}>₹{total}</span>
            </div>
          </div>

          <button onClick={orderWA} style={{ position: "fixed", bottom: 16, left: "50%", transform: "translateX(-50%)", width: "min(572px,calc(100% - 28px))", background: "#25D366", color: "#fff", border: "none", borderRadius: 14, padding: "16px", fontSize: 16, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {L.orderWA} · ₹{total}
          </button>
        </>
      )}
    </div>
  );
}

// ─── ADMIN PAGE ─────────────────────────────────────────────────────────────────
function Admin({ restaurants, setRestaurants, dishes, setDishes, toast, gifMode }) {
  const [tab, setTab] = useState("restaurants");
  const [editRest, setEditRest] = useState(null);
  const [editDish, setEditDish] = useState(null);
  const blank = { name: "", cuisine: "", city: "", area: "", fssai: "", phone: "", openTill: "", emoji: "🍽", img: "" };
  const blankD = { name: "", restId: 1, cat: "main", price: "", calories: "", prepTime: "", spice: 0, veg: true, desc: "", ingredients: "", emoji: "🍽", img: "", allergens: [], health: "ok", popular: false, nameHi: "", nameMr: "", descHi: "", descMr: "" };
  const [nr, setNr] = useState(blank);
  const [nd, setNd] = useState(blankD);

  const F = ({ label, val, onChange, type = "text", opts }) => (
    <div style={{ marginBottom: 11 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: T.warmGrey, marginBottom: 3, textTransform: "uppercase" }}>{label}</div>
      {opts ? (
        <select value={val} onChange={(e) => onChange(e.target.value)} style={{ width: "100%", border: `1px solid ${T.saffron}44`, borderRadius: 8, padding: "7px 9px", fontSize: 12 }}>
          {opts.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
      ) : (
        <input type={type} value={val} onChange={(e) => onChange(e.target.value)} style={{ width: "100%", border: `1px solid ${T.saffron}44`, borderRadius: 8, padding: "7px 9px", fontSize: 12, outline: "none" }} />
      )}
    </div>
  );

  const saveRest = () => {
    if (!nr.name) { toast.show("Name required", "error"); return; }
    if (editRest) { setRestaurants((rs) => rs.map((r) => (r.id === editRest.id ? { ...r, ...nr } : r))); toast.show("Updated!"); }
    else { setRestaurants((rs) => [...rs, { ...nr, id: Date.now(), rating: 4.5, reviews: 0, popular: false, location: { lat: 18.52, lng: 73.85 } }]); toast.show("Added!"); }
    setEditRest(null); setNr(blank);
  };

  const saveDish = () => {
    if (!nd.name || !nd.price) { toast.show("Name & price required", "error"); return; }
    const d = { ...nd, price: +nd.price, calories: +nd.calories || 0, prepTime: +nd.prepTime || 10, spice: +nd.spice, rating: 4.5, reviews: 0 };
    if (editDish) { setDishes((ds) => ds.map((x) => (x.id === editDish.id ? { ...x, ...d } : x))); toast.show("Updated!"); }
    else { setDishes((ds) => [...ds, { ...d, id: Date.now() }]); toast.show("Dish added!"); }
    setEditDish(null); setNd(blankD);
  };

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "18px 14px" }}>
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, color: T.burgundy, marginBottom: 4 }}>⚙ Admin Dashboard</h2>
      <p style={{ fontSize: 13, color: T.warmGrey, marginBottom: 18 }}>Manage restaurants and dishes. GIF mode is <strong>{gifMode ? "ON" : "OFF"}</strong>.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 11, marginBottom: 22 }}>
        {[[restaurants.length, "Restaurants", "🏠"], [dishes.length, "Dishes", "🍛"], [dishes.filter((d) => d.popular).length, "Bestsellers", "⭐"], [dishes.filter((d) => d.veg).length, "Veg Items", "🌿"]].map(([n, l, e]) => (
          <div key={l} style={{ background: "#fff", borderRadius: 14, padding: "14px 16px", border: `1px solid ${T.saffron}22`, textAlign: "center" }}>
            <div style={{ fontSize: 22 }}>{e}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 900, color: T.saffron }}>{n}</div>
            <div style={{ fontSize: 11, color: T.warmGrey }}>{l}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 18 }}>
        {[["restaurants", "🏠 Restaurants"], ["dishes", "🍛 Dishes"]].map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} style={{ padding: "7px 18px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, background: tab === k ? T.burgundy : "#fff", color: tab === k ? "#fff" : T.charcoal }}>{l}</button>
        ))}
      </div>

      {tab === "restaurants" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 22, alignItems: "start" }}>
          <div style={{ background: "#fff", borderRadius: 18, padding: 18, border: `1px solid ${T.saffron}22` }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 14, color: T.burgundy }}>{editRest ? "Edit" : "Add"} Restaurant</h3>
            <F label="Name *" val={nr.name} onChange={(v) => setNr((p) => ({ ...p, name: v }))} />
            <F label="Cuisine" val={nr.cuisine} onChange={(v) => setNr((p) => ({ ...p, cuisine: v }))} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 8 }}>
              <F label="City" val={nr.city} onChange={(v) => setNr((p) => ({ ...p, city: v }))} />
              <F label="Area" val={nr.area} onChange={(v) => setNr((p) => ({ ...p, area: v }))} />
            </div>
            <F label="FSSAI" val={nr.fssai} onChange={(v) => setNr((p) => ({ ...p, fssai: v }))} />
            <F label="Phone" val={nr.phone} onChange={(v) => setNr((p) => ({ ...p, phone: v }))} />
            <F label="Open Till" val={nr.openTill} onChange={(v) => setNr((p) => ({ ...p, openTill: v }))} />
            <F label="Emoji" val={nr.emoji} onChange={(v) => setNr((p) => ({ ...p, emoji: v }))} />
            <F label="Image URL" val={nr.img} onChange={(v) => setNr((p) => ({ ...p, img: v }))} />
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.warmGrey, marginBottom: 3, textTransform: "uppercase" }}>Upload Image</div>
              <input type="file" accept="image/*" onChange={(e) => { const f = e.target.files[0]; if (f) { const r = new FileReader(); r.onload = (ev) => setNr((p) => ({ ...p, img: ev.target.result })); r.readAsDataURL(f); } }} style={{ width: "100%", fontSize: 11 }} />
            </div>
            <button onClick={saveRest} style={{ width: "100%", background: T.saffron, color: "#fff", border: "none", borderRadius: 10, padding: "11px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>{editRest ? "Update" : "Add"} Restaurant</button>
            {editRest && <button onClick={() => { setEditRest(null); setNr(blank); }} style={{ width: "100%", background: "none", border: "none", fontSize: 12, color: T.warmGrey, cursor: "pointer", marginTop: 8 }}>Cancel</button>}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {restaurants.map((r) => (
              <div key={r.id} style={{ background: "#fff", borderRadius: 13, padding: "12px 14px", border: `1px solid ${T.saffron}22`, display: "flex", gap: 11, alignItems: "center" }}>
                <div style={{ width: 42, height: 42, borderRadius: 9, overflow: "hidden", flexShrink: 0 }}>
                  <GifImage src={r.img} alt={r.name} style={{ width: "100%", height: "100%" }} gifMode={gifMode} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{r.emoji} {r.name}</div>
                  <div style={{ fontSize: 11, color: T.warmGrey }}>{r.cuisine} · {r.area}</div>
                </div>
                <div style={{ display: "flex", gap: 5 }}>
                  <button onClick={() => { setEditRest(r); setNr({ name: r.name, cuisine: r.cuisine, city: r.city, area: r.area, fssai: r.fssai, phone: r.phone, openTill: r.openTill, emoji: r.emoji, img: r.img }); }} style={{ background: T.saffronLight, border: "none", borderRadius: 7, padding: "5px 11px", fontSize: 11, cursor: "pointer", color: T.saffronDark, fontWeight: 600 }}>Edit</button>
                  <button onClick={() => { setRestaurants((rs) => rs.filter((x) => x.id !== r.id)); toast.show("Removed"); }} style={{ background: "#FEE2E2", border: "none", borderRadius: 7, padding: "5px 11px", fontSize: 11, cursor: "pointer", color: T.danger, fontWeight: 600 }}>Del</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "dishes" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 22, alignItems: "start" }}>
          <div style={{ background: "#fff", borderRadius: 18, padding: 18, border: `1px solid ${T.saffron}22` }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 14, color: T.burgundy }}>{editDish ? "Edit" : "Add"} Dish</h3>
            <F label="Name *" val={nd.name} onChange={(v) => setNd((p) => ({ ...p, name: v }))} />
            <F label="Hindi Name" val={nd.nameHi} onChange={(v) => setNd((p) => ({ ...p, nameHi: v }))} />
            <F label="Marathi Name" val={nd.nameMr} onChange={(v) => setNd((p) => ({ ...p, nameMr: v }))} />
            <F label="Restaurant" val={nd.restId} onChange={(v) => setNd((p) => ({ ...p, restId: +v }))} opts={restaurants.map((r) => [r.id, r.name])} />
            <F label="Category" val={nd.cat} onChange={(v) => setNd((p) => ({ ...p, cat: v }))} opts={[["starter", "Starter"], ["main", "Main"], ["bread", "Bread"], ["dessert", "Dessert"], ["drinks", "Drinks"]]} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))", gap: 8 }}>
              <F label="Price ₹ *" val={nd.price} onChange={(v) => setNd((p) => ({ ...p, price: v }))} type="number" />
              <F label="Calories" val={nd.calories} onChange={(v) => setNd((p) => ({ ...p, calories: v }))} type="number" />
              <F label="Prep min" val={nd.prepTime} onChange={(v) => setNd((p) => ({ ...p, prepTime: v }))} type="number" />
            </div>
            <F label="Health" val={nd.health} onChange={(v) => setNd((p) => ({ ...p, health: v }))} opts={[["great", "✓ Healthy"], ["ok", "◎ Moderate"], ["indulge", "✦ Indulgent"]]} />
            <div style={{ marginBottom: 11 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.warmGrey, marginBottom: 5, textTransform: "uppercase" }}>Options</div>
              <div style={{ display: "flex", gap: 14 }}>
                {[["veg", "🌿 Veg"], ["popular", "⭐ Popular"]].map(([k, l]) => (
                  <label key={k} style={{ display: "flex", alignItems: "center", gap: 5, cursor: "pointer", fontSize: 13 }}>
                    <input type="checkbox" checked={nd[k]} onChange={(e) => setNd((p) => ({ ...p, [k]: e.target.checked }))} style={{ accentColor: T.saffron }} />{l}
                  </label>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 11 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.warmGrey, marginBottom: 5, textTransform: "uppercase" }}>Allergens</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {["dairy", "nuts", "gluten", "egg", "soy"].map((a) => (
                  <label key={a} style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer", fontSize: 12 }}>
                    <input type="checkbox" checked={nd.allergens.includes(a)} onChange={(e) => setNd((p) => ({ ...p, allergens: e.target.checked ? [...p.allergens, a] : p.allergens.filter((x) => x !== a) }))} style={{ accentColor: T.saffron }} />{a}
                  </label>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 11 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.warmGrey, marginBottom: 3, textTransform: "uppercase" }}>Description</div>
              <textarea value={nd.desc} onChange={(e) => setNd((p) => ({ ...p, desc: e.target.value }))} rows={2} style={{ width: "100%", border: `1px solid ${T.saffron}44`, borderRadius: 8, padding: "7px 9px", fontSize: 12, resize: "none", outline: "none" }} />
            </div>
            <div style={{ marginBottom: 11 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.warmGrey, marginBottom: 3, textTransform: "uppercase" }}>Ingredients</div>
              <textarea value={nd.ingredients} onChange={(e) => setNd((p) => ({ ...p, ingredients: e.target.value }))} rows={2} style={{ width: "100%", border: `1px solid ${T.saffron}44`, borderRadius: 8, padding: "7px 9px", fontSize: 12, resize: "none", outline: "none" }} />
            </div>
            <F label="Image URL" val={nd.img} onChange={(v) => setNd((p) => ({ ...p, img: v }))} />
            <div style={{ marginBottom: 13 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.warmGrey, marginBottom: 3, textTransform: "uppercase" }}>Upload Image</div>
              <input type="file" accept="image/*,video/*" onChange={(e) => { const f = e.target.files[0]; if (f) { const r = new FileReader(); r.onload = (ev) => setNd((p) => ({ ...p, img: ev.target.result })); r.readAsDataURL(f); } }} style={{ width: "100%", fontSize: 11 }} />
            </div>
            <button onClick={saveDish} style={{ width: "100%", background: T.saffron, color: "#fff", border: "none", borderRadius: 10, padding: "11px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>{editDish ? "Update" : "Add"} Dish</button>
            {editDish && <button onClick={() => { setEditDish(null); setNd(blankD); }} style={{ width: "100%", background: "none", border: "none", fontSize: 12, color: T.warmGrey, cursor: "pointer", marginTop: 8 }}>Cancel</button>}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: "80vh", overflowY: "auto" }}>
            {dishes.map((d) => (
              <div key={d.id} style={{ background: "#fff", borderRadius: 12, padding: "11px 13px", border: `1px solid ${T.saffron}22`, display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ width: 38, height: 38, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
                  <GifImage src={d.img} alt={d.name} style={{ width: "100%", height: "100%" }} gifMode={gifMode} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.name}</div>
                  <div style={{ fontSize: 11, color: T.warmGrey }}>₹{d.price} · {restaurants.find((r) => r.id === d.restId)?.name}</div>
                </div>
                <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>
                  <button onClick={() => { setEditDish(d); setNd({ ...d, price: String(d.price), calories: String(d.calories), prepTime: String(d.prepTime), spice: String(d.spice) }); }} style={{ background: T.saffronLight, border: "none", borderRadius: 6, padding: "4px 8px", fontSize: 11, cursor: "pointer", color: T.saffronDark, fontWeight: 600 }}>Edit</button>
                  <button onClick={() => { setDishes((ds) => ds.filter((x) => x.id !== d.id)); toast.show("Removed"); }} style={{ background: "#FEE2E2", border: "none", borderRadius: 6, padding: "4px 8px", fontSize: 11, cursor: "pointer", color: T.danger, fontWeight: 600 }}>Del</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [restId, setRestId] = useState(null);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState({});
  const [lang, setLang] = useState("en");
  const [restaurants, setRestaurants] = useState(RESTS);
  const [dishes, setDishes] = useState(DISHES);
  const [gifMode, setGifMode] = useState(false);
  const [hist, setHist] = useState([]);
  const toast = useToast();
  const L = LABELS[lang] || LABELS.en;
  const activeRest = restaurants.find((r) => r.id === restId);

  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}body{font-family:'DM Sans',sans-serif;background:#FDFAF5;-webkit-tap-highlight-color:transparent;}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:#E8750A44;border-radius:4px}`;
    document.head.appendChild(s);
    return () => document.head.removeChild(s);
  }, []);

  const navToMenu = useCallback((id) => {
    setRestId(id);
    setPage("menu");
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + ", " + now.toLocaleDateString([], { month: "short", day: "numeric" });
    setHist((h) => {
      const filtered = h.filter((x) => x.restId !== id);
      return [...filtered, { restId: id, time }].slice(-10);
    });
  }, []);

  const navigate = useCallback((p) => {
    if (p === "menu" && restId) {
      navToMenu(restId);
    } else {
      setPage(p);
    }
  }, [restId, navToMenu]);

  const handleSetRestId = useCallback((id) => {
    navToMenu(id);
  }, [navToMenu]);

  return (
    <div style={{ minHeight: "100vh", background: "#FDFAF5" }}>
      <Nav page={page} setPage={navigate} user={user} setUser={setUser} cart={cart} lang={lang} setLang={setLang} L={L} hist={hist} restaurants={restaurants} setRestId={handleSetRestId} gifMode={gifMode} setGifMode={setGifMode} />

      {page === "home" && <Home restaurants={restaurants} setPage={setPage} setRestId={handleSetRestId} L={L} gifMode={gifMode} hist={hist} />}
      {page === "menu" && activeRest && <Menu rest={activeRest} dishes={dishes} cart={cart} setCart={setCart} user={user} lang={lang} L={L} toast={toast} gifMode={gifMode} setPage={navigate} />}
      {page === "cart" && <Cart cart={cart} setCart={setCart} dishes={dishes} rest={activeRest} L={L} setPage={navigate} lang={lang} gifMode={gifMode} />}
      {page === "admin" && user?.isAdmin && <Admin restaurants={restaurants} setRestaurants={setRestaurants} dishes={dishes} setDishes={setDishes} toast={toast} gifMode={gifMode} />}

      <Toasts toasts={toast.toasts} />
    </div>
  );
}