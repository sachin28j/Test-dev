myArray = Array.from(myFileListObject);
myArray.sort(function(a,b) {
    return String.naturalCompare(a.name, b.name)
});
