// Background
class Sprite {
    constructor({ position, imageSrc, frameRate = 1 }) {
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
            this.width = this.image.width / this.frameRate
            this.height = this.image.height
        }
        this.image.src = imageSrc
        this.loaded = false
        this.frameRate = frameRate
        this.currentFrame = 0
        this.elapsedFrames = 0
        this.frameBuffer = 2
    }
    draw() {
        if (!this.loaded) return
        const cropbox = {
            position: {
                x: this.width * this.currentFrame,
                y: 0,
            },
            width: this.width,
            height: this.height,
        }
        c.drawImage(
        this.image, 
        cropbox.position.x,
        cropbox.position.y,
        cropbox.width,
        cropbox.height,
        this.position.x, 
        this.position.y,
        this.width,
        this.height,
        )

        this.updateFrames()
    }

    updateFrames() {   
        this.elapsedFrames++

        if (this.elapsedFrames % this.frameBuffer === 0) {
        if (this.currentFrame < this.frameRate - 1) this.currentFrame++
            else this.currentFrame = 0
        }
}

}

// Level Images
const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: "assets/img/room1.png"
})

class icon {
    constructor({ position, imageSrc, height, width }) {
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
        }
        this.image.src = imageSrc
        this.loaded = false
        this.width = width
        this.height = height
    }
    draw() {
        if (!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

// three heart icons - empty and full
const heart1 = new icon({
    position: {
        x: 5,
        y: 10,
    },
    height: 70,
    width: 70,
    imageSrc: "assets/img/fullHeartIcon.png",
})
const heart2 = new icon({
    position: {
        x: 85,
        y: 10,
    },
    height: 70,
    width: 70,
    imageSrc: "assets/img/fullHeartIcon.png"
})
const heart3 = new icon({
    position: {
        x: 165,
        y: 10,
    },
    height: 70,
    width: 70,
    imageSrc: "assets/img/fullHeartIcon.png"
})

// empty hearts to replace them
const emptyHeart1 = new icon({
    position: {
        x: 5,
        y: 10,
    },
    height: 70,
    width: 70,
    imageSrc: "assets/img/emptyHeartIcon.png"
})
const emptyHeart2 = new icon({
    position: {
        x: 85,
        y: 10,
    },
    height: 70,
    width: 70,
    imageSrc: "assets/img/emptyHeartIcon.png"
})
const emptyHeart3 = new icon({
    position: {
        x: 165,
        y: 10,
    },
    height: 70,
    width: 70,
    imageSrc: "assets/img/emptyHeartIcon.png"
})
