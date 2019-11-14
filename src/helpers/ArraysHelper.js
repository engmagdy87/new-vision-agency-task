function sortArrayOfObjects(a, b, firstKeyName, secondKeyName, order) {
    if (secondKeyName === null) {
        if (order === "desc")
            return a[firstKeyName.toLowerCase()].toString().toLowerCase() < b[firstKeyName.toLowerCase()].toString().toLowerCase() ? 1 : -1
        else return a[firstKeyName.toLowerCase()].toString().toLowerCase() < b[firstKeyName.toLowerCase()].toString().toLowerCase() ? -1 : 1
    }
    else {
        if (order === "desc")
            return a[firstKeyName.toLowerCase()][secondKeyName.toLowerCase()] < b[firstKeyName.toLowerCase()][secondKeyName.toLowerCase()] ? 1 : -1
        else return a[firstKeyName.toLowerCase()][secondKeyName.toLowerCase()] < b[firstKeyName.toLowerCase()][secondKeyName.toLowerCase()] ? -1 : 1
    }

}

export default sortArrayOfObjects