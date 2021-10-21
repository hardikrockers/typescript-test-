interface Employee {
	uniqueId: Number;
	name: String;
	subordinates: Employee[];
}

const SarahDonald: Employee = {
	uniqueId: 2,
	name: "Sarah Donald",
	subordinates: []
}

const TylerSimpson: Employee = {
	uniqueId: 3,
	name: "Tyler Simpson",
	subordinates: []
}
const BruceWillis: Employee = {
	uniqueId: 3,
	name: "Bruce Willis",
	subordinates: []
}

const SophieTurner: Employee = {
	uniqueId: 5,
	name: "Sophie Turner",
	subordinates: []
}

const GeorgiaFlangy: Employee = {
	uniqueId: 4,
	name: "Georgina Flangy",
	subordinates: [SophieTurner]
}

export const CEO: Employee = {
	uniqueId: 1,
	name: "Mark Zuckerberg",
	subordinates: [SarahDonald, TylerSimpson, BruceWillis, GeorgiaFlangy]
}

export default Employee;