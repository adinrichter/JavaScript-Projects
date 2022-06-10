// initializes a simple dictionary
var dict = {
    Name : "Adin R",
    Age : 18,
    Job : "Student",
    Skills : "Programming"
}

// displays the current dictionary when called
function displayDict() {
    // initalizes variables to be used
    const keys = Object.keys(dict);
    const values = Object.values(dict);
    let out = "";
    // creates a list of all items in the dictionary and separates them with a line break
    for (let i = 0; i < keys.length; i++) {
        out += `${keys[i]}: ${values[i]}<br>`;
    }    
    // displays the dictionary at the given location
    document.getElementById("dictionary").innerHTML = out;
}

// displays inital dictionary on load
displayDict()

// removes user given entry if it exists
function removeEntry() {
    // initalizes constants to be used
    const key = document.getElementById("removeEntry");
    const dic = dict;
    // checks the user's value against the current dictionary and deletes it if it was found
    if (key.value in dic) {
        delete dic[key.value];
    // clears current input field on success
        key.value = "";
    }
    // displays an error if the entry wasn't found
    else {
        alert("Entry not found (note: case sensitive)");
    }
    // updates the currently displayed dictionary
    displayDict();
}

// adds user given entry if the key does not yet exist
function addEntry() {
    // initializes constants to be used
    const key = document.getElementById("addKey");
    const value = document.getElementById("addValue");
    // checks if key already exists and shows an error if it does
    if (key.value in dict) {
        alert("The entry provided already has an existing occurance");
    }
    // adds user given KVP if it is complete
    else {
        if (key.value != "" && value.value != "") {
            const dic = dict;
            dic[key.value] = value.value;
    // clears current input field on success
            key.value = "";
            value.value = "";
        }
        else {
    // displays an error if there are empty key or value entries
            alert("You must provide a key and value for your entry");
        }
    }
    // updates the currently displayed dictionary
    displayDict();
}