import full01 from '../../../assets/images/fulls/01.jpg'
import full02 from '../../../assets/images/fulls/02.jpg'
import full03 from '../../../assets/images/fulls/03.jpg'
import full04 from '../../../assets/images/fulls/04.jpg'
import full05 from '../../../assets/images/fulls/05.jpg'
import full06 from '../../../assets/images/fulls/06.jpg'
import thumb02 from '../../../assets/images/thumbs/02.jpg'
import thumb01 from '../../../assets/images/thumbs/01.jpg'
import thumb03 from '../../../assets/images/thumbs/03.jpg'
import thumb04 from '../../../assets/images/thumbs/04.jpg'
import thumb05 from '../../../assets/images/thumbs/05.jpg'
import thumb06 from '../../../assets/images/thumbs/06.jpg'


export const DEFAULT_IMAGES = [
    {
      id: '1',
      source: full01,
      thumbnail: thumb01,
      caption: 'J-RPG Battle System ',
      description: 'Developed a turned-based combat system that integrates players stats and type advantages. Algorithm alternates between the players depending on whether the turn number is even or odd. A variable is incremented each turn and the modulo value of the variable is used to determine the attacking player. The damage dealt by a selected attack is determined by formula which considers both players stat advantages.',
    },
    {
      id: '2',
      source: full02,
      thumbnail: thumb02,
      caption: 'Zombie Survival Game Project',
      description: 'Developed a game where gameplay focuses defeating each new zombie wave and staying alive.Consisted of several gameplay systems including shooting and reload mechanics , player detection, movement system, points system , and a player HUD System.A line-trace from the players camera is used to determine whether the hit object is of an enemy type.Enemies are given a view radius which detects the player when in view. Enemy movement system uses the game engines API to implement AI pathfinding. Integrated a Heads-Up-Display system which keeps track of the players points , ammo , and other game stats.',
    },
    {
      id: '3',
      source: full03,
      thumbnail: thumb03,
      caption: '3D Pokemon Remake Demo',
      description: 'Re-created a Pokémon town in Unreal Engine 4 with a playable character sprite and interactable NPCs and objects. Implemented a message display system when interacting with NPCs or objects. Polished the project with appropriate sound effects .',
    },
    {
      id: '4',
      source: full04,
      thumbnail: thumb04,
      caption: 'Brick Breaker Game ',
      description: 'Developed a simple physics based brick breaker game .',
    },
   
]