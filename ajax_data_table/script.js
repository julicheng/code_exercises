// fetch the data and run it through the displayInTable function to display it in the table
fetch(
  `http://search-api.fie.future.net.uk/widget.php?id=review&site=TRD&model_name=iPad_Air`
)
  .then(response => response.json())
  .then(displayInTable);

function displayInTable(data) {
  const offers = data.widget.data.offers;

  const table = document.querySelector("tbody");

  for (let i = 0; i < offers.length; i++) {
    const merchantLogo =
      "<img src='" + offers[i].merchant.logo_url + "' alt='logo'/>";
    const merchantName = offers[i].merchant.name;
    const productName = offers[i].offer.name;
    const productPrice =
      offers[i].offer.currency_symbol + offers[i].offer.price;
    const productLink =
      "<a href='" +
      offers[i].offer.link +
      "' target='_blank'>Click to buy here!</a>";

    const row =
      "<tr><td>" +
      merchantLogo +
      "</td><td>" +
      merchantName +
      "</td><td>" +
      productName +
      "</td><td>" +
      productPrice +
      "</td><td>" +
      productLink +
      "</td></tr>";

    table.insertAdjacentHTML("beforeend", row);
  }
}
