/**
 * Created by Iryna_Petrenko1 on 8/28/2017.
 */
class Storage {
    constructor() {
        
        if (instance) {
            return instance;
        }
        instance = this;
        this.INDEXED_DB = 'indexedDB';
        this.LOCAL_STORAGE = 'localStorage';
        this.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
        this.checkDB();
        this.checkStorage();
    }

    checkDB() {

        if (!window.indexedDB) {
            window.alert("Ваш браузер не поддерживат стабильную версию IndexedDB. Такие-то функции будут недоступны");
        }
    }

    checkStorage() {

        if (!localStorage) {
            window.alert("Ваш браузер не поддерживат стабильную версию localStorage. Такие-то функции будут недоступны");
        }
    }

    save(key, value, storageType = this.LOCAL_STORAGE) {
        let obj = {};
        obj.value = value;

        if (storageType == this.LOCAL_STORAGE) {
            let serialObj = JSON.stringify(obj);
            localStorage.setItem(key, serialObj);
        }

        if (storageType == this.INDEXED_DB) {
            let open = indexedDB.open("Storage", 4);
            open.onupgradeneeded = function () {
                let db = open.result;
                let store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
            };
            open.onsuccess = function () {
                let db = open.result;
                let tx = db.transaction("MyObjectStore", "readwrite");
                let store = tx.objectStore("MyObjectStore");
                store.put({id: key, value: obj});
            }
        }
    }

    get(key, storageType = this.LOCAL_STORAGE) {

        if (storageType == this.LOCAL_STORAGE) {
            let returnObj = JSON.parse(localStorage.getItem(key));
            let value = returnObj.value;
            console.log(value);
        }

        if (storageType == this.INDEXED_DB) {
            let open = indexedDB.open("Storage", 4);
            open.onupgradeneeded = function () {
                let db = open.result;
                let store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
            };
            open.onsuccess = function () {
                let db = open.result;
                let tx = db.transaction("MyObjectStore", "readwrite");
                let store = tx.objectStore("MyObjectStore");
                let res = store.get(key);

                res.onsuccess = function () {
                    console.log(res.result.value.value);
                };
                tx.oncomplete = function () {
                    db.close();
                };
            }
        }
    }

    getAll(storageType = this.LOCAL_STORAGE) {

        if (storageType == this.LOCAL_STORAGE) {
            for (var i in localStorage) {
                console.log(JSON.parse(localStorage[i]).value);
            }
        }

        if (storageType == this.INDEXED_DB) {

            if (storageType == this.LOCAL_STORAGE) {
                let returnObj = JSON.parse(localStorage.getItem(key));
                let value = returnObj.value;
                console.log(value);
            }

            if (storageType == this.INDEXED_DB) {
                let open = indexedDB.open("Storage", 4);
                open.onupgradeneeded = function () {
                    let db = open.result;
                    let store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
                };
                open.onsuccess = function () {
                    let db = open.result;
                    let tx = db.transaction("MyObjectStore", "readwrite");
                    let store = tx.objectStore("MyObjectStore");
                    let res = store.getAll();

                    res.onsuccess = function () {
                        for (let i = 0; i < res.result.length; i++) {
                            console.log(res.result[i].value.value);
                        }
                    };
                    tx.oncomplete = function () {
                        db.close();
                    };
                }
            }
        }
    }
}

let instance = null;
let storage = new Storage();
storage.save('myKey1', {prop: 'someObjProp'}, storage.LOCAL_STORAGE);
storage.save('myKey2', {prop: 'someObjProp'}, storage.LOCAL_STORAGE);
storage.getAll(storage.LOCAL_STORAGE);
storage.save('myKey3', 'value', storage.INDEXED_DB);
storage.get('myKey3', storage.INDEXED_DB);
storage.save('myKey6', [1, 2, 3], storage.INDEXED_DB);
storage.getAll(storage.INDEXED_DB);


