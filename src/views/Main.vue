<template>
    <section class="main">
        <div class="container">
            <div class="game">
                <div class="game__window">
                    <skills-combo-description
                        :position="'LEFT'"
                        :skills="skillsListLeft"
                    />
                    <game-window />
                    <skills-combo-description
                        :position="'RIGHT'"
                        :skills="skillsListRight"
                    />
                </div>

                <skills-buttons />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import GameWindow from '@/components/GameWindow.vue';
import SkillsComboDescription from '@/components/SkillsComboDescription.vue';
import skillsData from '@/data/Skills';
import SkillsButtons from '@/components/SkillsButtons.vue';

export default defineComponent({
    name: 'Main',
    components: {
        GameWindow, SkillsComboDescription,
        SkillsButtons,
    },
    setup() {
        const skillsList = ref(skillsData);
        const skillsCount = skillsList.value.length;
        const middleIndex = Math.round(skillsCount / 2);
        const skillsListLeft = skillsList.value.slice(0, middleIndex);
        const skillsListRight = skillsList.value.slice(middleIndex - 1, skillsCount - 1);

        return {
            skillsList,
            skillsListLeft,
            skillsListRight
        };
    }
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
.game {
    margin: 0 auto;

    &__window {
        display: flex;
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
