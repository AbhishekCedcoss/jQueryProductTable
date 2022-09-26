var pa = []; //Product Array

document.getElementById("update_product").style.display = "none";
document.getElementById("success").style.display = "none";
document.getElementById("error").style.display = "none";

$(document).ready(function () {
  //jQuery Ready Function
  $("#add_product").click(function () {
    var product_sku = $("#product_sku").val();
    var product_name = $("#product_name").val();
    var product_price = $("#product_price").val();
    var product_quantity = $("#product_quantity").val();

    var obj = {
      SKU: product_sku,
      Name: product_name,
      Price: product_price,
      Quantity: product_quantity,
    };

    if (
      obj.SKU == "" &&
      obj.Name == "" &&
      obj.Price == "" &&
      obj.Quantity == ""
    ) {
      $("#error").text("All field are empty.");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (obj.SKU == "") {
      $("#error").text("SKU field is empty.");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (obj.Name == "") {
      $("#error").text("Name field is empty.");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (obj.Price == "") {
      $("#error").text("Price field is empty.");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (obj.Quantity == "") {
      $("#error").text("Quantity field is empty.");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (isNaN(obj.SKU)) {
      $("#error").text("SKU field should be integer");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (!isNaN(obj.Name)) {
      $("#error").text("Name field should be string");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (isNaN(obj.Price)) {
      $("#error").text("Price field should be integer");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (isNaN(obj.Quantity)) {
      $("#error").text("Quantity field should be integer");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else {
      pa.push(obj);
      console.log(pa);
      display();
    }
  });
  $("#close-success").click(function () {
    $("#success").hide();
  });
  $("#close-error").click(function () {
    $("#error").hide();
  });
});

function display() {
  document.getElementById("success").style.display = "block";
  document.getElementById("error").style.display = "none";
  var table =
    "<table><tr><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th><th>Action</th></tr>";
  pa.forEach((element) => {
    table +=
      '<tr id="row"><td>' +
      element.SKU +
      "</td><td>" +
      element.Name +
      "</td><td>" +
      element.Price +
      "</td><td>" +
      element.Quantity +
      '</td><td><a href="#" onclick="edit(\'' +
      element.SKU +
      '\')">Edit</a> <a href="#" onclick="delProd(\'' +
      element.SKU +
      "')\">Delete</a></td></tr>";
  });
  table += "</table>";
  document.getElementById("product_list").innerHTML = table;
}
function edit(val) {
  document.getElementById("add_product").style.display = "none";
  document.getElementById("update_product").style.display = "block";

  for (let i = 0; i < pa.length; i++) {
    if (val == pa[i].SKU) {
      document.getElementById("product_sku").value = pa[i].SKU;
      document.getElementById("product_name").value = pa[i].Name;
      document.getElementById("product_price").value = pa[i].Price;
      document.getElementById("product_quantity").value = pa[i].Quantity;
      pa.splice(i, 1);
    }
  }

  display();
}
function update() {
  document.getElementById("update_product").style.display = "none";
  document.getElementById("add_product").style.display = "block";

  var product_sku = $("#product_sku").val();
  var product_name = $("#product_name").val();
  var product_price = $("#product_price").val();
  var product_quantity = $("#product_quantity").val();
  var obj = {
    SKU: product_sku,
    Name: product_name,
    Price: product_price,
    Quantity: product_quantity,
  };
}

function delProd(val) {
  for (let i = 0; i < pa.length; i++) {
    if (val == pa[i].SKU) {
      pa.splice(i, 1);
    }
  }
  display();
}
