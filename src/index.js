import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // span生成
  const span = document.createElement("span");
  span.className = "todo";
  span.innerText = inputText;

  // dicの子要素に必要な要素を追加s
  div.appendChild(span);
  div.appendChild(createCompleteButton());
  div.appendChild(createDeleteButton());

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 完了ボタンを生成
const createCompleteButton = () => {
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了ボタンを押した時に「完了したTODO」のエリアにTODOを追加する
    const addTarget = completeButton.parentNode;
    // TODOの内容を取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;

    // span生成
    const span = document.createElement("span");
    span.className = "todo";
    span.innerText = text;

    // dicの子要素に必要な要素を追加s
    addTarget.appendChild(span);
    addTarget.appendChild(createBackButton());

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
  return completeButton;
};

// 削除ボタンを作成
const createDeleteButton = () => {
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  return deleteButton;
};

// 戻すボタンを作成
const createBackButton = () => {
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromCompleteList(backButton.parentNode);

    // 戻すボタンを押した時に「未完了リストTODO」のエリアにTODOを追加する
    const backTarget = backButton.parentNode;

    // TODOの内容を取得
    const text = backTarget.firstElementChild.innerText;

    // div以下を初期化
    backTarget.textContent = null;

    // span生成
    const span = document.createElement("span");
    span.className = "todo";
    span.innerText = text;

    // dicの子要素に必要な要素を追加s
    backTarget.appendChild(span);
    backTarget.appendChild(createCompleteButton());
    backTarget.appendChild(createDeleteButton());

    // 完了リストに追加
    document.getElementById("incomplete-list").appendChild(backTarget);
  });
  return backButton;
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 完了リストから指定の要素を削除
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

// 追加ボタンにイベントを追加
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
