/**
 * Created by Iryna_Petrenko1 on 7/11/2017.
 */
var storage = [{
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

function EmployeesCollection(collection) {
    this.collection = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            this.classSelection(collection[i]);
        }
    }
    else {
        this.classSelection(collection);
    }
    this.sortEmployees();
}
EmployeesCollection.prototype.classSelection = function (obj) {

    if (obj.type == "FixedSalaryEmployee") {
        var instance = new FixedSalaryEmployee(obj);
        this.collection.push(instance);

    }
    if (obj.type == "HourlySalaryEmployee") {
        var instance = new HourlySalaryEmployee(obj);
        this.collection.push(instance);

    }

};

EmployeesCollection.prototype.sortEmployees = function () {

    this.collection.sort(function (a, b) {
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

};
EmployeesCollection.prototype.getInfo = function () {
    var result = [];
    for (var i = 0; i < this.collection.length; i++) {
        var collectionItem = this.collection[i];
        result.push({
            id: collectionItem.id,
            name: collectionItem.name,
            averageSalary: collectionItem.getSalary()
        });

    }

    return result;
};
EmployeesCollection.prototype.getFiveFirstNames = function () {
    var fiveNames = this.collection.map(function (value) {
        return value.name;

    });
    return fiveNames.slice(0, 5);
};
EmployeesCollection.prototype.lastThreeIds = function () {
    var collectionNew = this.collection;
    var threeIds = collectionNew.reverse().map(function (value) {
        return value.id;
    });
    return threeIds.slice(0, 3);
};

function Emploee(elment) {
    this.type = elment.type;
    this.salary = elment.salary;
    this.name = elment.name;
    this.id = elment.id;


}
Emploee.prototype.getSalary = function () {
    alert("getSalary");
};

function FixedSalaryEmployee(element) {
    Emploee.apply(this, arguments);

}
FixedSalaryEmployee.prototype = Object.create(Emploee.prototype);
FixedSalaryEmployee.prototype.getSalary = function () {
    return this.salary;
};


function HourlySalaryEmployee(element) {
    Emploee.apply(this, arguments);
}
HourlySalaryEmployee.prototype = Object.create(Emploee.prototype);
HourlySalaryEmployee.prototype.getSalary = function () {
    return (this.salary * 20.8 * 8);
};
window.onload = function () {
    var input = document.querySelector("#textarea");
    input.value=JSON.stringify(storage[0]);
    var send= document.querySelector("#send");
    send.addEventListener("click", function () {
        storage.push(JSON.parse(input.value));
        console.log(storage);
        input.value=JSON.stringify(storage[0]);
    });

    var getInfoOut = document.querySelector("#result-info");
    var getInfoButt = document.querySelector("#all-info");
    var getFirst = document.querySelector("#get-first");
    var getLast = document.querySelector("#get-last");

    getInfoButt.addEventListener("click", function () {
        getInfoEmployee("getInfoButt");
    });
    getFirst.addEventListener("click", function () {
        getInfoEmployee("getFirst");
    });
    getLast.addEventListener("click", function () {
        getInfoEmployee("getLast");
    });
    function getInfoEmployee(value) {
        getInfoOut.innerHTML = "";
        var tmp = new EmployeesCollection(storage);

        if (value == "getInfoButt") {
            var res = JSON.stringify(tmp.getInfo());
        }

        if (value == "getFirst") {
            var res = JSON.stringify(tmp.getFiveFirstNames());
        }

        if (value == "getLast") {
            var res = JSON.stringify(tmp.lastThreeIds());
        }

        getInfoOut.innerHTML = res;
    }
};





