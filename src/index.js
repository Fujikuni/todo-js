import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div作成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ
  const li = document.createElement("li");
  li.innerText = text;

  //buton(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText; //分からんかった

    //div以下を初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された簿どすボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //buton(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);

//  完了のトライ
// const taskText = "";//分からん
// const div = document.createElement("div");
// div.className = "list-row";
// const li = document.createElement("li");
// li.innerText = taskText;

// const returnButton = document.createElement("button");
// returnButton.innerText = "戻す";
// returnButton.addEventListener("click", () => {
//   // const taskText = "戻したタスク"; //分からん
//   // const div = document.createElement("div");
//   // div.className = "list-row";
//   // const li = document.createElement("li");
//   // li.innerText = taskText;
//   // document.getElementById("incomplete-list").appendChild(target);
//   // const deleteTarget = returnButton.parentNode;
//   // document.getElementById("complete-list").removeChild(deleteTarget);
//  無限入れ子にならないか？？？？
// });

// div.appendChild(li);
// div.appendChild(returnButton);
// document.getElementById("complete-list").appendChild(div);
