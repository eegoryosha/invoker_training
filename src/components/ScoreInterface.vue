<template>
    <div class="score">
        <div class="score__points">
            <div class="score__title">Score:</div>
            <div class="score__value">{{ $store.state.score }}</div>
        </div>
        <div class="score__points">
            <div class="score__title">Combo:</div>
            <div class="score__value">{{ $store.state.noMissCombo }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    components: {},
    name: 'Score',
    props: {
        score: {
            type: Number,
            default: 0
        },
        noMissCombo: {
            type: Number,
            default: 0
        }
    },
    setup(props) {


        return {

        };
    }
});
</script>

<style scoped lang="scss">

.score {
    display: flex;
    justify-content: center;
    &__points {
        display: flex;
        margin-right: 24px;
        font-size: 24px;
        color: #fff;
    }
    &__title {
        margin-right: 5px;
    }
}

</style>
