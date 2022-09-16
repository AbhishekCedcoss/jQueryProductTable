var arr = [];

function f() {
  var a = $("#product_sku").val();
  var pn = $("#product_name").val();
  var pp = $("#product_price").val();
  var pql = $("#product_quantity").val();
  if (a == "" || pn == "" || pp == "" || pql == "") {
    return $("#notification").html(
      '<div class="error">There is some problem.<a href="#" class="close">X</a></div>'
    );
  } else {
    var obj = {
      PrSku: a,
      PrName: pn,
      PrPrice: pp,
      PQl: pql,
    };
    arr.push(obj);
    console.log(arr);
    $("#product_list").append(
      "<tr><td>" +
        a +
        "</td><td>" +
        pn +
        "</td><td>" +
        pp +
        "</td><td>" +
        pql +
        '</td><td><a href="#" class="edit">Edit</a><a onclick="del()" href="#" class="delete">Delete</a></td>'
    );
    return $("#notification").html(
      '<div class="success">Product Added Successfully.<a href="#" class="close">X</a></div>'
    );
  }
}
function del(){
  

}
