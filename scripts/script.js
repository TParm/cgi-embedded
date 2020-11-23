$(() => {
    checkCookie();
    fetchData('./data/cgidata.json')
        .then((checkins) => {
            displayData(checkins)
        })
})

const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        alert(`Something went wrong, status ${response.status}.`);
        return;
    }
    return await response.json();
}

const displayData = (checkins) => {
    const td = data => `<td>${data}</td>`;
    const tr = (rowid, name, place, datetime) => {
        return `<tr id="${rowid}">${td(name) + td(place) + td(datetime)}</tr>`;
    }
    let trs = [];

    for (let i = 0; i < checkins.length; i++) {
        trs.push(
            tr(
                i,
                checkins[i].name,
                checkins[i].place,
                checkins[i].datetime
            )
        )
    }

    for (row of trs) $('#tbody-data').append(row);
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  if (user != "") {
    console.log("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
