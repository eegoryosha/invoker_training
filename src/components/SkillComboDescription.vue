<template>
    <div
        :class="{
            'combo-description left': descriptionPosition === 'LEFT',
            'combo-description right': descriptionPosition === 'RIGHT'
        }"
    >
        <div class="combo-description__combo" v-if="descriptionPosition === 'LEFT'">{{ combo }}</div>
        <img class="combo-description__icon" :src="skillIcon">
        <div class="combo-description__combo" v-if="descriptionPosition === 'RIGHT'">{{ combo }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        skillIcon: {
            type: String
        },
        combo: {
            type: String
        },
        descriptionPosition: {
            type: String as () => 'LEFT'|'RIGHT',
            default: 'LEFT'
        }
    },

});
</script>

<style lang="scss" scoped>
    .combo-description {
        display: flex;
        align-items: center;

        &.left {
            justify-content: flex-end;
        }
        &.right {
            justify-content: flex-start;
        }

        &__combo {
            margin: 10px;
            color: #fff;
            font-size: 26px;
            text-shadow: 1px 1px 2px#000;
            text-transform: uppercase;
        }
        &__icon {
            width: 60px;
            height: 60px;
            border: $border
        }
    }
</style>
