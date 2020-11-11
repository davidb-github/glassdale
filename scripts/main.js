// import components 
import { ConvictionSelect } from './convictions/ConvictionSelect.js';
import { CriminalList }     from './criminals/CriminalList.js';
import { NoteForm }         from './notes/NoteForm.js';
import { NoteList }         from './notes/NoteList.js';
import { OfficerList }      from './officers/OfficerList.js'
import { OfficerSelect }    from './officers/OfficerSelect.js'
import { witnessButton }    from './witnesses/WitnessButton.js'
// import modules to activate event listeners
import                           './criminals/AlibiList.js'
import                           './witnesses/WitnessList.js'
import                           './facilities/FacilityProvider.js'
import                           './facilities/CriminalFacilityProvider.js'

// invoke functions
OfficerList();
ConvictionSelect();
CriminalList();
OfficerSelect();
NoteForm();
NoteList();
witnessButton();















