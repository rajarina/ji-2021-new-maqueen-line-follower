radio.onReceivedNumber(function (receivedNumber) {
    goCar = receivedNumber
    basic.showNumber(receivedNumber)
})
let goCar = 0
radio.setGroup(7)
basic.forever(function () {
    if (goCar == 1) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) >= 10) {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
            } else {
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
                    maqueen.motorStop(maqueen.Motors.M1)
                    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
                        maqueen.motorStop(maqueen.Motors.M1)
                    }
                } else {
                    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
                        maqueen.motorStop(maqueen.Motors.M2)
                        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
                            maqueen.motorStop(maqueen.Motors.M2)
                        }
                        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
                        } else {
                            maqueen.motorStop(maqueen.Motors.M2)
                        }
                    }
                }
            }
        } else {
            maqueen.motorStop(maqueen.Motors.All)
        }
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
