function click(event) {
  event.preventDefault();

  let username = document.querySelector("#username");
  let usersur = document.querySelector("#usersur");
  let telnumber = document.querySelector("#telnumber");
  let adres = document.querySelector("#adres");

  !(username.value && usersur.value && usernumb.value && userloc.value) ? alert("lutfen bosluklari doldurun."): access();      
    

  function access() {
    alert("Isleminiz gerceklesti");
    console.log(`
kullanicinin adi ${username.value}
kullanicinin soyadi ${usersur.value}
kullanicinin numarasi ${telnumber.value}
kullanicinin adresi ${adres.value}
`);
  }
}
