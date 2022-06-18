const movies = [
    {
        id: 1,
        title: "마녀(魔女) Part2. The Other One",
        ages: 15,
        playTime: 120, // min
        startTimes: [
            "09:30",
            "13:00",
            "15:30",
            "18:00",
            "20:30",
            "23:00"
        ]
    },
    {
        id: 2,
        title: "짱구는 못말려 극장판: 핸더랜드의 대모험",
        ages: 0,
        playTime: 120, // min
        startTimes: [
            "09:20",
            "12:50",
            "15:20",
            "17:50",
            "20:20",
            "22:50"
        ]
    },
    {
        id: 3,
        title: "브로커",
        ages: 12,
        playTime: 120, // min
        startTimes: [
            "09:10",
            "12:40",
            "15:10",
            "17:40",
            "20:10",
            "22:40"
        ]
    },
    {
        id: 4,
        title: "실종",
        ages: 19,
        playTime: 120, // min
        startTimes: [
            "09:30",
            "13:00",
            "15:30",
            "18:00",
            "20:30",
            "23:00"
        ]
    },
    {
        id: 5,
        title: "귀멸의 칼날: 무한열차편",
        ages: 15,
        playTime: 120, // min
        startTimes: [
            "09:20",
            "12:50",
            "15:20",
            "17:50",
            "20:20",
            "22:50"
        ]
    },
    {
        id: 6,
        title: "닥터 스트레인지: 대혼돈의 멀티버스",
        ages: 12,
        playTime: 120, // min
        startTimes: [
            "09:10",
            "12:40",
            "15:10",
            "17:40",
            "20:10",
            "22:40"
        ]
    }
];

const nameArea = document.getElementById('nameArea');
const timeArea = document.getElementById('timeArea');

nameArea.innerHTML = "";
timeArea.innerHTML = "";

for (const movie of movies) {
    nameArea.innerHTML += `
    <label class="movie" for="${movie.id}">
        <div class="grade_15up">${movie.ages}</div>
        <p>${movie.title}</p>
        <img src="images/check.png" class="check" width="35px" height="35px">
    </label>
    `;
}