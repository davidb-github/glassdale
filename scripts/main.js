// import data provider functions
import { CriminalList } from './criminals/CriminalList.js';
import { getCriminals, useCriminals } from './criminals/CriminalProvider.js';
import { getOfficers, useOfficers } from './officers/OfficerProvider.js'

// debug
// console.log("Welcome to the main module")

// invoke functions
// getOfficers();          // console.table(parsedOfficers)s
// useOfficers();          // array compliments of officers.slice() 

// getCriminals();
// criminals = useCriminals();
// console.log(useCriminals())
CriminalList();




