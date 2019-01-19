<template>
<div class="page">
    <slot/>
</div>
</template>

<script>
export default {
  name: "Page"
}
</script>

<style scoped lang="scss">
    .page {
        background: rgba(#59AF0C, .75);
        max-width: 600px;
        margin: 0 auto 32px;
        padding: 32px;
        border-radius: 8px;
    }
</style>
