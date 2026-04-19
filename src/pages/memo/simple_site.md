---
layout: ../../layouts/MdLayout.astro
title: 簡単なサイトの構築方法
description: AstroとMarkdown を使用して、静的なサイトを構築し、GitHub Pagesにデプロイする手順の備忘録。
---

AstroとMarkdownを使用して、静的なサイトを構築し、GitHub Pagesにデプロイする手順の備忘録。

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

次にプロジェクトを作っていく。空のディレクトリを作る必要はなく、プロジェクトを置きたい親ディレクトリで、次のコマンドを実行する。

```bash
pnpm create astro@latest
```

するとCLIウィザードが起動する。プロジェクト名やテンプレートはお好きなように。`Install dependencies?` は `No` にしておく。この頃よく見るnpmパッケージ侵害とサプライチェーン攻撃のリスク対策を先にするため。GitHub Pagesにデプロイするので、`Initialize a new git repository?` は `Yes` としておくと楽。

```bash
Where should we create your new project? ... ./<project-name>
How would you like to start your new project? ... A basic, helpful starter project
Install dependencies? ... No
Initialize a new git repository? ... No
```

完了するとAstroのプロジェクトディレクトリが出来上がってると思うので移動する。そうしたらインストールの**前**に `pnpm-workspace.yaml` を作成して

```bash
cd <project-name>
touch pnpm-workspace.yaml
```

以下の内容を書き込む。

```yaml pnpm-workspace.yaml
minimumReleaseAge: 2880
```

これでリリースから2880分 = 2日以上経過したパッケージしかインストールできなくなるので、サプライチェーン攻撃の可能性を幾分減らせる。と思う。

以上はpnpmでの対策だが、他のパッケージマネジャーにも似たような機能はあると思うので、各自調べてください。ほいだらインストールして開発サーバー起動。

```bash
pnpm i
pnpm dev
```



