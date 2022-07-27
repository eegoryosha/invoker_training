import ScoreInterface from '@/interfaces/classes/ScoreInterface';
import { Ref } from 'vue';

export default class Score implements ScoreInterface {
    public score:Ref<number>;
    public noMissCombo:Ref<number>;

    constructor(score: Ref<number>, noMissCombo: Ref<number>) {
        this.score = score;
        this.noMissCombo = noMissCombo;
    }

    public raiseScore(): void {
        this.score.value++;
    }
    public raiseNoMissCombo(): void {
        this.noMissCombo.value++;
    }
    public clearNoMissCombo(): void {
        this.noMissCombo.value = 0;
    }
}
