import { Button } from "../resuablecomps/button"

const Nav = () => {
  return (
    <div className="absolute grid place-items-center inset-0 h-fit text-x p-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
      <div className="flex items-start font-bold text-2xl italic w-full">
        <h1>Hey</h1>
        <div className="flex items-center justify-center w-full gap-8">
          <Button>About Us</Button>
          <Button>Our Work</Button>
          <Button>Contact</Button>
        </div>
      </div>

    </div>
  )
}

export default Nav
