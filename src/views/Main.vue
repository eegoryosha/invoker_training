<template>
    <section class="main">
        <div class="container">
            <game />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Game from '@/components/Game.vue';

export default defineComponent({
    name: 'Main',
    components: {
        Game
    },

});

</script>

<style lang="scss" scoped>
section.main {
    position: relative;
    &::before {
        content: '';
        background: url('../assets/images/background.png') center / cover no-repeat;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: blur(5px);
    }
    &::after {
        content: '';
        background: rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
.container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
}
</style>
