const month  =3;

//if your value is a number
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Default Case Match");
        break;
}

// if your value is a string
const Month = "Jan"
switch (Month) {
    case "Jan":
        console.log("January");
        break;
    case "Feb":
        console.log("Feburary");
        break;
    case "Mar":
        console.log("March");
        break;

    default:
        break;
}