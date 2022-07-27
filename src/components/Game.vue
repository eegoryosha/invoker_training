<template>
    <div class="game">
        <score-interface />

        <div class="game__window">
            <skills-combo-description
                :position="'LEFT'"
                :skills="skillsList"
            />


            <game-window
                :skills="skillsInGame.skills"
                @finish="finishAnimation"
            />


            <skills-combo-description
                :position="'RIGHT'"
                :skills="skillsList"
            />
        </div>

        <skills-buttons
            @invoke="invoke"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useStore } from 'vuex';
import GameWindow from '@/components/GameWindow.vue';
import SkillsComboDescription from '@/components/SkillsComboDescription.vue';
import skillsData from '@/data/Skills';
import SkillsButtons from '@/components/SkillsButtons.vue';
import GameActions from '@/classes/GameActions';
import SkillsInGameInterface from '@/interfaces/SkillsInGameInterface';
import ButtonSkillInterface from '@/interfaces/ButtonSkillInterface';
import ScoreInterface from '@/components/ScoreInterface.vue';

export default defineComponent({
    name: 'Game',
    components: {
        GameWindow, SkillsComboDescription,
        SkillsButtons, ScoreInterface
    },
    setup() {
        const store = useStore();
        const skillsList = ref(skillsData); // список всех способностей
        const skillsInGame = ref({
            skills: [],
            _total: 0
        } as SkillsInGameInterface);
        const score = ref(0);
        const noMissCombo = ref(0);

        const game = new GameActions(skillsData, skillsInGame, score, noMissCombo);
        game.startGame();

        const finishAnimation = () => {
            skillsInGame.value.skills.shift();
            game.score.clearNoMissCombo();
        };
        const invoke = (activeSpheres: ButtonSkillInterface[]) => {
            const skillIndex = game.skill.checkCombo(activeSpheres);

            if (skillIndex !== null) {
                game.skill.removeSkillInGameWindow(skillIndex);
                game.score.raiseScore();
                game.score.raiseNoMissCombo();
            } else {
                game.score.clearNoMissCombo();
            }
        };


        watch(score, (newValue) => {
            store.commit('setScore', newValue);
        });
        watch(noMissCombo, (newValue) => {
            store.commit('setNoMissCombo', newValue);
        });

        return {
            skillsList,
            skillsInGame,
            score,
            noMissCombo,
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
