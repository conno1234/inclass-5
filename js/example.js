// ADD NEW ITEM TO END OF LIST
var groceryList = document.getElementsByTagName('ul')[0];
var li = document.createElement("li");
li.appendChild(document.createTextNode("cream"));
groceryList.appendChild(li);

// ADD NEW ITEM START OF LIST
var groceryList = document.getElementsByTagName('ul')[0];
var li = document.createElement("li");
li.appendChild(document.createTextNode("kale"));
groceryList.insertBefore(li, groceryList.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var lis = document.getElementsByTagName('li');

for(var i = 0; i < lis.length; i++) {
  lis[i].className = "cool";
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var lis = document.getElementsByTagName('li');
var count = lis.length;
var h2 = document.getElementsByTagName('h2')[0];
var mySpan = document.createElement('span');
mySpan.appendChild(document.createTextNode(count));
h2.appendChild(mySpan);
