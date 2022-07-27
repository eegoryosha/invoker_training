import SkillGenerator from '@/classes/SkillGenerator';
import SkillsActions from '@/classes/SkillsActions';
import ScoreInterface from './ScoreInterface';

interface GameActionsInterface {
    generator: SkillGenerator;
    skill: SkillsActions;
    score: ScoreInterface;

    startGame: () => void;
    stopGame: () => void;
}

export default GameActionsInterface;
