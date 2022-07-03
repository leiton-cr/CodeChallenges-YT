import View from "./view.js";

export default class Controller {
    /**
     *  Turnos pares del primer jugador.
     *  Turnos impares del segundo jugador.
     */
    turn;

    constructor() {
        this.scores = [0, 0];
        this.scoresContainer = document.querySelectorAll("[data-score]")
        this.view = new View();
        this.turn = 0;
        this.columns = [[], [], [], [], [], [], []];
        this.drawBoard();
        this.addListeners();
        this.setScores();
    }

    addListeners() {
        this.view.board.addEventListener("click", this.makePlay)
        this.view.clearBtn.addEventListener("click", this.clearButton)
        this.view.resetBtn.addEventListener("click", this.resetButton)
    }

    clearButton = () => {
        /* Si el intervalo esta en ejecucion no se termina el juego */
        if (!this.view.playInterval) {
            this.endGame();
        }
    }

    endGame = () => {
        this.columns = [[], [], [], [], [], [], []];
        this.view.pointPlayer("p2")
        this.turn = 0;
        this.drawBoard();
    }

    resetButton = () => {
        this.scores = [0, 0];
        this.setScores();
    }

    setScores = () => {
        this.scoresContainer[0].innerText = this.scores[0]
        this.scoresContainer[1].innerText = this.scores[1]
    }

    drawBoard = () => {
        this.view.board.innerHTML = "";
        for (let i = 41; i >= 0; i--) {
            this.view.board.innerHTML += `<div class="board-dot" data-col="${i % 7}"  data-row="${Math.round((i + 4) / 7)}"></div>`
        }
    }

    checkWin = ({ col }, player) => {
        if (this.turn < 7) return false;
        return this.checkVertical(col, player) || this.checkHorizontal(player);
    }

    checkVertical(col, player) {
        if (this.columns[col].length < 3) return false;
        return (this.columns[col].join("").includes(player.repeat(4)));
    }

    checkHorizontal(player) {
        for (let j = 0; j < this.columns[0].length; j++) {
            let line = "";
            for (let i = 0; i < this.columns.length; i++) {
                if (!this.columns[i][j]) continue;
                line += this.columns[i][j];
            }

            if (line.includes(player.repeat(4))) return true;
        }

        return false
    }

    /* TODO: Realizar check diagonal */
    /* TODO: Revisar fin de juego    */

    makePlay = ({ target }) => {

        /* Valida si la ficha puede ser jugada */
        if (!this.isValidPlay(target)) return

        let player = `p${( this.turn % 2) + 1}`

        this.view.pointPlayer(player)

        /* Se asigna la jugada al tablero de columnas. */
        this.columns[target.dataset.col].push(player);

        this.view.animatePlay(target, player, this.columns);

        const state = this.checkWin(target.dataset, player);

        if(state){
            this.scores[this.turn%2]++;
            this.setScores();
            setTimeout(()=> {this.endGame()},500)
        }else{
            this.turn++
        }
        
    }

    isValidPlay(target) {

        /* Si no se clickeo a la ficha no juega. */
        if (target.nodeName !== "DIV") return false;

        /* Si la columna esta llena la ficha no juega. */
        if (this.columns[target.dataset.col].length > 5) return false;

        /* Hay un intervalo de juego en proceso no juega. */
        if (this.view.playInterval) return false;

        return true;
    }

}