---
layout: ../../layouts/MdLayout.astro
title: 簡単なサイトの構築方法
description: AstroとMarkdownを使用して、静的なサイトを構築し、GitHub Pagesにデプロイする手順の備忘録。
---

Astroは静的サイト生成(SSG)を主としたフレームワークで、ビルド時にすべてのHTML, CSSを良しなに生成してくれるので、GitHub Pagesなどの静的サイトホスティングサービスなどでも利用できる[^1]。また、追加プラグインなしでMarkdownをHTMLに変換できるところも魅力である。

[^1]: AstroではSSRも利用できるが、GitHub Pagesでは使えないので、今回は使わない。SSRを利用したい場合、Cloudflare Workers、Vercelなどのサービスが必要となる。

このサイトもそれで作っている。ここではその手順について備忘録もかねて書く。

### 目次

## 筆者の環境

- Windows 11 25H2
- WSL (Debian 13)
- Node.js v24
- pnpm v10

## 環境構築

Node.jsのインストールなどは調べれば無限に出てくると思うので割愛。昨今はAIもありますし。fnmなどのNodeバージョン管理ツールを入れてから、それ経由でNode.jsをインストールすると良いらしい。筆者はVoltaを使ったが、なんかもうメンテナンス終了するらしいので、miseあたりに移行しようかと思っている。が、なかなか踏み出せていない。

必要なら、JavaScriptのパッケージマネージャーのインストールをする。付属のnpmを使うならインストールの必要はない。なお筆者はpnpmを使っている。

次にプロジェクトを作っていく。空のディレクトリを作る必要はなく、プロジェクトを置きたい親ディレクトリで、次のコマンドを実行する。

```bash
pnpm create astro@latest
```

するとCLIが起動する。プロジェクト名やテンプレートはお好きなように。この頃よく見るnpmパッケージ侵害とサプライチェーン攻撃のリスク対策を先にするため、`Install dependencies?` は `No` にしておく。最終的にGitHub Pagesにデプロイする為Gitリポジトリは作らないといけないので、`Initialize a new git repository?` は `Yes` としておくと楽。

```text
Where should we create your new project?
- ./'<project-name>'
How would you like to start your new project?
- A basic, helpful starter project
Install dependencies?
- No
Initialize a new git repository?
- Yes
```

完了するとAstroのプロジェクトディレクトリが出来上がってると思うので移動する。そうしたらインストールの前に `pnpm-workspace.yaml` を作成して

```bash
cd '<project-name>'
touch pnpm-workspace.yaml
```

以下の内容を書き込む。

```yaml
minimumReleaseAge: 2880
```

これでリリースから2880分 = 2日以上経過したパッケージしかインストールできなくなるので、サプライチェーン攻撃の可能性を幾分減らせる。と思う。

以上はpnpmでの対策だが、他のパッケージマネジャーにも似たような機能はあると思うので、各自調べてください。ほいだらインストール。

```bash
pnpm i
```

この際、`minimumReleaseAge` の制限に引っかかってインストールに失敗することがあるので、依存関係のバージョンを1つ下げて再試行、を成功するまで繰り返す。そしたら一旦開発サーバーを起動してみる。

```bash
pnpm run dev
```

を実行の後、`localhost:4321` にアクセスして、テンプレートが表示されたら環境構築は完了。

## ファイルを置く場所

既に `src` ディレクトリ内に色々おかれていると思う。エントリポイントとなるページは `pages` 内におく。それ以外は好きにおいていいが、`components`, `modules`, `styles`, `assets` などと分けると良いのかも。

ディレクトリ構造がそのままパスになる。例えば `pages/foo/bar.html` は `<basepath>/foo/bar` になる。ただし、`index.html` という名前の場合は、`index` を抜いた部分がパスになる。つまり `pages/foo/bar/index.html` も同じパスになる。また、HTMLの代わりにMarkdownを置くだけで、自動でビルド時にHTMLに変換してくれる。パスのルールはHTMLの場合と同じ。

## config

Astroの各種設定は主に `astro.config.mjs` 内に記述する。

例えば、devサーバーのポート番号はデフォルトで `4321` だが、これを `8000` とかに変えたいときは

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {     // [!code ++]
    port: 8000, // [!code ++]
  }             // [!code ++]
});
```

を追加すればよい。


## Tailwind CSS を入れる(オプション)

まず必要な依存関係をインストールする。

```bash
pnpm i -D tailwindcss @tailwindcss/vite
```

次に `astro.config.mjs` に次の設定を追加する。

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // [!code ++]

export default defineConfig({
  vite: {                     // [!code ++]
    plugins: [tailwindcss()], // [!code ++]
  }                           // [!code ++]
});
```

次に、`src/style` フォルダ(なければ作る)の中にCSSファイル(名前は何でもよい)を作成し、

```css
@import 'tailwindcss';
```


