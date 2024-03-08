import { render, screen } from '@testing-library/vue'
import TopHeading from '../../components/User/TopHeading.vue'
import { describe, expect, it} from 'vitest'

describe('ShowTickets.vue', () => {

  it('renders TempFile component with correct props', () => {
    render(TopHeading, { props: { head: 'Your Issues :' } })
    const tempFile = screen.getByTestId('temp-file')
    expect(tempFile).toBeInTheDocument()
    expect(tempFile).toHaveTextContent(')')
  })

});