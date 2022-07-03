const state = ["run", "run", "run", "jump"];
const track = ["_", "_", "_", "|"];

const valid = { "run": "_", "jump": "|" }
const error = { "run": "x", "jump": "/" }

const validateRun = (state, track) => {
    for (let i = 0; i < state.length; i++) {
        if (!(valid[state[i]] === track[i])) {
            track[i] = error[state[i]];
        }
    }

    return !((/[/x]/g).test(track.join("")));
}

console.log(validateRun(state,track));