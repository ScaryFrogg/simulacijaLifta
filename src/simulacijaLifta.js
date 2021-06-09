import Queue from "./model/Queue.js"
//directioin 0 moze da gleda i gore i dole
//1 samo gore
//-1 samo dole
function findClosest(stops,floor,direction=0){
    let i = 1
    let canGoUp = direction >= 0
    let canGoDown =  direction <=0
    while(canGoDown || canGoUp){
        canGoUp = stops.length > floor+i
        if(canGoUp){
            if(stops[floor+i].length>0) return floor+i 
        }
        canGoDown= floor-i >=0
        if(canGoDown){
            if(stops[floor-i].length>0) return floor-i
        }
        i++
    }
}

function goToStops(stops, q,floor,visited){
    if (stops.every(x=>x.length==0) && q.isEmpty()) return visited
    visited.push(floor)
    //ako je neko stigao na zeljeni sprat pre reda
    q.extract(floor)
    let adding=true
    while(adding){
        if(q.isNotFull()){
            adding =q.offer(stops[floor].shift())
        }else{
            //lift pun
            adding = false
        }
    }
    let fromQ = q.front()
    let nextFloor
    if(fromQ){
        if(stops.every(x=>x.length==0)){
            nextFloor = fromQ
            //ako su spratovi prazni sigurno idem na sprat iz queue
        }else{
            if(Math.abs(fromQ-floor)==1){
                //spratovi su jedan do drugog
                nextFloor = fromQ
            }else{
                //spratovi nisu jedan do drugog proveri da li treba stati izmedju
                const direction = fromQ-floor>0 ? 1 :-1
                nextFloor = findClosest(stops,floor,direction) 
            }
        }
    }else{
        nextFloor= findClosest(stops,floor)
    }
    return goToStops(stops,q,nextFloor,visited)
}

export function calculateStops(stops,capacity){

    return goToStops(stops, new Queue(capacity),0,[])
}

// let x = calculateStops([[],[3],[4],[],[5,6,2,6,1],[],[]],4)
// console.log(x)