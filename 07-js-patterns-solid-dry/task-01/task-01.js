
const storage = [{
    "type": "HourlySalaryEmployee",
    "salary": 10,
    "name": "Anna",
    "id": 1
},
    {
        "type": "HourlySalaryEmployee",
        "salary": 8,
        "name": "Bob",
        "id": 2
    },
    {
        "type": "FixedSalaryEmployee",
        "salary": 8000,
        "name": "Dany",
        "id": 3
    },
    {
        "type": "FixedSalaryEmployee",
        "salary": 8000,
        "name": "Clara",
        "id": 4
    },
    {
        "type": "FixedSalaryEmployee",
        "salary": 1000,
        "name": "Egor",
        "id": 5
    }];

class EmployeesCollection {
    constructor(collection) {
        this.collection = [];
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                this.classSelection(collection[i]);
            }
        }
        else {
            this.classSelection(collection);
        }
        this.sortEmployees();
    }

    classSelection(obj) {

        if (obj.type == "FixedSalaryEmployee") {
            var instance = new FixedSalaryEmployee(obj);
            this.collection.push(instance);

        }
        if (obj.type == "HourlySalaryEmployee") {
            var instance = new HourlySalaryEmployee(obj);
            this.collection.push(instance);

        }

    }

    sortEmployees() {

        this.collection.sort((a, b) => {
            if (a.getSalary() == b.getSalary()) {
                if (a.name.localeCompare(b.name) == 1) {
                    return 1;
                }
                else
                    return -1;
            }
            else
                return a.getSalary() - b.getSalary();
        });

        return this.collection;

    }

    getInfo() {
        const result = [];

        for (const collectionItem of this.collection) {
            result.push({
                id: collectionItem.id,
                name: collectionItem.name,
                averageSalary: collectionItem.getSalary()
            });
        }

        return result;
    }

    getFiveFirstNames() {
        const fiveNames = this.collection.map(value => value.name);
        return fiveNames.slice(0, 5);
    }

    lastThreeIds() {
        const collectionNew = this.collection;
        const threeIds = collectionNew.reverse().map(value => value.id);
        return threeIds.slice(0, 3);
    }
}

class Employee {
    constructor(elment) {
        this.type = elment.type;
        this.salary = elment.salary;
        this.name = elment.name;
        this.id = elment.id;
    }

    getSalary() {
        alert("getSalary");
    }
}

class FixedSalaryEmployee extends Employee{

    getSalary() {
        return this.salary;
    }
}


class HourlySalaryEmployee  extends Employee {

    getSalary() {
        return (this.salary * 20.8 * 8);
    }
}


//





