controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
})
info.onCountdownEnd(function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.smiles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.coolRadial, 5000)
    info.changeScoreBy(4)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(10)
mySprite = sprites.create(img`
    8 8 8 . . 8 8 8 8 8 . . . . . . 
    8 9 9 8 8 9 9 9 9 9 8 8 . . . . 
    b 8 9 9 1 9 1 1 1 9 9 9 8 . . . 
    . b 9 9 9 9 1 1 9 9 1 1 9 8 . . 
    . b d 9 9 9 9 9 9 9 9 1 1 9 8 . 
    b 8 9 9 9 9 9 9 9 9 9 9 1 9 8 . 
    c d 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
    c d 8 9 9 9 9 9 9 9 9 9 9 1 9 8 
    c 8 9 9 9 d 9 9 9 9 9 9 9 9 9 8 
    c 8 d 9 8 9 d 9 9 9 9 9 9 9 9 8 
    . c 8 9 9 9 9 d d d 9 9 9 9 9 b 
    . c 8 d 9 8 9 d 8 8 d 9 9 9 8 c 
    . . c 8 8 d 8 8 8 8 8 d d 9 d c 
    . . . c 8 8 8 8 8 8 8 8 9 9 9 8 
    . . . . c c b 8 8 8 b b 8 9 8 8 
    . . . . . . c c c c c c b b 8 . 
    `, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Blue Lemon`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Yellow Lemon`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`Green Lemon`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`Purple Lemon`, SpriteKind.Player))
mp.setPlayerIndicatorsVisible(true)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(180)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(assets.image`Strawberry`, randint(-50, 50), randint(-50, 50))
})
