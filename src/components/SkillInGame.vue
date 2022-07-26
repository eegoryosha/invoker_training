<template>
    <div class="skill" :style="`left: ${skill.position.posX}px;`">
        <div class="skill__combo">{{ skill.combo }}</div>
        <img class="skill__icon" :src="skill.img">
    </div>
</template>

<script lang="ts">
import SkillInterface from '@/interfaces/SkillInterface';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    props: {
        skill: {
            type: Object as () => SkillInterface
        },
        posX: {
            type: Number
        }
    },

});
</script>

<style lang="scss" scoped>
    .skill {
        width: 100px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;
        &__icon {
            width: 100%;
        }
        &__combo {
            position: absolute;
            color: #fff;
            font-size: 25px;
            text-shadow: 2px 2px 1px #000;
        }
    }
</style>
