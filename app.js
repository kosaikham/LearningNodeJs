const notes = require('./notes.js');
const yargs = require('yargs');

var titleOption = {
			describe: 'title of note',
			demand: true,
			alias: 't'
		};
var bodyOption = {
			describe: 'body of note',
			demand: true,
			alias: 'b'
		};

var argv = yargs
	.command('add','Adding a Note',{
		title: titleOption,
		body: bodyOption
	})
	.command('list','Getting all Notes')
	.command('read','Read a Note',{
		title: titleOption
	})
	.command('remove','Remove a Note',{
		title: titleOption
	})
	.help()
	.argv;

// var command = process.argv[2];    // from process
var command = argv._[0]; // from yargs module

if (command === 'add') {
	var note = notes.addNote(argv.title,argv.body);
	if(note){
		console.log('Save note Correctly.');
		notes.logNote(note);
	}else{
		console.log('Can\'t save bcoz note already exist..');
	}
}else if(command === 'list'){
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s)`);
	allNotes.forEach((note) => {
		notes.logNote(note);
	});
}else if(command === 'read'){
	var note = notes.getNote(argv.title);
	if(note){
		console.log('Note Found');
		notes.logNote(note);
	}else{
		console.log('Note not Found');
	}
}else if(command === 'remove'){
	var noteRemove = notes.removeNote(argv.title);
	var message = noteRemove ? 'Note Removed' : 'No Note Found';
	console.log(message);
}else{
	console.log('command not recognized');
}