import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'
import Page from '../src/app/users/page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    route: '/',
    push: jest.fn(),
    pathname: '',
    query: '',
    asPath: '',
    // Adicione outras propriedades e métodos necessários aqui
  })),
}));

describe('Users Page', () => {
  it('checks if all components have been rendered no contexto do usuario', () => {
    render(<Page />)

    const header = screen.getByRole('banner')
    const imgHeader = header.children[0]
    const btnHeader = header.children[1]
    expect(header).toBeInTheDocument()
    expect(imgHeader).toBeInTheDocument()
    expect(btnHeader).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading.textContent).toBe('Para Usuários')

    const text = screen.getByText(/Conecte-se a profissionais da saúde que estudam as necessidades da comunidade LGBTQIAPN+./i)
    expect(text).toBeInTheDocument()

    const btnUsers = screen.getByRole('button', { name: /retornar/i })
    expect(btnUsers).toBeInTheDocument()

    const btnProfessionals = screen.getByRole('button', { name: /buscar atendimento/i })
    expect(btnProfessionals).toBeInTheDocument()

    const main = screen.getByRole('main');

    within(main).getByRole('img', { name: /logo/i });

    const footer = screen.getByRole('contentinfo');
    const imgFooter = footer.children[0]
    expect(footer).toBeInTheDocument()
    expect(imgFooter).toBeInTheDocument()

    const linkFacebook = screen.getByRole('img', { name: /facebook/i })
    const linkInstagram = screen.getByRole('img', { name: /instagram/i })
    const linkEmail = screen.getByRole('img', { name: /email/i })
    const linkLinkedin = screen.getByRole('img', { name: /linkedin/i })

    expect(linkFacebook).toBeInTheDocument()
    expect(linkInstagram).toBeInTheDocument()
    expect(linkEmail).toBeInTheDocument()
    expect(linkLinkedin).toBeInTheDocument()
  })
  
})