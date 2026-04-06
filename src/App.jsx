import React, { useState, useEffect, useCallback, useRef } from "react";

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
  paneerTikka: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&h=500&fit=crop&q=80",
  manchurian: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=500&fit=crop&q=80",
  butterChicken: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&h=500&fit=crop&q=80",
  dalMakhani: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=500&fit=crop&q=80",
  palakPaneer: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=500&h=500&fit=crop&q=80",
  naan: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&h=500&fit=crop&q=80",
  gulabJamun: "https://images.unsplash.com/photo-1666189043769-61ee0ad01d53?w=500&h=500&fit=crop&q=80",
  mangoLassi: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500&h=500&fit=crop&q=80",
  pavBhaji: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=500&fit=crop&q=80",
  buddhaBowl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop&q=80",
  seekhKebab: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=500&fit=crop&q=80",
  mughlaiChicken: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&h=500&fit=crop&q=80",
  biryani: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=500&fit=crop&q=80",
  sheerKhorma: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=500&fit=crop&q=80",
  roohAfza: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=500&fit=crop&q=80",
  dosaMasala: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&h=500&fit=crop&q=80",
  chettinadChicken: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=500&fit=crop&q=80",
  prawnsKoliwada: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&h=500&fit=crop&q=80",
  sambarRice: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=500&h=500&fit=crop&q=80",
  coconutChutney: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=500&fit=crop&q=80",
  filterCoffee: "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=500&h=500&fit=crop&q=80",
  rassmalai: "https://images.unsplash.com/photo-1666189043769-61ee0ad01d53?w=500&h=500&fit=crop&q=80",
  vadaPav: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=500&fit=crop&q=80",
  chole: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=500&fit=crop&q=80",
  paniPuri: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=500&fit=crop&q=80",
  keemaPav: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&h=500&fit=crop&q=80",
  jalebi: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&h=500&fit=crop&q=80",
  masalaChai: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&h=500&fit=crop&q=80",
  bombaySandwich: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=500&fit=crop&q=80",
  bhelPuri: "https://images.unsplash.com/photo-1589302168068-964664d93cb0?w=500&h=500&fit=crop&q=80",
  misalPav: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=500&fit=crop&q=80",
  ragdaPattice: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=500&fit=crop&q=80",
  cuttingChai: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=500&fit=crop&q=80",
  avocadoToast: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500&h=500&fit=crop&q=80",
  zoodles: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&h=500&fit=crop&q=80",
  acaiBowl: "https://images.unsplash.com/photo-1590301157890-4810ed35a4d7?w=500&h=500&fit=crop&q=80",
  matchaSmoothie: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&h=500&fit=crop&q=80",
  sweetPotatoSoup: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&h=500&fit=crop&q=80",
  koreanRest: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&h=450&fit=crop&q=80",
  kimchiStew: "https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=500&h=500&fit=crop&q=80",
  bibimbap: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=500&h=500&fit=crop&q=80",
  tteokbokki: "https://images.unsplash.com/photo-1583182332473-b31ba06fd284?w=500&h=500&fit=crop&q=80",
  koreanFriedChicken: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&h=500&fit=crop&q=80",
  bingsu: "https://images.unsplash.com/photo-1553452118-621e1f860f43?w=500&h=500&fit=crop&q=80",

  spiceGarden: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=450&fit=crop&q=80",
  mumbaiFoods: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=450&fit=crop&q=80",
  greenBowlRest: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=450&fit=crop&q=80",
  tandoorTales: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=450&fit=crop&q=80",
  coastalCurry: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&h=450&fit=crop&q=80",
  streetBites: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=450&fit=crop&q=80",
};

// 1. SOLUTION FOR SLOW IMAGES: Progressive Shimmer Loading
// Automatically shows a Zomato/Swiggy style animated grey gradient while the image downloads.
function ProgressiveImage({ src, alt, style }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ ...style, position: "relative", overflow: "hidden", background: T.creamD }}>
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: `linear-gradient(90deg, #F5EAD8 25%, #FFF3E6 50%, #F5EAD8 75%)`,
          backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite"
        }} />
      )}
      <img 
        src={src} alt={alt} 
        onLoad={() => setLoaded(true)}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease" }}
        onError={(e) => { e.target.style.opacity = 0; }} 
      />
    </div>
  );
}

// 2. REALISTIC DATA UPDATES: Real-world GPS formats, valid-looking 14-digit FSSAI, and real +91 Mobile numbering
const RESTS = [
  { id: 1, name: "Spice Garden", cuisine: "Authentic Indian", city: "Pune", area: "FC Road", rating: 4.6, reviews: 842, fssai: "11521036000145", openTill: "11 PM", emoji: "🍛", popular: true, img: IMG.spiceGarden, phone: "+91 98220 12345", location: { lat: 18.5246, lng: 73.8411 } },
  { id: 2, name: "Mumbai Tadka", cuisine: "Street Food & Chaats", city: "Mumbai", area: "Bandra West", rating: 4.8, reviews: 934, fssai: "11519006000452", openTill: "10 PM", emoji: "🌮", popular: true, img: IMG.mumbaiFoods, phone: "+91 99870 98765", location: { lat: 19.0544, lng: 72.8402 } },
  { id: 3, name: "The Green Bowl", cuisine: "Healthy & Vegan", city: "Pune", area: "Koregaon Park", rating: 4.8, reviews: 317, fssai: "11522036000789", openTill: "9 PM", emoji: "🥗", popular: true, img: IMG.greenBowlRest, phone: "+91 91580 55555", location: { lat: 18.5362, lng: 73.8939 } },
  { id: 4, name: "Tandoor Tales", cuisine: "Mughlai & North Indian", city: "Delhi", area: "Connaught Place", rating: 4.7, reviews: 1124, fssai: "13320008000111", openTill: "11:30 PM", emoji: "🔥", popular: true, img: IMG.tandoorTales, phone: "+91 98111 22233", location: { lat: 28.6315, lng: 77.2167 } },
  { id: 5, name: "Coastal Curry House", cuisine: "South Indian & Seafood", city: "Chennai", area: "T. Nagar", rating: 4.5, reviews: 689, fssai: "12418002001234", openTill: "10:30 PM", emoji: "🦐", popular: false, img: IMG.coastalCurry, phone: "+91 94440 11222", location: { lat: 13.0418, lng: 80.2341 } },
  { id: 6, name: "Street Bites Co.", cuisine: "Pan-Indian Street Food", city: "Bangalore", area: "Indiranagar", rating: 4.3, reviews: 478, fssai: "11221333000555", openTill: "11 PM", emoji: "🍢", popular: false, img: IMG.streetBites, phone: "+91 99000 44555", location: { lat: 12.9784, lng: 77.6408 } },
  { id: 7, name: "Seoul Spice", cuisine: "Authentic Korean", city: "Pune", area: "Kalyani Nagar", rating: 4.9, reviews: 412, fssai: "11523036000999", openTill: "11 PM", emoji: "🥢", popular: true, img: IMG.koreanRest, phone: "+91 96040 77888", location: { lat: 18.5463, lng: 73.9033 } }
];

const DISHES = [
  // ── Spice Garden
  { id: 1, restId: 1, cat: "starter", name: "Paneer Tikka", price: 220, popular: true, veg: true, spice: 2, desc: "Soft cottage cheese cubes marinated in spiced yogurt.", emoji: "🧀", calories: 310, health: "ok", prepTime: 15, allergens: ["dairy", "gluten"], ingredients: "Paneer, yogurt, ginger, garlic.", rating: 4.8, reviews: 142, img: IMG.paneerTikka, nameHi: "पनीर टिक्का", nameMr: "पनीर टिक्का", descHi: "तंदूर में बनाया मसालेदार पनीर।", descMr: "तंदूरमध्ये पनीर." },
  { id: 2, restId: 1, cat: "starter", name: "Veg Manchurian", price: 180, popular: false, veg: true, spice: 3, desc: "Crispy vegetable dumplings tossed in a tangy sauce.", emoji: "🥬", calories: 280, health: "ok", prepTime: 12, allergens: ["gluten", "soy"], ingredients: "Mixed vegetables, cornflour, soy sauce.", rating: 4.3, reviews: 89, img: IMG.manchurian, nameHi: "वेज मंचूरियन", nameMr: "वेज मंचुरियन", descHi: "तीखी चटनी में कुरकुरे बॉल्स।", descMr: "तिखट चटणीत भाजी बॉल्स." },
  { id: 3, restId: 1, cat: "main", name: "Butter Chicken", price: 320, popular: true, veg: false, spice: 1, desc: "Tender chicken in a velvety tomato-cream sauce.", emoji: "🍗", calories: 480, health: "indulge", prepTime: 25, allergens: ["dairy", "nuts"], ingredients: "Chicken, tomatoes, cream, butter.", rating: 4.9, reviews: 318, img: IMG.butterChicken, nameHi: "बटर चिकन", nameMr: "बटर चिकन", descHi: "मलाईदार टमाटर सॉस में चिकन।", descMr: "मलईदार सॉसमध्ये चिकन." },
  { id: 4, restId: 1, cat: "main", name: "Dal Makhani", price: 240, popular: false, veg: true, spice: 1, desc: "Black lentils slow-cooked overnight with butter.", emoji: "🫘", calories: 360, health: "ok", prepTime: 20, allergens: ["dairy"], ingredients: "Black urad dal, rajma, butter, cream.", rating: 4.7, reviews: 204, img: IMG.dalMakhani, nameHi: "दाल मखनी", nameMr: "दाल मखनी", descHi: "रात भर पकाई गई दाल।", descMr: "रात्रभर शिजवलेली दाल." },
  { id: 5, restId: 1, cat: "main", name: "Palak Paneer", price: 260, popular: false, veg: true, spice: 1, desc: "Fresh cottage cheese in a silky spinach gravy.", emoji: "🥬", calories: 340, health: "great", prepTime: 18, allergens: ["dairy"], ingredients: "Spinach, paneer, onion, cream.", rating: 4.5, reviews: 167, img: IMG.palakPaneer, nameHi: "पालक पनीर", nameMr: "पालक पनीर", descHi: "पालक की मलाईदार पनीर।", descMr: "पालकाच्या ग्रेव्हीत पनीर." },
  { id: 6, restId: 1, cat: "bread", name: "Butter Naan", price: 50, popular: true, veg: true, spice: 0, desc: "Leavened flatbread brushed generously with butter.", emoji: "🫓", calories: 180, health: "ok", prepTime: 8, allergens: ["gluten", "dairy", "egg"], ingredients: "Refined flour, yeast, butter.", rating: 4.6, reviews: 410, img: IMG.naan, nameHi: "बटर नान", nameMr: "बटर नान", descHi: "तंदूर में बना नान।", descMr: "बटर नान." },
  { id: 7, restId: 1, cat: "dessert", name: "Gulab Jamun", price: 90, popular: true, veg: true, spice: 0, desc: "Soft milk-solid dumplings soaked in sugar syrup.", emoji: "🍮", calories: 290, health: "indulge", prepTime: 5, allergens: ["dairy", "gluten"], ingredients: "Milk powder, sugar, cardamom.", rating: 4.8, reviews: 256, img: IMG.gulabJamun, nameHi: "गुलाब जामुन", nameMr: "गुलाब जामून", descHi: "गुलाब चाशनी में मिठाई।", descMr: "गुलाब शर्बतात मिठाई." },
  { id: 8, restId: 1, cat: "drinks", name: "Mango Lassi", price: 110, popular: true, veg: true, spice: 0, desc: "Thick chilled yogurt blended with ripe mangoes.", emoji: "🥭", calories: 210, health: "great", prepTime: 5, allergens: ["dairy"], ingredients: "Yogurt, mango pulp, sugar.", rating: 4.9, reviews: 189, img: IMG.mangoLassi, nameHi: "मैंगो लस्सी", nameMr: "मँगो लस्सी", descHi: "आम और दही की लस्सी।", descMr: "आंबा लस्सी." },

  // ── Mumbai Tadka
  { id: 9, restId: 2, cat: "starter", name: "Pav Bhaji", price: 120, popular: true, veg: true, spice: 2, desc: "Spiced mashed vegetables with buttered pav buns.", emoji: "🫕", calories: 380, health: "ok", prepTime: 10, allergens: ["gluten", "dairy"], ingredients: "Mixed vegetables, butter, pav.", rating: 4.7, reviews: 289, img: IMG.pavBhaji, nameHi: "पाव भाजी", nameMr: "पाव भाजी", descHi: "मुंबई की पाव भाजी।", descMr: "मुंबईची पाव भाजी." },
  { id: 31, restId: 2, cat: "starter", name: "Bombay Toast Sandwich", price: 90, popular: true, veg: true, spice: 2, desc: "Layered sandwich with spiced potato, cucumber, tomato.", emoji: "🥪", calories: 320, health: "ok", prepTime: 8, allergens: ["gluten", "dairy"], ingredients: "White bread, butter, potato, cucumber.", rating: 4.6, reviews: 154, img: IMG.bombaySandwich, nameHi: "बॉम्बे सैंडविच", nameMr: "बॉम्बे सँडविच", descHi: "मसालेदार टोस्ट सैंडविच।", descMr: "मसालेदार टोस्ट सँडविच." },
  { id: 32, restId: 2, cat: "starter", name: "Bhel Puri", price: 70, popular: false, veg: true, spice: 2, desc: "A tangy, crunchy mix of puffed rice, sev, and onions.", emoji: "🍲", calories: 210, health: "great", prepTime: 5, allergens: ["gluten", "nuts"], ingredients: "Puffed rice, sev, puri, peanuts.", rating: 4.5, reviews: 312, img: IMG.bhelPuri, nameHi: "भेल पूरी", nameMr: "भेळ पुरी", descHi: "चटपटी भेल पूरी।", descMr: "चटपटीत भेळ पुरी." },
  { id: 33, restId: 2, cat: "main", name: "Misal Pav", price: 140, popular: true, veg: true, spice: 3, desc: "A fiery sprouted moth bean curry topped with crunchy farsan.", emoji: "🍛", calories: 410, health: "indulge", prepTime: 12, allergens: ["gluten"], ingredients: "Sprouted moth beans, farsan, pav.", rating: 4.9, reviews: 521, img: IMG.misalPav, nameHi: "मिसल पाव", nameMr: "मिसळ पाव", descHi: "तीखी मिसल पाव।", descMr: "झणझणीत मिसळ पाव." },
  { id: 34, restId: 2, cat: "starter", name: "Ragda Pattice", price: 110, popular: false, veg: true, spice: 2, desc: "Pan-fried potato patties drowned in a mildly spiced white pea curry.", emoji: "🥔", calories: 340, health: "ok", prepTime: 10, allergens: ["gluten", "dairy"], ingredients: "White peas, potato, turmeric, chutneys.", rating: 4.6, reviews: 189, img: IMG.ragdaPattice, nameHi: "रगड़ा पैटीस", nameMr: "रगडा पॅटीस", descHi: "मटर और आलू की पैटीस।", descMr: "मटार आणि बटाट्याची पॅटीस." },
  { id: 35, restId: 2, cat: "drinks", name: "Cutting Chai", price: 30, popular: true, veg: true, spice: 1, desc: "Half glass of strong tea brewed with ginger and cardamom.", emoji: "☕", calories: 75, health: "ok", prepTime: 5, allergens: ["dairy"], ingredients: "Tea leaves, milk, ginger, cardamom.", rating: 4.8, reviews: 840, img: IMG.cuttingChai, nameHi: "कटिंग चाय", nameMr: "कटिंग चहा", descHi: "कड़क चाय।", descMr: "कडक चहा." },

  // ── The Green Bowl
  { id: 10, restId: 3, cat: "main", name: "Quinoa Buddha Bowl", price: 350, popular: true, veg: true, spice: 0, desc: "Wholesome quinoa with roasted veggies, hummus, and avocado.", emoji: "🥗", calories: 420, health: "great", prepTime: 15, allergens: ["nuts"], ingredients: "Quinoa, chickpeas, avocado, hummus.", rating: 4.9, reviews: 143, img: IMG.buddhaBowl, nameHi: "बुद्धा बाउल", nameMr: "बुद्धा बाउल", descHi: "स्वस्थ बुद्धा बाउल।", descMr: "पौष्टिक बाउल." },
  { id: 36, restId: 3, cat: "starter", name: "Avocado Sourdough Toast", price: 280, popular: true, veg: true, spice: 1, desc: "Mashed Hass avocado on toasted artisanal sourdough.", emoji: "🥑", calories: 310, health: "great", prepTime: 10, allergens: ["gluten"], ingredients: "Sourdough bread, avocado, tomatoes.", rating: 4.8, reviews: 211, img: IMG.avocadoToast, nameHi: "एवोकाडो टोस्ट", nameMr: "अवोकॅडो टोस्ट", descHi: "एवोकाडो रोटी।", descMr: "अवोकॅडो ब्रेड." },
  { id: 37, restId: 3, cat: "main", name: "Zucchini Noodle Spaghetti", price: 320, popular: false, veg: true, spice: 1, desc: "Fresh spiraled zucchini noodles tossed in vegan pesto.", emoji: "🍝", calories: 240, health: "great", prepTime: 12, allergens: ["nuts"], ingredients: "Zucchini, basil, walnuts, garlic.", rating: 4.5, reviews: 87, img: IMG.zoodles, nameHi: "ज़ूकीनी नूडल्स", nameMr: "झुकिनी नूडल्स", descHi: "ताजा ज़ूकीनी नूडल्स।", descMr: "पौष्टिक झुकिनी नूडल्स." },
  { id: 38, restId: 3, cat: "dessert", name: "Acai Berry Bowl", price: 380, popular: true, veg: true, spice: 0, desc: "Thick acai puree topped with strawberries and granola.", emoji: "🫐", calories: 350, health: "great", prepTime: 8, allergens: ["nuts", "gluten"], ingredients: "Acai, banana, almond milk, granola.", rating: 4.9, reviews: 405, img: IMG.acaiBowl, nameHi: "अकाई बाउल", nameMr: "अकाई बाऊल", descHi: "अकाई बेरी बाउल।", descMr: "अकाई बेरी बाऊल." },
  { id: 39, restId: 3, cat: "starter", name: "Roasted Sweet Potato Soup", price: 210, popular: false, veg: true, spice: 1, desc: "Creamy, dairy-free sweet potato soup blended with coconut milk.", emoji: "🥣", calories: 180, health: "great", prepTime: 15, allergens: [], ingredients: "Sweet potato, coconut milk, garlic.", rating: 4.6, reviews: 120, img: IMG.sweetPotatoSoup, nameHi: "शकरकंद सूप", nameMr: "रताळ्याचे सूप", descHi: "शकरकंद सूप।", descMr: "रताळ्याचे सूप." },
  { id: 40, restId: 3, cat: "drinks", name: "Matcha Chia Smoothie", price: 240, popular: false, veg: true, spice: 0, desc: "Antioxidant-rich matcha blended with spinach and oat milk.", emoji: "🍵", calories: 160, health: "great", prepTime: 5, allergens: ["nuts"], ingredients: "Matcha, spinach, oat milk, chia.", rating: 4.7, reviews: 94, img: IMG.matchaSmoothie, nameHi: "माचा स्मूदी", nameMr: "माचा स्मूदी", descHi: "माचा स्मूदी।", descMr: "माचा स्मूदी." },

  // ── Seoul Spice (Korean)
  { id: 41, restId: 7, cat: "main", name: "Kimchi Jjigae", price: 420, popular: true, veg: true, spice: 3, desc: "Spicy traditional stew made with aged kimchi and tofu.", emoji: "🍲", calories: 310, health: "great", prepTime: 20, allergens: ["soy"], ingredients: "Kimchi, tofu, mushrooms, gochugaru.", rating: 4.8, reviews: 312, img: IMG.kimchiStew, nameHi: "किमची स्टू", nameMr: "किमची स्ट्यू", descHi: "मसालेदार सूप।", descMr: "मसालेदार सूप." },
  { id: 42, restId: 7, cat: "main", name: "Chicken Bibimbap", price: 480, popular: true, veg: false, spice: 2, desc: "Rice topped with vegetables, chicken, gochujang sauce, and an egg.", emoji: "🍱", calories: 540, health: "ok", prepTime: 18, allergens: ["egg", "soy", "gluten"], ingredients: "Rice, chicken, spinach, egg, gochujang.", rating: 4.9, reviews: 543, img: IMG.bibimbap, nameHi: "चिकन बिबिंबप", nameMr: "चिकन बिबिंबप", descHi: "चिकन चावल।", descMr: "चिकन भात." },
  { id: 43, restId: 7, cat: "starter", name: "Tteokbokki", price: 340, popular: true, veg: true, spice: 3, desc: "Chewy rice cakes simmered in a fiery chilli sauce.", emoji: "🥢", calories: 410, health: "indulge", prepTime: 15, allergens: ["soy", "gluten"], ingredients: "Rice cakes, gochujang, scallions.", rating: 4.7, reviews: 298, img: IMG.tteokbokki, nameHi: "त्तेओकबोक्की", nameMr: "टोक्बोक्की", descHi: "तीखे चावल केक।", descMr: "तिखट राईस केक." },
  { id: 44, restId: 7, cat: "starter", name: "Yangnyeom Fried Chicken", price: 410, popular: true, veg: false, spice: 2, desc: "Double-fried chicken wings in a sticky, sweet, and spicy glaze.", emoji: "🍗", calories: 620, health: "indulge", prepTime: 22, allergens: ["soy", "gluten"], ingredients: "Chicken, gochujang, honey, garlic.", rating: 4.9, reviews: 611, img: IMG.koreanFriedChicken, nameHi: "फ्राइड चिकन", nameMr: "फ्राईड चिकन", descHi: "मसालेदार चिकन।", descMr: "मसालेदार चिकन." },
  { id: 45, restId: 7, cat: "dessert", name: "Mango Bingsu", price: 350, popular: false, veg: true, spice: 0, desc: "Fluffy milk snow ice topped with fresh mangoes and condensed milk.", emoji: "🍧", calories: 380, health: "indulge", prepTime: 10, allergens: ["dairy"], ingredients: "Frozen milk, mango, condensed milk.", rating: 4.6, reviews: 156, img: IMG.bingsu, nameHi: "मैंगो बिंगसू", nameMr: "मँगो बिंगसू", descHi: "मैंगो आइस डेज़र्ट।", descMr: "मँगो आईस डेझर्ट." },

  // ── Tandoor Tales
  { id: 11, restId: 4, cat: "starter", name: "Seekh Kebab", price: 280, popular: true, veg: false, spice: 2, desc: "Minced lamb skewers seasoned with herbs, grilled over charcoal.", emoji: "🍢", calories: 340, health: "ok", prepTime: 18, allergens: ["gluten"], ingredients: "Minced lamb, onion, garam masala.", rating: 4.8, reviews: 203, img: IMG.seekhKebab, nameHi: "सीख कबाब", nameMr: "सीख कबाब", descHi: "ग्रिल्ड कबाब।", descMr: "ग्रील्ड कबाब." },
  { id: 12, restId: 4, cat: "starter", name: "Paneer Malai Tikka", price: 260, popular: false, veg: true, spice: 1, desc: "Cottage cheese marinated in cream and mild spices.", emoji: "🧀", calories: 330, health: "ok", prepTime: 16, allergens: ["dairy", "gluten"], ingredients: "Paneer, malai, cardamom.", rating: 4.6, reviews: 117, img: IMG.paneerTikka, nameHi: "पनीर मलाई टिक्का", nameMr: "पनीर मलाई टिक्का", descHi: "मलाई पनीर टिक्का।", descMr: "मलई पनीर टिक्का." },
  { id: 13, restId: 4, cat: "main", name: "Mughlai Chicken Korma", price: 380, popular: true, veg: false, spice: 1, desc: "Slow-braised chicken in a rich almond-saffron gravy.", emoji: "🍗", calories: 520, health: "indulge", prepTime: 30, allergens: ["dairy", "nuts"], ingredients: "Chicken, almond paste, saffron.", rating: 4.9, reviews: 334, img: IMG.mughlaiChicken, nameHi: "चिकन कोरमा", nameMr: "चिकन कोरमा", descHi: "शाही चिकन।", descMr: "शाही चिकन." },
  { id: 14, restId: 4, cat: "main", name: "Dum Biryani", price: 420, popular: true, veg: false, spice: 2, desc: "Fragrant basmati layered with slow-cooked mutton.", emoji: "🍚", calories: 610, health: "indulge", prepTime: 35, allergens: ["dairy", "gluten"], ingredients: "Basmati rice, mutton, saffron.", rating: 4.9, reviews: 412, img: IMG.biryani, nameHi: "दम बिरयानी", nameMr: "दम बिर्याणी", descHi: "मटन बिरयानी।", descMr: "मटण बिर्याणी." },

  // ── Coastal Curry House
  { id: 18, restId: 5, cat: "starter", name: "Masala Dosa", price: 140, popular: true, veg: true, spice: 2, desc: "Crispy crepe made from rice-lentil batter, filled with potato.", emoji: "🥞", calories: 290, health: "ok", prepTime: 14, allergens: ["gluten"], ingredients: "Rice, urad dal, potato masala.", rating: 4.8, reviews: 267, img: IMG.dosaMasala, nameHi: "मसाला डोसा", nameMr: "मसाला डोसा", descHi: "मसाला डोसा।", descMr: "मसाला डोसा." },
  { id: 19, restId: 5, cat: "starter", name: "Prawns Koliwada", price: 310, popular: true, veg: false, spice: 3, desc: "Tiger prawns coated in spiced chickpea batter and deep-fried.", emoji: "🦐", calories: 370, health: "ok", prepTime: 16, allergens: ["gluten"], ingredients: "Prawns, chickpea flour, spices.", rating: 4.7, reviews: 189, img: IMG.prawnsKoliwada, nameHi: "झींगे कोलीवाडा", nameMr: "कोळंबी कोलीवाडा", descHi: "मसालेदार झींगे।", descMr: "मसालेदार कोळंबी." },
  { id: 20, restId: 5, cat: "main", name: "Chettinad Chicken", price: 340, popular: false, veg: false, spice: 3, desc: "Fiery South Indian curry with whole spices.", emoji: "🍗", calories: 460, health: "ok", prepTime: 28, allergens: [], ingredients: "Chicken, spices, coconut paste.", rating: 4.6, reviews: 153, img: IMG.chettinadChicken, nameHi: "चेट्टीनाड चिकन", nameMr: "चेट्टीनाड चिकन", descHi: "चेट्टीनाड चिकन।", descMr: "चेट्टीनाड चिकन." },
  { id: 24, restId: 5, cat: "drinks", name: "Filter Coffee", price: 70, popular: true, veg: true, spice: 0, desc: "Strong South Indian decoction mixed with hot frothed milk.", emoji: "☕", calories: 90, health: "ok", prepTime: 5, allergens: ["dairy"], ingredients: "Coffee, milk, sugar.", rating: 4.9, reviews: 312, img: IMG.filterCoffee, nameHi: "फिल्टर कॉफी", nameMr: "फिल्टर कॉफी", descHi: "फिल्टर कॉफी।", descMr: "फिल्टर कॉफी." },

  // ── Street Bites Co.
  { id: 25, restId: 6, cat: "starter", name: "Vada Pav", price: 60, popular: true, veg: true, spice: 2, desc: "Crispy spiced potato fritter sandwiched in a soft pav.", emoji: "🍔", calories: 290, health: "ok", prepTime: 8, allergens: ["gluten", "dairy"], ingredients: "Potato, besan, pav buns.", rating: 4.6, reviews: 221, img: IMG.vadaPav, nameHi: "वड़ा पाव", nameMr: "वडा पाव", descHi: "वड़ा पाव।", descMr: "वडा पाव." },
  { id: 26, restId: 6, cat: "starter", name: "Pani Puri", price: 70, popular: true, veg: true, spice: 3, desc: "Hollow crispy puris filled with tangy mint water.", emoji: "🫧", calories: 190, health: "ok", prepTime: 5, allergens: ["gluten"], ingredients: "Puris, mint water, potato.", rating: 4.8, reviews: 309, img: IMG.paniPuri, nameHi: "पानी पूरी", nameMr: "पाणी पुरी", descHi: "पानी पूरी।", descMr: "पाणी पुरी." },
  { id: 27, restId: 6, cat: "main", name: "Chole Bhature", price: 150, popular: false, veg: true, spice: 2, desc: "Puffed bread paired with spicy chickpea masala.", emoji: "🫘", calories: 520, health: "indulge", prepTime: 18, allergens: ["gluten", "dairy"], ingredients: "Chickpeas, bhature dough, spices.", rating: 4.5, reviews: 142, img: IMG.chole, nameHi: "छोले भटूरे", nameMr: "छोले भटुरे", descHi: "छोले भटूरे।", descMr: "छोले भटुरे." },
  { id: 28, restId: 6, cat: "main", name: "Keema Pav", price: 170, popular: true, veg: false, spice: 2, desc: "Spiced minced mutton cooked with peas, served with pav.", emoji: "🍞", calories: 430, health: "ok", prepTime: 20, allergens: ["gluten", "dairy"], ingredients: "Minced mutton, peas, pav.", rating: 4.7, reviews: 188, img: IMG.keemaPav, nameHi: "कीमा पाव", nameMr: "कीमा पाव", descHi: "कीमा पाव।", descMr: "कीमा पाव." }
];

const LABELS = {
  en: { all: "All", starter: "Starters", main: "Mains", bread: "Breads", dessert: "Desserts", drinks: "Drinks", search: "Search dishes...", veg: "🌿 Veg", nonveg: "🍗 Non-Veg", all2: "All", bestsellers: "Bestsellers", add: "Add", cart: "Cart", orderWA: "Order on WhatsApp", prep: "Prep", cal: "cal", ingredients: "Ingredients", persons: "Persons", login: "Login", logout: "Logout", admin: "Admin", home: "Home", feedback: "Feedback", noItems: "No dishes found.", fssai: "FSSAI Certified", openTill: "Open till", map: "Map", maxPrice: "Max Price", maxTime: "Max Prep Time", back: "← Back", history: "History", quickNav: "Quick Nav", noHistory: "No history yet", sort: "Sort", sortDef: "Default", sortFast: "⚡ Fastest", sortPrice: "💰 Price", sortRating: "⭐ Rating", diet: "Diet", filters: "Filters", lastVisit: "Last visited", speak: "Listening…", submit: "Submit", cancel: "Cancel", thankyou: "Thanks for your feedback 🙏" },
  hi: { all: "सभी", starter: "स्टार्टर", main: "मुख्य", bread: "रोटी", dessert: "मिठाई", drinks: "पेय", search: "व्यंजन खोजें...", veg: "🌿 शाकाहारी", nonveg: "🍗 मांसाहारी", all2: "सभी", bestsellers: "केवल बेस्टसेलर", add: "जोड़ें", cart: "कार्ट", orderWA: "WhatsApp ऑर्डर", prep: "समय", cal: "कैलोरी", ingredients: "सामग्री", persons: "व्यक्ति", login: "लॉगिन", logout: "लॉगआउट", admin: "एडमिन", home: "होम", feedback: "प्रतिक्रिया", noItems: "कोई व्यंजन नहीं।", fssai: "FSSAI प्रमाणित", openTill: "खुला", map: "नक्शा", maxPrice: "अधिकतम मूल्य", maxTime: "समय सीमा", back: "← वापस", history: "इतिहास", quickNav: "शीघ्र नेव", noHistory: "कोई इतिहास नहीं", sort: "क्रम", sortDef: "डिफ़ॉल्ट", sortFast: "⚡ जल्दी", sortPrice: "💰 मूल्य", sortRating: "⭐ रेटिंग", diet: "आहार", filters: "फिल्टर", lastVisit: "अंतिम विज़िट", speak: "सुन रहा है...", submit: "जमा करें", cancel: "रद्द करें", thankyou: "प्रतिक्रिया के लिए धन्यवाद 🙏" },
  mr: { all: "सर्व", starter: "स्टार्टर", main: "मुख्य", bread: "भाकरी", dessert: "मिठाई", drinks: "पेय", search: "पदार्थ शोधा...", veg: "🌿 शाकाहारी", nonveg: "🍗 मांसाहारी", all2: "सर्व", bestsellers: "फक्त बेस्टसेलर", add: "जोडा", cart: "कार्ट", orderWA: "WhatsApp ऑर्डर", prep: "वेळ", cal: "कॅलरी", ingredients: "साहित्य", persons: "व्यक्ती", login: "लॉगिन", logout: "लॉगआउट", admin: "अॅडमिन", home: "होम", feedback: "अभिप्राय", noItems: "पदार्थ नाही.", fssai: "FSSAI प्रमाणित", openTill: "उघडे", map: "नकाशा", maxPrice: "कमाल किंमत", maxTime: "कमाल वेळ", back: "← परत", history: "इतिहास", quickNav: "जलद नेव", noHistory: "इतिहास नाही", sort: "क्रम", sortDef: "डिफॉल्ट", sortFast: "⚡ जलद", sortPrice: "💰 किंमत", sortRating: "⭐ रेटिंग", diet: "आहार", filters: "फिल्टर", lastVisit: "अखेरची भेट", speak: "ऐकत आहे...", submit: "सबमिट", cancel: "रद्द", thankyou: "अभिप्रायाबद्दल धन्यवाद 🙏" },
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

// 3. HISTORY PANEL UPDATE: Added the "Clear" button functionality
function HistoryPanel({ hist, restaurants, goToRestaurant, onClose, clearHistory, L }) {
  return (
    <div style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, background: "#fff", borderRadius: 16, boxShadow: "0 10px 40px rgba(0,0,0,0.2)", border: `1px solid ${T.saffron}33`, zIndex: 400, minWidth: 240, overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${T.saffron}22`, padding: "10px 14px 6px" }}>
        <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: T.warmGrey }}>{L.history}</div>
        {hist.length > 0 && (
          <button onClick={clearHistory} style={{ fontSize: 10, color: T.danger, background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>Clear</button>
        )}
      </div>

      {hist.length === 0 ? (
        <div style={{ padding: "14px", fontSize: 13, color: "#bbb" }}>{L.noHistory}</div>
      ) : (
        hist.slice().reverse().slice(0, 5).map((h, i) => {
          const r = restaurants.find((x) => x.id === h.restId);
          if (!r) return null;
          return (
            <button key={i} onClick={() => { goToRestaurant(h.restId); onClose(); }}
              style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "9px 14px", background: "none", border: "none", cursor: "pointer", textAlign: "left", borderBottom: `1px solid ${T.saffron}11` }}
              onMouseEnter={(e) => e.currentTarget.style.background = T.saffronLight}
              onMouseLeave={(e) => e.currentTarget.style.background = "none"}
            >
              <div style={{ width: 34, height: 34, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
                <ProgressiveImage src={r?.img} alt="" style={{ width: "100%", height: "100%" }} />
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
        <button key={r.id} onClick={() => { goToRestaurant(r.id); onClose(); }}
          style={{ width: "100%", display: "flex", alignItems: "center", gap: 9, padding: "8px 14px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
          onMouseEnter={(e) => e.currentTarget.style.background = T.saffronLight}
          onMouseLeave={(e) => e.currentTarget.style.background = "none"}
        >
          <div style={{ width: 32, height: 32, borderRadius: 7, overflow: "hidden", flexShrink: 0 }}>
            <ProgressiveImage src={r.img} alt={r.name} style={{ width: "100%", height: "100%" }} />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>{r.emoji} {r.name}</div>
            <div style={{ fontSize: 10, color: T.warmGrey }}>{r.cuisine} · ⭐{r.rating}</div>
          </div>
        </button>
      ))}
    </div>
  );
}

function Nav({ page, navigate, user, setUser, cart, lang, setLang, L, hist, clearHistory, restaurants, goToRestaurant }) {
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
          <button onClick={() => navigate("home")} style={{ background: "none", border: `1px solid ${T.saffron}55`, borderRadius: 9, padding: "5px 10px", fontSize: 12, fontWeight: 700, color: T.saffronDark, cursor: "pointer", flexShrink: 0 }}>
            {L.back}
          </button>
        )}
        <button onClick={() => navigate("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }}>
          <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 19, color: T.burgundy }}>Menu</span>
          <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 19, color: T.saffron }}>Genie</span>
          <span style={{ fontSize: 15 }}>🧞</span>
        </button>

        <div style={{ flex: 1, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6, justifyContent: "flex-end" }}>
          <select value={lang} onChange={(e) => setLang(e.target.value)} style={{ border: `1px solid ${T.saffron}44`, borderRadius: 8, padding: "4px 7px", fontSize: 12, background: "#fff", cursor: "pointer" }}>
            <option value="en">EN</option>
            <option value="hi">हि</option>
            <option value="mr">म</option>
          </select>
          <div style={{ position: "relative" }} ref={panelRef}>
            {btn(`🕐 ${L.history}${hist.length ? ` (${hist.length})` : ""}`, () => setHistOpen((o) => !o), histOpen, T.burgundy)}
            {histOpen && <HistoryPanel hist={hist} clearHistory={clearHistory} restaurants={restaurants} goToRestaurant={goToRestaurant} onClose={() => setHistOpen(false)} L={L} />}
          </div>
          {page !== "home" && (
            <button onClick={() => navigate("cart")} style={{ background: cartCount > 0 ? T.saffron : "#fff", color: cartCount > 0 ? "#fff" : T.saffron, border: `1px solid ${T.saffron}55`, borderRadius: 9, padding: "5px 11px", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
              🛒 {L.cart} {cartCount > 0 && <span style={{ background: "rgba(255,255,255,0.3)", borderRadius: 6, padding: "0 5px", fontSize: 10, fontWeight: 700 }}>{cartCount}</span>}
            </button>
          )}
          {user?.isAdmin && btn("⚙ Admin", () => navigate("admin"), page === "admin", T.burgundy)}
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

function Home({ restaurants, goToRestaurant, L, hist }) {
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
            <div style={{ marginTop: 14, display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", borderRadius: 10, padding: "7px 14px", cursor: "pointer" }} onClick={() => goToRestaurant(lastRest.id)}>
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
          <div key={r.id} onClick={() => goToRestaurant(r.id)} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: `1px solid rgba(0,0,0,0.07)`, boxShadow: "0 2px 14px rgba(0,0,0,0.06)", cursor: "pointer", transition: "transform 0.2s,box-shadow 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(0,0,0,0.12)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 14px rgba(0,0,0,0.06)"; }}>
            
            <div style={{ height: "180px", position: "relative" }}>
              <ProgressiveImage src={r.img} alt={r.name} style={{ width: "100%", height: "100%" }} />
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

function Menu({ rest, dishes, cart, setCart, user, lang, L, toast, navigate }) {
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
        <div style={{ height: "240px", overflow: "hidden", position: "relative" }}>
          <ProgressiveImage src={rest.img} alt={rest.name} style={{ width: "100%", height: "100%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 15%,rgba(28,20,16,0.92))" }} />
        </div>

        <div style={{ padding: "12px 16px 16px", background: `linear-gradient(${T.charcoal},#2D1A00)` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, color: "#fff", fontWeight: 700 }}>{rest.emoji} {rest.name}</h2>
              <p style={{ fontSize: 12, color: T.saffron, letterSpacing: 1, marginTop: 2 }}>{rest.cuisine} · {rest.area}, {rest.city}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 6, fontSize: 10, color: T.success, fontWeight: 600, background: "rgba(45,122,79,0.2)", borderRadius: 7, padding: "2px 9px", width: "fit-content" }}>✓ {L.fssai}: {rest.fssai}</div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: T.saffron }}>⭐ {rest.rating}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{rest.reviews} reviews</div>
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
        
        {/* 4. FIX FOR MOBILE SEARCH/MIC/FILTER OVERLAP */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "12px", alignItems: "center" }}>
          
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 7, background: T.cream, border: `1.5px solid ${listening ? T.saffron : T.saffron + "44"}`, borderRadius: 11, padding: "6px 12px" }}>
            <span style={{ color: "#bbb", flexShrink: 0 }}>🔍</span>
            {/* minWidth: 0 prevents the input from pushing the filter button off the screen */}
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={L.search} style={{ border: "none", outline: "none", flex: 1, fontSize: 14, background: "transparent", minWidth: 0 }} />
            <button onClick={startVoice} style={{ background: listening ? T.saffron : "transparent", border: `1px solid ${T.saffron}55`, borderRadius: 7, padding: "4px 8px", cursor: "pointer", fontSize: 14, flexShrink: 0, display: "flex" }}>{listening ? "🔴" : "🎤"}</button>
          </div>
          
          <button onClick={() => setShowFilters((f) => !f)} style={{ flexShrink: 0, background: showFilters ? T.burgundy : "#fff", color: showFilters ? "#fff" : T.burgundy, border: `1px solid ${T.burgundy}44`, borderRadius: 11, padding: "0 14px", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", height: "38px" }}>
            ⚙ {L.filters}
          </button>
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
              <div key={d.id} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: `1px solid rgba(0,0,0,0.06)`, boxShadow: "0 4px 16px rgba(0,0,0,0.04)", padding: "16px", display: "flex", gap: "14px" }}>
                
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                    <div style={{ width: 16, height: 16, borderRadius: 4, border: `1.5px solid ${d.veg ? T.success : T.danger}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: d.veg ? T.success : T.danger }} />
                    </div>
                    {d.popular && <span style={{ background: T.saffronLight, color: T.saffronDark, fontSize: 10, fontWeight: 800, padding: "2px 6px", borderRadius: 4, letterSpacing: 0.5, textTransform: "uppercase" }}>Bestseller</span>}
                  </div>

                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, lineHeight: 1.2, color: T.charcoal, marginBottom: 6, wordBreak: "break-word" }}>{nm(d, lang)}</h3>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: T.charcoal }}>₹{d.price}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                       <span style={{ color: "#F4C430", fontSize: 13 }}>{"★".repeat(Math.floor(d.rating))}</span>
                       <span style={{ fontSize: 12, color: T.warmGrey, fontWeight: 500 }}>({d.reviews})</span>
                    </div>
                  </div>

                  <p style={{ fontSize: 13, color: T.warmGrey, lineHeight: 1.45, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{dc(d, lang)}</p>
                  
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                    {d.allergens.map((a) => {
                      const [bg, col] = (allergenColor[a] || "#eee:#666").split(":");
                      return <span key={a} style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 6, background: bg, color: col, textTransform: "uppercase" }}>{a}</span>;
                    })}
                  </div>

                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
                      <div style={{ fontSize: 12, color: T.warmGrey, display: "flex", gap: 12, fontWeight: 500 }}>
                        <span>🔥 {Math.round(d.calories * persons)} cal</span>
                        <span>⏱ {d.prepTime} min</span>
                      </div>
                      <button onClick={() => setExpanded((p) => ({ ...p, [d.id]: !p[d.id] }))} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: T.saffron, fontWeight: 700, padding: 0 }}>
                        {expanded[d.id] ? "▾ Hide" : "▸ Details"}
                      </button>
                  </div>

                  {expanded[d.id] && (
                    <div style={{ marginTop: 12, padding: "12px", background: T.saffronLight, borderRadius: 10, fontSize: 12, color: T.charcoal, lineHeight: 1.6, borderLeft: `3px solid ${T.saffron}` }}>
                      <strong style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 0.5, color: T.saffronDark }}>Ingredients</strong><br />{d.ingredients}
                    </div>
                  )}
                </div>

                <div style={{ width: "120px", flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: "120px", height: "120px", borderRadius: "16px", overflow: "hidden", position: "relative", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                    <ProgressiveImage src={d.img} alt={nm(d, lang)} style={{ width: "100%", height: "100%" }} />
                  </div>
                  
                  <div style={{ marginTop: "-16px", zIndex: 2, width: "100%", display: "flex", justifyContent: "center" }}>
                    {qty === 0 ? (
                      <button onClick={() => add(d.id)} style={{ background: "#fff", color: T.success, border: `1px solid ${T.success}44`, cursor: "pointer", padding: "6px 20px", borderRadius: "8px", fontSize: 14, fontWeight: 800, boxShadow: "0 4px 10px rgba(0,0,0,0.06)", textTransform: "uppercase", width: "100px" }}>
                        Add
                      </button>
                    ) : (
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", border: `1px solid ${T.success}`, borderRadius: "8px", padding: "4px", boxShadow: "0 4px 10px rgba(0,0,0,0.06)", width: "100px" }}>
                        <button onClick={() => rem(d.id)} style={{ width: 26, height: 26, background: "none", border: "none", color: T.success, fontSize: 20, cursor: "pointer", fontWeight: 700, display:"flex", alignItems:"center", justifyContent:"center" }}>−</button>
                        <span style={{ fontWeight: 800, fontSize: 15, minWidth: 20, textAlign: "center", color: T.success }}>{qty}</span>
                        <button onClick={() => add(d.id)} style={{ width: 26, height: 26, background: "none", border: "none", color: T.success, fontSize: 20, cursor: "pointer", fontWeight: 700, display:"flex", alignItems:"center", justifyContent:"center" }}>+</button>
                      </div>
                    )}
                  </div>
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
            <button onClick={() => navigate("cart")} style={{ background: "#25D366", color: "#fff", border: "none", borderRadius: 10, padding: "8px 16px", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              View Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Cart({ cart, setCart, dishes, rest, L, navigate, lang }) {
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
          <button onClick={() => navigate("menu")} style={{ marginTop: 16, background: T.saffron, color: "#fff", border: "none", borderRadius: 12, padding: "12px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Browse Menu →</button>
        </div>
      ) : (
        <>
          {items.map(({ dish, qty }) => (
            <div key={dish.id} style={{ background: "#fff", borderRadius: 16, border: `1px solid rgba(0,0,0,0.07)`, marginBottom: 11, padding: "14px", display: "flex", flexWrap: "wrap", gap: 13, alignItems: "center" }}>
              <div style={{ width: 62, height: 62, borderRadius: 11, overflow: "hidden", flexShrink: 0 }}>
                <ProgressiveImage src={dish.img} alt={nm(dish, lang)} style={{ width: "100%", height: "100%" }} />
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

function Admin({ restaurants, setRestaurants, dishes, setDishes, toast }) {
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
      <p style={{ fontSize: 13, color: T.warmGrey, marginBottom: 18 }}>Manage restaurants and dishes.</p>

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
            <button onClick={saveRest} style={{ width: "100%", background: T.saffron, color: "#fff", border: "none", borderRadius: 10, padding: "11px", fontSize: 14, fontWeight: 700, cursor: "pointer", marginTop: 10 }}>{editRest ? "Update" : "Add"} Restaurant</button>
            {editRest && <button onClick={() => { setEditRest(null); setNr(blank); }} style={{ width: "100%", background: "none", border: "none", fontSize: 12, color: T.warmGrey, cursor: "pointer", marginTop: 8 }}>Cancel</button>}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {restaurants.map((r) => (
              <div key={r.id} style={{ background: "#fff", borderRadius: 13, padding: "12px 14px", border: `1px solid ${T.saffron}22`, display: "flex", gap: 11, alignItems: "center" }}>
                <div style={{ width: 42, height: 42, borderRadius: 9, overflow: "hidden", flexShrink: 0 }}>
                  <ProgressiveImage src={r.img} alt={r.name} style={{ width: "100%", height: "100%" }} />
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
            
            <button onClick={saveDish} style={{ width: "100%", background: T.saffron, color: "#fff", border: "none", borderRadius: 10, padding: "11px", fontSize: 14, fontWeight: 700, cursor: "pointer", marginTop: 10 }}>{editDish ? "Update" : "Add"} Dish</button>
            {editDish && <button onClick={() => { setEditDish(null); setNd(blankD); }} style={{ width: "100%", background: "none", border: "none", fontSize: 12, color: T.warmGrey, cursor: "pointer", marginTop: 8 }}>Cancel</button>}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: "80vh", overflowY: "auto" }}>
            {dishes.map((d) => (
              <div key={d.id} style={{ background: "#fff", borderRadius: 12, padding: "11px 13px", border: `1px solid ${T.saffron}22`, display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ width: 38, height: 38, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
                  <ProgressiveImage src={d.img} alt={d.name} style={{ width: "100%", height: "100%" }} />
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

export default function App() {
  const [page, setPage] = useState("home");
  const [restId, setRestId] = useState(null);
  const [user, setUser] = useState(null);
  
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("mg_cart") || "{}"));
  const [hist, setHist] = useState(() => JSON.parse(localStorage.getItem("mg_hist") || "[]"));
  
  const [lang, setLang] = useState("en");
  const [restaurants, setRestaurants] = useState(RESTS);
  const [dishes, setDishes] = useState(DISHES);
  
  const toast = useToast();
  const L = LABELS[lang] || LABELS.en;
  
  const activeRest = restaurants.find((r) => r.id === restId);

  useEffect(() => localStorage.setItem("mg_cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("mg_hist", JSON.stringify(hist)), [hist]);

  // CSS for Shimmer Animation
  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
      body{font-family:'DM Sans',sans-serif;background:#FDFAF5;-webkit-tap-highlight-color:transparent;}
      ::-webkit-scrollbar{width:4px}
      ::-webkit-scrollbar-thumb{background:#E8750A44;border-radius:4px}
      @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
    `;
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

  const clearHistory = useCallback(() => {
    setHist([]);
    localStorage.removeItem("mg_hist");
    toast.show("History cleared!");
  }, [toast]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash.startsWith("#/menu/")) {
        const id = parseInt(hash.replace("#/menu/", ""));
        setRestId(id);
        setPage("menu");
        
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + ", " + now.toLocaleDateString([], { month: "short", day: "numeric" });
        setHist((h) => {
          const filtered = h.filter((x) => x.restId !== id);
          return [...filtered, { restId: id, time }].slice(-10);
        });

      } else if (hash.startsWith("#/cart")) {
        setPage("cart");
      } else if (hash.startsWith("#/admin")) {
        setPage("admin");
      } else {
        setPage("home");
        setRestId(null);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const goToRestaurant = useCallback((id) => {
    window.location.hash = `#/menu/${id}`;
  }, []);

  const navigate = useCallback((p) => {
    if (p === "menu" && restId) {
      window.location.hash = `#/menu/${restId}`;
    } else if (p === "home") {
      window.location.hash = `#/`;
    } else {
      window.location.hash = `#/${p}`;
    }
  }, [restId]);

  return (
    <div style={{ minHeight: "100vh", background: "#FDFAF5" }}>
      <Nav page={page} navigate={navigate} user={user} setUser={setUser} cart={cart} lang={lang} setLang={setLang} L={L} hist={hist} clearHistory={clearHistory} restaurants={restaurants} goToRestaurant={goToRestaurant} />

      {page === "home" && <Home restaurants={restaurants} goToRestaurant={goToRestaurant} L={L} hist={hist} />}
      {page === "menu" && activeRest && <Menu rest={activeRest} dishes={dishes} cart={cart} setCart={setCart} user={user} lang={lang} L={L} toast={toast} navigate={navigate} />}
      {page === "cart" && <Cart cart={cart} setCart={setCart} dishes={dishes} rest={activeRest} L={L} navigate={navigate} lang={lang} />}
      {page === "admin" && user?.isAdmin && <Admin restaurants={restaurants} setRestaurants={setRestaurants} dishes={dishes} setDishes={setDishes} toast={toast} />}

      <Toasts toasts={toast.toasts} />
    </div>
  );
}