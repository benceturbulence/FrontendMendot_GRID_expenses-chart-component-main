async function getData(){
    let data = await fetch(`data.json`)
    let findata = await data.json()
    return findata
}

/* after getting the data it workds with this data */
/* creates a new array that applies the setHTML funciton on each element of the array */
/* joining the array and addign to the html*/ 

getData().then(column => {
    let htmlArray = column.map(element => setHtml(element)).join('')
    document.getElementById('column_container').innerHTML = htmlArray
    
})

getData()




function setHtml(data){
    return `
    <div class="column">
    <span class="col" style ="width: 100%; height: ${data.amount*2.5}px"></span>
    <p class = "days accent">${data.day}</p>
    </div>
    `
}
