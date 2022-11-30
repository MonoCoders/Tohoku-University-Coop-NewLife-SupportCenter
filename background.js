
const categoryNames = ["HOME", "はじめに", "住まい探し", "新生活用品", "共済", "ミール", "学業商品", "入学アルバム", "入学後について"];
const folderNames = ["ホームページ", "Door導入", "住まい", "新生活用品", "共済", "ミール", "学業商品", "入学アルバム", "入学後の動き"];
const numberOfImages = [0, 6, 3, 3, 9, 4, 17, 1, 3];
const path = ["index.html", "FirstInfo.html", "Residence.html", "NewLifeGoods.html", "MutualAid.html", "Meal.html", "Study.html", "EnterAlbam.html", "AfterEnter.html"];


/**
 * 
 * @param {number} pageNumber 
 */
function setHTML(pageNumber) {
    document.title = categoryNames[pageNumber];
    // 前のページへのリンク
    let beforePage = document.createElement("div");
    let beforeA = document.createElement("a");
    beforeA.href = path[pageNumber - 1];
    beforePage.id = "beforePage";
    beforeA.innerHTML = "◀" + categoryNames[pageNumber - 1] + "に戻る";
    beforePage.appendChild(beforeA);
    document.body.appendChild(beforePage);

    // ページ上部の分類
    let categoryDisplay = document.createElement("h1");
    //categoryDisplay.id = "topCategory";
    categoryDisplay.innerHTML = categoryNames[pageNumber]
    document.body.appendChild(categoryDisplay);
    
    // Doorの画像挿入
    setImages(folderNames[pageNumber], numberOfImages[pageNumber]);

    // 次のページへのリンク
    let nextPage = document.createElement("div");
    let nextA = document.createElement("a");
    nextA.href = path[(pageNumber + 1) % path.length];
    nextPage.id = "nextPage";
    nextA.innerHTML = categoryNames[(pageNumber + 1) % categoryNames.length] + "へ▶";
    nextPage.appendChild(nextA);
    document.body.appendChild(nextPage);


    let relativeLink = document.createElement("h2");
    relativeLink.id = "relatedLinks";
    relativeLink.innerHTML = "関連リンク";
    document.body.appendChild(relativeLink);


    // 関連リンク
    setBottom();

}


/**
 * 
 * @param {string} categoryName 
 */
function setTop(categoryName) {
    document.write(`<br><div class="top">${categoryName}</div>`);
}

/**
 * 
 * @param {string} folderName 
 * @param {number} numberOfImages
 */
function setImages(folderName, numberOfImages) {
    let imagesDiv = document.createElement("div");
    for (let i = 1; i <= numberOfImages; i++) {
        let img = document.createElement("img");
        if (i < 10) {
            img.src = `分割版/${folderName}/${folderName}-0${i}.png`;
        } else {
            img.src = `分割版/${folderName}/${folderName}-${i}.png`;
        }
        img.alt = `${folderName}`;
        imagesDiv.appendChild(img);
    }
    document.body.appendChild(imagesDiv);
}



function setBottom() {
    const key = ["HomePage", "FirstInfo", "residence", "newlifeGoods", "mutualAid", "meal", "Study", "enterAlbam", "afterEnter"];
    const label = ["HOME", "はじめに", "住まい探し", "新生活用品", "共済", "ミール", "学業商品", "入学アルバム", "入学後について"]
    let bottom = document.createElement("div");
    bottom.id = "bottomDiv";

    for (let i = 0; i < key.length; i++) {
        let divElement = document.createElement("div");
        let data = jsonData[key[i]];
        divElement.innerHTML = `<h3><a href="${path[i]}" class="linkLabel">${label[i]}</a></h3>`
        for (let j = 0; j < data.length; j++) {
            let link = document.createElement("div");
            link.innerHTML = `<a href="${data[j][1]}" class="bottomLink" target="_blank" rel="noopener noreferrer">▶${data[j][0]}</a>`;
            divElement.appendChild(link);
        }
        bottom.appendChild(divElement);
    }
    document.body.appendChild(bottom);

}

let jsonData = {
    "HomePage": [
        [
            "はじめに",
            "FirstInfo.html"
        ],
        [
            "住まい探し",
            "Residence.html"
        ],
        [
            "新生活用品",
            "NewLifeGoods.html"
        ],
        [
            "共済",
            "MutualAid.html"
        ],
        [
            "ミール",
            "Meal.html"
        ],
        [
            "講座・PC",
            "Study.html"
        ],
        [
            "入学アルバム",
            "EnterAlbam.html"
        ],
        [
            "入学後について",
            "AfterEnter"
        ]
    ],
    "FirstInfo": [
        [
            "新生活サポートセンター",
            "https://newlife.u-coop.or.jp/tohoku/"
        ],
        [
            "Twitter アカウント",
            "https://twitter.com/THUv_COOP_SPSN?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3ATHUv_COOP_SPSN%7Ctwcon%5Es2"
        ],
        [
            "ふらっとブログ",
            "https://newlife.u-coop.or.jp/tohoku/flat/"
        ]
    ],
    "residence": [
        [
            "サポセンで住まいを決めるメリット",
            "https://drive.google.com/file/d/1-ygf4DLqm20dIioMJoS6h9mGY6LqhKWK/view?usp=sharing"
        ],
        [
            "通学時間の地図",
            "https://drive.google.com/file/d/15IkDOZGlVW65s9oyAoT9wKcfTfZx_fkq/view?usp=sharing"
        ],
        [
            "物件が決まったら",
            "https://drive.google.com/file/d/1_Rs6cdzeiK_O2h_B-0HPd9KNtR1dVDYd/view"
        ],
        [
            "ジオラマ(Google Earth)：東北大周辺地区",
            "https://earth.google.com/earth/d/1TISkU-AOrmdFZnbPYm93jiP4xmvFXOsE?usp=sharing"
        ],
        [
            "Google Earthのショートカット・ヘルプ",
            "https://support.google.com/earth/answer/148115?hl=ja"
        ],
        [
            "住まい検索サイト",
            "https://sumai.tohoku.u-coop.or.jp/map/?type_id=1&lat=38.25910772268097&lng=140.8521579927633\n"
        ],
        [
            "ふらっとブログ：安心・安全編",
            "https://newlife.u-coop.or.jp/tohoku/flat/?p=2350"
        ],
        [
            "ふらっとブログ：家賃編",
            "https://newlife.u-coop.or.jp/tohoku/flat/?p=2361"
        ],
        [
            "ふらっとブログ：設備編",
            "https://newlife.u-coop.or.jp/tohoku/flat/?p=2346"
        ],
        [
            "ふらっとブログ：食事編",
            "https://newlife.u-coop.or.jp/tohoku/flat/?p=2367"
        ],
        [
            "ふらっとブログ：通学のしやすさ編",
            "https://newlife.u-coop.or.jp/tohoku/flat/?p=2371"
        ],

    ],
    "newlifeGoods": [
        [
            "家具家電チラシ",
            "https://drive.google.com/file/d/1w9pAJLErPaGH0X046GKyxt5Pl0Z5I24X/view"
        ],
        [
            "NHK申込書記入例",
            "https://drive.google.com/file/d/1H8sZ94FtuZ7bN7zADX9OpjIcCFn7OKxO/view"
        ],
        // [
        //     "SoftBank Airチラシ",
        //     "インターネットのラミネート作成後"
        // ],
        [
            "防災セットチラシ",
            "https://drive.google.com/file/d/1smKn6YIulJ2S8z-Qz_73Z7KoSxSLEDMX/view"
        ],
        [
            "ハヤサカサイクル",
            "http://newlife.u-coop.or.jp/tohoku/standby/bicycle/"
        ]
    ],
    "mutualAid": [
        [
            "学生マンション提案可能商品一覧",
            "https://drive.google.com/file/d/1O0d8EhisMENd-Y3o3bsIVt5rfTlFR9Sy/view"
        ],
        [
            "共済パンフ",
            "https://drive.google.com/file/d/1VX3PiiB-I8JqG3aWRROk_liS7Aq8yv-M/view?usp=share_link"
        ],
        [
            "給付事例集",
            "https://drive.google.com/file/d/1MxGbFAMpK8bOVo1AkZAjncRMgmXcf4ii/view"
        ],
        [
            "110番パンフレット",
            "https://drive.google.com/file/d/1TqMZCkPo-y_PQsPX9N8v7qOBlJnCFwMx/view?usp=share_link"
        ]
    ],
    "meal": [
        [
            "2023ファーストピーク用提案ラミネート",
            "https://drive.google.com/file/d/1OLIWMIzQEl0gnNM321npJUMQXymC-g1b/view"
        ]
    ],
    "Study": [
        [
            "メサロフォローについて",
            "https://docs.google.com/document/d/181-XFhkhAh_TwlORervFVF7cDjdFas803GLxcBkZKhA/edit"
        ],
        [
            "AO2期生用英語教材ラミネート",
            "https://drive.google.com/file/d/1zfxSYzMwL2ye85E2nffTVRFZInHSCCkR/view?usp=sharing"
        ],
        [
            "セット提案分岐ラミネート",
            "https://drive.google.com/file/d/1Y-Ch56RoYnarkliBUW7uWSdJ8o94mpyd/view"
        ],
        [
            "PC・iPad修理事例",
            "https://drive.google.com/file/d/1zJl-oVnoNleEDqhM318KMTimIvYgoTkw/view?usp=sharing"
        ],
        [
            "DECS RS集",
            "https://drive.google.com/file/d/1L3tO1J-74z3nfEwMpSWbdjhEiFRGYct-/view?usp=sharing"
        ]
    ],
    "enterAlbam": [
        [
            "入学アルバム見本",
            "https://drive.google.com/file/d/1cMqPgeEtxa_c0MbZSTmWhK3NhwquAd6B/view?usp=sharing"
        ],
        [
            "入学アルバム詳細",
            "https://newlife.u-coop.or.jp/tohoku/standby/album/"
        ]
    ],
    "afterEnter": [
        [
            "学部生Door",
            "https://drive.google.com/file/d/1mMN0cKREkboMHU5ch2Ma3tiWNYv--3m8/view?usp=share_link"
        ],
        [
            "院生Door",
            "https://drive.google.com/file/d/1-eOdt4wEbDg0wr-t6EOypbSRH8JmzpOK/view?usp=share_link"
        ],
        [
            "重要事項説明",
            "https://drive.google.com/file/d/1vdtPY9jxU5rkWxX3lM4Wi3kGjiFM0GIt/view"
        ],
        [
            "スタッフ募集チラシ",
            "https://drive.google.com/file/d/1Fn7ExuM2Q6-gJS0CiWIK6RN_Jl5yGEox/view?usp=share_link"
        ]
    ]
}
// {
//     "HomePage": [
//         ["はじめに", "FirstInfo.html"],
//         ["住まい探し", "Residence.html"],
//         ["新生活用品", "NewLifeGoods.html"],
//         ["共済", "MutualAid.html"],
//         ["ミール", "Meal.html"],
//         ["講座・英語", "Study_1.html"],
//         ["デバイス", "Study_2.html"],
//         ["入学アルバム", "EnterAlbam.html"],
//         ["入学後について", "AfterEnter.html"]
//     ],
//     "FirstInfo": [
//         ["新生活サポートセンター", "https://newlife.u-coop.or.jp/tohoku/"],
//         ["Twitter アカウント", "https://twitter.com/THUv_COOP_SPSN?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3ATHUv_COOP_SPSN%7Ctwcon%5Es2"],
//         ["FLATぶろぐ", "https://newlife.u-coop.or.jp/tohoku/flat/"]
//     ],
//     "residence": [
//         ["サポセンで住まいを決めるメリット", "https://drive.google.com/file/d/1-ygf4DLqm20dIioMJoS6h9mGY6LqhKWK/view?usp=sharing"],
//         ["通学時間の地図", "https://drive.google.com/file/d/15IkDOZGlVW65s9oyAoT9wKcfTfZx_fkq/view?usp=sharing"],
//         ["物件が決まったら", "https://drive.google.com/file/d/15IkDOZGlVW65s9oyAoT9wKcfTfZx_fkq/view?usp=sharing"],
//         ["ジオラマ", "https://earth.google.com/earth/d/1TISkU-AOrmdFZnbPYm93jiP4xmvFXOsE?usp=sharing"],
//         ["住まい検索サイト", "https://sumai.tohoku.u-coop.or.jp/map/?type_id=1&lat=38.25910772268097&lng=140.8521579927633"]

//     ],
//     "newlifeGoods": [
//         ["モデルルーム資料", "https://drive.google.com/drive/folders/1Fi-_4hmvBaZNFaAH2L-Ps12QAP6tV79M"],
//         ["NHK申込書記入例", "https://drive.google.com/file/d/1ids7UJC4QGYVM4sqDFp5pYu_qm1EY2wI/view"],
//         ["Softbank 光について", "https://drive.google.com/drive/folders/1Fi-_4hmvBaZNFaAH2L-Ps12QAP6tV79M"],
//         ["ネット提案導入", "https://drive.google.com/drive/folders/17ZZiFqzeHeENXqjKxICKZddcrTCGgmU-"],
//         ["Airと光チラシ", "https://drive.google.com/file/d/1qP2Imv_vM7wt-EXmzzohT9W-vtL94sbR/view"],
//         ["ネットラミネート", "https://drive.google.com/file/d/1XMpbv3B2J0kADkGkhor4ey29CPmehQhC/view"],
//         ["防災セットチラシ", "https://drive.google.com/file/d/1zj54-riBo-nrjBeaTgQDdIZW-cf6qhzv/view"],
//         ["ハヤサカサイクル", "http://newlife.u-coop.or.jp/tohoku/standby/bicycle/"]
//     ],
//     "mutualAid": [
//         ["学生マンション提案可能商品一覧", "https://drive.google.com/file/d/1hvvRkUJQ6Zz_4Aum83k5W3-gc2M1uS6g/view?usp=sharing"],
//         ["比較検討用資料", "https://drive.google.com/file/d/1rDBFj1gkrclpIYIPwj5MDr_snTyoeQ3X/view?usp=sharing"],
//         ["加入申込書記入例", "https://drive.google.com/file/d/1HBR5hhV8gqKbOafTYGGc62IoXzHSqZhr/view?usp=sharing"],
//         ["共済パンフ_保障内容抜粋版", "https://drive.google.com/file/d/1yyINlDiirGbYD7NrVriVKVHLVL_i1riE/view?usp=sharing"],
//         ["給付事例集", "https://drive.google.com/file/d/1FNx3N5Qw4fR2zfAlo0cvV-nnl629dGLE/view?usp=sharing"],
//         ["110番パンフレット", "https://drive.google.com/file/d/1x7rnvsV8g_53wUKGJ7RaxADq_Qs8Bubc/view?usp=sharing"]
//     ],
//     "meal": [
//         ["2022食堂コレクションラミネート", "https://drive.google.com/file/d/1PJUghX43NGiNfK5bxLhcoL3waXTEkhA3/view?usp=sharing"],
//         ["2022自炊大変ラミネート", "https://drive.google.com/file/d/18SlT1N1mVwjf78URkBisxBGLoSklpDlv/view?usp=sharing"],
//         ["2022コロナ対策ラミネート", "https://drive.google.com/file/d/1oDlNE33EVu5V1Z3j0RFU3NbheCcOAI3k/view?usp=sharing"],
//         ["2022東北大生協ミールカード細則", "https://drive.google.com/file/d/1Dk5MxWoq_7ltmDUI0avz1NdoH9QhCdku/view?usp=sharing"],
//         ["2022学部別時間割と食生活", "https://drive.google.com/file/d/1VvHHIN1j5mWn6_bAgao8k3scRcy4lzVb/view?usp=sharing"],
//         ["2022月払いミールラミネート", "https://drive.google.com/file/d/1E0-a18fKADKjzkCY_nw90V7M1KCxQo2b/view?usp=sharing"]
//     ],
//     "Study_1": [
//         ["時間割表（医学系）", "https://drive.google.com/file/d/10GjtcfToK4B4Ry_Nw75-9yE2nQALaxI3/view?usp=sharing"],
//         ["時間割表（理系）", "https://drive.google.com/file/d/1RdIGAJfdpNHJGkTaxs91TaaQQqBOTGQe/view?usp=sharing"],
//         ["時間割表（文系）", "https://drive.google.com/file/d/1_FxPEh3XLyczNfMOL6puYzD62JkVXbSJ/view?usp=sharing"],
//         ["創造発見塾申込者ハガキ", "https://drive.google.com/drive/folders/1SxQ9JfkEKD5I1OAje-jiDQPHGxHXDwoE"],
//         ["創造発見塾申込者ハガキ", "https://drive.google.com/drive/folders/1SxQ9JfkEKD5I1OAje-jiDQPHGxHXDwoE"],
//         ["AO2期生用英語教材ラミネート", "https://drive.google.com/file/d/1zfxSYzMwL2ye85E2nffTVRFZInHSCCkR/view?usp=sharing"],
//         ["TOEFLITP500点ラミネート", "https://drive.google.com/file/d/1RqfAIBS9j9ezJVO8iLoRczjS6jPK89Ny/view?usp=sharing"]
//     ],
//     "Study_2": [
//         ["PC提案分岐ラミネート", "https://drive.google.com/file/d/1AmCf4aPu8zY8LeWvmU2lAzXu2nyTgpqz/view?usp=sharing"],
//         ["学部別PCスペック表", "https://drive.google.com/file/d/1PkI-AxuY6ofJa8okfd0r9ztz6q6JLTJC/view?usp=sharing"],
//         ["PC・iPad修理事例", "https://drive.google.com/file/d/1zJl-oVnoNleEDqhM318KMTimIvYgoTkw/view?usp=sharing"],
//         ["DECS RS集", "https://drive.google.com/file/d/1L3tO1J-74z3nfEwMpSWbdjhEiFRGYct-/view?usp=sharing"],
//         ["創造発見塾・ビジョンNavi・申込者専用ページ(ファースト用)", "https://drive.google.com/file/d/1vLv5zdl59r1I1e-buiJOD3cMA4lR6ojM/view?usp=sharing"],
//         ["メサロフォローについて", "https://docs.google.com/document/d/181-XFhkhAh_TwlORervFVF7cDjdFas803GLxcBkZKhA/edit"]
//     ],
//     "enterAlbam": [
//         ["入学アルバム", "https://drive.google.com/file/d/1cMqPgeEtxa_c0MbZSTmWhK3NhwquAd6B/view?usp=sharing"]
//     ],
//     "afterEnter": [

//     ]

// }