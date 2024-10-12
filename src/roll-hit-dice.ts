import type { DiceCount, DieType, HitPointResults, Modifier } from './types'
import { HIT_DICE_REGEX } from './constants'
import { calculateMiddle, calculateMinimum, getDieAverage } from './utils'

export function parseHitDice(expression: string): {
    diceCount: DiceCount
    dieType: DieType
    modifier: Modifier
} {
    const match = expression.match(HIT_DICE_REGEX)

    if (match) {
        const diceCount: DiceCount = Number.parseInt(match[1], 10)
        const dieType: DieType = Number.parseInt(match[2], 10)
        const modifier: Modifier = match[3] ? Number.parseInt(match[3], 10) : 0

        return {
            diceCount,
            dieType,
            modifier,
        }
    }
    else {
        throw new Error(`🎲 ${expression} is not a valid Hit Dice expression`)
    }
}

export default function rollHitDice(expression: string): HitPointResults {
    const { diceCount, dieType, modifier } = parseHitDice(expression)

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
