// function roundStatus()

function countEachScores(scoresTable){
    var frameScores=[];
    for (i=0;i<9;i++) {
        if (scoresTable[i][0]==10){
            if ((scoresTable[i+1][0]==10)&&(i!=8)){
                frameScores[i]=20+scoresTable[i+2][0];
            }
            else if ((scoresTable[i+1][0]==10)&&(i==8)){
                frameScores[i]=20+scoresTable[i+1][1];
            }
            else{
                frameScores[i]=10+scoresTable[i+1][0]+scoresTable[i+1][1];
            }
        }
        else if (scoresTable[i][0]+scoresTable[i][1]==10){
            frameScores[i]=10+scoresTable[i+1][0];
        }
        else{
            frameScores[i]= scoresTable[i][0]+scoresTable[i][1];
        }
    }
    if ((scoresTable[9][0]==10)||(scoresTable[9][0]+scoresTable[9][1]==10)){
        frameScores[9] = scoresTable[9][0]+scoresTable[9][1]+scoresTable[9][2]
    }
    return frameScores;
}

function pluScores(scoresList){
    for (i=1;i<=9;i++){
        scoresList[i]+=scoresList[i-1];
    }
    return scoresList[9];
}

function gameScores(scoresTable){
    var frameScores=countEachScores(scoresTable);
    return pluScores(frameScores);
}

a=gameScores([[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[10,10,4]])
console.log(a)