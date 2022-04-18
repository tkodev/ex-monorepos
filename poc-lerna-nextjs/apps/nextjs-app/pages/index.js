import MyButton from '@myscope/ui--button'
import MyButtonBlue from '@myscope/ui--button-blue'
import message from '@myscope/util--get-message'

function HomePage() {
  return (
    <>
      <div>Welcome sto Next.js!</div>
      <div><MyButton>{message()}</MyButton> </div>
      <div><MyButtonBlue>{message()}</MyButtonBlue> </div>
    </>
  )
}

export default HomePage
