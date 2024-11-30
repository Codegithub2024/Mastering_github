const date = document.querySelector("#date");
const month = new Date().getMonth();
let monthInLetter = "";
const year = new Date().getFullYear();

switch (month) {
    case 1:
        monthInLetter = "Janvier";
        break;
    case 2:
        monthInLetter = "Fevrier";
        break;
    case 3:
        monthInLetter = "Mars";
        break;
    case 4:
        monthInLetter = "Avril";
        break;
    case 5:
        monthInLetter = "Mai";
        break;
    case 6:
        monthInLetter = "Juin";
        break;
    case 7:
        monthInLetter = "juillet";
        break;
    case 8:
        monthInLetter = "Aout";
        break;
    case 9:
        monthInLetter = "Septembre";
        break;
    case 10:
        monthInLetter = "Octobre";
        break;
    case 11:
        monthInLetter = "Novembre";
        break;
    case 12:
        monthInLetter = "Decembre";
        break;
    default:
        console.log("hello");
        console.log(month);
}

date.innerHTML = monthInLetter + " " + year;
