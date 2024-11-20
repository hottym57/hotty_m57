document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const contents = document.querySelectorAll(".content");

    // ページが読み込まれたとき、URLのハッシュを確認して初期表示
    const initializePage = () => {
        const hash = window.location.hash || "#home"; // デフォルトは #home
        activateSection(hash.substring(1));
    };

    // セクションを表示する関数
    const activateSection = (id) => {
        contents.forEach(content => {
            if (content.id === id) {
                content.classList.add("active", "slide-in"); // アクティブとスライドインのクラスを追加
            } else {
                content.classList.remove("active", "slide-in"); // 他のセクションからは削除
            }
        });
    };

    // ナビゲーションリンクのクリックイベントを設定
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // デフォルトのリンク動作を無効化

            const targetId = link.getAttribute("href").substring(1);
            activateSection(targetId);

            // URLを動的に変更
            history.pushState(null, "", `#${targetId}`);
        });
    });

    // ブラウザの「戻る」「進む」に対応
    window.addEventListener("popstate", () => {
        const hash = window.location.hash || "#home";
        activateSection(hash.substring(1));
    });

    // 初期ページを表示
    initializePage();
});
