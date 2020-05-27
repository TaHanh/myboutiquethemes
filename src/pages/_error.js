import Link from 'next/link'
import { useRouter } from 'next/router'
import '../static/styles/error.scss'
function Error({ statusCode }) {
  const router = useRouter()
  var response
  switch (statusCode) {
    case 200: // Also display a 404 if someone requests /_error explicitly
    case 404:
      response = <h1>Page not Found!</h1>
      break
    case 500:
      response = (
        <div className='pt-5 text-center'>
          <h1>Internal Server Error</h1>
          <p>An internal server error occurred.</p>
        </div>
      )
      break
    default:
      response = (
        <div>
          <h1>HTTP {statusCode} Error</h1>
          <p>
            An <strong>HTTP {statusCode}</strong> error occurred while trying to access{' '}
          </p>
        </div>
      )
  }

  return (
    <div>
      <div className='pt-5 text-center'>
        <div class='face'>
          <div class='band'>
            <div class='red'></div>
            <div class='white'></div>
            <div class='blue'></div>
          </div>
          <div class='eyes'></div>
          <div class='dimples'></div>
          <div class='mouth'></div>
        </div>

        {response}

        <a href='/'>
          <div class='btn-err'>Home</div>
        </a>
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
