# 晴室 qingshi-web

靜態 Next.js 商店前台（App Router、`output: "export"`）。原始碼可在 GitHub 上直接編輯；透過 GitHub Pages 免費提供 HTTPS 靜態站。

## 為什麼這樣做

- **GitHub** — 可編輯原始碼、審 PR、保留歷史。
- **GitHub Pages** — 免費 HTTPS，部署靜態 `out/`（專案頁路徑為 `/{repo-name}/`）：https://i3unnyr0ck.github.io/qingshi-web/
- **之後** — 可移到 Cloudflare Pages 與／或自訂網域，不必重寫應用。
- **購物車與金流之後再加** — 自行接購物車 + 綠界／藍新（或類似方案）；不用 Shopify。

## 本機開發

```
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)。

## 建置

```
npm run build
```

靜態輸出在 `out/`。若要對應 GitHub Pages 的專案路徑，請用：

```
PAGES_BASE_PATH=/qingshi-web npm run build
# 或
PAGES_BASE_PATH=/qingshi-web ./node_modules/.bin/next build
```

## 部署到 GitHub Pages

1. 以 `PAGES_BASE_PATH=/qingshi-web` 建置，產出 `out/`。
2. **必須**在 `out/` 根目錄放入空的 `.nojekyll`（否則 Jekyll 會忽略 `_next/`，CSS／JS 會 404）。
3. 將 `out/` 內容推到 `gh-pages` 分支。

線上站點：https://i3unnyr0ck.github.io/qingshi-web/
