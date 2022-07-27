import { createStore } from 'vuex';

export default createStore({
    state: {
        score: 0,
        noMissCombo: 0
    },
    mutations: {
        setScore(state, value) {
            state.score = value;
        },
        setNoMissCombo(state, value) {
            state.noMissCombo = value;
        }
    },
    actions: {
    },
    modules: {
    }
});
