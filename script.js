document.getElementById("ideaButton").addEventListener("click", function() {
    var targets = [
        "試験勉強中の高校生",
        "バスケ部の生徒",
        "バンド活動に打ち込む中学生",
        "ゲーム好きな社会人",
        "ファッションクリエイター志望の学生",
        "環境保護に熱心な学生",
        "日本にやってきた交換留学生",
        "ロボット競技会に出場者",
        "ダンスサークルに参加している高校生",
        "茶道部の生徒",
        "習い事が多い学生",
        "生徒会で活動する高校生"
    ];
    var descriptions = [
        "大学入試に向けて一生懸命に勉強している高校生。効果的な記憶術や時間管理のためのツールに強い関心を持つ。",
        "チームのエースを目指し、日々の練習やフィットネスを真剣に取り組むバスケットボール部の生徒。",
        "自分のバンドを持ち、作曲や演奏に情熱を注ぐ。音楽の技術を磨くためのリソースを求めている。",
        "兄弟で共有して楽しめるコンソールゲームやボードゲームに熱中している。",
        "自分のスタイルを確立し、オリジナルのファッションアイテムを作成したいと考えている。",
        "環境問題に関心が高く、持続可能な生活を送りたいと思っている。",
        "日本の文化に触れながら、言語や習慣の違いに順応しようとする海外からの交換留学生。",
        "ロボティクスに興味があり、プログラミングや機械工学のスキルを競い合う競技会に参加している。",
        "学校単位ではなく、プロが指導するダンスサークルで活動している。よりレベルが高いことを目指したい。",
        "なんとなく入ったが、日本の伝統文化をもっと知りたいと感じている。",
        "ほぼ毎日何かの習い事をしている。楽しいがちょっと忙しさを感じて、何かに打ち込んだり、勉強に時間を使い切れない。",
        "生徒会活動で学校行事の運営などを行っている。仲間を率いてプロジェクトを進めることが多い。"

    ];
    var seasons = ["クリスマス", "春", "夏", "体育祭", "花見", "ハロウィン","バレンタインデー","卒業シーズン"];
    var places = ["教室", "テーマパーク", "図書館", "部室", "学校の屋上", "渋谷", "電車", "公園","自宅","塾","体育館"];
    
    var randomTargetIndex = Math.floor(Math.random() * targets.length);
    var randomTarget = targets[randomTargetIndex];
    var randomDescription = descriptions[randomTargetIndex];
    var randomSeasonPlace = (Math.random() < 0.3)
        ? seasons[Math.floor(Math.random() * seasons.length)]
        : places[Math.floor(Math.random() * places.length)];
    var idea = randomTarget + " × " + randomSeasonPlace;
    // 表示の更新
    document.getElementById("ideaDisplay").innerText = idea;
    document.getElementById("targetDisplay").innerText = `${randomTarget} - ${randomDescription}`;
    // プロンプトの生成と表示
    // var promptText = `ターゲット: ${randomTarget}\n場所/季節: ${randomSeasonPlace}\n説明: ${randomDescription}`;
    var promptText = `${randomTarget}×${randomSeasonPlace}×アプリでアイデアを出してほしい。アイデア個数は3つ。タイトルと簡単な説明を入れてください。ただし、タイトルはアイデアの要素を繋げた粒度のシンプルな「〇〇アプリ」というようなタイトルにすること。`;
    document.getElementById("copyPrompt").value = promptText;
});
// コピーボタンの機能を追加
document.getElementById("copyButton").addEventListener("click", function() {
    var copyText = document.getElementById("copyPrompt");
    copyText.select();
    document.execCommand("copy");
    // alert("コピーしました！"); // ユーザーにコピーされたことを通知
});
