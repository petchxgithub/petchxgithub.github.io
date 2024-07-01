const VAT_RATE = 0.07;
let totalPrice = 0;

function addToProductList() {
  const total = $("#total");
  if (total.hasClass("hidden")) {
    total.removeClass("hidden");
  }
  const accessory = $("#accessory").val();
  const amount = $("#amount").val();
  const price = calculatePrice(accessory) * amount;
  $("#productList").append(
    "<tr ><td class='border-2 border-black '>" +
      accessory +
      "</td><td class='border-2 border-black '>" +
      amount +
      "</td><td class='border-2 border-black '>$" +
      price +
      "</td></tr>",
  );
  updateTotalPrice(price);
}

function calculatePrice(accessory) {
  // Add your own logic to calculate the price based on the selected accessory
  switch (accessory) {
    case "p111":
      return 10;
    case "p222":
      return 20;
    case "p333":
      return 30;
    case "p444":
      return 40;
    // Add more cases as
    default:
      return 0;
  }
}

function calculateVAT() {
  const vatAmount = (totalPrice * VAT_RATE).toFixed(2);
  const netPrice = (parseFloat(totalPrice) + parseFloat(vatAmount)).toFixed(2);
  $("#vat").text(`VAT: ${vatAmount}`);
  $("#netPrice").text(`Net Price: ${netPrice}`);
}

function updateTotalPrice(price) {
  totalPrice += price;
  $("#totalPrice").text(totalPrice.toFixed(2));
  calculateVAT();
}
