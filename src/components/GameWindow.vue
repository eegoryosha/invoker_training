<template>
    <div class="game-window">

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'GameWindow',
    props: {

    },
});
</script>

<style scoped lang="scss">

.game-window {
    width: 700px;
    height: 400px;
    box-shadow: 0px 0px 100px 85px rgba(0, 0, 0, 0.2) inset;
    background: rgb(80, 80, 80);
    margin: 0 auto;
    border: $border
}
</style>
