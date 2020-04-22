// let energy = 0;
// let money = 1000;
// let time = 24;
//
// function wakeUp(isDone) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             if (isDone) {
//                 console.log('Good morning');
//                 energy = 1000;
//                 resolve(time);
//             } else {
//                 time--;
//                 // console.log(time);
//                 energy=500;
//                 console.log('Ти знову проспав!!!');
//                 resolve(time);
//                 // reject();
//             }
//         }, 1000)
//     })
// }
//
// function breakfast(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time > 15) {
//                 console.log('Смачного');
//                 time--;
//                 // console.log(time);
//                 energy += 200;
//                 // console.log(energy);
//                 resolve(time);
//             } else {
//                 console.log('Сьогодні без сніданку');
//                 // reject(time)
//                 resolve(time);
//             }
//         }, 500)
//     })
// }
// function preparing(takeMoney){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             if (takeMoney) {
//                 console.log('Можна виходити');
//                 time--;
//                 money=1000;
//                 resolve(money);
//             } else {
//                 console.log('От халепа, гаманець забув');
//                 time--;
//                 money=0;
//                 console.log(time);
//                 resolve(money);
//             }
//         }, 1000)
//     })
// }
// function roadToTheUniversity(trafficJams){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             if (trafficJams) {
//                 console.log('Навчання скорочується');
//                 time-=2;
//                 // money=1000;
//                 console.log(time);
//                 resolve(time);
//             } else {
//                 console.log('Пора вчитися');
//                 // reject(time)
//                 time--;
//                 // money=0;
//                 resolve(time);
//             }
//         }, 2000)
//     })
// }
// function studying(time){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             if (time>12) {
//                 console.log('Наполегливо вчимося');
//                 time-=3;
//                 energy-=200;
//                 // money=1000;
//                 console.log(time);
//                 resolve(time);
//             } else {
//                 console.log('Вчитися ніколи не пізно!');
//                 // reject(time)
//                 energy-=100;
//                 console.log(energy);
//                 time-=2 ;
//                 console.log(time);
//                 money=0;
//                 resolve(money);
//             }
//         }, 2500)
//     })
// }
// function lunch(money){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             if (money!=0) {
//                 console.log('Ні в чому собі не відмовляй');
//                 time--;
//                 energy+=200;
//                 money=500;
//                 // money=1000;
//                 console.log(money);
//                 console.log(time);
//                 resolve(money);
//             } else {
//                 console.log('Обід відміняється.Треба бути менш забудькуватим!');
//                 // reject(time)
//                 console.log(money);
//                 console.log(time);
//                 resolve(money);
//             }
//         }, 500)
//     })
// }
// function training(trafficJams){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             if (trafficJams) {
//                 console.log('Тренування відміняється');
//                 time-=2;
//                 console.log(time);
//                 resolve(time);
//             } else {
//                 console.log('Тренуємось');
//                 // reject(time)
//                 // console.log(money);
//                 energy-=300;
//                 console.log(energy);
//                 time-=2;
//                 console.log(time);
//                 resolve(time);
//             }
//         }, 1500)
//     })
// }
// function dinner(products){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             if (products) {
//                 console.log('Намічається чудова вечеря)');
//                 time-=2;
//                 energy+=200;
//                 console.log(time);
//                 resolve(time);
//             } else {
//                 console.log('Ехх, продукти закінчились');
//                 // reject(time)
//                 // console.log(money);
//                 // time-=2;
//                 console.log(time);
//                 resolve(time);
//             }
//         }, 1000)
//     })
// }
// function homework(energy){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             if (energy>500) {
//                 console.log('Треба працювати');
//                 time-=2;
//                 energy-=500;
//                 console.log(energy);
//                 console.log(time);
//                 resolve(time);
//             } else {
//                 console.log('Краще відпочинь');
//                 // reject(time)
//                 // console.log(money);
//                 // time-=2;
//                 console.log(time);
//                 resolve(time);
//             }
//         }, 2000)
//     })
// }
// function sleeping(energy){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy<300) {
//                 console.log('Пора спати');
//                 time-=9;
//                 // energy-=500;
//                 console.log(energy);
//                 console.log(time);
//                 resolve(time);
//             } else {
//                 reject('Йди ще погуляй');
//             }
//         },500)
//     })
// }
// wakeUp(false)
//     .then((time) => {
//         console.log(time);
//         return breakfast(time);
//     })
//     .then(time => {
//         console.log(time);
//     })
//     .then(takeMoney=>{
//         return preparing(false);
//     })
//     .then(trafficJams=>{
//         // console.log(time);
//         return roadToTheUniversity(true);
//     })
//     .then(time=>{
//         return studying(time);
//     })
//     .then(money=>{
//         return lunch(money);
//     })
//     .then(trafficJams=>{
//         return training(time);
//     })
//     .then(products=>{
//         return dinner(true);
//     })
//     .then(energy=>{
//         return homework(energy);
//     })
//     .then(energy=>{
//         sleeping(energy);
//     })
//     .catch(reason => {
//         console.log(reason);
//     })
//
let energy = 0;
let money = 1000;
let time = 24;

function wakeUp(isDone, cb) {
    setTimeout(() => {
        if (isDone) {
            console.log('Good morning');
            energy = 1000;
            cb(null, time);
        } else {
            time--;
            energy = 500;
            console.log('Ти знову проспав!!!');
            cb(null, time);
        }
    }, 1000)
}
function breakfast(time,cb) {
    setTimeout(() => {
        if (time > 15) {
            console.log('Смачного');
            time--;
            energy += 200;
            cb(null, time);
        } else {
            console.log('Сьогодні без сніданку');
            cb(null, time);
        }
    }, 500)
}
function preparing(takeMoney,cb) {
    setTimeout(() => {
        if (takeMoney) {
            console.log('Можна виходити');
            time--;
            money = 1000;
            cb(null, money);
        } else {
            console.log('От халепа, гаманець забув');
            time--;
            money = 0;
            console.log(time);
            cb(null, money);
        }
    }, 1000)
}
function roadToTheUniversity(trafficJams, cb) {
    setTimeout(() => {
        if (trafficJams) {
            console.log('Навчання скорочується');
            time -= 2;
            console.log(time);
            cb(null, time);
        } else {
            console.log('Пора вчитися');
            time--;
            cb(null, time);
        }
    }, 2000)
}
function studying(time, cb) {
    setTimeout(() => {
        if (time > 12) {
            console.log('Наполегливо вчимося');
            time -= 3;
            energy -= 200;
            console.log(time);
            cb(null, time);
        } else {
            console.log('Вчитися ніколи не пізно!');
            energy -= 100;
            console.log(energy);
            time -= 2;
            console.log(time);
            money = 0;
            cb(null, time);
        }
    }, 2500)
}
function lunch(money,cb) {

    setTimeout(() => {
        if (money != 0) {
            console.log('Ні в чому собі не відмовляй');
            time--;
            energy += 200;
            money = 500;
            console.log(money);
            console.log(time);
            cb(null, money);
        } else {
            console.log('Обід відміняється.Треба бути менш забудькуватим!');
            console.log(money);
            console.log(time);
            cb(null, money);
        }
    }, 500)
}
function training(trafficJams, cb) {
    setTimeout(() => {
        if (trafficJams) {
            console.log('Тренування відміняється');
            time -= 2;
            console.log(time);
            cb(null,time);
        } else {
            console.log('Тренуємось');
            energy -= 300;
            console.log(energy);
            time -= 2;
            console.log(time);
            cb(null,time);
        }
    }, 1500)
}
function dinner(products, cb) {
    setTimeout(() => {
        if (products) {
            console.log('Намічається чудова вечеря)');
            time -= 2;
            energy += 200;
            console.log(time);
            cb(null, time);
        } else {
            console.log('Ехх, продукти закінчились');
            console.log(time);
            cb(null, time);
        }
    }, 1000)
}
function homework(energy, cb) {
    setTimeout(() => {
        if (energy > 500) {
            console.log('Треба працювати');
            time -= 2;
            energy -= 500;
            console.log(energy);
            console.log(time);
            cb(null, time);
        } else {
            console.log('Краще відпочинь');
            console.log(time);
            cb(null, time);
        }
    }, 2000)
}
function sleeping(energy, cb) {

    setTimeout(() => {
        if (energy < 300) {
            console.log('Пора спати');
            time -= 9;
            console.log(energy);
            console.log(time);
            cb(null, time);
        } else {
            console.log('Йди ще погуляй і лягай спати');
            cb(null,time);
        }
    }, 500)
}
wakeUp(true, (error, time)=>{
    if (error){
        console.error(error);
    }
    else {
        console.table(time);
        breakfast(time,(error,time)=>{
            if (error){
                console.error(error);
            }
            else {
                console.table(time);
                preparing(money,(error,money)=>{
                    if (error){
                        console.error(error);
                    }
                    else {
                        console.table(money);
                        roadToTheUniversity(true,(error,time)=>{
                            if (error){
                                console.error(error);
                            }
                            else {
                                console.table(time);
                                studying(time,(error,time)=>{
                                    if (error){
                                        console.error(error);
                                    }else {
                                        console.table(time);
                                        lunch(money,(error,money)=>
                                        {
                                            if (error) {
                                                console.error(error);
                                            } else {
                                                console.table(money);
                                                training(true, (error, time) => {
                                                    if (error) {
                                                        console.error(error);
                                                    } else {
                                                        console.table(time);
                                                        dinner(true, (error, time) => {
                                                            if (error) {
                                                                console.error(error);
                                                            } else {
                                                                console.table(time);
                                                                homework(energy, (error, time) => {
                                                                    if (error) {
                                                                        console.error(error);
                                                                    } else {
                                                                        console.table(time);
                                                                        sleeping(energy, (error, time) => {
                                                                            if (error) {
                                                                                console.error(error);
                                                                            } else {
                                                                                console.table(time);
                                                                                console.log('Завтра повторимо)')
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })

                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
});