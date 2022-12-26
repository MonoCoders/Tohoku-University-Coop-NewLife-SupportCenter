
const categoryNames = ["HOME", "はじめに", "住まいさがし", "共済", "学業商品", "入学後について"];
const folderNames = ["ホームページ", "Door導入", "住まいさがし", "共済", "学業商品", "入学後の動き"];
const numberOfImages = [0, 3, 2, 3, 3, 1];
const path = ["index.html", "FirstInfo_graduate.html", "Residence_graduate.html", "MutualAid_graduate.html", "Study_graduate.html",  "AfterEnter_graduate.html"];


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
            img.src = `分割版_院生/${folderName}/${folderName}-0${i}.png`;
        } else {
            img.src = `分割版_院生/${folderName}/${folderName}-${i}.png`;
        }
        img.alt = `${folderName}`;
        imagesDiv.appendChild(img);
    }
    document.body.appendChild(imagesDiv);
}



function setBottom() {
    const key = ["HomePage", "FirstInfo", "residence", "newlifeGoods", "mutualAid", "meal", "Study","afterEnter"];
    const label = ["HOME", "はじめに", "住まいさがし", "新生活用品", "共済", "ミール", "学業商品", "入学後について"]
    let bottom = document.createElement("div");
    bottom.id = "footer_Div";

    for (let i = 0; i < key.length; i++) {
        let divElement = document.createElement("div");
        let data = jsonData[key[i]];
        divElement.innerHTML = `<h3>${label[i]}</a></h3>`
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
            "FirstInfo_graduate.html"
        ],
        [
            "住まい探し",
            "Residence_graduate.html"
        ],
        [
            "共済",
            "MutualAid_graduate.html"
        ],
        [
            "学業商品",
            "Study_graduate.html"
        ],
        [
            "入学後について",
            "AfterEnter_graduate.html"
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
            "https://drive.google.com/file/d/1CUMhyif4b7DNuoP5LYvtk0CtMbYWs1zs/view"
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
        ]
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
        [
            "SoftBank Air チラシ",
            "https://drive.google.com/file/d/16H9xrxLwe1gsCNHlou1n3TN5ATdMF_-H/view"
        ],
        [
            "SoftBank Air 記入例",
            "https://drive.google.com/file/d/13AveJt-EOZtT5cyv9GWZufahaTjdhrIJ/view"
        ],
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
        ],
        [
            "Web加入手続きの流れ",
            "https://drive.google.com/file/d/1fUgb0t2UBORAoaf7e1kawQTm0GIvr0vz/view"
        ]
    ],
    "meal": [
        [
            "ファーストピーク用提案ラミネート",
            "https://drive.google.com/file/d/1OLIWMIzQEl0gnNM321npJUMQXymC-g1b/view"
        ],
        [
            "ミール自炊大変ラミネート",
            "https://drive.google.com/file/d/1yIbf0RJguslKIMrzSx9rDjH9I2XYfsBi/view"
        ],
        [
            "ミール プランの使用例ラミネート",
            "https://drive.google.com/file/d/1qSNaFKWb3KJEXBb_Fh_sI9SqXqie1Kzj/view?usp=share_link"
        ]
    ],
    "Study": [
        [
            "PC・iPad修理事例",
            "https://drive.google.com/file/d/1zJl-oVnoNleEDqhM318KMTimIvYgoTkw/view?usp=sharing"
        ],
        [
            "PCフルサポートライセンス約款",
            "https://drive.google.com/file/d/1y66HYHC2z-tVDW3hCyw1qPPbwfBiRFwF/view"
        ],
        [
            "電子書籍約款：電子書籍本体",
            "https://drive.google.com/file/d/1MATuosl9oIDfgSLdBv1i86yjugLqI88M/view"
        ],
        [
            "電子書籍約款：個人情報",
            "https://drive.google.com/drive/u/0/folders/1fwoucuJsUm2jrPwBARh6labGD7ufI0Yv"
        ],

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