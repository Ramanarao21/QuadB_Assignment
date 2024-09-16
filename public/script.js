const fetchCryptData = async () => {

    try {
        const response = await fetch('http://localhost:5000/api/getTop10');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        } 
        
        const data = await response.json();
        console.log(data);
        const tableBody = document.querySelector("#cryptoTable tbody");
        tableBody.innerHTML = ""

        if(data.success){
            data.top10Data.forEach(element => {
                const eachline = `
                <tr>
                <td>${element.name}</td>
                 <td>${element.last}</td>
                 <td>${element.buy}</td>
                 <td>${element.sell}</td>
                <td>${element.volume}</td>
                 <td>${element.base_unit}</td>
                </tr>`

                tableBody.innerHTML += eachline;
            })
        }else {
            console.log("Unable to fetch", data.error);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
};


fetchCryptData();
setInterval(fetchCryptData, 60000);
