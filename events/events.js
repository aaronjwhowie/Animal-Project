function moreInfoOne() {
  let dotsOne = document.querySelector(".dotsOne");
  let moreTextOne = document.querySelector(".moreOne");
  let btnTextOne = document.querySelector(".buttonOne");

  if (dotsOne.style.display == "none") {
    dotsOne.style.display = "inline";
    btnTextOne.innerHTML = "Read More";
    moreTextOne.style.display = "none";
  } else {
    dotsOne.style.display = "none";
    btnTextOne.innerHTML = "Read Less";
    moreTextOne.style.display = "inline";
  }
}

function moreInfoTwo() {
  let dotsTwo = document.querySelector(".dotsTwo");
  let moreTextTwo = document.querySelector(".moreTwo");
  let btnTextTwo = document.querySelector(".buttonTwo");

  if (dotsTwo.style.display == "none") {
    dotsTwo.style.display = "inline";
    btnTextTwo.innerHTML = "Read More";
    moreTextTwo.style.display = "none";
  } else {
    dotsTwo.style.display = "none";
    btnTextTwo.innerHTML = "Read Less";
    moreTextTwo.style.display = "inline";
  }
}

function moreInfoThree() {
  let dotsThree = document.querySelector(".dotsThree");
  let moreTextThree = document.querySelector(".moreThree");
  let btnTextThree = document.querySelector(".buttonThree");

  if (dotsThree.style.display == "none") {
    dotsThree.style.display = "inline";
    btnTextThree.innerHTML = "Read More";
    moreTextThree.style.display = "none";
  } else {
    dotsThree.style.display = "none";
    btnTextThree.innerHTML = "Read Less";
    moreTextThree.style.display = "inline";
  }
}

function moreInfoFour() {
  let dotsFour = document.querySelector(".dotsFour");
  let moreTextFour = document.querySelector(".moreFour");
  let btnTextFour = document.querySelector(".buttonFour");

  if (dotsFour.style.display == "none") {
    dotsFour.style.display = "inline";
    btnTextFour.innerHTML = "Read More";
    moreTextFour.style.display = "none";
  } else {
    dotsFour.style.display = "none";
    btnTextFour.innerHTML = "Read Less";
    moreTextFour.style.display = "inline";
  }
}
