import rollHitDice from '../src/roll-hit-dice'

test('2d6 should return 2, 4, 7, 9, 12', () => {
    const result = rollHitDice('2d6')
    expect(result.minimum).toBe(2)
    expect(result.weak).toBe(4)
    expect(result.average).toBe(7)
    expect(result.strong).toBe(9)
    expect(result.maximum).toBe(12)
})

test('2d8-2 should return 8, 11, 15, 18, 22', () => {
    const result = rollHitDice('2d8-2')
    expect(result.minimum).toBe(1)
    expect(result.weak).toBe(4)
    expect(result.average).toBe(7)
    expect(result.strong).toBe(10)
    expect(result.maximum).toBe(14)
})

test('2d8+6 should return 8, 11, 15, 18, 22', () => {
    const result = rollHitDice('2d8+6')
    expect(result.minimum).toBe(8)
    expect(result.weak).toBe(11)
    expect(result.average).toBe(15)
    expect(result.strong).toBe(18)
    expect(result.maximum).toBe(22)
})

test('8d10+40 should return 48, 66, 84, 102, 120', () => {
    const result = rollHitDice('8d10+40')
    expect(result.minimum).toBe(48)
    expect(result.weak).toBe(66)
    expect(result.average).toBe(84)
    expect(result.strong).toBe(102)
    expect(result.maximum).toBe(120)
})

test('33d20+330 should return 363, 519, 676, 833, 990', () => {
    const result = rollHitDice('33d20+330')
    expect(result.minimum).toBe(363)
    expect(result.weak).toBe(519)
    expect(result.average).toBe(676)
    expect(result.strong).toBe(833)
    expect(result.maximum).toBe(990)
})