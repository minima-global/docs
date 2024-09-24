declare global {
  interface Window {
    Android: {
      showTitleBar: () => void
      showHomeLink: () => void
    }
  }
}

export {}
