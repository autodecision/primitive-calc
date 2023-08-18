@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap');

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    background-color: black;
    background-image: url("../img/clouds.jpg");
    background-position: bottom;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.3rem;
}

#calc-container {
    background: black;
    margin-top: 15vh;
    height: 60vh;
    width: 25vw;
    border: 2px solid rgb(255, 87, 247);
    display: flex;
    flex-direction: column;
}

#calc-screen {
    background-color: rgb(31, 11, 27);
    border: 1px solid rgb(255, 87, 247);
    color: rgb(255, 87, 247);
    width: 90%;
    height: 20%;
    margin: 5% 0;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-overflow: clip;
    overflow: hidden;
}

#current, #old {
    margin: .2rem 1rem;
}

#old {
    font-size: 1rem;
}

#current {
    align-self: self-end;
}

#calc-buttons {
    width: 90%;
    height: 100%;
    margin-bottom: 5%;
    align-self: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(10px, auto);
    grid-gap: .5rem;
}

.calc-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(255, 87, 247);
    background-color: rgb(31, 11, 27);
    color: rgb(255, 87, 247);
}

.calc-button:hover {
    transition: .4s;
    background-color: rgb(173, 70, 151);
}

.calc-button:active {
    background-color: #ffffff;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

#multiply {
    grid-column: 1;
    grid-row: 1;
}

#divide {
    grid-column: 2;
    grid-row: 1;
}

#clear {
    grid-column: 3;
    grid-row: 1;
}

#all-clear {
    grid-column: 4;
    grid-row: 1;
}

#add {
    grid-column: 4;
    grid-row: 2;
}

#subtract {
    grid-column: 4;
    grid-row: 3;
}

#equals {
    grid-column: 4;
    grid-row: 4/6;
}

#seven {
    grid-column: 1;
    grid-row: 2;
}

#eight {
    grid-column: 2;
    grid-row: 2;
}

#nine {
    grid-column: 3;
    grid-row: 2;
}

#four {
    grid-column: 1;
    grid-row: 3;
}

#five {
    grid-column: 2;
    grid-row: 3;
}

#six {
    grid-column: 3;
    grid-row: 3;
}

#one {
    grid-column: 1;
    grid-row: 4;
}

#two {
    grid-column: 2;
    grid-row: 4;
}

#three {
    grid-column: 3;
    grid-row: 4;
}

#zero {
    grid-column: 1;
    grid-row: 5;
}

#decimal {
    grid-column: 2;
    grid-row: 5;
}

#absolute {
    grid-column: 3;
    grid-row: 5;
}

@media screen and (max-width: 1226px) {
    #calc-container {
        width: 50vw;
    }
}

@media screen and (max-width: 500px) {
    #calc-container {
        width: 75vw;
    }
    
    #current, #old {
        margin: 0 .3rem;
    }
}
