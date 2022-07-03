export default class View {

    constructor() {
        this.playerSelector = document.querySelector(".player-selector");
        this.board = document.querySelector("[data-board]");
        this.audio = new Audio('./assets/audios/pop.wav');

        this.clearBtn = document.getElementById("clearBtn")
        this.resetBtn = document.getElementById("resetBtn")

        this.playInterval;
    }

    pointPlayer(player) {
        this.playerSelector.className = (`fa-regular fa-hand-pointer player-selector ${player}`)
    }

    animatePlay(target, player, columns) {
        /* La ficha ingresa por la fila superior. */
        let actualRow = 6;

        /* La columna que se dio click. */
        let actualCol = target.dataset.col;

        this.playInterval = setInterval(() => {
            this.board.querySelector(`[data-col="${actualCol}"][data-row="${actualRow + 1}"]`)?.classList.remove(player);
            this.board.querySelector(`[data-col="${actualCol}"][data-row="${actualRow--}"]`).classList.add(player);
            this.audio.play();
            if (columns[actualCol].length > actualRow) {
                clearInterval(this.playInterval)
                this.playInterval = undefined;
            }

        }, 300);
    }
}