import type { DiceCount, DieType, HitPointResults, Modifier } from './types'

function arrayFromNumber(number: number): number[] {
    return Array.from({ length: Math.floor(number) }, (_, i) => i + 1)
}

function roundToNearestHalf(num: number) {
    return Math.round(num * 2) / 2
}

function getDieAverage(dieType: DieType): number {
    const array = arrayFromNumber(dieType)
    return roundToNearestHalf(array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length)
}

function calculateMiddle(a: number, b: number): number {
    return Math.floor((a + b) / 2)
}

function calculateMinimum(diceCount: DiceCount, modifier: Modifier): number {
    const minimum = diceCount + modifier
    return minimum >= 1 ? minimum : 1
}

export default function rollHitDice(diceCount: DiceCount, dieType: DieType, modifier: Modifier): HitPointResults {
    if (Number.isNaN(diceCount) || Number.isNaN(dieType) || diceCount <= 0 || dieType <= 0) {
        throw new Error('🎲 Die type and number of dice must be positive integers.')
    }

    if (Number.isNaN(diceCount) || diceCount <= 0) {
        throw new Error('🎲 Dice count number must be a positive integer')
    }

    if (Number.isNaN(modifier)) {
        throw new TypeError('🎲 Modifier number must be an integer')
    }

    const minimum = calculateMinimum(diceCount, modifier)

    const average = Math.floor(diceCount * getDieAverage(dieType)) + modifier
    const maximum = (diceCount * dieType) + modifier

    return {
        minimum,
        weak: calculateMiddle(minimum, average),
        average,
        strong: calculateMiddle(average, maximum),
        maximum,
    }
}