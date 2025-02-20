


function getFullname(firstname, lastname, useFormalName = false, gender = "neutral") {
    
    if (!firstname && !lastname) {
        return "Name not provided";
    }

    
    let fullName = `${firstname} ${lastname}`.trim();

    
    if (useFormalName) {
        fullName = `Lord ${fullName}`;
    }

    return fullName;
}
