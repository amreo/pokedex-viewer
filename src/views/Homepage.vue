<template>
    <div class="container">   
        <div id="Search">Are you looking for a Pokemon?</div>
        <div>
            <input class="text_search" type="text" v-model="search" @keypress.enter="viewPokemon" />
        </div>
        <div class="list">
            <router-link class="pkmn-link" v-for="pk in filteredPokemonLists" :key="pk.id" :to="{ name: 'pokemon', params: { id: pk.id }}" :style="{background: typeToGrad(pk.types) }">
                <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pk.id+'.png'" class="foo" />
                <p class="foo">{{ pk.name}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            typeColorMap: {
                "bug": "#A8B820",
                "dark": "#705848",
                "dragon": "#7038F8",
                "electric": "#F8D030",
                "fairy": "#EE99AC",
                "fighting": "#C03028",
                "fire": "#F08030",
                "flying": "#A890F0",
                "ghost": "#705898",
                "grass": "#78C850",
                "ground": "#E0C068",
                "ice": "#98D8D8",
                "normal": "#A8A878",
                "poison": "#A040A0",
                "psychic": "#F85888",
                "rock": "#B8A038",
                "steel": "#B8B8D0",
                "water": "#6890F0",
                "???": "#68A090",
            },
            search: "",
            // pokemons: [
            //     { id: 1, name: 'Bulbasaur', types: [ 'Grass', 'Poison'], img_front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
            //     { id: 2, name: 'Ivysaur', types: [ 'Grass', 'Poison'], img_front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
            //     { id: 3, name: 'Venusaur', types: [ 'Grass', 'Poison'], img_front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'},
            //     { id: 4, name: 'Charmander', types: [ 'Fire' ], img_front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
            //     { id: 5, name: 'Charmeleon', types: [ 'Fire' ], img_front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'},
            //     { id: 6, name: 'Charizard', types: [ 'Fire', 'Flying' ], img_front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
            //     { id: 7, name: 'Squirtle', types: [ 'Water' ], img_front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
            //     { id: 8, name: 'Wartortle', types: [ 'Water' ], img_front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'},
            //     { id: 9, name: 'Blastoise', types: [ 'Water' ], img_front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'},
            // ]
        }
    },
    computed: {
        pokemons() {
            return this.$store.getters.pokemons;
        },
        filteredPokemonLists() {
            return this.pokemons.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()))
        },
    }, 
    methods: {
        typeToGrad(types) {
            if (types.length == 1) {
                return this.typeColorMap[types[0]];
            } else {
                let color0 = this.typeColorMap[types[0]];
                let color1 = this.typeColorMap[types[1]];
                return `linear-gradient(90deg, ${color0} 0%, ${color0} 50%, ${color1} 50%, ${color1} 100%)`;
            }
        },
        viewPokemon() {
            if (this.filteredPokemonLists.length > 0) {
                this.$router.push({ name: 'pokemon', params: { id: this.filteredPokemonLists[0].id }})
            }
        }
    }
}
</script>

<style>
    #Search{
        font-family: "Lucida Console", Monaco, monospace;
        font-size: 22px;
        letter-spacing: 1px;
        word-spacing: 1.4px;
        color: #000000;
        font-weight: normal;
        text-decoration: none solid rgb(68, 68, 68);
        font-style: normal;
        font-variant: small-caps;
        text-transform: none;
    }
    .text_search {
        display: inline-block;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        padding: 10px 20px;
        border: 1px solid #b7b7b7;
        -webkit-border-radius: 10px / 15px;
        border-radius: 10px / 15px;
        font: normal 18px/normal "Lucida Console", Monaco, monospace;
        color: black;
        background: rgba(252,252,252,1);
        -webkit-box-shadow: 3px 3px 4px 1px rgba(0,0,0,0.2) ;
        box-shadow: 3px 3px 4px 1px rgba(0,0,0,0.2) ;
        text-decoration: none solid rgb(68, 68, 68);
        font-style: normal;
        font-variant: small-caps;
    }
    .poke-thumbnail {
        width: 256px;
        height: 256px;
        border: 1px solid black;
    }
    .foo {
        display: block;
        text-align: center;
    }
    .list {
        display: inline-block;
        text-align: left;
    }
    .pkmn-link {
        display: inline-block;
        border: 1px solid red;
        width: 128px;
        height: 150px;
        margin: 5px;
    }
    .pkmn-link:hover {
        border: 1px solid yellow;
        filter:brightness(90%);
    }
</style>