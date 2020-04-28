<template>
    <div id="sheet">
        <!-- *{{ pokemon }}* -->
        <!-- <img class="fullscreen-thumbail" :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+id+'.png'"> -->
        <img class="fullscreen-thumbail" :src="this.image">
        <div>
            Pokemon {{ pokemon.name }} #{{ pokemon.id}}
            Types: <span v-for="t in pokemon.types" :key="t" :style="{'background-color': typeColorMap[t]}">{{ t }} </span>
            
            <div class="table-stat">
                <ul class="stat">
                    <li>Max CP: {{ pokemon.maxcp}}</li>
                    <li>Attack: {{ pokemon.atk}}</li>
                    <li>Defense: {{ pokemon.def}}</li>
                    <li>Stamina: {{ pokemon.sta}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
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
            }
        }
    },
    computed: {
        pokemon() {
            return this.$store.getters.pokemons.find(pk => pk.id == (0+this.id));
        },
        image() {
            let normalizedName = this.pokemon.name.replace(' ', '-').replace('.', '').toLowerCase();
            return `https://img.pokemondb.net/artwork/large/${normalizedName}.jpg`
        }
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
    }
}
</script>

<style>
    #sheet {
        font-size: 1.5em;
    }
    .fullscreen-thumbail {
        width: 512px;
        height: 512px;
        min-height: 256px;
        min-width: 256px;
    }
    .stat {
        /* text-align: left;
        margin-left: 40%; */
        list-style: none;
        display: inline;
    }
    .table-stat {
        display: table;
        margin: 0 auto;
    }
</style>