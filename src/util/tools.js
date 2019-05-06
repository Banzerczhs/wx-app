let tools={
    randomNum(start,end,isInt){
        return isInt?
            Math.ceil(Math.random()*(end-start)+start):
            Math.random()*(end-start)+start;
    }
}

export default tools;