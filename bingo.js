var itemList = [
  "Acai",
  "Apples",
  "Apricots",
  "Avocado",
  "Ackee",
  "Bananas",
  "Bilberries",
  "Blueberries",
  "Blackberries",
  "Boysenberries",
  "Bread fruit",
  "Cantaloupes (cantalope)",
  "Chocolate-Fruit",
  "Cherimoya",
  "Cherries",
  "Cranberries",
  "Cucumbers",
  "Currants",
  "Dates",
  "Durian",
  "Eggplant",
  "Elderberries",
  "Figs",
  "Gooseberries",
  "Grapes",
  "Grapefruit",
  "Guava",
  "Honeydew melons",
  "Horned melon (Kiwano)",
  "Huckleberries",
  "Ita Palm",
  "Jujubes",
  "Kiwis",
  "Kumquat",
  "Lemons",
  "Limes",
  "Lychees",
  "Mangos",
  "Mangosteen",
  "Mulberries",
  "Muskmelon",
  "Nectarines",
  "Ogden melons",
  "Olives",
  "Oranges",
  "Papaya",
  "Passion fruit",
  "Peaches",
  "Pears",
  "Peppers",
  "Persimmon",
  "Pineapple",
  "Plums",
  "Pluot",
  "Pomegranate",
  "Prickly Pear",
  "Quince",
  "Rambuton",
  "Raspberries",
  "Rose Apple",
  "Starfruit",
  "Sapadilla",
  "Strawberries",
  "Tamarind",
  "Tangelo",
  "Tangerines",
  "Tomatoes",
  "Ugli fruit",
  "Voavanga (Spanish Tamarind)",
  "Watermelons",
  "Xigua melon",
  "Yellow watermelon",
  "Zucchini"
];

function createCard() {
  var card = document.getElementById("card");
  let items = itemList.slice(0)

  for (i=0; i<5; i++) {
    var row = document.createElement("tr");
    card.appendChild(row);

    for (j=0; j<5; j++) {
      var cell = document.createElement("td");
      row.appendChild(cell);

      if (i===2 && j===2) {
        item = "Freebie";
        cell.classList.add("selected");
      }
      else {
        var index = Math.floor( Math.random() * items.length );
        item = items[index];
        items.splice(index, 1);
        cell.onclick = function() { this.classList.toggle("selected"); };
      }

      cell.innerHTML = item;
    }
  }
}

function clearCard() {
  var card = document.getElementById("card");
  var blankCard = card.cloneNode(false);
  card.parentNode.replaceChild(blankCard, card);
}

function rebuildCard() {
  clearCard();
  createCard();
}

if (document.addEventListener) document.addEventListener("DOMContentLoaded", createCard, false);
else if (document.attachEvent) document.attachEvent("onreadystatechange", createCard);
else window.onload = createCard;
