const _review = document.querySelector("#hide");
const _share = document.querySelector("#toggle");
const _sub = document.querySelector("#unopened");
const _show = document.querySelector("#show");

const me = () => {
      _review.classList.add("hide");
      _sub.classList.add("show");
      console.log("to");
}

const go = () => {
      _review.classList.remove("hide");
      _sub.classList.remove("show");
      console.log("done");
}

_show.addEventListener("click", go)
_share.addEventListener("click",me)