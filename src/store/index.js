import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        juegos: [],
    },
    mutations: {
        setJuegos(state, juegos) {
            state.juegos = juegos;
        },
        incrementarStock(state, index) {
            state.juegos[index].stock++;
        },
        decrementarStock(state, index) {
            state.juegos[index].stock--;
        },
    },
    actions: {
        async cargarJuegos({ commit }) {
            try {
                const response = await axios.get('src/db/juegos.json');
                commit('setJuegos', response.data);
            } catch (error) {
                console.error('Error al cargar juegos:', error);
            }
        },
        incrementarStock({ commit }, index) {
            commit('incrementarStock', index);
        },
        decrementarStock({ commit }, index) {
            commit('decrementarStock', index);
        },
    },
    getters: {
        getJuego: (state) => (codigo) => {
            return state.juegos.find((juego) => juego.codigo === codigo);
        },
    },
});
