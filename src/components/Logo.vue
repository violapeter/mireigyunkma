<template>
    <div class="logo"></div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style scoped lang=scss>
.logo {
    background: url('../assets/emblem.svg') no-repeat;
    display: flex;
    align-items: center;
    vertical-align: center;
    width: 40px;
    height: 40px;
    font-size: 32px;
    letter-spacing: -2px;
    font-weight: bold;
    text-transform: uppercase;
    color: #5aaf0c;
    text-shadow: 0 0 2px #ffe5cb, 0 0 1px #ffe5cb, 0 0 3px #ffe5cb;
}
</style>
