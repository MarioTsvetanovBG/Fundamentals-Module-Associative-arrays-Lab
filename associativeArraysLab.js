function printPhoneBook(input) {
    let phoneBook = {};

    for (const entry of input) {
        // let [name, phone] = entry.split(' '); // ['Tim', '0834212554']

        let entryArr = entry.split(' '); // ['Tim', '0834212554']
        // phoneBook[entryArr[0]] = entryArr[1];
        let name = entryArr[0];
        let phone = entryArr[1];

        phoneBook[name] = phone;
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

printPhoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);



function scheduleMeetings(input) {
    const meetings = {};

    for (const entry of input) {
        let [day, name] = entry.split(' ');

        if (meetings[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;

            console.log(`Scheduled for ${day}`);
        }
    }

    // for (let [day, name] of Object.entries(meetings)) {
    //     console.log(`${day} -> ${name}`);
    // }

    for (let day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }
}

scheduleMeetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);


function createAddressBook(input) {
    let addressBook = {};

    for (const line of input) {
        let [name, address] = line.split(':');
        
        addressBook[name] = address;
    }
    
    let addressBookEntries = Object.entries(addressBook);

    addressBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]))

    for (const entry of addressBookEntries) {
        let name = entry[0];
        let address = entry[1];

        console.log(`${name} -> ${address}`);
    }
}

createAddressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);


function createStorage(input) {
    let storage = new Map();

    for (const line of input) {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);
        
        if (storage.has(item)) {
            quantity += storage.get(item);
        }

        storage.set(item, quantity);
    }

    for (const [item, quantity] of storage) {
        console.log(`${item} -> ${quantity}`);
    }
}

createStorage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);



function schoolGrades(input) {
    let students = {};

    for (const line of input) {
        let studentArr = line.split(' ');
        let name = studentArr.shift();
        let grades = studentArr.map(x => Number(x));

        // if (students[name]) {
        //     students[name] = students[name].concat(grades)
        // } else {
        //     students[name] = grades;
        // }
        if (!students[name]) {
            students[name] = [];
        }

        students[name] = students[name].concat(grades);
    }

    let studentsEntries = Object.entries(students);
    let sortedStudents = studentsEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, grades] of sortedStudents) {
        let sum = 0;

        for (const grade of grades) {
            sum += grade;
        }

        let average = sum / grades.length;

        console.log(`${name}: ${average.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);


function wordCounter(wordsInput) {
    let words = {};
    
    for (const word of wordsInput) {
        if (!words[word]) {
            words[word] = 0;
        }
        
        words[word]++;
    }

    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sortedWords) {
        console.log(`${word} -> ${count} times`);
    }
}

wordCounter(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
