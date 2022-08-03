import GameActionsInterface from '@/interfaces/classes/GameActionsInterface';
import ScoreInterface from '@/interfaces/classes/ScoreInterface';
import SkillInterface from '@/interfaces/SkillInterface';
import SkillsInGameInterface from '@/interfaces/SkillsInGameInterface';
import { Ref } from 'vue';
import Score from './Score';
import SkillGenerator from './SkillGenerator';
import SkillsActions from './SkillsActions';

export default class GameActions implements GameActionsInterface {
    private instance: GameActions|undefined;
    private skillsInGame: Ref<SkillsInGameInterface>;
    private allSkills: SkillInterface[];
    private gameInterval: number|null;
    private isWindowFocus: boolean;
    public generator: SkillGenerator;
    public skill: SkillsActions;
    public score: ScoreInterface;

    constructor(allSkills: SkillInterface[], skillsInGame: Ref<SkillsInGameInterface>, score: Ref<number>, noMissCombo: Ref<number>) {
        if (this.instance) {
            return this.instance;
        }

        this.skillsInGame = skillsInGame;
        this.gameInterval = null;
        this.allSkills = allSkills;
        this.isWindowFocus = false;

        this.generator = new SkillGenerator(allSkills);
        this.skill = new SkillsActions(skillsInGame);
        this.score = new Score(score, noMissCombo);

        this.instance = this;
    }

    public startGame(): void {
        if (this.gameInterval) return;

        this.isWindowFocus = true;
        this.gameInterval = setInterval(() => {
            if (!this.isWindowFocus) return;
            const skill = this.generator.getRandomSkill();

            this.skillsInGame.value._total++;
            skill.id = this.skillsInGame.value._total;
            skill.position = {
                posX: Math.ceil(600 * Math.random())
            };

            this.skillsInGame.value.skills.push(skill);
        }, 800);

        window.addEventListener('blur', () => {
            this.isWindowFocus = false;
        });
        window.addEventListener('focus', () => {
            this.isWindowFocus = true;
        });
    }
    public stopGame(): void {
        if (this.gameInterval) {
            clearInterval(this.gameInterval);

            this.gameInterval = null;
        }
    }

}
