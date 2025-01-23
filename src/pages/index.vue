<template>
<div>
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container text-center">
            <h1 class="display-4">Welcome to My Product Website</h1>
            <p class="lead">Explore amazing products, add them to your wishlist, or proceed to checkout seamlessly.</p>
            <div class="cta-buttons">
                <button class="btn btn-primary">Shop Now</button>
                <button class="btn btn-outline-primary text-white">Learn More</button>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features-section mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="feature in features" :key="feature.title" >
                    <FeatureCard :title="feature.title" :description="feature.description" />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import FeatureCard from '~/components/LandingPage/FeatureCard.vue';

export default {
    name: 'LandingPage',
    components: {
        FeatureCard,
    },
    data() {
        return {
            features: [
                { title: 'Wishlist', description: 'Save your favorite products for later and access them anytime.' },
                { title: 'Cart', description: 'Add products to your cart and keep track of what you want to purchase.' },
                { title: 'Payment', description: 'Enjoy a smooth checkout process with multiple payment options.' }
            ]
        }
    }
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
    background: linear-gradient(120deg, #6c63ff, #5a4dd9);
    color: #fff;
    padding: 100px 0;
}

.hero-section h1 {
    font-size: 2.5rem;
    font-weight: 700;
}

.hero-section .lead {
    margin: 20px 0;
    font-size: 1.2rem;
}

.hero-section .cta-buttons {
    margin-top: 20px;
}

.hero-section .btn {
    padding: 10px 20px;
    font-size: 1rem;
}

/* Features Section */
.features-section {
    padding: 50px 0;
}

.feature-card {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #333;
}

.feature-card p {
    font-size: 1rem;
    color: #666;
}
</style>
