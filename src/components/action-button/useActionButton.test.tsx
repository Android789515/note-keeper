import React, { MutableRefObject } from 'react'
import { render, screen } from '@testing-library/react'
import Color from 'color'

import { Colors } from '../../types/colors'
import rgbaToHex from '../../utils/rgbaToHex'
import useActionButton from './useActionButton'

import ActionButton from './ActionButton'

const simulateActionButtonRef = (actionButton: HTMLButtonElement) => {
    return { current: actionButton } as MutableRefObject<HTMLButtonElement>
}

describe('restoreButtonColor', () => {

    it('Restoring original color after darkening the button', () => {
        render(
            <ActionButton
                text=''
                action={() => {}}
                baseColor={Colors.softWhite}
            />
        )

        const actionButton = screen.getByRole('button') as HTMLButtonElement

        const actionButtonRef = simulateActionButtonRef(actionButton)
        const { restoreButtonColor, darkenButton } = useActionButton(actionButtonRef, () => {})

        darkenButton()
        restoreButtonColor()

        const actualButtonColor = rgbaToHex(actionButton.style.backgroundColor)
        const expectedButtonColor = Color(Colors.softWhite).hex()

        expect(actualButtonColor).toEqual(expectedButtonColor)
    })

    it('Darkens the button color when focused', () => {
        render(
            <ActionButton
                text=''
                action={() => {}}
                baseColor={Colors.softWhite}
            />
        )
        const actionButton = screen.getByRole('button') as HTMLButtonElement

        const actionButtonRef = simulateActionButtonRef(actionButton)
        const { darkenButton } = useActionButton(actionButtonRef, () => {})
        actionButton.addEventListener('focus', darkenButton)

        const darkenRatio = .125
        actionButton.focus()
        actionButton.removeEventListener('focus', darkenButton)

        const actualButtonColor = rgbaToHex(actionButton.style.backgroundColor)
        const expectedButtonColor = Color(Colors.softWhite).darken(darkenRatio).hex()

        expect(actualButtonColor).toEqual(expectedButtonColor)
    })

    it('Performs the desired action (function) on click', () => {
        let wasActionPerformed = false
        const desiredFunction = () => wasActionPerformed = true

        render(
            <ActionButton
                text=''
                action={desiredFunction}
                baseColor={Colors.white}
            />
        )

        const actionButton = screen.getByRole('button') as HTMLButtonElement
        actionButton.click()

        const actual = wasActionPerformed
        const expected = true

        expect(actual).toEqual(expected)
    })
})