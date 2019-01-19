<template>
    <header class="header">
        <router-link class="link" to="/">
            <Logo class="logo" />
        </router-link>
    </header>
</template>

<script>
import Logo from './Logo';
export default {
  name: "Header",
  components: {Logo},
}
</script>

<style scoped lang=scss>

.header {
    display: flex;
    justify-content: center;
}

.logo {
    margin: 60px 0;

    @media screen and (max-width: 360px) {
        margin: 32px 0;
    }
}
</style>
