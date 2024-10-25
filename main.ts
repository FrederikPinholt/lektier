let tal = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tal = 1
    for (let index = 0; index <= tal + 1; index++) {
        tal += 1
        console.log(tal)
        if (tal > 100) {
            tal = 1
        }
    }
})
