var workItemList = [
  "Has worked for COB for 5+ years",
  "Has worked for COB for less than 5 years",
  "Donated to the holiday drive this year",
  "Has said, 'sorry I was on mute' in a meeting this week",
  "Has attended more than 3 meetings today already",
  "Has said, 'can everyone see my screen?' today",
  "Always uses a custom background image",
  "Has never customized their virtual meeting background image",
  "Has dialed in rather than joined a virtual meeting this week",
  "Has dropped a virtual meeting call this week",
  "Went over a virtual meeting time today",
  "Rescheduled a virtual meeting today",
  "Has asked someone to repeat what they said in a meeting call today",
  "Has said, “sorry, who is speaking?” in a recent meeting",
  "Nominated a colleague for recognition or thanks this month",
  "Has had a child interrupt a meeting this month",
  "Has had a pet interrupt a meeting this month",
  "Has a family member in the background of the meeting",
  "Has multitasked during a meeting",
  "Has attended a virtual meeting while driving",
  "Has attended a virtual meeting while walking",
  "Has multiple headphones for virtual meetings",
  "Has forgotten to mute their mic in a meeting",
  "Has had power go out during a meeting",
  "Misses seeing everyone at the office",
  "Has been in a meeting when everyone starts talking at once",
  "Has done the laundry while on a call",
  "Has not been in City Hall since March",
  "Has told a colleague they were on mute in a meeting this week"
];

var holidayItemList = [
  "Celebrates a birthday in December",
  "Can name ALL of Santa’s Reindeer",
  "Liked the live action Grinch movie more than the cartoon",
  "Has decorated for the holidays",
  "Has a Christmas stocking in the background",
  "Can share a holiday pun",
  "Is wearing a holiday sweater",
  "Believes Christmas is overly commercial",
  "Decorates more than 1 tree",
  "Can whistle 10 seconds of any holiday song that others recognize",
  "Has an annual holiday tradition",
  "Is a self-described Scrooge",
  "Watched a holiday movie this year already",
  "Loves the holidays",
  "Has an unusual tradition",
  "Has a holiday disaster story",
  "Loves a big holiday meal",
  "Has celebrated the holidays in another country",
  "Has worked retail on Black Friday",
  "Has attended a Friends&shygiving",
  "Loves holiday leftovers",
  "Dines out / caters holiday meals",
  "Will demonstrate their best Turkey impression",
  "Goes Black Friday / Cyber Monday shopping",
  "Prefers apple over pumpkin pie",
  "Sends holiday cards",
  "Typically goes caroling over the holiday",
  "Celebrated Diwali this year",
  "Knows how many days are in Diwali",
  "Started celebrating Christmas in September",
  "Celebrates Chinese New Year in the spring",
  "Celebrates Hanukkah / Chanukah",
  "Will share a holiday joke",
  "Did something spontaneous last holiday",
  "Owns several holiday sweaters",
  "Prefers Secret Santa to White Elephant",
  "Prefers White Elephant to Secret Santa"
];

var personalItemList = [
  "Has a YouTube Channel",
  "Has traveled to China",
  "Has more than 1 pet",
  "Can speak another language",
  "Born in a state outside of Washington",
  "Prefers tea over coffee",
  "Has more than two siblings",
  "Is an only child",
  "Keeps birthday a secret",
  "Born on a holiday",
  "Has a family cookie recipe",
  "Woke up before 6am today",
  "Prefers pie over cake",
  "Prefers waffles over pancakes",
  "Knows the move to Macarena",
  "Owns a landline",
  "Previously worked for a car dealership",
  "Wore slippers to this meeting",
  "Is scheduling a virtual holiday party this year",
  "Is scheduling vacation around the holidays",
  "Is Vegetarian / Vegan",
  "Thanksgiving is favorite holiday",
  "Has seen a turkey in real life",
  "Willing to share a family recipe",
  "Takes their birthday off work",
  "Like True Crime as a genre",
  "Orders takeout more than 3 times per week",
  "Went camping this year",
  "Likes eggnog",
  "Skis or snowboards",
  "Driven over the Washington passes this year",
  "Is or their partner is pregnant / expecting",
  "Knows how to weld",
  "Has built a house or structure",
  "Knows all the words to 'Let It Go' from Frozen",
  "Knows all the words to 'My Shot' from Hamilton",
  "Has a signature Karaoke song",
  "Has seen two or more Ken Burns documentaries",
  "Has volunteered at a radio/tv membership pledge drive",
  "Has gone clamming or tide pooling on the coast",
  "Has lived in 5 states or more",
  "Was once in a musical group",
  "Owns a kayak",
  "Owns a paddle board",
  "Owns a vintage / classic car",
  "Attended a sporting event at the King Dome",
  "Attended a sporting event at Key Arena",
  "Prefers the beach to the mountains",
  "Prefers the mountains to the beach",
  "Remembers the last restaurant they dined out at",
  "Will name the last tv show they binge-watched",
  "Prefers the country to the city",
  "Prefers the city to the country",
  "Plans to retire within the next 5 years",
  "Is planning a long vacation when the pandemic ends",
  "Had a worse year than 2020"
];

function getIndex(list) {
  return Math.floor(Math.random() * list.length);
}

function createCard() {
  let card = document.getElementById("card");
  let workItems = workItemList.slice(0);
  let holidayItems = holidayItemList.slice(0);
  let personalItems = personalItemList.slice(0);

  let items = []
  for (let list of [workItems, holidayItems, personalItems]) {
    for (i=0; i<5; i++) {
      let index = getIndex(list);
      let item = list[index];
      items.push(item);
      list.splice(index, 1);
    }
  }

  let list = workItems.concat(holidayItems, personalItems);
  for (i=0; i<9; i++) {
    let index = getIndex(list)
    items.push(list[index])
    list.splice(index, 1);
  }

  for (i=0; i<5; i++) {
    let row = document.createElement("tr");
    card.appendChild(row);

    for (j=0; j<5; j++) {
      let cell = document.createElement("td");
      row.appendChild(cell);
      let item;

      if (i===2 && j===2) {
        cell.classList.add("selected");
        cell.style.backgroundImage = "url('https://mybuildingpermit.com/sites/default/files/logo/logos-bellevue2-01.png')";
        cell.style.backgroundSize = "cover";
        cell.style.backgroundPosition = "center center";
        cell.style.backgroundRepeat = "no-repeat";
        cell.style.color = "rgba(0,0,0,0)";
        cell.innerHTML = "City of Bellevue Free Space 🙂";
      }
      else {
        let index = getIndex(items);
        item = items[index];
        items.splice(index, 1);
        cell.innerHTML = item;
        cell.onclick = cellOnClick;
      }
      cell.classList.add("row"+i);
      cell.classList.add("column"+j);
      if (i===j) {
        cell.classList.add('diagonal-dr');
      }
      if (i+j===4) {
        cell.classList.add('diagonal-ur');
      }
    }
  }
}

function cellOnClick() {
  this.classList.toggle("selected");
  for (i=0; i<5; i++) {
    let col = document.getElementsByClassName('column'+i+' selected')
    if (col.length === 5) { youWon(col); return; }
    let row = document.getElementsByClassName('row'+i+' selected')
    if (row.length === 5) { youWon(row); return; }
  }
  let ddr = document.getElementsByClassName('diagonal-dr'+' selected')
  if (ddr.length === 5) { youWon(ddr); return; }
  let dur = document.getElementsByClassName('diagonal-ur'+' selected')
  if (dur.length === 5) { youWon(dur); return; }
}

function youWon(els) {
  w5 = document.getElementById('winning5');
  w5.innerHTML = '';
  for (let el of els) {
    let li = document.createElement('li')
    li.innerHTML = el.innerHTML;
    w5.appendChild(li);
  }
  let modal = document.getElementById('bingo-modal');
  modal.classList.toggle('shown');
}

function clearCard() {
  let card = document.getElementById("card");
  let blankCard = card.cloneNode(false);
  card.parentNode.replaceChild(blankCard, card);
}

function newCard() {
  clearCard();
  createCard();
}

function clearList() {
  let list = document.getElementById("list");
  let blankList = list.cloneNode(false);
  list.parentNode.replaceChild(blankList, list);
}

function newList() {
  clearList();
  createList();
}

function showList() {
  document.getElementById("card").classList.add("noshow");
  document.getElementById("new-card").classList.add("noshow");
  document.getElementById("player-rules").classList.add("noshow");
  document.getElementById("list").classList.remove("noshow");
  document.getElementById("new-list").classList.remove("noshow");
  document.getElementById("caller-rules").classList.remove("noshow");
}
function showCard() {
  document.getElementById("list").classList.add("noshow");
  document.getElementById("new-list").classList.add("noshow");
  document.getElementById("caller-rules").classList.add("noshow");
  document.getElementById("card").classList.remove("noshow");
  document.getElementById("new-card").classList.remove("noshow");
  document.getElementById("player-rules").classList.remove("noshow");
}

function createList() {
  let workItems = workItemList.slice(0);
  let holidayItems = holidayItemList.slice(0);
  let personalItems = personalItemList.slice(0);

  let allItems = workItems.concat(holidayItems, personalItems);
  let list = document.getElementById("list");

  while (allItems.length > 0) {
    let index = getIndex(allItems);
    let item = allItems[index];
    allItems.splice(index, 1);

    let listItem = document.createElement("div");
    listItem.innerHTML = item;
    listItem.onclick = function() { this.classList.toggle("read"); };
    list.appendChild(listItem);
  }
}

function createGame() {
  createCard();
  createList();
}

function reset() {
  document.getElementById("bingo-modal").classList.remove("shown");
}

if (document.addEventListener) document.addEventListener("DOMContentLoaded", createGame, false);
else if (document.attachEvent) document.attachEvent("onreadystatechange", createGame);
else window.onload = createGame;
