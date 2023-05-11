
const infoBox = document.getElementById("infoBox")
const hoursBox = document.getElementById("hoursBox")
const button = document.getElementById("getHours")
const currentDate = new Date()
const newDate = new Date()

for (let i = 1; i <= 6; i++) {
  newDate.setTime(currentDate.getTime() + ((90 + 14) * i * 60 * 1000))
  const hourToSleep = `${newDate.getHours()}:${newDate.getMinutes()}`

  li = document.createElement("li")
  li.innerText = hourToSleep
  hoursBox.appendChild(li)
}

button.addEventListener("click", () => infoBox.classList.add("visible"))
//button.addEventListener("click", () => console.log("visible"))