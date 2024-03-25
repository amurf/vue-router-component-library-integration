import { config } from '@vue/test-utils'
import '@testing-library/jest-dom'
import { toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

config.global.stubs = {
  teleport: true
}
