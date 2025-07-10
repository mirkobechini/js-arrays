const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];

for (let i = 0; i < teachers.length; i++) {
  const thisTeacher = teachers[i];
  reversedTeachers.unshift(thisTeacher);
}

console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  const thisTeacher = teachers[i];
  if (thisTeacher.length >= 5) {
    longNames.push(thisTeacher);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
const edIndex = teachers.indexOf("Ed");
teachers.splice(edIndex, 1);
console.log(teachers);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;
for (let i = 0; i < teachers.length; i++) {
  const thisTeacher = teachers[i];
  if (thisTeacher === "Fabio") {
    isFabioPresent = true;
  }
}
console.log(isFabioPresent);


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = null;
for (let i = 0; i < teachers.length; i++) {
  const thisTeacher = teachers[i];
  if (i === 0) {
    teachersString = thisTeacher;
  } else {
    teachersString += `, ${thisTeacher}`;
  }
}
console.log(teachersString);
