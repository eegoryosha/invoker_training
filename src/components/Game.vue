<template>
    <div class="game">
        <div class="game__window">
            <skills-combo-description
                :position="'LEFT'"
                :skills="skillsListLeft"
            />
            <game-window
                :skills="skillsInGame.skills"
                @finish="finishAnimation"
            />
            <skills-combo-description
                :position="'RIGHT'"
                :skills="skillsListRight"
            />
        </div>

        <skills-buttons
            @invoke="invoke"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import GameWindow from '@/components/GameWindow.vue';
import SkillsComboDescription from '@/components/SkillsComboDescription.vue';
import skillsData from '@/data/Skills';
import SkillsButtons from '@/components/SkillsButtons.vue';
import GameActions from '@/classes/GameActions';
import SkillsInGameInterface from '@/interfaces/SkillsInGameInterface';
import SkillInterface from '@/interfaces/SkillInterface';
import ButtonSkillInterface from '@/interfaces/ButtonSkillInterface';

export default defineComponent({
    name: 'Game',
    components: {
        GameWindow, SkillsComboDescription,
        SkillsButtons,
    },
    setup() {
        const skillsList = ref(skillsData); // список всех способностей
        const skillsCount = skillsList.value.length; // количество всех способностей
        const middleIndex = Math.round(skillsCount / 2); // индекс середины списка всех способностей
        const skillsListLeft = skillsList.value.slice(0, middleIndex); // способности для левой части
        const skillsListRight = skillsList.value.slice(middleIndex, skillsCount); // способнсоти для правой части
        const skillsInGame = ref({
            skills: [] as SkillInterface[],
            _total: 0
        } as SkillsInGameInterface);
        const game = new GameActions(skillsData, skillsInGame);
        game.startGame();

        const finishAnimation = () => {
            skillsInGame.value.skills.shift();
        };

        const invoke = (activeSpheres: ButtonSkillInterface[]) => {
            game.skill.checkCombo(activeSpheres);
        };

        return {
            skillsList,
            skillsListLeft,
            skillsListRight,
            skillsInGame,
            finishAnimation,
            invoke
        };
    }
});

</script>

<style lang="scss" scoped>
.game {
    margin: 0 auto;

    &__window {
        display: flex;
    }
}
</style>
