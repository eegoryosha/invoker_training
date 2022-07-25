<template>
    <div class="skills-description">
        <skill-combo-description
            v-for="skill in skills"
            :key="skill.name"
            :skillIcon="skill.img"
            :combo="skill.combo"
            :descriptionPosition="position"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SkillComboDescription from '@/components/SkillComboDescription.vue';
import SkillInterface from '@/interfaces/SkillInterface';
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
    setup() {
        return {

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
