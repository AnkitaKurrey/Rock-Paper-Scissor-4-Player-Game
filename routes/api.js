const express = require('express');
const router = express.Router();
let info = {}
let ite =1

router.get('/start', function(req, res){

    
    class play {
        //This function is used to create a random value that is R(rock) or S(scissor) or P(paper) .
        fun() {
            const inte = Math.floor(Math.random() * 3) //this Math.random returns any of three random value which is R or S or P .
            if (inte === 0) {
                return 'Rock' // return R which is rock.
            } else if (inte === 1) {
                return 'Scissor' // return S which is scissor.
            } else {
                return 'Paper' // return P which is paper.
            }
        }
    
    }
    
    //four objects of class play which act as four players.
    const player1 = new play()
    const player2 = new play()
    const player3 = new play()
    const player4 = new play()
    
    
    
    
    //player point intiated.
    var player1point = 0
    var player2point = 0
    var player3point = 0
    var player4point = 0
    
    
    //this for loop  does 50 round or iteration.
    for (var j = 1; j <= 50 && ite<=50; j++) {
    
        console.log('round :', j)
    
    
        //four choice which takes returned value of fun
        //funtions which will be the random choices
        //the 4 players will be making.
        var player1choice = player1.fun()
        var player2choice = player2.fun()
        var player3choice = player3.fun()
        var player4choice = player4.fun()
    
    
        //This is the arrays which holds the players who the player has to play(check) with.
        var playerch1 = [player2choice, player3choice, player4choice]
        var playerch2 = [player1choice, player3choice, player4choice]
        var playerch3 = [player1choice, player2choice, player4choice]
        var playerch4 = [player1choice, player2choice, player3choice]
    
        //player 1 checks the other 3 player and point is awarded accordingly 
        for (var i = 0; i < 3; i++) {
            if (player1choice === 'Rock' && playerch1[i] === 'Scissor') {
                player1point++
            } else if (player1choice === 'Scissor' && playerch1[i] === 'Paper') {
                player1point++
            } else if (player1choice === 'Paper' && playerch1[i] === 'Rock') {
                player1point++
            }
        }
    
        //player 2 checks the  other 3 player and point is awarded accordingly
        for (var i = 0; i < 3; i++) {
            if (player2choice === 'Rock' && playerch2[i] === 'Scissor') {
                player2point++
            } else if (player2choice === 'Scissor' && playerch2[i] === 'Paper') {
                player2point++
            } else if (player2choice === 'Paper' && playerch2[i] === 'Rock') {
                player2point++
            }
        }
        //player 3 checks the  other 3 player and point is awarded accordingly
        for (var i = 0; i < 3; i++) {
            if (player3choice === 'Rock' && playerch3[i] === 'Scissor') {
                player3point++
            } else if (player3choice === 'Scissor' && playerch3[i] === 'Paper') {
                player3point++
            } else if (player3choice === 'Paper' && playerch3[i] === 'Rock') {
                player3point++
            }
        }
        //player 4 checks the  other 3 player and point is awarded accordingly
        for (var i = 0; i < 3; i++) {
            if (player4choice === 'Rock' && playerch4[i] === 'Scissor') {
                player4point++
            } else if (player4choice === 'Scissor' && playerch4[i] === 'Paper') {
                player4point++
            } else if (player4choice === 'Paper' && playerch4[i] === 'Rock') {
                player4point++
            }
        }
    
    
    //prints points of each round or iteration(summing up of previous round)
        
        console.log('player 1 choice:', player1choice, ' player 1 point:', player1point)
        console.log('player 2 choice:', player2choice, ' player 2 point:', player2point)
        console.log('player 3 choice:', player3choice, ' player 3 point:', player3point)
        console.log('player 4 choice:', player4choice, ' player 4 point:', player4point)

        info["Iteration "+ite] = {
            'player 1 choice:': player1choice, ' player 1 point:': player1point,
            'player 2 choice:': player2choice, ' player 2 point:': player2point,
            'player 3 choice:': player3choice, ' player 3 point:': player3point,
            'player 4 choice:': player1choice, ' player 4 point:': player4point
        }

        ite++
    
    }
    //print the total point at the end
    console.log()
    
    console.log('Total point after round 50')

    info['Total point after round 50'] ={
        'player 1: ': player1point,
        'player 2: ': player2point,
        'player 3: ': player3point,
        'player 4: ': player4point
        
    }

    JSON.stringify(info)

    
    console.log('player 1: ', player1point)

    
    console.log('player 2: ', player2point)

    
    console.log('player 3: ', player3point)

    
    console.log('player 4: ', player4point)

    res.send(info)
})

module.exports = router;