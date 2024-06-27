import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
    // Adicione outras propriedades e métodos necessários aqui
  })),
}));

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})