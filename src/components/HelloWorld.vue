<template>
  <div class="hello">
    <div v-if="data">
      <div class="paint">
        <div class="name-product">
          <div class="product-item" v-for="(value, index) in items" :key="'item-' + index">
            <p>{{ value.nombre }}</p>
            <p><strong>{{ value.precio }}</strong></p>
            <img :src="value.imagen" :alt="value.nombre" />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <pre>Cargando...</pre>
    </div>
    <div class="clasification-categoria">
      <div class="clasification-1"><a href="#" @click.prevent="selection(2)">Tamales</a></div>
      <div class="clasification-1"><a href="#" @click.prevent="selection(1)">Bebidas</a></div>
      <div class="clasification-1"><a href="#" @click.prevent="selection(0)">Guajolotas</a></div>
    </div>
  </div>
</template>

<style scoped>
.hello {
  justify-content: center;
}

.name-product {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  gap: 16px; 
}

.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.product-item img {
  max-width: 100%;
  height: auto;
  margin-top: 8px;
}

.clasification-categoria {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.clasification-1 a {
  text-decoration: none;
  color: blue;
  cursor: pointer;
}

.clasification-1 a:hover {
  text-decoration: underline;
}

</style>


<script>
import { Obtener } from '@/API/FunctionAPIS';

export default {
  name: 'HelloWorld',
  data() {
    return {
      data: null,
      error: null,
      filter: [],
      UIA: [],
      items: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      Obtener('https://guajolotas.onrender.com/menu')
        .then(response => {
          this.data = response.PeticionGet;
          this.filter = response.PeticionGet;
        })
        .catch(error => {
          this.error = error;
        });
    },
    selection(selec) {
      this.UIA = this.filter[selec];
      this.items = this.UIA.items;
    }
  }
}
</script>

