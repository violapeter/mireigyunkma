<template>
    <div>
        <p class="drink">igyunk...</p>
        <div class="casusbibendi">
            {{ casus }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'CasusBibendi',
  props: {
    casus: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.drink {
    text-align: center;
    color: #fff;
    font-weight: bold;
}
.casusbibendi {
    background: #FFE5CB;
    border-radius: 6px;
    padding: 24px 32px;
    box-shadow: 0 4px #d7a97b;
    color: #695d57;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    text-decoration: none;
}
</style>
