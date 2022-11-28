// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
<style>
        div {
            text-align: center;
            size: 20px;
        }

        #a input {
            border: 12px;
            background-color:#190d84;
            color: aliceblue;

        }
        body {
            background-color: #fbfdff;
        }
        .tieude {
            text-align: center;
            color: #190d84;
        }

        .boder {
            border-style: solid;
            padding: 20px;
            margin-left: 200px;
            margin-right: 200px;
        }
    </style>