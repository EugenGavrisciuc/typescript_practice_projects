function Group<T, K extends keyof T> (arraryArgument: Array<T>, keyArgument: K): Record<number, Array<T>> {
	let i = 0;
	return arraryArgument.reduce(
		function(prevObj: Record<any, any>, currObj: Record<any, any>) {
			if(prevObj[i] && prevObj[i].some((el: Record<any, any>) => el[keyArgument] === currObj[keyArgument])) {
				prevObj[i].push(currObj);
				return prevObj;
			}
			for (const iObj in prevObj) {
				if (prevObj[iObj].some((el: Record<any, any>) => el[keyArgument] === currObj[keyArgument])) {
					prevObj[iObj].push(currObj);
					return prevObj;
				}
			}
	
		i++;
		prevObj[i] = [currObj];
		return prevObj;
		}, {});
	}
			
const arrayOfObjects = [
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 2, name: 'c' },
	{ group: 1, name: 'd' },
	{ group: 3, name: 'e' },
];
	
	console.log(Group(arrayOfObjects, "group"));