import SkillInterface from '@/interfaces/SkillInterface';

export default class SkillGenerator {
    private skillsList;

    constructor(skillsList: SkillInterface[]) {
        this.skillsList = skillsList;
    }

    public getRandomSkill(): SkillInterface {
        const skillsCount = this.skillsList.length;
        const randomIndex = Math.ceil(skillsCount * Math.random()) - 1;

        return JSON.parse(JSON.stringify(this.skillsList[randomIndex]));
    }
}
