<template>
    <div class="skills-buttons">
        <div ref="slot_1" class="skills-buttons__button">
            <div class="empty"></div>
        </div>
        <div ref="slot_2" class="skills-buttons__button">
            <div class="empty"></div>
        </div>
        <div ref="slot_3" class="skills-buttons__button">
            <div class="empty"></div>
        </div>
        <div class="skills-buttons__button">
            <img src="@/assets/images/skills/invoke.png">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
    setup () {
        const slot_1 = ref(null);
        const slot_2 = ref(null);
        const slot_3 = ref(null);

        const skills = {
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
        const activeSkills = ref([]);


        document.addEventListener('keydown', (e) => {
            console.log(e.key);
            console.log(slot_1);
        });



        return {
            slot_1, slot_2, slot_3,
            activeSkills,
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
