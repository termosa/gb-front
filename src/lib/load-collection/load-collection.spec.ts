import loadCollection from '.'
import api from '../../modules/api'
import normalizeCollection from '../../modules/normalize-collection'
import { waitFor } from '@testing-library/react'
jest.mock('../../modules/api')
jest.mock('../../modules/normalize-collection')

describe('loadCollection()', () => {
  beforeEach(() => {
    ;(api as jest.Mock).mockReset()
    ;(api as jest.Mock).mockResolvedValue({ collection: 123 })
    ;(normalizeCollection as jest.Mock).mockReset()
    ;(normalizeCollection as jest.Mock).mockResolvedValue({ collectionId: 123 })
  })

  it('should call proper endpoint and normalize its response', () => {
    expect(loadCollection(123)).resolves.toEqual({ collectionId: 123 })
    expect(api).toBeCalledWith({ path: '/inventory/collections/123' })
    waitFor(() => expect(normalizeCollection).toBeCalledWith({ collection: 123 }))
  })
})
