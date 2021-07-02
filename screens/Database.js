import SQLite from "react-native-sqlite-storage";


SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "T&GCropRegoDatabase.db";
const database_version = "1.0";
const database_displayname = "Crop Rego New Offline Database";
const database_size = 20000000;


export default class Database {
    
    initDB2() {
        let db;
        return new Promise((resolve) => {
            console.log("Plugin integrity check ...");
            SQLite.echoTest()
                .then(() => {
                    console.log("Integrity check passed ...");
                    console.log("Opening database ...");
                    SQLite.openDatabase(
                        database_name,
                        database_version,
                        database_displayname,
                        database_size
                    )
                        .then(DB => {
                            db = DB;
                            console.log("Database OPEN");
                            db.executeSql('SELECT * FROM TrussDetails LIMIT 1').then(() => {
                                console.log("Database is ready ... executing query ...");
                            }).catch((error) => {
                                console.log("Received error: ", error);
                                console.log("Database not yet ready ... populating data");
                                db.transaction((tx) => {
                                    tx.executeSql('DROP TABLE IF EXISTS TrussDetails', []);
                                    tx.executeSql('CREATE TABLE IF NOT EXISTS TrussDetails (trussID INTEGER PRIMARY KEY AUTOINCREMENT, plantNumber VARCHAR(30), trussNumber INT(20), fruitDiameter INT(20), setFruits INT(20), setFlowers INT(20), pruningNumber INT(20),plantRow INT(20),plantName VARCHAR(30), plantWeek INT(20), fruitLoad INT(20), pruningFlower INT(20), floweringTruss INT(20), pruningSet INT(20), settingTruss INT(20), pruningHarvest INT(20), harvestTruss INT(20))');
                                }).then(() => {
                                    console.log("Truss Details Table created successfully");
                                }).catch(error => {
                                    console.log(error);
                                });
                            });
                            resolve(db);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    console.log("echoTest failed - plugin not functional");
                });
        }).catch(error => {
            console.log("echoTest failed - plugin not functional");
        });
    };


    initDB() {
        let db;
        return new Promise((resolve) => {
            console.log("Plugin integrity check ...");
            SQLite.echoTest()
                .then(() => {
                    console.log("Integrity check passed ...");
                    console.log("Opening database ...");
                    SQLite.openDatabase(
                        database_name,
                        database_version,
                        database_displayname,
                        database_size
                    )
                        .then(DB => {
                            db = DB;
                            console.log("Database OPEN");
                            db.executeSql('SELECT 1 FROM PlantDetails LIMIT 1').then(() => {
                                console.log("Database is ready ... executing query ...");
                            }).catch((error) => {
                                console.log("Received error: ", error);
                                console.log("Database not yet ready ... populating data");
                                db.transaction((tx) => {
                                    tx.executeSql('DROP TABLE IF EXISTS PlantDetails', []);
                                    tx.executeSql('CREATE TABLE IF NOT EXISTS PlantDetails (plantId INTEGER PRIMARY KEY AUTOINCREMENT, plantNumber INT(20), plantRow INT(20), plantName VARCHAR(30), plantWeek INT(20), leavesPerPlant INT(20), fullySetTruss INT(20), setTrussLength INT(20), weeklyGrowth INT(20), floweringTrussHeight INT(20), leafLength INT(20), leafWidth INT(20), stmDiameter INT(20), lastWeekStmDiameter INT(20))');
                                }).then(() => {
                                    console.log("Table created successfully");
                                }).catch(error => {
                                    console.log(error);
                                });
                            });
                            resolve(db);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    console.log("echoTest failed - plugin not functional");
                });
        }).catch(error => {
            console.log("echoTest failed - plugin not functional");
        });
    };







    closeDatabase(db) {
        if (db) {
            console.log("Closing DB");
            db.close()
                .then(status => {
                    console.log("Database CLOSED");
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            console.log("Database was not OPENED");
        }
    };


    //Add a function to get the list of plants.
    listPlants() {
        return new Promise((resolve) => {
            const plantDetails = [];
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    tx.executeSql('SELECT p.plantId, p.plantNumber, p.plantRow, p.plantName, p.plantWeek, p.leavesPerPlant, p.fullySetTruss, p.setTrussLength, p.weeklyGrowth, p.floweringTrussHeight, p.leafLength, p.leafWidth, p.stmDiameter, p.lastWeekStmDiameter FROM PlantDetails p', []).then(([tx, results]) => {
                        console.log("Query completed");
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            console.log(`Plant ID: ${row.plantId}, Plant Name: ${row.plantName}, Plant Row: ${row.plantRow}, Plant Week: ${row.plantWeek}`)
                            const { plantId, plantNumber, plantRow, plantName, plantWeek, leavesPerPlant, fullySetTruss, setTrussLength, weeklyGrowth, floweringTrussHeight, leafLength, leafWidth, stmDiameter, lastWeekStmDiameter } = row;
                            plantDetails.push({
                                plantId,
                                plantNumber,
                                plantRow,
                                plantName,
                                plantWeek,
                                leavesPerPlant,
                                fullySetTruss,
                                setTrussLength,
                                weeklyGrowth,
                                floweringTrussHeight,
                                leafLength,
                                leafWidth,
                                stmDiameter,
                                lastWeekStmDiameter
                            });
                        }
                        console.log(plantDetails);
                        resolve(plantDetails);
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    plantByWeekInList(name) {
        try {
            return new Promise((resolve) => {
                const plantDetails = [];
                this.initDB().then((db) => {
                    db.transaction((tx) => {
                        //need to add plant name, plant row and plant week
                        tx.executeSql('SELECT p.plantId, p.plantNumber, p.plantRow, p.plantName, p.plantWeek, p.leavesPerPlant, p.fullySetTruss, p.setTrussLength, p.weeklyGrowth, p.floweringTrussHeight, p.leafLength, p.leafWidth, p.stmDiameter, p.lastWeekStmDiameter FROM PlantDetails p WHERE plantName = ?', [name]).then(([tx, results]) => {
                            console.log("Query completed");
                            var len = results.rows.length;
                            for (let i = 0; i < len; i++) {
                                let row = results.rows.item(i);
                                console.log(`Plant ID: ${row.plantId}, Plant Name: ${row.plantName}, Plant Row: ${row.plantRow}, Plant Week: ${row.plantWeek}`)
                                const { plantId, plantNumber, plantRow, plantName, plantWeek, leavesPerPlant, fullySetTruss, setTrussLength, weeklyGrowth, floweringTrussHeight, leafLength, leafWidth, stmDiameter, lastWeekStmDiameter } = row;
                                plantDetails.push({
                                    plantId,
                                    plantNumber,
                                    plantRow,
                                    plantName,
                                    plantWeek,
                                    leavesPerPlant,
                                    fullySetTruss,
                                    setTrussLength,
                                    weeklyGrowth,
                                    floweringTrussHeight,
                                    leafLength,
                                    leafWidth,
                                    stmDiameter,
                                    lastWeekStmDiameter
                                });
                            }
                            console.log(plantDetails);
                            resolve(plantDetails);
                        });
                    }).then((result) => {
                        this.closeDatabase(db);
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }
        catch (err_1) {
            console.log(err_1);
        }
    }



    plantByWeekInList2(name, week) {
        try {
            return new Promise((resolve) => {
                const plantDetails = [];
                this.initDB().then((db) => {
                    db.transaction((tx) => {
                        //need to add plant name, plant row and plant week
                        tx.executeSql('SELECT p.plantId, p.plantNumber, p.plantRow, p.plantName, p.plantWeek, p.leavesPerPlant, p.fullySetTruss, p.setTrussLength, p.weeklyGrowth, p.floweringTrussHeight, p.leafLength, p.leafWidth, p.stmDiameter, p.lastWeekStmDiameter FROM PlantDetails p WHERE plantName = ? AND plantWeek = ?', [name, week]).then(([tx, results]) => {
                            console.log("Query completed");
                            var len = results.rows.length;
                            for (let i = 0; i < len; i++) {
                                let row = results.rows.item(i);
                                console.log(`Plant ID: ${row.plantId}, Plant Name: ${row.plantName}, Plant Row: ${row.plantRow}, Plant Week: ${row.plantWeek}`)
                                const { plantId, plantNumber, plantRow, plantName, plantWeek, leavesPerPlant, fullySetTruss, setTrussLength, weeklyGrowth, floweringTrussHeight, leafLength, leafWidth, stmDiameter, lastWeekStmDiameter } = row;
                                plantDetails.push({
                                    plantId,
                                    plantNumber,
                                    plantRow,
                                    plantName,
                                    plantWeek,
                                    leavesPerPlant,
                                    fullySetTruss,
                                    setTrussLength,
                                    weeklyGrowth,
                                    floweringTrussHeight,
                                    leafLength,
                                    leafWidth,
                                    stmDiameter,
                                    lastWeekStmDiameter
                                });
                            }
                            console.log(plantDetails);
                            resolve(plantDetails);
                        });
                    }).then((result) => {
                        this.closeDatabase(db);
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }
        catch (err_1) {
            console.log(err_1);
        }
    }


    //Add a function to get the list of plants.
    listTruss() {
        return new Promise((resolve) => {
            const trussDetails = [];
            this.initDB2().then((db) => {
                db.transaction((tx) => {


                    tx.executeSql('SELECT p.trussID, p.plantNumber, p.trussNumber, p.fruitDiameter, p.setFruits, p.setFlowers, p.pruningNumber, p.plantRow, p.plantName, p.plantWeek, p.fruitLoad, p.pruningFlower, p.floweringTruss, p.pruningSet, p.settingTruss, p.pruningHarvest, p.harvestTruss FROM TrussDetails p', []).then(([tx, results]) => {
                        console.log("Query completed");
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            console.log(`Truss ID: ${row.trussID}, Plant Name: ${row.plantName}, Plant Row: ${row.plantRow}, Plant Week: ${row.plantWeek}`)
                            const { trussID, plantNumber, trussNumber, fruitDiameter, setFruits, setFlowers, pruningNumber, plantRow, plantName, plantWeek, fruitLoad, pruningFlower, floweringTruss, pruningSet, settingTruss, pruningHarvest, harvestTruss } = row;
                            trussDetails.push({
                                trussID,
                                plantNumber,
                                trussNumber,
                                fruitDiameter,
                                setFruits,
                                setFlowers,
                                pruningNumber,
                                plantRow,
                                plantName,
                                plantWeek,
                                fruitLoad,
                                pruningFlower,
                                floweringTruss,
                                pruningSet,
                                settingTruss,
                                pruningHarvest,
                                harvestTruss


                            });
                        }
                        console.log(trussDetails);
                        resolve(trussDetails);
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }


    //Add a function to get Plants by ID.
    plantsById(id) {
        console.log(id);
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    //need to add plant name, plant row and plant week
                    tx.executeSql('SELECT * FROM PlantDetails WHERE plantId = ?', [id]).then(([tx, results]) => {
                        console.log(results);
                        if (results.rows.length > 0) {
                            let row = results.rows.item(0);
                            resolve(row);
                        }
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }


    plantListByStatus(status) {
        try {
            return new Promise((resolve) => {
                const plantDetails = [];
                this.initDB().then((db) => {
                    db.transaction((tx) => {
                        //need to add plant name, plant row and plant week
                        tx.executeSql('SELECT p.plantId, p.plantNumber, p.plantRow, p.plantName, p.plantWeek, p.leavesPerPlant, p.fullySetTruss, p.setTrussLength, p.weeklyGrowth, p.floweringTrussHeight, p.leafLength, p.leafWidth, p.stmDiameter, p.lastWeekStmDiameter FROM PlantDetails p WHERE plantWeek = ?', [status]).then(([tx, results]) => {
                            console.log("Query completed");
                            var len = results.rows.length;
                            for (let i = 0; i < len; i++) {
                                let row = results.rows.item(i);
                                const { plantId, plantNumber, plantRow, plantName, plantWeek, leavesPerPlant, fullySetTruss, setTrussLength, weeklyGrowth, floweringTrussHeight, leafLength, leafWidth, stmDiameter, lastWeekStmDiameter } = row;
                                plantDetails.push({
                                    plantId,
                                    plantNumber,
                                    plantRow,
                                    plantName,
                                    plantWeek,
                                    leavesPerPlant,
                                    fullySetTruss,
                                    setTrussLength,
                                    weeklyGrowth,
                                    floweringTrussHeight,
                                    leafLength,
                                    leafWidth,
                                    stmDiameter,
                                    lastWeekStmDiameter

                                });
                            }
                            resolve(plantDetails);
                        });
                    }).then((result) => {
                        this.closeDatabase(db);
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }
        catch (err_1) {
            console.log(err_1);
        }
    }



    listTrussByStatus(status) {
        return new Promise((resolve) => {
            const trussDetails = [];
            this.initDB2().then((db) => {
                db.transaction((tx) => {


                    tx.executeSql('SELECT p.trussID, p.plantNumber, p.trussNumber, p.fruitDiameter, p.setFruits, p.setFlowers, p.pruningNumber, p.plantRow, p.plantName, p.plantWeek, p.fruitLoad, p.pruningFlower, p.floweringTruss, p.pruningSet, p.settingTruss, p.pruningHarvest, p.harvestTruss FROM TrussDetails p WHERE plantWeek = ?', [status]).then(([tx, results]) => {
                        console.log("Query completed");
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            const { trussID, plantNumber, trussNumber, fruitDiameter, setFruits, setFlowers, pruningNumber, plantRow, plantName, plantWeek, fruitLoad, pruningFlower, floweringTruss, pruningSet, settingTruss, pruningHarvest, harvestTruss } = row;
                            trussDetails.push({
                                trussID,
                                plantNumber,
                                trussNumber,
                                fruitDiameter,
                                setFruits,
                                setFlowers,
                                pruningNumber,
                                plantRow,
                                plantName,
                                plantWeek,
                                fruitLoad,
                                pruningFlower,
                                floweringTruss,
                                pruningSet,
                                settingTruss,
                                pruningHarvest,
                                harvestTruss



                            });
                        }
                        resolve(trussDetails);
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    plantsByIdAndName(id, name) {
        console.log(id);
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    //need to add plant name, plant row and plant week
                    tx.executeSql('SELECT * FROM PlantDetails WHERE plantId = ? AND plantName = ?', [id, name]).then(([tx, results]) => {
                        console.log(results);
                        if (results.rows.length > 0) {
                            let row = results.rows.item(0);
                            resolve(row);
                        }
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    plantByWeek(name, week) {
        try {
            return new Promise((resolve) => {
                this.initDB().then((db) => {
                    db.transaction((tx) => {
                        //need to add plant name, plant row and plant week
                        tx.executeSql('SELECT * FROM PlantDetails WHERE plantName = ? AND plantWeek = ?', [name, week]).then(([tx, results]) => {
                            console.log(results);
                            if (results.rows.length > 0) {
                                let row = results.rows.item(0);
                                resolve(row);
                            }
                        });
                    }).then((result) => {
                        this.closeDatabase(db);
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }
        catch (err_1) {
            console.log(err_1);
        }
    }

    plantsByWeekAndName(number, week, name) {
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    //need to add plant name, plant row and plant week
                    tx.executeSql('SELECT * FROM PlantDetails WHERE plantNumber = ? AND plantWeek = ? AND plantName = ?', [number, week, name]).then(([tx, results]) => {
                        console.log(results);
                        if (results.rows.length > 0) {
                            let row = results.rows.item(0);
                            resolve(row);
                        }
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    plantsByWeekRowAndName(number, week, name, row) {
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    //need to add plant name, plant row and plant week
                    tx.executeSql('SELECT * FROM PlantDetails WHERE plantNumber = ? AND plantWeek = ? AND plantName = ? AND plantRow = ?', [number, week, name, row]).then(([tx, results]) => {
                        console.log(results);
                        if (results.rows.length > 0) {
                            let row = results.rows.item(0);
                            resolve(row);
                        }
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }


    plantsByWeekNumberAndName(number, week, name) {
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                const plant = {};
                db.transaction((tx) => {
                    //need to add plant name, plant row and plant week
                    tx.executeSql('SELECT * FROM PlantDetails WHERE plantNumber = ? AND plantWeek = ? AND plantName = ?', [number, week, name]).then(([tx, results]) => {
                        console.log(results);


                        if (results.rows.length > 0) {
                            let row = results.rows.item(0);
                            resolve(row);
                        }
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    plantsByWeekRowNumberAndName(number, week, name, row) {
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                const plant = {};
                db.transaction((tx) => {
                    //need to add plant name, plant row and plant week
                    tx.executeSql('SELECT * FROM PlantDetails WHERE plantNumber = ? AND plantWeek = ? AND plantName = ? AND plantRow = ?', [number, week, name, row]).then(([tx, results]) => {
                        console.log(results);


                        if (results.rows.length > 0) {
                            let row = results.rows.item(0);
                            resolve(row);
                        }
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    trussByWeekNumberAndName(number, week, name) {
        return new Promise((resolve) => {
            this.initDB2().then((db) => {
                db.transaction((tx) => {
                    //need to add plant name, plant row and plant week
                    tx.executeSql('SELECT * FROM TrussDetails WHERE plantNumber = ? AND plantWeek = ? AND plantName = ?', [number, week, name]).then(([tx, results]) => {
                        console.log(results);


                        if (results.rows.length > 0) {
                            let row = results.rows.item(0);
                            resolve(row);
                        }
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    trussByWeekNumberRowAndName(number, week, name, row) {
        return new Promise((resolve) => {
            this.initDB2().then((db) => {
                db.transaction((tx) => {
                    //need to add plant name, plant row and plant week
                    tx.executeSql('SELECT * FROM TrussDetails WHERE plantNumber = ? AND plantWeek = ? AND plantName = ? AND plantRow = ?', [number, week, name, row]).then(([tx, results]) => {
                        console.log(results);


                        if (results.rows.length > 0) {
                            let row = results.rows.item(0);
                            resolve(row);
                        }
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    trussByWeekNumberRowAndName2(number, week, name, row) {
        return new Promise((resolve) => {
            this.initDB2().then((db) => {
                db.transaction((tx) => {
                    //need to add plant name, plant row and plant week
                    tx.executeSql('SELECT * FROM TrussDetails WHERE plantNumber = ? AND plantWeek = ? AND plantName = ? AND plantRow = ?', [number, week, name, row]).then(([tx, results]) => {
                        console.log(results);


                        if (results.rows.length > 0) {
                            let row = results.rows.item(0);
                            resolve(row);
                        }
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }
    //Add a function to save a new plant to the SQLite database.
    //Mostly used only this function-----
    addPlants(pts) {
        try {
            return new Promise((resolve) => {
                this.initDB().then((db) => {
                    db.transaction((tx) => {
                        tx.executeSql('INSERT INTO PlantDetails VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [pts.plantId, pts.plantNumber, pts.plantRow, pts.plantName, pts.plantWeek, pts.leavesPerPlant, pts.fullySetTruss, pts.setTrussLength, pts.weeklyGrowth, pts.floweringTrussHeight, pts.leafLength, pts.leafWidth, pts.stmDiameter, pts.lastWeekStmDiameter]).then(([tx, results]) => {
                            resolve(results);
                            console.log('Details Added Successfully: ', results);
                        });
                    }).then((result_1) => {
                        console.log('Details Added Successfully: ', result_1);
                        this.closeDatabase(db);
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }
        catch (err_1) {
            console.log(err_1);
        }
    }

    addTrussDetails(pts) {
        try {
            return new Promise((resolve) => {
                this.initDB2().then((db) => {
                    db.transaction((tx) => {
                        tx.executeSql('INSERT INTO TrussDetails VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [pts.trussID, pts.plantNumber, pts.trussNumber, pts.fruitDiameter, pts.setFruits, pts.setFlowers, pts.pruningNumber, pts.plantRow, pts.plantName, pts.plantWeek, pts.fruitLoad, pts.pruningFlower, pts.floweringTruss, pts.pruningSet, pts.settingTruss, pts.pruningHarvest, pts.harvestTruss]).then(([tx, results]) => {
                            resolve(results);
                            console.log('Details Added Successfully: ', results);
                        });
                    }).then((result_1) => {
                        console.log('Details Added Successfully: ', result_1);
                        this.closeDatabase(db);
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }
        catch(err_1) {
            console.log(err_1);
        }
    }


    //Add a function to get Plants by ID.
    trussById2(name, week, number, plantNum) {
        try {
            return new Promise((resolve) => {
                this.initDB2().then((db) => {
                    db.transaction((tx) => {
                        //need to add plant name, plant row and plant week
                        tx.executeSql('SELECT * FROM TrussDetails WHERE plantName = ? AND plantWeek = ? AND trussNumber = ? AND plantNumber = ?', [number, week, name, plantNum]).then(([tx, results]) => {
                            console.log(results);
                            if (results.rows.length > 0) {
                                let row = results.rows.item(0);
                                resolve(row);
                            }
                        });
                    }).then((result) => {
                        this.closeDatabase(db);
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }
        catch (err_1) {
            console.log(err_1);
        }
    }

    trussById(name, week, number, plantNum) {
        try {
            return new Promise((resolve) => {
                this.initDB2().then((db) => {
                    db.transaction((tx) => {
                        //need to add plant name, plant row and plant week
                        tx.executeSql('SELECT * FROM TrussDetails WHERE plantName = ? AND plantWeek = ? AND trussNumber = ? AND plantNumber = ?', [number, week, name, plantNum]).then(([tx, results]) => {
                            console.log(results);
                            if (results.rows.length > 0) {
                                let row = results.rows.item(0);
                                resolve(row);
                            }
                        });
                    }).then((result) => {
                        this.closeDatabase(db);
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }
        catch (err_1) {
            console.log(err_1);
        }
    }

    trussByIdRow(name, week, number, plantNum, row) {
        try {
            return new Promise((resolve) => {
                this.initDB2().then((db) => {
                    db.transaction((tx) => {
                        //need to add plant name, plant row and plant week
                        tx.executeSql('SELECT * FROM TrussDetails WHERE plantName = ? AND plantWeek = ? AND trussNumber = ? AND plantNumber = ? AND plantRow = ?', [number, week, name, plantNum, row]).then(([tx, results]) => {
                            console.log(results);
                            if (results.rows.length > 0) {
                                let row = results.rows.item(0);
                                resolve(row);
                            }
                        });
                    }).then((result) => {
                        this.closeDatabase(db);
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }
        catch (err_1) {
            console.log(err_1);
        }
    }

    trussById2(name, week, number) {
        try {
            return new Promise((resolve) => {
                this.initDB2().then((db) => {
                    db.transaction((tx) => {
                        //need to add plant name, plant row and plant week
                        tx.executeSql('SELECT * FROM TrussDetails WHERE plantName = ? AND plantWeek = ? AND trussNumber = ?', [number, week, name]).then(([tx, results]) => {
                            console.log(results);
                            if (results.rows.length > 0) {
                                let row = results.rows.item(0);
                                resolve(row);
                            }
                        });
                    }).then((result) => {
                        console.log(result);
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }
        catch (err_1) {
            console.log(err_1);
        }
    }


    doInsert(raw_data) {

        alert("Lets Do It");
        var parameters = [],
            bigqery = "";

        var sqlQuery = 'trussID, trussNumber, fruitDiameter, setFruits, setFlowers, pruningNumber, plantRow, plantName, plantWeek'


        return new Promise((resolve) => {
            this.initDB2().then((db) => {
                db.transaction((tx) => {



                    _.each(raw_data, i => {

                        bigqery += "(?,?,?, ?,?,?, ?,?,? )";
                        parameters.push(i, raw_data[i].trussNumber, raw_data[i].fruitDiameter, raw_data[i].setFruits, raw_data[i].setFlowers, raw_data[i].pruningNumber, raw_data[i].plantRow, raw_data[i].plantName, raw_data[i].plantWeek);

                        tx.executeSql("INSERT  INTO TrussDetails  VALUES " + bigqery + ";", parameters);
                        // reset the varriables
                        parameters = [];
                        bigqery = '';

                        resolve(results);


                    })
                        /*tx.executeSql('insert into TrussDetails(' + sqlQuery + ') values(?,?,?,?,?,?,?,?,?)', pts)
                        tx.executeSql('SELECT * FROM TrussDetails', [], (tx, results) => {
                            console.log("Query completed");
                            var len = results.rows.length;
                            for (let i = 0; i < len; i++) {
                                let row = results.rows.item(i);
                                console.log('truss list Record: ', row);
                            }
                        })*/
                        .then((result) => {
                            console.log('truss Details Added Successfully: ', result)
                            this.closeDatabase(db);
                        }).catch((err) => {
                            console.log(err);
                        });
                }).catch((err) => {
                    console.log(err);
                });

            })

        });

    }


    //Add a function to update a plant.
    //need to add plant name, plant row and plant week
    updatePlants(pts) {
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    //need to add plant name, plant row and plant week
                    tx.executeSql('UPDATE PlantDetails SET plantId = ?, plantNumber = ?, plantRow = ?, plantName = ?, plantWeek = ?, leavesPerPlant = ?, fullySetTruss = ?, setTrussLength = ?, weeklyGrowth = ?,  floweringTrussHeight = ?, leafLength = ?, leafWidth = ?, stmDiameter = ? lastWeekStmDiameter = ? WHERE plantId = ?', [pts.plantId, pts.plantNumber, pts.plantRow, pts.plantName, pts.plantWeek, pts.leavesPerPlant, pts.fullySetTruss, pts.setTrussLength, pts.weeklyGrowth, pts.floweringTrussHeight, pts.leafLength, pts.leafWidth, pts.stmDiameter, pts.lastWeekStmDiameter, pts.plantId]).then(([tx, results]) => {
                        resolve(results);
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    //need to add plant name, plant row and plant week
    deleteplants(id) {
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    //need to add plant name, plant row and plant week
                    tx.executeSql('DELETE FROM PlantDetails WHERE plantId = ?', [id]).then(([tx, results]) => {
                        console.log(results);
                        resolve(results);
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }


}