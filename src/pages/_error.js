import Link from 'next/link'
import { useRouter } from 'next/router'

function Error({ statusCode }) {
  const router = useRouter()
  var response
  switch (statusCode) {
    case 200: // Also display a 404 if someone requests /_error explicitly
    case 404:
      response = (
        <div>
          <div className='pt-5 text-center'>
            <h3 className='display-4'>Page Not Found</h3>
            <p>
              <a href='/'>Home</a>
            </p>
          </div>
        </div>
      )
      break
    case 500:
      response = (
        <div>
          <div className='pt-5 text-center'>
            <h3 className='display-4'>Internal Server Error</h3>
            <p>An internal server error occurred.</p>
          </div>
        </div>
      )
      break
    default:
      response = (
        <div>
          <div className='pt-5 text-center'>
            <h3 className='display-4'>HTTP {statusCode} Error</h3>
            <p>
              An <strong>HTTP {statusCode}</strong> error occurred while trying to access{' '}
            </p>
          </div>
        </div>
      )
  }

  return response
  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
