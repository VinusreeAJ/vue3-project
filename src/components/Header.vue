<template>
<header class="navbar1">
    <nav class="container1">
        <div class="d-flex align-items-center logo">
            <img src="~/assets/images/logo.jpg" height="50" />
            <h1>My Product Store</h1>
        </div>
        <ul class="nav-links">
            <li>
                <NuxtLink to="/">
                    <i class="bi bi-house-door me-1"></i>Home
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/products">
                  <i class="bi bi-bag me-1"></i> Products
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/wishlist">
                  <i class="bi bi-heart me-1"></i> Wishlist
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/cart">
                  <i class="bi bi-cart me-1"></i> Cart
                </NuxtLink>
            </li>
            <!-- <li><NuxtLink to="/summary">Summary</NuxtLink></li>
          <li><NuxtLink to="/payment">Payment</NuxtLink></li> -->
        </ul>
    </nav>
</header>
</template>

<script>
export default {
    name: 'HeaderComponent',
};
</script>

<style scoped>
.navbar1 {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.container1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
}

.logo h1 {
    font-size: 1.5rem;
    color: #333;
}

.nav-links {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-links li a {
    text-decoration: none;
    font-size: 1rem;
    color: #333;
    transition: color 0.3s;
}

.nav-links li a:hover {
    color: #007bff;
}
</style>
