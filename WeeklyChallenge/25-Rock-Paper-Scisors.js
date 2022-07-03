
const playsValue = { R: 0, P: 1, S: 2 }

const playValue = ([ p1, p2 ]) => {
    const difference = playsValue[p1] - playsValue[p2]
   
    const winner =  (difference === -1 || difference === 2) ? "player2" : "player1";
    return winner;
}

const validateGame = (plays) => {
    points = { player1: 0, player2: 0 }

    plays.forEach(play => {
        if(play[0] !== play[1]){
            points[playValue(play)] += 1;
        }
    });
    
    if(points["player1"] > points["player2"]){
        return "Player 1 wins"
    }else if(points["player1"] < points["player2"]){
        return "Player 2 wins"
    }else{
        return "Its a tie"
    }

}

console.log(validateGame([["R","S"], ["S","R"], ["P","S"], ["R","R"]]));


/*

Si la resta da 0 es empate

0 - 0 = 0       1 - 1 = 0       2 - 2 = 0
r r = tie       p p  = tie      s s  = tie

------------

Si la resta da -1 o 2 pierde el jugador 1

0 - 1  = -1     1 - 2  = -1     2 - 0  = 2
r p = lose      p s  = lose     s r = lose  

------------

Si la resta da 1 o -2 gana el jugador 1

1 - 0  = 1      0 - 2  = -2     2 - 1  = 1
p r = win       r s = win       s p  = win

*/