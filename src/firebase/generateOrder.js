import { getFirestore} from "./config";
import firebase from "firebase/app";
import 'firebase/firestore'

export const generateOrder =  (buyer, cart, total) => {


    return new Promise( async (resolve, reject) => {
        const db = getFirestore()
        const orders = db.collection('orders')

        const newOrder = {
            buyer: buyer,
            items: cart,
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        const res = await orders.add(newOrder)
        if(res){
            resolve(res)
        }else{
            reject("Something wrong happened :O")
        }

    })


}