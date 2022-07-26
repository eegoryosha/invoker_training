<template>
    <div class="skills-buttons">
        <div
            v-for="index of [2, 1, 0]"
            :key="index"
            class="skills-buttons__button"
        >
            <img v-if="activeSpheres[index]" :src="activeSpheres[index].img">
            <div v-else class="empty"></div>
        </div>

        <div class="skills-buttons__button">
            <img src="@/assets/images/skills/invoke.png">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ButtonSkillInterface from '@/interfaces/ButtonSkillInterface';

export default defineComponent({
    setup (_, context) {
        const skills: {[key: string]: ButtonSkillInterface} = {
            q: {
                name: 'Quas',
                key: 'q',
                img: require('@/assets/images/skills/quas.png')
            },
            w: {
                name: 'Wex',
                key: 'w',
                img: require('@/assets/images/skills/wex.png')
            },
            e: {
                name: 'Exort',
                key: 'e',
                img: require('@/assets/images/skills/exort.png')
            }
        };
        const activeSpheres = ref([] as ButtonSkillInterface[]);


        document.addEventListener('keydown', (e) => {
            const key = e.code.toLowerCase().replace('key', '');

            if (key == 'r') {
                context.emit('invoke', activeSpheres.value);
            }


            const skill = skills[key];

            if (!skill) return;
            if (activeSpheres.value.length >= 3) {
                activeSpheres.value = activeSpheres.value.slice(0, 2);
            }
            activeSpheres.value.unshift(skill);
        });



        return {
            activeSpheres,
            skills
        };
    },

});
</script>

<style lang="scss" scoped>
    .skills-buttons {
        display: flex;
        justify-content: center;
        margin-top: 24px;
        &__button {
            width: 120px;
            height: 120px;
            margin-right: 24px;

            img {
                width: 100%;
                border: $border;
            }
            .empty {
                width: 100%;
                height: 100%;
                border: $border;
                box-shadow: 0px 0px 100px 85px rgb(0 0 0 / 20%) inset;
                background: rgb(80, 80, 80);
            }
        }
    }
</style>
