<template>
<section class="products-section mt-5">
    <div class="container">
        <div class="category-buttons mb-4">
            <NuxtLink to="" @click="showAll" class="btn btn-outline-primary">All</NuxtLink>
            <span class="mx-2"><i class="bi bi-arrow-right"></i></span>
            <NuxtLink to="" @click="showCategory('bags')" class="btn btn-outline-primary">Bags</NuxtLink>
            <span class="mx-2"><i class="bi bi-arrow-right"></i></span>
            <NuxtLink to="" @click="showCategory('phones')" class="btn btn-outline-primary">Phones</NuxtLink>
        </div>

        <div v-for="(category, index) in filteredCategories" :key="index">
            <h2>{{ category.name }}</h2>
            <v-row>
                <v-col v-for="product in category.products" :key="product.id" :cols="12" :md="4" :lg="4" :xl="4" class="mb-4">
                    <ProductCard :product="product" />
                </v-col>
            </v-row>
        </div>
    </div>
</section>
</template>

  
  
<script>
import axios from 'axios';
import ProductCard from '~/components/Products/ProductCard.vue';

export default {
    name: 'ProductsPage',
    components: {
        ProductCard,
    },

    data() {
        return {
            allCategories: [],
            filteredCategories: [],
        };
    },

    async mounted() {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/VinusreeAJ/demo/db');
            console.log("Full response data >>", response.data);
            this.processCategories(response.data);
            this.filteredCategories = this.allCategories;
        } catch (error) {
            console.error(error);
        }
    },

    methods: {
        processCategories(data) {
            const categoryNames = Object.keys(data);
            this.allCategories = categoryNames.map(name => ({
                name: name.charAt(0).toUpperCase() + name.slice(1),
                products: data[name]
            }));
        },
        showCategory(category) {
            this.filteredCategories = this.allCategories.filter(cat => cat.name.toLowerCase() === category);
        },
        showAll() {
            this.filteredCategories = this.allCategories;
        }
    },
};
</script>
  
  
<style scoped>
.products-section {
    padding: 50px 0;
}

.category-buttons {
    display: flex;
    align-items: center;
}

.category-buttons .btn {
    margin: 0 0.5rem;
}

.mb-4 {
    margin-bottom: 1.5rem;
}
</style>
