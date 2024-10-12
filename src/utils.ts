import type { DiceCount, DieType, Modifier } from './types'

export function arrayFromNumber(number: number): number[] {
    return Array.from({ length: Math.floor(number) }, (_, i) => i + 1)
}

export function roundToNearestHalf(num: number) {
    return Math.round(num * 2) / 2
}

export function getDieAverage(dieType: DieType): number {
    const array = arrayFromNumber(dieType)
    return roundToNearestHalf(array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length)
}

export function calculateMiddle(a: number, b: number): number {
    return Math.floor((a + b) / 2)
}

export function calculateMinimum(diceCount: DiceCount, modifier: Modifier): number {
    const minimum = diceCount + modifier
    return minimum >= 1 ? minimum : 1
}

