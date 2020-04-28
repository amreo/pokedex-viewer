import Vue from "vue";
import axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
// Vue.axios.defaults.baseURL = "https://db.pokemongohub.net/api/pokemon/with-generation/1";

export default {
    
// https://db.pokemongohub.net/api/pokemon/1?form=  

    //Download
    loadPokemon ({commit}) {
        Vue.axios.get('/api/pokemon/with-generation/1').then(result => {
            commit('SAVE_POKEMON', result.data.filter(pkmn => pkmn.form == null).map(pkmn => {
                let types = [];
                if (pkmn.type2 == null) {
                    types = [pkmn.type1];
                } else {
                    types = [pkmn.type1, pkmn.type2];
                }
                return {'types': types, ...pkmn};
            }));
        }).catch(error => {
            throw new Error(`API ${error}`);
        });
    }
    //Search
};