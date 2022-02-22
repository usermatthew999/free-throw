namespace SpriteKind {
    export const hoop = SpriteKind.create()
    export const p2 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile.destroy()
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    info.setScore(10)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . 
        . . f f f f f f . . . . . 
        . f f 1 1 1 1 f f . . . . 
        f f 1 1 1 1 1 1 f f . . . 
        f 1 1 1 1 1 1 1 1 f f . . 
        f 1 1 1 1 1 1 1 1 1 f . . 
        f 1 1 1 1 1 1 1 1 1 f . . 
        f 1 1 1 1 1 1 1 1 1 f . . 
        f f 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 f . 2 
        . f 1 1 f 1 f 1 1 f f . . 
        f c f f f f f f f f c f . 
        e 4 f c b b b b c c 4 e 2 
        e e f c b b b b c f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . f f f d 1 1 1 d f f . . 
        f f d 1 1 1 1 1 1 d f . . 
        f d 1 1 1 1 1 1 1 1 f . . 
        f 1 1 1 1 1 1 d f 1 f . . 
        f f f f f f f f f 1 f . . 
        f f e e f 1 b e f 1 f . . 
        . f e 4 e 1 b 4 f d f . . 
        . f f f e 4 4 4 f f f . . 
        . . f c c c e e f f . . . 
        . . e 4 4 c c b 2 f . 2 . 
        . . e 4 4 c b 2 c f 2 . . 
        . . f e e f c b b f . . . 
        . . . f f f f f f f f . . 
        . . . . f f . . f f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f d 1 1 d f f . . 
        . . f f d 1 1 1 1 d f f . 
        . f f d 1 1 1 1 1 1 d f . 
        . f d 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 d f f f f d f . 
        . f 1 1 d f f b 1 f f f . 
        . f 1 d f f 4 b 1 4 f . . 
        . f d f f 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f 2 f c b 2 b b c f c f 2 
        e 4 f b b c c 2 b f 4 e . 
        2 e f c 2 b b b c f 2 e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f f d 1 1 1 d f f f . 
        . . f d 1 1 1 1 1 1 d f f 
        . . f 1 1 1 1 1 1 1 1 d f 
        . . f 1 f d 1 1 1 1 1 1 f 
        . . f 1 f f f f f f f f f 
        . . f 1 f e b 1 f e e f f 
        . . f d f 4 b 1 e 4 e f . 
        . . f f f 4 4 4 e f f f . 
        . . . f f e e c c c f 5 . 
        . . 2 f 2 b c c 2 4 e 2 . 
        . . 5 2 5 2 b 2 5 4 e 2 . 
        . . . f b 2 c f e e f . . 
        . . f f f f f f f f . . . 
        . . f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . f f f f f f . . . . . 
        . f f d 1 1 d f f . . . . 
        f f d 1 1 1 1 d f f . . . 
        f d 1 1 1 1 1 1 d f f . . 
        f 1 1 1 1 1 1 1 1 d f . . 
        f 1 1 1 1 1 1 1 1 1 f . . 
        f d 1 1 1 1 1 1 1 1 f . . 
        f f 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 d f . . 
        . f d d f d f d d f f . 5 
        f 5 2 f f 5 f f 5 2 c f 2 
        e 4 f 5 b 2 b 5 2 c 4 5 . 
        e e f 2 b 5 2 b c 5 2 e 2 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . f f f d 1 1 1 d f f . . 
        f f d 1 1 1 1 1 1 d f . . 
        f d 1 1 1 1 1 1 1 1 f . . 
        f 1 1 1 1 1 1 d f 1 f . . 
        f f f f f f f f f 1 f . . 
        f f e e f 1 b e f 1 f . . 
        . f e 4 e 1 b 4 f d f . . 
        . f f f e 4 4 4 f f f . . 
        . . f c c c e e f f . . . 
        . 2 e 5 2 c 2 5 b f 2 5 . 
        5 . e 2 4 c b 2 c f . 2 5 
        . . f e 2 5 c 5 2 f 2 5 . 
        . . . f f f f f f f f . . 
        . . . . f f . . f f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f d 1 1 d f f . . 
        . . f f d 1 1 1 1 d f f . 
        . f f d 1 1 1 1 1 1 d f . 
        . f d 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 d f f f f d f . 
        . f 1 1 d f f b 1 f f f . 
        . f 1 d f f 4 b 1 4 f . . 
        . f d f f 4 4 4 4 e f . 2 
        5 f f f e e e e f f f . 5 
        2 c f c 5 2 b 5 c f 2 f 2 
        e 5 2 b b c c 2 b f 5 2 5 
        e e 2 c 2 5 b 5 2 f e 2 2 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f f d 1 1 1 d f f f . 
        . . f d 1 1 1 1 1 1 d f f 
        . . f 1 1 1 1 1 1 1 1 d f 
        . . f 1 f d 1 1 1 1 1 1 f 
        . . f 1 f f f f f f f f f 
        . . f 1 f e b 1 f e e f f 
        . . f d f 4 b 1 e 4 e f . 
        . . f f f 4 4 4 e f f f . 
        . . . f 5 e 5 4 2 5 f 5 4 
        . 5 4 5 2 b 2 5 5 4 e 2 5 
        . 4 2 f c 5 5 4 4 5 e 5 2 
        . . . f 5 4 2 5 e 5 f . . 
        . . f f f f f f f f . . . 
        . . f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . f f f f f f . . . . . 
        . f f d 1 1 d f f . . . . 
        f f d 1 1 1 1 d f f . . . 
        f d 1 1 1 1 1 1 d f f . . 
        f 1 1 1 1 1 1 1 1 d f . . 
        f 1 1 1 1 1 1 1 1 1 f . . 
        f d 1 1 1 1 1 1 1 1 f . . 
        f f 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 d f . . 
        2 f d d f d f d d f f . . 
        4 2 f f f f f f f f c f . 
        e 5 2 5 2 5 2 b c 2 5 e . 
        5 2 4 2 b 2 b 2 5 f 2 4 . 
        . . 5 4 2 f f 5 4 . . . . 
        . . . f 5 . . f f 5 . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . f f f f f f . . . . . 
        . f f d 1 d d f f . . . . 
        f f d 1 1 1 1 d f f . . . 
        f d 1 1 1 1 1 1 d f f . . 
        f 1 1 1 1 1 1 1 1 d f . . 
        f 1 1 1 1 1 1 1 1 1 f . . 
        f d 1 1 1 1 1 1 1 1 f . . 
        f f d 1 1 1 1 1 1 1 f . . 
        . f d 1 1 1 1 1 1 d f . . 
        . f f f f f 1 1 d f f . . 
        f c f c b f d d f f c f . 
        e 4 f c b f f f f c 4 e . 
        e e f c b b b b c f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `],
    100,
    false
    )
    pause(1000)
    projectile = sprites.createProjectileFromSprite(img`
        ...........444444.............
        ........4444555544444.........
        .......445555555555544........
        ......445bbbbbbbbbb55444......
        .....4455bbbbbbbbbb555544.....
        ....4455b9999999999bb5554.....
        ...445bb2299999999222b554.....
        ...455bb9299999111299b554.....
        ...455bb9299999111299b554.....
        ...455bb9222222111299b554.....
        ...445bb9222222111299b554.....
        ....45bb9999999999199b544.....
        ....45bb9222222222299b544.....
        ....45bb4299999999299b54......
        ...445bb4499999999222b54......
        ....45bb4499999999222b54......
        ....45bb4499999999222554......
        ....4555b4444499999bb5544.....
        ....44555bbbbbbbbbb555544.....
        .....4555522222222555544......
        .....445552222222555544.......
        .....44455522222255554........
        ......445552222255554.........
        ......444552222255544.........
        .......44552222255444.........
        ........4452222255444.........
        ........445522225544..........
        .........4455225544...........
        .........445522554............
        ..........44522544............
        ..........4452554.............
        ...........45554..............
        ...........44554..............
        ............4554..............
        ............4554..............
        .............44...............
        .............44...............
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, mySprite, 200, -100)
    projectile.follow(mySprite2)
    for (let index = 0; index < 1; index++) {
        pause(5000)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ....bbbbbbb.....
        ...b9999999b....
        ..b779999977b...
        ..b979991179b...
        ..b977771179b...
        ..b999999919b...
        ..b977777779b...
        ..b679999979b...
        ..b669999977b...
        ...b6669999b....
        ....bbbbbbb.....
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        `, mySprite, 0, -100)
    for (let index = 0; index < 1; index++) {
        pause(1000)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.hoop, function (sprite, otherSprite) {
    projectile.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    projectile.destroy()
})
let myEnemy: Sprite = null
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8888888888888888888888888888889999988888888888888888888888888888888888888888888888888888888888888888888888888888888899999888888888888888888888888888888888888888
    8888888888888888888888888888859999988888888888888888888888888888888888888888888888888888888888888888888888888888888899999888888888888888888888888888888888888888
    8888888888888888888888888885555599988888888888888888888888888888888888888888888888888888888888888888888888888888888899999888888888888888888888888888888888888888
    8888888888888888888888888885555599988888888888888888888888888888888888888888888888888888888888888888888888888888888899999888888888888888888888888888888888888888
    8888888888888888888888888885555599988888888888888888888888888888888888888888888888888888888888888888888888888888888899999888888888888888888888888888888888888888
    8888888888888888888888888885555599958888888888888888888888888888888888888888888888888888888888888888888888888888888899955555888888888888888888888888888888888888
    8888888888888888888888888885555599958888888888888888888888888888888888888888888888888888888888888888888888888888888899955555888888888888888888888888888888888888
    8888888888888888888888888888859999957888888888888888888888888888888888888888888888888888888888888888888888888888888899955555888888888888888888888888888888888888
    8888888888888888888888888888859999957888888888888888888888888888888888888888888888888888888888888888888888888888888895555555888888888888888888888888888888888888
    8888888888888888888888888888889999957888888888888888888888888888888888888888888888888888888888888888888888888888888895555555888888888888888888888888888888888888
    8888888888888888888888888888889995555588888888888888888888888888888888888888888888888888888888888888888888888888888895555588888888888888888888888888888888888888
    8888888888888888888888888888889995555588888888888888888888888888888888888888888888888888888888888888888888888888888895555578888888888888888888888888888888888888
    8888888888888888888888888888889995555588888888888888888888888888888888888888888888888888888888888888888888888888888895555578888888888888888888888888888888888888
    8888888888888888888888888888889995555588888888888888888888888888888888888888888888888888888888888888888888888888888899999578888888888888888888888888888888888888
    8888888888888888888888888888889995555588888888888888888888888888888888888888888888888888888888888888888888888888888899999578888888888888888888888888888888888888
    8888888888888888888888888888889999958888888888888888888888888888888888888888888888888888888888888888888888888888888999999578888888888888888888888888888888888888
    8888888888888888888888888888889999958888888888888888888888888888888888888888888888888888888888888888888888888888888999995555588888888888888888888888888888888888
    8888888888888888888888888888889999958888888888888888888888888888888888888888888888888888888888888888888888888888888999995555588888888888888888888888888888888888
    8888888888888888888888888888889999958888888888888888888888888888888888888888888888888888888888888888888888888888888999995555588888888888888888888888888888888888
    8888888888888888888888888888889999958888888888888888888888888888888888888888888888888888888888888888888888888888888999995555588888888888888888888888888888888888
    8888888888888888888888888888889999958888888888888888888888888888888888888888888888888888888888888888888888888888888999995555588888888888888888888888888888888888
    8888888888888888888888888888889999988888888888888888888888888888888888888888888888888888888888888888888888888888888999999888888888888888888888888888888888888888
    8888888888888888888888888888889999988888888888888888888888888888888888888888888888888888888888888888888888888888888999999888888888888888888888888888888888888888
    8888888888888888888888888888889999988888888888888888888888888888888888888888888888888888888888888888888888888888888999999888888888888888888888888888888888888888
    8888888888888888888888888888889999988888888888888888888888888888888888888888888888888888888888888888888888888888888999999888888888888888888888888888888888888888
    8888888888888888888888888888889999988888888888888888888888888888888888888888888888888888888888888888888888888888888999999888888888888888888888888888888888888888
    8888888888888888888888888888779955555888888888888888888888888888888888888888888888888888888888888888888888888888555559999888888888888888888888888888888888888888
    8888888888888888888888888888779955555888888888888888888888888888888888888888888888888888888888888888888888888888555559999788888888888888888888888888888888888888
    8888888888888888888888888888779955555888888888888888888888888888888888888888888888888888888888888888888888888888555559999788888888888888888888888888888888888888
    8888888888888888888888888888779955555888888888888888888888888888888888888888888888888888888888888888888888888888555559999788888888888888888888888888888888888888
    8888888888888888888888888888779955555888888888888888888888888888888888888888888888888888888888888888888888888888555559999988888888888888888888888888888888888888
    8888888888888888888888888888889999988888888888888888888888888888888888888888888888888888888888888888888888888888888999999988888888888888888888888888888888888888
    8888888888888888888888888888889999978888888888888888888888888888888888888888888888888888888888888888888888888888888999999988888888888888888888888888888888888888
    8888888888888888888888888888889999978888888888888888888888888888888888888888888888888888888888888888888888888888888999999988888888888888888888888888888888888888
    8888888888888888888888888888889999978888888888888888888888888888888888888888888888888888888888888888888888888888888999999988888888888888888888888888888888888888
    8888888888888888888888888888889999978888888888888888888888888888888888888888888888888888888888888888888888888888888999995555588888888888888888888888888888888888
    8888888888888888888888888888889999978888888888888888888888888888888888888888888888888888888888888888888888888888888999995555588888888888888888888888888888888888
    8888888888888888888888888885555599978888888888888888888888888888888888888888888888888888888888888888888888888888888999995555588888888888888888888888888888888888
    8888888888888888888888888885555599998888888888888888888888888888888888888888888888888888888888888888888888888888888999995555588888888888888888888888888888888888
    8888888888888888888888888885555599998888888888888888888888888888888888888888888888888888888888888888888888888888888999995555588888888888888888888888888888888888
    8888888888888888888888888885555599998888888888888888888888888888888888888888888888888888888888888888888888888888888999999988888888888888888888888888888888888888
    8888888888888888888888888885555599998888888888888888888888888888888888888888888888888888888888888888888888888888888999999988888888888888888888888888888888888888
    8888888888888888888888888888899999998888888888888888888888888888888888888888888888888888888888888888888888888888888999999968888888888888888888888888888888888888
    8888888888888888888888888888899999996888888888888888888888888888888888888888888888888888888888888888888888888888888999999968888888888888888888888888888888888888
    8888888888888888888888888888899999996888888888888888888888888888888888888888888888888888888888888888888888888888888999999968888888888888888888888888888888888888
    8888888888888888888888888888899999996888888888888888888888888888888888888888888888888888888888888888888888888888888999999968888888888888888888888888888888888888
    8888888888888888888888888888899999966888888888888888888888888888888888888888888888888888888888888888888888888888888899999668888888888888888888888888888888888888
    8888888888888888888888888888899999966888888888888888888888888888888888888888888888888888888888888888888888888888888899999688888888888888888888888888888888888888
    8888888888888888888888888888899999988888888888888888888888888888888888888888888888888888888888888888888888888888888899999688888888888888888888888888888888888888
    8888888888888888888888888888899955555888888888888888888888888888888888888888888888888888888888888888888888888888885555599688888888888888888888888888888888888888
    8888888888888888888888888888899955555888888888888888888888888888888888888888888888888888888888888888888888888888885555599688888888888888888888888888888888888888
    8888888888888888888888888888899955555888888888888888888888888888888888888888888888888888888888888888888888888888885555599688888888888888888888888888888888888888
    8888888888888888888888888888899955555888888888888888888888888888888888888888888888888888888888888888888888888888885555599688888888888888888888888888888888888888
    8888888888888888888888888888699955555888888888888888888888888888888888888888888888888888888888888888888888888888885555599688888888888888888888888888888888888888
    8888888888888888888888888888699999988888888888888888888888888888888888888888888888888888888888888888888888888888888899999688888888888888888888888888888888888888
    8888888888888888888888888888699999988888888888888888888888888888888888888888888888888888888888888888888888888888888899999988888888888888888888888888888888888888
    8888888888888888888888888888699999988888888888888888888888888888888888888888888888888888888888888888888888888888888899999988888888888888888888888888888888888888
    8888888888888888888888888888699999988888888888888888888888888888888888888888888888888888888888888888888888888888888899999988888888888888888888888888888888888888
    8888888888888888888888888888899999988888888888888888888888888888888888888888888888888888888888888888888888888888888899999988888888888888888888888888888888888888
    8888888888888888888888888885555599988888888888888888888888888888888888888888888888888888888888888888888888888888888899999988888888888888888888888888888888888888
    8888888888888888888888888885555599988888888888888888888888888888888888888888888888888888888888888888888888888888888899999988888888888888888888888888888888888888
    8888888888888888888888888885555599988888888888888888888888888888888888888888888888888888888888888888888888888888888899999988888888888888888888888888888888888888
    8888888888888888888888888885555599988888888888888888888888888888888888888888888888888888888888888888888888888888885555599998888888888888888888888888888888888888
    8888888888888888888888888885555599988888888888888888888888888888888888888888888888888888888888888888888888888888885555599998888888888888888888888888888888888888
    8888888888888888888888888888899999988888888888888888888888888888888888888888888888888888888888888888888888888888885555599998888888888888888888888888888888888888
    8888888888888888888888888888899999988888888888888888888888888888888888888888888888888888888888888888888888888888885555599998888888888888888888888888888888888888
    8888888888888888888888888888899999988888888888888888888888888888888888888888888888888888888888888888888888888888885555599998888888888888888888888888888888888888
    8888888888888888888888888888899999988888888888888888888888888888888888888888888888888888888888888888888888888888888899999998888888888888888888888888888888888888
    8888888888888888888888888888899999988888888888888888888888888888888888888888888888888888888888888888888888888888888899999999888888888888888888888888888888888888
    8888888888888888888888888888899955555888888888888888888888888888888888888888888888888888888888888888888888888888888899999999888888888888888888888888888888888888
    8888888888888888888888888888999955555888888888888888888888888888888888888888888888888888888888888888888888888888888899999999888888888888888888888888888888888888
    8888888888888888888888888889999955555888888888888888888888888888888888888888888888888888888888888888888888888888888899999999888888888888888888888888888888888888
    8888888888888888888888888889999955555888888888888888888888888888888888888888888888888888888888888888888888888888888899995555588888888888888888888888888888888888
    8888888888888888888888888889999955555888888888888888888888888888888888888888888888888888888888888888888888888888888999995555588888888888888888888888888888888888
    8888888888888888888888888889999999988888888888888888888888888888888888888888888888888888888888888888888888888888889999995555588888888888888888888888888888888888
    8888888888888888888888888889999999988888888888888888888888888888888888888888888888888888888888888888888888888888889999995555588888888888888888888888888888888888
    8888888888888888888888888889999999988888888888888888888888888888888888888888888888888888888888888888888888888888889999995555588888888888888888888888888888888888
    8888888888888888888888888888999999988888888888888888888888888888888888888888888888888888888888888888888888888888889999999998888888888888888888888888888888888888
    8888888888888888888888888888999999888888888888888888888888888888888888888888888888888888888888888888888888888888889999999988888888888888888888888888888888888888
    8888888888888888888888888888999955555888888888888888888888888888888888888888888888888888888888888888888888888888889999999988888888888888888888888888888888888888
    8888888888888888888888888888999955555888888888888888888888888888888888888888888888888888888888888888888888888888888899999988888888888888888888888888888888888888
    8888888888888888888888888888999955555888888888888888888888888888888855555888888888888888888888888555558888888888888899999988888888888888888888888888888888888888
    8888888888888888888888888888999955555888888888888888888888888888888855555888888888888888888888888555558888888888855555999988888888888888888888888888888888888888
    8888888888888888888888888888999955555888888888888888888889999988888855555888888888888888889999988555558888888888855555999988888888888888888888888888888888888888
    8888888888888888888888888888999999999999999999999999999999999999999955555999999999999999999999999555559999999999955555999988888888888888888888888888888888888888
    8888888888888888888888888888999999999999999999999999999999999999999955555999999999999999999999999555559999999999955555999988888888888888888888888888888888888888
    8888888888888888888888888888999999999999999999999555559999999999999999999999999999999995555599999999999999999999955555999988888888888888888888888888888888888888
    8888888888888888888888888855555999999999999999999555559999999999999999999999999999999995555599999999999999999999999999999988888888888888888888888888888888888888
    8888888888888888888888888855555999999999999999999555559999999999999999999999999999999995555599999999999999999999999999999888888888888888888888888888888888888888
    8888888888888888888888888855555999888888888888888555558888888888888888888888888888888885555588888888888888888888999999999888888888888888888888888888888888888888
    8888888888888888888888888855555999988888888888888555558888888888888888888888888888888885555588888888888888888888889999999888888888888888888888888888888888888888
    8888888888888888888888888855555999988888888888888888888888888888888888888888888888888888888888888888888888888888889999999888888888888888888888888888888888888888
    8888888888888888888888888888899999998888888888888888888888888888888888888888888888888888888888888888888888888888899999999888888888888888888888888888888888888888
    8888888888888888888888888888899999999888888888888888888888888888888888888888888888888888888888888888888888888888999999999888888888888888888888888888888888888888
    8888888888888888888888888888889999999988888888888888888888888888888888888888888888888888888888888888888888888889999999998888888888888888888888888888888888888888
    8888888888888888888888888888885555599998888888888888888888888888888888888888888888888888888888888888888888888899999999988888888888888888888888888888888888888888
    8888888888888888888888888888885555599999888888888888888888888888888888888888888888888888888888888888888888888999999555558888888888888888888888888888888888888888
    8888888888888888888888888888885555599999988555558888888888888888888888888888888888888888888888888888888888889999999555558888888888888888888888888888888888888888
    8888888888888888888888888888885555599999999555558888888888888888888888888888888888888888888888888888888888999999999555558888888888888888888888888888888888888888
    8888888888888888888888888888885555599999999555558888888888888888888888888888888888888888888888888888555559999999999555558888888888888888888888888888888888888888
    8888888888888888888888888888888888999999999555558888888888888888888888888888888888888888888888888888555559999999999555558888888888888888888888888888888888888888
    8888888888888888888888888888888888899999999555558888888888888888888888888888888888888888888888888888555559999999998888888888888888888888888888888888888888888888
    8888888888888888888888888888888888889999999999999888888888888888888888888888888888888888888888888888555559999999988888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888899999999999988888888888888888888888888888888888888888888888888555559999998888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888889999999999998888888888888888888888888888888888888888888888899999999999988888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888899999999999988888888888888888888888888888888888888888889999999999999888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888889999999999999888888888888888888888888888888888888888999999999999988888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888899999999999999888888888888888888888888855555888889999999999999888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888955555999999995555558888888888888888855555888999999999999998888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888955555999999995555558888888888888888855555999999999999999888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888855555999999995555559999999999999999955555999999999555558888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888855555999999995555559999555559999999955555999999999555558888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888855555889999995555559999555559999999999999999999999555558888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888899999999999999555559999999999999999999998555558888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888889999999999555559999999999999999998888555558888888888888888888888888888888888888888888888888888888888
    `)
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f d d d d f f . . . 
    . f f d 1 1 1 1 d f f . . 
    f f d 1 1 1 1 1 1 d f f . 
    f d 1 1 1 1 1 1 1 1 d f . 
    f d 1 1 1 1 1 1 1 1 d f . 
    f d 1 1 1 1 1 1 1 1 d f . 
    f f d 1 1 1 1 1 1 1 d f . 
    f f d 1 1 1 1 1 1 d f f . 
    . f d f d f 1 1 1 d f . . 
    . f f f f f d d d f f . . 
    f c f f f f f f f f c f . 
    e 4 f c b b b b c f 4 e . 
    e e f b b b b b b f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(82, 111)
mySprite.setVelocity(50, 0)
mySprite.setBounceOnWall(true)
mySprite2 = sprites.create(img`
    . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
    . . 6 . . . . . . . . . 6 . . . 
    . . 6 . . . . . . . . . 6 . . . 
    . . 6 . . . . . . . . . 6 . . . 
    . . 6 6 . . . . . . . 6 6 . . . 
    . . 1 6 6 . . . . . 6 6 1 . . . 
    . . 1 . 6 6 6 6 6 6 6 1 . . . . 
    . . . 1 . 1 . 1 1 . 1 . 1 . . . 
    . . 1 . 1 . 1 . . 1 . 1 . . . . 
    . . . 1 . 1 . 1 1 . 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.hoop)
mySprite2.setPosition(75, 8)
forever(function () {
    music.playMelody("C E - E C E - E ", 140)
})
forever(function () {
    info.setScore(0)
    pause(60000)
    game.over(true)
})
game.onUpdateInterval(55000, function () {
    myEnemy = sprites.create(img`
        . . . . 3 3 3 3 . . . . . 
        . . 3 3 3 3 3 3 3 3 . . . 
        . 3 3 3 3 3 3 b 3 3 3 . . 
        3 3 3 3 3 3 b b 3 3 3 b . 
        3 3 3 b 3 3 3 3 3 3 3 b . 
        b b b 3 3 3 e e 3 3 b b . 
        3 3 3 3 3 e e 3 3 b b 3 . 
        3 3 3 b f e e f b 3 3 3 . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f 2 f b 2 4 2 2 b f 2 f . 
        e 4 f 2 2 4 4 2 2 f 4 e . 
        e e f 2 2 2 4 2 2 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Enemy)
    myEnemy.setPosition(82, randint(30, 70))
    myEnemy.setVelocity(75, 0)
    myEnemy.setBounceOnWall(true)
})
