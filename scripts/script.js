$(() => {
    fetchData('https://randomuser.me/api/')
        .then((x) => {
            console.log(x)
            const td = d => `<td>${d}</td>`;
            const gender = td(x.results[0].gender);
            const tr = `<tr>${gender}</tr>`
            $('#tbody-data').append(tr);
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