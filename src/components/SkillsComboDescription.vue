<template>
    <div class="skills-description">
        <skill-combo-description
            v-for="skill in skillsForDescription"
            :key="skill.name"
            :skillIcon="skill.img"
            :combo="skill.combo"
            :descriptionPosition="position"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue';
import SkillInterface from '@/interfaces/SkillInterface';
import SkillComboDescription from '@/components/SkillComboDescription.vue';
export default defineComponent({
    components: {
        SkillComboDescription
    },
    props: {
        position: {
            type: String as () => 'LEFT'|'RIGHT',
            default: 'LEFT'
        },
        skills: {
            type: Array as () => SkillInterface[],
            default: () => []
        }
    },
    setup(props) {
        const skillsForDescription: ComputedRef<SkillInterface[]> = computed(() => {
            const skillsCount = props.skills.length; // количество всех способностей
            const middleIndex = Math.round(skillsCount / 2); // индекс середины списка всех способностей
            const skillsListLeft = props.skills.slice(0, middleIndex); // способности для левой части
            const skillsListRight = props.skills.slice(middleIndex, skillsCount); // способнсоти для правой части

            if (props.position == 'RIGHT')
                return skillsListRight;
            else
                return skillsListLeft;
        });

        return {
            skillsForDescription
        };
    }
});
</script>

<style scoped>
    .skills-description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 5px 20px;
    }
</style>
