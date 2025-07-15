import './buttonAction.css'

const ButtonAction = ({nameButton}) => {
  return (
    <>
        <button className='button__action'>
            { nameButton }
        </button>
    </>
  )
}
export {ButtonAction}