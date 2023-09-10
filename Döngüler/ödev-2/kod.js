function newElement() {
  const task_dom = document.querySelector("#task").value;
  const ul_dom = document.querySelector("#list");
  const li = document.createElement("li"); // Yeni bir li öğesi oluşturma

  li.innerHTML = `${task_dom}`;

  ul_dom.appendChild(li);

  // Değerin anahtarını belirleyin (benzersiz olmasını sağlamak için)
  const seri_no = Date.now().toString();

  // Değeri Local Storage'a kaydedin
  localStorage.setItem(seri_no, `${task_dom}`);

  //silme liste elemanı
  var btn = document.createElement("button");
  btn.innerText = "Sil";
  btn.addEventListener("click", function () {
    li.remove();
  });
  li.appendChild(btn);
}
