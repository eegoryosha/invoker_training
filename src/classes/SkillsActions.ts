import ButtonSkillInterface from '@/interfaces/ButtonSkillInterface';
import SkillInterface from '@/interfaces/SkillInterface';
import SkillsInGameInterface from '@/interfaces/SkillsInGameInterface';
import { Ref } from 'vue';

export default class SkillsActions {
    private skillsInGame: Ref<SkillsInGameInterface>;

    constructor(skillsInGame: Ref<SkillsInGameInterface>) {
        this.skillsInGame = skillsInGame;
    }

    public checkCombo(spheres: ButtonSkillInterface[]): void {
        const currentCombo = spheres.map((el: ButtonSkillInterface) => el.key);

        let skillIndex = null;

        for (let index = 0; index < this.skillsInGame.value.skills.length; index++) {
            const el = this.skillsInGame.value.skills[index];
            const skillCombo = el.combo.split('');

            currentCombo.forEach((sphere: string) => {
                const index = skillCombo.indexOf(sphere);
                if (index != -1) {
                    skillCombo.splice(index, 1);
                }
            });

            if (skillCombo.length == 0) {
                skillIndex = index;
                break;
            }
        }

        if (skillIndex !== null) {
            this.skillsInGame.value.skills.splice(skillIndex, 1);
        }
    }
}
