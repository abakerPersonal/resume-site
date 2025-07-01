import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import App from './App'

// Mock child components
jest.mock('./components/header', () => () => <div>HeaderComponent</div>)
jest.mock('./components/summary', () => () => <div>SummaryComponent</div>)
jest.mock('./components/downloads', () => () => <div>DownloadsComponent</div>)
jest.mock('./components/skills', () => () => <div>SkillsComponent</div>)
jest.mock('./components/education', () => () => <div>EducationComponent</div>)
jest.mock('./components/experience', () => () => <div>ExperienceComponent</div>)

const mockResume = {
  header: {},
  summary: 'Summary text',
  skills: [],
  education: [],
  experience: []
}

beforeEach(() => {
  // @ts-ignore
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResume)
    })
  )
})

afterEach(() => {
  // @ts-ignore
  global.fetch.mockClear()
})

test('renders loading and then main content', async () => {
  render(<App />)
  expect(screen.getByText(/loading/i)).toBeInTheDocument()

  // Wait for the mocked components to appear
  await waitFor(() => {
    expect(screen.getByText('HeaderComponent')).toBeInTheDocument()
    expect(screen.getByText('SummaryComponent')).toBeInTheDocument()
    expect(screen.getByText('DownloadsComponent')).toBeInTheDocument()
    expect(screen.getByText('SkillsComponent')).toBeInTheDocument()
    expect(screen.getByText('EducationComponent')).toBeInTheDocument()
    expect(screen.getByText('ExperienceComponent')).toBeInTheDocument()
    expect(screen.getByText)
  })
})

test('toggles dark mode when the button is clicked', async () => {
  render(<App />)
  // Wait for main content to appear
  await waitFor(() => {
    expect(screen.getByText('HeaderComponent')).toBeInTheDocument()
  })

  const toggleButton = screen.getByRole('button', { name: /toggle dark mode/i })
  expect(toggleButton).toBeInTheDocument()

  // Initially, body should NOT have dark-mode class
  expect(document.body.classList.contains('dark-mode')).toBe(false)

  act(() => {
      toggleButton.click()
  })
  // Click the toggle button


  // Now, body should have dark-mode class
  expect(document.body.classList.contains('dark-mode')).toBe(true)

  // Click again to toggle off
  act(() => {
      toggleButton.click()
  })
  expect(document.body.classList.contains('dark-mode')).toBe(false)
})