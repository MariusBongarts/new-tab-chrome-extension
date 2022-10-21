const styles = () => `
<style>
:host {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  --grid-color: #ffffff9c;
  --circle-font-color: #333;
}

#month, #daysLabels, #calendar, #info, .seanSocial {
  width: 100%;
  display: flex;
  justify-content: center;
}

.seanSocial span {
  font-size: 12px;
  color: #898989;
  background: #ffffffa1;
  border-radius: 10ppa;
  padding: 4px 10px;
  border-radius: 2px;
}

.seanSocial span a {
  color: #898989;
}

.dayContainer {
  position: relative;
  outline: 1px solid var(--grid-color);
  margin-top: 1px;
  margin-left: 1px;
  display: grid;
  grid-template: 50% 50%/50% 50%;
}

#taskLabels input {
  background: #ffffff99;
}

.square, .squareLabel {
  opacity: 0.75;
}

.circle {
  opacity: 0.95;
}

.emptyDay {
  background: transparent;
}

@media screen and (max-width: 900px) {
  #calendar {
    display: grid;
    justify-content: center;
    grid-template: repeat(5, 54px) / repeat(7, 54px);
  }

  .square:nth-child(1) {
    border-bottom: 1px solid var(--grid-color);
    border-right: 1px solid var(--grid-color);
  }

  .square:nth-child(2) {
    border-bottom: 1px solid var(--grid-color);
  }

  .square:nth-child(3) {
    border-right: 1px solid var(--grid-color);
  }

  .dayContainer .circle {
    position: absolute;
    background: #ffffff;
    border-radius: 50%;
    border: 1px solid var(--grid-color);
    z-index: 0;
    width: 20px;
    height: 20px;
    top: 15px;
    left: 15px;
  }

  .dayContainer .circle .day {
    font-size: 10px;
    text-align: center;
    line-height: 20px;
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: var(--circle-font-color);
  }

  #daysLabels {
    width: 378px;
    margin: 0 auto;
    font-size: 10px;
  }

  #daysLabels span {
    width: 54px;
    display: inline-block;
  }

  #month {
    margin: 0 auto;
    display: inline;
  }
  #month div {
    display: inline;
    cursor: pointer;
  }

  #monthLabel {
    margin: 0;
    cursor: default;
    text-shadow: 2px 2px 2px #ccc;
    display: inline;
    padding: 0 1em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  #info {
    width: 378px;
    margin: 0 auto;
  }

  #taskLabels {
    width: 324px;
    text-align: left;
    list-style: none;
    padding: 0;
    float: left;
    margin: 10px 0;
  }

  #taskLabels > li {
    min-width: 230px;
  }

  #taskLabels > li input[type="color"] {
    width: 1.5vw;
    height: 1.5vw;
    display: inline-block;
    margin-right: 1vw;
    position: relative;
    top: 0;
    border: 1px solid var(--grid-color);
    cursor: pointer;
  }

  #taskLabels > li input {
    border: none;
    border-bottom: 1px solid var(--grid-color);
    padding: 5px;
    padding-bottom: 0;
    outline: none;
    width: 70%;
    color: #666;
    font-size: 2vh;
  }

  #taskExample {
    width: 54px;
    height: 54px;
    position: relative;
    top: 50px;
    cursor: pointer;
  }

  #about .mySocial {
    position: absolute;
    top: 25px;
    left: 25px;
  }
  #about .mySocial a {
    display: inline-block;
    height: 2.5em;
  }
  #about .mySocial a i {
    font-size: 1.5em;
  }
  #about .mySocial a i.fa-linkedin {
    color: #0073b0;
  }
  #about .mySocial a i.fa-github {
    color: #24292e;
  }
  #about .mySocial a i.fa-twitter {
    color: #1da1f2;
  }


  .hidden {
    visibility: hidden;
  }

  input::-webkit-color-swatch {
    border: none;
  }
}
@media screen and (min-width: 900px) {
  #calendar {
    display: grid;
    justify-content: center;
    grid-template: repeat(5, 5vw) / repeat(7, 5vw);
  }

  .square:nth-child(1) {
    border-bottom: 1px solid var(--grid-color);
    border-right: 1px solid var(--grid-color);
  }

  .square:nth-child(2) {
    border-bottom: 1px solid var(--grid-color);
  }

  .square:nth-child(3) {
    border-right: 1px solid var(--grid-color);
  }

  .dayContainer .circle {
    position: absolute;
    background: #ffffff;
    border-radius: 50%;
    border: 1px solid var(--grid-color);
    z-index: 0;
    width: 1.5vw;
    height: 1.5vw;
    top: 1.75vw;
    left: 1.75vw;
  }

  .dayContainer .circle .day {
    font-size: 0.75vw;
    text-align: center;
    line-height: 1.5vw;
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: var(--circle-font-color);
  }

  #daysLabels {
    width: 35vw;
    margin: 0 auto;
    font-size: 0.75vw;
  }

  #daysLabels span {
    width: 5vw;
    display: inline-block;
  }

  #month {
    margin: 0 auto;
    display: inline;
  }
  #month div {
    display: inline;
    cursor: pointer;
  }

  #monthLabel {
    margin: 0;
    cursor: default;
    text-shadow: 2px 2px 2px #ccc;
    display: inline;
    padding: 0 1em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  #info {
    width: 35vw;
    margin: 0 auto;
  }

  #taskLabels {
    width: 30vw;
    text-align: left;
    list-style: none;
    padding: 0;
    float: left;
    margin: 10px 0;
  }

  #taskLabels > li {
    min-width: 230px;
  }

  #taskLabels > li input[type="color"] {
    width: 1.5vw;
    height: 1.5vw;
    display: inline-block;
    margin-right: 1vw;
    position: relative;
    top: 0;
    border: 1px solid var(--grid-color);
    cursor: pointer;
  }

  #taskLabels > li input {
    border: none;
    border-bottom: 1px solid var(--grid-color);
    padding: 5px;
    padding-bottom: 0;
    outline: none;
    width: 70%;
    color: #666;
    font-size: 2vh;
  }

  #taskExample {
    width: 5vw;
    height: 5vw;
    position: relative;
    top: 50px;
    cursor: pointer;
  }

  #about .mySocial {
    position: absolute;
    top: 25px;
    left: 25px;
  }
  #about .mySocial a {
    display: inline-block;
    height: 2.5em;
  }
  #about .mySocial a i {
    font-size: 1.5em;
  }
  #about .mySocial a i.fa-linkedin {
    color: #0073b0;
  }
  #about .mySocial a i.fa-github {
    color: #24292e;
  }
  #about .mySocial a i.fa-twitter {
    color: #1da1f2;
  }


  .hidden {
    visibility: hidden;
  }

  input::-webkit-color-swatch {
    border: none;
  }

  body {
    overflow-x: hidden;
  }
}
</style>
`;
const template = () => `
${styles()}
<div id="month">
  <div id="previousMonth"><i class="fa fa-arrow-left"></i></div>
  <h1 id="monthLabel"></h1>
  <div id="nextMonth"><i class="fa fa-arrow-right"></i></div>
</div>
<div id="daysLabels"></div>
<div id="calendar"></div>
<div id="info">
  <ul id="taskLabels"></ul>
  <div id="taskExample" class="dayContainer"></div>
</div>

<div class="seanSocial">
  <span>Props to <a href="https://twitter.com/rominamartinlib" target="_new" class="social">Romina Martín</a> and <a href="https://seanwes.com" target="_new" class="social">Sean McCabe</a> <br>who are the creator of the <a
      href="https://codepen.io/RominaMartin/pen/Pdpbjo" target="_new" class="social">Five-Habit Tracker</a></span>
</div>
`;
class FiveHabitTracker extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = template();
    this.init();
  }

  init() {
    /*** CONSTANTS ***/
    const CALENDAR = this.shadowRoot.getElementById("calendar");
    const MONTH_NAMES = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const DAY_NAMES = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const CURRENT_DATE = new Date();

    let selectedMonth = CURRENT_DATE.getMonth();
    let availableMonths = [CURRENT_DATE.getMonth()];

    let EXAMPLE_TASKS = {
      0: { color: "#d11141", label: "Wake up at 7:00" },
      1: { color: "#00b159", label: "Make bed" },
      2: { color: "#00aedb", label: "Dinner before 23:00" },
      3: { color: "#f37735", label: "Practice Ukulele" },
      4: { color: "#ffc425", label: "Go exercise" },
    };

    function init() {
      checkLocalStorage();
      createDateInfo();
      createCalendarStructure();
      createInfoStructure();
    }

    var checkLocalStorage = () => {
      if (
        window.localStorage.currentMonth === undefined ||
        window.localStorage.data === undefined
      ) {
        localStorage.setItem("currentMonth", CURRENT_DATE.getMonth());
        let currentData = {
          [CURRENT_DATE.getMonth()]: { tasks: EXAMPLE_TASKS, data: {} },
        };
        localStorage.setItem("data", JSON.stringify(currentData));
      } else if (
        window.localStorage.currentMonth !== undefined &&
        window.localStorage.currentMonth != CURRENT_DATE.getMonth()
      ) {
        let previousData = JSON.parse(window.localStorage.data);

        if (getCurrentLocalStorageData() === undefined) {
          let confirmLoadPrevious = confirm(
            "Do you want to load your previous habits?"
          );

          let tasks = {};

          if (
            confirmLoadPrevious &&
            previousData[getPreviousMonth()] !== undefined
          )
            tasks = previousData[getPreviousMonth()].tasks;

          localStorage.setItem("currentMonth", CURRENT_DATE.getMonth());
          let currentData = {
            ...previousData,
            [CURRENT_DATE.getMonth()]: { tasks: tasks, data: {} },
          };

          localStorage.setItem("data", JSON.stringify(currentData));
        }
      }
      availableMonths = Object.keys(JSON.parse(window.localStorage.data));
    };

    var changeMonth = (month) => {
      selectedMonth = month;
      this.shadowRoot.getElementById("monthLabel").innerText =
        MONTH_NAMES[selectedMonth];
      checkMonthsAvailability();
      updateTasks();
      setCalendarData();
    };

    var updateTasks = () => {
      let inputs = this.shadowRoot.querySelectorAll(
        "#taskLabels input[type='text']"
      );

      inputs.forEach((task, i) => {
        colorSquareChanged(i);
        taskNameChanged(i);
      });
    };

    var setCalendarData = () => {
      let days = this.shadowRoot.querySelectorAll("#calendar .dayContainer");
      const startDay = getMonthDayStart();
      const monthDays = getDaysFromCurrentMonth();
      let currentData = getCurrentLocalStorageData().data;

      days.forEach((day, i) => {
        let daySquare = day.children;
        let dayNumber = i - startDay;
        if (i < startDay || dayNumber >= monthDays) {
          if (i < startDay) day.classList.add("emptyDay");

          for (let square = 0; square < daySquare.length; square++) {
            daySquare[square].classList.add("hidden");
          }
        } else if (dayNumber < monthDays) {
          day.classList.remove("emptyDay");
          for (let j = 0; j < daySquare.length; j++) {
            daySquare[j].onclick = () => {
              toggleTaskActive(dayNumber, j, daySquare[j]);
            };

            daySquare[j].classList.remove("hidden");
            daySquare[4].firstElementChild.innerText =
              j === 4
                ? dayNumber < 9
                  ? `0${dayNumber + 1}`
                  : dayNumber + 1
                : "";
            setColorTaskBackground(daySquare[j], j, currentData[dayNumber][j]);
          }
        }
      });
    };

    var createCalendarStructure = () => {
      const days = getDaysFromCurrentMonth();
      const startDay = getMonthDayStart();
      let currentData = getCurrentLocalStorageData().data;

      for (let i = 0; i < 35; i++) {
        let dayContainer = document.createElement("div");
        dayContainer.className = "dayContainer";

        let dayNumber = i - startDay;
        let dayIsPositive = i >= startDay;
        if (currentData[dayNumber] === undefined && dayIsPositive)
          currentData[dayNumber] = {};

        for (let j = 0; j < 5; j++) {
          if (dayIsPositive && Object.keys(currentData[dayNumber]).length < 5) {
            currentData[dayNumber][j] = false;
          }

          let task = document.createElement("div");
          let day = document.createElement("div");

          task.className = j !== 4 ? "square" : "circle";
          day.className = "day";

          if (i >= startDay && dayNumber < days) {
            day.innerText =
              task.className === "circle"
                ? dayNumber < 9
                  ? `0${dayNumber + 1}`
                  : dayNumber + 1
                : "";
            setColorTaskBackground(task, j, currentData[dayNumber][j]);
            task.onclick = () => {
              toggleTaskActive(dayNumber, j, task);
            };
          } else {
            if (i < startDay) dayContainer.classList.add("emptyDay");
            task.classList.add("hidden");
          }

          task.appendChild(day);
          dayContainer.appendChild(task);
        }

        let thisMonthData = {
          [CURRENT_DATE.getMonth()]: {
            tasks: getCurrentLocalStorageData().tasks,
            data: currentData,
          },
        };
        let data = {
          ...JSON.parse(window.localStorage.data),
          ...thisMonthData,
        };
        localStorage.setItem("data", JSON.stringify(data));

        CALENDAR.appendChild(dayContainer);
      }
    };

    var createDateInfo = () => {
      checkMonthsAvailability();

      DAY_NAMES.forEach((day) => {
        let dayLabel = document.createElement("span");
        dayLabel.textContent = day;
        this.shadowRoot.getElementById("daysLabels").appendChild(dayLabel);
      });
      this.shadowRoot.getElementById("monthLabel").innerText =
        MONTH_NAMES[selectedMonth];
    };

    var createInfoStructure = () => {
      let loadedTasks = getCurrentLocalStorageData().tasks;

      for (let i = 0; i < 5; i++) {
        let label = document.createElement("li");
        let input = document.createElement("input");
        let labelSquare = document.createElement("input");
        input.type = "text";
        labelSquare.type = "color";
        labelSquare.className = "squareLabel";

        let task = document.createElement("div");
        let day = document.createElement("div");

        task.className = i !== 4 ? "square" : "circle";
        day.className = "day";

        if (loadedTasks[i] !== undefined) {
          input.value = loadedTasks[i].label;
          labelSquare.style.background = loadedTasks[i].color;
          labelSquare.value = rgbToHex(loadedTasks[i].color);
          task.style.background = loadedTasks[i].color;
        } else {
          input.value = EXAMPLE_TASKS[i].label;
          labelSquare.value = rgbToHex(EXAMPLE_TASKS[i].color);
          labelSquare.style.background = EXAMPLE_TASKS[i].color;
          task.style.background = EXAMPLE_TASKS[i].color;
        }

        input.onchange = (inputData) => {
          taskNameChanged(i, inputData);
        };
        labelSquare.onchange = (inputColor) => {
          colorSquareChanged(i, inputColor);
        };
        task.onclick = () => {
          labelSquare.click();
        };

        label.appendChild(labelSquare);
        label.appendChild(input);
        this.shadowRoot.getElementById("taskLabels").appendChild(label);

        task.appendChild(day);
        this.shadowRoot.getElementById("taskExample").appendChild(task);
      }
    };

    var colorSquareChanged = (task, inputColor) => {
      let current = getCurrentLocalStorageData();
      let currentTasks = current.tasks;
      let value =
        inputColor === undefined
          ? currentTasks[task].color
          : inputColor.target.value;
      let currentItem = this.shadowRoot.querySelectorAll(
        "#taskLabels input[type='color']"
      )[task];

      value = rgbToHex(value);
      currentItem.value = value;
      currentItem.style.background = value;
      this.shadowRoot.getElementById("taskExample").children[
        task
      ].style.background = value;

      currentTasks = {
        ...currentTasks,
        [task]: {
          color: value,
          label: this.shadowRoot.querySelectorAll(
            "#taskLabels input[type='text']"
          )[task].value,
        },
      };

      let thisMonthData = {
        [selectedMonth]: { tasks: currentTasks, data: current.data },
      };
      let data = { ...JSON.parse(window.localStorage.data), ...thisMonthData };
      localStorage.setItem("data", JSON.stringify(data));

      let allTasks = this.shadowRoot.querySelectorAll(
        "#calendar .dayContainer:not(.emptyDay)"
      );
      current = getCurrentLocalStorageData();

      allTasks.forEach((square, task) => {
        let children = square.children;
        for (let i = 0; i < 5; i++) {
          if (
            current.tasks[i] !== undefined &&
            current.data[task] !== undefined &&
            current.data[task][i]
          )
            children[i].style.background = current.tasks[i].color;
        }
      });
    };

    var taskNameChanged = (task, inputData) => {
      let current = getCurrentLocalStorageData();
      let currentTasks = current.tasks;

      let value =
        inputData === undefined
          ? currentTasks[task].label
          : inputData.target.value;
      let colorContainers = getTaskSquares();

      currentTasks = {
        ...currentTasks,
        [task]: { color: colorContainers[task].style.background, label: value },
      };

      this.shadowRoot.querySelectorAll("#taskLabels input[type='text']")[
        task
      ].value = value;
      let thisMonthData = {
        [selectedMonth]: { tasks: currentTasks, data: current.data },
      };
      let data = { ...JSON.parse(window.localStorage.data), ...thisMonthData };
      localStorage.setItem("data", JSON.stringify(data));
    };

    var getTaskStatus = (day, task) => {
      let currentData = getCurrentLocalStorageData().data;
      return currentData[day][task];
    };

    var setTaskStatus = (day, task, status) => {
      let currentData = getCurrentLocalStorageData().data;
      currentData[day][task] = status;

      let thisMonthData = {
        [selectedMonth]: {
          tasks: getCurrentLocalStorageData().tasks,
          data: currentData,
        },
      };
      let data = { ...JSON.parse(window.localStorage.data), ...thisMonthData };
      localStorage.setItem("data", JSON.stringify(data));
    };

    var setColorTaskBackground = (element, task, completed) => {
      let currentTasks = getCurrentLocalStorageData().tasks;

      if (currentTasks[task] !== undefined)
        element.style.background = completed ? currentTasks[task].color : "";
      else
        element.style.background = completed ? EXAMPLE_TASKS[task].color : "";
    };

    var toggleTaskActive = (day, task, element) => {
      let completed = getTaskStatus(day, task);

      setTaskStatus(day, task, !completed);
      setColorTaskBackground(element, task, !completed);
    };

    var checkMonthsAvailability = () => {
      let nextMonth = this.shadowRoot.getElementById("nextMonth");
      let previousMonth = this.shadowRoot.getElementById("previousMonth");

      if (!availableMonths.includes(String(getNextMonth())))
        nextMonth.classList.add("hidden");
      else nextMonth.classList.remove("hidden");

      if (!availableMonths.includes(String(getPreviousMonth())))
        previousMonth.classList.add("hidden");
      else previousMonth.classList.remove("hidden");
    };

    /*** UTILS ***/
    var getDaysFromCurrentMonth = () =>
      new Date(CURRENT_DATE.getFullYear(), selectedMonth + 1, 0).getDate();
    var getMonthDayStart = () => {
      let startDay = new Date(
        CURRENT_DATE.getFullYear(),
        selectedMonth,
        1
      ).getDay();
      return startDay === 0 ? 6 : startDay - 1;
    };

    var getCurrentLocalStorageData = () =>
      JSON.parse(window.localStorage.data)[selectedMonth];

    var getTaskSquares = () =>
      this.shadowRoot.querySelectorAll("#taskLabels > li input[type='color']");

    var getPreviousMonth = () => {
      let month = selectedMonth - 1;
      return month < 0 ? 11 : month;
    };

    var getNextMonth = () => {
      let month = selectedMonth + 1;
      return month > 11 ? 0 : month;
    };

    var rgbToHex = (rgb) => {
      if (rgb.includes("#")) return rgb;
      rgb = rgb
        .replace(/(rgb)|\(|\)/g, "")
        .split(",")
        .map((val) => Number(val));
      return rgb.reduce(
        (acc, val) => acc + (0 + val.toString(16)).slice(-2),
        "#"
      );
    };

    this.shadowRoot.getElementById("nextMonth").onclick = () => {
      changeMonth(getNextMonth());
    };
    this.shadowRoot.getElementById("previousMonth").onclick = () => {
      changeMonth(getPreviousMonth());
    };

    init();
  }
}

customElements.define("five-habit-tracker", FiveHabitTracker);
