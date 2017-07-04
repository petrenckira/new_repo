// replace it with your module
const dt = (function () {

    // private stuff
    let columns = [];
    let rows = [];
    let result = [];


    // public stuff
    return {
        addColumns: function (...args) {
            args.forEach((item)=> {
                columns.push(item);
            });

            return this;
        },
        addRow: function (...args) {
            let arr = [];
            args.forEach((item)=> {
                arr.push(item);
            });
            rows.push(arr);

            return this;
        },
        addRows: function (...args) {
            args.forEach((item)=> {
                rows.push(item);
            });

            return this;
        },
        sort: function (int) {
            let arr = [];
            for (let i = 0; i < rows.length; i++) {
                arr.push(rows[i][int - 1]);
            }
            arr.sort();
            for (let i = 0; i < rows.length; i++) {
                rows[i][int - 1] = arr[i];
            }
        },
        map: function (calback) {
            for (let i = 0; i < rows.length; i++) {
                rows[i] = rows[i].map(calback);
            }

        },
        getData: function (calback) {
            for (let i = 0; i < rows.length; i++) {
                let obj = {};
                for (let j = 0; j < columns.length; j++) {
                    obj[columns[j]] = rows[i][j];
                }
                result.push(obj);
            }
            result = JSON.stringify(result);
            calback.call(result);
        }
    };

})();


// !!! code below not supposed to be changed !!!
// !!! use it to check that your module's API works correctly !!!

// build DataTable
dt.addColumns('c1', 'c2', 'c3')
    .addRow('val1_c1', 'val1_c2', 'val1_c3')
    .addRow('val2_c1', 'val2_c2', 'val2_c3')
    .addRows(
        ['val4_c1', 'val4_c2', 'val4_c3'],
        ['val3_c1', 'val3_c2', 'val3_c3']
    );

// sort data ascending by second column
dt.sort(2);

// update rows by calling Array.prototype.map
dt.map(function (value, index) {
    return value + '_i' + index;
});

// print JSON
dt.getData(function () {
    console.log(this);
});
