export type CategoryId = "home" | "clean" | "tech";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: CategoryId;
  categoryLabel: string;
  why: string;
  description: string;
  status: "interest";
  /** 材質 */
  materials: string;
  /** 使用場景 */
  scenes: string;
  /** 保養／注意，短 */
  care: string;
  /** 和晴室風格怎麼搭，1–2句 */
  styleNote: string;
};

export const CATEGORIES: Record<
  CategoryId,
  {
    id: CategoryId;
    label: string;
    path: string;
    lead: string;
    intro: string;
  }
> = {
  home: {
    id: "home",
    label: "小家居",
    path: "/collections/home/",
    lead: "木、霧面、陶瓷。把每天會碰到的小東西，放回你喜歡的位置。",
    intro:
      "進門、書桌、床邊——那些你每天都會碰到的小物。我們挑觸感舒服、顏色不搶戲的，讓歸位變得自然一點。",
  },
  clean: {
    id: "clean",
    label: "清潔",
    path: "/collections/clean/",
    lead: "清潔用具也可以好看一點、好抓一點。",
    intro:
      "洗碗、噴霧、收納清潔液。材質耐看、握感剛好，拿得出來、也願意天天用。",
  },
  tech: {
    id: "tech",
    label: "3C",
    path: "/collections/tech/",
    lead: "線材、支架、桌墊——讓桌面鬆一口氣。",
    intro:
      "充電線、支架、桌墊。少一點刺眼塑膠，多一點霧面與金屬的安靜感，桌面會比較好待。",
  },
};

export const products: Product[] = [
  {
    slug: "wood-matte-tray",
    name: "木質／霧面桌面小托盤",
    shortName: "木質霧面托盤",
    category: "home",
    categoryLabel: "小家居",
    why: "鑰匙、耳機、零錢——有個固定位置就輕鬆很多。",
    description:
      "進門或坐下時，隨手放下的那一小塊。木紋配霧面，東西有家了，桌面也不會散成一片。",
    status: "interest",
    materials: "天然木紋托盤底 × 霧面邊框，手感溫潤、邊緣圓潤不刮手。",
    scenes: "玄關、書桌一角、床頭櫃——進門或坐下時，習慣放下東西的地方。",
    care: "乾布輕拭即可；避免長時間浸水與強鹼清潔劑。",
    styleNote:
      "放在米白或淺木桌面上很自然。旁邊留一點空，托盤自己就夠好看，不必再堆裝飾。",
  },
  {
    slug: "cable-organizer-box",
    name: "線材收納盒（霧灰／米白）",
    shortName: "線材收納盒",
    category: "tech",
    categoryLabel: "3C",
    why: "充電線不再打結，打開抽屜也不再一團亂。",
    description:
      "霧灰、米白兩色。分格清楚，充電線、轉接頭各就各位，找線的時候會感謝自己。",
    status: "interest",
    materials: "霧面硬質外殼，內部分格可調；霧灰／米白兩色，不搶桌面與抽屜的視線。",
    scenes: "書桌抽屜、床頭櫃、工作桌下方——線與轉接頭常進出的地方。",
    care: "濕布輕擦外殼；分格內避免存放潮濕物品。",
    styleNote:
      "想低調就選米白，想讓盒子退一步就選霧灰。旁邊放鋁支架或磁吸理線器，感覺會比較一致。",
  },
  {
    slug: "ceramic-matte-pen-holder",
    name: "陶瓷／霧面筆筒",
    shortName: "陶瓷霧面筆筒",
    category: "home",
    categoryLabel: "小家居",
    why: "桌面少一點塑膠感，拿筆的時候也比較舒服。",
    description:
      "重量剛好、開口寬窄適中。霧面釉色安靜，放在書桌或工作台都不會搶視線。",
    status: "interest",
    materials: "陶瓷坯體、霧面釉；重量穩、開口圓潤，不刮筆身。",
    scenes: "書桌、工作台、書房一角——筆、尺、小剪刀固定歸位。",
    care: "乾布或微濕布擦拭；避免摔落與劇烈撞擊。",
    styleNote:
      "跟木托盤、淺色桌墊很合。只放常用的幾支筆，留白比塞滿更舒服。",
  },
  {
    slug: "glass-spray-bottle-set",
    name: "玻璃噴霧瓶組（透明／霧面）",
    shortName: "玻璃噴霧瓶組",
    category: "clean",
    categoryLabel: "清潔",
    why: "清潔液也可以好看一點、好抓一點。",
    description:
      "透明與霧面成組。分裝清潔液、澆花或噴霧，瓶身耐看、噴頭手感穩。",
    status: "interest",
    materials: "玻璃瓶身 × 霧面／透明兩款；噴頭手感穩、按壓回彈清楚。",
    scenes: "廚房水槽旁、浴室洗手台、陽台澆花——需要隨手噴一下的地方。",
    care: "使用後沖淨噴頭；避免強酸強鹼長時間浸泡瓶身標籤區。",
    styleNote:
      "透明跟霧面並排，看起來像一組小器物，而不只是清潔工具。水槽旁留一塊乾淨台面就很夠。",
  },
  {
    slug: "wood-silicone-brush",
    name: "木柄／矽膠清潔刷",
    shortName: "木柄矽膠清潔刷",
    category: "clean",
    categoryLabel: "清潔",
    why: "握感溫潤，洗碗時不刺手、也不那麼吵。",
    description:
      "木柄觸感溫潤，矽膠刷毛不刮傷鍋具。洗碗、洗杯，少一點刺耳與塑膠感。",
    status: "interest",
    materials: "天然木柄 × 食品級矽膠刷毛；不刮不鏽鋼與不沾鍋。",
    scenes: "水槽洗碗、洗杯、輕柔刷洗蔬果與餐具。",
    care: "用後晾乾；木柄避免長時間泡水，可偶爾擦少量護木油。",
    styleNote:
      "掛在水槽旁，或斜靠玻璃噴霧瓶。洗碗這件事，也可以安靜一點。",
  },
  {
    slug: "minimal-storage-jar",
    name: "極簡收納罐（米白）",
    shortName: "極簡收納罐",
    category: "home",
    categoryLabel: "小家居",
    why: "棉棒、夾子、小零件——有蓋、找得到，就安心。",
    description:
      "米白罐身、蓋口密合。浴室櫃或抽屜裡，小物有固定家，找得到、也關得住。",
    status: "interest",
    materials: "米白霧面罐身、密合蓋口；輕量但蓋合穩定。",
    scenes: "浴室櫃、化妝台抽屜、書桌小物區——棉棒、夾子、螺絲釘之類。",
    care: "濕布擦拭外殼；避免高溫與強刮。",
    styleNote:
      "多個並排時，留一點間距比塞滿舒服。跟陶瓷筆筒、木托盤同色系，櫃面會比較整齊。",
  },
  {
    slug: "aluminum-device-stand",
    name: "鋁合金手機／平板支架",
    shortName: "鋁合金支架",
    category: "tech",
    categoryLabel: "3C",
    why: "角度穩、桌面乾淨，開會跟追劇都剛好。",
    description:
      "鋁合金機身、可調角度。手機或平板立起來，不用再用手扶，開會跟追劇都方便。",
    status: "interest",
    materials: "鋁合金本體、霧面陽極處理；可調角度、底座防滑。",
    scenes: "書桌視訊、廚房看食譜、床邊追劇——需要空出手的時候。",
    care: "乾布輕拭；避免尖物刮傷霧面層。",
    styleNote:
      "霧面鋁跟磁吸理線器、淺色桌墊放一起，科技感但不刺眼。支架旁少放雜物就好。",
  },
  {
    slug: "woven-cable-gatherer",
    name: "編織／霧面線材集線器",
    shortName: "線材集線器",
    category: "home",
    categoryLabel: "小家居",
    why: "線不再垂落，床邊跟走道看起來清爽很多。",
    description:
      "編織與霧面材質。把垂落的線束起來，床邊、走道、桌腳會立刻清爽一截。",
    status: "interest",
    materials: "編織外層 × 霧面內芯；柔軟可彎、束線不傷皮。",
    scenes: "床邊充電線、走道延長線、桌腳垂線——視覺上最容易亂的那一截。",
    care: "可輕柔水洗晾乾；避免暴曬與高溫烘乾。",
    styleNote:
      "選跟牆面或床品接近的霧色，線束起來幾乎隱形。跟磁吸理線器一起用：一束一吸，整條線都比較乖。",
  },
  {
    slug: "minimal-desk-pad",
    name: "極簡鍵盤手腕墊／桌墊（淺色）",
    shortName: "鍵盤桌墊",
    category: "tech",
    categoryLabel: "3C",
    why: "長時間打字比較不痠，淺色也不搶鍵盤風采。",
    description:
      "淺色桌墊與手腕墊。長時間打字有支撐，顏色安靜，不搶鍵盤與螢幕的風采。",
    status: "interest",
    materials: "淺色細紋表面 × 防滑底；手腕墊軟硬適中、邊緣不起翹。",
    scenes: "長時間打字的書桌、居家工作台——鍵盤與滑鼠常駐的那一塊。",
    care: "微濕布輕擦；避免尖物劃傷與重油污。",
    styleNote:
      "淺色桌墊像桌面的底。上面再放木托盤、陶瓷筆筒、鋁支架，層次清楚卻不吵。",
  },
  {
    slug: "magnetic-cable-clip",
    name: "磁吸理線器（金屬霧面）",
    shortName: "磁吸理線器",
    category: "tech",
    categoryLabel: "3C",
    why: "一貼一吸，桌緣跟螢幕後面立刻整齊。",
    description:
      "金屬霧面、磁吸固定。充電線貼在桌緣或螢幕後方，一吸就定位，桌面不再垂線。",
    status: "interest",
    materials: "金屬霧面外殼、內建磁吸；可貼桌緣或螢幕後方金屬面。",
    scenes: "書桌桌緣、螢幕後方、床頭充電區——線最容易垂下來的地方。",
    care: "保持磁吸面清潔；撕貼時勿用力扯傷桌面塗層。",
    styleNote:
      "霧面金屬跟鋁支架很搭。線吸好之後，桌面只留必要的幾樣，看起來就會鬆很多。",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategoryId): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(
  product: Product,
  limit = 3
): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
