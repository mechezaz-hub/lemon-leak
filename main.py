def on_countdown_end():
    game.game_over(True)
    game.set_game_over_effect(True, effects.smiles)
info.on_countdown_end(on_countdown_end)

def on_on_overlap(sprite, otherSprite):
    mySprite.start_effect(effects.cool_radial, 5000)
    info.change_score_by(4)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

projectile: Sprite = None
mySprite: Sprite = None
scene.set_background_color(10)
mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
controller.move_sprite(mySprite)
mySprite.set_stay_in_screen(True)
info.start_countdown(180)

def on_update_interval():
    global projectile
    projectile = sprites.create_projectile_from_side(assets.image("""
            Strawberry
            """),
        randint(-50, 50),
        randint(-50, 50))
game.on_update_interval(500, on_update_interval)
