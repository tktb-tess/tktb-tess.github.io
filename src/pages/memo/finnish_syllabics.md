---
layout: ../../layouts/MdLayout.astro
title: フィンランド語 syllabics 表記
---

[戻る](/memo/)

## 目次

## 短母音

短母音は以下のように表す。なお C は任意の子音を表す。

| ＼             | Ca, Cä | Ce  | Ci  | Co, Cö | Cu, Cy | C                |
| -------------- | ------ | --- | --- | ------ | ------ | ---------------- |
| ∅              | ᐊ      | ᐁ   | ᐃ   | ᐅ      | ᐅᑊ     | \-               |
| p              | ᐸ      | ᐯ   | ᐱ   | ᐳ      | ᐳᑊ     | ᑉ                |
| b<sup>1</sup>  | ᑄ      | ᐺ   | ᐼ   | ᑀ      | ᑀᑊ     | \-               |
| t              | ᑕ      | ᑌ   | ᑎ   | ᑐ      | ᑐᑊ     | ᑦ                |
| d              | ᕦ      | ᕞ   | ᕠ   | ᕤ      | ᕤᑊ     | ᕪ                |
| k              | ᑲ      | ᑫ   | ᑭ   | ᑯ      | ᑯᑊ     | ᒃ                |
| m              | ᒪ      | ᒣ   | ᒥ   | ᒧ      | ᒧᑊ     | ᒻ                |
| n              | ᓇ      | ᓀ   | ᓂ   | ᓄ      | ᓄᑊ     | ᓐ, ᒡ<sup>3</sup> |
| g<sup>1</sup>  | ᒐ      | ᒉ   | ᒋ   | ᒍ      | ᒍᑊ     | \-               |
| ng<sup>2</sup> | ᒡᒐ     | ᒡᒉ  | ᒡᒋ  | ᒡᒍ     | ᒡᒍᑊ    | \-               |
| s              | ᓴ      | ᓭ   | ᓯ   | ᓱ      | ᓱᑊ     | ᔅ                |
| h              | ᕹ      | ᕴ   | ᕵ   | ᕷ      | ᕷᑊ     | ᕻ                |
| l              | ᓚ      | ᓓ   | ᓕ   | ᓗ      | ᓗᑊ     | ᓪ                |
| r              | ᕋ      | ᕂ   | ᕆ   | ᕈ      | ᕈᑊ     | ᕐ                |
| v              | ᕙ      | ᕓ   | ᕕ   | ᕗ      | ᕗᑊ     | (ᕝ)              |
| j              | ᔭ      | ᔦ   | (ᔨ) | ᔪ      | ᔪᑊ     | (ᔾ)              |

1. 主に外来語などに現れる。
2. 文頭には現れない。
3. g, kの前

- 1文字で子音 \+ 母音を表す。
- 子音のみを表記する場合は Ca の文字を上に小書きする。
- Cu, Cy の文字は対応する Co, Cö の文字に「ᑊ」（U\+144A）を付ける。
- 長母音は上に点を付ける。（例: “ᕖᓯ” *viisi*）Ce の長音は右側に「˙」（U\+02D9）を付ける。

## 母音調和記号

上の文字で対応する母音が2つあるものは、単語の先頭に front 記号「ᐢ」があれば前舌（ä, ö, y）、なにも無いか back 記号「ᐡ」があれば後舌（a, o, u）である。

i, e のみの単語にも front 記号が付く。外来語などで途中で変わる場合は、その直前に記号を入れる。複合語の場合は、各要素の境界に入れる。

|       | 記号 |
| ----- | ---- |
| front | ᐢ    |
| back  | ᐡ    |

例:

| Latin | Syllabics |
| ----- | --------- |
| yksi  | ᐢᐅᑊᒃᓯ     |
| kaksi | ᑲᒃᓯ       |

## 二重母音

オフグライドが :ipa[/\_i̯/] のものは「ᔾ」を、:ipa[/\_u̯/], :ipa[/\_y̯/] であるものは「ᕝ」を文字の右上に置く。  
:ipa[/\_u̯/] と :ipa[/\_y̯/] の区別は上に示したものと同様に母音調和記号で区別する。

また、opening 二重母音 :ipa[/ie̯/], :ipa[/uo̯/], :ipa[/yø̯/] はそれぞれ Ce と Co の文字の右上に「ᐦ」（U\+1426）を置いて表す。

<div class="[&_:where(td:first-child)]:font-ipa">

| IPA          | 記号    |
| ------------ | ------- |
| /\_u̯/, /\_y̯/ | ᕝ       |
| /\_i̯/        | ᔾ       |
| /ie̯/         | Ce \+ ᐦ |
| /uo̯/, /yø̯/   | Co \+ ᐦ |

</div>

これ以外の二重母音は「ᐊ」などを用い母音連続として表記する。

例:

| Latin  | Syllabics |
| ------ | --------- |
| nainen | ᓇᔾᓀᓐ      |
| köysi  | ᐢᑯᕝᓯ      |
| suomi  | ᓱᐦᒥ       |

## 例 単語・連語

| Latin        | Syllabics |
| ------------ | --------- |
| Suomen kieli | ᓱᐦᒣᓐ ᐢᑫᐦᓕ |
| salmiakki    | ᓴᓪᒥᐊᒃᑭ    |

## 例文

### 「世界人権宣言 第1条」

ᐃᕻᒥᓱᔾᑫᕝᒃᓭᐦᓐ ᐢᐅᑊᓓᔾᔅᐡᒫᐃᓪᒪᓪᓕᓀᓐ ᔪᑊᓕᔅᑐᑊᔅ 1 ᐊᕐᑎᒃᓚ

ᑲᔾᒃᑭ ᐢᐃᕻᒥᓭᑦ ᐢᓱᑊᓐᑐᑊᕙᑦ ᕙᐸᔾᓇ ᔭ ᐢᐅᑊᕻᕞᓐᐡᕓᕐᑕᔾᓯᓇ ᐊᕐᕗᓪᑖᓐ ᔭ ᐅᔾᑫᕝᒃᓯᓪᑖᓐ.  
ᐢᕴᔾᓪᓓ ᐅᓐ ᐊᓐᓀᑦᑐᑊ ᐢᔭᕐᑭ ᔭ ᐅᒪᑐᑊᓐᑐ, ᔭ ᐢᕴᔾᕦᓐ ᐅᓐ ᑐᔾᒥᑦᑕᕙ ᑐᔾᓯᐋᓐ ᑯᕻᑖᓐ ᐢᕓᓪᔦᕝᕞᓐ ᐢᕴᒡᒉᔅᓴ.

----

Ihmisoikeuksien yleismaailmallinen julistus 1 artikla

Kaikki ihmiset syntyvät vapaina ja yhdenvertaisina arvoltaan ja oikeuksiltaan.  
Heille on annettu järki ja omatunto, ja heidän on toimittava toisiaan kohtaan veljeyden hengessä.

### Eino Kettunen - Ievan Polkka 最初 & スキャット

ᓄᑊᐊᐳᑊᕆᔅᑕ ᑰᑊᓗᑊ ᐢᓭ ᐳᓗᑲᓐ ᑕᕻᑎ  
ᔭᓚᑲᓂ ᐳᕻᔩ ᑯᑊᑦᑯᑊᑦᑎ  
ᐁᐦᕙᓐ ᐢᐊᔾᑎ ᐢᓭ ᐢᑐᑊᑦᑑᓴ ᕙᕻᑎ  
ᕚᓐ ᐢᑯᑊᓪᓚᕹᓐ ᐁᐦᕙ ᐢᓭᓐ ᔪᑊᑦᑯᑊᑦᑎ  
ᐢᓯᓪᓚ ᐢᐁᔾ ᐢᒣᔾᑕ ᓯᓪᓗᔾᓐ ᑫᐦᓪᓗᑦ ᕹᔾᑦᑖ  
ᑯᑊᓐ ᐢᒧᐦ ᑕᓐᔅᓯᒻᒣ ᓚᔾᐊᔅᑕ ᓚᔾᑖᓐ  
ᓴᓕᕕᓕ ᕵᑉᐳᑊᑦ ᑐᑊᑉᐳᑊᑦ ᐢᑕᑉᐳᑊᑦ  
ᐢᐊᑉᐳᑊᑦ ᑎᑉᐳᑊᑦ ᕵᓕᔭᓪᓓ˙ᓐ

ᔭᑦᓴᑦᓴ ᑄᕆᓪᓚᔅ ᕠᓪᓚ  
ᓚᐸᕞᔾᐊᓐ ᕤᑊᓪᓚᓐ ᕞᔾᐊᓐ ᕥ  
ᔪᐸᕆᒻᑄ ᑄᕦᑄᕞᔾᐊ ᔅᑐᑊᓪᓚ  
ᓚᑄ ᕦᑄ ᕦᑄ ᕤᑊᔭᓐ ᕠᓪᓚᓐᕤᑊ  
ᑄᕆᓪᓚᔅ ᕠᓪᓚ ᕞᔾᐊᕥᑊ ᑄᕦᑄ  
ᕦᒐ ᕦᒐ ᕦᒐ ᕦᒐ ᕤᑊᔭᕥᑊ  
ᑄᕤᑊ ᕤᑊᐼ ᕤᑊᐼ ᕤᑊᐼ ᕞᔭᕥᑊ  
ᑄᕦᑄ ᕠᓪᓚᔅ ᕠᓪᓚᓐ ᕞᔭᕥᑊ

----

Nuapurista kuulu se polokan tahti  
jalakani pohjii kutkutti  
Ievan äiti se tyttöösä vahti  
vaan kyllähän Ieva sen jutkutti  
Sillä ei meitä silloin kiellot haittaa  
Kun myö tanssimme laiasta laitaan  
Salivili hipput tupput täppyt  
äppyt tipput hilijalleen

Jatsatsa barillas dilla  
lapadeian dullan deian doo  
Joparimba badabadeia stulla  
Laba daba daba dujan dillandu  
Barillas dilla deiaduu badaba  
daga daga daga daga dujaduu  
Badu dubi dubi dubi dejaduu  
Badaba dillas dillan dejaduu

