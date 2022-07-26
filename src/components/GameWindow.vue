<template>
    <div class="game-window">
        <transition-group
            name="skill"
            @after-enter="finishAnimation"
        >
            <skill-in-game
                v-for="skill in skills"
                :key="skill.id"
                :skill="skill"
            />
        </transition-group>

    </div>
</template>

<script lang="ts">
import SkillInterface from '@/interfaces/SkillInterface';
import { defineComponent } from 'vue';
import SkillInGame from './SkillInGame.vue';

export default defineComponent({
    components: { SkillInGame },
    name: 'GameWindow',
    props: {
        skills: {
            type: Array as () => SkillInterface[]
        }
    },
    setup(props, context) {
        const getRandomPos = (max: number) => {
            return Math.ceil(max * Math.random());
        };
        const finishAnimation = () => {

            context.emit('finish');
        };

        return {
            getRandomPos,
            finishAnimation
        };
    }
});
</script>

<style scoped lang="scss">

.game-window {
    width: 700px;
    height: 400px;
    box-shadow: 0px 0px 100px 85px rgba(0, 0, 0, 0.2) inset;
    background: rgb(80, 80, 80);
    margin: 0 auto;
    border: $border;
    position: relative;
    overflow: hidden;
}


.skill-enter-active {
    transition: top 3s linear;
    display: flex;
}

.skill-enter-from {
    position: absolute;
    top: -110px;
}

.skill-enter-to {
    position: absolute;
    top: 400px;
}


</style>
