const LANGS = [
    // 言語リスト
    { id: 'ja', name: '日本語' },
    { id: 'en', name: 'English' },
    { id: 'zh-TW', name: '中文（繁體）' },
    { id: 'zh-CH', name: '中文（简体）in progress..' },
    { id: 'ko', name: '한국어 in progress..' },
//    { id: 'fr', name: 'français' },
//    { id: 'de', name: 'Deutsch' },
];

// メモ：
// この中文は繁体＝zh-cmn-Hantでは？　しかしGoogleではzh-TWとなっている。
// → 簡体＝zh-cmn-Hansも作るべきでは？　しかしGoogleではzh-CHとなっている。
// → 中国語版クライアントでは繁体・簡体のどちらが使われているのか要確認。
// （実際のところどちらでも問題なく読めるのだろうか？）
// 灰海がそれぞれ違うフォントのはずなのに同じ文字に見える？？

// 中文はChocobo鯖のRondo Grantさんに作ってもらいました。
// EnglishはChocobo鯖のPaca Kumaさんに添削してもらいました。

const WORDS = {
    // 翻訳辞書
    'title': {
        'ja': '潜水艦ツクール',
        'en': 'Submersible Maker',
        'zh-TW': '潛水艇模擬器',
        'zh-CH': '潜水艇模拟器',
        'ko': '잠수정 메이커',
        'fr': 'Fabricant submersible',
        'de': 'Tauchmacher',
    },

    'class': {
        'ja': '級',
        'en': 'Class',
        'zh-TW': '級',
        'zh-CH': '级',
        'ko': '클래스',
        'fr': '',
        'de': '',
    },
    'preferences': {
        'ja': 'パーツ',
        'en': 'Preferences',
        'zh-TW': '部件',
        'zh-CH': '部件',
        'ko': '부품',
        'fr': '',
        'de': '',
    },
    'all': {
        'ja': '全て',
        'en': 'All',
        'zh-TW': '全部',
        'zh-CH': '全部',
        'ko': '모두',
        'fr': '',
        'de': '',
    },
    'normal': {
        'ja': '旧パーツ全て',
        'en': 'Normal',
        'zh-TW': '一般部件全部',
        'zh-CH': '一般部件全部',
        'ko': '표준',
        'fr': '',
        'de': '',
    },
    'modified': {
        'ja': '改級パーツ全て',
        'en': 'Modified',
        'zh-TW': '改級部件全部',
        'zh-CH': '改级部件全部',
        'ko': '수정 됨',
        'fr': '',
        'de': '',
    },

    'rank': {
        'ja': 'ランク',
        'en': 'Rank',
        'zh-TW': '等級',
        'zh-CH': '等级',
        'ko': '계급',
        'fr': '',
        'de': '',
    },
    'filter': {
        'ja': 'フィルタ',
        'en': 'Filter',
        'zh-TW': '篩選',
        'zh-CH': '筛选',
        'ko': '필터',
        'fr': '',
        'de': '',
    },
    'preset': {
        'ja': 'プリセット',
        'en': 'Preset',
        'zh-TW': '預設',
        'zh-CH': '预设',
        'ko': '사전 설정',
        'fr': '',
        'de': '',
    },
    'reset': {
        'ja': 'リセット',
        'en': 'Reset',
        'zh-TW': '重新設定',
        'zh-CH': '重新设定',
        'ko': '초기화',
        'fr': '',
        'de': '',
    },
    'comment': {
        'ja': '説明',
        'en': 'Description',
        'zh-TW': '說明',
        'zh-CH': '说明',
        'ko': '기술',
        'fr': '',
        'de': '',
    },
    'default comment': {
        'ja': 'ここに説明が出ます。',
        'en': 'Description here.',
        'zh-TW': '解說在這裡',
        'zh-CH': '解说在这里',
        'ko': '여기에 설명이 나옵니다.',
        'fr': '',
        'de': '',
    },

    'list': {
        'ja': '構成一覧',
        'en': 'Results',
        'zh-TW': '組成一覽',
        'zh-CH': '组成一览',
        'ko': '구성 목록',
        'fr': '',
        'de': '',
    },
    'nomatch': {
        'ja': '条件を満たす組み合わせが存在しません。',
        'en': 'No match there.',
        'zh-TW': '沒辦法組出這個條件的組合。',
        'zh-CH': '组成一览',
        'ko': '조건을 만족하는 조합이 존재하지 않습니다.',
        'fr': '',
        'de': '',
    },
    'found': {
        'ja': 'パターンありました。',
        'en': 'submersibles are found.',
        'zh-TW': '找到這個部件了.',
        'zh-CH': '找到这个部件了',
        'ko': '패턴있었습니다.',
        'fr': '',
        'de': '',
    },
    'too many': {
        'ja': '組み合わせが多すぎて表示できません。',
        'en': 'There are too many submersibles to show all.',
        'zh-TW': '組合有太多種了無法顯示。',
        'zh-CH': '组合有太多种了无法显示。',
        'ko': '조합이 너무 많아서 표시 할 수 없습니다.',
        'fr': '',
        'de': '',
    },
    'show all': {
        'ja': '無理矢理表示する！（重い）',
        'en': 'Show all!! (CAUTION: LAGGY!!!)',
        'zh-TW': '我全都要!! (電腦哀號)',
        'zh-CH': '我全都要!! (电脑哀号)',
        'ko': '모두보기!（컴퓨터 통곡）',
        'fr': '',
        'de': '',
    },
    'hide': {
        'ja': '縮小表示に戻す。',
        'en': 'Back to limited mode.',
        'zh-TW': '變回精簡模式',
        'zh-CH': '变回精简模式。',
        'ko': '압축 모드로 다시 변경',
        'fr': '',
        'de': '',
    },
    'copy': {
        'ja': 'チェックしたデータをコピーする。',
        'en': 'Copy checked submersibles.',
        'zh-TW': '複製選取的資料。',
        'zh-CH': '复制选取的资料。',
        'ko': '체크 된 데이터를 복사한다.',
        'fr': '',
        'de': '',
    },
    'copied': {
        'ja': 'コピーしました！',
        'en': 'Copied!',
        'zh-TW': '複製完成!',
        'zh-CH': '复制完成!',
        'ko': '복사했습니다!',
        'fr': '',
        'de': '',
    },

    'hull': {
        'ja': '艦体',
        'en': 'Hull',
        'zh-TW': '船體',
        'zh-CH': '船体',
        'ko': '선체',
        'fr': '',
        'de': '',
    },
    'stern': {
        'ja': '艦尾',
        'en': 'Stern',
        'zh-TW': '船尾',
        'zh-CH': '船尾',
        'ko': '함미',
        'fr': '',
        'de': '',
    },
    'bow': {
        'ja': '艦首',
        'en': 'Bow',
        'zh-TW': '船首',
        'zh-CH': '船首',
        'ko': '잠수함 목',
        'fr': '',
        'de': '',
    },
    'bridge': {
        'ja': '艦橋',
        'en': 'Bridge',
        'zh-TW': '艦橋',
        'zh-CH': '舰桥',
        'ko': '함교',
        'fr': '',
        'de': '',
    },

    'cost': {
        'ja': 'パーツコスト',
        'en': 'Components',
        'zh-TW': '配件重量',
        'zh-CH': '配件重量',
        'ko': '구성품',
        'fr': '',
        'de': '',
    },
    'surveillance': {
        'ja': '探査性能',
        'en': 'Surveillance',
        'zh-TW': '探索性能',
        'zh-CH': '探索性能',
        'ko': '탐사 성능',
        'fr': '',
        'de': '',
    },
    'retrieval': {
        'ja': '収集性能',
        'en': 'Retrieval',
        'zh-TW': '收集性能',
        'zh-CH': '收集性能',
        'ko': '수집 성능',
        'fr': '',
        'de': '',
    },
    'speed': {
        'ja': '巡航速度',
        'en': 'Speed',
        'zh-TW': '巡航速度',
        'zh-CH': '巡航速度',
        'ko': '순항 속도',
        'fr': '',
        'de': '',
    },
    'range': {
        'ja': '航続距離',
        'en': 'Range',
        'zh-TW': '航行距離',
        'zh-CH': '航行距离',
        'ko': '항속 거리',
        'fr': '',
        'de': '',
    },
    'favor': {
        'ja': '運',
        'en': 'Favor',
        'zh-TW': '恩惠（運氣）',
        'zh-CH': '恩惠（运气）',
        'ko': '운',
        'fr': '',
        'de': '',
    },

    'cst': {
        'ja': 'Cost',
        'en': 'Cost',
        'zh-TW': 'Cost',
        'zh-CH': 'Cost',
        'ko': 'Cost',
        'fr': '',
        'de': '',
    },
    'srv': {
        'ja': '探査',
        'en': 'Srv',
        'zh-TW': '探索',
        'zh-CH': '探索',
        'ko': '탐사',
        'fr': '',
        'de': '',
    },
    'rtr': {
        'ja': '収集',
        'en': 'Rtr',
        'zh-TW': '收集',
        'zh-CH': '收集',
        'ko': '수집',
        'fr': '',
        'de': '',
    },
    'spd': {
        'ja': '速度',
        'en': 'Spd',
        'zh-TW': '速度',
        'zh-CH': '速度',
        'ko': '속도',
        'fr': '',
        'de': '',
    },
    'rng': {
        'ja': '距離',
        'en': 'Rng',
        'zh-TW': '距離',
        'zh-CH': '距离',
        'ko': '거리',
        'fr': '',
        'de': '',
    },
    'fvr': {
        'ja': '運',
        'en': 'Fav',
        'zh-TW': '運',
        'zh-CH': '运',
        'ko': '운',
        'fr': '',
        'de': '',
    },

    'shark': {
        'ja': 'シャーク',
        'en': 'Shark',
        'zh-TW': '鯊魚',
        'zh-CH': '鲨鱼',
        'ko': '상어',
        'fr': '',
        'de': '',
    },
    'unkiu': {
        'ja': 'ウンキウ',
        'en': 'Unkiu',
        'zh-TW': '甲鱉',
        'zh-CH': '甲鳖',
        'ko': 'Unkiu???',
        'fr': '',
        'de': '',
    },
    'whale': {
        'ja': 'ホエール',
        'en': 'Whale',
        'zh-TW': '鬚鯨',
        'zh-CH': '须鲸',
        'ko': '고래',
        'fr': '',
        'de': '',
    },
    'coelacanth': {
        'ja': 'シーラカンス',
        'en': 'Coelacanth',
        'zh-TW': '腔棘魚',
        'zh-CH': '腔棘鱼',
        'ko': '실러캔스',
        'fr': '',
        'de': '',
    },
    'syldra': {
        'ja': 'シルドラ',
        'en': 'Syldra',
        'zh-TW': '希爾德拉',
        'zh-CH': '希尔德拉',
        'ko': 'Syldra???',
        'fr': '',
        'de': '',
    },
    'modified shark': {
        'ja': 'シャーク改',
        'en': 'M-Shark',
        'zh-TW': '鯊魚改',
        'zh-CH': '鲨鱼改',
        'ko': 'M-Shark???',
        'fr': '',
        'de': '',
    },
    'modified unkiu': {
        'ja': 'ウンキウ改',
        'en': 'M-Unkiu',
        'zh-TW': '甲鱉改',
        'zh-CH': '甲鳖改',
        'ko': 'M-Unkiu???',
        'fr': '',
        'de': '',
    },
    'modified whale': {
        'ja': 'ホエール改',
        'en': 'M-Whale',
        'zh-TW': '鬚鯨改',
        'zh-CH': '须鲸改',
        'ko': 'M-Whale???',
        'fr': '',
        'de': '',
    },
    'modified coelacanth': {
        'ja': 'シーラカンス改',
        'en': 'M-Coelacanth',
        'zh-TW': '腔棘魚改',
        'zh-CH': '腔棘鱼改',
        'ko': 'M-Coelacanth???',
        'fr': '',
        'de': '',
    },
    'modified syldra': {
        'ja': 'シルドラ改',
        'en': 'M-Syldra',
        'zh-TW': '希爾德拉改',
        'zh-CH': '希尔德拉改',
        'ko': 'M-Syldra???',
        'fr': '',
        'de': '',
    },

    'sha': {
        'ja': 'シャ',
        'en': 'S',
        'zh-TW': '鯊',
        'zh-CH': '鲨',
        'ko': 'S?',
        'fr': '',
        'de': '',
    },
    'un': {
        'ja': 'ウン',
        'en': 'U',
        'zh-TW': '鱉',
        'zh-CH': '鳖',
        'ko': 'U?',
        'fr': '',
        'de': '',
    },
    'wha': {
        'ja': 'ホエ',
        'en': 'W',
        'zh-TW': '鯨',
        'zh-CH': '鲸',
        'ko': 'W?',
        'fr': '',
        'de': '',
    },
    'coe': {
        'ja': 'シー',
        'en': 'C',
        'zh-TW': '棘',
        'zh-CH': '棘',
        'ko': 'C?',
        'fr': '',
        'de': '',
    },
    'syl': {
        'ja': 'シル',
        'en': 'S',
        'zh-TW': '希',
        'zh-CH': '希',
        'ko': 'S?',
        'fr': '',
        'de': '',
    },
    'm-sha': {
        'ja': 'ｼｬ改',
        'en': 'S+',
        'zh-TW': '鯊改',
        'zh-CH': '鲨改',
        'ko': 'S+?',
        'fr': '',
        'de': '',
    },
    'm-un': {
        'ja': 'ｳﾝ改',
        'en': 'U+',
        'zh-TW': '鱉改',
        'zh-CH': '鳖改',
        'ko': 'U+?',
        'fr': '',
        'de': '',
    },
    'm-wha': {
        'ja': 'ﾎｴ改',
        'en': 'W+',
        'zh-TW': '鯨改',
        'zh-CH': '鲸改',
        'ko': 'W+?',
        'fr': '',
        'de': '',
    },
    'm-coe': {
        'ja': 'ｼｰ改',
        'en': 'C+',
        'zh-TW': '棘改',
        'zh-CH': '棘改',
        'ko': 'C+?',
        'fr': '',
        'de': '',
    },
    'm-syl': {
        'ja': 'ｼﾙ改',
        'en': 'S+',
        'zh-TW': '希改',
        'zh-CH': '希改',
        'ko': 'S+?',
        'fr': '',
        'de': '',
    },

    'kamacite ore': {
        'ja': 'カマサイト鉱',
        'en': 'Kamacite Ore',
        'zh-TW': '鐵紋礦石',
        'zh-CH': '铁纹矿石',
        'ko': 'Kamacite Ore?',
        'fr': '',
        'de': '',
    },
    'cocobolo lumber': {
        'ja': 'ココボロ材',
        'en': 'Cocobolo Lumber',
        'zh-TW': '黃檀木材',
        'zh-CH': '黄檀木材',
        'ko': 'Cocobolo Lumber?',
        'fr': '',
        'de': '',
    },
    'balsa wood scrap': {
        'ja': 'バルサ廃材',
        'en': 'Balsa Wood Scrap',
        'zh-TW': '輕木廢材',
        'zh-CH': '轻木废材',
        'ko': 'Balsa Wood Scrap?',
        'fr': '',
        'de': '',
    },
    'pure titanium ore': {
        'ja': 'ピュアチタン鉱',
        'en': 'Pure Titanium Ore',
        'zh-TW': '純鈦礦',
        'zh-CH': '纯钛矿',
        'ko': 'Pure Titanium Ore',
        'fr': '',
        'de': '',
    },
    'cryptomeria log': {
        'ja': 'クリプトメリア原木',
        'en': 'Cryptomeria Log',
        'zh-TW': '柳杉原木',
        'zh-CH': '柳杉原木',
        'ko': 'Cryptomeria Log?',
        'fr': '',
        'de': '',
    },

    'ii': {
        'ja': '真',
        'en': 'II',
        'zh-TW': '真',
        'zh-CH': '真',
        'ko': 'II?',
        'fr': '',
        'de': '',
    },
    'iii': {
        'ja': '極',
        'en': 'III',
        'zh-TW': '極',
        'zh-CH': '极',
        'ko': 'III?',
        'fr': '',
        'de': '',
    },
    'iv': {
        'ja': '幻',
        'en': 'IV',
        'zh-TW': '幻',
        'zh-CH': '幻',
        'ko': 'IV?',
        'fr': '',
        'de': '',
    },
    'v': {
        'ja': '零式',
        'en': 'V',
        'zh-TW': '零式',
        'zh-CH': '零式',
        'ko': 'V?',
        'fr': '',
        'de': '',
    },
    'vi': {
        'ja': '絶',
        'en': 'VI',
        'zh-TW': '絕',
        'zh-CH': '绝',
        'ko': 'VI?',
        'fr': '',
        'de': '',
    },
    'vii': {
        'ja': 'FF16兼任',
        'en': 'VII',
        'zh-TW': '吉田爸爸',
        'zh-CH': '吉田爸爸',
        'ko': 'VII?',
        'fr': '',
        'de': '',
    },

    'deepsea y': {
        'ja': '溺没海 Y',
        'en': 'Deep-Sea Site:<br>Flickering Dip',
        'zh-TW': '溺沒海 Y',
        'zh-CH': '溺没海 Y',
        'ko': 'Deep-Sea Site:<br>Flickering Dip?',
        'fr': '',
        'de': '',
    },
    'deepsea yv': {
        'ja': '溺没海 Y→V',
        'en': 'Deep-Sea Site:<br>Flickering Dip<br>-&gt; The Rimilala Shelf',
        'zh-TW': '溺沒海 Y→V',
        'zh-CH': '溺没海 Y→V',
        'ko': 'Deep-Sea Site:<br>Flickering Dip<br>-&gt; The Rimilala Shelf?',
        'fr': '',
        'de': '',
    },
    'ashsea ab': {
        'ja': '灰海 A→B',
        'en': 'Sea of Ash:<br>Wreckage of the Windwalker<br>-&gt; South Isle of Zozonan',
        'zh-TW': '灰海 A→B',
        'zh-CH': '灰海 A→B',
        'ko': 'Sea of Ash:<br>Wreckage of the Windwalker<br>-&gt; South Isle of Zozonan?',
        'fr': '',
        'de': '',
    },
    'ashsea bad': {
        'ja': '灰海 B→A→D',
        'en': 'Sea of Ash:<br>Wreckage of the Windwalker<br>-&gt; South Isle of Zozonan<br>-&gt; Sea of Ash 1',
        'zh-TW': '灰海 B→A→D',
        'zh-CH': '灰海 B→A→D',
        'ko': 'Sea of Ash:<br>Wreckage of the Windwalker<br>-&gt; South Isle of Zozonan<br>-&gt; Sea of Ash 1?',
        'fr': '',
        'de': '',
    },
    'ashsea badf': {
        'ja': '灰海 B→A→D→F',
        'en': 'Sea of Ash:<br>Wreckage of the Windwalker<br>-&gt; South Isle of Zozonan<br>-&gt; Sea of Ash 1<br> -&gt; Sea of Ash 2',
        'zh-TW': '灰海 B→A→D→F',
        'zh-CH': '灰海 B→A→D→F',
        'en': 'Sea of Ash:<br>Wreckage of the Windwalker<br>-&gt; South Isle of Zozonan<br>-&gt; Sea of Ash 1<br> -&gt; Sea of Ash 2?',
        'fr': '',
        'de': '',
    },
    'deepsea gh': {
        'ja': '溺没海 G→H',
        'en': 'Deep-Sea Site:<br>-&gt; The Umbrella Narrow<br>-&gt; Offender&#39;s Rot',
        'zh-TW': '溺沒海 G→H',
        'zh-CH': '溺没海 G→H',
        'en': 'Deep-Sea Site:<br>-&gt; The Umbrella Narrow<br>-&gt; Offender&#39;s Rot?',
        'fr': '',
        'de': '',
    },
    'deepsea igh': {
        'ja': '溺没海 I→G→H',
        'en': 'Deep-Sea Site:<br>-&gt; Neolith Island<br>-&gt; The Umbrella Narrow<br>-&gt; Offender&#39;s Rot',
        'zh-TW': '溺沒海 I→G→H',
        'zh-CH': '溺没海 I→G→H',
        'en': 'Deep-Sea Site:<br>-&gt; Neolith Island<br>-&gt; The Umbrella Narrow<br>-&gt; Offender&#39;s Rot?',
        'fr': '',
        'de': '',
    },
    'ashsea aci': {
        'ja': '灰海 A→C→I',
        'en': 'Sea of Ash:<br>South Isle of Zozonan<br>-&gt; North Isle of Zozonan<br>-&gt; The Central Charnel Trench',
        'zh-TW': '灰海 A→C→I',
        'zh-CH': '灰海 A→C→I→L',
        'en': 'Sea of Ash:<br>South Isle of Zozonan<br>-&gt; North Isle of Zozonan<br>-&gt; The Central Charnel Trench?',
        'fr': '',
        'de': '',
    },
    'ashsea acil': {
        'ja': '灰海 A→C→I→L',
        'en': 'Sea of Ash:<br>South Isle of Zozonan<br>-&gt; North Isle of Zozonan<br>-&gt; The Central Charnel Trench<br>-&gt; The Lone Glove',
        'zh-TW': '灰海 A→C→I→L',
        'zh-CH': '灰海 A→C→I→L',
        'en': 'Sea of Ash:<br>South Isle of Zozonan<br>-&gt; North Isle of Zozonan<br>-&gt; The Central Charnel Trench<br>-&gt; The Lone Glove?',
        'fr': '',
        'de': '',
    },
    'ashsea acmil': {
        'ja': '灰海 A→C→M→I→L',
        'en': 'Sea of ASh:<br>South Isle of Zozonan<br>-&gt; North Isle of Zozonan<br>-&gt; The Midden Pit<br>-&gt; The Central Charnel Trench<br>-&gt; The Lone Glove',
        'zh-TW': '灰海 A→C→M→I→L',
        'zh-CH': '灰海 A→C→M→I→L',
        'ko': 'Sea of ASh:<br>South Isle of Zozonan<br>-&gt; North Isle of Zozonan<br>-&gt; The Midden Pit<br>-&gt; The Central Charnel Trench<br>-&gt; The Lone Glove?',
        'fr': '',
        'de': '',
    },
    'ashsea bdi': {
        'ja': '灰海 B→D→I',
        'en': 'Sea of Ash:<br>Wreckage of the Windwalker<br>-&gt; Sea of Ash 1<br>-&gt; The Central Charnel Trench',
        'zh-TW': '灰海 B→D→I',
        'zh-CH': '灰海 B→D→I',
        'en': 'Sea of Ash:<br>Wreckage of the Windwalker<br>-&gt; Sea of Ash 1<br>-&gt; The Central Charnel Trench?',
        'fr': '',
        'de': '',
    },
    'ashsea bdik': {
        'ja': '灰海 B→D→I→K',
        'en': 'Sea of Ash:<br>Wreckage of the Windwalker<br>-&gt; Sea of Ash 1<br>-&gt; The Central Charnel Trench<br>-&gt; Sea of Ash 4',
        'zh-TW': '灰海 B→D→I→K',
        'zh-CH': '灰海 B→D→I→K',
        'en': 'Sea of Ash:<br>Wreckage of the Windwalker<br>-&gt; Sea of Ash 1<br>-&gt; The Central Charnel Trench<br>-&gt; Sea of Ash 4?',
        'fr': '',
        'de': '',
    },

    /*
    '': {
        'ja': '',
        'en': '',
        'zh-TW': '',
        'zh-CH': '',
        'ko': '',
        'fr': '',
        'de': '',
    },
    */
};
