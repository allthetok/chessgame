export default class Piece {
  constructor(player, iconUrl) {
    this.player = player; //player 1 or 2
    this.style = { backgroundImage: "url('" + iconUrl + "')" }; //icon
  }
}
