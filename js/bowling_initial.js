function totalScores(scoresList){
    var frameScores=[];
    for (i=0;i<9;i++) {
        if (scoresList[i][0]==10){
            if ((scoresList[i+1][0]==10)&&(i!=8)){
                frameScores[i]=20+scoresList[i+2][0];
            }
            else if ((scoresList[i+1][0]==10)&&(i==8)){
                frameScores[i]=20+scoresList[i+1][1];
            }
            else{
                frameScores[i]=10+scoresList[i+1][0]+scoresList[i+1][1];
            }
        }
        else if (scoresList[i][0]+scoresList[i][1]==10){
            frameScores[i]=10+scoresList[i+1][0];
        }
        else{
            frameScores[i]= scoresList[i][0]+scoresList[i][1];
        }
    }

    if ((scoresList[9][0]==10)||(scoresList[9][0]+scoresList[9][1]==10)){
        frameScores[9] = scoresList[9][0]+scoresList[9][1]+scoresList[9][2]
    }
    for (i=1;i<=9;i++){
        frameScores[i]+=frameScores[i-1];
    }
    return frameScores[9];
}

totalScores([[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6,4]])