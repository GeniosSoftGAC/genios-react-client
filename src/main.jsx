import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => console.error({ error, errorInfo })}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)
