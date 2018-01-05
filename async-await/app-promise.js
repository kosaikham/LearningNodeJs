const users = [{
	id: 1,
	name: 'Sai',
	schoolId: 101
},{
	id: 2,
	name: 'Kham',
	schoolId: 999
}];

const grades = [{
	id: 1,
	schoolId: 101,
	grade: 86
},{
	id: 2,
	schoolId: 999,
	grade: 100
},{
	id: 3,
	schoolId: 101,
	grade: 80
}];

const getUser = (id) => {
	return new Promise((resolve, reject) => {
		var user = users.find((user) => user.id === id);
		if(user){
			resolve(user);
		}else{
			reject(`Unable to find user of id ${id}`);
		}
	});
};

const getGrades = (schoolId) => {
	return new Promise((resolve, reject) => {
		return resolve(grades.filter((grade) => grade.schoolId === schoolId));
	});
};

// Sai got 83%.
const getStatus = (id) => {
	let user;
	return getUser(id).then((tempUser) => {
		user = tempUser;
		return getGrades(user.schoolId);
	}).then((grade) => {
		let average;
		if(grade.length > 0) {
			average = grade.map((grade) => grade.grade).reduce((a, b) => a + b) / grade.length;
			
		}
		return `${user.name} got ${average}%.`;
	})
}

// () => {
// 	return Promise((resolve, reject) => {

// 		resolve('Mike');
// 	});
// }

const getStatusAlt = async (id) => {
	const user = await getUser(id);
	const grade = await getGrades(user.schoolId);
	let average;
	if(grade.length > 0) {
		average = grade.map((grade) => grade.grade).reduce((a, b) => a + b) / grade.length;
	}
	return `${user.name} got ${average}%.`;
};

getStatusAlt(22).then((name) => {
	console.log(name);
}).catch((e) => {
	console.log(e);
});

// getStatus(3).then((user) => {
// 	console.log(user);
// }).catch((e) => {
// 	console.log(e);
// })