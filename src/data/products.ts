export type CategoryId =
  | "home"
  | "tools"
  | "kitchen"
  | "clean"
  | "tech"
  | "pet";

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
    lead: "木、霧面、陶瓷，還有擺設燈具。把每天會碰到的小東西，放回你喜歡的位置。",
    intro:
      "進門、書桌、床邊——托盤、收納，還有桌燈、小夜燈這類擺設燈具。我們挑觸感舒服、顏色不搶戲的，讓歸位變得自然一點。",
  },
  tools: {
    id: "tools",
    label: "小工具",
    path: "/collections/tools/",
    lead: "居家會用到的小工具，也可以好好握、好好放。",
    intro:
      "刮刀、夾子、掛架——日常會伸手的那些。木柄、霧面、簡約線條，用起來順手，放著也不刺眼。",
  },
  kitchen: {
    id: "kitchen",
    label: "廚房",
    path: "/collections/kitchen/",
    lead: "食器與餐具：每天碰三次，觸感值得認真一點。",
    intro:
      "飯碗、餐具、水瓶。陶瓷霧面、木柄、玻璃——吃飯這件事，也可以安靜一點。",
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
  pet: {
    id: "pet",
    label: "寵物",
    path: "/collections/pet/",
    lead: "貓狗的碗、墊、收納——跟家裡其他東西一樣安靜。",
    intro:
      "寵物用品也不必花花綠綠。霧面陶瓷、亞麻、簡約收納籃，跟你的小家居放一起也不突兀。",
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
  // —— 寵物 ——
  {
    slug: "matte-ceramic-pet-bowl",
    name: "霧面陶瓷寵物碗",
    shortName: "霧面陶瓷寵物碗",
    category: "pet",
    categoryLabel: "寵物",
    why: "吃飯的碗也可以安靜，不用花花綠綠。",
    description:
      "霧面釉、重量穩。貓狗吃飯時碗比較不易推跑，放在牆角或架上也跟小家居一樣低調。",
    status: "interest",
    materials: "陶瓷坯體、霧面釉；碗底防滑、邊緣圓潤。",
    scenes: "廚房一角、陽台、寵物專屬小角落——每天固定吃飯喝水的地方。",
    care: "溫水沖洗即可；避免劇烈撞擊與突然溫差。",
    styleNote:
      "選米白或淺灰，跟木托盤、收納籃放一起不會突兀。旁邊留一點空，進食區看起來比較乾淨。",
  },
  {
    slug: "linen-cat-scratch-pad",
    name: "亞麻貓抓板／睡墊",
    shortName: "亞麻貓抓睡墊",
    category: "pet",
    categoryLabel: "寵物",
    why: "抓跟睡可以同一個地方，顏色也不搶客廳。",
    description:
      "亞麻觸感、中性色。可以當抓板，也可以躺上去睡一下——放沙發旁或窗邊都自然。",
    status: "interest",
    materials: "亞麻布面 × 紙纖／紙板芯；中性霧色，邊緣車縫穩。",
    scenes: "沙發旁、窗邊陽光處、房間角落——貓常待的那一塊。",
    care: "表面可輕拍除毛；避免長時間潮濕與暴曬。",
    styleNote:
      "選跟沙發或地毯接近的霧色，幾乎融進空間。旁邊放個小玩具籃，角落就完整了。",
  },
  {
    slug: "leash-toy-basket",
    name: "簡約牽繩收納／狗玩具收納籃",
    shortName: "牽繩玩具收納籃",
    category: "pet",
    categoryLabel: "寵物",
    why: "牽繩、球、咬骨——有個籃子，玄關就不亂。",
    description:
      "開口寬、高度剛好。牽繩掛、玩具丟進去，出門前伸手就拿到，玄關看起來也清爽。",
    status: "interest",
    materials: "編織／霧面硬質籃身；輕量、邊緣圓潤不刮手。",
    scenes: "玄關、客廳角落、寵物進出門的動線旁。",
    care: "乾布或微濕布擦拭；編織款可輕柔拍塵。",
    styleNote:
      "跟木托盤、極簡收納罐同色系，玄關會比較整齊。籃子只放出門會用的，其餘收進櫃裡。",
  },
  // —— 燈具 ——
  {
    slug: "matte-desk-lamp",
    name: "霧面桌燈",
    shortName: "霧面桌燈",
    category: "home",
    categoryLabel: "燈具",
    why: "書桌需要一點光，但不需要刺眼。",
    description:
      "霧面燈罩、角度可微調。看書、工作剛好夠亮，光灑下來比較軟，不會搶桌面其他東西。",
    status: "interest",
    materials: "霧面金屬／樹脂燈罩 × 穩重底座；光線偏暖白、可微調角度。",
    scenes: "書桌、床頭小桌、工作台——需要定點照明的地方。",
    care: "關燈冷卻後乾布輕拭；避免水濺入燈頭。",
    styleNote:
      "霧面燈罩跟鋁支架、淺色桌墊很合。燈旁少放雜物，光自己就夠安靜。",
  },
  {
    slug: "paper-fabric-night-light",
    name: "紙／布質小夜燈",
    shortName: "紙布小夜燈",
    category: "home",
    categoryLabel: "燈具",
    why: "半夜起來，只要一點柔光就好。",
    description:
      "紙或布質燈罩，光透出來很軟。放床邊或走道，半夜起來不會被亮燈嚇到。",
    status: "interest",
    materials: "和紙／棉布燈罩 × 輕量底座；光線柔散、低瓦數。",
    scenes: "床頭、走道、嬰幼兒房——需要整夜微亮的地方。",
    care: "乾布輕拍除塵；避免水洗燈罩與高溫烘乾。",
    styleNote:
      "米白或淺麻色最自然。跟亞麻寢具、木床頭櫃放一起，夜燈幾乎隱形。",
  },
  {
    slug: "wood-base-mood-lamp",
    name: "木座氣氛燈",
    shortName: "木座氣氛燈",
    category: "home",
    categoryLabel: "燈具",
    why: "不是為了看清楚，是為了讓空間鬆一點。",
    description:
      "木座穩、燈罩安靜。傍晚開一盞，客廳或角落會有一點溫度，不必把大燈全打開。",
    status: "interest",
    materials: "天然木座 × 霧面／布質燈罩；光線偏暖、底座沉穩。",
    scenes: "客廳角落、沙發旁、玄關矮櫃——想留一點氣氛的地方。",
    care: "木座乾布輕拭，可偶爾擦少量護木油；燈罩冷卻後再清理。",
    styleNote:
      "木座跟木托盤、木柄餐具同語彙。旁邊留空，燈光自己會把角落撐起來。",
  },
  // —— 小工具 ——
  {
    slug: "wood-handle-scraper",
    name: "木柄刮刀／清潔小鏟",
    shortName: "木柄刮刀小鏟",
    category: "tools",
    categoryLabel: "小工具",
    why: "刮鍋、鏟縫隙——握起來溫潤，用完也好放。",
    description:
      "木柄觸感溫潤，刀刃／鏟面剛好。廚房刮鍋、窗縫清灰，伸手就順，掛起來也不難看。",
    status: "interest",
    materials: "天然木柄 × 不鏽鋼／矽膠鏟面；握感穩、邊緣不刮傷多數鍋具。",
    scenes: "廚房水槽旁、流理台抽屜、陽台清潔櫃——會隨手拿的小工具區。",
    care: "用後擦乾；木柄避免長時間泡水。",
    styleNote:
      "掛在木柄清潔刷旁邊，水槽區會比較一致。工具少而準，比塞滿一整排舒服。",
  },
  {
    slug: "matte-clip-set",
    name: "霧面收納夾組",
    shortName: "霧面收納夾組",
    category: "tools",
    categoryLabel: "小工具",
    why: "密封袋、備忘紙、充電線——夾一下就定位。",
    description:
      "霧面夾身、力道剛好。夾密封袋、備忘、線材，抽屜裡或冰箱門上都安靜好認。",
    status: "interest",
    materials: "霧面樹脂／金屬夾身；彈力適中、邊緣圓潤。",
    scenes: "冰箱門、抽屜、書桌——需要暫時固定小物的地方。",
    care: "濕布輕擦；避免用力扳超過開合角度。",
    styleNote:
      "選霧灰或米白，跟收納罐、線材盒同色系。夾子成組放小托盤裡，找得到也不散。",
  },
  {
    slug: "tool-wall-rack",
    name: "簡約工具掛架／捲尺收納",
    shortName: "工具掛架",
    category: "tools",
    categoryLabel: "小工具",
    why: "捲尺、剪刀、小工具——掛起來，抽屜就鬆了。",
    description:
      "牆上掛一排，常用小工具各有位子。捲尺、剪刀、鑰匙圈，伸手就拿到，桌面也不必堆。",
    status: "interest",
    materials: "霧面金屬／木質掛桿 × 可調掛鉤；安裝簡、承重穩。",
    scenes: "玄關牆、工作桌旁、儲藏室門內——小工具常進出的動線。",
    care: "乾布輕拭；鎖固件定期檢查是否鬆動。",
    styleNote:
      "掛架本身選低調霧色，掛上去的東西才是主角。旁邊留白，牆面不會顯得擠。",
  },
  // —— 廚房 ——
  {
    slug: "matte-ceramic-bowl-set",
    name: "霧面陶瓷飯碗組",
    shortName: "霧面陶瓷飯碗組",
    category: "kitchen",
    categoryLabel: "廚房",
    why: "每天捧三次，碗的觸感值得認真一點。",
    description:
      "霧面釉、碗口圓潤。盛飯、盛湯都剛好，疊起來不占空間，打開碗櫃也不刺眼。",
    status: "interest",
    materials: "陶瓷坯體、霧面釉；成組尺寸一致、碗底穩。",
    scenes: "日常用餐、一人食、小家庭餐桌——每天會用到的碗。",
    care: "可洗碗機（視標示）；避免空燒與劇烈溫差。",
    styleNote:
      "米白或淺灰最百搭。跟木柄餐具、玻璃水瓶同桌，層次清楚卻不吵。",
  },
  {
    slug: "wood-handle-cutlery",
    name: "木柄餐具組",
    shortName: "木柄餐具組",
    category: "kitchen",
    categoryLabel: "廚房",
    why: "刀叉勺握起來溫潤，餐桌也少一點冰冷感。",
    description:
      "木柄配霧面金屬。吃飯時手感舒服，收進抽屜或插在罐裡都好看。",
    status: "interest",
    materials: "天然木柄 × 不鏽鋼餐具頭；握感圓潤、銜接穩固。",
    scenes: "日常餐桌、一人食、野餐小包——會隨身或常拿的那組。",
    care: "手洗後擦乾木柄；避免長時間浸泡與洗碗機高溫（視標示）。",
    styleNote:
      "跟霧面飯碗、木托盤很合。餐桌只放要用的幾支，留白比擺滿舒服。",
  },
  {
    slug: "glass-water-carafe",
    name: "玻璃水瓶／壺",
    shortName: "玻璃水瓶壺",
    category: "kitchen",
    categoryLabel: "廚房",
    why: "桌上放一壺水，看起來清爽，倒起來也順。",
    description:
      "透明玻璃、壺嘴好倒。冰水或常溫水都適合，放餐桌或書桌，像一件小器物。",
    status: "interest",
    materials: "耐熱／日常玻璃 × 可選木蓋或玻璃蓋；壺嘴導流清楚。",
    scenes: "餐桌、書桌、床頭——希望隨時有水可倒的地方。",
    care: "溫水沖洗；避免驟冷驟熱與撞擊。",
    styleNote:
      "透明玻璃跟霧面碗、木柄餐具並排，材質對話清楚。旁邊放個水杯就夠，不必再堆。",
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
