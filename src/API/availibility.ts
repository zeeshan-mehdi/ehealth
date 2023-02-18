
function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
}
export function getAvailibility():Array<String>{
    return getRandomTime();
    //return ['01/19/2023, 15:00:24','01/19/2023, 16:00:24','01/19/2023, 17:00:24','01/20/2023, 10:00:00','01/20/2023, 11:00:00'];
}

function getRandomTime(){
    let times = [
        '07:00:00',
        '07:30:00',
        '8:00:00',
        '08:30:00',
        '09:00:00',
        '09:30:00',
        '10:00:00',
        '10:30:00',
        '11:00:00',
        '11:30:00',
        '12:00:00',
        '12:30:00',
        '13:00:00',
        '13:30:00',
        '14:00:00',
        '14:30:00',
        '15:00:00',
        '15:30:00',
        '16:00:00',
        '16:30:00',
        '17:00:00',
        '17:30:00',
        '18:00:00',
        '18:30:00',
        '19:00:00',
        '19:30:00',
        '20:00:00',
        '20:30:00',
        '21:00:00',
        '21:30:00',
        '22:00:00',
        '22:30:00',
        '23:00:00',
        '23:30:00',
        '12:00:00',
    ]

    let numberOfEntries = getRandomInt(25);

    let randomNumbers = []

    for(let i=0;i<numberOfEntries;i++){
        let num = getRandomInt(33);
        if(randomNumbers.indexOf(num) === -1)
            randomNumbers.push(num);
    }

    randomNumbers = randomNumbers.sort((a,b)=>a-b);

    let nowDate = new Date();

    let availableDates = [];

    for(let i=0;i<5;i++){

        var date = (nowDate.getMonth()+1)+'/'+(nowDate.getDate()+i)+'/'+nowDate.getFullYear(); 
        for(let j=i*5;j<(i*5)+5;j++){
            availableDates.push(`${date}, ${times[j]}`);
        }
    }

    return availableDates;




}