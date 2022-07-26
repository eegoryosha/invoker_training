import SkillGenerator from '@/classes/SkillGenerator';
import { Ref } from 'vue';
import SkillInterface from '../SkillInterface';

interface GameActionsInterface {
    startGame: () => void;
    stopGame: () => void;
}

export default GameActionsInterface;
