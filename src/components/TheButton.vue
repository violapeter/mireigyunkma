<template>
  <button class="thebutton" v-on="$listeners">Másikat!</button>
</template>

<script>
export default {
  name: "TheButton"
}
</script>

<style scoped lang=scss>
.thebutton {
    font-family: "Rubik", sans-serif;
    font-size: 28px;
    padding: 16px;
    background: #c46330;
    color: #ffe0d0;
    border-radius: 4px;
    font-weight: bold;
    border: none;
    width: 300px;
    box-shadow: 0 4px 0 0 darken(#c46330, 10%);
    outline: none;
    cursor: pointer;

    &:hover {
        background: #ca7446;
    }

    &:active {
        background: #a14e23;
    }

    @media screen and (max-width: 360px) {
        width: 100%;
    }
}
</style>
