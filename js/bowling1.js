var bowlingGame = {
    scoresTable: [],
    roundStatus: function(){
        var roundStatus=[],
            scoresTable=this.scoresTable;
        for (i=0;i<=9;i++){
            if (scoresTable[i][0]==10){
                roundStatus[i]='strike';
            }
            else if (scoresTable[i][0]+scoresTable[i][1]==10){
                roundStatus[i]='spare';
            }
        }
        return roundStatus;
    },
    countFrontRound:function () {
        var frameScores=[],
            scoresTable=this.scoresTable,
            roundStatus=this.roundStatus();
        for (i=0;i<9;i++) {
            if (roundStatus[i]=='strike'){
                if ((roundStatus[i+1]=='strike')&&(i!=8)){
                    frameScores[i]=scoresTable[i][0]+scoresTable[i+1][0]+scoresTable[i+2][0];
                }
                else if ((roundStatus[i+1]=='strike')&&(i==8)){
                    frameScores[i]=scoresTable[i][0]+scoresTable[i+1][0]+scoresTable[i+1][1];
                }
                else{
                    frameScores[i]=scoresTable[i][0]+scoresTable[i+1][0]+scoresTable[i+1][1];
                }
            }
            else if (roundStatus[i]=='spare'){
                frameScores[i]=scoresTable[i][0]+scoresTable[i][1]+scoresTable[i+1][0];
            }
            else{
                frameScores[i]= scoresTable[i][0]+scoresTable[i][1];
            }
        }
        return frameScores;
    },
    countLastRound:function () {
        var frameScores=0,
            scoresTable=this.scoresTable;
        if ((scoresTable[9][0]==10)||(scoresTable[9][0]+scoresTable[9][1]==10)){
            frameScores = scoresTable[9][0]+scoresTable[9][1]+scoresTable[9][2]
        }
        return frameScores;
    },
    countScoresList: function () {
        var frameScores=[];
        frameScores=this.countFrontRound();
        frameScores[9]=this.countLastRound();
        return frameScores;
    },
    countFinalSocer: function(){
        var finalSocer=0,
            scoreList=this.countScoresList();
        for (i=0;i<=9;i++){
            finalSocer=finalSocer+scoreList[i];
        }
        return finalSocer;
    }
}

bowlingGame.scoresTable = [[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6,10]];
console.log(bowlingGame.countFinalSocer());
