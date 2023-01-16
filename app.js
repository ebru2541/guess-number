let input1 = document.querySelector("input[type='text']");
let buton = document.querySelector("input[type='button']");
let hak = document.querySelector(".hak");
let text = document.querySelector(".text");
let img = document.querySelector("img");
let baslık = document.querySelector(".baslık");
let son = document.querySelector(".son");
let inputDiv = document.querySelector("#inputDiv");
let count = 5;
let bilme = 0;
let number = Math.floor(Math.random() * 51);
console.log(number);
buton.addEventListener("click", (e) => {
  count--;
  bilme++;
  if (Number(input1.value)) {
    if (number > input1.value) {
      text.innerHTML = ` <p class="hak"><span>${count}</span> tahmin hakkınız kaldı.</p><p class="artır"><span >${input1.value}</span> <i class="fa-sharp fa-solid fa-arrow-up"></i> </p>`;
      img.style.display = "inline-block";
      img.src = `./images/images.png`;
      input1.value = "";
    } else if (number < input1.value) {
      text.innerHTML = ` <p class="hak"><span>${count}</span> tahmin hakkınız kaldı.</p><p class="azalt"><span >${input1.value}</span> <i class="fa-sharp fa-solid fa-arrow-down"></i> </p>`;
      img.style.display = "inline-block";
      img.src = `./images/Garfield.jpg`;
      input1.value = "";
    } else if (number == input1.value && count >= 0) {
      inputDiv.style.display = "none";
      img.style.display = "inline-block";
      img.src = `./images/ayıck.webp`;
      img.style.marginTop = "1rem";
      baslık.style.display = "none";
      text.innerHTML = ``;
    }

    if (number != input1.value && count == 0) {
      inputDiv.style.display = "none";
      son.innerHTML = ` Tahmin hakkınız bitmiştir...<br>`;
      baslık.style.display = "none";
      text.style.display = "none";
      img.style.display = "inline-block";
      img.src = `./images/esneme.jpg`;
    }
  } else {
    alert("Bir sayı giriniz...");
  }

  input1.value = "";
  input1.focus();
  console.log(input1.value);
});

//  input1.addEventListener("keydown", (e) => {
//    if (e.code === "Enter") {
//      buton.click();
//    }
//  });
