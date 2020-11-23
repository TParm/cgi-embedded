$(() => {
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
