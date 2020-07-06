import Phaser from "phaser";
import config from './config/config';
import BootScene from './scenes/boot_scene';
import PreloaderScene from './scenes/preloader_scene';
import TitleScene from './scenes/title_scene';
import CreditsScene from './scenes/credits_scene';
import OptionsScene from './scenes/options_scene';
import GameOverScene from './scenes/game_over_scene';
import EndGameScene from './scenes/end_game_scene';
import GameScene1 from './stages/chapter1_scene';
import GameScene2 from './stages/chapter2_scene';
import GameScene3 from './stages/chapter3_scene';
import GameScene4 from './stages/chapter4_scene';
import GameScene5 from './stages/chapter5_scene';
import GameScene6 from './stages/chapter6_scene';
import Chapter1DialogueScene from './dialogues/chapter_dialogues/chapter1_dialogue';
import Chapter2DialogueScene from './dialogues/chapter_dialogues/chapter2_dialogue';
import Chapter3DialogueScene from './dialogues/chapter_dialogues/chapter3_dialogue';
import Chapter4DialogueScene from './dialogues/chapter_dialogues/chapter4_dialogue';
import Chapter5DialogueScene from './dialogues/chapter_dialogues/chapter5_dialogue';
import Chapter6DialogueScene from './dialogues/chapter_dialogues/chapter6_dialogue';
import Chapter1BossDialogueScene from './dialogues/boss_dialogues/chapter1_boss_dialogue';
import Chapter2BossDialogueScene from './dialogues/boss_dialogues/chapter2_boss_dialogue';
import Chapter3BossDialogueScene from './dialogues/boss_dialogues/chapter3_boss_dialogue';
import Chapter4BossDialogueScene from './dialogues/boss_dialogues/chapter4_boss_dialogue';
import Chapter5BossDialogueScene from './dialogues/boss_dialogues/chapter5_boss_dialogue';
import Chapter6BossDialogueScene from './dialogues/boss_dialogues/chapter6_boss_dialogue';
import Chapter1EndDialogueScene from './dialogues/chapter_dialogues/chapter1_end_dialogue';
import Chapter2EndDialogueScene from './dialogues/chapter_dialogues/chapter2_end_dialogue';
import Chapter3EndDialogueScene from './dialogues/chapter_dialogues/chapter3_end_dialogue';
import Chapter4EndDialogueScene from './dialogues/chapter_dialogues/chapter4_end_dialogue';
import Chapter5EndDialogueScene1 from './dialogues/chapter_dialogues/chapter5_end_dialogue1';
import Chapter5EndDialogueScene2 from './dialogues/chapter_dialogues/chapter5_end_dialogue2';
import Chapter6EndDialogueScene1 from './dialogues/chapter_dialogues/chapter6_end_dialogue1';
import Chapter6EndDialogueScene2 from './dialogues/chapter_dialogues/chapter6_end_dialogue2';
import Chapter1BonusScene from './bonuses/chapter1_bonus';
import Chapter2BonusScene from './bonuses/chapter2_bonus';
import Chapter3BonusScene from './bonuses/chapter3_bonus';
import Chapter4BonusScene from './bonuses/chapter4_bonus';
import Chapter5BonusScene from './bonuses/chapter5_bonus';
import Music from './models/music';
localStorage.clear();

class Game extends Phaser.Game {
  constructor () {
    super(config);
    const music = new Music();
    this.globals = { music, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('EndGame', EndGameScene);
    this.scene.add('Game1', GameScene1);
    this.scene.add('Game2', GameScene2);
    this.scene.add('Game3', GameScene3);
    this.scene.add('Game4', GameScene4);
    this.scene.add('Game5', GameScene5);
    this.scene.add('Game6', GameScene6);
    this.scene.add('Chapter1Dialogue', Chapter1DialogueScene);
    this.scene.add('Chapter2Dialogue', Chapter2DialogueScene);
    this.scene.add('Chapter3Dialogue', Chapter3DialogueScene);
    this.scene.add('Chapter4Dialogue', Chapter4DialogueScene);
    this.scene.add('Chapter5Dialogue', Chapter5DialogueScene);
    this.scene.add('Chapter6Dialogue', Chapter6DialogueScene);
    this.scene.add('Chapter1BossDialogue', Chapter1BossDialogueScene);
    this.scene.add('Chapter2BossDialogue', Chapter2BossDialogueScene);
    this.scene.add('Chapter3BossDialogue', Chapter3BossDialogueScene);
    this.scene.add('Chapter4BossDialogue', Chapter4BossDialogueScene);
    this.scene.add('Chapter5BossDialogue', Chapter5BossDialogueScene);
    this.scene.add('Chapter6BossDialogue', Chapter6BossDialogueScene);
    this.scene.add('Chapter1EndDialogue', Chapter1EndDialogueScene);
    this.scene.add('Chapter2EndDialogue', Chapter2EndDialogueScene);
    this.scene.add('Chapter3EndDialogue', Chapter3EndDialogueScene);
    this.scene.add('Chapter4EndDialogue', Chapter4EndDialogueScene);
    this.scene.add('Chapter5EndDialogue1', Chapter5EndDialogueScene1);
    this.scene.add('Chapter5EndDialogue2', Chapter5EndDialogueScene2);
    this.scene.add('Chapter6EndDialogue1', Chapter6EndDialogueScene1);
    this.scene.add('Chapter6EndDialogue2', Chapter6EndDialogueScene2);
    this.scene.add('Chapter1Bonus', Chapter1BonusScene);
    this.scene.add('Chapter2Bonus', Chapter2BonusScene);
    this.scene.add('Chapter3Bonus', Chapter3BonusScene);
    this.scene.add('Chapter4Bonus', Chapter4BonusScene);
    this.scene.add('Chapter5Bonus', Chapter5BonusScene);
    this.scene.start('Boot');
  }
}

const game = new Game();
