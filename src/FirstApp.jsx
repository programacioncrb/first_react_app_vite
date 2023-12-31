import PropTypes from 'prop-types'

export const FirstApp = ({title, subtitle}) => {
  return (
    <>
    <h1>{ title }</h1>   
    <p>{ subtitle }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'no hay subtitulo',
  name: 'Carlos Roberto'
}