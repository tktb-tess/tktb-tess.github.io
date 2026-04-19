---
layout: ../../layouts/MdLayout.astro
title: 簡単なサイトの構築方法
description: Astro と Markdown を使用して、静的なサイトを構築し、GitHub Pages にデプロイする手順の備忘録。
---

Astro と Markdown を使用して、静的なサイトを構築し、GitHub Pages にデプロイする手順の備忘録。

要はこのサイトの構築方法。

### 目次

## 筆者の環境

- Windows 11 25H2
- WSL (Debian 13)
- Node.js v24
- pnpm v10

## 環境構築

Node.jsのインストールなどは調べれば無限に出てくると思うので割愛。昨今はAIもありますし。fnmなどのNodeバージョン管理ツールを入れてから、それ経由でNode.jsをインストールすると良いらしい。筆者はVoltaを使ったが、なんかもうメンテナンス終了するらしいので、miseあたりに移行しようかと思っている。が、なかなか踏み出せていない。

必要なら、JavaScriptのパッケージマネージャーのインストールをする。付属のnpmを使うならインストールの必要はない。なお筆者はpnpmを使っている。

空のディレクトリを作る必要はなく、プロジェクトを置きたい親ディレクトリで、次のコマンドを実行する。

```bash
pnpm create astro@latest
```

するとCLIウィザードが起動する。言われたとおりにプロジェクト名を決めたり、テンプレートを決めたりする。recommendedでいいと思う。

```bash
Where should we create your new project? ./my-simple-site

How would you like to start your new project? - A basic, helpful starter project

Install dependencies? No
   git   Initialize a new git repository?
         No
      ◼  Sounds good! You can always run git init manually.

      ✔  Project initialized!
         ■ Template copied

  next   Liftoff confirmed. Explore your project!

         Enter your project directory using cd ./my-simple-site 
         Run pnpm dev to start the dev server. q + ENTER to stop.
         Add frameworks like react or tailwind using astro add.

         Stuck? Join us at https://astro.build/chat
```

完了するとAstroのプロジェクトディレクトリが出来上がってると思うので移動する。

```bash
cd <project-name>
```
