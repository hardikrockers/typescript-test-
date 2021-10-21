import IEmployeeOrgApp from './IEmployeeOrgApp';
import Employee from './interfaces';

class EmployeeOrgApp implements IEmployeeOrgApp {
	ceo!: Employee;
	uniqueId!: Number;
	name!: String;
	subordinates!: Employee[];

	move(employeeId: Number, supervisorId: Number): void {
		const emp: Employee = Object.assign(employeeId)
		emp.uniqueId = supervisorId
	}
	undo(): void {

	}
	redo(): void {

	}
}

export default EmployeeOrgApp;