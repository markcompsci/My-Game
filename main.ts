info.onCountdownEnd(function () {
    game.showLongText("Wow! You ate a lot of flies!", DialogLayout.Center)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Fly.setPosition(randint(8, 150), randint(8, 110))
    music.baDing.play()
    info.changeScoreBy(1)
})
let Fly: Sprite = null
info.startCountdown(20)
let Frog = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 7 7 . . 7 7 7 . . . . 
    . . . . 7 3 7 . . 7 3 7 . . . . 
    . . . . 7 3 7 7 7 7 3 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 1 7 7 7 7 1 7 7 7 . . 
    . . 7 7 7 f 7 7 7 7 f 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 f 7 7 7 7 f 7 7 7 . . 
    . . . 7 7 7 f f f f 7 7 7 . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Fly = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f . . . . f f f f . . . . f . 
    f b f . . f 5 5 5 5 f . . f b f 
    f b b f f 5 5 5 5 5 5 f f b b f 
    . f b f 5 5 f 5 5 f 5 5 f b f . 
    . . f f 5 3 3 5 5 3 3 5 f f . . 
    . f f f 5 5 f 5 5 f 5 5 f f f . 
    f b b f f 5 5 f f 5 5 f f b b f 
    f b f . . f 5 5 5 5 f . . f b f 
    . f . . . . f f f f . . . . f . 
    . . . . . f 6 6 6 6 f . . . . . 
    . . . . . f 5 5 5 5 f . . . . . 
    . . . . . f 6 6 6 6 f . . . . . 
    . . . . . . f 5 5 f . . . . . . 
    . . . . . . . f f . . . . . . . 
    `, SpriteKind.Food)
Frog.setPosition(75, 55)
Fly.setPosition(111, 25)
controller.moveSprite(Frog, 80, 80)
while (true) {
    music.playMelody("E F G F A F D C ", 120)
}
