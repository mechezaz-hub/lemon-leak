info.onCountdownEnd(function on_countdown_end() {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.smiles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    mySprite.startEffect(effects.coolRadial, 5000)
    info.changeScoreBy(4)
})
let projectile : Sprite = null
let mySprite : Sprite = null
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
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(180)
game.onUpdateInterval(500, function on_update_interval() {
    
    projectile = sprites.createProjectileFromSide(assets.image`
            Strawberry
            `, randint(-50, 50), randint(-50, 50))
})
