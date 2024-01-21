const buy = require('../localStorage/buy')
var LocalStorage = require('node-localstorage').LocalStorage;

localStorage = new LocalStorage('./scratch');



const buyService = {
    GetMaList: (req, res) => {
        const { UserId } = req.params;
        let buyList = JSON.parse(localStorage.getItem('buy') | [])
        if (!buyList.length) {
            localStorage.setItem('buy', JSON.stringify(buy))
            buyList = buy;
        }

        let myList = buyList.filter(x => x.UserId == UserId);
        if (!myList.length) {
            res.status(400);
            return res.send('לא נמצאו נתונים')
        }
        console.log(myList);
        res.send(myList);
    },

    AddToList: (req, res) => {
        const { Name, UserId, Count } = req.body;
        let buyList = JSON.parse(localStorage.getItem('buy') | [])
        if (!buyList.length) {
            localStorage.setItem('buy', JSON.stringify(buy))
            buyList = buy;
        }
        if (!Name || !UserId || !Count) {
            // לא נשלח מידע
            res.status(400)
            return res.send('לא נשלח שם מוצר או כמות תקינה או שם משתמש')
        };
        console.log(buyList);
        const foundIndex = buyList.findIndex(x => x.Name == Name && x.UserId == UserId);
        if (foundIndex >= 0) {
            buyList[foundIndex].Count += Count;
            localStorage.setItem('buy', JSON.stringify(buyList))
            return res.send(buyList[foundIndex]);
        }
        else {
            const Id = buyList[buyList.length - 1].Id + 1;
            const newbuy = { Name, Id, UserId, Count };
            buyList.push(newbuy)
            localStorage.setItem('buy', JSON.stringify(buyList))
            res.send(newbuy);
        }


    },
    Delete: (req, res) => {
        const { Id } = req.params;
        let buyList = JSON.parse(localStorage.getItem('buy') | [])

        if (!buyList.length) {
            localStorage.setItem('buy', JSON.stringify(buy))
            buyList = buy;
        }
        
      
        // buyList = buyList.filter(x => x.Id != Id);
        let index=-1;
        for(let i=0; i<buyList.length; i++){
            if(buyList[i].Id==Id){
                index=i;
                break;
            }
        }
        buyList.splice(index, 1);
        console.log(index);
        console.log(buyList,Id);
        localStorage.setItem('buy', JSON.stringify(buyList))
        res.send('ok');
    },
}

module.exports = buyService;