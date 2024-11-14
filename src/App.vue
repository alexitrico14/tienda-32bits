<template>
  <div class="container">
    <h1 class="title">Tienda 32 Bits</h1>
    <h2 class="subtitle">Lista de juegos</h2>
    <table class="game-table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juego, index) in juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>
            <button @click="decrementarStock(index)">-</button>
            <button @click="incrementarStock(index)">+</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['juegos'])
  },
  methods: {
    ...mapMutations(['incrementarStock', 'decrementarStock']),
  },
  created() {
    this.$store.dispatch('cargarJuegos');
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #333;
}

.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 20px;
}

.game-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.game-table th, .game-table td {
  padding: 10px;
  border: 1px solid #ccc;
}

.game-table th {
  background-color: #f4f4f4;
}

button {
  padding: 5px 10px;
  margin: 0 2px;
  font-size: 14px;
  cursor: pointer;
}

button:first-of-type {
  background-color: #d9534f;
  color: white;
  border: none;
}

button:last-of-type {
  background-color: #5cb85c;
  color: white;
  border: none;
}
</style>
