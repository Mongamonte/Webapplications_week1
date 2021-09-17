import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready.");
  runCode();
} else {
  document.addEventListener("DOMContenLoaded", function () {
    console.log("The document has been downloaded.");
    runCode();
  });
}

function runCode() {
  //funktiot tämän ulkopuolelle ja kutsua niitä funktiossa
  const AddButton = document.getElementById("add-comment");
  console.log(AddButton);
  AddButton.addEventListener("click", function () {
    //Add comment
    const UserInput = document.getElementById("text-area").value;
    let NewComment = document.createElement("li");
    NewComment.innerHTML = UserInput;
    const CommentArea = document.getElementById("comment-area");
    CommentArea.appendChild(NewComment);

    document.getElementById("text-area").value = "";

    document.getElementById("text-area").value = "";
  });

  const RemoveButton = document.getElementById("remove-comments");
  RemoveButton.addEventListener("click", function () {
    var result = window.confirm("Want to delete?");
    if (result === true) {
      const CommentArea = document.getElementById("comment-area");
      CommentArea.innerHTML = "";
    }
  });
}
