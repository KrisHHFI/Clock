const full_Turn = 360;

function updateClock() {
    const localTime = new Date();

    // Get the current hours, minutes, and seconds
    const date = localTime.getDate();
    const hours = localTime.getHours();
    const minutes = localTime.getMinutes();
    const seconds = localTime.getSeconds();

    // Calculate the rotation angles
    let hourRotation = ((hours % 12) / 12) * full_Turn; // 12 hours in a clock, 360 degrees in a circle
    hourRotation += (minutes / 60) * 30; // 30 degrees per hour (360 degrees / 12 hours)
    const minuteRotation = (minutes / 60) * full_Turn; // 60 minutes in an hour, 360 degrees in a circle
    const secondRotation = ((seconds + localTime.getMilliseconds() / 1000) / 60) * full_Turn;

    // Get the clock elements
    const dateContainer = document.getElementById('date');
    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');
    const secondHandGear = document.getElementById('secondHandGear');
    const secondHandGear2 = document.getElementById('secondHandGear2');
    const signedGear = document.getElementById('signedGear');
    const signedGearBulkier = document.getElementById('signedGearBulkier');
    const signedGearSmall = document.getElementById('signedGearSmall');
    const minuteHandGear = document.querySelector('.minuteHandGearImage');
    const hourHandGear = document.getElementById('hourHandGear');

    // Apply the date to the date container
    dateContainer.innerHTML = date;

    // Apply the rotations to the clock hands
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;

    // Rotate the gears
    secondHandGear.style.transform = `translate(-50%, -50%) rotate(${secondRotation}deg)`;
    secondHandGear2.style.transform = `translate(-50%, -50%) rotate(${secondRotation}deg)`;
    signedGear.style.transform = `translate(-50%, -50%) rotate(${secondRotation}deg)`;
    minuteHandGear.style.transform = `translate(-50%, -50%) rotate(${minuteRotation}deg)`;
    signedGearBulkier.style.transform = `translate(-50%, -50%) rotate(${-minuteRotation}deg)`;
    signedGearSmall.style.transform = `translate(-50%, -50%) rotate(${-hourRotation}deg)`;
    hourHandGear.style.transform = `translate(-50%, -50%) rotate(${hourRotation}deg)`;
}

let toggle = true;

function clockInteriorToggle() {
    const clockFace = document.querySelector('.face');
    const alphanumerics = document.querySelectorAll('.alphanumerics');
    const gears = document.querySelectorAll('.gears');

    if (toggle === true) {
        clockFace.style.backgroundColor = '#fffcf5';

        alphanumerics.forEach(function (alphanumeric) {
            alphanumeric.style.display = 'block';
        });

        gears.forEach(function (gear) {
            gear.style.display = 'none';
        });

        toggle = false;
    } else {
        clockFace.style.backgroundColor = 'transparent';

        alphanumerics.forEach(function (alphanumeric) {
            alphanumeric.style.display = 'none';
        });

        gears.forEach(function (gear) {
            gear.style.display = 'block';
        });

        toggle = true;
    }
}

function initializeClock() {
    clockInteriorToggle();
    updateClock();
    setInterval(updateClock, 100); // Update every 100 milliseconds
}

document.addEventListener("DOMContentLoaded", initializeClock);