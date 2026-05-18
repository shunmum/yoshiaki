export type Product = {
  category: "ワイン" | "ブドウ" | "キウイフルーツ" | "ジュース" | "ジャム";
  name: string;
  description: string;
  volume: string;
  season: string;
  price: string;
  sortOrder: number;
  visible: boolean;
};

export const products: Product[] = [
  {
    category: "ブドウ",
    name: "セットA（オリンピアのみ）",
    description:
      "香りと甘みのあるオリンピアを中心に、その時期の状態を見ながら畑からお届けします。",
    volume: "2kg / 4kg / 8kg単位",
    season: "8月下旬から10月上旬",
    price: "税込 3,348円/kgから",
    sortOrder: 10,
    visible: true
  },
  {
    category: "ブドウ",
    name: "セットB（その他セット）",
    description:
      "ブラックオリンピア、国立シードレス、サフォークレッド、ピアレスなど、出荷タイミングで最も旬のブドウを詰め合わせます。",
    volume: "2kg / 4kg / 8kg単位",
    season: "8月下旬から10月上旬",
    price: "税込 2,160円/kgから",
    sortOrder: 20,
    visible: true
  },
  {
    category: "キウイフルーツ",
    name: "軟毛種（ゴールド系）",
    description:
      "やわらかな香りと甘みを楽しめるゴールド系キウイ。収穫後、追熟の状態を見ながらご案内します。",
    volume: "5kgから / 贈答用は1.1kgから",
    season: "11月下旬から4月中旬",
    price: "税込 972円/kg",
    sortOrder: 30,
    visible: true
  },
  {
    category: "キウイフルーツ",
    name: "硬毛種（グリーン系）",
    description:
      "酸味と甘みのバランスがよいグリーン系キウイ。毎年の実りに合わせて畑からお届けします。",
    volume: "5kgから / 贈答用は1.1kgから",
    season: "11月下旬から4月中旬",
    price: "税込 864円/kg",
    sortOrder: 40,
    visible: true
  },
  {
    category: "ジュース",
    name: "ブドウジュース ミックス",
    description:
      "ブラックオリンピア、ワイングランドなどを使ったブドウジュース。果実の濃さをそのまま味わえます。",
    volume: "720ml / 300ml",
    season: "通年 / 在庫状況により",
    price: "税込 2,160円（720ml）/ 1,080円（300ml）",
    sortOrder: 50,
    visible: true
  },
  {
    category: "ジュース",
    name: "ブドウジュース ワイングランド",
    description:
      "ワイングランドを原料にしたブドウジュース。品種の個性が伝わる、落ち着いた味わいです。",
    volume: "720ml / 300ml",
    season: "通年 / 在庫状況により",
    price: "税込 2,160円（720ml）/ 1,080円（300ml）",
    sortOrder: 60,
    visible: true
  },
  {
    category: "ジャム",
    name: "キウイフルーツジャム",
    description:
      "キウイフルーツと有機砂糖でつくるジャム。キウイらしい酸味と香りを大切にしています。",
    volume: "200g",
    season: "通年 / 在庫状況により",
    price: "税込 864円",
    sortOrder: 70,
    visible: true
  },
  {
    category: "ワイン",
    name: "牧ノ庄赤葡萄酒 2022",
    description:
      "山梨市牧丘町産の小公子を使用した赤葡萄酒。460本生産の、リリース前ワインです。",
    volume: "720ml / アルコール分 13%",
    season: "通年 / 在庫状況により",
    price: "税込 6,050円",
    sortOrder: 80,
    visible: true
  },
  {
    category: "ワイン",
    name: "ブラックペガール 2021",
    description:
      "固有ぶどう品種ブラックペガールを野生酵母で仕込んだ自然派ワイン。無補糖、酸化防止剤無添加、無ろ過で瓶詰めしています。",
    volume: "750ml / アルコール分 12%",
    season: "通年 / 在庫状況により",
    price: "税込 3,850円",
    sortOrder: 90,
    visible: true
  },
  {
    category: "ワイン",
    name: "かおる&ブラックペガール 2018",
    description:
      "かおるとブラックペガールを合わせた一本。牧丘の畑で育ったぶどうの生命力を感じるワインです。",
    volume: "750ml / アルコール分 11%",
    season: "通年 / 在庫状況により",
    price: "税込 3,850円",
    sortOrder: 100,
    visible: true
  },
  {
    category: "ワイン",
    name: "かおる 2021",
    description:
      "山梨市牧丘町産の品種、かおるを使用。軽やかな香りと畑の個性を静かに楽しめるワインです。",
    volume: "750ml / アルコール分 11.8%",
    season: "通年 / 在庫状況により",
    price: "税込 3,850円",
    sortOrder: 110,
    visible: true
  },
  {
    category: "ワイン",
    name: "薔薇色葡萄酒 2018",
    description:
      "ワイングランドを使った薔薇色の葡萄酒。970本生産の、やわらかな色合いが印象的なワインです。",
    volume: "750ml / アルコール分 7.6%",
    season: "通年 / 在庫状況により",
    price: "税込 3,850円",
    sortOrder: 120,
    visible: true
  }
];

export const seasonRows = [
  { label: "ブドウ", season: "8月下旬から10月上旬" },
  { label: "キウイフルーツ", season: "11月下旬から4月中旬" },
  { label: "ジュース", season: "通年 / 在庫状況により" },
  { label: "ジャム", season: "通年 / 在庫状況により" },
  { label: "ワイン", season: "通年 / 在庫状況により" }
];
